import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ProcessSection } from "./components/ProcessSection";
import { PerformanceSection } from "./components/PerformanceSection";
import { BackendSection } from "./components/BackendSection";
import { TechStackSection } from "./components/TechStackSection";
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
import { BlogsPage } from "./components/BlogsPage";
import { BlogPost1Page } from "./components/BlogPost1Page";
import { Helmet } from "react-helmet-async";

const HomePage = () => (
  <main className="min-h-screen bg-black text-[#E1E0CC] overflow-x-hidden selection:bg-primary selection:text-black">
    <Helmet>
      <title>Saim Dev â€” Full Stack Web Developer | Next.js, React, Node.js</title>
      <meta name="description" content="Custom high-performance websites for businesses. Built with Next.js, React, and Node.js. Fast delivery in 5-10 days. Starting from $500." />
      <link rel="canonical" href="https://www.saimdev.site/" />
      <meta property="og:title" content="Saim Dev â€” Full Stack Web Developer" />
      <meta property="og:description" content="Custom high-performance websites for businesses. Fast delivery in 5-10 days." />
      <meta property="og:url" content="https://www.saimdev.site/" />
      <meta property="og:type" content="website" />
    </Helmet>
    <HeroSection />
    <AboutSection />
    <BenefitsSection />
    <ProcessSection />
    <PerformanceSection />
    <BackendSection />
    <TechStackSection />
    <PricingSection />
    <FaqSection />
    <CtaSection />
    <FooterSection />
  </main>
);

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/technologies" element={<TechnologiesPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/demos" element={<DemosPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blog/why-small-business-needs-website-2026" element={<BlogPost1Page />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

