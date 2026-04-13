# PrivDNA Website Design Document

**Date:** 2026-03-23
**Status:** Approved
**Approach:** Next.js + Three.js + SQLCipher (Option A)

---

## 1. Overview

A single-page scrolling marketing site for PrivDNA — a privacy-sovereign whole genome sequencing service. The site serves as a showcase for investors, scientists, and everyday consumers, with a waitlist/newsletter signup as the primary conversion action.

**Design reference:** OFF+BRAND (itsoffbrand.com) — dark-mode-first, single accent color, GSAP/Lenis scroll animations, Three.js WebGL hero elements, split-text reveals, custom cursor, progressive disclosure.

**Core requirements:**
- Entire codebase is open source (MIT license)
- Waitlist emails encrypted at rest (AES-256 via SQLCipher)
- Deployed via Docker Compose behind Cloudflare Tunnel
- Rybbit analytics (self-hosted, separate from app repo) for cookieless, privacy-respecting tracking
- No cookies, no third-party scripts, no PII leakage

---

## 2. Site Structure

Single-page scroll with 8 distinct sections:

| # | Section | Type | Approx Height |
|---|---------|------|---------------|
| 1 | Hero | Full viewport, 3D DNA helix | 100vh |
| 2 | The Problem | Sticky scroll, 3 slides | ~150vh |
| 3 | The Promise | Sticky scroll, 3 pillar cards | ~200vh |
| 4 | How It Works | Pinned horizontal scroll, 6 steps | ~300vh |
| 5 | The Glass Wall | Full-bleed visual | 100vh |
| 6 | Open Source | Split layout, terminal animation | ~100vh |
| 7 | Waitlist Signup | Centered form, DNA particles BG | 100vh |
| 8 | Footer | Minimal | auto |

**Navigation:** Minimal floating nav — logo top-left, hamburger top-right revealing full-screen overlay with section links. Semi-transparent, shows on scroll-up, hides on scroll-down.

---

## 3. Visual Design System

### 3.1 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#111113` | Page background (warm near-black) |
| `--bg-elevated` | `#1a1a1e` | Card/section backgrounds |
| `--bg-surface` | `#232328` | Interactive surfaces, inputs |
| `--text-primary` | `#e8e6e0` | Headlines, primary body (warm off-white) |
| `--text-secondary` | `#8a8a8a` | Supporting text, captions |
| `--accent` | `#00E8C8` | CTAs, highlights, DNA helix glow, links |
| `--accent-dim` | `#00E8C820` | Accent at 12% opacity for glows/backgrounds |
| `--danger` | `#ff4444` | Error states only |

### 3.2 Typography

- **Headlines:** `clamp(2.5rem, 6vw, 7rem)` — Geist Sans (Vercel, OFL license)
- **Body:** `clamp(0.95rem, 1.05vw, 1.15rem)` — Geist Sans
- **Mono/code:** JetBrains Mono — for pipeline snippets, GitHub refs, technical sections
- **Scaling:** Viewport-width-based (`vw` units with `clamp`) for fluid proportional sizing

### 3.3 Motion System

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Split-text headline reveals | Characters slide up from `overflow:hidden` | 800-1200ms staggered | `cubic-bezier(0.165, 0.84, 0.44, 1)` |
| Section fade-ins | Opacity 0->1 + translateY(40px->0) | 600ms | same curve |
| Sticky section progress | Scroll-scrubbed content transitions | tied to scroll | linear |
| DNA helix rotation | Continuous, mouse-reactive | 60fps RAF | N/A |
| Hover states | Scale, color inversion | 300ms | ease-out |
| Page load sequence | Logo -> headline -> subtext -> CTA cascade | 2000ms total | staggered |
| Custom cursor | Scale transform on interactive elements | 200ms | ease-out |
| Terminal typewriter | Line-by-line reveal on scroll | 100ms/line | linear |

**Libraries:** GSAP (ScrollTrigger + SplitText), Lenis, Three.js

---

## 4. Section Content

### 4.1 Hero (100vh)

- 3D DNA double helix on right ~60% (Three.js canvas)
  - Teal wireframe with drifting particles
  - Slow rotation (~0.2 rad/s vertical axis)
  - Mouse-reactive tilt (parallax follow, max +/-5 degrees)
  - Dissolves into upward-drifting particles on scroll-out
- Left side content:
  - Headline: "Your genome. Your hands. No copies."
  - Subtext: "Air-gapped whole genome sequencing. Open source. Zero retention."
  - CTA: [ Join the Waitlist -> ]

