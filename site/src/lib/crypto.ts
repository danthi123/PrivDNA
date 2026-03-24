import {
  createCipheriv,
  createDecipheriv,
  createHmac,
  randomBytes,
} from "crypto";

// --- Key management ---

function getEmailEncryptionKey(): Buffer {
  const key = process.env.EMAIL_ENCRYPTION_KEY;
  if (!key) {
    throw new Error("EMAIL_ENCRYPTION_KEY environment variable is not set");
  }
  if (!/^[0-9a-f]{64}$/i.test(key)) {
    throw new Error(
      "EMAIL_ENCRYPTION_KEY must be exactly 64 hex characters. Generate with: openssl rand -hex 32"
    );
  }
  return Buffer.from(key, "hex");
}

function getHashKey(): Buffer {
  // Use EMAIL_ENCRYPTION_KEY as HMAC key for email hashing.
  // This prevents offline dictionary attacks against unsalted SHA-256 hashes.
  return getEmailEncryptionKey();
}

// --- AES-256-GCM encryption (authenticated) ---

export function encryptEmail(email: string): {
  encrypted: string;
  iv: string;
  authTag: string;
} {
  const key = getEmailEncryptionKey();
  const iv = randomBytes(12); // 96-bit IV is recommended for GCM
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  let encrypted = cipher.update(email, "utf8", "hex");
  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag().toString("hex");
  return { encrypted, iv: iv.toString("hex"), authTag };
}

export function decryptEmail(
  encrypted: string,
  iv: string,
  authTag: string
): string {
  const key = getEmailEncryptionKey();
  const decipher = createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(iv, "hex")
  );
  decipher.setAuthTag(Buffer.from(authTag, "hex"));
  let decrypted = decipher.update(encrypted, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// --- HMAC-SHA256 email hashing (keyed, not dictionary-attackable) ---

export function hashEmail(email: string): string {
  return createHmac("sha256", getHashKey())
    .update(email.toLowerCase().trim())
    .digest("hex");
}

// --- Unsubscribe tokens (random, stored in DB) ---

export function generateUnsubscribeToken(): string {
  return randomBytes(32).toString("hex");
}
