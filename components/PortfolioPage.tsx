import { About } from "@/components/About";
import { AOSInit } from "@/components/AOSInit";
import { Contact } from "@/components/Contact";
import { Counters } from "@/components/Counters";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HireMe } from "@/components/HireMe";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { Skills } from "@/components/Skills";

export function PortfolioPage() {
  return (
    <>
      <AOSInit />
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Counters />
      <HireMe />
      <Contact />
      <Footer />
    </>
  );
}

