"use client";

import { useState, useMemo } from "react";
import { Calculator, Clock, Check, ArrowRight } from "lucide-react";

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
      totalBase = Math.round(totalBase * 1.15);
      totalDays = Math.max(3, Math.round(totalDays * 0.65));
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
    <section
      id="estimator"
      className="relative w-full bg-black text-white py-16 sm:py-24 border-t border-[#1D1D1D] overflow-hidden"
    >
      <div className="max-w-[1168px] mx-auto px-5 relative z-10">
        <div
          data-gsap-reveal=""
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full border border-[#222222] bg-[#0D0D0D]">
              <span className="w-2 h-2 rounded-full bg-[#BAFF00]" />
              <span className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#CBCBCB]">
                Instant Scope &amp; Pricing Calculator
              </span>
            </div>

            <h2 className="font-display-rh text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
              Estimate your project.{" "}
              <span className="text-[#939393]">Zero hidden costs.</span>
            </h2>
          </div>

          <p className="text-sm text-[#A1A1AA] leading-relaxed font-light max-w-md">
            Select your architecture, integrations, and delivery speed to see an instant fixed-price quote and turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left 7 Cols: Controls */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0D0D0D] border border-[#222222] p-5 sm:p-6 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.16em] text-[#BAFF00]">
                  1 · Architecture Type
                </span>
                <span className="text-[11px] text-[#8E8E93] font-mono-tech">Required</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PROJECT_TYPES.map((pt, idx) => {
                  const isSelected = selectedType === pt.id;
                  const isFullSpan = idx === PROJECT_TYPES.length - 1;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      title={pt.description}
                      onClick={() => setSelectedType(pt.id)}
                      className={`text-left px-4 py-3 rounded-2xl border transition-all duration-150 w-full cursor-pointer ${
                        isFullSpan ? "sm:col-span-2" : ""
                      } ${
                        isSelected
                          ? "bg-black border-[#BAFF00] text-white shadow-[0_0_24px_rgba(186,255,0,0.08)]"
                          : "bg-black/60 border-[#222222] text-[#E4E4E7] hover:border-[#3A3A3C]"
                      }`}
                    >
                      <div
                        className={`w-full flex ${
                          isFullSpan
                            ? "flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
                            : "flex-col justify-between gap-2"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 min-w-0 w-full">
                          <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-white leading-snug">
                            {pt.label}
                          </span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                              isSelected
                                ? "bg-[#BAFF00] border-[#BAFF00] text-[#0D0D0D]"
                                : "border-[#3A3A3C]"
                            }`}
                          >
                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                          </span>
                        </div>
                        <div
                          className={`flex items-center justify-between gap-3 text-[11px] font-mono-tech text-[#8E8E93] w-full ${
                            isFullSpan
                              ? "sm:w-auto sm:shrink-0 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-[#222222]"
                              : "pt-1.5 border-t border-[#222222]"
                          }`}
                        >
                          <span className={isSelected ? "text-[#BAFF00]" : ""}>From £{pt.basePrice}</span>
                          <span>~{pt.baseDays} days</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.16em] text-[#BAFF00]">
                  2 · Add-On Capabilities
                </span>
                <span className="text-[11px] text-[#8E8E93] font-mono-tech">
                  {selectedFeatures.length} selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ADDON_FEATURES.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`text-left px-3.5 py-2.5 rounded-xl border transition-all duration-150 flex items-center justify-between gap-2 cursor-pointer ${
                        isChecked
                          ? "bg-black border-[#BAFF00] text-white"
                          : "bg-black/60 border-[#222222] text-[#D1D1D6] hover:border-[#3A3A3C]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                            isChecked
                              ? "bg-[#BAFF00] border-[#BAFF00] text-[#0D0D0D]"
                              : "border-[#3A3A3C] bg-[#0D0D0D]"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <span className="text-xs font-medium tracking-tight truncate">
                          {feat.label}
                        </span>
                      </div>
                      <span
                        className={`text-[11px] font-mono-tech shrink-0 ${
                          isChecked ? "text-[#BAFF00]" : "text-[#8E8E93]"
                        }`}
                      >
                        +£{feat.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="px-4 py-3 rounded-2xl bg-black border border-[#222222] flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono-tech uppercase tracking-[0.16em] text-[#BAFF00]">
                    3 · Speed
                  </span>
                  <span className="text-white text-xs sm:text-sm font-semibold tracking-tight truncate">
                    Fast-Track Priority Sprint
                  </span>
                </div>
                <span className="text-[#8E8E93] text-[11px] font-light block truncate">
                  Priority engineering queue with 35% faster turnaround (+15%).
                </span>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={isFastTrack}
                aria-label="Toggle fast-track priority sprint"
                onClick={() => setIsFastTrack((prev) => !prev)}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border transition-colors duration-200 ${
                  isFastTrack
                    ? "bg-[#BAFF00] border-[#BAFF00]"
                    : "bg-[#1A1A1A] border-[#3A3A3C]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full transition duration-200 mt-[3px] ${
                    isFastTrack
                      ? "translate-x-6 bg-[#0D0D0D]"
                      : "translate-x-1 bg-white"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Right 5 Cols: Live Summary */}
          <div className="lg:col-span-5 rh-edge-orbit-card is-lime rounded-3xl bg-[#0D0D0D] border border-[#222222] p-5 sm:p-6 flex flex-col justify-between gap-5">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-[#222222]">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#BAFF00]" />
                  <span className="text-xs font-mono-tech uppercase tracking-widest text-white">
                    Scope Calculation
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#0D0D0D] bg-[#BAFF00] font-semibold px-2.5 py-0.5 rounded-full">
                  Fixed-Price Guaranteed
                </span>
              </div>

              <div className="pt-4">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.16em] text-[#8E8E93] block mb-1">
                  Estimated Investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display-rh text-4xl font-semibold tracking-tight text-white">
                    £{calculatedEstimate.priceMin}
                  </span>
                  <span className="text-[#8E8E93] text-lg font-light">
                    — £{calculatedEstimate.priceMax}
                  </span>
                </div>
                <span className="text-[11px] text-[#8E8E93] font-light block mt-1">
                  Transparent milestone fee. 50% deposit, 50% on launch approval.
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black border border-[#222222]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#BAFF00] shrink-0" />
                  <span className="text-[11px] text-[#8E8E93] font-mono-tech uppercase tracking-wider">
                    Turnaround
                  </span>
                </div>
                <span className="text-white text-xs sm:text-sm font-semibold tracking-tight">
                  {calculatedEstimate.daysMin} to {calculatedEstimate.daysMax} Business Days
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#222222]">
              <span className="text-[10px] font-mono-tech uppercase tracking-[0.16em] text-[#8E8E93] block mb-2.5">
                Included with Every Build
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2">
                {[
                  "100% Source Code Ownership",
                  "Sub-second Next.js SSR/SSG",
                  "Mobile & Core Web Vitals Pass",
                  "Schema.org & Google Indexing",
                  "7–30 Days Post-Launch Care",
                  "Direct Engineer WhatsApp",
                ].map((inc) => (
                  <div key={inc} className="flex items-center gap-2 text-[11px] text-[#D1D1D6] font-light">
                    <Check className="w-3 h-3 text-[#BAFF00] shrink-0" />
                    <span className="truncate">{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#222222] flex flex-col gap-2.5">
              <a
                href={`https://wa.me/923196526604?text=${whatsAppMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rh-btn-pill w-full bg-[#BAFF00] text-[#0D0D0D] font-bold text-xs sm:text-sm px-5 py-3.5 inline-flex items-center justify-center gap-2 hover:bg-white transition-colors"
              >
                <span>Lock In This Scope on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="rh-btn-pill w-full bg-black text-white font-medium text-xs px-5 py-3 border border-[#333333] hover:border-[#BAFF00] transition-colors inline-flex items-center justify-center"
              >
                Submit Scope via Web Inquiry Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
