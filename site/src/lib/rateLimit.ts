const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean up if map gets too large
  if (rateLimitMap.size > 10_000) {
    for (const [key, value] of rateLimitMap) {
      if (now > value.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  }

  // No entry or expired — create new
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  // At or over limit
  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  // Increment
  entry.count++;
  return { allowed: true, remaining: MAX_REQUESTS - entry.count };
}
