# PrivDNA — Website

**Your genome. Your hands. No copies.**

This is the Next.js application powering [privdna.com](https://privdna.com) — the marketing site, waitlist signup system, and email confirmation flow for PrivDNA.

For the full project overview, whitepaper, technical manifest, and deployment instructions, see the [root README](../README.md).

## Quick Start

```bash
npm install

cp .env.example .env.local
# Edit .env.local — at minimum set DATABASE_KEY (generate with: openssl rand -hex 32)
# SMTP vars are optional for local dev — signups work without email sending

npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key Directories

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | Single-page scroll composition |
| `src/app/api/waitlist/` | Encrypted signup endpoint + unsubscribe flow |
| `src/components/` | All section components (Hero, TheProblem, etc.) |
| `src/components/three/` | 3D DNA helix with drag-to-spin interaction |
| `src/lib/` | Database, crypto, mailer, rate limiting |
| `public/.well-known/` | security.txt (RFC 9116) |

## License

[MIT](LICENSE)
