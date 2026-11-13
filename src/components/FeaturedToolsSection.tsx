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
    highlights: ["Auto 14-Allergen Bolding", "1.2mm x-Height Font Scale", "A4 Sheet Sticker Print"],
  },
  {
    slug: "allergen-matrix-generator",
    href: "/tools/allergen-matrix-generator",
    title: "14 Food Allergen Matrix & Chart",
    tag: "Allergen Management",
    desc: "Interactive allergen lookup matrix and print-ready PDF export with automated ingredient scanning and takeaway presets.",
    icon: ShieldAlert,
    color: "vermilion",
    glowColor: "from-[#FF4A1C]/15",
    highlights: ["Auto-Scan 14 Allergens", "Instant UK Cuisine Presets", "CSV & A4 PDF Export"],
  },
  {
    slug: "food-cost-calculator",
    href: "/tools/food-cost-calculator",
    title: "Commercial Food Cost Calculator",
    tag: "Kitchen Economics",
    desc: "Real-time portion cost calculator featuring UK 20% VAT stripping and Just Eat / Deliveroo commission buffers.",
    icon: Calculator,
    color: "emerald",
    glowColor: "from-emerald-500/15",
    highlights: ["UK 20% VAT Stripping", "Deliveroo / Just Eat Buffer", "70%+ Margin Protection"],
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
    <section id="kitchen-tools" className="w-full bg-white py-20 sm:py-28 border-t border-black/[0.06] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F2] border border-[#FF4A1C]/25 text-[#D9380E] text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C] animate-pulse" />
              <span>160 Live Tools • Engineering Capability Proof</span>
            </div>
            <h2
              className="text-[#111115] text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              160+ Production Web Tools &amp; Interactive Applications
            </h2>
            <p className="text-black/65 text-sm sm:text-base leading-relaxed font-light">
              We don't just build marketing pages — we engineer complex, high-performance web software. Browse our library of 160 active calculators, automated business systems, and compliance tools running live on saimdev.site.
            </p>
          </div>

          <div className="shrink-0 hidden md:block">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAFAFA] border border-black/[0.10] text-[#111115] text-xs font-mono font-medium hover:bg-black/[0.05] hover:border-[#FF4A1C]/40 transition-all group"
            >
              <span>Explore All Tools &amp; Templates</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF4A1C] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3-Card High-Impact Showcase */}
        <div data-gsap-stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.slug}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#FAFAFA] hover:bg-white border border-black/[0.08] p-7 sm:p-8 transition-all duration-300 hover:border-black/20 hover:-translate-y-2 shadow-[0_14px_40px_-24px_rgba(17,17,21,0.12)] hover:shadow-[0_22px_48px_-20px_rgba(17,17,21,0.16)] overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full border border-black/[0.08] bg-white text-[#111115]/80 group-hover:border-black/20 transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full ${DOT_COLORS[tool.color] || DOT_COLORS.amber}`} />
                      <span>{tool.tag}</span>
                    </span>

                    <IconTile color={tool.color} size="md" tileClassName="!bg-white !border-black/[0.09] shadow-sm">
                      <Icon className="w-5 h-5" />
                    </IconTile>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold text-[#111115] mb-2.5 group-hover:text-[#FF4A1C] transition-colors tracking-tight">
                    <Link
                      href={tool.href}
                      className="after:absolute after:inset-0 focus:outline-none"
                    >
                      {tool.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-black/65 leading-relaxed mb-6">
                    {tool.desc}
                  </p>

                  {/* Feature Highlights Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {tool.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white border border-black/[0.08] text-black/65"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="relative z-10 pt-4 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono font-medium text-black/65 group-hover:text-[#111115] transition-colors pointer-events-none">
                  <span className="flex items-center gap-1.5 text-black/55 text-[11px]">
                    <Zap className="w-3.5 h-3.5 text-[#FF4A1C]" />
                    <span>Free Interactive Tool</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#D9380E] group-hover:translate-x-1.5 transition-transform font-semibold">
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
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#111115] hover:bg-[#FF4A1C] text-white text-sm font-semibold transition-all group shadow-[0_12px_30px_-10px_rgba(17,17,21,0.35)]"
          >
            <span>Explore All 160+ Free Web Tools &amp; Calculators</span>
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
