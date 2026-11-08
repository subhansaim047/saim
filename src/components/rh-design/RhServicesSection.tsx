"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
    title: "Pixel-Perfect Website & Web App Clone",
    priceTag: "Flat $1,900 USD",
    tagline: "Exact 1:1 architectural replication of any digital experience.",
    description: "We reconstruct any website or web application down to the single pixel in clean Next.js 15 and Tailwind CSS. Silky 60fps micro-animations, ultra-responsive layouts, and zero visual discrepancy. Backed by our $0 upfront guarantee.",
    deliverables: ["100% 1:1 Visual & Layout Match", "Clean Next.js 15 Component Tree", "Full Source Code Ownership"],
    href: "/services/website-clone"
  },
  {
    number: "02",
    title: "Custom Next.js Headless eCommerce Store",
    priceTag: "From £750",
    tagline: "Zero monthly Shopify app subscription bills ($30–$300/mo).",
    description: "Escape recurring monthly app charges for basic product swatches, filters, and currencies. We engineer bespoke Next.js storefronts with instant faceted search, sub-second product pages, and one-click Stripe/PayPal checkout.",
    deliverables: ["Instant Faceted Filtering", "Zero App Subscription Fees", "Frictionless Stripe Checkout"],
    href: "/services/ecommerce-shopify"
  },
  {
    number: "03",
    title: "Bespoke Next.js Business Websites",
    priceTag: "From £450",
    tagline: "Modern web architecture engineered to replace bloated WordPress plugins.",
    description: "Replace vulnerable PHP plugins with custom Next.js web architecture. Guaranteed sub-500ms load times, 100/100 Core Web Vitals, rich JSON-LD schema for Google indexing, and zero monthly retainers.",
    deliverables: ["Sub-500ms Edge CDN Delivery", "100/100 Core Web Vitals", "Structured SEO Schema"],
    href: "/services/website-development"
  },
  {
    number: "04",
    title: "Takeaway & Restaurant Web System",
    priceTag: "Fixed £250",
    tagline: "Escape 30%+ Just Eat & Uber Eats commissions with Natasha's Law compliance.",
    description: "Bespoke direct-ordering website designed for UK takeaways and restaurants. Built-in interactive 14-allergen filter matrix compliant with Natasha's Law, direct WhatsApp kitchen order dispatch, and printable table QR codes.",
    deliverables: ["0% Commission (Keep 100% Profit)", "Interactive 14-Allergen Filter", "WhatsApp Kitchen Order Dispatch"],
    href: "/services/takeaway-web-design"
  },
  {
    number: "05",
    title: "High-Converting Next.js Landing Pages",
    priceTag: "Fixed £250",
    tagline: "Sub-400ms conversion engines engineered specifically for paid ad traffic.",
    description: "Stop wasting ad spend on slow, distracted homepages. Our hyper-focused Next.js landing pages load in under 400ms, feature psychological conversion copywriting, and route leads directly to your WhatsApp.",
    deliverables: ["Sub-400ms Mobile Ad Landing Speed", "Zero Exit Leaks Architecture", "Meta Pixel & GA4 Pre-Configured"],
    href: "/services/landing-pages-cro"
  },
  {
    number: "06",
    title: "Website Speed Optimization & Modernization",
    priceTag: "From £199",
    tagline: "Guaranteed 95+ Google PageSpeed score or pay nothing.",
    description: "Sluggish websites kill conversion rates and Google rankings. We permanently resolve LCP, INP, and CLS bottlenecks to guarantee a 95+ score. Pay only after verified performance improvement.",
    deliverables: ["Core Web Vitals Pass Guaranteed", "Zero Collateral Loss Guarantee", "Before & After Verified Audit"],
    href: "/services/website-speed-optimization"
  }
];

export const RhServicesSection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 border-t border-[#2c2c2c] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
              SERVICES
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Full-stack digital engineering <br />
              <span className="text-[#a1a1a1]">under one senior roof.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#a1a1a1] max-w-sm font-light leading-relaxed">
            All services delivered with our $0 upfront guarantee. We engineer the live preview first. Pay only when you approve the build.
          </p>
        </div>

        {/* Stacked Interactive Service Rows */}
        <div className="space-y-4">
          {SERVICES.map((serv, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={serv.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Link
                  href={serv.href}
                  className={`group relative flex flex-col md:flex-row md:items-center justify-between p-6 sm:p-8 rounded-3xl border transition-all duration-300 block ${
                    isHovered
                      ? "bg-[#181818] border-[#3a3a3a] shadow-2xl -translate-y-1"
                      : "bg-[#141414] border-[#242424]"
                  }`}
                >
                  {/* Left: Number + Title + Tagline */}
                  <div className="flex items-start gap-4 sm:gap-6 max-w-2xl">
                    <span className="text-sm font-mono font-bold text-[#b5f900] mt-1 shrink-0">
                      {serv.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1.5">
                        <h3 className="text-lg sm:text-2xl font-medium tracking-tight text-white group-hover:text-white transition-colors">
                          {serv.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#1e1e1e] border border-[#2c2c2c] text-[11px] font-mono text-[#b5f900] font-semibold">
                          {serv.priceTag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#a1a1a1] font-light leading-relaxed mb-3">
                        {serv.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {serv.deliverables.map((del) => (
                          <span
                            key={del}
                            className="inline-flex items-center gap-1.5 text-[11px] text-[#cbcbcb] font-light bg-[#0d0d0d] px-2.5 py-0.5 rounded-md border border-[#242424]"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#b5f900]" />
                            <span>{del}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: CTA Arrow Indicator */}
                  <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#b5f900] transition-colors shrink-0">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">Explore Service</span>
                    <div className="w-9 h-9 rounded-full bg-[#1e1e1e] border border-[#2c2c2c] flex items-center justify-center group-hover:bg-[#b5f900] group-hover:text-black transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};