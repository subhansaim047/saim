"use client";

import React from "react";
import { RhNavbar } from "./RhNavbar";
import { RhHeroSection } from "./RhHeroSection";
import { RhWhyUsSection } from "./RhWhyUsSection";
import { RhCaseStudiesSection } from "./RhCaseStudiesSection";
import { RhServicesSection } from "./RhServicesSection";
import { RhWhyMeComparisonSection } from "./RhWhyMeComparisonSection";
import { RhPricingSection } from "./RhPricingSection";
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

        {/* 02. Why Us & Statistics */}
        <RhWhyUsSection />

        {/* 03. Case Studies & Live Deployments */}
        <RhCaseStudiesSection />

        {/* 04. Services Architecture */}
        <RhServicesSection />

        {/* 05. Why Me / Advantage Comparison */}
        <RhWhyMeComparisonSection />

        {/* 06. Transparent Pricing Packages */}
        <RhPricingSection />

        {/* 07. FAQ Accordion (DNA Matched) */}
        <RhFaqSection />

        {/* 08. Let's Talk / Consultation CTA */}
        <RhConsultationSection />
      </main>

      {/* 09. Minimalist Studio Footer */}
      <RhFooter />
    </div>
  );
};