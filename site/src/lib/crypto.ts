import { createCipheriv, createDecipheriv, createHash, createHmac, randomBytes, timingSafeEqual } from "crypto";

function getKey(): Buffer {
  const key = process.env.DATABASE_KEY;
  if (!key) {
    throw new Error("DATABASE_KEY environment variable is not set");
  }
  return createHash("sha256").update(key).digest();
}

export function encryptEmail(email: string): { encrypted: string; iv: string } {
  const key = getKey();
  const iv = randomBytes(16);
  const cipher = createCipheriv("aes-256-cbc", key, iv);
  let encrypted = cipher.update(email, "utf8", "hex");
  encrypted += cipher.final("hex");
  return { encrypted, iv: iv.toString("hex") };
}

export function decryptEmail(encrypted: string, iv: string): string {
  const key = getKey();
  const decipher = createDecipheriv("aes-256-cbc", key, Buffer.from(iv, "hex"));
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

export function hashEmail(email: string): string {
  return createHash("sha256")
    .update(email.toLowerCase().trim())
    .digest("hex");
}

function getUnsubscribeSecret(): string {
  const secret = process.env.UNSUBSCRIBE_SECRET;
  if (!secret) {
    throw new Error("UNSUBSCRIBE_SECRET environment variable is not set");
  }
  return secret;
}

export function generateUnsubscribeToken(emailHash: string): string {
  return createHmac("sha256", getUnsubscribeSecret())
    .update(emailHash)
    .digest("hex");
}

export function verifyUnsubscribeToken(token: string, emailHash: string): boolean {
  const expected = generateUnsubscribeToken(emailHash);
  try {
    return timingSafeEqual(Buffer.from(token, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}

export function findEmailHashByToken(token: string, emailHashes: string[]): string | null {
  for (const hash of emailHashes) {
    if (verifyUnsubscribeToken(token, hash)) {
      return hash;
    }
  }
  return null;
}
