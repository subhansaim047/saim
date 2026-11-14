"use client";

import { SiteFooter } from "./SiteFooter";
import { RhHeader } from "./rh/RhHeader";
import {
  RhHeroPinned,
  RhProblemSolutionDeck,
  RhProcessCarousel,
  RhSystemRows,
} from "./rh/RhModernSections";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

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
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(
    detailedServices[0]?.id ?? null
  );

  return (
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      {/* 1. EXACT rh.design PAGE-OPEN HERO (3D Wireframe Video + Laser-Draw Strip + Curtain Parallax) */}
      <RhHeroPinned
        badge="Next.js & Full-Stack Engineering Studio"
        title={
          <>
            Next.js Web Engineering{" "}
            <span className="text-[#939393]">Services UK</span>
          </>
        }
        subtitle="Fixed-price Next.js web engineering with sub-second speeds, 95+ Core Web Vitals, and our $0 Upfront Prototype Guarantee. Custom websites, Shopify headless builds, and web apps with 100% source code ownership and zero monthly retainers."
        primaryCta={{ label: "Start your project ($0 Upfront)", href: "/contact" }}
        secondaryCta={{ label: "Project Cost Calculator", href: "/overview" }}
        videoType="cube"
        stripLabel="Engineered for speed & ownership"
      />

      {/* 2. SCROLLYTELLING BOTTLENECK DECK + GROWING RETENTION BAR CHART */}
      <RhProblemSolutionDeck
        overline="WHY TEAMS SWITCH TO SAIM DEV"
        titleBefore="Websites that convert instead of leaving visitors"
        titleStrike="waiting"
        titleOwned="converted."
        subtitle="Slow templates, monthly agency retainers, and marketplace commissions quietly tax every visitor you earn. We replace bloated stacks with custom React & Next.js edge code you own outright."
        solutionTitle="One Fixed Fee. Sub-Second Edge Performance. Full Repo Ownership."
        solutionDesc="We build your live staging prototype before you spend a penny. Test responsiveness, speed, and booking flows across devices—then unlock 100% of the GitHub code upon approval."
      />

      {/* 3. INTERACTIVE SVG LINE-DRAW SERVICE CAPABILITIES MATRIX */}
      <RhSystemRows
        overline="ENGINEERING CAPABILITIES"
        title="What we engineer"
        titleMuted="for ambitious brands"
        subtitle="Hover any row to trace its architecture system or click through to explore deliverables, benchmarks, and fixed pricing."
        rows={detailedServices.map((svc, idx) => ({
          num: String(idx + 1).padStart(2, "0"),
          title: svc.title,
          description: svc.description,
          tags: [svc.price || "Custom Fixed", `Timeline ${svc.timeline}`, svc.badge || "Fixed Scope"],
          href: svc.dedicatedLink,
        }))}
      />

      {/* 4. EXPANDABLE FULL SCOPE BREAKDOWN + UK REGIONAL HUBS */}
      <section className="bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-24 border-t border-[#E6E6E6]">
        <div className="max-w-[1168px] mx-auto px-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#595959] mb-3">
                DETAILED DELIVERABLES INSPECTOR
              </div>
              <h2 className="text-[clamp(30px,4vw,46px)] font-medium leading-[1.08] tracking-[-0.03em]">
                <span className="text-[#0D0D0D]">Inspect every deliverable </span>
                <span className="text-[#939393]">before kickoff</span>
              </h2>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-[#0D0D0D] hover:opacity-70 transition-opacity"
            >
              <span>Compare fixed packages</span>
              <span>→</span>
            </Link>
          </div>

          <div className="space-y-4">
            {detailedServices.map((service, index) => {
              const isExpanded = expandedServiceId === service.id;
              return (
                <div
                  key={service.id}
                  className="rh-edge-orbit-card bg-white border border-[#E6E6E6] hover:border-[#0D0D0D] transition-colors"
                >
                  <div className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-2">
                        <span className="text-[12px] font-mono-tech text-[#939393]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[20px] sm:text-[24px] font-medium tracking-[-0.025em] text-[#0D0D0D]">
                          <Link
                            href={service.dedicatedLink}
                            className="hover:underline underline-offset-4"
                          >
                            {service.title}
                          </Link>
                        </h3>
                        {service.price && (
                          <span className="px-3 py-1 bg-[#0D0D0D] text-[#BAFF00] text-[12px] font-mono-tech font-medium">
                            {service.price}
                          </span>
                        )}
                        {service.badge && (
                          <span className="px-3 py-1 bg-[#BAFF00] text-[#0D0D0D] text-[11px] font-mono-tech font-medium uppercase tracking-wider">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[#595959] text-[15px] leading-[1.55] max-w-3xl">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-mono-tech text-[#595959] bg-[#F5F5F7] border border-[#E6E6E6] px-3.5 py-2">
                        <Clock className="w-3.5 h-3.5" />
                        {service.timeline}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedServiceId(isExpanded ? null : service.id)
                        }
                        className="px-4 py-2 border border-[#0D0D0D] text-[13px] font-medium hover:bg-[#0D0D0D] hover:text-[#BAFF00] transition-colors"
                      >
                        {isExpanded ? "Hide Scope −" : "View Scope +"}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-6 border-t border-[#E6E6E6] bg-[#FAFAFA]">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[14px] leading-[1.6]">
                        <div>
                          <h4 className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#939393] mb-3">
                            Key Commercial Benefits
                          </h4>
                          <ul className="space-y-2.5">
                            {service.benefits.map((b, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-[#202020]">
                                <span className="w-5 h-5 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                                  ✓
                                </span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#939393] mb-3">
                            Included Deliverables
                          </h4>
                          <ul className="space-y-2.5">
                            {service.deliverables.map((d, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-[#202020]">
                                <span className="w-5 h-5 rounded-full bg-[#0D0D0D] text-white flex items-center justify-center text-[11px] shrink-0 mt-0.5">
                                  ✓
                                </span>
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-7 pt-5 border-t border-[#E6E6E6] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#595959]">
                          <span>$0 Upfront Prototype Guarantee</span>
                          <span>•</span>
                          <Link
                            href="/overview"
                            className="text-[#0D0D0D] underline underline-offset-4 hover:opacity-70"
                          >
                            View more details &amp; estimate cost
                          </Link>
                        </div>

                        <Link
                          href={service.dedicatedLink}
                          className="inline-flex items-center gap-2.5 bg-[#0D0D0D] hover:bg-[#202020] text-white text-[14px] font-medium px-6 py-3 rounded-full transition-colors"
                        >
                          <span>Explore Full Service Page</span>
                          <span className="w-6 h-6 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center text-[12px]">
                            ↗
                          </span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* UK Regional & Specialist Hubs Bar */}
          <div className="mt-14 bg-[#0D0D0D] text-white p-8 sm:p-10 border border-[#202020]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] mb-2">
                  UK Regional &amp; Specialist Engineering Hubs
                </div>
                <h3 className="text-[24px] sm:text-[30px] font-medium tracking-[-0.02em]">
                  Dedicated UK City &amp; Framework Pages
                </h3>
              </div>
              <Link
                href="/demos"
                className="inline-flex items-center gap-2 text-[14px] text-[#CBCBCB] hover:text-white"
              >
                <span>Inspect Live Interactive Demos</span>
                <span className="text-[#BAFF00]">↗</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Next.js Developer UK",
                  sub: "Bespoke React & App Router",
                  href: "/nextjs-developer-uk",
                },
                {
                  title: "Takeaway Websites London",
                  sub: "All 32 London Boroughs",
                  href: "/services/takeaway-web-design-london",
                },
                {
                  title: "Takeaway Websites Manchester",
                  sub: "Greater Manchester & North West",
                  href: "/services/takeaway-web-design-manchester",
                },
                {
                  title: "Takeaway Websites Birmingham",
                  sub: "West Midlands Direct Ordering",
                  href: "/services/takeaway-web-design-birmingham",
                },
              ].map((hub) => (
                <Link
                  key={hub.href}
                  href={hub.href}
                  className="rh-edge-orbit-card is-lime p-5 bg-[#161616] border border-[#262626] hover:border-[#BAFF00] transition-colors flex flex-col justify-between gap-3 group"
                >
                  <div>
                    <div className="text-[16px] font-medium text-white group-hover:text-[#BAFF00] transition-colors">
                      {hub.title}
                    </div>
                    <div className="text-[13px] text-[#939393] mt-1">{hub.sub}</div>
                  </div>
                  <span className="text-[12px] text-[#CBCBCB] inline-flex items-center gap-1">
                    Explore Hub <span>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DARK HORIZONTAL DRAG PROCESS CAROUSEL + PULSING CONIC CIRCLE DIVIDER */}
      <RhProcessCarousel
        title="How we build it in days,"
        titleMuted="not months"
        stages={[
          {
            stage: "STAGE 01",
            duration: "Day 1",
            title: "Brief, Audit & Zero-Risk Blueprint",
            description:
              "Share your goals or reference links. We lock the fixed price, sitemap, and Core Web Vitals targets before writing a single line.",
            deliverables: [
              "Confirmed Fixed Price (From £250)",
              "Competitor Speed & UX Benchmark",
              "Zero Upfront Deposit Required",
            ],
          },
          {
            stage: "STAGE 02",
            duration: "Days 2 – 4",
            title: "Live Interactive Staging Prototype",
            description:
              "Instead of static Figma PDFs, we ship a real Next.js staging URL you can tap, scroll, and test on your own phone.",
            deliverables: [
              "Working Next.js 16 Preview URL",
              "Desktop & Mobile Motion Choreography",
              "Real-Time WhatsApp & Lead Routing",
            ],
          },
          {
            stage: "STAGE 03",
            duration: "Days 5 – 7",
            title: "Hardening, SEO & Edge Optimisation",
            description:
              "Full TypeScript verification, JSON-LD schema markup, AVIF media pipelines, and 95+ Lighthouse performance sign-off.",
            deliverables: [
              "Schema.org Structured Data",
              "99+ PageSpeed Optimization",
              "Cross-Device QA Verification",
            ],
          },
          {
            stage: "STAGE 04",
            duration: "Launch Day",
            title: "Production Deploy & 100% GitHub Handover",
            description:
              "Only once you approve every screen do you complete payment and receive the entire source repository and Vercel setup.",
            deliverables: [
              "100% GitHub Source Ownership",
              "Domain, SSL & Edge CDN Cutover",
              "Zero Monthly Retainers",
            ],
          },
        ]}
      />

      {/* 3. DARK FAQ ACCORDION (rh.design style) */}
      <section className="bg-[#0D0D0D] text-white py-20 sm:py-28 border-t border-[#202020]">
        <div className="max-w-[1168px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="text-[12px] uppercase tracking-[0.88px] text-[#939393] mb-3">
              Common Questions
            </div>
            <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.1] tracking-[-0.03em]">
              <span className="text-white">Services &amp; Delivery </span>
              <span className="text-[#939393]">FAQ</span>
            </h2>
            <p className="mt-4 text-[15px] text-[#939393] leading-relaxed">
              Have a specific technical brief? Reach out directly on WhatsApp or
              book a discovery call with zero upfront commitment.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-[#202020] border-t border-b border-[#202020]">
            {serviceFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="text-[18px] font-medium text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#BAFF00] border-[#BAFF00] text-[#0D0D0D]"
                          : "border-[#2A2A2A] text-white"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-[15px] text-[#939393] leading-[1.65] pr-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter theme="dark" />
    </div>
  );
};