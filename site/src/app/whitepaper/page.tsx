import type { Metadata } from "next";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export const metadata: Metadata = {
  title: "Technical Whitepaper | PrivDNA",
  description:
    "PrivDNA's public technical whitepaper: air-gapped whole genome sequencing, open-source pipeline, zero data retention, witnessed NIST SP 800-88 destruction.",
  openGraph: {
    title: "Technical Whitepaper | PrivDNA",
    description:
      "Air-gapped whole genome sequencing. Open source pipeline. Zero data retention.",
    url: "https://privdna.com/whitepaper",
    siteName: "PrivDNA",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Whitepaper | PrivDNA",
    description:
      "Air-gapped whole genome sequencing. Open source pipeline. Zero data retention.",
  },
  robots: { index: true, follow: true },
};

// Force static generation so the markdown is read and rendered at build time
// only. The file lives at site/content/whitepaper.md, vendored from the repo
// root by scripts/copy-whitepaper.js (npm prebuild/predev).
export const dynamic = "force-static";

function loadWhitepaper(): string {
  const filePath = path.join(process.cwd(), "content", "whitepaper.md");
  const markdown = fs.readFileSync(filePath, "utf-8");
  marked.setOptions({ gfm: true, breaks: false });
  const rawHtml = marked.parse(markdown, { async: false }) as string;

  // The markdown source is first-party (our own repo, built-in at build time)
  // so malicious input is not a realistic vector here. DOMPurify is still run
  // as defense-in-depth in case a future edit includes raw HTML, and to keep
  // the output free of any script/event-handler surface.
  return DOMPurify.sanitize(rawHtml, {
    USE_PROFILES: { html: true },
  });
}

export default function WhitepaperPage() {
  const html = loadWhitepaper();

  return (
    <main className="min-h-screen px-6 py-24 md:px-16 lg:px-24 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-accent text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to PrivDNA
      </Link>

      <article
        className="whitepaper-prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-16 pt-8 border-t border-bg-elevated">
        <p className="text-text-secondary text-sm italic">
          Your genome. Your hands. No copies.
        </p>
        <p className="text-text-secondary text-xs mt-3">
          Corrections or contributions:{" "}
          <a
            href="https://github.com/danthi123/PrivDNA/blob/main/whitepaper-public.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            edit on GitHub
          </a>
          .
        </p>
      </div>
    </main>
  );
}
