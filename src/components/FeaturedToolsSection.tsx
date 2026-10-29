"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldAlert,
  Calculator,
  Tag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { IconTile, IconColor } from "./icons/IconTile";

interface FeaturedTool {
  slug: string;
  href: string;
  title: string;
  tag: string;
  desc: string;
  icon: LucideIcon;
  color: IconColor;
  glowColor: string;
  highlights: string[];
}

const FEATURED_TOOLS: FeaturedTool[] = [
  {
    slug: "ppds-label-generator",
    href: "/tools/ppds-label-generator",
    title: "Natasha's Law PPDS Label Maker",
    tag: "PPDS Food Labelling",
    desc: "Interactive food label generator with automated 14-allergen bolding, expiry dating, and A4 sticker sheet printing.",
    icon: Tag,
    color: "amber",
    glowColor: "from-amber-500/15",
    highlights: ["Auto 14-Allergen Bolding", "A4 PDF Sticker Print", "Instant Download"],
  },
  {
    slug: "allergen-matrix-generator",
    href: "/tools/allergen-matrix-generator",
    title: "14 Food Allergen Matrix & Chart",
    tag: "Allergen Management",
    desc: "Interactive allergen lookup matrix and print-ready PDF export aligned with FSA guidance under Natasha's Law.",
    icon: ShieldAlert,
    color: "vermilion",
    glowColor: "from-[#FF4A1C]/15",
    highlights: ["14 Statutory Allergens", "Council Audit Format", "CSV & PDF Export"],
  },
  {
    slug: "food-cost-calculator",
    href: "/tools/food-cost-calculator",
    title: "Commercial Food Cost Calculator",
    tag: "Kitchen Economics",
    desc: "Real-time ingredient cost calculator to engineer profitable menu prices and protect 70%+ gross margins.",
    icon: Calculator,
    color: "emerald",
    glowColor: "from-emerald-500/15",
    highlights: ["Real-Time Gross Margin %", "Target Menu Pricing", "Portion Cost Breakdown"],
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
    <section id="kitchen-tools" className="w-full bg-transparent py-20 sm:py-28 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
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

          <div className="shrink-0 hidden md:block">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-xs font-mono font-medium hover:bg-white/10 hover:border-primary/40 transition-all group"
            >
              <span>Explore All Tools &amp; Templates</span>
              <ArrowRight className="w-3.5 h-3.5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3-Card High-Impact Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.slug}
                className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-7 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
              >
                {/* Ambient radial glow on hover */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${tool.glowColor} to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full border border-white/10 bg-white/[0.04] text-white/80 group-hover:border-white/20 transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[tool.color] || DOT_COLORS.amber}`} />
                      <span>{tool.tag}</span>
                    </span>

                    <IconTile color={tool.color} size="md">
                      <Icon className="w-5 h-5" />
                    </IconTile>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-white mb-2.5 group-hover:text-primary transition-colors tracking-tight">
                    <Link
                      href={tool.href}
                      className="after:absolute after:inset-0 focus:outline-none"
                    >
                      {tool.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                    {tool.desc}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {tool.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-white/60"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-medium text-white/60 group-hover:text-white transition-colors pointer-events-none">
                  <span className="flex items-center gap-1.5 text-white/50 text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>Free Interactive Tool</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-primary group-hover:translate-x-1.5 transition-transform font-semibold">
                    <span>Open Tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Prominent View More CTA Button */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 hover:border-primary/50 text-white text-sm font-semibold transition-all group shadow-xl hover:shadow-primary/10"
          >
            <span>View All 24+ Food Safety Templates &amp; Tools</span>
            <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
