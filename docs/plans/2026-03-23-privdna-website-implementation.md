# PrivDNA Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the privdna.com single-page marketing site with 3D DNA helix, scroll animations, and encrypted waitlist signup.

**Architecture:** Next.js 16 App Router single-page site with Three.js WebGL hero, GSAP/Lenis scroll-driven animations, and a SQLCipher-encrypted waitlist API. Deployed via Docker Compose with Rybbit analytics and Cloudflare Tunnel.

**Tech Stack:** Next.js 16, React 19, Three.js + R3F, GSAP 3.14 (ScrollTrigger + SplitText), Lenis, Tailwind CSS 4, better-sqlite3-multiple-ciphers, Geist font, Rybbit analytics, Docker

> **Note:** Following Webflow's acquisition of GSAP in late 2024, all GSAP plugins including SplitText are now free for commercial use under the standard license. No Business license is required.

**Design Doc:** `docs/plans/2026-03-23-privdna-website-design.md`

---

## Phase 1: Project Scaffolding and Design System

### Task 1: Initialize Next.js Project

**Files:**
- Create: `site/package.json` (via create-next-app)
- Create: `site/src/app/layout.tsx`
- Create: `site/src/app/page.tsx`
- Create: `site/.env.example`
- Create: `site/.gitignore`

**Step 1: Scaffold the project**

Run from project root:
```
npx create-next-app@latest site --typescript --tailwind --eslint --app --src-dir --no-import-alias --turbopack
```

Accept defaults. This gives us Next.js 16 + React 19 + Tailwind v4 + TypeScript out of the box.

**Step 2: Install all dependencies**

Run from site/:
```
npm install three @react-three/fiber @react-three/drei gsap @gsap/react lenis geist better-sqlite3-multiple-ciphers
npm install -D @types/better-sqlite3 @types/three
```

**Step 3: Create .env.example**

Create `site/.env.example`:
```
# Database encryption key (generate with: openssl rand -hex 32)
DATABASE_KEY=

# Rybbit analytics site ID (from your Rybbit instance)
RYBBIT_SITE_ID=

# Rybbit instance URL (self-hosted)
RYBBIT_URL=http://rybbit-server:3002
```

**Step 4: Verify it runs**

Run `npm run dev` from site/. Open http://localhost:3000. Should see the Next.js default page.

**Step 5: Commit**

```
git add site/
git commit -m "feat: scaffold Next.js 16 project with dependencies"
```

---

### Task 2: Design Tokens and Global Styles

**Files:**
- Modify: `site/src/app/globals.css`
- Modify: `site/src/app/layout.tsx`

**Step 1: Replace globals.css with design system**

