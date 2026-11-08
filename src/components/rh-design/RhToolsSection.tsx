"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, Calculator, Tag, UtensilsCrossed, ArrowUpRight } from "lucide-react";

const TOOLS = [
  {
    slug: "allergen-matrix-generator",
    href: "/tools/allergen-matrix-generator",
    title: "14-Allergen Matrix Generator",
    tagline: "Natasha's Law Compliance",
    desc: "Generate compliant allergen matrices for UK food businesses. Filter all 14 mandatory EU/UK allergens with instant printable PDF output.",
    badge: "Free Utility",
    icon: ShieldAlert
  },
  {
    slug: "food-cost-calculator",
    href: "/tools/food-cost-calculator",
    title: "Commercial Food Cost Calculator",
    tagline: "Gross Profit & Margins",
    desc: "Calculate commercial recipe costings, portion control, and food cost percentages to protect your restaurant's bottom line.",
    badge: "Hospitality Tool",
    icon: Calculator
  },
  {
    slug: "ppds-label-generator",
    href: "/tools/ppds-label-generator",
    title: "PPDS Food Label Generator",
    tagline: "Prepacked for Direct Sale",
    desc: "Generate professional Natasha's Law compliant labels with highlighted allergen ingredients ready for commercial kitchen thermal printing.",
    badge: "UK Food Standard",
    icon: Tag
  },
  {
    slug: "recipe-batch-calculator",
    href: "/tools/recipe-batch-calculator",
    title: "Recipe Batch & Yield Calculator",
    tagline: "Commercial Kitchen Prep",
    desc: "Scale commercial recipes up or down by batch size or ingredient constraints with automatic yield multiplier conversion.",
    badge: "Kitchen Utility",
    icon: UtensilsCrossed
  }
];

export const RhToolsSection: React.FC = () => {
  return (
    <section id="tools" className="py-20 sm:py-28 border-t border-[#27272a] bg-[#09090b] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
              FREE UTILITIES
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Free business &amp; kitchen tools. <br />
              <span className="text-[#a1a1aa]">Built by Saim Dev for UK commercial operators.</span>
            </h2>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#b5f900] hover:underline"
          >
            <span>View All Kitchen Tools</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4-Column Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOOLS.map((t, idx) => {
            const IconComponent = t.icon;
            return (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -4, borderColor: "rgba(181, 249, 0, 0.4)" }}
                className="p-6 rounded-3xl bg-[#111113] border border-[#27272a] flex flex-col justify-between shadow-xl transition-all group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-[#18181b] border border-[#27272a] flex items-center justify-center text-[#b5f900] group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#18181b] border border-[#27272a] text-[10px] font-mono text-[#a1a1aa] uppercase">
                      {t.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-[#b5f900] transition-colors leading-snug">
                    {t.title}
                  </h3>
                  <div className="text-[11px] font-mono text-zinc-500 mb-3">
                    {t.tagline}
                  </div>
                  <p className="text-xs text-[#a1a1aa] leading-relaxed font-light mb-6">
                    {t.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#27272a]">
                  <Link
                    href={t.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b5f900] group-hover:underline"
                  >
                    <span>Launch Free Tool</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
