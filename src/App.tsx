import { useState, useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ProcessSection } from "./components/ProcessSection";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { FooterSection } from "./components/FooterSection";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { ContactPage } from "./components/ContactPage";
import { TechnologiesPage } from "./components/TechnologiesPage";
import { CaseStudiesPage } from "./components/CaseStudiesPage";
import { DemosPage } from "./components/DemosPage";
import { ServicesPage } from "./components/ServicesPage";

export function App() {
  const [currentView, setCurrentView] = useState<
    "home" | "privacy" | "terms" | "contact" | "technologies" | "case-studies" | "services" | "demos"
  >("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#privacy") {
        setCurrentView("privacy");
        window.scrollTo(0, 0);
      } else if (hash === "#terms") {
        setCurrentView("terms");
        window.scrollTo(0, 0);
      } else if (hash === "#contact") {
        setCurrentView("contact");
        window.scrollTo(0, 0);
      } else if (hash === "#technologies") {
        setCurrentView("technologies");
        window.scrollTo(0, 0);
      } else if (hash === "#case-studies") {
        setCurrentView("case-studies");
        window.scrollTo(0, 0);
      } else if (hash === "#services") {
        setCurrentView("services");
        window.scrollTo(0, 0);
      } else if (hash === "#demos") {
        setCurrentView("demos");
        window.scrollTo(0, 0);
      } else {
        setCurrentView("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const goHome = () => {
    window.location.hash = "";
    setCurrentView("home");
    window.scrollTo(0, 0);
  };

  if (currentView === "privacy") return <PrivacyPolicy onBack={goHome} />;
  if (currentView === "terms") return <TermsOfService onBack={goHome} />;
  if (currentView === "contact") return <ContactPage onBack={goHome} />;
  if (currentView === "technologies") return <TechnologiesPage onBack={goHome} />;
  if (currentView === "case-studies") return <CaseStudiesPage onBack={goHome} />;
  if (currentView === "services") return <ServicesPage onBack={goHome} />;
  if (currentView === "demos") return <DemosPage onBack={goHome} />;

  return (
    <main className="min-h-screen bg-black text-[#E1E0CC] overflow-x-hidden selection:bg-primary selection:text-black">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <FooterSection
        onOpenPrivacy={() => {
          window.location.hash = "#privacy";
          setCurrentView("privacy");
          window.scrollTo(0, 0);
        }}
        onOpenTerms={() => {
          window.location.hash = "#terms";
          setCurrentView("terms");
          window.scrollTo(0, 0);
        }}
        onOpenContact={() => {
          window.location.hash = "#contact";
          setCurrentView("contact");
          window.scrollTo(0, 0);
        }}
        onOpenServices={() => {
          window.location.hash = "#services";
          setCurrentView("services");
          window.scrollTo(0, 0);
        }}
        onOpenTech={() => {
          window.location.hash = "#technologies";
          setCurrentView("technologies");
          window.scrollTo(0, 0);
        }}
        onOpenCaseStudies={() => {
          window.location.hash = "#case-studies";
          setCurrentView("case-studies");
          window.scrollTo(0, 0);
        }}
      />
    </main>
  );
}

export default App;
