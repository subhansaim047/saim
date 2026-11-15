"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Zap,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RhHeader } from "./rh/RhHeader";
import { SiteFooter } from "./SiteFooter";
import {
  RhHeroPinned,
  RhProblemSolutionDeck,
  RhSystemRows,
} from "./rh/RhModernSections";

interface CaseStudy {
  id: string;
  category: "healthcare" | "automotive" | "beauty";
  archetypeName: string;
  industryTag: string;
  headline: string;
  metricBadge: string;
  metricHighlight: string;
  problemText: string;
  solutionText: string;
  beforeStats: { loadTime: string; score: number; bounceRate: string };
  afterStats: { loadTime: string; score: number; bounceRate: string };
  architectureNote: { summary: string; focus: string; deliverables: string };
  previewImage: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "dental-clinic-architecture",
    category: "healthcare",
    archetypeName: "Private Dental & Aesthetics Archetype",
    industryTag: "Healthcare · Reference Architecture",
    headline: "Replacing 4.8s WordPress Clinic Themes with Sub-Second Appointment Routing",
    metricBadge: "Target <0.8s Mobile LCP",
    metricHighlight: "Direct Appointment & WhatsApp Triage Architecture",
    problemText:
      "Multi-plugin clinic websites commonly block first paint with bloated scheduling iframes and oversized gallery bitmaps, driving high mobile drop-off before treatment enquiry forms load.",
    solutionText:
      "Engineered a lean Next.js App Router layout featuring lightweight appointment routing, MedicalBusiness JSON-LD schema, and optimised WebP treatment cards.",
    beforeStats: { loadTime: "4.8s typ.", score: 38, bounceRate: "65%+" },
    afterStats: { loadTime: "<0.8s", score: 95, bounceRate: "<25%" },
    architectureNote: {
      summary:
        "Illustrative reference benchmark comparing legacy CMS clinic builds against static-first Next.js 16 architecture with deferred interactive booking widgets.",
      focus: "Core Web Vitals & Local Pack Schema",
      deliverables: "Treatment Service Tree · JSON-LD · WhatsApp Intake",
    },
    previewImage:
      "/demos/previews/serenia-luxury-wellness-spa.webp",
  },
  {
    id: "automotive-recovery-architecture",
    category: "automotive",
    archetypeName: "Detailing & Roadside Service Archetype",
    industryTag: "Automotive · Reference Architecture",
    headline: "Mobile-First Emergency & Detailing Flow Built for Instant 4G Tap Actions",
    metricBadge: "0.00 CLS Target",
    metricHighlight: "Single-Tap Call & WhatsApp Dispatch Interface",
    problemText:
      "Drivers searching on mobile networks face unusable carousels, buried phone numbers, and heavy uncached background scripts that delay urgent service calls.",
    solutionText:
      "Designed a high-contrast mobile-first architecture with immediate sticky call/WhatsApp actions, compressed vehicle imagery, and local UK service schema.",
    beforeStats: { loadTime: "5.2s typ.", score: 31, bounceRate: "70%+" },
    afterStats: { loadTime: "<0.7s", score: 96, bounceRate: "<22%" },
    architectureNote: {
      summary:
        "Illustrative performance model contrasting heavy automotive builder themes with clean Tailwind CSS and zero third-party script bloat on mobile data.",
      focus: "Mobile INP & Immediate Lead Triggers",
      deliverables: "Tap-to-Call Sticky Bar · Service Filters · Local SEO",
    },
    previewImage:
      "/demos/previews/detailx-car-detailing-auto-repair.webp",
  },
  {
    id: "editorial-salon-architecture",
    category: "beauty",
    archetypeName: "Luxury Salon & Studio Concept",
    industryTag: "Beauty & Wellness · Reference Architecture",
    headline: "Editorial Visual Elevations Without Sacrificing LCP Speed or Accessibility",
    metricBadge: "Target 95+ CWV",
    metricHighlight: "Motion-Synchronised Lookbook & Package Tier Selector",
    problemText:
      "Beauty and studio websites frequently trade away Lighthouse performance by shipping uncompressed hero videos and blocking animation bundles.",
    solutionText:
      "Structured a monochrome editorial showcase using GPU-composited transitions, explicit image dimensions to eliminate layout shift, and direct booking CTAs.",
    beforeStats: { loadTime: "3.9s typ.", score: 45, bounceRate: "58%+" },
    afterStats: { loadTime: "<0.7s", score: 96, bounceRate: "<20%" },
    architectureNote: {
      summary:
        "Illustrative editorial build blueprint demonstrating how luxury aesthetic presentation and strict Core Web Vitals budgets coexist cleanly.",
      focus: "GPU Motion & Zero Layout Shift",
      deliverables: "Lookbook Gallery · Service Matrix · Staging Preview",
    },
    previewImage:
      "/demos/previews/studio-dbrickell-luxury-beauty-spa.webp",
  },
];

