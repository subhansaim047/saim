"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldAlert,
  Calculator,
  Tag,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { IconTile, IconColor } from "./icons/IconTile";
import { SoapBubbleMaterial, SoapBubbleSurface } from "./reactdrops/soap-bubble";
import { ReactDropButton, LOGO_MATERIAL_DEFAULTS, LOGO_BUBBLE_PALETTE } from "./ReactDropButton";

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
    slug: "commission-savings-calculator",
    href: "/tools/commission-savings-calculator",
    title: "Takeaway Commission Calculator",
    tag: "Margin & ROI Utility",
    desc: "Model how much profit your kitchen retains each year by shifting repeat orders onto a 0% commission direct site.",
    icon: Calculator,
    color: "blue",
    glowColor: "from-[#2F6CE1]/15",
    highlights: ["Just Eat / Deliveroo Math", "3-Year Cash Recovery", "£250 Direct Payback"],
  },
  {
    slug: "uk-food-hygiene-rating-scheme-5-star-checklist",
    href: "/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
    title: "5-Star Food Hygiene Checklist",
    tag: "UK EHO Compliance Guide",
    desc: "Practical UK inspection checklist covering food hygiene handling, premises condition, and management scoring.",
    icon: ShieldAlert,
    color: "indigo",
    glowColor: "from-[#1E4EC4]/15",
    highlights: ["3 EHO Scoring Pillars", "0–5 Rating Breakdown", "UK Kitchen Readiness"],
  },
  {
    slug: "natashas-law-ppds-food-labelling-guide",
    href: "/blog/natashas-law-ppds-food-labelling-guide",
    title: "Natasha's Law PPDS Labelling Guide",
    tag: "UK Food Labelling Law",
    desc: "Step-by-step walkthrough on Prepacked for Direct Sale ingredients, 14-allergen bolding, and compliance.",
    icon: Tag,
    color: "sky",
    glowColor: "from-[#5B92F5]/15",
    highlights: ["14 Allergen Rules", "Compound Ingredients", "Packaging Compliance"],
  },
];

const DOT_COLORS: Record<IconColor, string> = {
  amber: "bg-[#2F6CE1] shadow-[0_0_8px_#2F6CE1]",
  vermilion: "bg-[#2F6CE1] shadow-[0_0_8px_#2F6CE1]",
  emerald: "bg-[#2F6CE1] shadow-[0_0_8px_#2F6CE1]",
  sky: "bg-[#5B92F5] shadow-[0_0_8px_#5B92F5]",
  blue: "bg-[#2F6CE1] shadow-[0_0_8px_#2F6CE1]",
  indigo: "bg-[#1E4EC4] shadow-[0_0_8px_#1E4EC4]",
  cyan: "bg-[#2F6CE1] shadow-[0_0_8px_#2F6CE1]",
  teal: "bg-[#2F6CE1] shadow-[0_0_8px_#2F6CE1]",
  rose: "bg-[#2F6CE1] shadow-[0_0_8px_#2F6CE1]",
  purple: "bg-[#2F6CE1] shadow-[0_0_8px_#2F6CE1]",
};

