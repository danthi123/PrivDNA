import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — PrivDNA",
  description: "How PrivDNA handles your data. Minimal collection, zero tracking cookies, full encryption.",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-16 lg:px-24 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-accent text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to PrivDNA
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-text-secondary text-sm mb-12">
        Last updated: March 24, 2026
      </p>

      <div className="space-y-10 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Who we are
          </h2>
          <p>
            PrivDNA is building a privacy-sovereign whole genome sequencing
            service and operates this website (
            <span className="text-text-primary">privdna.com</span>) during the
            pre-launch phase. Our mission is to give people access to their
            genomic data without surrendering control of it. This privacy
            policy reflects that mission — we collect as little as possible
            and protect what we do collect.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            What we collect
          </h2>

          <h3 className="text-text-primary font-medium mt-4 mb-2">
            Waitlist signup
          </h3>
          <p>
            When you join the waitlist, we collect your{" "}
            <span className="text-text-primary">email address</span>. It is:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <span className="text-text-primary">Encrypted at rest</span> with
              AES-256-GCM before being stored
            </li>
            <li>
              <span className="text-text-primary">Hashed</span> with
              HMAC-SHA256 for duplicate detection (the hash cannot be reversed
              to recover your email)
            </li>
            <li>
              Stored in an encrypted SQLCipher database on infrastructure we
              control
            </li>
          </ul>
          <p className="mt-2">
            We also store the date you signed up and a random unsubscribe token.
            We do not store your name, IP address, location, or any other
            personal information.
          </p>

          <h3 className="text-text-primary font-medium mt-6 mb-2">
            Analytics
          </h3>
          <p>
            We use{" "}
            <span className="text-text-primary">Rybbit</span>, an open-source,
            cookieless analytics platform. In production, PrivDNA self-hosts
            this service where feasible; the fallback points to Rybbit&apos;s
            own hosted endpoint (
            <span className="text-text-primary">app.rybbit.io</span>) operated
            by the Rybbit team. It collects:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Page views and navigation paths</li>
            <li>Referrer and UTM parameters (where you came from)</li>
            <li>Browser, device type, operating system, and screen size</li>
            <li>Language preference</li>
            <li>Geographic location (city-level, derived from IP at the edge)</li>
            <li>Session duration and engagement metrics</li>
            <li>Custom events (e.g., waitlist signup — event name only, no email or PII)</li>
            <li>Page performance metrics (Core Web Vitals)</li>
          </ul>
          <p className="mt-2">
            Rybbit does not use cookies, does not fingerprint browsers, and does
            not assign persistent identifiers. Every visitor is anonymous by
            default — there is no way to link analytics data back to a specific
            individual. IP addresses are used transiently for geolocation but
            are not stored in our analytics database.
          </p>

          <h3 className="text-text-primary font-medium mt-6 mb-2">
            Cloudflare
          </h3>
          <p>
            Our site is served through Cloudflare, which processes requests at
            the network edge. Cloudflare may temporarily log IP addresses and
            request metadata for security and performance purposes (DDoS
            protection, bot detection) under their own{" "}
            <a
              href="https://www.cloudflare.com/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              privacy policy
            </a>
            . We do not have access to individual IP addresses in Cloudflare
            logs.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            What we do not collect
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>No cookies (zero — not even analytics cookies)</li>
            <li>No advertising or tracking pixels</li>
            <li>No browser fingerprinting</li>
            <li>The only external script is Rybbit analytics (cookieless, no personal data transmitted)</li>
            <li>No IP address storage</li>
            <li>No location tracking</li>
            <li>No cross-site tracking</li>
          </ul>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            How we use your data
          </h2>
          <p>Your email address is used for one purpose:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              To send you updates about PrivDNA (launch announcements, waitlist
              status)
            </li>
          </ul>
          <p className="mt-2">
            We do not sell, rent, license, or share your email address with any
            third party. We do not use your email for advertising. We do not
            build profiles.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Data sharing
          </h2>
          <p>
            We do not share your personal data with anyone. There are no
            third-party data processors with access to your email address. The
            encrypted database is stored on infrastructure we control and is not
            replicated to any external service.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Data retention and deletion
          </h2>
          <p>
            Your email remains on the waitlist until you unsubscribe or we
            launch the service. You can delete your data at any time:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <span className="text-text-primary">Unsubscribe link</span> —
              every email we send includes an unsubscribe link that immediately
              removes your data
            </li>
            <li>
              <span className="text-text-primary">Email us</span> —
              contact{" "}
              <a
                href="mailto:contact@privdna.com"
                className="text-accent hover:underline"
              >
                contact@privdna.com
              </a>{" "}
              to request deletion
            </li>
          </ul>
          <p className="mt-2">
            When you unsubscribe, your record is soft-deleted (marked as
            unsubscribed). The encrypted email data is retained only for
            duplicate-prevention purposes and cannot be read without the
            encryption key.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Security
          </h2>
          <p>
            We take the security of your data seriously:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              All data in transit is encrypted via TLS 1.3 (enforced by
              Cloudflare)
            </li>
            <li>
              All data at rest is encrypted with AES-256-GCM (email field) and
              SQLCipher (entire database)
            </li>
            <li>HSTS with preload enabled — browsers will only connect via HTTPS</li>
            <li>
              Our waitlist system is{" "}
              <a
                href="https://github.com/danthi123/PrivDNA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                open source
              </a>{" "}
              — you can audit exactly how your data is handled
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Your rights
          </h2>
          <p>Regardless of where you are located, you have the right to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              <span className="text-text-primary">Access</span> — know what
              data we hold about you
            </li>
            <li>
              <span className="text-text-primary">Rectification</span> — correct
              inaccurate data
            </li>
            <li>
              <span className="text-text-primary">Deletion</span> — request
              that we delete your data
            </li>
            <li>
              <span className="text-text-primary">Portability</span> — receive
              your data in a standard format
            </li>
            <li>
              <span className="text-text-primary">Restriction</span> — limit
              how we process your data
            </li>
            <li>
              <span className="text-text-primary">Objection</span> — opt out of
              any communications at any time
            </li>
            <li>
              <span className="text-text-primary">Withdraw consent</span> — at
              any time, without affecting the lawfulness of processing before
              withdrawal
            </li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, email{" "}
            <a
              href="mailto:contact@privdna.com"
              className="text-accent hover:underline"
            >
              contact@privdna.com
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            For European visitors (GDPR)
          </h2>
          <p>
            If you are in the European Economic Area (EEA) or United Kingdom,
            the following applies under the General Data Protection Regulation:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <span className="text-text-primary">Legal basis:</span> We process
              your email address based on your{" "}
              <span className="text-text-primary">consent</span> (Article 6(1)(a)
              GDPR), provided when you voluntarily submit it via the waitlist
              form. You may withdraw consent at any time by unsubscribing.
            </li>
            <li>
              <span className="text-text-primary">Data controller:</span> PrivDNA,
              New York, NY, United States. Contact:{" "}
              <a
                href="mailto:contact@privdna.com"
                className="text-accent hover:underline"
              >
                contact@privdna.com
              </a>
            </li>
            <li>
              <span className="text-text-primary">International transfers:</span>{" "}
              Your data is processed in the United States. We rely on your
              explicit consent for this transfer (Article 49(1)(a) GDPR) and
              apply equivalent security protections regardless of location.
            </li>
            <li>
              <span className="text-text-primary">Automated decision-making:</span>{" "}
              We do not use your data for automated decision-making or profiling.
            </li>
            <li>
              <span className="text-text-primary">Supervisory authority:</span>{" "}
              You have the right to lodge a complaint with your local data
              protection authority if you believe your rights have been violated.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            For California residents (CCPA/CPRA)
          </h2>
          <p>
            If you are a California resident, the California Consumer Privacy
            Act (as amended by the CPRA) provides you with additional rights:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <span className="text-text-primary">Categories of personal
              information collected:</span> Identifiers (email address only).
            </li>
            <li>
              <span className="text-text-primary">Purpose:</span> To send
              waitlist updates and launch announcements.
            </li>
            <li>
              <span className="text-text-primary">Sale or sharing of data:</span>{" "}
              We do <span className="text-text-primary">not</span> sell or share
              your personal information as defined under the CCPA/CPRA.
            </li>
            <li>
              <span className="text-text-primary">Right to know:</span> You may
              request the categories and specific pieces of personal information
              we have collected about you.
            </li>
            <li>
              <span className="text-text-primary">Right to delete:</span> You may
              request deletion of your personal information.
            </li>
            <li>
              <span className="text-text-primary">Right to opt out:</span> Not
              applicable — we do not sell or share personal information.
            </li>
            <li>
              <span className="text-text-primary">Non-discrimination:</span> We
              will not discriminate against you for exercising any of your CCPA
              rights.
            </li>
            <li>
              <span className="text-text-primary">Authorized agent:</span> You
              may designate an authorized agent to make a request on your behalf
              by emailing us with written authorization.
            </li>
          </ul>
          <p className="mt-2">
            To make a verifiable consumer request, email{" "}
            <a
              href="mailto:contact@privdna.com"
              className="text-accent hover:underline"
            >
              contact@privdna.com
            </a>
            . We will verify your identity by confirming the email address
            associated with your request.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            For New York residents
          </h2>
          <p>
            We comply with the New York SHIELD Act (Stop Hacks and Improve
            Electronic Data Security Act), which requires businesses that hold
            private information of New York residents to implement reasonable
            security safeguards. Our safeguards include:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>AES-256-GCM encryption of personal data at rest</li>
            <li>TLS 1.3 encryption of all data in transit</li>
            <li>Access controls limiting who can access the encrypted database</li>
            <li>
              Open-source codebase enabling independent security audits
            </li>
          </ul>
          <p className="mt-2">
            In the event of a data breach involving your private information, we
            will notify you in accordance with the SHIELD Act&apos;s notification
            requirements.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Children
          </h2>
          <p>
            Our service is not directed to individuals under the age of 18. We
            do not knowingly collect personal data from children. If you believe
            a child has provided us with their email address, please contact us
            and we will delete it immediately.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Changes to this policy
          </h2>
          <p>
            If we make material changes to this privacy policy, we will notify
            waitlist subscribers by email before the changes take effect. The
            &ldquo;Last updated&rdquo; date at the top of this page reflects the
            most recent revision.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-xl font-semibold mb-3">
            Contact
          </h2>
          <p>
            For privacy-related questions or requests, email{" "}
            <a
              href="mailto:contact@privdna.com"
              className="text-accent hover:underline"
            >
              contact@privdna.com
            </a>
            .
          </p>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-bg-elevated">
        <p className="text-text-secondary text-sm italic">
          Privacy is not a feature. It&apos;s the architecture.
        </p>
      </div>
    </main>
  );
}