export const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredStudies =
    activeCategory === "all"
      ? caseStudiesData
      : caseStudiesData.filter((s) => s.category === activeCategory);

  return (
    <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      <main>
      {/* 1. EXACT rh.design PAGE-OPEN HERO (3D Cube + Laser-Draw Strip) */}
      <RhHeroPinned
        badge="Reference Architecture Case Studies"
        title={
          <>
            Next.js Architecture Case Studies{" "}
            <span className="text-[#939393]">&amp; Benchmarks</span>
          </>
        }
        subtitle="Explore illustrative Next.js architecture case studies and performance engineering models from Saim Dev. Compare legacy WordPress bottlenecks against clean edge-delivered storefronts and booking flows built for UK and European markets."
        primaryCta={{ label: "Request Similar Build", href: "/contact" }}
        secondaryCta={{ label: "Inspect Benchmarks Below", href: "#case-study-reports" }}
        videoType="cube"
        stripLabel="Reference benchmarks · Tap to explore"
        stripItems={[
          {
            label: "01. Healthcare Build",
            tag: "Booking UX",
            tagValue: "Target <0.8s",
            summary: "Dental and aesthetics archetype eliminating slow third-party scheduling scripts.",
            href: "#case-study-reports",
          },
          {
            label: "02. Automotive Mobile",
            tag: "4G Priority",
            tagValue: "0.00 CLS Target",
            summary: "High-contrast emergency & detailing UX with sticky single-tap lead dispatch.",
            href: "#case-study-reports",
          },
          {
            label: "03. Luxury Editorial",
            tag: "Visual Brand",
            tagValue: "Target 95+ CWV",
            summary: "Lookbook presentation built with GPU transitions and clean WebP pipelines.",
            href: "/demos",
          },
          {
            label: "04. Milestone Delivery",
            tag: "Terms",
            tagValue: "50 / 50 Split",
            summary: "Fixed GBP/USD quotes with live staging review and complete GitHub transfer.",
            href: "/pricing",
          },
        ]}
      />

      {/* 2. INTERACTIVE PROBLEM DECK & GROWING BEFORE/AFTER BENCHMARK CHART */}
      <RhProblemSolutionDeck
        overline="ARCHITECTURE PERFORMANCE BENCHMARKS"
        titleBefore="Turning 4.8s legacy drag into"
        titleStrike="bounced traffic"
        titleOwned="sub-second user journeys."
        subtitle="Comparing typical bloated CMS setups against clean Next.js 16 edge architecture across healthcare, automotive services, and luxury studio storefronts."
        cards={caseStudiesData.map((c) => ({
          source: c.archetypeName,
          time: c.metricBadge,
          title: `${c.beforeStats.loadTime} Legacy Avg → ${c.afterStats.loadTime} Next.js Target`,
          detail: c.problemText,
          severity: "critical",
        }))}
        solutionTitle="Engineered for 95+ Mobile Core Web Vitals Targets Across Sectors"
        solutionDesc="Clean server-rendered React & Tailwind components, WebP/AVIF media pipelines, and JSON-LD structured schema—reviewed on a live Vercel staging link with full GitHub ownership."
        bars={[
          { value: "31–45", label: "Legacy Theme", heightPx: 140 },
          { value: "62", label: "Typical Builder", heightPx: 215 },
          { value: "95+", label: "Saim Dev Target", heightPx: 335, isHighlight: true },
        ]}
      />

      <div
        id="case-study-reports"
        className="max-w-[1168px] mx-auto px-5 py-20 sm:py-28"
      >
        {/* CATEGORY FILTER HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#202020]">
          <div>
            <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] block mb-2.5">
              REFERENCE BLUEPRINTS
            </span>
            <h2 className="text-[clamp(28px,3.6vw,46px)] font-medium tracking-[-0.03em] leading-[1.1]">
              Architecture Case Studies{" "}
              <span className="text-[#939393]">({filteredStudies.length})</span>
            </h2>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {[
              { id: "all", label: "All Blueprints" },
              { id: "healthcare", label: "Healthcare & Dental" },
              { id: "automotive", label: "Automotive & Detailing" },
              { id: "beauty", label: "Beauty & Luxury Salon" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#BAFF00] text-[#0D0D0D]"
                    : "bg-[#161616] text-[#939393] hover:text-white border border-[#262626]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CASE STUDY CARDS LIST */}
        <div className="space-y-12 mb-24">
          <AnimatePresence mode="wait">
            {filteredStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rh-edge-orbit-card is-lime bg-[#141414] rounded-3xl p-7 sm:p-10 border border-[#222222] hover:border-[#BAFF00] transition-colors relative overflow-hidden"
              >
                {/* Header Tag Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#222222]">
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] uppercase tracking-[0.88px] text-[#CBCBCB] bg-[#0D0D0D] border border-[#262626] px-3.5 py-1 rounded-full">
                      {study.industryTag}
                    </span>
                    <span className="text-[14px] text-[#939393]">
                      {study.archetypeName}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#BAFF00] text-[#0D0D0D] text-[12px] font-medium">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{study.metricBadge}</span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
                  {/* Left Column: Case Narrative & Stats */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <h2 className="text-[24px] sm:text-[32px] font-medium text-white leading-[1.15] tracking-[-0.025em] mb-6">
                      {study.headline}
                    </h2>

                    <div className="space-y-4 text-[14px] leading-[1.6] mb-6">
                      <div className="bg-[#0D0D0D] rounded-2xl p-5 border border-[#222222]">
                        <span className="text-[#939393] text-[11px] block mb-1 uppercase tracking-[0.88px]">
                          01 / Legacy Bottleneck Pattern
                        </span>
                        <p className="text-[#CBCBCB]">{study.problemText}</p>
                      </div>

                      <div className="bg-[#0D0D0D] rounded-2xl p-5 border border-[#222222]">
                        <span className="text-[#BAFF00] text-[11px] block mb-1 uppercase tracking-[0.88px]">
                          02 / Saim Dev Next.js Architecture
                        </span>
                        <p className="text-[#CBCBCB]">{study.solutionText}</p>
                      </div>
                    </div>

                    {/* Speed Comparison Bar */}
                    <div className="bg-[#0D0D0D] rounded-2xl p-5 border border-[#222222]">
                      <span className="text-[11px] text-[#939393] uppercase tracking-[0.88px] block mb-3">
                        Architecture Target (Typical Legacy vs Next.js 16)
                      </span>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-[#161616] border border-[#262626] rounded-2xl">
                          <span className="text-[11px] text-[#939393] block uppercase tracking-wider">
                            Legacy CMS Benchmark
                          </span>
                          <div className="text-[24px] font-medium text-white mt-1">
                            {study.beforeStats.loadTime}
                          </div>
                          <span className="text-[12px] text-[#939393]">
                            Typical Score: ~{study.beforeStats.score}/100
                          </span>
                        </div>

                        <div className="p-4 bg-[#161616] border border-[#BAFF00]/40 rounded-2xl">
                          <span className="text-[11px] text-[#BAFF00] block uppercase tracking-wider">
                            Next.js 16 Target
                          </span>
                          <div className="text-[24px] font-medium text-[#BAFF00] mt-1">
                            {study.afterStats.loadTime}
                          </div>
                          <span className="text-[12px] text-white">
                            CWV Target: {study.afterStats.score}+/100
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup Canvas & Architecture Spec */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div className="bg-[#0D0D0D] rounded-2xl border border-[#262626] overflow-hidden mb-6">
                      <div className="bg-[#181818] px-4 py-2.5 flex items-center gap-2 border-b border-[#262626]">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#BAFF00]" />
                        <span className="text-[11px] font-mono text-[#939393] ml-2">
                          preview/{study.id}
                        </span>
                      </div>
                      <div className="relative h-56 sm:h-64 overflow-hidden group">
                        <img
                          src={study.previewImage}
                          alt={`${study.archetypeName} Preview - ${study.headline}`}
                          width={1200}
                          height={675}
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 bg-[#0D0D0D]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#262626]">
                          <span className="text-[13px] text-[#BAFF00] font-medium block">
                            {study.metricHighlight}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Architecture Verification Card */}
                    <div className="bg-[#0D0D0D] rounded-2xl p-6 border border-[#222222] relative">
                      <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] block mb-2">
                        ENGINEERING BLUEPRINT NOTE
                      </span>
                      <p className="text-[#CBCBCB] text-[14px] leading-[1.6] mb-4">
                        {study.architectureNote.summary}
                      </p>
                      <div className="text-[13px]">
                        <span className="text-white font-medium block">
                          {study.architectureNote.focus}
                        </span>
                        <span className="text-[#939393]">
                          {study.architectureNote.deliverables}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-[#222222] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[13px] text-[#CBCBCB] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#BAFF00]" />
                    Reference Blueprint • 100% GitHub Code Handoff
                  </span>
                  <div className="flex items-center gap-5">
                    <Link
                      href="/demos"
                      className="text-[13px] text-[#939393] hover:text-white transition-colors"
                    >
                      Inspect 9 Reference Demos →
                    </Link>
                    <a
                      href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-medium text-[#BAFF00] hover:underline"
                    >
                      <span>Request Similar Build</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CONTEXTUAL INTERNAL LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              sub: "Packaged Solutions",
              title: "Web Development Services",
              href: "/services",
            },
            {
              sub: "UK Specialist",
              title: "Next.js Developer UK",
              href: "/nextjs-developer-uk",
            },
            {
              sub: "Project Enquiry",
              title: "Contact Our Studio",
              href: "/contact",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="p-6 rounded-2xl bg-[#141414] border border-[#222222] hover:border-[#BAFF00] transition-colors group block"
            >
              <span className="text-[11px] uppercase tracking-[0.88px] text-[#939393] block mb-1.5">
                {link.sub}
              </span>
              <span className="text-[17px] font-medium text-white group-hover:text-[#BAFF00] flex items-center justify-between">
                <span>{link.title}</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>

      <RhSystemRows
        overline="ARCHITECTURE TARGETS"
        title="Consistent engineering standards across"
        titleMuted="every build archetype"
        rows={caseStudiesData.map((study, idx) => ({
          num: String(idx + 1).padStart(2, "0"),
          title: `${study.archetypeName} — ${study.metricBadge}`,
          description: study.solutionText,
          tags: [
            `Legacy ${study.beforeStats.loadTime}`,
            `Target ${study.afterStats.loadTime}`,
            `CWV Target ${study.afterStats.score}+/100`,
          ],
          href: "/contact",
        }))}
      />
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
