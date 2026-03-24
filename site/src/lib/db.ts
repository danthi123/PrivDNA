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

  const dbDir = path.join(process.cwd(), "data");
  mkdirSync(dbDir, { recursive: true });

  const dbPath = path.join(dbDir, "newsletter.db");
  db = new Database(dbPath);

  db.pragma(`key='${key}'`);

  db.exec(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email_hash TEXT UNIQUE NOT NULL,
      email_encrypted TEXT NOT NULL,
      email_iv TEXT NOT NULL,
      created_at TEXT NOT NULL,
      source TEXT DEFAULT 'website'
    );
  `);

  // Migration: add unsubscribed_at column if missing
  const columns = db.pragma("table_info(waitlist)") as Array<{ name: string }>;
  const hasUnsubscribedAt = columns.some((col) => col.name === "unsubscribed_at");
  if (!hasUnsubscribedAt) {
    db.exec("ALTER TABLE waitlist ADD COLUMN unsubscribed_at TEXT DEFAULT NULL");
  }

  return db;
}

export function addToWaitlist(
  emailHash: string,
  emailEncrypted: string,
  emailIv: string,
  source: string = "website"
): { success: boolean; duplicate: boolean } {
  const database = getDb();

  try {
    const stmt = database.prepare(
      `INSERT INTO waitlist (email_hash, email_encrypted, email_iv, created_at, source)
       VALUES (?, ?, ?, ?, ?)`
    );
    stmt.run(emailHash, emailEncrypted, emailIv, new Date().toISOString(), source);
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
    .prepare("SELECT COUNT(*) as count FROM waitlist WHERE unsubscribed_at IS NULL")
    .get() as { count: number };
  return row.count;
}

export interface WaitlistSubscriber {
  id: number;
  email_hash: string;
  email_encrypted: string;
  email_iv: string;
}

export function getAllActiveSubscribers(): WaitlistSubscriber[] {
  const database = getDb();
  return database
    .prepare(
      "SELECT id, email_hash, email_encrypted, email_iv FROM waitlist WHERE unsubscribed_at IS NULL"
    )
    .all() as WaitlistSubscriber[];
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
