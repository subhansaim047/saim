import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { BackendSection } from "@/components/BackendSection";
import { TechStackSection } from "@/components/TechStackSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <PerformanceSection />
      <TechStackSection />
      <ProcessSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
