import Database from "better-sqlite3-multiple-ciphers";
import path from "path";
import { mkdirSync } from "fs";

let db: InstanceType<typeof Database> | null = null;

function getDb(): InstanceType<typeof Database> {
  if (db) return db;

  const key = process.env.DATABASE_KEY;
  if (!key) {
    throw new Error("DATABASE_KEY environment variable is not set");
  }
  if (!/^[0-9a-f]{64}$/i.test(key)) {
    throw new Error(
      "DATABASE_KEY must be exactly 64 hex characters (256 bits). Generate with: openssl rand -hex 32"
    );
  }

  const dbDir = path.join(process.cwd(), "data");
  mkdirSync(dbDir, { recursive: true });

  const dbPath = path.join(dbDir, "newsletter.db");
  db = new Database(dbPath);

  // Use hex key format to avoid SQL injection via PRAGMA interpolation
  db.pragma(`key="x'${key}'"`);

  db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email_hash TEXT UNIQUE NOT NULL,
      email_encrypted TEXT NOT NULL,
      email_iv TEXT NOT NULL,
      email_auth_tag TEXT NOT NULL DEFAULT '',
      unsubscribe_token TEXT UNIQUE NOT NULL,
      created_at TEXT NOT NULL,
      source TEXT DEFAULT 'website',
      unsubscribed_at TEXT DEFAULT NULL
    );
  `);

  // Index for fast unsubscribe token lookup (O(1) instead of O(N))
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_waitlist_unsub_token
    ON waitlist(unsubscribe_token) WHERE unsubscribed_at IS NULL;
  `);

  // Partial index for active subscriber count queries
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_waitlist_active
    ON waitlist(unsubscribed_at) WHERE unsubscribed_at IS NULL;
  `);

  return db;
}

export function addToWaitlist(
  emailHash: string,
  emailEncrypted: string,
  emailIv: string,
  emailAuthTag: string,
  unsubscribeToken: string,
  source: string = "website"
): { success: boolean; duplicate: boolean } {
  const database = getDb();

  try {
    const stmt = database.prepare(
      `INSERT INTO waitlist (email_hash, email_encrypted, email_iv, email_auth_tag, unsubscribe_token, created_at, source)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    );
    stmt.run(
      emailHash,
      emailEncrypted,
      emailIv,
      emailAuthTag,
      unsubscribeToken,
      new Date().toISOString(),
      source
    );
    return { success: true, duplicate: false };
  } catch (error: unknown) {
    if (
      error instanceof Error &&
      error.message.includes("UNIQUE constraint failed")
    ) {
      return { success: false, duplicate: true };
    }
    throw error;
  }
}

export function getWaitlistCount(): number {
  const database = getDb();
  const row = database
    .prepare(
      "SELECT COUNT(*) as count FROM waitlist WHERE unsubscribed_at IS NULL"
    )
    .get() as { count: number };
  return row.count;
}

export interface WaitlistSubscriber {
  id: number;
  email_hash: string;
  email_encrypted: string;
  email_iv: string;
  email_auth_tag: string;
  unsubscribe_token: string;
}

// Find a subscriber by their unsubscribe token — O(1) indexed lookup
export function findByUnsubscribeToken(
  token: string
): WaitlistSubscriber | null {
  const database = getDb();
  const row = database
    .prepare(
      "SELECT id, email_hash, email_encrypted, email_iv, email_auth_tag, unsubscribe_token FROM waitlist WHERE unsubscribe_token = ? AND unsubscribed_at IS NULL"
    )
    .get(token) as WaitlistSubscriber | undefined;
  return row ?? null;
}

export function markUnsubscribed(emailHash: string): boolean {
  const database = getDb();
  const result = database
    .prepare(
      "UPDATE waitlist SET unsubscribed_at = ? WHERE email_hash = ? AND unsubscribed_at IS NULL"
    )
    .run(new Date().toISOString(), emailHash);
  return result.changes > 0;
}

export function isSubscribed(emailHash: string): boolean {
  const database = getDb();
  const row = database
    .prepare(
      "SELECT COUNT(*) as count FROM waitlist WHERE email_hash = ? AND unsubscribed_at IS NULL"
    )
    .get(emailHash) as { count: number };
  return row.count > 0;
}
