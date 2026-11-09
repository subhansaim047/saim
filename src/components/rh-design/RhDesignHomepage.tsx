"use client";

import React from "react";
import dynamic from "next/dynamic";
import { RhNavbar } from "./RhNavbar";
import { RhHeroSection } from "./RhHeroSection";
import { RhWhyUsSection } from "./RhWhyUsSection";
import { RhCaseStudiesSection } from "./RhCaseStudiesSection";
import { RhServicesSection } from "./RhServicesSection";
import { RhAboutSection } from "./RhAboutSection";
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
    <div className="min-h-screen bg-[#f4f5f6] text-[#09090b] selection:bg-[#b5f900] selection:text-black font-sans antialiased">
      {/* Top Floating Navbar */}
      <RhNavbar />

      <main>
        {/* 01. Hero Section (Light Canvas #f4f5f6) */}
        <RhHeroSection />

        {/* 02. Why Us Proof Metrics (Light Canvas #f4f5f6) */}
        <RhWhyUsSection />

        {/* 03. Flagship Live Demos / Success Stories (Deep Obsidian #050505) */}
        <RhCaseStudiesSection />

        {/* 04. Services Bento Grid (Deep Obsidian #08080a) */}
        <RhServicesSection />

        {/* 05. Interactive Project Scope Estimator (Deep Obsidian #050505) */}
        <RhEstimatorSection />

        {/* 06. Comparison Matrix (Deep Obsidian #08080a) */}
        <RhWhyMeComparisonSection />

        {/* 07. Transparent Fixed Pricing (Light Canvas #f4f5f6) */}
        <RhPricingSection />

        {/* 08. About Saim Dev Founder (Pure White Canvas #ffffff) */}
        <RhAboutSection />

        {/* 09. Kitchen & Business Tools Utilities (Light Canvas #f4f5f6) */}
        <RhToolsSection />

        {/* 10. Frequently Asked Questions (Pure White Canvas #ffffff) */}
        <RhFaqSection />

        {/* 11. Final Consultation Kickoff CTA (Deep Obsidian #050505) */}
        <RhConsultationSection />
      </main>

      {/* 12. Studio Footer (Deep Obsidian #050505) */}
      <RhFooter />
    </div>
  );
};
