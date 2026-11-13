"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import {
  Calculator,
  Clock,
  Check,
  ArrowRight,
} from "lucide-react";
import { ViewportMount } from "./reactdrops/ViewportMount";
import {
  SoapBubbleMaterial,
  SoapBubbleSurface,
  SoapBubbleToggle,
} from "./reactdrops/soap-bubble";

const LazyChromaticSurface = dynamic(
  () => import("./reactdrops/chromatic-button/chromatic-surface").then((m) => m.ChromaticSurface),
  { ssr: false }
);

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
      <section id="estimator" className="relative w-full bg-white py-20 sm:py-28 md:py-36 border-t border-black/[0.06] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <SoapBubbleSurface
              as="div"
              interactive={0.2}
              radius={9999}
              className="saim-bubble-pill inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 border border-black/[0.08] bg-[#FAFAFA]"
            >
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-black/80">
                Instant Scope &amp; Pricing Calculator
              </span>
            </SoapBubbleSurface>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#111115] mb-4"
            style={{ letterSpacing: "-0.04em" }}
          >
            Estimate your project. <br />
            <span className="text-black/45">Zero hidden costs, zero sales calls.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-black/65 leading-relaxed font-light">
            Select your project type and desired integrations below to get a transparent, real-time estimate of cost, timeline, and deliverables.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 7 COLS: Selection Controls */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Step 1: Project Type */}
            <div className="rounded-3xl bg-[#FAFAFA] border border-black/[0.08] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D9380E]">
                  Step 1 • Select Architecture Type
                </span>
                <span className="text-xs text-black/60 font-mono">1 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = selectedType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => setSelectedType(pt.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 relative flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? "bg-[#FFF5F2] border-[#FF4A1C] shadow-[0_8px_24px_-12px_rgba(255,74,28,0.28)]"
                          : "bg-white border-black/[0.08] hover:border-black/20 hover:bg-[#FAFAFA]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`text-sm font-medium tracking-tight ${isSelected ? "text-[#111115]" : "text-[#111115]/90"}`}>
                          {pt.label}
                        </span>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-[#FF4A1C] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-black/65 font-light leading-relaxed mb-3">
                        {pt.description}
                      </p>
                      <div className="flex items-center justify-between text-[11px] font-mono text-black/65 pt-2 border-t border-black/[0.06]">
                        <span>From £{pt.basePrice}</span>
                        <span>~{pt.baseDays} days</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Integrations & Features */}
            <div className="rounded-3xl bg-[#FAFAFA] border border-black/[0.08] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D9380E]">
                  Step 2 • Optional Add-On Capabilities
                </span>
                <span className="text-xs text-black/60 font-mono">2 of 3</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDON_FEATURES.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${
                        isChecked
                          ? "bg-[#FFF5F2] border-[#FF4A1C]/50 text-[#111115]"
                          : "bg-white border-black/[0.08] text-black/75 hover:border-black/20 hover:text-[#111115]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked
                              ? "bg-[#FF4A1C] border-[#FF4A1C]"
                              : "border-black/20 bg-[#FAFAFA]"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium tracking-tight">
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

            {/* Step 3: Priority Sprint Speed */}
            <div className="rounded-3xl bg-[#FAFAFA] border border-black/[0.08] p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D9380E] block mb-1">
                  Step 3 • Delivery Speed
                </span>
                <span className="text-[#111115] text-sm font-medium tracking-tight block">
                  Fast-Track Priority Sprint
                </span>
                <span className="text-black/65 text-xs font-light">
                  Direct priority queue with 35% faster deployment turnaround.
                </span>
              </div>

              <SoapBubbleToggle
                checked={isFastTrack}
                onCheckedChange={setIsFastTrack}
                color="#FF4A1C"
                scale={1.08}
                aria-label="Toggle fast-track priority sprint"
              />
            </div>
          </div>

          {/* RIGHT 5 COLS: Sticky Dynamic Estimate Summary Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-white border border-black/[0.10] p-6 sm:p-8 shadow-[0_24px_60px_-24px_rgba(17,17,21,0.14)] relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
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

                {/* Main Estimated Cost Range */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-black/60 block mb-1">
                    Estimated Investment
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#111115]">
                      £{calculatedEstimate.priceMin}
                    </span>
                    <span className="text-black/55 text-xl font-light">
                      — £{calculatedEstimate.priceMax}
                    </span>
                  </div>
                  <span className="text-[11px] text-black/60 font-light block mt-1">
                    Transparent milestone fee. 50% deposit, 50% on final launch approval.
                  </span>
                </div>

                {/* Delivery Timeline */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#FAFAFA] border border-black/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.08] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#FF4A1C]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-black/60 font-mono uppercase tracking-wider">
                      Turnaround Timeline
                    </span>
                    <span className="text-[#111115] text-base font-medium tracking-tight">
                      {calculatedEstimate.daysMin} to {calculatedEstimate.daysMax} Business Days
                    </span>
                  </div>
                </div>

                {/* Standard Included Core Deliverables */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-black/60 block mb-2">
                    Included with Every Build
                  </span>
                  {[
                    "100% Full Source Code & Repository Ownership",
                    "Sub-second Next.js SSR/SSG edge performance",
                    "Full mobile responsiveness & Core Web Vitals pass",
                    "Structured Schema.org JSON-LD & Google Indexing",
                    "7 to 30 days dedicated post-launch support",
                    "Direct senior engineer access via WhatsApp/Email",
                  ].map((inc) => (
                    <div key={inc} className="flex items-start gap-2.5 text-xs text-black/75 font-light">
                      <Check className="w-3.5 h-3.5 text-[#FF4A1C] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-black/[0.08] flex flex-col gap-3">
                  <a
                    href={`https://wa.me/923196526604?text=${whatsAppMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chromatic-button saim-hero-chromatic w-full rounded-2xl bg-[radial-gradient(125%_160%_at_18%_20%,#ff8a5b_0%,#FF4A1C_48%,#e0360a_100%)] shadow-[0_8px_28px_rgba(255,74,28,0.28)]"
                    style={{ borderRadius: "1rem" }}
                  >
                    <ViewportMount unmountWhenFar rootMargin="0px 0px" className="absolute inset-0 pointer-events-none">
                      <LazyChromaticSurface
                        color="#FF4A1C"
                        color2="#ff8a5b"
                        color3="#e0360a"
                        colorMode="gradient-3"
                        hoverEffect="spotlight"
                        borderRadius={34}
                        speed={0.85}
                        feather={18}
                        intensity={1.45}
                        grain={0.055}
                      />
                    </ViewportMount>
                    <span className="chromatic-button-content text-sm font-semibold text-white">
                      <span>Lock In This Scope on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>

                  <a
                    href="#contact"
                    className="w-full py-3 px-6 rounded-2xl bg-[#FAFAFA] hover:bg-black/[0.06] text-[#111115] font-medium text-xs tracking-tight flex items-center justify-center border border-black/[0.09] transition-colors"
                  >
                    Submit Scope via Web Inquiry Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </SoapBubbleMaterial>
  );
};
