"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Zap,
  Star,
  CheckCircle2,
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
  clientName: string;
  industryTag: string;
  headline: string;
  metricBadge: string;
  metricHighlight: string;
  problemText: string;
  solutionText: string;
  designText: string;
  beforeStats: { loadTime: string; score: number; bounceRate: string };
  afterStats: { loadTime: string; score: number; bounceRate: string };
  testimonial: { quote: string; author: string; role: string };
  previewImage: string;
}

const caseStudiesData: CaseStudy[] = [
  {
    id: "apex-dental",
    category: "healthcare",
    clientName: "Apex Dental Care",
    industryTag: "Healthcare · Dental Practice",
    headline: "Transforming a 4.8-Second Legacy Site into a Sub-Second Patient Lead Engine",
    metricBadge: "+185% Patient Bookings",
    metricHighlight: "+185% Online Appointments in 30 Days",
    problemText:
      "Apex Dental was losing over 60% of mobile visitors due to a slow WordPress template that loaded in 4.8 seconds and lacked instant online booking options.",
    solutionText:
      "Engineered a bespoke React + Tailwind web platform featuring click-to-book WhatsApp integration, MedicalBusiness JSON-LD schema, and local SEO maps optimisation.",
    designText:
      "Clean, medical-grade dark luxury aesthetic with high-contrast typography, trust badges, and frictionless appointment CTA buttons.",
    beforeStats: { loadTime: "4.8s", score: 38, bounceRate: "68%" },
    afterStats: { loadTime: "0.6s", score: 99, bounceRate: "18%" },
    testimonial: {
      quote:
        "Saim Dev rebuilt our entire web presence in less than 7 days. Our new patient bookings nearly tripled within the first month!",
      author: "Dr. Marcus Vance",
      role: "Lead Dentist & Practice Director",
    },
    previewImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "speedtech-auto",
    category: "automotive",
    clientName: "SpeedTech Automotive",
    industryTag: "Automotive · Repair & Performance",
    headline: "Mobile-First Emergency Service Platform Driving 2.2x Revenue Growth",
    metricBadge: "+220% Emergency Calls",
    metricHighlight: "2.2x Increase in Weekly Towing & Repair Requests",
    problemText:
      "Drivers stuck on the road needed immediate click-to-call service, but SpeedTech's previous website was unreadable on mobile phones and failed to rank locally.",
    solutionText:
      "Crafted a high-contrast mobile-first platform featuring instant emergency call triggers, SMS location sharing, and Google Local Pack SEO.",
    designText:
      "Bold automotive visual design with high-visibility CTA buttons, dynamic service cards, and real-time repair status tracking.",
    beforeStats: { loadTime: "5.2s", score: 31, bounceRate: "74%" },
    afterStats: { loadTime: "0.5s", score: 100, bounceRate: "14%" },
    testimonial: {
      quote:
        "Our phone hasn't stopped ringing since the new site went live. The instant WhatsApp location sharing alone saved us hours of back-and-forth.",
      author: "James Miller",
      role: "Operations Manager, SpeedTech Auto",
    },
    previewImage:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "velvet-salon",
    category: "beauty",
    clientName: "Velvet Hair Studio & Spa",
    industryTag: "Beauty & Wellness · Luxury Salon",
    headline: "Editorial Brand Elevation & Direct Instagram Appointment Engine",
    metricBadge: "Fully Booked 3 Weeks Ahead",
    metricHighlight: "Fully Booked Out 3 Weeks in Advance",
    problemText:
      "An outdated site failed to convey the salon's premium luxury pricing, resulting in low enquiry conversion and price pushback from prospective clients.",
    solutionText:
      "Designed a minimalist editorial web experience with smooth Framer Motion interactions, high-definition portfolio galleries, and frictionless appointment flows.",
    designText:
      "Monochrome high-fashion aesthetic featuring fluid typography, soft micro-animations, and instant service package selection.",
    beforeStats: { loadTime: "3.9s", score: 45, bounceRate: "59%" },
    afterStats: { loadTime: "0.4s", score: 100, bounceRate: "12%" },
    testimonial: {
      quote:
        "The website looks like a high-end fashion magazine. Clients regularly compliment our online booking experience before they even walk through the door.",
      author: "Sophia Laurent",
      role: "Creative Founder, Velvet Hair Studio",
    },
    previewImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },
];

