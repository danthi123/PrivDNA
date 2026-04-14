"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const terminalLines = [
  { text: "$ privdna pipeline --verify", delay: 0 },
  { text: "", delay: 0 },
  { text: "# Open source (auditable)", accent: false },
  { text: "\u2713 BWA-MEM2       v2.2.1   [MIT License]", accent: true },
  { text: "\u2713 GATK           v4.6.1.0 [BSD-3-Clause]", accent: true },
  { text: "\u2713 samtools       v1.23.1  [MIT License]", accent: true },
  { text: "\u2713 MultiQC        v1.33    [GPL-v3]", accent: true },
  { text: "", delay: 0 },
  { text: "# Vendor (proprietary, basecaller only)", accent: false },
  { text: "\u25CB bases2fastq    v2.1     [Element Biosciences \u2014 proprietary]", accent: false },
  { text: "", delay: 0 },
  { text: "Network interfaces: NONE", accent: true },
  { text: "Cloud endpoints:    NONE", accent: true },
  { text: "Telemetry:          NONE", accent: true },
  { text: "", delay: 0 },
  { text: "Pipeline manifest published at launch.", accent: true },
];

export default function OpenSource() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      // Set all lines to invisible initially
      lineRefs.current.forEach((el) => {
        if (el) gsap.set(el, { opacity: 0 });
      });

      // Reveal lines on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      lineRefs.current.forEach((el) => {
        if (el) {
          tl.to(el, { opacity: 1, duration: 0.08 });
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="open-source"
      aria-label="Open Source"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-6 md:px-16 lg:px-24 py-24"
    >
      {/* Left column */}
      <div className="flex flex-col justify-center">
        <h2 className="text-[clamp(2rem,4vw,4rem)] font-bold mb-6">
          Trust, but verify.
        </h2>
        <p className="text-text-secondary text-lg mb-8 max-w-lg whitespace-pre-line">
          {"Every custom tool in our pipeline will be open source.\nEvery upstream dependency is independently auditable.\nNo hidden network calls.\nJust clean, verifiable code processing your most personal data."}
        </p>
        <div>
          <a
            href="https://github.com/danthi123/PrivDNA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-accent text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-bg-primary transition-all duration-300"
          >
            View on GitHub &rarr;
          </a>
        </div>
      </div>

      {/* Right column — Terminal */}
      <div className="bg-bg-surface rounded-2xl p-6 font-mono text-xs md:text-sm overflow-x-auto">
        {/* Terminal header dots */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#27c93f" }} />
        </div>

        {/* Terminal content */}
        <div className="space-y-1">
          {terminalLines.map((line, i) => (
            <div
              key={i}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              className={line.accent ? "text-accent" : "text-text-secondary"}
            >
              {line.text || "\u00A0"}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
