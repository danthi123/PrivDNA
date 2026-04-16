import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locked DNA: What It Means to Actually Own Your Genome | PrivDNA",
  description:
    "Your password can be changed in 30 seconds. Your genome cannot be changed, ever. Here's what locking your DNA actually requires, and why most providers can't do it.",
  openGraph: {
    title: "Locked DNA: What It Means to Actually Own Your Genome",
    description:
      "A leaked password is a 30-second problem. A leaked genome is permanent. PrivDNA exists for the difference.",
  },
  robots: { index: true, follow: true },
};

export default function LockedDNAPage() {
  return (
    <main className="min-h-screen px-6 py-24 md:px-16 lg:px-24 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-accent text-sm hover:underline mb-8 inline-block"
      >
        &larr; Back to PrivDNA
      </Link>

      <header className="mb-14">
        <p className="text-text-secondary text-sm tracking-wide mb-6">
          Pre-launch &middot; Planned for NYC &middot; Genome #1 waitlist open
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Your DNA can be locked.
          <br />
          Here&apos;s what that actually means.
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          Most consumer genomics companies will tell you they protect your data.
          Almost none of them can show you how. This page is the difference
          between a privacy promise and a privacy architecture.
        </p>
      </header>

      <div className="space-y-12 text-text-secondary leading-relaxed">
        <section>
          <h2 className="text-text-primary text-2xl font-semibold mb-4">
            The asymmetry nobody mentions
          </h2>
          <p>Your password is 12 characters.</p>
          <p className="mt-2">Your genome is 3 billion.</p>
          <p className="mt-4">
            When your password leaks, you change it in 30 seconds.
          </p>
          <p className="mt-2">
            When your genome leaks, you change it in zero seconds. Ever. For
            the rest of your life.{" "}
            <span className="text-text-primary">
              And your children&apos;s lives.
            </span>
          </p>
          <p className="mt-4">
            Every other piece of data you have ever shared (email, SSN, credit
            card, phone number, address) can be rotated, reissued, replaced.
            Your genome is the only credential that is literally you.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-2xl font-semibold mb-4">
            Why &ldquo;delete my data&rdquo; isn&apos;t enough
          </h2>
          <p>
            Deletion is a promise. Irrevocability is physics. Once your sequence
            has been copied into research partner handoffs, insurance
            underwriting models, backup systems, and whatever database the
            bankruptcy buyer eventually inherits, the delete button at the
            front-end provider doesn&apos;t reach any of it.
          </p>
          <p className="mt-3">
            In April 2023 through October 2023, 23andMe was credential-stuffed
            for ~14,000 accounts (later revised to 18,000+) and{" "}
            <span className="text-text-primary">
              6.9 million profiles
            </span>{" "}
            were exposed via relative-matching. Those customers can change their
            passwords. They cannot change the genetic data the attackers now
            have. In March 2025 the company filed Chapter 11 and the database
            was sold to TTAM Research Institute for $305 million. The toggle
            flipped without the 15 million customers in that database voting in
            the auction.
          </p>
          <p className="mt-3">
            This is the failure mode of most &ldquo;privacy-first&rdquo;
            consumer genomics companies that retain a copy. Not bad luck. The
            business model.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-2xl font-semibold mb-4">
            The discrimination risk US law does not cover
          </h2>
          <p>
            The Genetic Information Nondiscrimination Act (GINA), passed in
            2008, prevents employers and health insurers from using your
            genetic data against you. It does not cover three categories of
            insurance that most people carry:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>
              <span className="text-text-primary">Life insurance</span>
            </li>
            <li>
              <span className="text-text-primary">Disability insurance</span>
            </li>
            <li>
              <span className="text-text-primary">Long-term care insurance</span>
            </li>
          </ul>
          <p className="mt-3">
            Underwriters in those three lines can keep your sequence in their
            risk models indefinitely, even as the products you bought
            protection for change shape, owner, or jurisdiction. A leaked
            password is a 30-second problem. A leaked genome is an underwriting
            input forever.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-2xl font-semibold mb-4">
            What &ldquo;locked&rdquo; actually requires
          </h2>
          <p>
            For DNA to be genuinely locked, not just claimed-locked in a
            privacy policy, three things have to be true at the same time:
          </p>
          <ol className="list-decimal pl-6 mt-3 space-y-2">
            <li>
              <span className="text-text-primary">
                You hold the only copy.
              </span>{" "}
              Nobody else gets one. Not the lab, not a research partner, not a
              future acquirer.
            </li>
            <li>
              <span className="text-text-primary">
                You can verify the absence of copies.
              </span>{" "}
              Not because someone wrote a sentence in a PDF, but because you
              watched the working drives be cryptographically destroyed.
            </li>
            <li>
              <span className="text-text-primary">
                The custody chain never leaves the room.
              </span>{" "}
              No mail carrier, no sorting facility, no third-party lab you have
              never visited.
            </li>
          </ol>
          <p className="mt-4">
            Anything short of all three leaves real ownership uncertain.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-2xl font-semibold mb-4">
            How PrivDNA does it
          </h2>
          <p>
            Two visits to a physical location. Roughly 55 minutes of your time,
            split across them.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <span className="text-text-primary">Visit 1.</span> You give a
              saliva sample at the lab bench, collected there by a technician,
              not brought in. It is barcoded, logged into chain of custody, and
              handed to the air-gapped sequencer in the same room. Nothing
              leaves the building on a network cable.
            </li>
            <li>
              <span className="text-text-primary">Between visits (4-6 business days).</span>{" "}
              Your sequence is processed on the air-gapped workstation. There
              is no external network connection. Output lives only on
              workstation drives until handoff.
            </li>
            <li>
              <span className="text-text-primary">Visit 2.</span> You receive
              your encrypted drives. Then, through a glass wall, in real time,
              you watch every working copy of your genome on our systems be
              cryptographically erased. Under five seconds per drive. You leave
              with a Certificate of Destruction signed and timestamped.
            </li>
          </ul>
          <p className="mt-4">
            The destruction is the product as much as the sequencing is. If
            the database does not exist at your provider, there is nothing to
            sell, subpoena, breach, or repurpose.
          </p>
        </section>

        <section>
          <h2 className="text-text-primary text-2xl font-semibold mb-4">
            What you walk out with
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-1.5">
            <li>Your whole genome (~30x coverage) on encrypted media you control</li>
            <li>The decryption keys, in your hands, on separate media</li>
            <li>A signed Certificate of Destruction</li>
            <li>
              An open-source pipeline so anyone (a researcher, a journalist, a
              paranoid customer) can audit exactly what happened to your
              sequence data (BAM, VCF, gVCF). Raw FASTQ is available on request.
            </li>
            <li>
              <span className="text-text-primary">No copy left behind.</span>{" "}
              Not for marketing. Not for research. Not for an acquirer.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-text-primary text-2xl font-semibold mb-4">
            Read the architecture
          </h2>
          <p>
            We publish the technical detail because we have to. Privacy claims
            you can&apos;t verify are not privacy claims. They are marketing.
          </p>
          <p className="mt-3">
            <Link
              href="/whitepaper"
              className="text-accent hover:underline"
            >
              Read the PrivDNA whitepaper &rarr;
            </Link>
          </p>
          <p className="mt-2">
            <Link
              href="/security-policy"
              className="text-accent hover:underline"
            >
              Read the security disclosure policy &rarr;
            </Link>
          </p>
        </section>

        <section className="border-t border-bg-elevated pt-10 mt-12">
          <h2 className="text-text-primary text-2xl font-semibold mb-3">
            Be first in line
          </h2>
          <p className="mb-6">
            We are opening the waitlist for the first cohort of genome #1
            customers. Two visits, one genome you leave with, zero copies
            behind.
          </p>
          <Link
            href="/#waitlist"
            className="inline-block bg-accent text-bg-primary font-semibold rounded-full px-8 py-4 hover:scale-105 transition-transform duration-300"
          >
            Join the waitlist &rarr;
          </Link>
        </section>
      </div>

      <div className="mt-16 pt-8 border-t border-bg-elevated">
        <p className="text-text-secondary text-sm italic">
          The only genome nobody can breach is the one that was never uploaded
          in the first place.
        </p>
      </div>
    </main>
  );
}
