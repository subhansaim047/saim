"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldAlert, 
  Calculator, 
  ChefHat, 
  ClipboardCheck, 
  Snowflake, 
  Tag
} from "lucide-react";
import { FadeUp } from "./FadeUp";

interface FeaturedTool {
  slug: string;
  customHref?: string;
  title: string;
  tag: string;
  desc: string;
  icon: any;
  glowColor: string;
  iconColor: string;
  borderColor: string;
  bgMesh: string;
}

const SybiosmeArrowSvg = () => (
  <svg
    viewBox="0 0 17 15"
    className="w-3.5 h-3.5 fill-current"
    aria-hidden="true"
  >
    <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
  </svg>
);

const FEATURED_TOOLS: FeaturedTool[] = [
  {
    slug: "ppds-label-generator",
    customHref: "/tools/ppds-label-generator",
    title: "Natasha's Law PPDS Label Maker",
    tag: "PPDS Food Labelling",
    desc: "Interactive food label generator with automated 14-allergen bolding, expiry dating, and A4 sticker sheet printing.",
    icon: Tag,
    glowColor: "from-amber-500/25 to-amber-500/0",
    iconColor: "text-amber-400 group-hover:text-amber-300",
    borderColor: "border-amber-500/30 group-hover:border-amber-400/60 shadow-[0_10px_30px_rgba(251,191,36,0.06)]",
    bgMesh: "from-[#221810] via-[#16100b] to-[#0f0c08]",
  },
  {
    slug: "allergy-matrix",
    customHref: "/tools/allergen-matrix-generator",
    title: "14 Food Allergen Matrix & Chart",
    tag: "Allergen Management",
    desc: "Interactive allergen lookup matrix and print-ready PDF export aligned with FSA guidance under Natasha's Law.",
    icon: ShieldAlert,
    glowColor: "from-[#FF4A1C]/25 to-[#FF4A1C]/0",
    iconColor: "text-[#FF4A1C] group-hover:text-orange-400",
    borderColor: "border-[#FF4A1C]/30 group-hover:border-[#FF4A1C]/60 shadow-[0_10px_30px_rgba(255,74,28,0.06)]",
    bgMesh: "from-[#241410] via-[#180e0c] to-[#100a08]",
  },
  {
    slug: "food-cost-calculator",
    customHref: "/tools/food-cost-calculator",
    title: "Commercial Food Cost Calculator",
    tag: "Kitchen Economics",
    desc: "Real-time ingredient cost calculator to engineer profitable menu prices and protect 70%+ gross margins.",
    icon: Calculator,
    glowColor: "from-emerald-500/25 to-emerald-500/0",
    iconColor: "text-emerald-400 group-hover:text-emerald-300",
    borderColor: "border-emerald-500/30 group-hover:border-emerald-400/60 shadow-[0_10px_30px_rgba(52,211,153,0.06)]",
    bgMesh: "from-[#102218] via-[#0c1711] to-[#08100c]",
  },
  {
    slug: "recipe-calculator",
    customHref: "/tools/recipe-batch-calculator",
    title: "Recipe Batch Scaling Calculator",
    tag: "Commercial Catering",
    desc: "Scale catering recipes from 10 to 500 portions with automatic ingredient conversions and per-portion costing.",
    icon: ChefHat,
    glowColor: "from-blue-500/25 to-blue-500/0",
    iconColor: "text-blue-400 group-hover:text-blue-300",
    borderColor: "border-blue-500/30 group-hover:border-blue-400/60 shadow-[0_10px_30px_rgba(96,165,250,0.06)]",
    bgMesh: "from-[#121c24] via-[#0e141a] to-[#0a0e12]",
  },
  {
    slug: "haccp-plan-builder",
    title: "UK Takeaway HACCP Plan Builder",
    tag: "Food Safety Law",
    desc: "Standard 7-principle hazard analysis framework and critical control point (CCP) logging tables for catering.",
    icon: ClipboardCheck,
    glowColor: "from-indigo-500/25 to-indigo-500/0",
    iconColor: "text-indigo-400 group-hover:text-indigo-300",
    borderColor: "border-indigo-500/30 group-hover:border-indigo-400/60 shadow-[0_10px_30px_rgba(129,140,248,0.06)]",
    bgMesh: "from-[#181324] via-[#110e19] to-[#0c0912]",
  },
  {
    slug: "freezer-temperature-chart",
    title: "Cold Storage Temperature Log",
    tag: "SFBB Temperature Control",
    desc: "Morning and evening commercial refrigeration logging sheet meeting UK SFBB requirements.",
    icon: Snowflake,
    glowColor: "from-cyan-500/25 to-cyan-500/0",
    iconColor: "text-cyan-400 group-hover:text-cyan-300",
    borderColor: "border-cyan-500/30 group-hover:border-cyan-400/60 shadow-[0_10px_30px_rgba(34,211,238,0.06)]",
    bgMesh: "from-[#102224] via-[#0b1718] to-[#081011]",
  },
];