export const FeaturedToolsSection = () => {
  return (
    <SoapBubbleMaterial {...LOGO_MATERIAL_DEFAULTS}>
      <section id="kitchen-tools" className="w-full bg-white py-20 sm:py-28 border-t border-[#020612]/[0.07] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <SoapBubbleSurface
                as="div"
                interactive={0.2}
                radius={9999}
                className="saim-bubble-pill inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF5FF] border border-[#2F6CE1]/25 text-[#1D4ED8] text-xs font-mono font-semibold uppercase tracking-widest mb-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F6CE1] animate-pulse" />
                <span>Live Utilities • Engineering Capability Proof</span>
              </SoapBubbleSurface>
              <h2
                className="font-heading text-[#020612] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
                style={{ letterSpacing: "-0.03em" }}
              >
                Production Web Tools &amp; <span className="text-[#2F6CE1]">UK Compliance Guides</span>
              </h2>
              <p className="text-[#020612]/70 text-sm sm:text-base leading-relaxed font-normal">
                We don&apos;t just build marketing pages — we engineer interactive calculators and practical compliance guides designed to protect margins and speed for UK &amp; US hospitality businesses.
              </p>
            </div>

            <div className="shrink-0 hidden md:block">
              <ReactDropButton
                variant="glass"
                href="/tools/commission-savings-calculator"
                className="h-[44px]"
                innerClassName="px-5 text-xs font-mono font-bold gap-2 group"
              >
                <span>Open Commission Calculator</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#2F6CE1] transition-transform group-hover:translate-x-1" />
              </ReactDropButton>
            </div>
          </div>

          {/* 3-Card High-Impact Showcase */}
          <div data-gsap-stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.slug}
                  className="group relative flex flex-col justify-between rounded-3xl bg-[#F8FAFC] hover:bg-white border border-[#020612]/[0.08] p-7 sm:p-8 transition-all duration-300 hover:border-[#2F6CE1]/40 hover:-translate-y-2 shadow-[0_14px_40px_-24px_rgba(2,6,18,0.12)] hover:shadow-[0_22px_48px_-20px_rgba(47,108,225,0.16)] overflow-hidden"
                >
                  <div className="relative z-10">
                    {/* Top Header Row */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-3 py-1 rounded-full border border-[#020612]/[0.08] bg-white text-[#020612]/85 group-hover:border-[#2F6CE1]/30 transition-colors">
                        <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[tool.color] || DOT_COLORS.blue}`} />
                        <span>{tool.tag}</span>
                      </span>

                      <IconTile color={tool.color} size="md" tileClassName="!bg-[#EFF5FF] !border-[#2F6CE1]/25 !text-[#2F6CE1] shadow-sm">
                        <Icon className="w-5 h-5" />
                      </IconTile>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-heading text-xl font-bold text-[#020612] mb-2.5 group-hover:text-[#2F6CE1] transition-colors tracking-tight">
                      <Link
                        href={tool.href}
                        className="after:absolute after:inset-0 focus:outline-none"
                      >
                        {tool.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#020612]/70 font-normal leading-relaxed mb-6">
                      {tool.desc}
                    </p>

                    {/* Feature Highlights Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tool.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-white border border-[#020612]/[0.08] text-[#020612]/70"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom ReactDrops Action Footer */}
                  <div className="relative z-10 pt-3 border-t border-[#020612]/[0.08] pointer-events-none">
                    <SoapBubbleSurface
                      as="div"
                      {...LOGO_BUBBLE_PALETTE}
                      surface="bubble"
                      interactive={true}
                      radius={12}
                      tint="rgba(47, 108, 225, 0.10)"
                      soapColor="rgba(47, 108, 225, 0.18)"
                      iridescence={0.28}
                      oilOpacity={0.18}
                      clearCenter={0.86}
                      wobble={0.30}
                      className="saim-reactdrop-glass flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 group-hover:!bg-[#2F6CE1] group-hover:!text-white group-hover:!border-[#2F6CE1]"
                    >
                      <span className="relative z-[2] flex items-center gap-1.5 text-[11px] opacity-75">
                        <Zap className="w-3.5 h-3.5 text-[#2F6CE1] group-hover:text-white" />
                        <span>Free Interactive Tool</span>
                      </span>
                      <span className="relative z-[2] inline-flex items-center gap-1.5 text-[#1D4ED8] group-hover:text-white group-hover:translate-x-1 transition-transform">
                        <span>Open Tool</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </SoapBubbleSurface>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Prominent ReactDrops CTA Button */}
          <div className="mt-12 sm:mt-14 text-center">
            <ReactDropButton
              variant="primary"
              href="/tools/commission-savings-calculator"
              className="h-[54px]"
              innerClassName="px-8 text-sm font-bold text-white gap-2.5 group"
            >
              <span>Launch Commission Savings Calculator</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1.5" />
            </ReactDropButton>
          </div>
        </div>
      </section>
    </SoapBubbleMaterial>
  );
};
