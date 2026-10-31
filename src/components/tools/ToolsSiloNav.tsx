import React from "react";
import Link from "next/link";
import { Tag, Calculator, ChefHat, FileText, ArrowRight, Wrench } from "lucide-react";

interface ToolsSiloNavProps {
  currentSlug: "ppds-label-generator" | "food-cost-calculator" | "allergen-matrix-generator" | "recipe-batch-calculator";
}

const TOOLS_LIST = [
  {
    slug: "ppds-label-generator",
    href: "/tools/ppds-label-generator",
    name: "PPDS Food Label Maker",
    desc: "Avery 21-up sticker sheets with 14-allergen bolding (Natasha's Law).",
    icon: Tag,
    badge: "Statutory FIR 2014"
  },
  {
    slug: "food-cost-calculator",
    href: "/tools/food-cost-calculator",
    name: "Commercial Food Cost Tool",
    desc: "Calculate dish margins, prep waste shrinkage, and 20% UK VAT net pricing.",
    icon: Calculator,
    badge: "Profit Margin (GP%)"
  },
  {
    slug: "allergen-matrix-generator",
    href: "/tools/allergen-matrix-generator",
    name: "14 Allergen Matrix Builder",
    desc: "Instant A4 landscape regulatory allergen chart for UK takeaways and restaurants.",
    icon: FileText,
    badge: "FSA Compliance"
  },
  {
    slug: "recipe-batch-calculator",
    href: "/tools/recipe-batch-calculator",
    name: "Recipe Batch Scaler",
    desc: "Scale catering ingredients and portion yields with baker's percentages.",
    icon: ChefHat,
    badge: "Catering Utility"
  }
];

export const ToolsSiloNav: React.FC<ToolsSiloNavProps> = ({ currentSlug }) => {
  return (
    <section className="my-12 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <Wrench className="w-5 h-5 text-amber-400" />
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Commercial Kitchen Utilities &amp; Compliance Hub
          </h2>
        </div>
        <Link
          href="/tools"
          className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <span>View All Free Kitchen Tools &amp; 160 Templates</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {TOOLS_LIST.map((tool) => {
          const isCurrent = tool.slug === currentSlug;
          const Icon = tool.icon;
          return isCurrent ? (
            <div
              key={tool.slug}
              className="p-4 rounded-2xl bg-amber-400/10 border-2 border-amber-400/50 shadow-inner flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold">
                    Active Tool
                  </span>
                </div>
                <div className="text-sm font-bold text-white mb-1">{tool.name}</div>
                <p className="text-xs text-white/70 leading-relaxed font-light">{tool.desc}</p>
              </div>
            </div>
          ) : (
            <Link
              key={tool.slug}
              href={tool.href}
              className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.07] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white/80 group-hover:bg-amber-400/20 group-hover:text-amber-300 flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/10 text-white/60 group-hover:text-amber-300 transition-colors">
                    {tool.badge}
                  </span>
                </div>
                <div className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                  {tool.name}
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">{tool.desc}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-amber-400/80 group-hover:text-amber-300">
                <span>Launch Tool</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
