import { NextRequest, NextResponse } from "next/server";
import { hashEmail, encryptEmail } from "@/lib/crypto";
import { addToWaitlist, getWaitlistCount } from "@/lib/db";
import { checkRateLimit } from "@/lib/rateLimit";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    // 1. Get client IP
    const cfIp = request.headers.get("cf-connecting-ip");
    const xForwardedFor = request.headers.get("x-forwarded-for");
    const ip = cfIp || (xForwardedFor ? xForwardedFor.split(",")[0].trim() : "unknown");

    // 2. Rate limit check
    const { allowed } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 3. Parse body
    const body = await request.json();
    const { email } = body;

    // 4. Validate
    if (
      typeof email !== "string" ||
      !EMAIL_REGEX.test(email) ||
      email.length > 254
    ) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 5. Normalize
    const normalized = email.toLowerCase().trim();

    // 6. Hash
    const emailHash = hashEmail(normalized);

    // 7. Encrypt
    const { encrypted, iv } = encryptEmail(normalized);

    // 8. Store
    const result = addToWaitlist(emailHash, encrypted, iv);

    // 9. Duplicate
    if (result.duplicate) {
      return NextResponse.json(
        { message: "You're already on the list!", alreadyExists: true },
        { status: 200 }
      );
    }

    // 10. Success
    return NextResponse.json(
      { message: "You're on the list!", success: true },
      { status: 201 }
    );
  } catch (error) {
    // 11. Error
    console.error("Waitlist POST error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const count = getWaitlistCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Waitlist GET error:", error);
    return NextResponse.json({ count: 0 });
  }
}
