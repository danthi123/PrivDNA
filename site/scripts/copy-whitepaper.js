#!/usr/bin/env node
// Copies whitepaper-public.md from repo root into site/content/ so it is
// importable by the /whitepaper route. Run as `prebuild`.
//
// Two locations are supported:
//   1. ../whitepaper-public.md   (local dev: site/ is a child of repo root)
//   2. ./whitepaper-public.md    (Docker build: parent repo is the build context)
//
// In Docker, the build context is set to the repo root in docker-compose.yml,
// and the Dockerfile copies the markdown alongside the site/ sources so this
// script finds it at the second path.

const fs = require('node:fs');
const path = require('node:path');

const candidates = [
  path.resolve(__dirname, '..', '..', 'whitepaper-public.md'),
  path.resolve(__dirname, '..', 'whitepaper-public.md'),
];

const src = candidates.find((p) => fs.existsSync(p));
if (!src) {
  console.error('[copy-whitepaper] whitepaper-public.md not found in:');
  candidates.forEach((p) => console.error('  -', p));
  process.exit(1);
}

const destDir = path.resolve(__dirname, '..', 'content');
const dest = path.join(destDir, 'whitepaper.md');
fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);
console.log(`[copy-whitepaper] ${src} -> ${dest}`);