### 4.2 The Problem (~150vh, sticky)

Three scroll-driven slides within a pinned viewport:

**Slide 1 — The Stat:** Animated counter to `15,000,000` with label "genomes sold in bankruptcy court. March 2025." Teal number, grey text.

**Slide 2 — The Pattern:** Three lines reveal sequentially:
- "23andMe sold your data for $20 per genome."
- "Nebula shared it with Meta, Google, and Microsoft."
- "Ancestry valued each customer at $250."

**Slide 3 — The Question:** Full-viewport headline: "Who owns your DNA?" Fades to accent teal.

### 4.3 The Promise (~200vh, sticky)

Three pillar cards animate in sequentially, each filling the viewport:

**Pillar 1 — Physical Transparency**
Icon: glass wall / eye. "Hand over your sample in person. Watch the destruction through a glass wall. Everything between is verifiable open source. Nothing hidden."

**Pillar 2 — Cryptographic Verifiability**
Icon: code brackets / GitHub mark. "Our entire pipeline is open source on GitHub. Audit the code that touches your DNA."

**Pillar 3 — Zero Retention**
Icon: shredder / eraser. "Your sample is collected, your data is handed to you, and the on-premise copies are destroyed. No copies. No cloud. No exceptions."

Each transitions with horizontal wipe (previous slides left, next enters from right).

### 4.4 How It Works (~300vh, pinned horizontal)

Scroll-driven horizontal timeline with 6 steps connected by a teal progress line:

| Step | Title | Description |
|------|-------|-------------|
| 1 | Walk In | "Visit 1 (Day 1): ~15 min. Visit our NYC storefront. No mail-order kits." |
| 2 | Sample | "~10 min. Saliva or buccal swab. You depart after collection." |
| 3 | Sequence | "Between visits: ~38 hrs. 30x whole genome on Element Biosciences AVITI." |
| 4 | Process | "~60-90 min on GPU. Air-gapped servers. Open source pipeline." |
| 5 | Deliver | "Visit 2 (Day 5-6): ~30 min. Encrypted USB drive. FIPS 140-3 certified." |
| 6 | Destroy | "Witnessed through the glass wall. On-premise data cryptographically erased. Certificate provided." |

Visual grouping: steps 1-2 labeled as "Visit 1", steps 3-4 labeled as "Between Visits (4-6 business days)", steps 5-6 labeled as "Visit 2". The two-visit structure must be clear to prevent customers from expecting same-day service.

Each step has a minimal line-art icon. Active step icon glows teal.

### 4.5 The Glass Wall (100vh)

Full-bleed section with stylized concept visual of the storefront interior (glass wall, sequencer, server rack, customer area). Initially a gradient mesh/abstract architectural placeholder.

Overlay text (bottom-left): "Manhattan, NYC" / "Opening 2027"

### 4.6 Open Source (~100vh)

Split layout:

**Left:** Headline "Trust, but verify." Body text about open source pipeline. CTA: [ View on GitHub -> ]

**Right:** Styled terminal with typewriter scroll animation:
```
$ privdna pipeline --verify
[checkmarks for each tool with version and license]
Network interfaces: NONE
Cloud endpoints:    NONE
Telemetry:          NONE
All checksums verified. Pipeline clean.
```

### 4.7 Waitlist Signup (100vh)

Centered, focused. Faint DNA helix particles in background.

- Headline: "Be first through the glass wall."
- Subtext: "Join the waitlist. Your email is encrypted at rest with AES-256. Our signup system is open source. Audit it."
- Form: Single email input + submit button
- Below form: "No spam. No data sharing. Unsubscribe anytime. View the source: github.com/privdna/waitlist"
- Success state: Form morphs to "You're on the list." with teal particle burst

### 4.8 Footer

Minimal. Left: (c) 2026 PrivDNA. Center: GitHub / Twitter / Email icons. Right: "Privacy is not a feature. It's the architecture."

---

## 5. Technical Architecture

### 5.1 Frontend Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| 3D | Three.js (custom DNA helix geometry) |
| Animation | GSAP (ScrollTrigger + SplitText) |
| Smooth scroll | Lenis |
| Styling | Tailwind CSS + CSS custom properties |
| Fonts | Geist Sans + Geist Mono (OFL) |
| Custom cursor | React component |
| Analytics | Rybbit (external, cookieless) |

### 5.2 Backend Stack (Waitlist API)

