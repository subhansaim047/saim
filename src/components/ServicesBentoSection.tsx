"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ViewportMount } from "./reactdrops/ViewportMount";
import { SoapBubbleMaterial, SoapBubbleSurface } from "./reactdrops/soap-bubble";

const LazyChromaticSurface = dynamic(
  () => import("./reactdrops/chromatic-button/chromatic-surface").then((m) => m.ChromaticSurface),
  { ssr: false }
);
import { 
  ShoppingBag, 
  Building2, 
  FileCode2, 
  Rocket, 
  Gauge, 
  ArrowRight, 
  CheckCircle2, 
  Copy,
  ArrowUpRight
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
    <SoapBubbleMaterial
      surface="bubble-liquid"
      environment="studio"
      liquidLens={false}
      iridescence={1.45}
      clearCenter={0.62}
      filmScale={5}
      bevel={12}
      tint="rgba(16, 16, 22, 0.44)"
      soapColor="rgba(255, 74, 28, 0.1)"
      wobble={0.38}
    >
      <section id="services" className="relative w-full bg-transparent py-16 sm:py-24 md:py-28 border-t border-white/[0.06] overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF4A1C]/[0.025] rounded-full blur-[160px] pointer-events-none z-0" />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <SoapBubbleSurface
              as="div"
              interactive={0.2}
              radius={9999}
              className="saim-bubble-pill inline-flex items-center gap-2 px-3.5 py-1.5 mb-4"
            >
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/90">
                Full-Stack Digital Engineering
              </span>
            </SoapBubbleSurface>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.035em" }}
          >
            Web development services <br />
            <span className="text-white/65">engineered for commercial growth.</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/60 leading-relaxed font-light max-w-2xl mx-auto">
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
                  className={`group relative flex flex-col justify-between h-full rounded-2xl bg-[#121212] border p-5 sm:p-6 transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1 block ${
                    service.featured
                      ? "border-[#FF4A1C]/50 hover:border-[#FF4A1C] shadow-[0_8px_36px_rgba(255,74,28,0.12)]"
                      : "border-white/10 hover:border-white/25 hover:bg-[#151515]"
                  }`}
                >
                  {/* Subtle Ambient Accent Glow */}
                  <div
                    className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125 ${
                      service.featured ? "bg-[#FF4A1C]/15" : "bg-white/[0.02]"
                    }`}
                  />

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Top Header: Badge + Timeline */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80 text-[10px] font-mono uppercase tracking-wider">
                          {service.featured && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4A1C] animate-pulse" />}
                          <span>{service.badge}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/50 tracking-wide">
                          {service.timeline}
                        </span>
                      </div>

                      {/* Icon + Title */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-105 group-hover:bg-[#FF4A1C]/15 group-hover:border-[#FF4A1C]/40 transition-all duration-300 shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-[#FF4A1C]" />
                        </div>
                        <div>
                          <h3
                            className="text-white text-base sm:text-lg font-medium tracking-tight leading-snug group-hover:text-white transition-colors"
                            style={{ letterSpacing: "-0.02em" }}
                          >
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs text-white/60 font-light leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Key Deliverables — Compact */}
                      <div className="space-y-1.5 mb-5 pt-3 border-t border-white/5">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-[11px] sm:text-xs text-white/70 font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4A1C] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Tech Stack Chips & Action Link Bar */}
                    <div className="pt-3 border-t border-white/10 mt-auto">
                      <div className="flex flex-wrap gap-1 mb-3.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-mono text-white/65 bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Interactive Action Row */}
                      <div className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-white/[0.04] group-hover:bg-[#FF4A1C] group-hover:text-white text-white/80 text-xs font-medium tracking-tight border border-white/10 group-hover:border-transparent transition-all duration-300">
                        <span>{service.ctaText}</span>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-white/[0.02] via-white/[0.04] to-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-white text-sm sm:text-base font-medium tracking-tight">
              Need a custom architecture or technical consultation?
            </span>
            <span className="text-white/55 text-xs font-light">
              Speak directly with our senior full-stack architect — zero sales pitches, zero account manager markups.
            </span>
          </div>

          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20custom%20web%20project%20architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="chromatic-button saim-hero-chromatic rounded-full shadow-[0_10px_30px_rgba(255,74,28,0.22)] shrink-0"
          >
            <ViewportMount unmountWhenFar rootMargin="0px 0px" className="absolute inset-0 pointer-events-none">
              <LazyChromaticSurface
                color="#FF4A1C"
                color2="#ff8252"
                color3="#8c1802"
                colorMode="gradient-3"
                hoverEffect="spotlight"
                borderRadius={50}
                speed={0.85}
                feather={92}
                intensity={1.32}
                grain={0.075}
              />
            </ViewportMount>
            <span className="chromatic-button-content text-xs sm:text-sm font-semibold text-white">
              <span>Direct WhatsApp Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
    </SoapBubbleMaterial>
  );
};