"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, ShieldCheck } from "lucide-react";

type Currency = "GBP" | "EUR" | "USD";

interface PricePlan {
  id: string;
  name: string;
  badge?: string;
  featured?: boolean;
  tagline: string;
  prices: {
    GBP: string;
    EUR: string;
    USD: string;
  };
  timeline: string;
  features: string[];
}

const PLANS: PricePlan[] = [
  {
    id: "landing-takeaway",
    name: "Takeaway / CRO Landing Page",
    tagline: "High-converting single-page engine or takeaway ordering system.",
    prices: {
      GBP: "£250",
      EUR: "€295",
      USD: "$320"
    },
    timeline: "3 – 5 Days Delivery",
    features: [
      "1-Page High-Converting Next.js Engine",
      "Interactive Natasha's Law Allergen Matrix (Takeaway)",
      "Instant WhatsApp Kitchen Order / Lead Dispatch",
      "Sub-400ms Static Load Speed",
      "$0 Upfront Deposit • Pay When Happy",
      "100% Full Source Code Ownership"
    ]
  },
  {
    id: "business-website",
    name: "Bespoke Business Website",
    badge: "Most Popular",
    featured: true,
    tagline: "Modern Next.js web architecture engineered to replace WordPress.",
    prices: {
      GBP: "£450",
      EUR: "€530",
      USD: "$580"
    },
    timeline: "5 – 10 Days Delivery",
    features: [
      "Up to 10 Custom Next.js Pages",
      "Zero WordPress Plugins or Security Bloat",
      "100/100 Core Web Vitals Pass Guaranteed",
      "Full On-Page SEO & Structured JSON-LD Schema",
      "High-Intent Lead Capture & WhatsApp Alerts",
      "$0 Upfront Deposit • 14 Days Warranty"
    ]
  },
  {
    id: "headless-ecommerce",
    name: "Custom Headless eCommerce",
    tagline: "Escape monthly Shopify app fees with bespoke Next.js store.",
    prices: {
      GBP: "£750",
      EUR: "€880",
      USD: "$980"
    },
    timeline: "7 – 12 Days Delivery",
    features: [
      "Zero Monthly Shopify App Subscription Bills",
      "Instant Sub-Second Faceted Filtering & Search",
      "One-Page Cart Drawer & Stripe/PayPal Checkout",
      "Multi-Currency Dynamic Conversion",
      "Google Shopping Rich Product Data Schema",
      "$0 Upfront Deposit • 30 Days Dedicated Support"
    ]
  },
  {
    id: "website-clone",
    name: "Pixel-Perfect 1:1 Clone",
    badge: "Specialized Service",
    tagline: "Exact 1:1 recreation of any website or web application down to the single pixel.",
    prices: {
      GBP: "£1,490",
      EUR: "€1,750",
      USD: "$1,900"
    },
    timeline: "7 – 10 Days Delivery",
    features: [
      "100% 1:1 Visual, Typographic & Layout Match",
      "Clean Next.js 15 & React 19 Component Tree",
      "Framer Motion 60fps Micro-Interactions",
      "All Assets Upgraded to Retina Master HD",
      "Full GitHub Source Code Handover",
      "$0 Upfront Deposit (Pay Only If Thrilled)"
    ]
  }
];

export const RhPricingSection = () => {
  const [currency, setCurrency] = useState<Currency>("GBP");

  return (
    <section id="pricing" className="py-20 sm:py-28 border-t border-[#27272a] bg-[#09090b] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        {/* Header with Currency Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
              PRICING
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Transparent pricing. <br />
              <span className="text-[#a1a1aa]">No surprises, no retainers.</span>
            </h2>
          </div>

          {/* Currency Pill Selector */}
          <div className="flex items-center p-1 rounded-full bg-[#111113] border border-[#27272a]">
            <button
              onClick={() => setCurrency("GBP")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                currency === "GBP" ? "bg-white text-black font-bold shadow-md" : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              🇬🇧 £ GBP
            </button>
            <button
              onClick={() => setCurrency("EUR")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                currency === "EUR" ? "bg-white text-black font-bold shadow-md" : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              🇪🇺 € EUR
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                currency === "USD" ? "bg-white text-black font-bold shadow-md" : "text-[#a1a1aa] hover:text-white"
              }`}
            >
              🌐 $ USD
            </button>
          </div>
        </div>

        {/* 4-Card Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((plan, idx) => {
            const currentPrice = plan.prices[currency];
            const whatsappText = `Hi Saim, I'd like to get started with ${plan.name} (${currentPrice}) with the $0 upfront deposit offer.`;
            const waHref = `https://wa.me/923196526604?text=${encodeURIComponent(whatsappText)}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between relative transition-all shadow-xl ${
                  plan.featured
                    ? "bg-[#18181b] border-[#b5f900]/50 shadow-[0_12px_48px_rgba(181,249,0,0.1)]"
                    : "bg-[#111113] border-[#27272a] hover:border-[#3f3f46]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#b5f900] text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-medium tracking-tight text-white mb-1.5 mt-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#a1a1aa] font-light leading-relaxed mb-6 min-h-[36px]">
                    {plan.tagline}
                  </p>

                  <div className="mb-6">
                    <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight">
                      {currentPrice}
                    </div>
                    <span className="text-[11px] font-mono text-[#a1a1aa] block mt-1">
                      One-off fee • {plan.timeline}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 pt-4 border-t border-[#27272a]">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-[#d4d4d8] font-light leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#b5f900] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-full text-xs font-semibold text-center transition-all inline-flex items-center justify-center gap-1.5 active:scale-95 ${
                    plan.featured
                      ? "bg-[#b5f900] hover:bg-[#a6e600] text-black shadow-lg"
                      : "bg-white hover:bg-neutral-100 text-black shadow-md"
                  }`}
                >
                  <span>Start ($0 Upfront)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111113] border border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#d4d4d8]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#b5f900] shrink-0" />
            <div>
              <span className="font-semibold text-white">Our 100% Risk-Free Winning Guarantee: </span>
              <span>We engineer your live preview first. Inspect it on your devices. Pay only if you are 100% delighted. Zero monthly retainers.</span>
            </div>
          </div>
          <span className="font-mono text-[#b5f900] shrink-0 font-bold uppercase text-[11px]">
            Zero Financial Risk
          </span>
        </div>
      </div>
    </section>
  );
};