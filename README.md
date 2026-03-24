# PrivDNA

**Your genome. Your hands. No copies.**

PrivDNA is designing a first-of-its-kind privacy-sovereign whole genome sequencing (WGS) service to operate from a physical storefront in New York City. This repository contains everything: the founding whitepaper, technical infrastructure manifest, and the open-source website and waitlist system for [privdna.com](https://privdna.com).

## What Is PrivDNA?

A physical genomics lab where your complete genome is sequenced at clinical-grade accuracy (30x coverage, >99.9% Q30), processed entirely on air-gapped servers that never touch the internet, delivered to you on a FIPS 140-3 certified encrypted USB drive, and destroyed on-premise under NIST SP 800-88 Rev. 2 standards -- witnessed by you through a glass-walled laboratory.

**We deliver raw data (BAM, VCF, gVCF files). We do not provide medical interpretation.** Customers who want clinical analysis are referred to independent, pre-vetted genetic counselors who operate under their own licenses.

## Why This Exists

In March 2025, 23andMe filed for bankruptcy and sold 15 million customers' genetic data for $305 million through a legal structure that bypassed re-consent requirements. A class-action lawsuit against Nebula Genomics alleges the "privacy-first" company shared genetic information with Meta, Google, and Microsoft via embedded tracking tools. Ancestry was acquired by Blackstone for $4.7 billion, with analysts noting the implied value of ~$250 per customer genome.

The pattern is consistent: companies that hold centralized genetic databases face irresistible economic pressure to monetize that data regardless of privacy commitments. PrivDNA eliminates this risk by never retaining data in the first place.

## Why Open Source?

If we're asking you to trust us with your DNA, you should be able to verify exactly how we handle your data. This repository is fully auditable:

- The **bioinformatics pipeline** (Nextflow/nf-core sarek + GATK + BWA-MEM2) that processes genomes is specified with exact versions and licenses in the [Technical Manifest](technical-manifest.md)
- The **website and waitlist system** in `site/` is the actual code running at privdna.com
- The **waitlist signup API** encrypts your email with AES-256 via SQLCipher before it touches disk. Emails are SHA-256 hashed for deduplication so we never need to decrypt existing records to check for duplicates.
- There are **no hidden telemetry endpoints, no cloud sync calls, and no third-party tracking scripts**. Analytics are handled by self-hosted [Rybbit](https://github.com/rybbit-io/rybbit) (cookieless, no PII).

Verify it yourself. That's the point.

## Repository Structure

```
PrivDNA/
├── whitepaper.md              # Full founding document and investment prospectus
├── technical-manifest.md      # Hardware BOM, server architecture, pipeline specs
├── docker-compose.yml         # Production deployment (site + Rybbit + Cloudflare Tunnel)
├── .env.example               # Environment variable template (no secrets)
├── site/                      # Website and waitlist application
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx       # Single-page scroll composition
│   │   │   ├── robots.ts      # SEO robots.txt generation
│   │   │   ├── sitemap.ts     # SEO sitemap.xml generation
│   │   │   └── api/
│   │   │       └── waitlist/
│   │   │           ├── route.ts               # Encrypted signup + confirmation email
│   │   │           └── unsubscribe/[token]/
│   │   │               └── route.ts           # HMAC-verified unsubscribe flow
│   │   ├── components/        # All section components (Hero, TheProblem, etc.)
│   │   │   └── three/         # 3D DNA helix with drag-to-spin interaction
│   │   └── lib/
│   │       ├── db.ts          # SQLCipher encrypted database connection
│   │       ├── crypto.ts      # AES-256 encryption + HMAC unsubscribe tokens
│   │       ├── mailer.ts      # Nodemailer SMTP transport (Proton Mail)
│   │       ├── emailTemplate.ts # Dark-themed HTML/text email templates
│   │       └── rateLimit.ts   # In-memory rate limiter
│   ├── public/
│   │   └── .well-known/
│   │       └── security.txt   # RFC 9116 security contact
│   ├── Dockerfile             # Multi-stage production build
│   ├── .env.example           # Dev environment template
│   └── LICENSE                # MIT
└── docs/
    └── plans/                 # Design documents
```

## The Documents

### [Whitepaper](whitepaper.md) (~9,700 words)

The full founding document covering:

- **The Problem** -- 23andMe's collapse, the data monetization pattern, consumer trust at historic lows (70% concerned per Deloitte 2025)
- **The Solution** -- Three pillars: physical transparency (glass-walled lab), cryptographic verifiability (open-source pipeline), zero data retention (NIST 800-88 destruction)
- **Market Analysis** -- $2.12B WGS market (2024) growing at 22.2% CAGR. No existing competitor offers a physical storefront. Every DTC genomics company is mail-order only.
- **Technical Architecture** -- Illumina NextSeq 2000, dual AMD EPYC 9654 air-gapped server, NVIDIA A100 GPU acceleration, 92TB NVMe RAID-10
- **Financial Model** -- $981K startup capital, $3,500/genome pricing, $2,340 variable cost (with volume discounts), break-even at 50 genomes/month, profitability by Year 3
- **Regulatory Framework** -- CLIA high-complexity certification, NYSDOH CLEP permit, CAP accreditation, HIPAA compliance
- **$1.25M seed raise** covering equipment, buildout, 12 months operational runway

### [Technical Manifest](technical-manifest.md) (~5,200 words)

Complete hardware and software specification:

- **Hardware BOM** with part numbers and pricing ($555K in equipment -- sequencer, compute server, network, power, delivery media)
- **Server architecture** -- 2x EPYC 9654 (192 cores), 1TB DDR5, 24x Samsung PM9A3 NVMe in RAID-10, NVIDIA A100 80GB
- **4-layer air-gap enforcement** -- physical (no cables), logical (no WAN/DNS/DHCP), BIOS (Secure Boot, USB disabled), controlled data transfer protocol
- **Open-source pipeline** -- BCL Convert, BWA-MEM2, GATK 4.6.1, samtools, FastQC, MultiQC, orchestrated by Nextflow/nf-core sarek
- **Data destruction** -- NIST SP 800-88 Rev. 2 Purge via cryptographic erasure on self-encrypting NVMe drives. Under 5 seconds. Certificate of Destruction generated.
- **Customer delivery** -- Kingston IronKey D500S (FIPS 140-3 Level 3, hardware-encrypted, PIN-based, brute-force self-destruct)

## Website Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| 3D | Three.js (custom DNA double helix with particle system) |
| Animation | GSAP (ScrollTrigger) + Lenis smooth scroll |
| Styling | Tailwind CSS |
| Database | SQLCipher (AES-256 encrypted SQLite) |
| Analytics | Rybbit (self-hosted, cookieless, no PII) |
| Deployment | Docker Compose + Cloudflare Tunnel |

## Waitlist Security

The waitlist signup is intentionally over-engineered for a mailing list because it's a statement about how we handle data:

1. **Encryption at rest** -- Every email is AES-256 encrypted via SQLCipher before being written to disk. The database file is unreadable without the encryption key.
2. **Hash-based deduplication** -- Emails are SHA-256 hashed for duplicate checking. We never decrypt existing records to check if you've already signed up.
3. **Confirmation emails** -- On signup, a confirmation email is sent via self-hosted Proton Mail SMTP. No third-party email services.
4. **HMAC unsubscribe tokens** -- Unsubscribe links use HMAC-SHA256 tokens derived from the email hash. No tokens stored in the database. Timing-safe comparison prevents enumeration attacks.
5. **Soft-delete unsubscribe** -- Unsubscribed emails are marked with a timestamp rather than deleted, for CAN-SPAM compliance. They are excluded from all active queries.
6. **No cookies** -- Zero cookies set. No tracking pixels. No third-party scripts.
7. **Rate limiting** -- In-memory per-IP rate limiting on the signup endpoint.
8. **No exposed ports** -- The entire stack runs behind a Cloudflare Tunnel. The server has no open ports.
9. **Secrets management** -- All keys (database encryption, SMTP credentials, unsubscribe HMAC secret) loaded from environment variables, never committed to the repository.

## Local Development

```bash
git clone https://github.com/danthi123/PrivDNA.git
cd PrivDNA/site

npm install

cp .env.example .env.local
# Edit .env.local -- set DATABASE_KEY (generate with: openssl rand -hex 32)

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
- **rybbit-server** -- Self-hosted analytics (with Postgres + ClickHouse backends)
- **cloudflared** -- Cloudflare Tunnel (routes privdna.com and analytics.privdna.com)

All persistent data is stored via bind mounts under the `DATA_DIR` path configured in `.env`:

```
$DATA_DIR/
├── web/              # SQLCipher waitlist database
├── rybbit/
│   ├── postgres/     # Rybbit analytics metadata
│   └── clickhouse/   # Rybbit analytics events
```

Configure your Cloudflare Tunnel to route:
- `privdna.com` &rarr; `privdna-web:3000`
- `analytics.privdna.com` &rarr; `rybbit-server:3002`

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