Replace entire contents of `site/src/app/globals.css` with design tokens using Tailwind v4 `@theme` directive. Define all color tokens (--color-bg-primary: #111113, --color-bg-elevated: #1a1a1e, --color-bg-surface: #232328, --color-text-primary: #e8e6e0, --color-text-secondary: #8a8a8a, --color-accent: #00E8C8, --color-accent-dim: #00E8C820, --color-danger: #ff4444). Include Lenis CSS overrides, body background/color, selection styling, split-text animation helpers (.split-line overflow:hidden, .split-char will-change), scrollbar styling in accent color, and antialiased font rendering. Hide default cursor with `* { cursor: none !important; }`.

**Step 2: Update layout.tsx with fonts and metadata**

Replace `site/src/app/layout.tsx`. Import GeistSans and GeistMono from `geist/font/sans` and `geist/font/mono`. Set both as CSS variable classes on `<html>`. Add comprehensive Metadata export (title: "PrivDNA -- Your Genome. Your Hands. No Copies.", description about air-gapped WGS, OpenGraph and Twitter card meta). Conditionally render Rybbit tracking Script from `next/script` using RYBBIT_SITE_ID and RYBBIT_URL env vars with strategy="afterInteractive".

**Step 3: Create minimal page.tsx**

Replace `site/src/app/page.tsx` with a centered heading showing "PrivDNA" with "DNA" in accent color, using clamp(2.5rem,6vw,7rem) font size.

**Step 4: Verify design tokens render correctly**

Run dev server. Confirm: warm near-black background (#111113), warm off-white text (#e8e6e0), teal "DNA" (#00E8C8), Geist Sans font.

**Step 5: Commit**

```
git add -A
git commit -m "feat: design system tokens, Geist fonts, Rybbit script, metadata"
```

---

## Phase 2: Core Infrastructure Components

### Task 3: Custom Cursor

**Files:**
- Create: `site/src/components/CustomCursor.tsx`
- Modify: `site/src/app/layout.tsx`

**Step 1: Build the custom cursor component**

Create `site/src/components/CustomCursor.tsx` as a "use client" component. Two elements: a small teal dot (w-2 h-2, bg-accent, rounded-full, mix-blend-difference) and a larger teal ring follower (w-8 h-8, border border-accent, opacity-50). Both fixed positioned, pointer-events-none, z-[9999/9998]. Use GSAP to animate both to mouse position (dot: 0.1s duration, ring: 0.3s, power2.out easing). On mouseenter of `a, button, [data-cursor="interactive"]` elements, scale dot to 0.5x and ring to 1.5x. On mouseleave, reset. Hide both on touch devices via `matchMedia("(pointer: coarse)")`.

**Step 2: Add to layout.tsx**

Import CustomCursor and render inside `<body>` before `{children}`.

**Step 3: Verify**

Move mouse, see teal dot + ring. Hover interactive elements, ring grows. Mobile viewport hides cursors.

**Step 4: Commit**

```
git add -A
git commit -m "feat: custom cursor with GSAP-driven movement and hover scaling"
```

---

### Task 4: Lenis Smooth Scroll Provider

**Files:**
- Create: `site/src/components/SmoothScroll.tsx`
- Modify: `site/src/app/layout.tsx`

**Step 1: Build the Lenis wrapper**

Create `site/src/components/SmoothScroll.tsx` as a "use client" component. Import ReactLenis from `lenis/react`. Register GSAP ScrollTrigger plugin. Use a ref to access the Lenis instance. In useEffect, add a GSAP ticker callback that calls `lenis.raf(time * 1000)`. Sync Lenis scroll events with `ScrollTrigger.update`. Set `autoRaf={false}` on ReactLenis since GSAP ticker handles the loop.

**Step 2: Wrap layout**

Wrap `<body>` contents with `<SmoothScroll>`.

**Step 3: Verify smooth scroll works**

Add temporary tall content to page.tsx. Scrolling should be silky smooth with momentum.

**Step 4: Commit**

```
git add -A
git commit -m "feat: Lenis smooth scroll with GSAP ScrollTrigger sync"
```

---

### Task 5: Navigation Component

**Files:**
- Create: `site/src/components/Navigation.tsx`

**Step 1: Build the navigation**

Create `site/src/components/Navigation.tsx` as a "use client" component. Fixed position nav bar with logo ("PrivDNA" with teal "DNA") top-left and hamburger button top-right. Hamburger is 3 spans that animate to an X when open (rotate-45/- rotate-45 with translate). Track scroll direction with useEffect and window scroll listener -- show nav on scroll-up or near top (< 100px), hide on scroll-down via translate-y. Full-screen overlay (bg-bg-primary/95 backdrop-blur-md) with centered nav items: "The Problem", "The Promise", "How It Works", "Open Source", "Waitlist". Overlay opens with GSAP opacity animation, nav items stagger in with y:40->0 + opacity. Clicking a nav item closes overlay and smooth-scrolls to the target section ID.

**Step 2: Verify**

Logo and hamburger visible. Hamburger toggles overlay. Nav items animate in. Clicking scrolls to section. Nav hides/shows on scroll direction.

**Step 3: Commit**

```
git add -A
git commit -m "feat: floating navigation with full-screen overlay and scroll-aware visibility"
```

---

## Phase 3: Waitlist Backend

### Task 6: Database and Crypto Utilities

**Files:**
- Create: `site/src/lib/crypto.ts`
- Create: `site/src/lib/db.ts`
- Create: `site/src/lib/rateLimit.ts`
- Create: `site/data/.gitignore`

**Step 1: Build the crypto module**

Create `site/src/lib/crypto.ts`. Three functions:
- `encryptEmail(email: string)`: Uses Node crypto `createCipheriv` with aes-256-gcm. Key derived from EMAIL_ENCRYPTION_KEY env var via SHA-256 hash (ensures 32 bytes). Generates random 12-byte IV (96-bit, recommended for GCM). Returns `{ encrypted: string (hex), iv: string (hex), authTag: string (hex) }`.
- `decryptEmail(encrypted: string, iv: string)`: Reverse of encrypt. Returns plaintext email.
- `hashEmail(email: string)`: SHA-256 hash of lowercased, trimmed email. Returns hex string. Used for dedup without decrypting.

**Step 2: Build the database module**

Create `site/src/lib/db.ts`. Uses `better-sqlite3-multiple-ciphers`. Singleton pattern -- create DB connection once, reuse. DB file at `process.cwd()/data/newsletter.db`. On init, set SQLCipher key via `db.pragma("key='...'")` from DATABASE_KEY env var. Create waitlist table if not exists (id INTEGER PRIMARY KEY AUTOINCREMENT, email_hash TEXT UNIQUE NOT NULL, email_encrypted TEXT NOT NULL, email_iv TEXT NOT NULL, created_at TEXT NOT NULL, source TEXT DEFAULT 'website'). Export:
- `addToWaitlist(emailHash, emailEncrypted, emailIv, source)`: INSERT with UNIQUE constraint catch for duplicates. Returns `{ success: boolean, duplicate: boolean }`.
- `getWaitlistCount()`: SELECT COUNT(*) as count. Returns number.

**Step 3: Build rate limiter**

Create `site/src/lib/rateLimit.ts`. In-memory Map keyed by IP string. Each entry tracks count and resetTime. Window: 60 seconds, max 5 requests. `checkRateLimit(ip: string)` returns `{ allowed: boolean, remaining: number }`. Periodic cleanup when map exceeds 10,000 entries.

**Step 4: Create data directory gitignore**

```
mkdir -p site/data
```
Create `site/data/.gitignore` containing `newsletter.db`.

**Step 5: Commit**

```
git add -A
git commit -m "feat: encrypted database, crypto utilities, and rate limiter"
```

---

### Task 7: Waitlist API Routes

**Files:**
- Create: `site/src/app/api/waitlist/route.ts`

**Step 1: Build the API route**

Create `site/src/app/api/waitlist/route.ts` with POST and GET handlers.

POST handler:
1. Extract IP from cf-connecting-ip or x-forwarded-for headers
2. Check rate limit, return 429 if exceeded
3. Parse JSON body, extract email string
4. Validate: must be string, match /^[^\s@]+@[^\s@]+\.[^\s@]+$/, length <= 254
5. Normalize: lowercase, trim
6. Hash email for dedup
7. Encrypt email for storage
8. Call addToWaitlist
9. If duplicate, return 200 with `{ message: "You're already on the list!", alreadyExists: true }`
10. If success, return 201 with `{ message: "You're on the list!", success: true }`
11. On error, log and return 500

GET handler:
1. Call getWaitlistCount
2. Return `{ count: number }`

**Step 2: Test the API manually**

Run dev server with DATABASE_KEY set. Use curl to test:
- POST valid email -> 201
- POST same email -> 200 with alreadyExists
- GET -> count: 1
- POST invalid email -> 400
- POST 6 times rapidly -> 429

**Step 3: Commit**

```
git add -A
git commit -m "feat: waitlist API with encryption, rate limiting, and validation"
```

---

## Phase 4: Three.js DNA Helix

### Task 8: 3D DNA Double Helix Component

**Files:**
- Create: `site/src/components/three/DNAHelix.tsx`
- Create: `site/src/components/three/DNAScene.tsx`

**Step 1: Build the DNA helix geometry**

Create `site/src/components/three/DNAHelix.tsx` as a "use client" component. Props: `mouse: RefObject<{ x: number; y: number }>`.

Use useMemo to generate helix geometry:
- Parameters: 4 turns, 60 points per turn, radius 1.2, height 8, 200 particles
- Strand 1: for each point, compute angle = t * 2PI * turns, x = cos(angle) * radius, z = sin(angle) * radius, y = linear from -height/2 to +height/2
- Strand 2: same but offset angle by PI
- Rungs: every 10th point, connect strand1 position to strand2 position (lineSegments)
- Floating particles: 200 random positions in a 6x12x6 bounding box
- Store all as Float32Arrays

Render as Three.js primitives:
- Two `<line>` elements for strands (lineBasicMaterial, color #00E8C8, opacity 0.6)
- One `<lineSegments>` for rungs (opacity 0.2)
- One `<points>` for particles (pointsMaterial, size 0.03, opacity 0.5)

useFrame animation:
- Rotate group.rotation.y += 0.003
- Lerp group.rotation.x and .z toward mouse position * 0.08/-0.05 (max ~5 degree tilt)
- Drift particles upward (y += 0.003, wrap at height boundary)
- Mark particle positions as needsUpdate

**Step 2: Build the scene wrapper**

Create `site/src/components/three/DNAScene.tsx` as a "use client" component. Props: `className?: string`.

Track mouse position in a ref via window mousemove listener (normalized to -1..1 range).

Render `<Canvas>` with camera at [0,0,6] fov 50, antialias true, alpha true (transparent background). Render `<ambientLight intensity={0.5} />` and `<DNAHelix mouse={mouse} />`.

**Step 3: Test by adding to page.tsx temporarily**

Import DNAScene with `next/dynamic` (ssr: false) and render it. Verify: teal wireframe double helix rotates slowly, particles drift upward, helix tilts toward mouse.

**Step 4: Commit**

```
git add -A
git commit -m "feat: 3D DNA double helix with mouse-reactive rotation and particle system"
```

---

## Phase 5: Section Components

### Task 9: Hero Section

**Files:**
- Create: `site/src/components/Hero.tsx`

Build Hero as a "use client" component. Full viewport height (h-screen). DNAScene loaded via next/dynamic (ssr: false) positioned absolute right-0 w-[65%] h-full opacity-80 pointer-events-none. Left side: headline "Your genome. Your hands. No copies." with "No copies." in accent color. Use GSAP SplitText on mount to split headline into chars, then animate chars from y:80 opacity:0 with 0.03s stagger and the signature cubic-bezier easing. Subtext fades in after headline (-=0.3 offset). CTA button fades in after subtext. CTA is a rounded-full pill button with bg-accent text-bg-primary, hover:scale-105, with a pseudo-element hover fill animation (scale-x-0 to scale-x-100 from left). Scroll indicator at bottom center (small "Scroll" text + pulsing vertical line). Clean up SplitText on unmount with split.revert().

**Commit:** `"feat: hero section with split-text animation and 3D DNA scene"`

---

### Task 10: The Problem Section

**Files:**
- Create: `site/src/components/TheProblem.tsx`

Build as "use client" with useGSAP hook from @gsap/react. Container div with id="problem". Three absolute-positioned slide divs stacked. GSAP timeline with ScrollTrigger: trigger on container, pin true, scrub 1, end "+=200%".

Slide 1 (The Stat): Large counter span starting at "0", text-accent, clamp(3rem,10vw,10rem). Separate ScrollTrigger (once:true) on container enter triggers gsap.to counter with innerText snap to animate from 0 to 15000000 over 2s with toLocaleString formatting. Below: "genomes sold in bankruptcy court. March 2025." in text-secondary.

Slide 2 (The Pattern): Three lines about 23andMe ($20/genome), Nebula (Meta/Google/Microsoft), Ancestry ($250/customer). Key figures in accent color. Fades in as slide 1 fades out.

Slide 3 (The Question): "Who owns your DNA?" with "your DNA" in accent. Full viewport, massive text. Fades in as slide 2 fades out.

Timeline choreography: slide1 visible at 0, fades out at 0.3. slide2 fades in at 0.3, fades out at 0.65. slide3 fades in at 0.65.

**Commit:** `"feat: The Problem section with sticky scroll and animated counter"`

---

### Task 11: The Promise Section

**Files:**
- Create: `site/src/components/ThePromise.tsx`

Build as "use client" with useGSAP. Container with id="promise". Three pillar cards, each filling the viewport. GSAP timeline with ScrollTrigger pin and scrub, end "+=300%".

Pillar 1 -- Physical Transparency: SVG icon (stylized eye or glass pane), headline, body text "Watch your genome being sequenced through a glass wall. Every step visible. Nothing hidden."

Pillar 2 -- Cryptographic Verifiability: SVG icon (code brackets or shield-check), headline, body text "Our entire pipeline is open source on GitHub. Audit the code that touches your DNA."

Pillar 3 -- Zero Retention: SVG icon (shredder or trash-with-lock), headline, body text "Your data is created, handed to you, and destroyed. No copies. No cloud. No exceptions."

Each pillar transitions with x-translation: current slides out left (x: -100%), next slides in from right (x: 100% -> 0). Each pillar has a large icon above, headline in text-accent below, then body text in text-secondary.

**Commit:** `"feat: The Promise section with three scroll-driven pillar cards"`

---

### Task 12: How It Works Section

**Files:**
- Create: `site/src/components/HowItWorks.tsx`

Build as "use client" with useGSAP. Container with id="how-it-works". Inner wrapper with flex-nowrap holding 6 step cards. GSAP ScrollTrigger pins the container and translates the inner wrapper horizontally on scrub (end "+=400%").

6 steps: Walk In, Sample, Sequence, Process, Deliver, Destroy. Each step card: ~33vw wide, flex-shrink-0, centered content. SVG line-art icon at top (simple geometric icons: door, test tube, DNA strand, server, USB drive, shredder). Title in text-primary font-bold. Description in text-secondary. Active step detection based on scroll progress -- active step icon and title get text-accent color.

A teal progress line spans the bottom of all cards. Its width is tied to scroll progress (scaleX from 0 to 1 via GSAP scrub).

**Commit:** `"feat: How It Works horizontal scroll timeline with 6 steps"`

---

### Task 13: The Glass Wall Section

**Files:**
- Create: `site/src/components/GlassWall.tsx`

Build as "use client". Full viewport section (h-screen). Background: layered CSS radial gradients creating an abstract architectural feel -- a large teal-tinted radial gradient (opacity ~0.15) centered slightly off-center, overlapping with a subtle purple radial gradient, on the bg-elevated base. This suggests the glass wall / lab space without requiring photography.

Overlay text positioned bottom-left (bottom-8 left-8): "Manhattan, NYC" in text-primary font-bold text-lg, and "Opening 2027" in text-secondary text-sm tracking-widest uppercase. Both fade and slide up on scroll into view via GSAP ScrollTrigger.

**Commit:** `"feat: Glass Wall section with gradient placeholder and location overlay"`

---

### Task 14: Open Source Section

**Files:**
- Create: `site/src/components/OpenSource.tsx`

Build as "use client" with useGSAP. Container with id="open-source". Grid layout: left column (text), right column (terminal). On mobile, stack vertically.

Left side: Headline "Trust, but verify." in large text. Body paragraph about the open source pipeline commitment. CTA button linking to GitHub (styled like hero CTA but outlined variant -- border-accent text-accent, hover fills with accent).

Right side: Styled terminal block with bg-bg-surface rounded-2xl p-6 font-mono. Terminal header bar with 3 dots (red/yellow/green circles). Content is the pipeline verification output:

```
$ privdna pipeline --verify

 bases2fastq    v2.1     [Element Biosciences]
 BWA-MEM2       v2.2.1   [MIT License]
 GATK           v4.6.1   [BSD-3-Clause]
 samtools       v1.23    [MIT License]
 MultiQC        v1.33    [GPL-v3]

Network interfaces: NONE
Cloud endpoints:    NONE
Telemetry:          NONE

All checksums verified. Pipeline clean.
```

Lines reveal one-by-one using GSAP ScrollTrigger scrub. Each line has a small delay. Checkmarks and "NONE" text in accent color.

**Commit:** `"feat: Open Source section with scroll-driven terminal typewriter animation"`

---

### Task 15: Waitlist Signup Section

**Files:**
- Create: `site/src/components/WaitlistSignup.tsx`

Build as "use client". Container with id="waitlist", h-screen, centered content. Faint particle background (reuse a simplified version of the DNA particle field, or CSS radial gradient with accent-dim).

Headline: "Be first through the glass wall." Split-text animated on scroll entry.
Subtext: "Join the waitlist. Your email is encrypted at rest with AES-256. Our signup system is open source. Audit it." in text-secondary.

Form: Single email input (bg-bg-surface, border border-bg-surface focus:border-accent, rounded-full, px-6 py-4, text-lg, placeholder "your@email.com") + submit button (bg-accent text-bg-primary rounded-full px-8 py-4 font-semibold). On mobile, stack vertically. On desktop, inline with button attached to input right side.

State management with useState: idle, loading, success, error, duplicate.
- loading: button shows spinner, input disabled
- success: entire form fades out and is replaced with "You're on the list." heading + teal accent + subtle description
- duplicate: same as success but message is "You're already on the list!"
- error: red error message below form

Submit handler: fetch POST to /api/waitlist with email in JSON body. Handle response status codes.

Below form: small text "No spam. No data sharing. Unsubscribe anytime." with inline link "View the source" pointing to GitHub repo.

**Commit:** `"feat: Waitlist signup form with encrypted submission and success animation"`

---

### Task 16: Footer

**Files:**
- Create: `site/src/components/Footer.tsx`

Minimal footer. Three-column flex layout (items-center justify-between) with px-6 py-8 border-t border-bg-elevated.

Left: "(c) 2026 PrivDNA" in text-secondary text-sm.
Center: Three SVG icon links (GitHub, X/Twitter, Email) in text-secondary hover:text-accent transition-colors, 24x24px, with appropriate aria-labels and data-cursor="interactive".
Right: "Privacy is not a feature. It's the architecture." in text-secondary text-sm italic.

On mobile: stack into single column, centered.

**Commit:** `"feat: minimal footer with social links and tagline"`

---

## Phase 6: Page Composition

### Task 17: Assemble All Sections

**Files:**
- Modify: `site/src/app/page.tsx`

**Step 1: Compose all sections in order**

Replace page.tsx. Import all components: Navigation, Hero, TheProblem, ThePromise, HowItWorks, GlassWall, OpenSource, WaitlistSignup, Footer. Render in a `<main>` element in scroll order.

**Step 2: Full scroll-through test**

Run dev server. Scroll through entire page. Verify:
- Hero loads with split-text animation + DNA helix
- Problem pins and transitions through 3 slides with counter animation
- Promise pins and wipes through 3 pillars
- How It Works scrolls horizontally through 6 steps with progress line
- Glass Wall shows gradient placeholder with location text
- Open Source terminal reveals lines on scroll
- Waitlist form submits successfully, shows confirmation
- Footer renders at bottom
- Navigation links jump to correct sections
- Smooth scroll works throughout
- Custom cursor follows mouse on all sections

**Step 3: Commit**

```
git add -A
git commit -m "feat: compose all sections into single-page scroll experience"
```

---

## Phase 7: Docker and Deployment

### Task 18: Dockerfile

**Files:**
- Create: `site/Dockerfile`
- Modify: `site/next.config.ts`

**Step 1: Create multi-stage Dockerfile**

Create `site/Dockerfile`. Four stages:
1. `base`: node:22-alpine + apk add python3 make g++ cmake (for native module compilation)
2. `deps`: copy package.json + package-lock.json, run npm ci
3. `builder`: copy node_modules from deps, copy source, run npm run build
4. `runner`: node:22-alpine, production-only. Copy standalone output from builder (.next/standalone + .next/static + public). Create /app/data directory owned by nextjs user. Run as non-root user (nextjs:nodejs). Expose port 3000. CMD node server.js.

**Step 2: Update next.config for standalone output**

Add `output: "standalone"` to next.config.ts.

**Step 3: Commit**

```
git add -A
git commit -m "feat: multi-stage Dockerfile for production Next.js build"
```

---

### Task 19: Docker Compose with Rybbit and Cloudflared

**Files:**
- Create: `docker-compose.yml` (project root)
- Create: `.env.example` (project root)

**Step 1: Create docker-compose.yml**

Create at project root. Services:

- `privdna-web`: build from ./site, restart unless-stopped, env vars (DATABASE_KEY, RYBBIT_SITE_ID, RYBBIT_URL), volume mount for privdna-data:/app/data, on privdna-internal network.

- `rybbit-server`: image ghcr.io/rybbit-io/rybbit:latest, env vars (DATABASE_URL pointing to rybbit-postgres, CLICKHOUSE_HOST pointing to rybbit-clickhouse, BETTER_AUTH_SECRET, BASE_URL=https://analytics.privdna.com, DISABLE_SIGNUP=true), depends on rybbit-postgres and rybbit-clickhouse, on privdna-internal network.

- `rybbit-postgres`: postgres:16-alpine, env vars (POSTGRES_USER=rybbit, POSTGRES_PASSWORD, POSTGRES_DB=rybbit), volume for data persistence, on privdna-internal network.

- `rybbit-clickhouse`: clickhouse/clickhouse-server:latest, volume for data persistence, ulimits nofile 262144, on privdna-internal network.

- `cloudflared`: cloudflare/cloudflared:latest, command "tunnel run", env TUNNEL_TOKEN, depends on privdna-web and rybbit-server, on privdna-internal network.

Named volumes: privdna-data, rybbit-postgres-data, rybbit-clickhouse-data.
Bridge network: privdna-internal.

No ports exposed to host -- all traffic routes through Cloudflare Tunnel.

**Step 2: Create root .env.example**

Document all required env vars: DATABASE_KEY, RYBBIT_SITE_ID, RYBBIT_DB_PASSWORD, RYBBIT_AUTH_SECRET, CLOUDFLARE_TUNNEL_TOKEN. Include generation commands (openssl rand -hex 32 etc).

**Step 3: Commit**

```
git add docker-compose.yml .env.example
git commit -m "feat: Docker Compose with PrivDNA site, Rybbit analytics, and Cloudflare Tunnel"
```

---

### Task 20: README and LICENSE

**Files:**
- Create: `site/LICENSE`
- Create: `site/README.md`

**Step 1: Create MIT license**

Standard MIT license text, copyright "2026 PrivDNA".

**Step 2: Create README**

Sections: What is PrivDNA (1 paragraph), Open Source Commitment, Tech Stack, Local Development (npm install, set DATABASE_KEY, npm run dev), Production Deployment (docker compose up), Security (encrypted at rest, no cookies, Cloudflare Tunnel, open source audit), Contributing, License.

**Step 3: Commit**

```
git add -A
git commit -m "docs: README with setup instructions and MIT license"
```

---

## Phase 8: Polish and Performance

### Task 21: Performance Optimization

**Files:**
- Modify: various components

**Step 1:** Add `will-change-transform` to all GSAP-animated elements.

**Step 2:** Lazy-load below-fold sections with `next/dynamic` and `{ ssr: false }`. Only Hero and Navigation render on initial load. All other sections load dynamically.

**Step 3:** Optimize Three.js Canvas: set `dpr={[1, 1.5]}` to cap pixel ratio, add `performance={{ min: 0.5 }}` for adaptive quality. Dispose geometries and materials on component unmount.

**Step 4:** Run `npm run build && npm run start`. Run Lighthouse in Chrome. Target: Performance >90, Accessibility >90, Best Practices >90, SEO >90.

**Step 5: Commit**

```
git add -A
git commit -m "perf: lazy-load sections, optimize Three.js, add will-change hints"
```

---

### Task 22: Responsive Design Pass

**Files:**
- Modify: various components

Test at 375px (mobile), 768px (tablet), 1280px (desktop). Fix:
- Hero: headline stacks vertically on mobile, DNA scene moves to full-width background at lower opacity
- Navigation: hamburger works at all sizes
- Problem/Promise: typography scales down via clamp()
- How It Works: cards shrink, horizontal scroll still functional
- Open Source: terminal stacks below text on mobile
- Waitlist: full-width input/button stack on mobile
- Footer: single column centered on mobile
- Custom cursor: already hidden on touch devices

**Commit:** `"fix: responsive layout adjustments for mobile and tablet"`

---

### Task 23: Accessibility Pass

**Files:**
- Modify: various components

- All `<section>` elements get `aria-label` attributes
- All buttons have descriptive text or `aria-label`
- Form input has visually-hidden `<label>`
- Add visible focus states (ring-2 ring-accent ring-offset-2 ring-offset-bg-primary)
- Add skip-to-content link as first element in body
- Add `prefers-reduced-motion` media query: in globals.css, disable GSAP animations and Three.js rotation when user prefers reduced motion. In components, check `window.matchMedia('(prefers-reduced-motion: reduce)')` and skip GSAP timelines.
- Verify color contrast: #00E8C8 on #111113 passes WCAG AA for large text (ratio ~9.5:1)

**Commit:** `"a11y: semantic HTML, ARIA labels, focus states, reduced motion support"`

---

## Summary

| Phase | Tasks | Description |
|-------|-------|-------------|
| 1 | 1-2 | Project scaffolding + design system |
| 2 | 3-5 | Custom cursor, Lenis scroll, Navigation |
| 3 | 6-7 | Database, crypto, rate limiter, API routes |
| 4 | 8 | Three.js DNA helix |
| 5 | 9-16 | All 8 section components |
| 6 | 17 | Page composition |
| 7 | 18-20 | Docker, deployment, docs |
| 8 | 21-23 | Performance, responsive, accessibility |

**Total tasks: 23**
**Estimated implementation time: 3-5 sessions**
