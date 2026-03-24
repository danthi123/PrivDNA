"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

export default function GlassWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const content = contentRef.current;
      if (!content) return;

      gsap.from(content, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-label="The Glass Wall"
      className="h-[60vh] md:h-screen relative overflow-hidden flex items-end"
      style={{
        background: `
          radial-gradient(ellipse at 60% 50%, rgba(0, 232, 200, 0.08) 0%, transparent 70%),
          radial-gradient(ellipse at 30% 60%, rgba(120, 80, 200, 0.05) 0%, transparent 60%),
          var(--color-bg-elevated)
        `,
      }}
    >
      <div ref={contentRef} className="p-6 md:p-8">
        <p className="text-text-primary font-bold text-lg">Manhattan, NYC</p>
        <p className="text-text-secondary text-sm tracking-widest uppercase">
          Opening 2027
        </p>
      </div>
    </section>
  );
}
