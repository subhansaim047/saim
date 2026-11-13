"use client";

import { useState, useMemo } from "react";
import {
  Calculator,
  Clock,
  Check,
  ArrowRight,
} from "lucide-react";
import {
  SoapBubbleMaterial,
  SoapBubbleToggle,
} from "./reactdrops/soap-bubble";

interface ProjectTypeOption {
  id: string;
  label: string;
  basePrice: number;
  baseDays: number;
  description: string;
}

interface FeatureOption {
  id: string;
  label: string;
  price: number;
  days: number;
  category: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: "landing",
    label: "Landing Page / Single Offer",
    basePrice: 250,
    baseDays: 5,
    description: "High-converting single page for ad campaigns, launches, or local service promotions.",
  },
  {
    id: "starter",
    label: "Starter Website (Up to 5 Pages)",
    basePrice: 390,
    baseDays: 7,
    description: "Essential bespoke Next.js presence for local businesses with SEO, forms, and WhatsApp integration.",
  },
  {
    id: "business",
    label: "Full Business Website (Up to 15 Pages)",
    basePrice: 790,
    baseDays: 10,
    description: "Complete digital flagship with custom UI/UX, structured JSON-LD schema, blog CMS, and lead funnels.",
  },
  {
    id: "ecommerce",
    label: "E-Commerce / Storefront",
    basePrice: 950,
    baseDays: 12,
    description: "Shopify, WooCommerce, or custom Next.js store with payments, catalog search, and cart optimization.",
  },
  {
    id: "webapp",
    label: "Custom Web App / SaaS MVP",
    basePrice: 1250,
    baseDays: 14,
    description: "Interactive full-stack web software with authentication, database, dashboards, and custom API logic.",
  },
];

const ADDON_FEATURES: FeatureOption[] = [
  { id: "cms", label: "Custom CMS (Sanity / WordPress)", price: 150, days: 2, category: "Content" },
  { id: "auth", label: "User Auth & Client Portal", price: 250, days: 3, category: "Functionality" },
  { id: "payments", label: "Stripe / Online Payments", price: 180, days: 2, category: "Commerce" },
  { id: "booking", label: "Interactive Booking & Calendar", price: 140, days: 2, category: "Conversion" },
  { id: "multilang", label: "Multi-Language & Global SEO", price: 160, days: 2, category: "SEO" },
  { id: "schema", label: "Advanced Rich Schema & GEO Data", price: 100, days: 1, category: "SEO" },
];

