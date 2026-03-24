"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const headline = headlineRef.current;
      if (!headline) return;

      // Try SplitText, fall back to simple fade
      let splitInstance: { chars?: HTMLElement[]; revert: () => void } | null =
        null;
      try {
        // @ts-expect-error SplitText may not be available in all GSAP builds
        const { SplitText } = gsap.plugins || {};
        if (SplitText) {
          splitInstance = new SplitText(headline, { type: "chars" });
        }
      } catch {
        // SplitText not available
      }

      if (splitInstance?.chars) {
        gsap.from(splitInstance.chars, {
          y: 80,
          opacity: 0,
          stagger: 0.03,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });
      } else {
        gsap.from(headline, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });
      }

      gsap.from(subtextRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.8,
      });

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.1,
      });

      gsap.from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 1.5,
      });
    },
    { scope: sectionRef }
  );

  const scrollToWaitlist = () => {
    document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Left content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-16 lg:px-24">
        <h1
          ref={headlineRef}
          className="text-[clamp(2.5rem,6vw,7rem)] font-bold leading-[0.95] tracking-tight flex flex-col gap-[0.15em]"
        >
          <span className="whitespace-nowrap">Your genome.</span>
          <span className="whitespace-nowrap">Your hands.</span>
          <span className="whitespace-nowrap text-accent">No copies.</span>
        </h1>

        <p
          ref={subtextRef}
          className="mt-6 text-text-secondary text-[clamp(1rem,1.5vw,1.5rem)] max-w-lg whitespace-pre-line"
        >
          {"Air-gapped whole genome sequencing.\nOpen source.\nZero retention."}
        </p>

        <button
          ref={ctaRef}
          onClick={scrollToWaitlist}
          className="mt-8 bg-accent text-bg-primary font-semibold text-lg rounded-full px-8 py-4 hover:scale-105 transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
        >
          Join the Waitlist
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-secondary tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-text-secondary/50 animate-pulse" />
      </div>
    </section>
  );
}
