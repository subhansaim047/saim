"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Building2, 
  FileCode2, 
  Rocket, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
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
    tagline: "Duniya ki koi bhi website ya web app clone karwayein — 18/19 ka bhi farq nahi hoga.",
    description: "We reconstruct any website or application down to the exact pixel in clean Next.js 15 and Tailwind CSS. Modern component architecture, silky 60fps micro-animations, full HD asset upgrades, and sub-second load times. Built first with our $0 upfront guarantee.",
    icon: Sparkles,
    deliverables: [
      "100% 1:1 pixel-perfect visual & responsive match",
      "Next.js 15 & React 19 clean component architecture",
      "Tailwind CSS responsive design for all devices",
      "Full GitHub source code ownership with zero difference",
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    timeline: "Launch in 7–10 days",
    ctaText: "Explore Clone Service ($1,900)",
    ctaHref: "/services/website-clone",
    featured: true,
  },
  {
    id: "ecommerce-headless",
    badge: "Zero Shopify App Fees",
    title: "Custom Next.js Headless eCommerce Store",
    tagline: "Hum Shopify ke slow templates ya monthly app fees ($30–$300/mo) ke bajaye custom Next.js eCommerce banate hain.",
    description: "Escape recurring monthly app subscriptions for filters, currency conversion, and swatches. We build custom Next.js eCommerce stores with instant faceted search, sub-second product detail pages, and one-click Stripe/PayPal checkout with zero monthly app fees.",
    icon: ShoppingBag,
    deliverables: [
      "Sub-second faceted product filtering & swatches",
      "Zero monthly Shopify app subscription fees",
      "Frictionless checkout (Stripe, Apple Pay, PayPal)",
      "100% bespoke luxury UI/UX design freedom",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "Stripe API", "Framer Motion"],
    timeline: "Launch in 7–12 days",
    ctaText: "Explore Headless Store",
    ctaHref: "/services/ecommerce-shopify",
  },
  {
    id: "business-websites",
    badge: "Next.js over WordPress",
    title: "Bespoke Next.js Business Websites",
    tagline: "Hum WordPress par kaam nahi karte, hum Next.js par ultra-fast, unhackable websites banate hain.",
    description: "Replace slow, vulnerable WordPress plugins with custom Next.js web architecture. Guaranteed sub-second load times, 100/100 Core Web Vitals, rich JSON-LD structured schema, and $0 upfront commitment.",
    icon: Building2,
    deliverables: [
      "Custom Next.js architecture (zero WordPress plugin bloat)",
      "High-intent lead capture forms & WhatsApp routing",
      "Full on-page SEO, rich schema & Google indexing",
      "100% mobile-responsive fluid layouts",
    ],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript", "Framer Motion"],
    timeline: "Launch in 5–10 days",
    ctaText: "Explore Next.js Websites",
    ctaHref: "/services/business-websites",
  },
  {
    id: "takeaway-web-system",
    badge: "0% Commission Direct",
    title: "Takeaway & Restaurant Web System (£250 Fixed)",
    tagline: "Escape 30%+ Just Eat & Uber Eats commissions with Natasha's Law allergen filters.",
    description: "Bespoke direct-ordering website designed for UK takeaways and restaurants. Built-in interactive 14-allergen filter matrix compliant with Natasha's Law, direct WhatsApp kitchen order dispatch, and printable table QR codes. One-time £250 fixed fee with $0 upfront deposit.",
    icon: Rocket,
    deliverables: [
      "Zero monthly commission fees (keep 100% of revenue)",
      "Interactive 14-allergen filter (Natasha's Law compliant)",
      "Instant WhatsApp kitchen order routing",
      "Printable high-resolution table QR codes",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "WhatsApp API", "Local SEO Schema"],
    timeline: "Launch in 3–5 days",
    ctaText: "View Takeaway System (£250)",
    ctaHref: "/services/takeaway-web-design",
  },
  {
    id: "landing-pages-cro",
    badge: "3x Higher Conversion",
    title: "High-Converting Next.js Landing Pages (£250 Fixed)",
    tagline: "Conversion-engineered 1-page engines designed specifically for paid ads (Google, Meta, TikTok).",
    description: "Stop wasting ad spend on slow, distracted homepages. Our hyper-focused Next.js landing pages load in under 400ms, feature psychological conversion copywriting, and route leads directly to your WhatsApp. One-time £250 fixed fee with $0 upfront deposit.",
    icon: Gauge,
    deliverables: [
      "Sub-400ms static load speed lowering ad CPC",
      "Direct WhatsApp lead routing & CRM alerts",
      "Meta Pixel & Google Analytics 4 pre-configured",
      "Zero monthly landing page builder software fees",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Meta Pixel"],
    timeline: "Launch in 3–5 days",
    ctaText: "Explore Landing Pages (£250)",
    ctaHref: "/services/landing-pages-cro",
  },
  {
    id: "website-redesign",
    badge: "Legacy Upgrade",
    title: "Website Redesign & Modernization",
    tagline: "Transform outdated websites into sleek, high-performing Next.js flagships with 100% SEO preservation.",
    description: "Modernize outdated visual brand identity and eliminate slow loading times without losing your hard-earned Google search rankings. We map all 301 redirects and migrate your content cleanly with $0 upfront commitment.",
    icon: FileCode2,
    deliverables: [
      "Complete UI/UX visual modernization",
      "100% Google SEO & backlink preservation map",
      "Migrate away from slow WordPress/Wix to Next.js",
      "Side-by-side review before any payment",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "301 Redirect Engine"],
    timeline: "Launch in 5–10 days",
    ctaText: "Plan Website Redesign",
    ctaHref: "/services/website-redesign",
  },
];

