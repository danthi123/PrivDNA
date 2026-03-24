"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

const NAV_ITEMS = [
  { label: "The Problem", href: "#problem" },
  { label: "The Promise", href: "#promise" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Open Source", href: "#open-source" },
  { label: "Waitlist", href: "#waitlist" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLAnchorElement[]>([]);
  const lastScrollY = useRef(0);

  // Track scroll direction to show/hide nav bar
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 100) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true); // scrolling up
      } else {
        setVisible(false); // scrolling down
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.to(overlay, {
      autoAlpha: 1,
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.fromTo(
      navItemsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  }, []);

  const closeMenu = useCallback(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.to(overlay, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setIsOpen(false),
    });
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      closeMenu();
      // Delay scroll slightly so overlay closes first
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    },
    [closeMenu]
  );

  return (
    <>
      {/* Fixed nav bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <a href="#" className="text-lg font-bold">
          <span className="text-text-primary">Priv</span>
          <span className="text-accent">DNA</span>
        </a>

        {/* Hamburger */}
        <button
          onClick={() => (isOpen ? closeMenu() : openMenu())}
          className="relative z-[110] flex flex-col justify-center items-center w-10 h-10 gap-[6px]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-6 h-[2px] bg-text-primary transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-text-primary transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-text-primary transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Full-screen overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[105] bg-bg-primary/95 backdrop-blur-md flex items-center justify-center invisible opacity-0"
      >
        <nav className="flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              ref={(el) => {
                if (el) navItemsRef.current[i] = el;
              }}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold text-text-primary hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
