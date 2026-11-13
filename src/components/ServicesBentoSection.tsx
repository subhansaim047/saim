"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SoapBubbleMaterial, SoapBubbleSurface } from "./reactdrops/soap-bubble";
import { ReactDropButton, LOGO_MATERIAL_DEFAULTS, LOGO_BUBBLE_PALETTE } from "./ReactDropButton";
import { 
  ShoppingBag, 
  Building2, 
  FileCode2, 
  Rocket, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  Copy,
} from "lucide-react";

interface ServiceCard {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  techStack: string[];
  timeline: string;
  ctaText: string;
  ctaHref: string;
  featured?: boolean;
}

const SERVICES_DATA: ServiceCard[] = [
  {
    id: "website-clone",
    badge: "1:1 Exact Recreation",
    title: "Pixel-Perfect Website & Web App Clone ($1,900 Flat)",
    tagline: "Exact 1:1 architectural replication of any website or web application — zero visual difference.",
    description: "We reconstruct any website or platform down to the single pixel in clean Next.js 15 and Tailwind CSS. Modern modular components, fluid 60fps micro-animations, and sub-second edge speeds. Built first with our $0 upfront guarantee.",
    icon: Copy,
    deliverables: [
      "100% 1:1 visual, typographic & responsive match",
      "Next.js 15 & React 19 clean modular components",
      "Full GitHub source code ownership with zero lock-in",
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
    timeline: "Launch in 7–10 days",
    ctaText: "Explore Clone Service ($1,900)",
    ctaHref: "/services/website-clone",
    featured: true,
  },
  {
    id: "ecommerce-headless",
    badge: "Zero Shopify App Fees",
    title: "Custom Next.js Headless eCommerce Store",
    tagline: "Bespoke high-speed stores built without slow Shopify liquid templates or recurring monthly app fees.",
    description: "Escape recurring monthly app subscriptions for filters, currency conversion, and swatches. We build custom Next.js eCommerce stores with instant faceted search, sub-second product pages, and frictionless Stripe checkout.",
    icon: ShoppingBag,
    deliverables: [
      "Sub-second faceted product filtering & swatches",
      "Zero monthly Shopify app subscription bills",
      "Frictionless checkout (Stripe, Apple Pay, PayPal)",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "Stripe API"],
    timeline: "Launch in 7–12 days",
    ctaText: "Explore Headless Store",
    ctaHref: "/services/ecommerce-shopify",
  },
  {
    id: "business-websites",
    badge: "Next.js over WordPress",
    title: "Bespoke Next.js Business Websites",
    tagline: "Modern web architecture engineered to replace vulnerable, bloated WordPress plugins.",
    description: "Replace slow, vulnerable WordPress plugins with custom Next.js web architecture. Guaranteed sub-second load times, 100/100 Core Web Vitals, rich JSON-LD structured schema, and $0 upfront commitment.",
    icon: Building2,
    deliverables: [
      "Custom Next.js architecture (zero plugin bloat)",
      "High-intent lead capture & WhatsApp routing",
      "Full on-page SEO, rich schema & Google indexing",
    ],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript"],
    timeline: "Launch in 5–10 days",
    ctaText: "Explore Next.js Websites",
    ctaHref: "/services/business-websites",
  },
  {
    id: "takeaway-web-system",
    badge: "0% Commission Direct",
    title: "Takeaway & Restaurant Web System (£250 Fixed)",
    tagline: "Escape 30%+ Just Eat & Uber Eats commissions with Natasha's Law allergen filters.",
    description: "Bespoke direct-ordering website designed for UK takeaways and restaurants. Built-in interactive 14-allergen filter matrix compliant with Natasha's Law, direct WhatsApp kitchen order dispatch, and printable table QR codes.",
    icon: Rocket,
    deliverables: [
      "Zero monthly commission fees (keep 100% revenue)",
      "Interactive 14-allergen filter (Natasha's Law)",
      "Instant WhatsApp kitchen order routing & QR codes",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "WhatsApp API", "Local SEO"],
    timeline: "Launch in 3–5 days",
    ctaText: "View Takeaway System (£250)",
    ctaHref: "/services/takeaway-web-design",
  },
  {
    id: "landing-pages-cro",
    badge: "3x Higher Conversion",
    title: "High-Converting Next.js Landing Pages (£250 Fixed)",
    tagline: "Conversion-engineered 1-page engines designed specifically for paid ads (Google, Meta, TikTok).",
    description: "Stop wasting ad spend on slow, distracted homepages. Our hyper-focused Next.js landing pages load in under 400ms, feature psychological conversion copywriting, and route leads directly to your WhatsApp.",
    icon: Gauge,
    deliverables: [
      "Sub-400ms static load speed lowering ad CPC",
      "Direct WhatsApp lead routing & CRM alerts",
      "Pre-configured Meta Pixel & GA4 conversion tracking",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Meta Pixel"],
    timeline: "Launch in 3–5 days",
    ctaText: "Explore Landing Pages (£250)",
    ctaHref: "/services/landing-pages-cro",
  },
  {
    id: "website-redesign",
    badge: "Legacy Modernization",
    title: "Website Redesign & Modernization",
    tagline: "Transform outdated websites into sleek, high-performing Next.js flagships with 100% SEO preservation.",
    description: "Modernize outdated visual brand identity and eliminate slow loading times without losing your hard-earned Google search rankings. We map all 301 redirects and migrate your content cleanly with $0 upfront commitment.",
    icon: FileCode2,
    deliverables: [
      "Complete UI/UX visual modernization",
      "100% Google SEO & backlink preservation map",
      "Migrate away from slow WordPress/Wix to Next.js",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "Redirect Map"],
    timeline: "Launch in 5–10 days",
    ctaText: "Plan Website Redesign",
    ctaHref: "/services/website-redesign",
  },
];

export const ServicesBentoSection = () => {
  return (
    <SoapBubbleMaterial {...LOGO_MATERIAL_DEFAULTS}>
      <section id="services" className="relative w-full bg-white py-16 sm:py-24 md:py-28 border-t border-[#020612]/[0.07] overflow-hidden">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <SoapBubbleSurface
              as="div"
              interactive={0.2}
              radius={9999}
              className="saim-bubble-pill inline-flex items-center gap-2 px-3.5 py-1.5 mb-4 border border-[#2F6CE1]/20 bg-[#EFF5FF]"
            >
              <span className="section-dot" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#020612]">
                Full-Stack Digital Engineering
              </span>
            </SoapBubbleSurface>

          <h2
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#020612] mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Web development services <br />
            <span className="text-[#2F6CE1]">engineered for commercial growth.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#020612]/70 leading-relaxed font-normal max-w-2xl mx-auto">
            From bespoke corporate websites and high-volume e-commerce stores to exact 1:1 pixel-perfect platforms and performance overhauls. 100% source code ownership. Zero monthly retainers.
          </p>
        </div>

        {/* 6-Card Compact Responsive Grid — Entire Box Clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <Link
                  href={service.ctaHref}
                  className={`group relative flex flex-col justify-between h-full rounded-2xl border p-5 sm:p-6 transition-all duration-300 cursor-pointer hover:-translate-y-1 block ${
                    service.featured
                      ? "bg-[#EFF5FF] border-[#2F6CE1]/45 hover:border-[#2F6CE1] shadow-[0_14px_40px_-18px_rgba(47,108,225,0.22)]"
                      : "bg-[#F8FAFC] hover:bg-white border-[#020612]/[0.08] hover:border-[#2F6CE1]/35 shadow-[0_10px_30px_-18px_rgba(2,6,18,0.08)]"
                  }`}
                >
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Top Header: Badge + Timeline */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#020612]/[0.08] text-[#020612]/85 text-[10px] font-mono font-semibold uppercase tracking-wider">
                          {service.featured && <span className="w-1.5 h-1.5 rounded-full bg-[#2F6CE1] animate-pulse" />}
                          <span>{service.badge}</span>
                        </div>
                        <span className="text-[10px] font-mono font-medium text-[#020612]/55 tracking-wide">
                          {service.timeline}
                        </span>
                      </div>

                      {/* Icon + Title */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#020612]/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#EFF5FF] group-hover:border-[#2F6CE1]/45 transition-all duration-300 shrink-0 mt-0.5 shadow-sm">
                          <Icon className="w-5 h-5 text-[#2F6CE1]" />
                        </div>
                        <div>
                          <h3
                            className="font-heading text-[#020612] text-base sm:text-lg font-bold tracking-tight leading-snug"
                            style={{ letterSpacing: "-0.02em" }}
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-[13px] text-[#020612]/70 font-normal leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Key Deliverables — Compact */}
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-[#020612]/[0.07]">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#020612]/80 font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2F6CE1] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Tech Stack Chips & ReactDrops Action Bar */}
                    <div className="pt-3 border-t border-[#020612]/[0.08] mt-auto">
                      <div className="flex flex-wrap gap-1 mb-3.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-mono font-medium text-[#020612]/70 bg-white border border-[#020612]/[0.08] px-2 py-0.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* ReactDrops Interactive Liquid Action Row */}
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
                        className="saim-reactdrop-glass inline-flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-tight transition-all duration-300 group-hover:!bg-[#2F6CE1] group-hover:!text-white group-hover:!border-[#2F6CE1]"
                      >
                        <span className="relative z-[2]">{service.ctaText}</span>
                        <div className="relative z-[2] flex items-center gap-1">
                          <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </SoapBubbleSurface>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#020612]/[0.08] flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-heading text-[#020612] text-base sm:text-lg font-bold tracking-tight">
              Need a custom architecture or technical consultation?
            </span>
            <span className="text-[#020612]/65 text-xs sm:text-sm font-normal">
              Speak directly with our senior full-stack architect — zero sales pitches, zero account manager markups.
            </span>
          </div>

          <ReactDropButton
            variant="primary"
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20custom%20web%20project%20architecture"
            className="h-[48px] shrink-0"
            innerClassName="px-6 text-xs sm:text-sm font-bold text-white gap-2"
          >
            <span>Direct WhatsApp Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </ReactDropButton>
        </div>
      </div>
    </section>
    </SoapBubbleMaterial>
  );
};