"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TheProblem() {
  const desktopRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const mSlide1Ref = useRef<HTMLDivElement>(null);
  const mSlide2Ref = useRef<HTMLDivElement>(null);
  const mSlide3Ref = useRef<HTMLDivElement>(null);
  const mCounterRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      // Desktop: pinned crossfade timeline
      "(min-width: 768px)": function () {
        const container = desktopRef.current;
        const slide1 = slide1Ref.current;
        const slide2 = slide2Ref.current;
        const slide3 = slide3Ref.current;
        if (!container || !slide1 || !slide2 || !slide3) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            end: "+=200%",
          },
        });

        tl.to(slide1, { opacity: 0, duration: 0.3 }, 0);
        tl.fromTo(slide2, { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.25);
        tl.to(slide2, { opacity: 0, duration: 0.15 }, 0.55);
        tl.fromTo(slide3, { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.6);

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

      // Mobile: simple fade-in per block
      "(max-width: 767px)": function () {
        [mSlide1Ref, mSlide2Ref, mSlide3Ref].forEach((ref) => {
          const el = ref.current;
          if (!el) return;
          gsap.from(el, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        });

        const counter = mCounterRef.current;
        if (counter) {
          ScrollTrigger.create({
            trigger: mSlide1Ref.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
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
        }
      },
    });
  });

  return (
    <section id="problem" aria-label="The Problem">
      {/* Desktop: pinned crossfade */}
      <div
        ref={desktopRef}
        className="hidden md:flex h-screen items-center justify-center relative"
      >
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
            customer DNA records sold in bankruptcy court. March 2025.
          </p>
        </div>
        <div
          ref={slide2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center gap-6 opacity-0"
        >
          <p className="text-lg md:text-xl text-text-primary max-w-2xl">
            23andMe&apos;s database was sold for{" "}
            <span className="text-accent">~$20 per customer</span>.
          </p>
          <p className="text-lg md:text-xl text-text-primary max-w-2xl">
            A class-action lawsuit alleges Nebula shared it with{" "}
            <span className="text-accent">Meta, Google, and Microsoft</span>.
          </p>
          <p className="text-lg md:text-xl text-text-primary max-w-2xl">
            Ancestry valued each customer at{" "}
            <span className="text-accent">$250</span>.
          </p>
        </div>
        <div
          ref={slide3Ref}
          className="absolute inset-0 flex items-center justify-center px-6 text-center opacity-0"
        >
          <h2 className="text-[clamp(2.5rem,8vw,8rem)] font-bold">
            Who owns <span className="text-accent">your DNA</span>?
          </h2>
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden">
        <div ref={mSlide1Ref} className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
          <span
            ref={mCounterRef}
            className="text-accent text-[clamp(3rem,10vw,10rem)] font-bold tabular-nums"
          >
            0
          </span>
          <p className="text-text-secondary text-lg mt-4 max-w-md">
            customer DNA records sold in bankruptcy court. March 2025.
          </p>
        </div>
        <div ref={mSlide2Ref} className="min-h-[50vh] flex flex-col items-center justify-center px-6 text-center gap-6">
          <p className="text-lg text-text-primary max-w-2xl">
            23andMe&apos;s database was sold for{" "}
            <span className="text-accent">~$20 per customer</span>.
          </p>
          <p className="text-lg text-text-primary max-w-2xl">
            A class-action lawsuit alleges Nebula shared it with{" "}
            <span className="text-accent">Meta, Google, and Microsoft</span>.
          </p>
          <p className="text-lg text-text-primary max-w-2xl">
            Ancestry valued each customer at{" "}
            <span className="text-accent">$250</span>.
          </p>
        </div>
        <div ref={mSlide3Ref} className="min-h-[50vh] flex items-center justify-center px-6 text-center">
          <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-bold">
            Who owns <span className="text-accent">your DNA</span>?
          </h2>
        </div>
      </div>
    </section>
  );
}
