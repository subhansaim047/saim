"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Calculator, ChefHat, FileText, Thermometer, Sparkles } from "lucide-react";

const FEATURED_TOOLS = [
  {
    slug: "allergy-matrix",
    title: "14 Food Allergen Matrix & Chart",
    tag: "Allergen Management",
    desc: "Interactive allergen lookup matrix and print-ready PDF export aligned with FSA guidance under Natasha's Law.",
    icon: ShieldCheck,
    tagColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
  },
  {
    slug: "food-cost-calculator",
    title: "Commercial Food Cost Calculator",
    tag: "Kitchen Economics",
    desc: "Real-time ingredient cost calculator to engineer profitable menu prices and protect 70%+ gross margins.",
    icon: Calculator,
    tagColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
  {
    slug: "recipe-calculator",
    title: "Recipe Batch Scaling Calculator",
    tag: "Commercial Catering",
    desc: "Scale catering recipes from 10 to 500 portions with automatic ingredient conversions and per-portion costing.",
    icon: ChefHat,
    tagColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
  },
  {
    slug: "haccp-plan-builder",
    title: "UK Takeaway HACCP Plan Builder",
    tag: "Food Safety Law",
    desc: "Standard 7-principle hazard analysis framework and critical control point (CCP) logging tables for catering.",
    icon: FileText,
    tagColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
  },
  {
    slug: "freezer-temperature-chart",
    title: "Cold Storage Temperature Log",
    tag: "SFBB Temperature Control",
    desc: "Morning and evening commercial refrigeration logging sheet meeting UK SFBB requirements.",
    icon: Thermometer,
    tagColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  },
  {
    slug: "cleaning-schedule",
    title: "Kitchen Deep Cleaning Schedule",
    tag: "Hygiene & Sanitation",
    desc: "Daily, weekly, and monthly deep-clean checklists with supervisor verification and chemical safety SOPs.",
    icon: Sparkles,
    tagColor: "text-purple-400 border-purple-500/20 bg-purple-500/10",
  },
];

export const FeaturedToolsSection = () => {
  return (
    <section id="kitchen-tools" className="w-full bg-black py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider mb-4">
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
                href={`/food-safety-templates/${tool.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-neutral-950/80 border border-white/10 p-6 transition-all duration-300 hover:border-primary/40 hover:bg-neutral-900/80 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${tool.tagColor}`}>
                      {tool.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-primary group-hover:border-primary/30 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
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
