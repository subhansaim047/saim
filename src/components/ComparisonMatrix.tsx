"use client";

import { Check, X, Minus, ShieldCheck } from "lucide-react";

interface MatrixRow {
  dimension: string;
  saimDev: string;
  traditionalAgency: string;
  cheapFreelancer: string;
  diyBuilders: string;
  isPositive?: boolean;
}

const COMPARISON_DATA: MatrixRow[] = [
  {
    dimension: "Typical Investment",
    saimDev: "£250 – £1,250+ (Transparent & Fixed)",
    traditionalAgency: "£3,000 – £15,000+ (Opaque Quoting)",
    cheapFreelancer: "£150 – £800 (Unpredictable Add-ons)",
    diyBuilders: "£20 – £60 / month forever",
  },
  {
    dimension: "Delivery Timeline",
    saimDev: "5 to 14 Business Days",
    traditionalAgency: "8 to 16 Weeks (Waterfall)",
    cheapFreelancer: "2 to 8 Weeks (Frequent delays)",
    diyBuilders: "Weeks of DIY effort",
  },
  {
    dimension: "Communication",
    saimDev: "Direct Senior Engineer Access (Zero Middleware)",
    traditionalAgency: "Account Managers & Junior Handoffs",
    cheapFreelancer: "Single point of failure (Ghosting risk)",
    diyBuilders: "Automated help bot / Community forum",
  },
  {
    dimension: "Performance & Core Web Vitals",
    saimDev: "95+ Mobile Score (Sub-Second Next.js)",
    traditionalAgency: "50 – 75 (Heavy themes & plugins)",
    cheapFreelancer: "Unoptimized (Template installs)",
    diyBuilders: "35 – 60 (Platform script bloat)",
  },
  {
    dimension: "Code & Asset Ownership",
    saimDev: "100% Client Owned (Clean Git Handover)",
    traditionalAgency: "Often tied to agency hosting contracts",
    cheapFreelancer: "Often undocumented or inaccessible",
    diyBuilders: "0% Ownership (Rented platform lock-in)",
  },
  {
    dimension: "Mandatory Monthly Retainers",
    saimDev: "£0 Forced Retainers (Pay only for what you need)",
    traditionalAgency: "£300 – £1,500 / month ongoing",
    cheapFreelancer: "None (No ongoing accountability)",
    diyBuilders: "Permanent recurring subscription",
  },
  {
    dimension: "Demonstrated Engineering Proof",
    saimDev: "160 Live Tools & Compliance Templates on Site",
    traditionalAgency: "Static portfolio screenshots only",
    cheapFreelancer: "Third-party template screenshots",
    diyBuilders: "Generic cookie-cutter templates",
  },
  {
    dimension: "SEO & AI Answer Citability",
    saimDev: "Full JSON-LD, Semantic Markup & GEO Ready",
    traditionalAgency: "Extra £1,000+ SEO add-on charge",
    cheapFreelancer: "Basic title tags only",
    diyBuilders: "Limited automated SEO tools",
  },
];

export const ComparisonMatrix = () => {
  return (
    <section id="comparison" className="relative w-full bg-white py-20 sm:py-28 md:py-36 border-t border-[#020612]/[0.07] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF5FF] border border-[#2F6CE1]/20 mb-4">
            <span className="section-dot" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#020612]">
              The Market Landscape
            </span>
          </div>

          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#020612] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            How Saim Dev compares. <br />
            <span className="text-[#2F6CE1]">Engineered for quality, speed, and honesty.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#020612]/70 leading-relaxed font-normal">
            Comparing typical industry service models against our direct senior engineering studio. Factual, transparent, and based on standard UK market surveys.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[#020612]/15 scrollbar-track-transparent rounded-3xl border border-[#020612]/[0.09] shadow-[0_18px_50px_-24px_rgba(2,6,18,0.12)] bg-white">
          <table className="w-full text-left border-collapse min-w-[850px]">
            <thead>
              <tr className="border-b border-[#020612]/[0.08] bg-[#F8FAFC]">
                <th className="py-5 px-6 text-xs font-mono font-semibold uppercase tracking-widest text-[#020612]/60 w-[24%]">
                  Dimension
                </th>
                <th className="py-5 px-6 text-xs font-mono uppercase tracking-widest text-[#1D4ED8] bg-[#EFF5FF] border-x border-[#2F6CE1]/25 w-[28%] relative">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#2F6CE1]" />
                    <span className="font-heading font-extrabold text-[#020612]">Saim Dev</span>
                  </div>
                  <span className="text-[10px] text-[#1D4ED8] lowercase font-sans font-semibold block mt-0.5">
                    Direct senior studio
                  </span>
                </th>
                <th className="py-5 px-6 text-xs font-mono font-semibold uppercase tracking-widest text-[#020612]/60 w-[24%]">
                  Traditional Agency
                  <span className="text-[10px] text-[#020612]/45 lowercase font-sans font-normal block mt-0.5">
                    High overhead
                  </span>
                </th>
                <th className="py-5 px-6 text-xs font-mono font-semibold uppercase tracking-widest text-[#020612]/60 w-[24%]">
                  DIY Builders
                  <span className="text-[10px] text-[#020612]/45 lowercase font-sans font-normal block mt-0.5">
                    Wix, Squarespace
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#020612]/[0.06] text-xs sm:text-sm font-normal">
              {COMPARISON_DATA.map((row) => (
                <tr key={row.dimension} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="py-4.5 px-6 font-bold text-[#020612]">
                    {row.dimension}
                  </td>
                  {/* Saim Dev Highlighted Cell */}
                  <td className="py-4.5 px-6 font-semibold text-[#020612] bg-[#F4F8FF] border-x border-[#2F6CE1]/20">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#2F6CE1] shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{row.saimDev}</span>
                    </div>
                  </td>
                  {/* Traditional Agency */}
                  <td className="py-4.5 px-6 text-[#020612]/70">
                    <div className="flex items-start gap-2">
                      <Minus className="w-4 h-4 text-[#020612]/40 shrink-0 mt-0.5" />
                      <span>{row.traditionalAgency}</span>
                    </div>
                  </td>
                  {/* DIY Builders */}
                  <td className="py-4.5 px-6 text-[#020612]/60">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-[#020612]/50 shrink-0 mt-0.5" />
                      <span>{row.diyBuilders}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sourced Market Evidence & Legal Footnotes */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-[#020612]/[0.08] text-xs text-[#020612]/70 leading-relaxed font-normal">
          <p className="font-bold text-[#020612] mb-2">Sources &amp; Comparative Advertising Methodology (UK CAP Code Compliance):</p>
          <ul className="space-y-1.5 list-disc list-inside">
            <li><strong>Traditional Agency Pricing &amp; Timelines:</strong> Based on published UK market surveys by Clutch UK and DesignRush reporting average bespoke website build costs of £3,000–£10,000+ for small-to-mid businesses with 8–16 week waterfall delivery cycles.</li>
            <li><strong>DIY Platform Costs:</strong> Reflect standard published commercial tiers of major SaaS website builders (e.g., Wix, Squarespace) ranging from £15–£40/month plus ongoing payment gateway and app store subscription fees.</li>
            <li><strong>Saim Dev Offerings:</strong> Transparent fixed milestone pricing (£250–£1,250+ depending on scope) with 100% source code ownership and zero mandatory recurring maintenance contracts.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
