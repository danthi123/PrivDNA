import Database from "better-sqlite3-multiple-ciphers";
import path from "path";
import { mkdirSync } from "fs";

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;

let db: InstanceType<typeof Database> | null = null;

function getRateLimitDb(): InstanceType<typeof Database> {
  if (db) return db;

  const dbDir = path.join(process.cwd(), "data");
  mkdirSync(dbDir, { recursive: true });

  // Rate limit DB is unencrypted — contains only IPs and timestamps, no PII
  db = new Database(path.join(dbDir, "ratelimit.db"));

  db.pragma("journal_mode = WAL");

  const createTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS rate_limits (
      ip TEXT NOT NULL,
      timestamp INTEGER NOT NULL
    )
  `);
  createTable.run();

  const createIndex = db.prepare(
    "CREATE INDEX IF NOT EXISTS idx_rate_limits_ip ON rate_limits(ip)"
  );
  createIndex.run();

  // Clean up old entries on startup
  const cleanup = db.prepare("DELETE FROM rate_limits WHERE timestamp < ?");
  cleanup.run(Date.now() - WINDOW_MS);

  return db;
}

export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
} {
  const database = getRateLimitDb();
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  // Clean expired entries for this IP
  database
    .prepare("DELETE FROM rate_limits WHERE ip = ? AND timestamp < ?")
    .run(ip, windowStart);

  // Count requests in current window
  const row = database
    .prepare(
      "SELECT COUNT(*) as count FROM rate_limits WHERE ip = ? AND timestamp >= ?"
    )
    .get(ip, windowStart) as { count: number };

  if (row.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  // Record this request
  database
    .prepare("INSERT INTO rate_limits (ip, timestamp) VALUES (?, ?)")
    .run(ip, now);

  return { allowed: true, remaining: MAX_REQUESTS - row.count - 1 };
}
