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
    slug: "ppds-label-generator",
    href: "/tools/ppds-label-generator",
    title: "Natasha's Law PPDS Label Maker",
    tag: "PPDS Food Labelling",
    desc: "Interactive food label generator with automated 14-allergen bolding, expiry dating, and A4 sticker sheet printing.",
    icon: Tag,
    color: "blue",
    glowColor: "from-[#2F6CE1]/15",
    highlights: ["Auto 14-Allergen Bolding", "1.2mm x-Height Font Scale", "A4 Sheet Sticker Print"],
  },
  {
    slug: "allergen-matrix-generator",
    href: "/tools/allergen-matrix-generator",
    title: "14 Food Allergen Matrix & Chart",
    tag: "Allergen Management",
    desc: "Interactive allergen lookup matrix and print-ready PDF export with automated ingredient scanning and takeaway presets.",
    icon: ShieldAlert,
    color: "indigo",
    glowColor: "from-[#1E4EC4]/15",
    highlights: ["Auto-Scan 14 Allergens", "Instant UK Cuisine Presets", "CSV & A4 PDF Export"],
  },
  {
    slug: "food-cost-calculator",
    href: "/tools/food-cost-calculator",
    title: "Commercial Food Cost Calculator",
    tag: "Kitchen Economics",
    desc: "Real-time portion cost calculator featuring UK 20% VAT stripping and Just Eat / Deliveroo commission buffers.",
    icon: Calculator,
    color: "sky",
    glowColor: "from-[#5B92F5]/15",
    highlights: ["UK 20% VAT Stripping", "Deliveroo / Just Eat Buffer", "70%+ Margin Protection"],
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
                <span>160 Live Tools • Engineering Capability Proof</span>
              </SoapBubbleSurface>
              <h2
                className="font-heading text-[#020612] text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
                style={{ letterSpacing: "-0.03em" }}
              >
                160+ Production Web Tools &amp; <span className="text-[#2F6CE1]">Interactive Applications</span>
              </h2>
              <p className="text-[#020612]/70 text-sm sm:text-base leading-relaxed font-normal">
                We don&apos;t just build marketing pages — we engineer complex, high-performance web software. Browse our library of 160 active calculators, automated business systems, and compliance tools running live on saimdev.site.
              </p>
            </div>

            <div className="shrink-0 hidden md:block">
              <ReactDropButton
                variant="glass"
                href="/tools"
                className="h-[44px]"
                innerClassName="px-5 text-xs font-mono font-bold gap-2 group"
              >
                <span>Explore All Tools &amp; Templates</span>
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
              href="/tools"
              className="h-[54px]"
              innerClassName="px-8 text-sm font-bold text-white gap-2.5 group"
            >
              <span>Explore All 160+ Free Web Tools &amp; Calculators</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1.5" />
            </ReactDropButton>
          </div>
        </div>
      </section>
    </SoapBubbleMaterial>
  );
};
