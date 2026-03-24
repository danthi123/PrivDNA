"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Show elements (hidden by default to avoid flash)
    dot.style.opacity = "1";
    ring.style.opacity = "0.5";

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onEnterInteractive = () => {
      gsap.to(dot, { scale: 0.5, duration: 0.2 });
      gsap.to(ring, { scale: 1.5, duration: 0.2 });
    };

    const onLeaveInteractive = () => {
      gsap.to(dot, { scale: 1, duration: 0.2 });
      gsap.to(ring, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Delegate interactive hover via event delegation
    const interactiveSelector = 'a, button, [data-cursor="interactive"]';

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        onEnterInteractive();
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement | null;
      if (
        target.closest(interactiveSelector) &&
        !related?.closest(interactiveSelector)
      ) {
        onLeaveInteractive();
      }
    };

    const onMouseDown = () => {
      gsap.to(dot, { scale: 2.5, opacity: 0.8, duration: 0.15, ease: "power2.out" });
      gsap.to(ring, { scale: 0.6, opacity: 1, borderWidth: 2, duration: 0.15, ease: "power2.out" });
    };

    const onMouseUp = () => {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3, ease: "elastic.out(1, 0.4)" });
      gsap.to(ring, { scale: 1, opacity: 0.5, borderWidth: 1, duration: 0.3, ease: "elastic.out(1, 0.4)" });
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full mix-blend-difference pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0 }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: 0 }}
      />
    </>
  );
}
