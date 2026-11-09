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
    <section id="tools" className="py-24 sm:py-32 border-t border-black/5 bg-[#f4f5f6] text-[#09090b] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header - rh.design dual-tone style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 mb-3 font-semibold">
              F R E E &nbsp; U T I L I T I E S
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#09090b] max-w-3xl leading-[1.12]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Free business &amp; kitchen tools{" "}
              <span className="text-[#9ca3af]">Built for UK commercial operators.</span>
            </h2>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-black/10 hover:border-black/30 text-xs font-medium text-[#09090b] shadow-2xs transition-all active:scale-95"
          >
            <span>View All Kitchen Tools</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
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
                className="p-7 rounded-3xl bg-white border border-black/5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-[#09090b] flex items-center justify-center text-[#b5f900] shadow-2xs group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#f4f5f6] border border-black/5 text-[10px] font-mono text-gray-600 font-semibold uppercase">
                      {t.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-[#09090b] mb-1 leading-snug">
                    {t.title}
                  </h3>
                  <div className="text-[11px] font-mono text-gray-500 mb-3">
                    {t.tagline}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-light mb-6">
                    {t.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <Link
                    href={t.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#09090b] group-hover:text-black group-hover:underline"
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
