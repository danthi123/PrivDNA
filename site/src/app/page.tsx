"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const TheProblem = dynamic(() => import("@/components/TheProblem"), { ssr: false });
const ThePromise = dynamic(() => import("@/components/ThePromise"), { ssr: false });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: false });
const GlassWall = dynamic(() => import("@/components/GlassWall"), { ssr: false });
const OpenSource = dynamic(() => import("@/components/OpenSource"), { ssr: false });
const WaitlistSignup = dynamic(() => import("@/components/WaitlistSignup"), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TheProblem />
      <ThePromise />
      <HowItWorks />
      <GlassWall />
      <OpenSource />
      <WaitlistSignup />
      <Footer />
    </main>
  );
}
