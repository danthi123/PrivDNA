# PrivDNA

**Your genome. Your hands. No copies.**

PrivDNA is designing a first-of-its-kind privacy-sovereign whole genome sequencing (WGS) service to operate from a physical storefront in New York City. This repository contains everything: the founding whitepaper, technical infrastructure manifest, and the open-source website and waitlist system for [privdna.com](https://privdna.com).

## What Is PrivDNA?

A physical genomics lab where your complete genome is sequenced at clinical-grade accuracy (30x coverage, ≥90% bases above Q30), processed entirely on air-gapped servers that never touch the internet, delivered to you on a FIPS 140-3 certified encrypted USB drive, and destroyed on-premise under NIST SP 800-88 Rev. 2 standards inside a glass-walled laboratory. The customer experience is two brief visits spanning 4-6 business days — ~25 minutes for intake and sample collection, then ~30 minutes for data delivery and witnessed destruction. The ~38-hour sequencing run and downstream bioinformatics happen between visits.

**We deliver raw data (BAM, VCF, gVCF files). We do not provide medical interpretation.** Customers who want clinical analysis are referred to independent, pre-vetted genetic counselors who operate under their own licenses.

## Why This Exists

In March 2025, 23andMe filed for bankruptcy and sold approximately 15 million customers' genetic data for $305 million through a bankruptcy process that critics argue circumvented meaningful re-consent requirements. A class-action lawsuit against Nebula Genomics alleges the "privacy-first" company shared genetic information with Meta, Google, and Microsoft via embedded tracking tools. Ancestry was acquired by Blackstone in 2020 for $4.7 billion, with analysts noting the implied enterprise value of roughly $261 per DNA customer.

The pattern is consistent: companies that hold centralized genetic databases face irresistible economic pressure to monetize that data regardless of privacy commitments. PrivDNA eliminates this risk by never retaining data in the first place.

## Why Open Source?

If we're asking you to trust us with your DNA, you should be able to verify exactly how we handle your data. This repository is fully auditable:

- The **bioinformatics pipeline** (Nextflow/nf-core sarek + GATK + BWA-MEM2) that processes genomes is specified with exact versions and licenses in the [Technical Manifest](technical-manifest.md)
- The **website and waitlist system** in `site/` is the actual code running at privdna.com
- The **waitlist signup API** encrypts your email with AES-256-GCM (authenticated encryption) before it touches disk. The entire database is additionally encrypted via SQLCipher. Emails are HMAC-SHA256 hashed (keyed, not dictionary-attackable) for deduplication so we never need to decrypt existing records to check for duplicates.
- There are **no hidden telemetry endpoints, no cloud sync calls, and no third-party tracking scripts**. Analytics are handled by self-hosted [Rybbit](https://github.com/rybbit-io/rybbit) (cookieless, no PII).

Verify it yourself. That's the point.

## Repository Structure

```
PrivDNA/
├── whitepaper.md              # Full founding document and investment prospectus
├── technical-manifest.md      # Hardware BOM, server architecture, pipeline specs
├── docker-compose.yml         # Production deployment (site + Rybbit + Cloudflare Tunnel)
├── .env.example               # Environment variable template (no secrets)
├── brand/                     # Logo, social headers, storefront concept (source files)
├── site/                      # Website and waitlist application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx       # Single-page scroll composition
│   │   │   ├── layout.tsx     # Root layout, fonts, metadata, analytics
│   │   │   ├── robots.ts      # SEO robots.txt generation
│   │   │   ├── sitemap.ts     # SEO sitemap.xml generation
│   │   │   └── api/
│   │   │       └── waitlist/
│   │   │           ├── route.ts               # Encrypted signup + confirmation email
│   │   │           └── unsubscribe/[token]/
│   │   │               └── route.ts           # Token-verified unsubscribe flow
│   │   ├── components/        # All section components (Hero, TheProblem, etc.)
│   │   │   ├── three/         # 3D DNA helix with drag-to-spin interaction
│   │   │   ├── ScrollToTop.tsx # Floating scroll-to-top button
│   │   │   └── ...
│   │   └── lib/
│   │       ├── db.ts          # SQLCipher encrypted database + schema
│   │       ├── crypto.ts      # AES-256-GCM encryption + HMAC-SHA256 hashing
│   │       ├── mailer.ts      # Nodemailer SMTP transport
│   │       ├── emailTemplate.ts # Dark-themed HTML/text email templates
│   │       └── rateLimit.ts   # SQLite-backed persistent rate limiter
│   ├── public/
│   │   ├── storefront-concept.webp  # AI-generated lab concept render
│   │   ├── apple-touch-icon.png     # Touch icon
│   │   └── icon-512.png            # OG/social image
│   ├── Dockerfile             # Multi-stage production build
│   ├── .env.example           # Dev environment template
│   └── LICENSE                # MIT
└── docs/
    └── plans/                 # Design documents
```

## The Documents

### [Whitepaper](whitepaper.md) (~14,500 words)

The full founding document covering:

- **The Problem** -- 23andMe's collapse, the data monetization pattern, consumer trust at historic lows (70% concerned per Deloitte 2025)
- **The Solution** -- Three pillars: physical transparency (glass-walled lab), cryptographic verifiability (open-source pipeline), zero data retention (NIST 800-88 destruction)
- **Market Analysis** -- $2.12B WGS market (2024) growing at 22.2% CAGR. No existing competitor offers a physical storefront. Every DTC genomics company is mail-order only.
- **Technical Architecture** -- Element Biosciences AVITI, dual AMD EPYC 9654 air-gapped server, NVIDIA L40S GPU acceleration, 30TB usable NVMe RAID-10
- **Financial Model** -- $880K startup capital, $3,500/genome pricing, $1,016 variable cost, break-even at 29 genomes/month, profitability by Year 3
- **Regulatory Framework** -- CLIA high-complexity certification, NYSDOH CLEP permit, CAP accreditation, HIPAA compliance
- **$1.25M seed raise** covering equipment, buildout, 12 months operational runway

### [Technical Manifest](technical-manifest.md) (~6,100 words)

Complete hardware and software specification:

- **Hardware BOM** with part numbers and pricing ($439K in equipment -- sequencer, compute server, network, power, delivery media)
- **Server architecture** -- 2x EPYC 9654 (192 cores), 1TB DDR5, 8x Samsung PM9A3 7.68TB NVMe in RAID-10, NVIDIA L40S 48GB
- **4-layer air-gap enforcement** -- physical (no cables), logical (no WAN/DNS/DHCP), BIOS (Secure Boot, USB disabled), controlled data transfer protocol
- **Open-source pipeline** -- bases2fastq (Element Biosciences), BWA-MEM2, GATK 4.6.1, samtools, FastQC, MultiQC, orchestrated by Nextflow/nf-core sarek
- **Data destruction** -- NIST SP 800-88 Rev. 2 Purge via cryptographic erasure on self-encrypting NVMe drives. Under 5 seconds. Certificate of Destruction generated.
- **Customer delivery** -- Kingston IronKey D500S (FIPS 140-3 Level 3, hardware-encrypted, PIN-based, brute-force self-destruct)

## Website Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| 3D | Three.js / React Three Fiber (custom DNA double helix with particle system) |
| Animation | GSAP (ScrollTrigger) + Lenis smooth scroll |
| Styling | Tailwind CSS |
| Database | SQLCipher (AES-256 encrypted SQLite) |
| Email encryption | AES-256-GCM (authenticated, per-record, separate key from DB) |
| Email hashing | HMAC-SHA256 (keyed, not dictionary-attackable) |
| Analytics | Rybbit (self-hosted, cookieless, no PII) |
| Deployment | Docker Compose + Cloudflare Tunnel |

## Waitlist Security

The waitlist signup is intentionally over-engineered for a mailing list because it's a statement about how we handle data:

1. **Two-layer encryption at rest** -- Every email is AES-256-GCM encrypted (with authentication tag) using a dedicated `EMAIL_ENCRYPTION_KEY` before being written to disk. The database itself is additionally encrypted via SQLCipher using a separate `DATABASE_KEY`. Compromise of either key alone is insufficient to decrypt stored emails.
2. **Keyed hash deduplication** -- Emails are HMAC-SHA256 hashed using a secret key for duplicate checking. Unlike plain SHA-256, keyed hashes are not vulnerable to offline dictionary attacks if the hash column is ever exposed.
3. **Confirmation emails** -- On signup, a confirmation email is sent via self-hosted Proton Mail SMTP. No third-party email services.
4. **Random unsubscribe tokens** -- Each subscriber receives a cryptographically random 32-byte token stored in an indexed database column. Unsubscribe lookups are O(1) via index, not O(N) HMAC iteration. Tokens are validated against format (64 hex chars) before any database query.
5. **Soft-delete unsubscribe** -- Unsubscribed emails are marked with a timestamp rather than deleted, for CAN-SPAM compliance. They are excluded from all active queries.
6. **No cookies** -- Zero cookies set. No tracking pixels. No third-party scripts.
7. **Rate limiting** -- SQLite-backed persistent per-IP rate limiting on both signup and unsubscribe endpoints. Survives server restarts.
8. **No exposed ports** -- The entire stack runs behind a Cloudflare Tunnel. The server has no open ports.
9. **Secrets management** -- All keys (database encryption, email encryption, SMTP credentials) loaded from environment variables, never committed to the repository. Keys are validated at startup to ensure sufficient entropy.
10. **Security headers** -- Content-Security-Policy, X-Frame-Options (DENY), Referrer-Policy, Permissions-Policy served on all responses. `X-Powered-By` header suppressed.

## Local Development

```bash
git clone https://github.com/danthi123/PrivDNA.git
cd PrivDNA/site

npm install

cp .env.example .env.local
# Edit .env.local -- set both keys (generate each with: openssl rand -hex 32)
#   DATABASE_KEY=<64 hex chars>
#   EMAIL_ENCRYPTION_KEY=<64 hex chars — must be different from DATABASE_KEY>

npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Deployment

```bash
cd PrivDNA

# Configure environment
cp .env.example .env
# Fill in all values -- see comments in .env.example for generation commands

# Start everything
docker compose up -d
```

This starts:
- **privdna-web** -- The Next.js site and waitlist API
- **rybbit-backend** + **rybbit-client** -- Self-hosted analytics (with Postgres + ClickHouse backends)
- **cloudflared** -- Cloudflare Tunnel (routes your domains to the containers)

All persistent data is stored via bind mounts under the `DATA_DIR` path configured in `.env`:

```
$DATA_DIR/
├── web/              # SQLCipher waitlist database
├── rybbit/
│   ├── postgres/     # Rybbit user/config data
│   └── clickhouse/   # Rybbit analytics events
```

Configure your Cloudflare Tunnel to route:
- `yourdomain.com` &rarr; `privdna-web:3000`
- `analytics.yourdomain.com` &rarr; `rybbit-client:3002`

## Cloudflare Configuration

The following Cloudflare features are enabled for defense-in-depth:

- **HSTS** -- Max-age 12 months, includeSubDomains, preload
- **Block AI bots** -- Blocks known AI training crawlers
- **AI Labyrinth** -- Traps scrapers ignoring robots.txt
- **Bot Fight Mode** -- JS-based bot detection
- **0-RTT** -- Faster TLS resumption for returning visitors
- **Speed Brain** -- Speculative prefetch
- **Early Hints** -- 103 responses for preloading
- **Real User Monitoring** -- Core Web Vitals from real visitors
- **DNSSEC** -- Enabled
- **security.txt** -- Served by Cloudflare edge (not from the application)
- **WAF rule** -- `X-Robots-Tag: noindex, nofollow, noarchive` on the analytics subdomain

## Current Status

This is a pre-launch project. The storefront does not yet exist. The website serves as a waitlist and showcase of the concept. We are:

- [ ] Seeking seed funding ($1.25M)
- [ ] Identifying NYC retail/lab space
- [ ] Beginning CLIA/CLEP regulatory applications
- [ ] Building the referral partner network

If you're interested in investing, partnering, or just following along, [join the waitlist](https://privdna.com) or open an issue.

## Contributing

We welcome contributions to the website and documentation. Please open an issue before submitting a pull request for significant changes.

## License

The website code in `site/` is [MIT licensed](LICENSE).

The whitepaper and technical manifest are provided for informational purposes. See the legal disclaimer in the whitepaper for details.
