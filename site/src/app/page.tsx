"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import DNASceneLoader from "@/components/three/DNASceneLoader";

const TheProblem = dynamic(() => import("@/components/TheProblem"), { ssr: false });
const ThePromise = dynamic(() => import("@/components/ThePromise"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const GlassWall = dynamic(() => import("@/components/GlassWall"), { ssr: false });
const OpenSource = dynamic(() => import("@/components/OpenSource"), { ssr: false });
const WaitlistSignup = dynamic(() => import("@/components/WaitlistSignup"), { ssr: false });

export default function Home() {
  const scrollProgress = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = docHeight > 0 ? scrollTop / docHeight : 0;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      {/* Fixed DNA helix background — full viewport, behind everything */}
      <div className="fixed inset-0 z-0 opacity-20 md:opacity-40 pointer-events-none md:pointer-events-auto" aria-hidden="true">
        <DNASceneLoader className="w-full h-full" scrollProgress={scrollProgress} />
      </div>

      {/* Scrollable content above the helix */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <TheProblem />
        <ThePromise />
        <HowItWorks />
        <GlassWall />
        <OpenSource />
        <WaitlistSignup />
        <Footer />
      </div>
    </main>
  );
}