```
POST /api/waitlist
  -> Rate limiting (in-memory, per-IP)
  -> Input validation (email format, length)
  -> Normalize email (lowercase, trim)
  -> Check duplicate (SHA-256 hash lookup)
  -> Encrypt email with AES-256
  -> Store in SQLCipher database
  -> Return success/error JSON

GET /api/waitlist/count
  -> Returns total signups (public counter, no PII)
```

**Database:** SQLCipher (SQLite + AES-256). Entire database file encrypted at rest (SQLCipher uses AES-256-CBC internally). Key from environment variable.

**Schema:**
```sql
CREATE TABLE waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email_hash TEXT UNIQUE NOT NULL,
  email_encrypted BLOB NOT NULL,
  created_at TEXT NOT NULL,
  source TEXT DEFAULT 'website'
);
```

### 5.3 Deployment Architecture

```
docker-compose.yml
|
+-- privdna-web (Next.js)
|   Port 3000 (internal only)
|   Mounts: ./data/newsletter.db
|   Env: DATABASE_KEY, RYBBIT_SITE_ID
|
+-- rybbit (their Docker images)
|   rybbit-server, clickhouse, postgres
|   Port 3002 (internal only)
|
+-- cloudflared (Cloudflare Tunnel)
    privdna.com -> privdna-web:3000
    analytics.privdna.com -> rybbit-server:3002
```

No ports exposed to public internet. Cloudflare handles TLS, DDoS, DNS.

### 5.4 Repository Structure

```
privdna.com/
+-- src/
|   +-- app/
|   |   +-- layout.tsx
|   |   +-- page.tsx
|   |   +-- api/waitlist/route.ts
|   +-- components/
|   |   +-- Hero.tsx
|   |   +-- TheProblem.tsx
|   |   +-- ThePromise.tsx
|   |   +-- HowItWorks.tsx
|   |   +-- GlassWall.tsx
|   |   +-- OpenSource.tsx
|   |   +-- WaitlistSignup.tsx
|   |   +-- Footer.tsx
|   |   +-- Navigation.tsx
|   |   +-- CustomCursor.tsx
|   |   +-- three/
|   |       +-- DNAHelix.tsx
|   |       +-- ParticleField.tsx
|   +-- lib/
|   |   +-- db.ts
|   |   +-- crypto.ts
|   |   +-- rateLimit.ts
|   +-- styles/
|       +-- globals.css
+-- docker-compose.yml
+-- Dockerfile
+-- .env.example
+-- LICENSE (MIT)
+-- README.md
```

### 5.5 Security Posture

| Layer | Protection |
|-------|-----------|
| Transport | Cloudflare Tunnel (TLS 1.3, no exposed ports) |
| Application | Rate limiting, input validation, CSRF protection |
| Data at rest | SQLCipher AES-256 (entire DB encrypted; CBC mode internally) |
| Data in transit | HTTPS only (Cloudflare enforced) |
| Email storage | AES-256 encrypted before write; SHA-256 hash for dedup |
| Secrets | Env vars only; .env in .gitignore; .env.example documents shape |
| Analytics | Rybbit (cookieless, no PII, self-hosted) |
| Source | Fully open source (MIT) |

### 5.6 Rybbit Integration

- Rybbit runs as separate services in docker-compose.yml (not in app codebase)
- Next.js loads Rybbit tracking script (~1KB, cookieless) via next/script
- Next.js rewrites proxy the script through privdna.com domain (bypasses ad blockers)
- Rybbit dashboard at analytics.privdna.com behind same Cloudflare Tunnel
- No cookies, no PII collection — pageviews, sessions, referrers only

---

## 6. Design Principles (OFF+BRAND DNA)

1. **Dark mode first, warm neutrals.** #111113 near-black, #e8e6e0 warm off-white. Never pure black/white.
2. **One accent color.** Bioluminescent teal (#00E8C8) does all heavy lifting.
3. **Viewport-width typography.** Headlines scale with vw units. Massive at desktop.
4. **GSAP + Lenis foundation.** Every scroll, hover, and transition is choreographed.
5. **WebGL is essential.** 3D DNA helix is the hero, not decoration.
6. **Split-text animations.** Characters in overflow containers, staggered GSAP reveals.
7. **Custom cursor.** Context-aware scaling on hover targets.
8. **Progressive disclosure.** Information layered behind scroll/interaction.
9. **Sophisticated easing.** cubic-bezier(0.165, 0.84, 0.44, 1) — not CSS defaults.
10. **Performance is design.** will-change, lazy-load, optimized Three.js. Premium sites must be fast.
