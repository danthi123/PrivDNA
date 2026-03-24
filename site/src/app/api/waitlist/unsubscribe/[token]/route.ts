import { NextRequest, NextResponse } from "next/server";
import { findEmailHashByToken, decryptEmail } from "@/lib/crypto";
import { getAllActiveSubscribers, markUnsubscribed } from "@/lib/db";
import { sendEmail, isMailerConfigured } from "@/lib/mailer";
import { buildUnsubscribeConfirmationEmail } from "@/lib/emailTemplate";

const STYLES = {
  bg: "#111113",
  surface: "#1a1a1f",
  accent: "#00E8C8",
  text: "#e8e8ed",
  textSecondary: "#8a8a9a",
  fontStack:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
};

function htmlPage(title: string, body: string): NextResponse {
  return new NextResponse(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — PrivDNA</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: ${STYLES.bg};
      color: ${STYLES.text};
      font-family: ${STYLES.fontStack};
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      -webkit-font-smoothing: antialiased;
    }
    .card {
      background: ${STYLES.surface};
      border-radius: 12px;
      padding: 48px 40px;
      max-width: 480px;
      width: 100%;
      text-align: center;
    }
    .logo { font-size: 20px; font-weight: 700; letter-spacing: -0.02em; margin-bottom: 32px; }
    .logo .accent { color: ${STYLES.accent}; }
    h1 { font-size: 24px; font-weight: 700; margin-bottom: 12px; letter-spacing: -0.02em; }
    p { color: ${STYLES.textSecondary}; font-size: 15px; line-height: 1.6; margin-bottom: 24px; }
    .btn {
      display: inline-block;
      background: ${STYLES.accent};
      color: ${STYLES.bg};
      font-weight: 600;
      font-size: 15px;
      padding: 12px 32px;
      border: none;
      border-radius: 999px;
      cursor: pointer;
      text-decoration: none;
      transition: transform 0.2s;
    }
    .btn:hover { transform: scale(1.03); }
    .back-link {
      display: inline-block;
      margin-top: 24px;
      color: ${STYLES.textSecondary};
      font-size: 13px;
      text-decoration: underline;
    }
    .tagline { color: ${STYLES.accent}; font-style: italic; font-size: 12px; margin-top: 32px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">Priv<span class="accent">DNA</span></div>
    ${body}
    <p class="tagline">Privacy is not a feature. It's the architecture.</p>
  </div>
</body>
</html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

function resolveToken(token: string): string | null {
  const subscribers = getAllActiveSubscribers();
  const hashes = subscribers.map((s) => s.email_hash);
  return findEmailHashByToken(token, hashes);
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const emailHash = resolveToken(token);

  if (!emailHash) {
    return htmlPage(
      "Invalid Link",
      `<h1>Invalid or expired link.</h1>
       <p>This unsubscribe link is no longer valid.</p>
       <a href="https://privdna.com" class="back-link">Back to PrivDNA</a>`
    );
  }

  return htmlPage(
    "Unsubscribe",
    `<h1>Unsubscribe?</h1>
     <p>Are you sure you want to unsubscribe from the PrivDNA waitlist?</p>
     <form method="POST">
       <button type="submit" class="btn">Yes, unsubscribe me</button>
     </form>
     <a href="https://privdna.com" class="back-link">No, take me back</a>`
  );
}

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const subscribers = getAllActiveSubscribers();
  const hashes = subscribers.map((s) => s.email_hash);
  const emailHash = findEmailHashByToken(token, hashes);

  if (!emailHash) {
    return htmlPage(
      "Invalid Link",
      `<h1>Invalid or expired link.</h1>
       <p>This unsubscribe link is no longer valid. You may have already unsubscribed.</p>
       <a href="https://privdna.com" class="back-link">Back to PrivDNA</a>`
    );
  }

  const updated = markUnsubscribed(emailHash);

  if (!updated) {
    return htmlPage(
      "Already Unsubscribed",
      `<h1>Already unsubscribed.</h1>
       <p>You were already removed from the waitlist.</p>
       <a href="https://privdna.com" class="back-link">Back to PrivDNA</a>`
    );
  }

  // Send unsubscribe confirmation email (fire and forget)
  if (isMailerConfigured()) {
    const subscriber = subscribers.find((s) => s.email_hash === emailHash);
    if (subscriber) {
      try {
        const email = decryptEmail(subscriber.email_encrypted, subscriber.email_iv);
        const { html, text } = buildUnsubscribeConfirmationEmail();
        sendEmail(email, "You've been unsubscribed — PrivDNA", html, text).catch((err) =>
          console.error("Failed to send unsubscribe confirmation:", err)
        );
      } catch (err) {
        console.error("Failed to decrypt email for unsubscribe confirmation:", err);
      }
    }
  }

  return htmlPage(
    "Unsubscribed",
    `<h1>You've been removed.</h1>
     <p>Your email has been unsubscribed from the PrivDNA waitlist.</p>
     <p>If this was a mistake, you can sign up again at any time.</p>
     <a href="https://privdna.com" class="btn">Back to PrivDNA</a>`
  );
}