export const FeaturedToolsSection = () => {
  return (
    <section id="kitchen-tools" className="w-full bg-black py-20 sm:py-28 md:py-36 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF4A1C]/[0.025] rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                Free Operational Systems
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              UK Kitchen Tools. <span className="text-white/40">Free &amp; Interactive.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-white/65 font-light leading-relaxed max-w-xl mx-auto">
              Free interactive calculators, digital due diligence logs, and printable SOPs engineered to help UK food businesses streamline operations.
            </p>
          </FadeUp>
        </div>

        {/* DOUBLE-BEZEL CONCENTRIC SQUIRCLE FRAME */}
        <div className="relative rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-2 sm:p-3 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
          <div className="relative rounded-[calc(2.5rem-0.75rem)] bg-[#121212] p-6 sm:p-8 lg:p-10 border border-white/5 overflow-hidden">
            
            {/* Ambient Radial Highlights */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF4A1C]/[0.05] rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

            {/* 6-CARD LUXURY TILES GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10 items-stretch">
              {FEATURED_TOOLS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.slug}
                    href={tool.customHref || `/food-safety-templates/${tool.slug}`}
                    className={`group relative flex flex-col justify-between rounded-[2rem] bg-gradient-to-br ${tool.bgMesh} border ${tool.borderColor} p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-xl overflow-hidden min-h-[290px]`}
                  >
                    {/* Hairline top glow */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                    <div>
                      {/* Top Bar with Tag & Animated Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full group-hover:border-white/25 transition-colors">
                          {tool.tag}
                        </span>

                        <div className="relative shrink-0">
                          <div
                            className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-br ${tool.glowColor} opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none`}
                          />
                          <div className="relative w-11 h-11 rounded-2xl bg-[#111113] border border-white/10 flex items-center justify-center transition-all duration-300 shadow-md">
                            <Icon className={`w-5 h-5 ${tool.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white mb-2 group-hover:text-white transition-colors">
                        {tool.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-white/60 leading-relaxed font-light">
                        {tool.desc}
                      </p>
                    </div>

                    {/* Bottom Action Pill Row */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-white/50 group-hover:text-white transition-colors">
                        Launch Free Tool
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/[0.08] group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-md">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Hub CTA — Sybiosme Magnetic Action Button */}
            <div className="mt-10 sm:mt-12 text-center relative z-10 flex justify-center">
              <Link
                href="/tools"
                className="sybiosme-action-btn bg-white hover:bg-neutral-100 text-black shadow-2xl group transition-all"
              >
                <span className="text-sm font-semibold tracking-tight">
                  Explore All 24+ Kitchen Templates &amp; Logs
                </span>
                <div className="btn-arrow bg-black text-white group-hover:scale-110">
                  <SybiosmeArrowSvg />
                </div>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
