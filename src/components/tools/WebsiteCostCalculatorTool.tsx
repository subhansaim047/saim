"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  ShieldCheck,
  Clock,
  Layers,
} from "lucide-react";

type CurrencyCode = "GBP" | "EUR" | "USD";

interface CurrencyConfig {
  symbol: string;
  label: string;
  rate: number;
}

const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  GBP: { symbol: "£", label: "GBP (£) — UK", rate: 1 },
  EUR: { symbol: "€", label: "EUR (€) — Europe", rate: 1.17 },
  USD: { symbol: "$", label: "USD ($) — US", rate: 1.25 },
};

interface ProjectTypeOption {
  id: string;
  name: string;
  baseGbp: number;
  days: string;
  agencyGbp: number;
  monthlyBuilderGbp: number;
  serviceUrl: string;
  serviceLabel: string;
  deliverables: string[];
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: "landing-cro",
    name: "High-Converting Landing Page / Direct Takeaway Site",
    baseGbp: 250,
    days: "3–5 business days",
    agencyGbp: 2200,
    monthlyBuilderGbp: 89,
    serviceUrl: "/services/landing-pages-cro",
    serviceLabel: "Conversion Landing Pages & CRO",
    deliverables: [
      "Custom Next.js 16 & React 19 conversion layout",
      "Sub-second mobile LCP (<1.2s) & GA4 event tracking",
      "WhatsApp, Stripe, or lead-capture form integration",
      "Full GitHub source code ownership & £0 monthly retainer",
    ],
  },
  {
    id: "starter-business",
    name: "Starter Small Business Website (3–5 Pages)",
    baseGbp: 390,
    days: "5–7 business days",
    agencyGbp: 3500,
    monthlyBuilderGbp: 115,
    serviceUrl: "/services/business-websites",
    serviceLabel: "UK & EU Business Website Design",
    deliverables: [
      "3 to 5 custom pages engineered for local & B2B trust",
      "Unified Schema.org JSON-LD @graph & local SEO setup",
      "Calendly / booking routing & mobile-first responsive UI",
      "Free interactive homepage concept preview before deposit",
    ],
  },
  {
    id: "flagship-nextjs",
    name: "Business Flagship & Topical SEO Platform (8–15 Pages)",
    baseGbp: 790,
    days: "7–14 business days",
    agencyGbp: 6800,
    monthlyBuilderGbp: 195,
    serviceUrl: "/services/website-development",
    serviceLabel: "Next.js Website Development Pillar",
    deliverables: [
      "Up to 15 bespoke pages + MDX or Headless CMS blog silo",
      "Programmatic location/service routes & internal link graph",
      "95+ mobile Core Web Vitals & Edge CDN deployment",
      "Complete 301 redirect matrix protecting legacy rankings",
    ],
  },
  {
    id: "headless-ecommerce",
    name: "Headless Shopify or Custom Stripe E-Commerce Store",
    baseGbp: 1490,
    days: "14–21 business days",
    agencyGbp: 11500,
    monthlyBuilderGbp: 340,
    serviceUrl: "/services/ecommerce-shopify",
    serviceLabel: "Headless Shopify & Custom E-Commerce",
    deliverables: [
      "Next.js 16 Storefront API or direct Stripe Checkout flow",
      "Instant collection filtering, bundle builder & Apple Pay",
      "Eliminates £150–£350/mo in third-party Shopify app bloat",
      "Product, Offer & MerchantReturnPolicy JSON-LD schemas",
    ],
  },
  {
    id: "custom-webapp",
    name: "Custom Web Application, Client Portal or SaaS MVP",
    baseGbp: 1490,
    days: "14–28 business days",
    agencyGbp: 14000,
    monthlyBuilderGbp: 420,
    serviceUrl: "/services/custom-web-apps",
    serviceLabel: "Custom Web Apps & SaaS MVPs",
    deliverables: [
      "Full-stack Next.js App Router, TypeScript & Supabase/Postgres",
      "Role-based authentication, dashboards & Stripe webhooks",
      "Zero no-code workload caps or per-seat SaaS licence tax",
      "Full GitHub repository handover & CI/CD pipeline",
    ],
  },
];

interface AddonOption {
  id: string;
  label: string;
  priceGbp: number;
  desc: string;
}

