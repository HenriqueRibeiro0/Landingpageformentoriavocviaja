import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { HowItWorks } from "./components/HowItWorks";
import { FlightProofs } from "./components/FlightProofs";
import { CredentialsProof } from "./components/CredentialsProof";
import { WhatItIsNot } from "./components/WhatItIsNot";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingCTA />
      <Hero />
      <TestimonialsSection />
      <div id="como-funciona">
        <HowItWorks />
      </div>
      <div id="o-que-leva">
        <FlightProofs />
      </div>
      <div id="o-que-nao-e">
        <WhatItIsNot />
      </div>
      <div id="prova">
        <CredentialsProof />
      </div>
      <div id="preco">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
