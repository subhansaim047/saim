"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldAlert,
  Calculator,
  ChefHat,
  ClipboardCheck,
  Snowflake,
  Droplets,
  Tag,
  type LucideIcon,
} from "lucide-react";
import { IconTile, IconColor } from "./icons/IconTile";

interface FeaturedTool {
  slug: string;
  customHref?: string;
  title: string;
  tag: string;
  desc: string;
  icon: LucideIcon;
  color: IconColor;
}

const FEATURED_TOOLS: FeaturedTool[] = [
  {
    slug: "ppds-label-generator",
    customHref: "/tools/ppds-label-generator",
    title: "Natasha's Law PPDS Label Maker",
    tag: "PPDS Food Labelling",
    desc: "Interactive food label generator with automated 14-allergen bolding, expiry dating, and A4 sticker sheet printing.",
    icon: Tag,
    color: "amber",
  },
  {
    slug: "allergy-matrix",
    customHref: "/tools/allergen-matrix-generator",
    title: "14 Food Allergen Matrix & Chart",
    tag: "Allergen Management",
    desc: "Interactive allergen lookup matrix and print-ready PDF export aligned with FSA guidance under Natasha's Law.",
    icon: ShieldAlert,
    color: "vermilion",
  },
  {
    slug: "food-cost-calculator",
    customHref: "/tools/food-cost-calculator",
    title: "Commercial Food Cost Calculator",
    tag: "Kitchen Economics",
    desc: "Real-time ingredient cost calculator to engineer profitable menu prices and protect 70%+ gross margins.",
    icon: Calculator,
    color: "emerald",
  },
  {
    slug: "recipe-calculator",
    customHref: "/tools/recipe-batch-calculator",
    title: "Recipe Batch Scaling Calculator",
    tag: "Commercial Catering",
    desc: "Scale catering recipes from 10 to 500 portions with automatic ingredient conversions and per-portion costing.",
    icon: ChefHat,
    color: "sky",
  },
  {
    slug: "haccp-plan-builder",
    title: "UK Takeaway HACCP Plan Builder",
    tag: "Food Safety Law",
    desc: "Standard 7-principle hazard analysis framework and critical control point (CCP) logging tables for catering.",
    icon: ClipboardCheck,
    color: "purple",
  },
  {
    slug: "freezer-temperature-chart",
    title: "Cold Storage Temperature Log",
    tag: "SFBB Temperature Control",
    desc: "Morning and evening commercial refrigeration logging sheet meeting UK SFBB requirements.",
    icon: Snowflake,
    color: "cyan",
  },
  {
    slug: "cleaning-schedule",
    title: "Kitchen Deep Cleaning Schedule",
    tag: "Hygiene & Sanitation",
    desc: "Daily, weekly, and monthly deep-clean checklists with supervisor verification and chemical safety SOPs.",
    icon: Droplets,
    color: "teal",
  },
];

const DOT_COLORS: Record<IconColor, string> = {
  amber: "bg-amber-400 shadow-[0_0_8px_#f59e0b]",
  vermilion: "bg-[#FF4A1C] shadow-[0_0_8px_#FF4A1C]",
  emerald: "bg-emerald-400 shadow-[0_0_8px_#10b981]",
  sky: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
  blue: "bg-sky-400 shadow-[0_0_8px_#38bdf8]",
  indigo: "bg-indigo-400 shadow-[0_0_8px_#6366f1]",
  cyan: "bg-cyan-400 shadow-[0_0_8px_#06b6d4]",
  teal: "bg-teal-400 shadow-[0_0_8px_#14b8a6]",
  rose: "bg-rose-400 shadow-[0_0_8px_#f43f5e]",
  purple: "bg-purple-400 shadow-[0_0_8px_#a855f7]",
};

export const FeaturedToolsSection = () => {
  return (
    <section id="kitchen-tools" className="w-full bg-transparent py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Free Operational Systems</span>
          </div>
          <h2
            className="text-white text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4"
            style={{ letterSpacing: "-0.04em" }}
          >
            UK Restaurant &amp; Takeaway Kitchen Tools
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed">
            Free interactive calculators, digital due diligence logs, and printable SOPs engineered to help UK food businesses streamline operations and prepare for EHO audits.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURED_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={tool.customHref || `/food-safety-templates/${tool.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0f0f12] border border-white/10 p-6 transition-all duration-300 hover:border-white/25 hover:bg-[#15151a] hover:-translate-y-1.5 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Category Pill with glowing dot */}
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.04] text-white/80 group-hover:border-white/20 transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[tool.color] || DOT_COLORS.amber}`} />
                      <span>{tool.tag}</span>
                    </span>

                    {/* Sybiosme Squircle Badge Tile */}
                    <IconTile color={tool.color} size="md">
                      <Icon className="w-5 h-5" />
                    </IconTile>
                  </div>

                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-white/50 group-hover:text-white transition-colors">
                  <span>Open Interactive Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-primary" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all group"
          >
            <span>Explore All 24+ Kitchen Templates &amp; Logs</span>
            <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
