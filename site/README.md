# PrivDNA

**Your genome. Your hands. No copies.**

PrivDNA is a privacy-sovereign whole genome sequencing service. This is the open source codebase for [privdna.com](https://privdna.com) — our marketing site and waitlist signup system.

## Why Open Source?

If we're asking you to trust us with your DNA, you should be able to verify exactly how we handle your data. This codebase is fully auditable. There are no hidden telemetry endpoints, no cloud sync, no data exfiltration. Verify it yourself.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **3D:** Three.js + React Three Fiber
- **Animation:** GSAP (ScrollTrigger + SplitText) + Lenis
- **Styling:** Tailwind CSS 4
- **Database:** SQLCipher (AES-256 encrypted SQLite)
- **Analytics:** Rybbit (self-hosted, cookieless, no PII)
- **Deployment:** Docker Compose + Cloudflare Tunnel

## Security

- All waitlist emails are **encrypted at rest** with AES-256 via SQLCipher
- Email addresses are **hashed** (SHA-256) for deduplication without decrypting
- **No cookies** are set. No third-party tracking scripts.
- The entire application runs behind a **Cloudflare Tunnel** — no ports exposed to the public internet
- Database encryption keys are loaded from environment variables, never committed to the repository

## Local Development

```bash
# Clone the repository
git clone https://github.com/privdna/privdna.com.git
cd privdna.com/site

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local and set DATABASE_KEY (generate with: openssl rand -hex 32)

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Deployment

```bash
# From project root
cp .env.example .env
# Fill in all values in .env

docker compose up -d
```

This starts the Next.js site, Rybbit analytics, and Cloudflare Tunnel. Configure your Cloudflare Tunnel to route `privdna.com` to the `privdna-web` container and `analytics.privdna.com` to `rybbit-server`.

## Contributing

We welcome contributions. Please open an issue before submitting a pull request for significant changes.

## License

[MIT](LICENSE)
