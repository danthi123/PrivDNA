"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
      className="relative overflow-hidden"
    >
      {/* Storefront concept image */}
      <div className="relative w-full aspect-video md:h-screen md:aspect-auto">
        <Image
          src="/storefront-concept.webp"
          alt="PrivDNA storefront concept — a glass-walled genomics lab in Manhattan with a reception area, lab technician, and server rack visible through the partition"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/30 to-transparent" />
      </div>

      {/* Text overlay */}
      <div ref={contentRef} className="absolute bottom-0 left-0 p-6 md:p-8">
        <p className="text-text-primary font-bold text-lg">Manhattan, NYC</p>
        <p className="text-text-secondary text-sm tracking-widest uppercase">
          Opening soon
        </p>
      </div>
    </section>
  );
}
