import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security Policy | PrivDNA",
  description:
    "How to report a security vulnerability to PrivDNA, what to expect from us, and our safe harbor commitment to researchers.",
  robots: { index: true, follow: true },
};

export default function SecurityPolicy() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-16 lg:px-24 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-accent text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to PrivDNA
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-2">Security Policy</h1>
      <p className="text-text-secondary text-sm mb-12">
        Last updated: April 14, 2026
      </p>

      <div className="space-y-10 text-text-secondary leading-relaxed">
        <section>
          <p>
            We take security seriously. If you have found a vulnerability in any
            PrivDNA system, we want to hear about it. This page describes how to
            report issues responsibly and what you can expect in return.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Reporting a vulnerability
          </h2>
          <p>
            Email{" "}
            <a
              href="mailto:security@privdna.com"
              className="text-accent hover:underline"
            >
              security@privdna.com
            </a>
            . Please do not disclose the issue publicly until we have had a
            reasonable opportunity to address it.
          </p>
          <p className="mt-2">Include as much detail as you can:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>A description of the vulnerability</li>
            <li>Steps to reproduce</li>
            <li>The potential impact</li>
            <li>Any suggested mitigations</li>
            <li>Screenshots, logs, or proof-of-concept code if relevant</li>
          </ul>
          <p className="mt-3">
            This contact is also published in our{" "}
            <a
              href="/.well-known/security.txt"
              className="text-accent hover:underline"
            >
              security.txt
            </a>{" "}
            (RFC 9116).
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            What to expect
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <span className="text-text-primary">Within 72 hours</span>: we
              will acknowledge receipt of your report.
            </li>
            <li>
              <span className="text-text-primary">Within 7 days</span>: we will
              provide an initial assessment and confirm whether the issue is
              valid.
            </li>
            <li>
              <span className="text-text-primary">Within 30 days</span>: we
              aim to have a fix deployed for confirmed vulnerabilities.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">Scope</h2>

          <h3 className="text-text-primary font-medium mt-4 mb-2">In scope</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>privdna.com (this website)</li>
            <li>The waitlist signup flow and unsubscribe endpoints</li>
            <li>Authentication, session, or credential handling on any PrivDNA system</li>
            <li>
              Data exposure, unauthorized access, or integrity issues affecting
              any data PrivDNA holds
            </li>
            <li>
              Cryptographic implementation issues in our open-source code at{" "}
              <a
                href="https://github.com/danthi123/PrivDNA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                github.com/danthi123/PrivDNA
              </a>
            </li>
          </ul>

          <h3 className="text-text-primary font-medium mt-6 mb-2">
            Out of scope
          </h3>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Social engineering or phishing attacks against PrivDNA staff or customers</li>
            <li>Denial of service (DoS or DDoS) attacks</li>
            <li>
              Vulnerabilities in third-party services we depend on (Cloudflare,
              Vercel, our email provider, etc.); please report those upstream
            </li>
            <li>Issues that require physical access to PrivDNA infrastructure</li>
            <li>
              Automated vulnerability scanning conducted without prior coordination
            </li>
            <li>Reports from automated tools without manual verification</li>
            <li>
              Best-practice deviations with no demonstrated security impact
              (missing headers, software version disclosure, etc.)
            </li>
          </ul>
          <p className="mt-3">
            Our physical sequencing infrastructure is air-gapped by design. Once
            it is operational, on-site testing scope and rules of engagement
            will be published separately. Until then, on-site testing is out of
            scope.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Safe harbor
          </h2>
          <p>
            We consider security research conducted in accordance with this
            policy to be authorized, and we will not pursue legal action against
            researchers who:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Act in good faith to avoid privacy violations, data destruction,
              and service disruption
            </li>
            <li>
              Only interact with accounts they own or with explicit permission
              of the account holder
            </li>
            <li>
              Report vulnerabilities promptly and do not exploit them beyond
              what is necessary to demonstrate the issue
            </li>
            <li>
              Do not publicly disclose vulnerabilities before we have had a
              reasonable opportunity to address them (we ask for at least 90
              days)
            </li>
          </ul>
          <p className="mt-3">
            If legal action is initiated by a third party against you for
            activities conducted in compliance with this policy, we will take
            steps to make your good-faith conduct known.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            How we protect your data
          </h2>
          <p>Our current public surface area is small, and we keep the protections concrete:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>TLS 1.3 in transit, enforced site-wide with HSTS preload</li>
            <li>AES-256-GCM encryption of waitlist email values at rest</li>
            <li>scrypt key derivation for passphrase-to-key generation</li>
            <li>HMAC-SHA256 hashing for duplicate detection (irreversible)</li>
            <li>SQLCipher full-database encryption</li>
            <li>
              Strict Content Security Policy, X-Frame-Options DENY, and a
              minimal cookie footprint (no third-party tracking cookies)
            </li>
            <li>
              Open-source codebase that anyone can audit
            </li>
          </ul>
          <p className="mt-3">
            For a full description of our long-term architectural commitments
            (air-gapped sequencing workstation, witnessed cryptographic
            destruction of working drives, offline customer key handoff), see
            our{" "}
            <Link href="/whitepaper" className="text-accent hover:underline">
              whitepaper
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Important notes
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-3">
            <li>
              <span className="text-text-primary">No bug bounty program.</span>{" "}
              We do not currently pay monetary rewards. We are happy to credit
              researchers publicly for valid reports, with their permission.
            </li>
            <li>
              <span className="text-text-primary">No automated scanning.</span>{" "}
              Please do not run automated vulnerability scanners against our
              production systems without prior coordination. Contact us first
              if you want to perform extensive testing.
            </li>
            <li>
              <span className="text-text-primary">Responsible disclosure.</span>{" "}
              We ask that you give us at least 90 days to address a reported
              issue before any public disclosure.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Contact
          </h2>
          <p>
            For security reports:{" "}
            <a
              href="mailto:security@privdna.com"
              className="text-accent hover:underline"
            >
              security@privdna.com
            </a>
            .
          </p>
          <p className="mt-2">
            For privacy questions, see our{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-bg-elevated">
        <p className="text-text-secondary text-sm italic">
          Security is not a checklist. It is the discipline behind every claim
          we make.
        </p>
      </div>
    </main>
  );
}
