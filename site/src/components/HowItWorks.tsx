"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Walk In",
    description: "Visit our NYC storefront. No mail-order kits.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <rect x="8" y="12" width="32" height="28" rx="2" />
        <path d="M20 40V28h8v12" />
        <path d="M8 12L24 4l16 8" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Sample",
    description: "Saliva collection in under 10 minutes.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M18 8h12v4l4 20a4 4 0 01-4 4H18a4 4 0 01-4-4l4-20V8z" />
        <line x1="18" y1="8" x2="30" y2="8" />
        <path d="M18 28h12" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Sequence",
    description: "30x whole genome on Illumina NextSeq 2000.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M16 8c0 4 8 8 8 12s-8 8-8 12 8 8 8 12" />
        <path d="M32 8c0 4-8 8-8 12s8 8 8 12-8 8-8 12" />
        <line x1="16" y1="14" x2="32" y2="14" />
        <line x1="16" y1="26" x2="32" y2="26" />
        <line x1="16" y1="38" x2="32" y2="38" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Process",
    description: "Air-gapped servers. Open source pipeline.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <rect x="10" y="8" width="28" height="12" rx="2" />
        <rect x="10" y="28" width="28" height="12" rx="2" />
        <line x1="24" y1="20" x2="24" y2="28" />
        <circle cx="16" cy="14" r="1.5" fill="currentColor" />
        <circle cx="16" cy="34" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Deliver",
    description: "Encrypted USB drive. FIPS 140-3 certified.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <rect x="12" y="16" width="24" height="20" rx="3" />
        <path d="M18 16v-4a6 6 0 0112 0v4" />
        <circle cx="24" cy="28" r="3" />
        <line x1="24" y1="31" x2="24" y2="34" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Destroy",
    description: "Witnessed data destruction. Certificate provided.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
        <path d="M14 14h20l-2 26H16L14 14z" />
        <line x1="10" y1="14" x2="38" y2="14" />
        <path d="M20 14V10h8v4" />
        <line x1="20" y1="20" x2="20" y2="34" />
        <line x1="24" y1="20" x2="24" y2="34" />
        <line x1="28" y1="20" x2="28" y2="34" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      const progress = progressRef.current;
      if (!outer || !inner || !progress) return;

      const totalWidth = inner.scrollWidth;
      const viewportWidth = window.innerWidth;

      gsap.to(inner, {
        x: -(totalWidth - viewportWidth),
        ease: "none",
        scrollTrigger: {
          trigger: outer,
          pin: true,
          scrub: 1,
          end: "+=300%",
          onUpdate: (self) => {
            gsap.set(progress, { scaleX: self.progress });
          },
        },
      });
    },
    { scope: outerRef }
  );

  return (
    <section id="how-it-works" aria-label="How It Works">
      <div ref={outerRef} className="h-screen overflow-hidden relative">
        <div
          ref={innerRef}
          className="flex flex-nowrap items-center h-full"
        >
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[33vw] flex flex-col items-center justify-center px-8 text-center"
            >
              <span className="text-text-secondary text-sm mb-4 tracking-widest">
                {step.num}
              </span>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-text-primary font-bold text-xl md:text-2xl mb-2">
                {step.title}
              </h3>
              <p className="text-text-secondary text-sm md:text-base max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Progress line */}
        <div className="absolute bottom-8 left-8 right-8 h-[2px] bg-bg-elevated">
          <div
            ref={progressRef}
            className="h-full bg-accent origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </section>
  );
}