export const ServicesBentoSection = () => {
  return (
    <section id="services" className="relative w-full bg-transparent py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF4A1C]/[0.03] rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
            <span className="section-dot" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
              Full-Stack Digital Engineering
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6"
            style={{ letterSpacing: "-0.04em" }}
          >
            Web development services <br />
            <span className="text-white/70">engineered for commercial growth.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/65 leading-relaxed font-light">
            From bespoke corporate websites and high-volume e-commerce stores to custom SaaS web applications and performance overhauls. We build fast, modern, and reliable digital systems with 100% code ownership.
          </p>
        </div>

        {/* 6-Card Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col justify-between rounded-3xl bg-[#121212] border p-6 sm:p-8 transition-all duration-300 group shadow-2xl hover:-translate-y-1 ${
                  service.featured
                    ? "border-[#FF4A1C]/50 hover:border-[#FF4A1C] shadow-[0_12px_48px_rgba(255,74,28,0.12)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Ambient Subtle Accent Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-125 ${
                    service.featured ? "bg-[#FF4A1C]/15" : "bg-white/[0.03]"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Top Header: Badge + Timeline */}
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 text-[11px] font-mono uppercase tracking-wider">
                        {service.featured && <Sparkles className="w-3 h-3 text-[#FF4A1C]" />}
                        <span>{service.badge}</span>
                      </div>
                      <span className="text-[11px] font-mono text-white/70 tracking-wide">
                        {service.timeline}
                      </span>
                    </div>

                    {/* Icon + Title */}
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-[#FF4A1C]/10 group-hover:border-[#FF4A1C]/30 transition-all duration-300 mb-5">
                      <Icon className="w-6 h-6 text-[#FF4A1C]" />
                    </div>

                    <h3
                      className="text-white text-xl sm:text-2xl font-medium tracking-tight mb-3 leading-snug group-hover:text-white transition-colors"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 block mb-2">
                        Key Deliverables
                      </span>
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs text-white/75 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4A1C] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tech Stack Chips & Action Link */}
                  <div className="pt-6 border-t border-white/10 mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-white/75 bg-white/[0.03] border border-white/5 px-2.5 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={service.ctaHref}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-[#FF4A1C] hover:text-white text-white/90 text-xs font-medium tracking-tight border border-white/10 hover:border-transparent transition-all duration-300 group/btn"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-white text-base sm:text-lg font-medium tracking-tight">
              Need a custom architecture or technical consultation?
            </span>
            <span className="text-white/60 text-xs sm:text-sm font-light">
              Speak directly with our senior full-stack architect — zero sales pitches, zero account manager markups.
            </span>
          </div>

          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20custom%20web%20project%20architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm tracking-tight shadow-[0_4px_24px_rgba(255,255,255,0.15)] transition-all shrink-0 active:scale-95"
          >
            <span>Direct WhatsApp Consultation</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </div>
    </section>
  );
};
