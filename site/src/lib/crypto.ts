import { createCipheriv, createDecipheriv, createHash, randomBytes } from "crypto";

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
