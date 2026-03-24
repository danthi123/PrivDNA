import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import ThePromise from "@/components/ThePromise";
import HowItWorks from "@/components/HowItWorks";
import GlassWall from "@/components/GlassWall";
import OpenSource from "@/components/OpenSource";
import WaitlistSignup from "@/components/WaitlistSignup";
import Footer from "@/components/Footer";

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