const ADDONS: AddonOption[] = [
  {
    id: "cms-migration",
    label: "Legacy WordPress / Webflow 301 SEO Migration",
    priceGbp: 150,
    desc: "Full URL inventory, 1:1 permanent 301 redirect rules, and canonical parity.",
  },
  {
    id: "headless-cms",
    label: "Sanity or Headless WordPress Editorial Studio",
    priceGbp: 200,
    desc: "Visual content editing dashboard with instant ISR webhook revalidation.",
  },
  {
    id: "interactive-calculator",
    label: "Custom Interactive ROI / Quote Calculator Widget",
    priceGbp: 180,
    desc: "Lead-generating interactive tool tailored to your service pricing logic.",
  },
  {
    id: "multilingual-geo",
    label: "Multi-Region UK / Europe / US Hreflang & Currency Setup",
    priceGbp: 140,
    desc: "Localized GBP, EUR, and USD pricing signals with regional schema markup.",
  },
];

export const WebsiteCostCalculatorTool: React.FC = () => {
  const [currency, setCurrency] = useState<CurrencyCode>("GBP");
  const [selectedTypeId, setSelectedTypeId] = useState<string>("starter-business");
  const [extraPages, setExtraPages] = useState<number>(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const curr = CURRENCIES[currency];
  const selectedProject =
    PROJECT_TYPES.find((p) => p.id === selectedTypeId) || PROJECT_TYPES[1];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const addonsGbp = selectedAddons.reduce((sum, id) => {
      const found = ADDONS.find((a) => a.id === id);
      return sum + (found ? found.priceGbp : 0);
    }, 0);
    const extraPagesGbp = extraPages * 45;
    const saimOneTimeGbp = selectedProject.baseGbp + addonsGbp + extraPagesGbp;

    // 24-month TCO comparison
    const agency24MonthGbp =
      selectedProject.agencyGbp + addonsGbp * 2.5 + 150 * 24; // £150/mo agency hosting/retainer
    const diy24MonthGbp =
      600 + selectedProject.monthlyBuilderGbp * 24; // setup + 24 months of plugins/apps/platform fees

    const convert = (valGbp: number) => Math.round((valGbp * curr.rate) / 5) * 5;

    return {
      saimTotal: convert(saimOneTimeGbp),
      milestone50: Math.round(convert(saimOneTimeGbp) / 2),
      agency24Mo: convert(agency24MonthGbp),
      diy24Mo: convert(diy24MonthGbp),
      savingsVsAgency: convert(agency24MonthGbp - saimOneTimeGbp),
      savingsVsDiy: convert(Math.max(0, diy24MonthGbp - saimOneTimeGbp)),
    };
  }, [selectedProject, selectedAddons, extraPages, curr]);

  return (
    <div className="rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-10 shadow-2xl space-y-10">
      {/* Top Bar: Currency Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#BAFF00] block mb-1">
            Interactive Website Price &amp; 24-Month TCO Estimator
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Configure Your Website Scope &amp; Instant Fixed Quote
          </h2>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-[#0D0D0D] p-1.5 rounded-2xl border border-white/10 self-start">
          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setCurrency(code)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                currency === code
                  ? "bg-[#BAFF00] text-[#0D0D0D]"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {code} ({CURRENCIES[code].symbol})
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Cols: Controls */}
        <div className="lg:col-span-7 space-y-8">
          {/* Step 1: Project Architecture Tier */}
          <div className="space-y-3">
            <label className="text-xs font-mono uppercase tracking-wider text-white/60 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#BAFF00]" />
              <span>1. Select Website or Web App Architecture</span>
            </label>
            <div className="grid grid-cols-1 gap-3">
              {PROJECT_TYPES.map((pt) => {
                const active = pt.id === selectedTypeId;
                const displayPrice =
                  Math.round((pt.baseGbp * curr.rate) / 5) * 5;
                return (
                  <button
                    key={pt.id}
                    type="button"
                    onClick={() => setSelectedTypeId(pt.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      active
                        ? "bg-[#BAFF00]/10 border-[#BAFF00] text-white"
                        : "bg-[#0D0D0D]/70 border-white/10 text-white/80 hover:border-white/25"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-sm sm:text-base text-white">
                        {pt.name}
                      </div>
                      <div className="text-xs text-white/55 font-mono">
                        Turnaround: {pt.days}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-lg font-extrabold text-[#BAFF00] font-mono">
                        from {curr.symbol}
                        {displayPrice.toLocaleString()}
                      </span>
                      <span className="block text-[10px] font-mono text-white/50">
                        Fixed one-time
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Additional Custom Templates / Pages Slider */}
          <div className="space-y-3 p-5 rounded-2xl bg-[#0D0D0D]/80 border border-white/10">
            <div className="flex items-center justify-between">
              <label
                htmlFor="extra-pages-range"
                className="text-xs font-mono uppercase tracking-wider text-white/70"
              >
                2. Additional Bespoke Content / Location Pages
              </label>
              <span className="text-sm font-mono font-bold text-[#BAFF00]">
                +{extraPages} extra pages
              </span>
            </div>
            <input
              id="extra-pages-range"
              type="range"
              min={0}
              max={20}
              step={1}
              value={extraPages}
              onChange={(e) => setExtraPages(Number(e.target.value))}
              className="w-full accent-[#BAFF00] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-white/40">
              <span>0 extra (Standard scope)</span>
              <span>+10 city/service pages</span>
              <span>+20 programmatic pages</span>
            </div>
          </div>

          {/* Step 3: Optional Engineering Add-ons */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-white/60">
              3. Optional Technical Modules &amp; SEO Migrations
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ADDONS.map((addon) => {
                const checked = selectedAddons.includes(addon.id);
                const addonPrice =
                  Math.round((addon.priceGbp * curr.rate) / 5) * 5;
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                      checked
                        ? "bg-[#BAFF00]/10 border-[#BAFF00] text-white"
                        : "bg-[#0D0D0D]/60 border-white/10 text-white/75 hover:border-white/25"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold text-white leading-snug">
                        {addon.label}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#BAFF00] shrink-0">
                        +{curr.symbol}
                        {addonPrice}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/55 leading-relaxed">
                      {addon.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Live Estimate & 24-Month TCO Output */}
        <div className="lg:col-span-5 rounded-3xl bg-[#0D0D0D] border border-[#BAFF00]/40 p-6 sm:p-8 space-y-6 sticky top-28">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#BAFF00] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Your Fixed-Price Next.js Estimate</span>
            </span>
            <span className="text-xs font-mono text-white/50 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {selectedProject.days}
            </span>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight">
              {curr.symbol}
              {calculation.saimTotal.toLocaleString()}
            </div>
            <p className="text-xs text-white/60 mt-2">
              One-time fixed build fee •{" "}
              <strong className="text-[#BAFF00]">
                {curr.symbol}
                {calculation.milestone50.toLocaleString()}
              </strong>{" "}
              deposit only after you approve your free live concept preview +{" "}
              <strong className="text-[#BAFF00]">
                {curr.symbol}
                {calculation.milestone50.toLocaleString()}
              </strong>{" "}
              on deployment.
            </p>
          </div>

          {/* 24-Month TCO Comparison Box */}
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-white/60">
              24-Month Total Cost of Ownership (TCO) Comparison
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#BAFF00] font-bold">
                <span>Saim Dev Next.js 16 (Owned Code):</span>
                <span className="font-mono">
                  {curr.symbol}
                  {calculation.saimTotal.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-white/65">
                <span>Traditional UK/EU Agency + Retainer:</span>
                <span className="font-mono line-through">
                  {curr.symbol}
                  {calculation.agency24Mo.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-white/65">
                <span>App-Heavy WordPress / Shopify Lease:</span>
                <span className="font-mono line-through">
                  {curr.symbol}
                  {calculation.diy24Mo.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>2-Year Capital Saved vs Traditional Agency:</span>
              <span className="font-mono">
                {curr.symbol}
                {calculation.savingsVsAgency.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Included Deliverables */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-white/60">
              Included in This Fixed Scope:
            </div>
            <ul className="space-y-2">
              {selectedProject.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-white/80 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              href="/contact"
              className="w-full py-3.5 px-6 rounded-full bg-[#BAFF00] text-[#0D0D0D] font-bold text-sm hover:bg-[#c8ff33] transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Free Live Concept Preview</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={selectedProject.serviceUrl}
              className="w-full py-3 px-5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-white/25 text-xs font-mono font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Inspect {selectedProject.serviceLabel} Spec</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
