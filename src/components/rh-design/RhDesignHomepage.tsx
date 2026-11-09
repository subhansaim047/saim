"use client";

import React from "react";
import { RhNavbar } from "./RhNavbar";
import { RhHeroSection } from "./RhHeroSection";
import { RhAboutSection } from "./RhAboutSection";
import { RhWhyUsSection } from "./RhWhyUsSection";
import { RhServicesSection } from "./RhServicesSection";
import { RhCaseStudiesSection } from "./RhCaseStudiesSection";
import { RhEstimatorSection } from "./RhEstimatorSection";
import { RhBenefitsSection } from "./RhBenefitsSection";
import { RhWhyMeComparisonSection } from "./RhWhyMeComparisonSection";
import { RhPerformanceSection } from "./RhPerformanceSection";
import { RhTechStackSection } from "./RhTechStackSection";
import { RhProcessSection } from "./RhProcessSection";
import { RhPricingSection } from "./RhPricingSection";
import { RhToolsSection } from "./RhToolsSection";
import { RhFaqSection } from "./RhFaqSection";
import { RhConsultationSection } from "./RhConsultationSection";
import { RhFooter } from "./RhFooter";

export const RhDesignHomepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-[#b5f900] selection:text-black font-sans antialiased">
      {/* Top Floating Navbar */}
      <RhNavbar />

      <main>
        {/* 01. Hero Section */}
        <RhHeroSection />

        {/* 02. About Saim Dev Studio (UK Registered & PK Engineering Hub) */}
        <RhAboutSection />

        {/* 03. Why Us & Statistics (100%, £0 Upfront, <380ms, 15+ Demos) */}
        <RhWhyUsSection />

        {/* 04. Services Bento Grid ($1,900 Clone, Headless eCommerce, Takeaway £250, etc.) */}
        <RhServicesSection />

        {/* 05. Flagship Live Demos & Production Deployments */}
        <RhCaseStudiesSection />

        {/* 06. Interactive Project Scope Estimator */}
        <RhEstimatorSection />

        {/* 07. Architectural Advantage (Why Next.js Decimates WordPress & Shopify) */}
        <RhBenefitsSection />

        {/* 08. Comparison Matrix (Saim Dev Direct vs Bloated Agency vs Cheap Freelancers) */}
        <RhWhyMeComparisonSection />

        {/* 09. Performance & 100/100 Core Web Vitals */}
        <RhPerformanceSection />

        {/* 10. Modern Production Technology Stack */}
        <RhTechStackSection />

        {/* 11. How We Work (The $0 Upfront Sprint) */}
        <RhProcessSection />

        {/* 12. Transparent Fixed Pricing Packages */}
        <RhPricingSection />

        {/* 13. Free Kitchen & Commercial Tools */}
        <RhToolsSection />

        {/* 14. Frequently Asked Questions Accordion */}
        <RhFaqSection />

        {/* 15. Final Consultation Kickoff CTA */}
        <RhConsultationSection />
      </main>

      {/* 16. Studio Footer */}
      <RhFooter />
    </div>
  );
};
