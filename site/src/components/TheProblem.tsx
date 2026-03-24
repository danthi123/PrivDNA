"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TheProblem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const slide1 = slide1Ref.current;
      const slide2 = slide2Ref.current;
      const slide3 = slide3Ref.current;
      if (!container || !slide1 || !slide2 || !slide3) return;

      // Main pinned timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: "+=200%",
        },
      });

      // Slide 1 fades out at 0.3
      tl.to(slide1, { opacity: 0, duration: 0.3 }, 0);
      // Slide 2 fades in at 0.3, fades out at 0.65
      tl.fromTo(slide2, { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.25);
      tl.to(slide2, { opacity: 0, duration: 0.15 }, 0.55);
      // Slide 3 fades in at 0.65
      tl.fromTo(slide3, { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.6);

      // Counter animation — triggers once on first enter
      ScrollTrigger.create({
        trigger: container,
        start: "top center",
        once: true,
        onEnter: () => {
          const counter = counterRef.current;
          if (!counter) return;
          const obj = { val: 0 };
          gsap.to(obj, {
            val: 15000000,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: () => {
              counter.innerText = Math.round(obj.val).toLocaleString();
            },
          });
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="problem" aria-label="The Problem">
      <div
        ref={containerRef}
        className="h-screen flex items-center justify-center relative"
      >
        {/* Slide 1 — The Stat */}
        <div
          ref={slide1Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <span
            ref={counterRef}
            className="text-accent text-[clamp(3rem,10vw,10rem)] font-bold tabular-nums"
          >
            0
          </span>
          <p className="text-text-secondary text-lg md:text-xl mt-4 max-w-md">
            genomes sold in bankruptcy court. March 2025.
          </p>
        </div>

        {/* Slide 2 — The Pattern */}
        <div
          ref={slide2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center gap-6 opacity-0"
        >
          <p className="text-lg md:text-xl text-text-primary max-w-2xl">
            23andMe sold your data for{" "}
            <span className="text-accent">$20 per genome</span>.
          </p>
          <p className="text-lg md:text-xl text-text-primary max-w-2xl">
            Nebula shared it with{" "}
            <span className="text-accent">Meta, Google, and Microsoft</span>.
          </p>
          <p className="text-lg md:text-xl text-text-primary max-w-2xl">
            Ancestry valued each customer at{" "}
            <span className="text-accent">$250</span>.
          </p>
        </div>

        {/* Slide 3 — The Question */}
        <div
          ref={slide3Ref}
          className="absolute inset-0 flex items-center justify-center px-6 text-center opacity-0"
        >
          <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold">
            Who owns <span className="text-accent">your DNA</span>?
          </h2>
        </div>
      </div>
    </section>
  );
}
