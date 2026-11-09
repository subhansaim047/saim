"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  priceTag: string;
  tagline: string;
  description: string;
  deliverables: string[];
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "1:1 Pixel-Perfect Website & Web App Clone",
    priceTag: "Flat $1,900 USD",
    tagline: "Exact architectural replication of any digital experience.",
    description: "We reconstruct any website or web application down to the single pixel in clean Next.js 16 and Tailwind CSS. Silky 60fps micro-animations, ultra-responsive layouts, and zero visual discrepancy. Backed by our $0 upfront guarantee.",
    deliverables: ["100% 1:1 Visual & Layout Match", "Clean Next.js 16 Component Tree", "Full Source Code Ownership"],
    href: "/services/website-clone"
  },
  {
    number: "02",
    title: "Custom Next.js Headless eCommerce Store",
    priceTag: "From £750 / $950",
    tagline: "Zero monthly Shopify app subscription bills ($30–$300/mo).",
    description: "Escape recurring monthly app charges for basic product swatches, filters, and currencies. We engineer bespoke Next.js storefronts with instant faceted search, sub-second product pages, and one-click Stripe checkout.",
    deliverables: ["Instant Faceted Filtering", "Zero App Subscription Fees", "Frictionless Stripe Checkout"],
    href: "/services/ecommerce-shopify"
  },
  {
    number: "03",
    title: "Bespoke Next.js Business Websites",
    priceTag: "From £450 / $590",
    tagline: "Modern web architecture engineered to replace bloated WordPress plugins.",
    description: "Replace vulnerable PHP plugins with custom Next.js web architecture. Guaranteed sub-500ms load times, 100/100 Core Web Vitals, rich JSON-LD schema for Google indexing, and zero monthly retainers.",
    deliverables: ["Sub-500ms Edge CDN Delivery", "100/100 Core Web Vitals", "Structured SEO Schema"],
    href: "/services/website-development"
  },
  {
    number: "04",
    title: "Takeaway & Restaurant Web System",
    priceTag: "Fixed £250 / $320",
    tagline: "Escape 30%+ Just Eat & Uber Eats commissions with Natasha's Law compliance.",
    description: "Bespoke direct-ordering website designed for UK takeaways and restaurants. Built-in interactive 14-allergen filter matrix compliant with Natasha's Law, direct WhatsApp kitchen order dispatch, and printable table QR codes.",
    deliverables: ["0% Commission (Keep 100% Profit)", "Interactive 14-Allergen Filter", "WhatsApp Kitchen Order Dispatch"],
    href: "/services/takeaway-web-design"
  },
  {
    number: "05",
    title: "High-Converting Next.js Landing Pages",
    priceTag: "Fixed £250 / $320",
    tagline: "Sub-400ms conversion engines engineered specifically for paid ad traffic.",
    description: "Stop wasting ad spend on slow, distracted homepages. Our hyper-focused Next.js landing pages load in under 400ms, feature psychological conversion copywriting, and route leads directly to your WhatsApp.",
    deliverables: ["Sub-400ms Initial Paint", "High-Converting WhatsApp CTA", "Conversion Copywriting Included"],
    href: "/services/landing-pages-cro"
  }
];

export const RhServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#08080a] text-[#fafafa] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header - rh.design exact dual-tone headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#b5f900] mb-3 font-semibold">
              S E R V I C E S
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white max-w-3xl leading-[1.12]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Built by senior engineers{" "}
              <span className="text-gray-400">Better than bloated agencies.</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm font-normal leading-relaxed">
            Every service includes our $0 upfront sprint: we build and verify the live interactive prototype before asking for a single penny.
          </p>
        </div>

        {/* Bento Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Interactive Service Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES.map((s, idx) => (
              <button
                key={s.number}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`text-left p-5 sm:p-6 rounded-2xl transition-all border flex items-center justify-between cursor-pointer ${
                  activeTab === idx
                    ? "bg-[#18181c] border-[#b5f900]/40 shadow-lg"
                    : "bg-[#0f0f12] border-white/5 hover:border-white/15 text-gray-400 hover:text-white"
                }`}
              >
                <div>
                  <div className="text-[11px] font-mono text-[#b5f900] mb-1 font-semibold">
                    {s.number} • {s.priceTag}
                  </div>
                  <h3 className={`text-base sm:text-lg font-semibold tracking-tight ${activeTab === idx ? "text-white" : "text-gray-300"}`}>
                    {s.title}
                  </h3>
                </div>
                <ArrowUpRight className={`w-4 h-4 transition-transform ${activeTab === idx ? "text-[#b5f900] rotate-45" : "text-gray-500"}`} />
              </button>
            ))}
          </div>

          {/* Right Column: Active Service Deep Dive Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0f0f12] border border-white/10 p-8 sm:p-12 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#b5f900] font-semibold">
                  {SERVICES[activeTab].priceTag} • $0 Upfront Deposit
                </span>
                <span className="text-xs font-mono text-gray-400">
                  {SERVICES[activeTab].number} / 05
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4">
                {SERVICES[activeTab].title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8">
                {SERVICES[activeTab].description}
              </p>

              <div className="pt-6 border-t border-white/10 mb-8">
                <div className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-4 font-semibold">
                  Key Deliverables
                </div>
                <div className="flex flex-col gap-3">
                  {SERVICES[activeTab].deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-[#b5f900] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20the%20$0%20upfront%20offer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#b5f900] hover:bg-white text-black font-semibold text-xs tracking-tight transition-all active:scale-95 shadow-md flex items-center gap-2"
              >
                <span>Discuss With Saim on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href={SERVICES[activeTab].href}
                className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium transition-colors"
              >
                Service Details Page ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
