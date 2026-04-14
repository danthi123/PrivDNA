import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import ThePromise from "@/components/ThePromise";
import HowItWorks from "@/components/HowItWorks";
import GlassWall from "@/components/GlassWall";
import OpenSource from "@/components/OpenSource";
import Pricing from "@/components/Pricing";
import WaitlistSignup from "@/components/WaitlistSignup";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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
      <Pricing />
      <WaitlistSignup />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
