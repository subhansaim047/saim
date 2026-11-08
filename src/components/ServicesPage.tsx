"use client";

import { SiteFooter } from "./SiteFooter";
import Link from "next/link";
import { useState } from "react";
import { 
  ArrowRight, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Copy, 
  ExternalLink 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceDetail {
  id: string;
  title: string;
  price?: string;
  featured?: boolean;
  dedicatedLink: string;
  badge?: string;
  description: string;
  benefits: string[];
  deliverables: string[];
  timeline: string;
}

const detailedServices: ServiceDetail[] = [
  {
    id: "website-clone",
    title: "Pixel-Perfect Website & Web App Clone",
    price: "Flat $1,900 USD",
    featured: true,
    badge: "1:1 Exact Recreation",
    dedicatedLink: "/services/website-clone",
    description:
      "Exact 1:1 architectural replication of any website or web application down to the single pixel. Reconstructed from scratch in clean Next.js 15 and Tailwind CSS with sub-second speeds, 60fps micro-animations, and our $0 upfront deposit guarantee.",
    benefits: [
      "100% 1:1 pixel-perfect visual, typographic & responsive match",
      "Sub-second Next.js edge performance replacing legacy bloat",
      "$0 Upfront Guarantee: We build first, you inspect, pay only if satisfied",
      "Flat $1,900 USD pricing with zero hourly scope creep",
      "Zero monthly charges or CMS licensing fees",
    ],
    deliverables: [
      "Exact 1:1 Layout, Typography & Color Palette Match",
      "Clean Next.js 15 & React 19 Component Architecture",
      "Tailwind CSS Responsive Utilities for All Devices",
      "Framer Motion Micro-Interactions & Transitions",
      "All Assets Upgraded to Full HD Master Quality",
      "100% GitHub Source Code Ownership",
    ],
    timeline: "7 – 10 Days",
  },
  {
    id: "takeaway-web",
    title: "Takeaway & Restaurant Web System (Commission-Free)",
    price: "Fixed £250",
    featured: true,
    badge: "0% Commission",
    dedicatedLink: "/services/takeaway-web-design",
    description:
      "Bespoke, lightning-fast Next.js direct-ordering website designed for UK takeaways, chip shops, and restaurants. Escape 30%+ Just Eat, Deliveroo, and Uber Eats commissions with an interactive Natasha's Law allergen-filtered menu and instant WhatsApp order routing.",
    benefits: [
      "Zero monthly commission fees (keep 100% of order revenue)",
      "Interactive 14-allergen filter compliant with Natasha's Law",
      "Direct WhatsApp and SMS checkout routing with zero friction",
      "Sub-second load times on 4G/5G mobile devices (100/100 Core Web Vitals)",
      "Google Maps & Local UK SEO setup for 'takeaway near me' searches",
    ],
    deliverables: [
      "Custom Next.js 16 Responsive Ordering Website",
      "Full Digital Menu with Live Allergen Filtering",
      "Direct WhatsApp / Call / Table Order Dispatch",
      "Printable Table QR Codes & Allergen Matrix Export",
      "Domain, SSL, Hosting & Google Business Profile Setup",
      "Full Code Ownership with Zero Monthly Agency Lock-In",
    ],
    timeline: "3 – 5 Days",
  },
  {
    id: "custom-web",
    title: "Bespoke Next.js Website Development (WP Alternative)",
    price: "From £450",
    dedicatedLink: "/services/website-development",
    badge: "No WordPress Bloat",
    description:
      "We do not build with bloated WordPress plugins or outdated PHP. We engineer bespoke Next.js websites that load in under 500ms, rank high on Google, and come with zero monthly retainers or vendor lock-in.",
    benefits: [
      "Custom Next.js codebase built from scratch (no bloated themes)",
      "Unhackable static edge architecture with sub-500ms speed",
      "100/100 Google Core Web Vitals and built-in structured schema",
      "$0 Upfront Guarantee: Review live staging before paying",
      "Full ownership of code, assets, and hosting with zero retainers",
    ],
    deliverables: [
      "Responsive React/Tailwind codebase (up to 12 pages)",
      "Content Architecture & Local SEO Copywriting",
      "Contact & Lead Capture Forms with Instant Alerts",
      "Automated XML Sitemap, Robots.txt & Rich Schema",
      "14–30 Days Dedicated Launch Support",
    ],
    timeline: "5 – 10 Days",
  },
  {
    id: "ecommerce-headless",
    title: "Custom Next.js Headless eCommerce (Shopify Alternative)",
    price: "From £750",
    dedicatedLink: "/services/ecommerce-shopify",
    badge: "Zero App Fees",
    description:
      "Escape sluggish Shopify templates and recurring monthly app fees ($30–$300/mo). We engineer custom Next.js eCommerce storefronts with instant faceted search, frictionless checkout, and bespoke luxury design freedom.",
    benefits: [
      "Zero monthly Shopify app fees for filters, swatches, and currency",
      "Sub-second product browsing that doubles mobile checkout conversions",
      "100% bespoke design freedom aligned with luxury brand standards",
      "Stripe, PayPal, Apple Pay, Google Pay, and Klarna ready",
      "Complete code and customer database ownership",
    ],
    deliverables: [
      "Bespoke Next.js Storefront Design & Catalog",
      "Faceted Filtering & Variant Swatch Architecture",
      "One-Page Mobile Checkout & Cart Drawer",
      "Multi-Currency Dynamic Conversion",
      "Google Shopping Rich Product Schema (JSON-LD)",
    ],
    timeline: "7 – 12 Days",
  },
  {
    id: "landing-page",
    title: "High-Converting Next.js Landing Pages (CRO)",
    price: "Fixed £250",
    dedicatedLink: "/services/landing-pages-cro",
    badge: "3x Higher Conversion",
    description:
      "Engineered specifically for Google Ads, Meta Ads, and TikTok campaign traffic with sub-second speed and psychological conversion copywriting. Zero navigation leaks, direct WhatsApp lead funnels, and our $0 upfront guarantee.",
    benefits: [
      "Optimised for 3x higher ad click-to-lead conversion rate",
      "Sub-400ms mobile load times lowering Google Ads CPC",
      "Direct WhatsApp and lead form alerts delivered in seconds",
      "Meta Pixel, Google Tag Manager & GA4 pre-configured",
      "Zero monthly builder software fees (save £1,000/yr)",
    ],
    deliverables: [
      "1-Page High Converting Layout with Zero Exit Distractions",
      "Mobile-First Responsive Touch Build",
      "Conversion Copywriting & Objection Handling Accordion",
      "Ad Pixels & Event Tracking Verification",
      "$0 Upfront Deposit (Pay When Happy)",
    ],
    timeline: "3 – 5 Days",
  },
  {
    id: "redesign",
    title: "Website Redesign & Modernization",
    price: "From £550",
    dedicatedLink: "/services/website-redesign",
    badge: "Legacy Upgrade",
    description:
      "Transform outdated, slow legacy websites into ultra-fast modern Next.js flagships. We preserve 100% of your existing Google rankings and backlink authority while elevating your brand aesthetic. $0 upfront deposit.",
    benefits: [
      "100% SEO, backlink, and URL ranking preservation guarantee",
      "Eliminate slow loading times and outdated visual branding",
      "Migrate away from fragile WordPress/Wix to Next.js",
      "Strict side-by-side comparison before any payment",
      "Zero monthly agency maintenance retainers",
    ],
    deliverables: [
      "Complete UI/UX Visual Modernization",
      "Comprehensive 301 URL Redirect Mapping",
      "Clean Next.js Rebuild & Asset Optimization",
      "Enhanced JSON-LD Structured Data",
      "Zero Downtime Domain Switchover",
    ],
    timeline: "5 – 10 Days",
  },
  {
    id: "speed-optimization",
    title: "Website Speed & Core Web Vitals Optimization",
    price: "From £199",
    dedicatedLink: "/services/website-speed-optimization",
    badge: "95+ PageSpeed",
    description:
      "Sluggish websites kill conversion rates and harm your Google rankings. We permanently resolve LCP, INP, and CLS bottlenecks to guarantee a 95+ Google PageSpeed score — pay only after verified performance improvement.",
    benefits: [
      "Sub-second mobile load times passing Core Web Vitals",
      "Lower mobile bounce rates and higher conversion rates",
      "Pay Only After Verified Results (Google PageSpeed verified)",
      "Zero collateral damage: all forms, checkouts and trackers intact",
      "One-time architectural fix with zero ongoing fees",
    ],
    deliverables: [
      "Complete Core Web Vitals Diagnostic & Audit",
      "LCP Sub-Second Optimization & Critical CSS Inlining",
      "Zero Cumulative Layout Shift (CLS = 0.00)",
      "Image Conversion to AVIF/WebP Lossless Formats",
      "Before & After Verified Audit Report",
    ],
    timeline: "2 – 4 Days",
  },
  {
    id: "seo-opt",
    title: "Technical & Local SEO Services",
    price: "From £299",
    dedicatedLink: "/services/seo-services",
    badge: "Organic Search",
    description:
      "Dominate organic search with clean semantic HTML5, comprehensive JSON-LD structured schema markup, sub-second edge speeds, and local SEO architecture. No black-hat spam, zero monthly retainers, $0 upfront deposit.",
    benefits: [
      "Higher Google search rankings and rich snippet display",
      "Local SEO dominance for 'near me' Google searches",
      "Complete JSON-LD schema (LocalBusiness, Service, FAQPage)",
      "$0 Upfront Deposit: pay after verified schema implementation",
      "Zero monthly agency retainer contracts",
    ],
    deliverables: [
      "Full Technical Crawl Audit & 404 Elimination",
      "Bespoke Schema.org JSON-LD Markup",
      "Google Business Profile & Local Citation Optimization",
      "Dynamic XML Sitemap & Robots.txt Directives",
      "Google Search Console Verification & Sitemap Submission",
    ],
    timeline: "3 – 5 Days",
  },
];

const serviceFaqs = [
  {
    question: "What is your $0 upfront guarantee?",
    answer:
      "For every service, we build the live staging website or preview first. You test it on your laptop and phone, inspect the speed, design, and forms. If you are 100% thrilled, you purchase the project. If you are not satisfied, you owe us nothing. There is zero financial risk for your business.",
  },
  {
    question: "Are there any monthly charges or recurring retainers?",
    answer:
      "Zero. We do not charge monthly retainers, plugin subscriptions, or maintenance locks. You pay a one-time transparent fee and receive 100% source code ownership. We set up your hosting on Vercel where standard traffic is completely free.",
  },
  {
    question: "Why do you build in Next.js instead of WordPress or Shopify?",
    answer:
      "WordPress relies on fragile PHP plugins that slow down your website and open critical security holes. Shopify charges recurring monthly fees ($30–$300/mo) for basic apps. Next.js produces unhackable, sub-second static edge websites that pass Google Core Web Vitals with 100/100 scores and require zero monthly plugin maintenance.",
  },
  {
    question: "How does the $1,900 Website & App Clone service work?",
    answer:
      "Send us the link of any website or web application you want duplicated. We rebuild it 1:1 down to the pixel in clean Next.js and Tailwind CSS with zero visual discrepancy. Delivered in 7 to 10 days with a $0 upfront deposit.",
  },
  {
    question: "Do I get full ownership of the code and design?",
    answer:
      "Yes! You receive full GitHub repository access, code ownership, and all assets upon completion. You are never locked into our agency.",
  },
];

export const ServicesPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-12 py-12 select-none"
      style={{
        fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-primary font-semibold" aria-current="page">
              Services
            </li>
          </ol>
        </nav>

        {/* TRUST BANNER */}
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-10 flex flex-wrap items-center justify-between gap-3 text-xs shadow-md">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-medium text-white">Our Agency Registered in UK &amp; Based in Pakistan</span>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <span className="text-[#FF4A1C] font-semibold">$0 Upfront Deposit</span>
            <span>•</span>
            <span className="text-white font-medium">Zero Monthly Charges</span>
          </div>
        </div>

        {/* 1. HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-primary text-xs font-mono font-medium uppercase mb-4">
            NEXT.JS SPECIALIZED SERVICES
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4">
            Next.js Web Engineering Services UK
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Saim Dev delivers fixed-price Next.js web development with sub-second speeds, 95+ Core Web Vitals, and an unbeatable <strong className="text-white font-medium">$0 Upfront Guarantee</strong>. We engineer bespoke Next.js websites, custom eCommerce flagships, and pixel-perfect clones with zero monthly retainers.
          </p>
        </div>

        {/* 2. SERVICES LIST */}
        <div className="space-y-6 sm:space-y-8 mb-20">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              whileHover={{ y: -3, borderColor: "rgba(255, 74, 28, 0.4)", transition: { duration: 0.2 } }}
              className="liquid-glass rounded-3xl p-6 sm:p-9 border border-white/15 transition-all group shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white">
                      {service.title}
                    </h2>
                    {service.price && (
                      <span className="px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
                        {service.price}
                      </span>
                    )}
                    {service.badge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-mono uppercase font-bold tracking-wider">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={service.dedicatedLink}
                      className="inline-flex items-center gap-1.5 text-xs text-[#FF4A1C] hover:text-white font-semibold underline underline-offset-4 transition-colors"
                    >
                      <span>Explore Full 13-Section Service Page &amp; Live Demos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-primary bg-white/5 border border-white/10 px-3.5 py-2 rounded-full shrink-0 self-start md:self-auto">
                  <Clock className="w-4 h-4" />
                  <span>Timeline: {service.timeline}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm leading-relaxed font-light">
                {/* Benefits */}
                <div>
                  <h3 className="text-white font-medium text-sm sm:text-base mb-3 text-primary">Key Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-white font-medium text-sm sm:text-base mb-3 text-primary">Deliverables</h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-white/50">$0 Upfront Deposit • Pay Only If Satisfied</span>
                <Link
                  href={service.dedicatedLink}
                  className="bg-white hover:bg-neutral-100 text-black font-semibold text-xs px-5 py-2.5 rounded-full transition-all inline-flex items-center gap-2 active:scale-95 shadow-md"
                >
                  <span>View Details &amp; Pricing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. FAQ SNIPPET */}
        <div className="mb-20 liquid-glass rounded-3xl p-6 sm:p-8 border border-white/15 shadow-xl">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <HelpCircle className="w-5 h-5" />
            <h3 className="text-white font-medium text-lg">Services FAQ</h3>
          </div>
          <div className="space-y-3">
            {serviceFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="bg-white/5 rounded-2xl border border-white/10 p-5 cursor-pointer hover:border-white/20 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-white text-sm font-medium">{faq.question}</h4>
                    <ChevronDown className={`w-4 h-4 text-white/60 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-white/60 text-xs mt-3 font-light leading-relaxed border-t border-white/5 pt-3"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. FINAL CTA */}
        <div className="text-center bg-white/5 rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl">
          <span className="text-[#FF4A1C] text-xs font-mono uppercase tracking-widest block mb-2">Zero Risk • 100% Satisfaction</span>
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
            Ready to Build Your Website With $0 Upfront?
          </h3>
          <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Message Saim Dev on WhatsApp. Share your project requirements or reference links; we engineer a live preview first. Pay only when you are 100% satisfied.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20starting%20a%20project%20with%20$0%20upfront"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF4A1C] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#e03d12] transition-all text-xs cursor-pointer shadow-xl active:scale-95"
            >
              <span>Start on WhatsApp ($0 Upfront)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all text-xs cursor-pointer border border-white/15"
            >
              <span>Discuss Your Scope</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter theme="dark" />
    </div>
  );
};