export const ProjectScopeEstimator = () => {
  const [selectedType, setSelectedType] = useState<string>("business");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isFastTrack, setIsFastTrack] = useState<boolean>(false);

  const activeType = useMemo(
    () => PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[2],
    [selectedType]
  );

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedEstimate = useMemo(() => {
    const featureCost = selectedFeatures.reduce((acc, featId) => {
      const feat = ADDON_FEATURES.find((f) => f.id === featId);
      return acc + (feat ? feat.price : 0);
    }, 0);

    const featureDays = selectedFeatures.reduce((acc, featId) => {
      const feat = ADDON_FEATURES.find((f) => f.id === featId);
      return acc + (feat ? feat.days : 0);
    }, 0);

    let totalBase = activeType.basePrice + featureCost;
    let totalDays = activeType.baseDays + Math.round(featureDays * 0.6);

    if (isFastTrack) {
      totalBase = Math.round(totalBase * 1.15); // 15% fast-track priority fee
      totalDays = Math.max(3, Math.round(totalDays * 0.65)); // 35% faster delivery
    }

    return {
      priceMin: totalBase,
      priceMax: Math.round(totalBase * 1.18),
      daysMin: totalDays,
      daysMax: totalDays + 2,
    };
  }, [activeType, selectedFeatures, isFastTrack]);

  const whatsAppMessage = useMemo(() => {
    const selectedFeatureLabels = selectedFeatures
      .map((id) => ADDON_FEATURES.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    const text = `Hi Saim, I used your Project Scope Estimator on saimdev.site:
- Type: ${activeType.label}
- Features: ${selectedFeatureLabels || "Standard Plan Deliverables"}
- Priority: ${isFastTrack ? "Fast-Track Priority Sprint" : "Standard Agile Sprint"}
- Estimated Budget: £${calculatedEstimate.priceMin} - £${calculatedEstimate.priceMax}
- Estimated Timeline: ${calculatedEstimate.daysMin} - ${calculatedEstimate.daysMax} days.

Can we discuss scheduling my project?`;

    return encodeURIComponent(text);
  }, [activeType, selectedFeatures, isFastTrack, calculatedEstimate]);

  return (
    <SoapBubbleMaterial
      surface="bubble-liquid"
      environment="studio"
      liquidLens={false}
      iridescence={1.2}
      clearCenter={0.78}
      filmScale={5}
      bevel={10}
      tint="rgba(255, 255, 255, 0.72)"
      soapColor="rgba(255, 74, 28, 0.08)"
      wobble={0.35}
    >
      <section
        id="estimator"
        className="relative w-full bg-white py-8 sm:py-10 md:py-11 border-t border-black/[0.06] overflow-hidden"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          {/* Compact Single-Screen Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2 mb-4 sm:mb-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 mb-1.5 rounded-full border border-black/[0.08] bg-[#FAFAFA]">
                <span className="section-dot" />
                <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-black/75">
                  Instant Scope &amp; Pricing Calculator
                </span>
              </div>

              <h2
                className="text-2xl sm:text-3xl md:text-[34px] leading-tight font-medium tracking-tight text-[#111115]"
                style={{ letterSpacing: "-0.035em" }}
              >
                Estimate your project.{" "}
                <span className="text-black/45">Zero hidden costs.</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-black/60 leading-relaxed font-light max-w-md">
              Select your architecture, integrations, and delivery speed to see an instant fixed-price quote and turnaround.
            </p>
          </div>

          {/* Single-Screen Two-Column Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            {/* LEFT 7 COLS: All 3 Controls in One Clean Deck */}
            <div className="lg:col-span-7 rounded-2xl bg-[#FAFAFA] border border-black/[0.08] p-4 flex flex-col justify-between gap-3 shadow-xs">
              {/* 1. Architecture Type */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#D9380E]">
                    1 · Architecture Type
                  </span>
                  <span className="text-[11px] text-black/50 font-mono">Required</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PROJECT_TYPES.map((pt, idx) => {
                    const isSelected = selectedType === pt.id;
                    const isFullSpan = idx === PROJECT_TYPES.length - 1;
                    return (
                      <button
                        key={pt.id}
                        type="button"
                        title={pt.description}
                        onClick={() => setSelectedType(pt.id)}
                        className={`text-left px-3 py-2.5 rounded-xl border transition-all duration-150 flex ${
                          isFullSpan
                            ? "sm:col-span-2 flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4"
                            : "flex-col justify-between"
                        } cursor-pointer ${
                          isSelected
                            ? "bg-[#FFF5F2] border-[#FF4A1C] shadow-[0_6px_18px_-10px_rgba(255,74,28,0.28)]"
                            : "bg-white border-black/[0.08] hover:border-black/20"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 min-w-0">
                          <span className="text-xs sm:text-sm font-medium tracking-tight text-[#111115] truncate">
                            {pt.label}
                          </span>
                          {isSelected && (
                            <span className="w-4 h-4 rounded-full bg-[#FF4A1C] flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                            </span>
                          )}
                        </div>
                        <div
                          className={`flex items-center justify-between gap-3 text-[11px] font-mono text-black/60 ${
                            isFullSpan ? "sm:shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-black/[0.06]" : "mt-1.5 pt-1 border-t border-black/[0.06]"
                          }`}
                        >
                          <span>From £{pt.basePrice}</span>
                          <span>~{pt.baseDays} days</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Optional Add-On Capabilities */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#D9380E]">
                    2 · Add-On Capabilities
                  </span>
                  <span className="text-[11px] text-black/50 font-mono">
                    {selectedFeatures.length} selected
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {ADDON_FEATURES.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`text-left px-3 py-1.5 rounded-xl border transition-all duration-150 flex items-center justify-between gap-2 cursor-pointer ${
                          isChecked
                            ? "bg-[#FFF5F2] border-[#FF4A1C]/60 text-[#111115]"
                            : "bg-white border-black/[0.08] text-black/75 hover:border-black/20 hover:text-[#111115]"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                              isChecked
                                ? "bg-[#FF4A1C] border-[#FF4A1C]"
                                : "border-black/20 bg-[#FAFAFA]"
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                          </span>
                          <span className="text-xs font-medium tracking-tight truncate">
                            {feat.label}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-black/60 shrink-0">
                          +£{feat.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Priority Sprint Speed */}
              <div className="px-3.5 py-2 rounded-xl bg-white border border-black/[0.08] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#D9380E]">
                      3 · Speed
                    </span>
                    <span className="text-[#111115] text-xs sm:text-sm font-medium tracking-tight truncate">
                      Fast-Track Priority Sprint
                    </span>
                  </div>
                  <span className="text-black/55 text-[11px] font-light block truncate">
                    Priority engineering queue with 35% faster turnaround (+15%).
                  </span>
                </div>

                <SoapBubbleToggle
                  checked={isFastTrack}
                  onCheckedChange={setIsFastTrack}
                  color="#FF4A1C"
                  scale={0.94}
                  aria-label="Toggle fast-track priority sprint"
                />
              </div>
            </div>

            {/* RIGHT 5 COLS: Live Summary & Instant Booking */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-black/[0.10] p-4 shadow-[0_20px_50px_-24px_rgba(17,17,21,0.12)] flex flex-col justify-between gap-3">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.08]">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#FF4A1C]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-black/80">
                      Scope Calculation
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Fixed-Price Guaranteed
                  </span>
                </div>

                {/* Estimated Price */}
                <div className="pt-3.5">
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-black/55 block mb-0.5">
                    Estimated Investment
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111115]">
                      £{calculatedEstimate.priceMin}
                    </span>
                    <span className="text-black/55 text-lg font-light">
                      — £{calculatedEstimate.priceMax}
                    </span>
                  </div>
                  <span className="text-[11px] text-black/55 font-light block mt-0.5">
                    Transparent milestone fee. 50% deposit, 50% on launch approval.
                  </span>
                </div>

                {/* Turnaround Strip */}
                <div className="mt-3 flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-[#FAFAFA] border border-black/[0.06]">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#FF4A1C] shrink-0" />
                    <span className="text-[11px] text-black/60 font-mono uppercase tracking-wider">
                      Turnaround
                    </span>
                  </div>
                  <span className="text-[#111115] text-xs sm:text-sm font-medium tracking-tight">
                    {calculatedEstimate.daysMin} to {calculatedEstimate.daysMax} Business Days
                  </span>
                </div>
              </div>

              {/* Compact 2-Col Included Deliverables */}
              <div className="pt-2 border-t border-black/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-black/55 block mb-2">
                  Included with Every Build
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                  {[
                    "100% Source Code Ownership",
                    "Sub-second Next.js SSR/SSG",
                    "Mobile & Core Web Vitals Pass",
                    "Schema.org & Google Indexing",
                    "7–30 Days Post-Launch Care",
                    "Direct Engineer WhatsApp",
                  ].map((inc) => (
                    <div key={inc} className="flex items-center gap-1.5 text-[11px] text-black/75 font-light">
                      <Check className="w-3 h-3 text-[#FF4A1C] shrink-0" />
                      <span className="truncate">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pure Vermilion CTA Actions */}
              <div className="pt-3 border-t border-black/[0.08] flex flex-col gap-2">
                <a
                  href={`https://wa.me/923196526604?text=${whatsAppMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chromatic-button saim-hero-chromatic w-full rounded-xl bg-[radial-gradient(125%_160%_at_18%_20%,#ff8a5b_0%,#FF4A1C_48%,#e0360a_100%)] shadow-[0_8px_24px_rgba(255,74,28,0.28)]"
                  style={{ borderRadius: "0.75rem" }}
                >
                  <span className="chromatic-button-content text-sm font-semibold text-white">
                    <span>Lock In This Scope on WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href="#contact"
                  className="w-full py-2.5 px-5 rounded-xl bg-[#FAFAFA] hover:bg-black/[0.06] text-[#111115] font-medium text-xs tracking-tight flex items-center justify-center border border-black/[0.09] transition-colors"
                >
                  Submit Scope via Web Inquiry Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SoapBubbleMaterial>
  );
};