export const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredStudies =
    activeCategory === "all"
      ? caseStudiesData
      : caseStudiesData.filter((s) => s.category === activeCategory);

  return (
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      {/* 1. EXACT rh.design PAGE-OPEN HERO (3D Cube + Laser-Draw Strip) */}
      <RhHeroPinned
        badge="Proven Client Results"
        title={
          <>
            Next.js Website Case Studies{" "}
            <span className="text-[#939393]">&amp; Results</span>
          </>
        }
        subtitle="Explore verified Next.js website case studies and real client speed benchmarks from Saim Dev. We engineer sub-second web platforms for UK and European businesses that slash bounce rates, win local search packs, and multiply customer bookings."
        primaryCta={{ label: "Request Similar Build ($0 Upfront)", href: "/contact" }}
        secondaryCta={{ label: "Inspect Results Below", href: "#case-study-reports" }}
        videoType="cube"
        stripLabel="Verified metrics · Tap to explore"
      />

      {/* 2. INTERACTIVE PROBLEM DECK & GROWING BEFORE/AFTER BENCHMARK CHART */}
      <RhProblemSolutionDeck
        overline="BEFORE & AFTER PERFORMANCE BENCHMARKS"
        titleBefore="Turning 4.8s legacy drag into"
        titleStrike="bounced traffic"
        titleOwned="0.6s revenue engines."
        subtitle="Across healthcare, emergency automotive, and luxury aesthetics, migrating from WordPress and template builders to Saim Dev Next.js delivers immediate Core Web Vitals dominance."
        cards={caseStudiesData.map((c) => ({
          source: c.clientName,
          time: c.metricBadge,
          title: `${c.beforeStats.loadTime} Legacy Load → ${c.afterStats.loadTime} Next.js Edge`,
          detail: c.problemText,
          severity: "critical",
        }))}
        solutionTitle="Consistent 99–100/100 Mobile PageSpeed Across Every Client"
        solutionDesc="Clean server-rendered React & Tailwind components, AVIF media pipelines, and JSON-LD structured schema—built first on staging so you inspect live performance before paying."
      />

      <div
        id="case-study-reports"
        className="max-w-[1168px] mx-auto px-5 py-20 sm:py-28"
      >
        {/* CATEGORY FILTER HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 mb-12 border-b border-[#202020]">
          <div>
            <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] block mb-2.5">
              DETAILED AUDIT REPORTS
            </span>
            <h2 className="text-[clamp(28px,3.6vw,46px)] font-medium tracking-[-0.03em] leading-[1.1]">
              Client Transformations{" "}
              <span className="text-[#939393]">({filteredStudies.length})</span>
            </h2>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "healthcare", label: "Healthcare & Dental" },
              { id: "automotive", label: "Automotive & Towing" },
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
                      {study.clientName}
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
                          01 / The Bottleneck
                        </span>
                        <p className="text-[#CBCBCB]">{study.problemText}</p>
                      </div>

                      <div className="bg-[#0D0D0D] rounded-2xl p-5 border border-[#222222]">
                        <span className="text-[#BAFF00] text-[11px] block mb-1 uppercase tracking-[0.88px]">
                          02 / Saim Dev Next.js Solution
                        </span>
                        <p className="text-[#CBCBCB]">{study.solutionText}</p>
                      </div>
                    </div>

                    {/* Speed Comparison Bar */}
                    <div className="bg-[#0D0D0D] rounded-2xl p-5 border border-[#222222]">
                      <span className="text-[11px] text-[#939393] uppercase tracking-[0.88px] block mb-3">
                        Performance Gains (Before vs After)
                      </span>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-[#161616] border border-[#262626] rounded-2xl">
                          <span className="text-[11px] text-[#939393] block uppercase tracking-wider">
                            Legacy Site
                          </span>
                          <div className="text-[24px] font-medium text-white mt-1">
                            {study.beforeStats.loadTime}
                          </div>
                          <span className="text-[12px] text-[#939393]">
                            Score: {study.beforeStats.score}/100
                          </span>
                        </div>

                        <div className="p-4 bg-[#161616] border border-[#BAFF00]/40 rounded-2xl">
                          <span className="text-[11px] text-[#BAFF00] block uppercase tracking-wider">
                            Saim Dev Platform
                          </span>
                          <div className="text-[24px] font-medium text-[#BAFF00] mt-1">
                            {study.afterStats.loadTime}
                          </div>
                          <span className="text-[12px] text-white">
                            Score: {study.afterStats.score}/100 ⚡
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup Canvas & Testimonial */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div className="bg-[#0D0D0D] rounded-2xl border border-[#262626] overflow-hidden mb-6">
                      <div className="bg-[#181818] px-4 py-2.5 flex items-center gap-2 border-b border-[#262626]">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#3A3A3A]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#BAFF00]" />
                        <span className="text-[11px] font-mono text-[#939393] ml-2">
                          https://{study.id}.com
                        </span>
                      </div>
                      <div className="relative h-56 sm:h-64 overflow-hidden group">
                        <img
                          src={study.previewImage}
                          alt={`${study.clientName} Case Study - ${study.headline}`}
                          width={1200}
                          height={675}
                          loading="lazy"
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

                    {/* Client Testimonial Quote */}
                    <div className="bg-[#0D0D0D] rounded-2xl p-6 border border-[#222222] relative">
                      <div className="flex items-center gap-1 text-[#BAFF00] mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#BAFF00]" />
                        ))}
                      </div>
                      <p className="text-[#CBCBCB] text-[14px] leading-[1.6] mb-4">
                        &ldquo;{study.testimonial.quote}&rdquo;
                      </p>
                      <div className="text-[13px]">
                        <span className="text-white font-medium block">
                          {study.testimonial.author}
                        </span>
                        <span className="text-[#939393]">
                          {study.testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-6 border-t border-[#222222] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[13px] text-[#CBCBCB] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#BAFF00]" />
                    Verified Project Results • 100% Code Handover
                  </span>
                  <div className="flex items-center gap-5">
                    <Link
                      href="/demos"
                      className="text-[13px] text-[#939393] hover:text-white transition-colors"
                    >
                      Inspect 9 Live Demos →
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
        overline="MEASURED OUTCOMES"
        title="Consistent metrics across"
        titleMuted="every shipped platform"
        rows={caseStudiesData.map((study, idx) => ({
          num: String(idx + 1).padStart(2, "0"),
          title: `${study.clientName} — ${study.metricBadge}`,
          description: study.solutionText,
          tags: [
            `Before ${study.beforeStats.loadTime}`,
            `After ${study.afterStats.loadTime}`,
            `PageSpeed ${study.afterStats.score}/100`,
          ],
          href: "/contact",
        }))}
      />

      <SiteFooter theme="dark" />
    </div>
  );
};
