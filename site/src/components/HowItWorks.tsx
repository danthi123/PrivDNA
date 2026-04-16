"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Visit 1 (~25 min)",
    description: "Intake and sample collection at our NYC storefront.\nSaliva or buccal swab, taken at the lab bench.\nNo mail-order kits.",
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
    title: "Sequence",
    description: "Between visits: ~38 hrs.\n30x whole genome on Element AVITI.",
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
    num: "03",
    title: "Process",
    description: "~60-90 min on GPU.\nAir-gapped servers.\nOpen source pipeline.",
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
    num: "04",
    title: "Deliver",
    description: "Visit 2 (4-6 business days later): ~30 min.\nEncrypted USB drive.\nFIPS 140-3 Level 3 certified.",
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
    num: "05",
    title: "Destroy",
    description: "Witnessed through the glass wall.\nEach working drive cryptographically erased in under 5 seconds.\nNIST SP 800-88 Certificate of Destruction signed and timestamped at handoff.",
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
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  useGSAP(() => {
    ScrollTrigger.matchMedia({
      // Desktop: horizontal scroll with pin
      "(min-width: 768px)": function () {
        const outer = outerRef.current;
        const inner = innerRef.current;
        const progress = progressRef.current;
        if (!outer || !inner || !progress) return;

        gsap.to(inner, {
          x: () => -(inner.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            pin: true,
            scrub: 1,
            end: "+=300%",
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(progress, { scaleX: self.progress });
            },
          },
        });
      },

      // Mobile: 2-column grid with fade-in
      "(max-width: 767px)": function () {
        mobileCardRefs.current.forEach((el) => {
          if (!el) return;
          gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      },
    });
  });

  return (
    <section id="how-it-works" aria-label="How It Works">
      {/* Phase 0 framing */}
      <div className="px-6 md:px-16 lg:px-24 pt-16 md:pt-20 text-center">
        <p className="text-text-secondary text-sm md:text-base tracking-wide max-w-2xl mx-auto">
          The planned customer journey. NYC pre-launch. Join the waitlist.
        </p>
      </div>

      {/* Desktop: horizontal scroll with pin */}
      <div ref={outerRef} className="hidden md:block h-screen overflow-hidden relative">
        <div ref={innerRef} className="flex flex-nowrap items-center h-full">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex-shrink-0 w-[50vw] lg:w-[33vw] flex flex-col items-center justify-center px-8 text-center"
            >
              <span className="text-text-secondary text-sm mb-4 tracking-widest">{step.num}</span>
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-text-primary font-bold text-xl md:text-2xl mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm md:text-base max-w-sm whitespace-pre-line">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-8 right-8 h-[2px] bg-bg-elevated">
          <div ref={progressRef} className="h-full bg-accent origin-left" style={{ transform: "scaleX(0)" }} />
        </div>
      </div>

      {/* Mobile: 2-column grid */}
      <div className="md:hidden px-6 py-16">
        <div className="grid grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => { mobileCardRefs.current[i] = el; }}
              className="flex flex-col items-center text-center py-6"
            >
              <span className="text-text-secondary text-xs mb-3 tracking-widest">{step.num}</span>
              <div className="mb-3">{step.icon}</div>
              <h3 className="text-text-primary font-bold text-base mb-1">{step.title}</h3>
              <p className="text-text-secondary text-xs whitespace-pre-line">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
