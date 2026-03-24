"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useIsMobile } from "@/lib/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Physical Transparency",
    description:
      "Watch your genome being sequenced through a glass wall.\nEvery step visible.\nNothing hidden.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        <ellipse cx="32" cy="32" rx="28" ry="16" />
        <circle cx="32" cy="32" r="8" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Cryptographic Verifiability",
    description:
      "Our entire pipeline is open source on GitHub.\nAudit the code that touches your DNA.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        <polyline points="20,16 8,32 20,48" />
        <polyline points="44,16 56,32 44,48" />
        <line x1="36" y1="12" x2="28" y2="52" />
      </svg>
    ),
  },
  {
    title: "Zero Retention",
    description:
      "Your data is created, handed to you, and destroyed.\nNo copies.\nNo cloud.\nNo exceptions.",
    icon: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent"
      >
        <path d="M12 16 L32 4 L52 16 L52 40 L32 52 L12 40 Z" />
        <line x1="22" y1="22" x2="42" y2="42" />
        <line x1="42" y1="22" x2="22" y2="42" />
      </svg>
    ),
  },
];

export default function ThePromise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useIsMobile();

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      if (isMobile) {
        // Mobile: simple staggered fade-in per pillar
        pillarRefs.current.forEach((el) => {
          if (!el) return;
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      } else {
        // Desktop: pinned horizontal slide
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: "+=300%",
          },
        });

        const p0 = pillarRefs.current[0];
        const p1 = pillarRefs.current[1];
        const p2 = pillarRefs.current[2];

        if (!p0 || !p1 || !p2) return;

        gsap.set(p1, { xPercent: 100 });
        gsap.set(p2, { xPercent: 100 });

        tl.to(p0, { xPercent: -100, duration: 0.3 }, 0.15);
        tl.to(p1, { xPercent: 0, duration: 0.3 }, 0.15);
        tl.to(p1, { xPercent: -100, duration: 0.3 }, 0.55);
        tl.to(p2, { xPercent: 0, duration: 0.3 }, 0.55);
      }
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  if (isMobile) {
    // Mobile: vertical stack
    return (
      <section id="promise" aria-label="The Promise" ref={containerRef}>
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            ref={(el) => { pillarRefs.current[i] = el; }}
            className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center"
          >
            <div className="mb-6">{pillar.icon}</div>
            <h3 className="text-accent text-2xl font-bold mb-4">
              {pillar.title}
            </h3>
            <p className="text-text-secondary text-lg max-w-lg whitespace-pre-line">
              {pillar.description}
            </p>
          </div>
        ))}
      </section>
    );
  }

  // Desktop: pinned horizontal slide
  return (
    <section id="promise" aria-label="The Promise">
      <div
        ref={containerRef}
        className="h-screen relative overflow-hidden"
      >
        {pillars.map((pillar, i) => (
          <div
            key={pillar.title}
            ref={(el) => { pillarRefs.current[i] = el; }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <div className="mb-6">{pillar.icon}</div>
            <h3 className="text-accent text-2xl md:text-3xl font-bold mb-4">
              {pillar.title}
            </h3>
            <p className="text-text-secondary text-lg max-w-lg whitespace-pre-line">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
