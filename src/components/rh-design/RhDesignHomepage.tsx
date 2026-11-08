"use client";

import React from "react";
import dynamic from "next/dynamic";
import { RhNavbar } from "./RhNavbar";
import { RhHeroSection } from "./RhHeroSection";
import { RhAboutSection } from "./RhAboutSection";
import { RhWhyUsSection } from "./RhWhyUsSection";
import { RhServicesSection } from "./RhServicesSection";
import { RhCaseStudiesSection } from "./RhCaseStudiesSection";
import { RhBenefitsSection } from "./RhBenefitsSection";
import { RhPerformanceSection } from "./RhPerformanceSection";
import { RhTechStackSection } from "./RhTechStackSection";
import { RhProcessSection } from "./RhProcessSection";
import { RhToolsSection } from "./RhToolsSection";
import { RhFaqSection } from "./RhFaqSection";
import { RhConsultationSection } from "./RhConsultationSection";
import { RhFooter } from "./RhFooter";

// Lazy-load complex interactive calculators below the fold to keep initial JS bundle ultra-lean
const RhEstimatorSection = dynamic(
  () => import("./RhEstimatorSection").then((m) => m.RhEstimatorSection),
  { ssr: true }
);
const RhWhyMeComparisonSection = dynamic(
  () => import("./RhWhyMeComparisonSection").then((m) => m.RhWhyMeComparisonSection),
  { ssr: true }
);
const RhPricingSection = dynamic(
  () => import("./RhPricingSection").then((m) => m.RhPricingSection),
  { ssr: true }
);

export const RhDesignHomepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-[#b5f900] selection:text-black font-sans antialiased">
      {/* Top Floating Navbar */}
      <RhNavbar />

      <main>
        {/* 01. Hero Section (Ultra-Fast Initial Paint) */}
        <RhHeroSection />

        {/* 02. About Saim Dev Studio */}
        <RhAboutSection />

        {/* 03. Why Us Proof Metrics */}
        <RhWhyUsSection />

        {/* 04. Services Bento Grid */}
        <RhServicesSection />

        {/* 05. Flagship Live Demos */}
        <RhCaseStudiesSection />

        {/* 06. Interactive Project Scope Estimator (Code-Split) */}
        <RhEstimatorSection />

        {/* 07. Architectural Advantage */}
        <RhBenefitsSection />

        {/* 08. Comparison Matrix (Code-Split) */}
        <RhWhyMeComparisonSection />

        {/* 09. Performance & 100/100 Core Web Vitals */}
        <RhPerformanceSection />

        {/* 10. Technology Stack */}
        <RhTechStackSection />

        {/* 11. Sprint Process */}
        <RhProcessSection />

        {/* 12. Transparent Fixed Pricing (Code-Split) */}
        <RhPricingSection />

        {/* 13. Kitchen Tools Utilities */}
        <RhToolsSection />

        {/* 14. Frequently Asked Questions */}
        <RhFaqSection />

        {/* 15. Final Consultation Kickoff CTA */}
        <RhConsultationSection />
      </main>

      {/* 16. Studio Footer */}
      <RhFooter />
    </div>
  );
};
