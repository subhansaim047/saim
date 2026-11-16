import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, X } from "lucide-react";
import { FooterSection } from "@/components/FooterSection";
import { RhHeader } from "@/components/rh/RhHeader";
import {
  RhBentoWorkGrid,
  RhHeroPinned,
  RhProcessCarousel,
  RhSystemRows,
  RhOdometerNumber,
} from "@/components/rh/RhModernSections";

export const metadata: Metadata = {
  title: 'Freelance Next.js Developer UK | Fast Websites | Saim Dev',
  description: 'Specialist freelance Next.js developer for UK businesses. Sub-second performance, 100/100 Core Web Vitals, and bespoke web architecture from £250.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/nextjs-developer-uk",
    languages: {
      "en-GB": "https://www.saimdev.site/nextjs-developer-uk",
    },
  },
  openGraph: {
    title: 'Freelance Next.js Developer UK | Fast Websites | Saim Dev',
    description: 'Specialist freelance Next.js developer for UK businesses. Sub-second performance, 100/100 Core Web Vitals, and bespoke web architecture from £250.',
    url: "https://www.saimdev.site/nextjs-developer-uk",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [{ url: "https://www.saimdev.site/og-image.png", width: 1200, height: 630, alt: "Next.js Developer UK" }]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: 'Freelance Next.js Developer UK | Fast Websites | Saim Dev',
    description: 'Specialist freelance Next.js developer for UK businesses. Sub-second performance, 100/100 Core Web Vitals, and bespoke web architecture from £250.',
    images: ["https://www.saimdev.site/og-image.png"]
  }
};

const ukFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why choose Next.js over WordPress for a UK business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional WordPress sites are plagued by plugin bloat, database queries, and slow load times (often 3–5 seconds), which kills conversions and Google rankings in the UK. Next.js delivers statically generated, sub-second pages with Optimised Core Web Vitals and zero security maintenance overhead."
      }
    },
    {
      "@type": "Question",
      "name": "How does pricing and invoicing work for UK & European clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All projects feature transparent, fixed pricing in GBP (£) or EUR (€) with zero hidden fees or monthly lock-in retainers. We provide full invoices compliant with UK and European reverse-charge VAT accounting."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Next.js websites fully Privacy-conscious?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every website is built with strict adherence to UK GDPR and EU data protection standards, including privacy-friendly cookie consent banners, SSL encryption, and zero unauthorized third-party trackers."
      }
    },
    {
      "@type": "Question",
      "name": "What is the typical project delivery timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Starter business sites are delivered in 5–7 working days. Full multi-page business websites take 7–10 working days from project kickoff to live production deployment."
      }
    }
  ]
};

const ukBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.saimdev.site/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.saimdev.site/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Next.js Developer UK",
      "item": "https://www.saimdev.site/nextjs-developer-uk"
    }
  ]
};

export default function NextJsDeveloperUkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ukFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ukBreadcrumbSchema) }}
      />
      <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
        <RhHeader theme="dark" />

        <main>
        {/* 1. PAGE-OPEN HERO (3D Cube + Laser-Draw Strip) */}
        <RhHeroPinned
          badge="UK & European Next.js Engineering Specialist"
          title={
            <>
              High-Performance Next.js Web Development{" "}
              <span className="text-[#939393]">for UK Businesses.</span>
            </>
          }
          subtitle="Saim Dev provides specialist freelance Next.js web development for UK businesses from £250. Sub-second React platforms engineered for 95+ Core Web Vitals, local Google visibility, and 100% source code ownership with zero agency retainers."
          primaryCta={{
            label: "Start on WhatsApp (+92 319 6526604)",
            href: "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Next.js%20website%20for%20my%20UK%20business",
          }}
          secondaryCta={{ label: "View Website Case Studies", href: "/case-studies" }}
          videoType="cube"
          stripLabel="Fixed GBP Pricing · Zero Agency Retainers"
          stripItems={[
            {
              label: "01. UK GBP Packages",
              tag: "From £250",
              tagValue: "No VAT Lock-In",
              summary: "Fixed GBP quotes (£250 landing, £390 starter, £790 business) with 50/50 milestones.",
              href: "/pricing",
            },
            {
              label: "02. Edge Speed",
              tag: "CWV Target",
              tagValue: "95+ Target",
              summary: "Next.js 16 App Router and CDN caching built to clear Google LCP & INP on 4G.",
              href: "/services/website-speed-optimization",
            },
            {
              label: "03. UK Local SEO",
              tag: "Structured Data",
              tagValue: "JSON-LD Ready",
              summary: "Semantic HTML5, en-GB regional metadata, and full schema graphs out of the box.",
              href: "/services/seo-services",
            },
            {
              label: "04. Repo Ownership",
              tag: "Code Handoff",
              tagValue: "100% Yours",
              summary: "Complete GitHub repository transfer with zero proprietary CMS or monthly retainers.",
              href: "/process",
            },
          ]}
        />

        {/* 02 & 03 — PROBLEM & SOLUTION: UK AGENCY VS SAIM DEV (#F5F5F7 Light Contrast Band) */}
        <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-28 px-5 border-t border-[#E6E6E6]">
          <div className="max-w-[1168px] mx-auto">
            <div data-gsap-reveal="" className="max-w-[740px] mb-14">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#595959] mb-4">
                02–03 / AGILE ENGINEERING VS TRADITIONAL AGENCIES
              </div>
              <h2 className="text-[34px] sm:text-[48px] font-medium tracking-[-0.04em] leading-[1.06] text-[#0D0D0D]">
                Why Pay £3,000–£5,000+ to{" "}
                <span className="text-[#939393]">Slow UK Agencies?</span>
              </h2>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-[#E6E6E6] p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="text-[11px] font-mono-tech uppercase tracking-wider text-[#595959] mb-2">
                    02 / CUSTOMER PROBLEM
                  </div>
                  <h3 className="text-[24px] font-medium tracking-[-0.03em] text-[#0D0D0D] mb-6">
                    Traditional UK Digital Agencies
                  </h3>
                  <ul className="space-y-4 text-[14px] text-[#595959]">
                    <li className="flex items-start gap-3">
                      <X className="w-4 h-4 text-[#939393] shrink-0 mt-1" />
                      <span><strong className="text-[#0D0D0D]">£3,000 – £8,000+</strong> upfront quotes tied to monthly maintenance retainers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-4 h-4 text-[#939393] shrink-0 mt-1" />
                      <span>Heavy WordPress themes with 40+ plugins failing Google Core Web Vitals.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-4 h-4 text-[#939393] shrink-0 mt-1" />
                      <span>6 to 12 weeks average turnaround with account-manager bottlenecks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="w-4 h-4 text-[#939393] shrink-0 mt-1" />
                      <span>Fragile database dependencies and constant plugin security patches.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rh-edge-orbit-card is-lime bg-[#0D0D0D] text-white border border-[#202020] p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider text-[#BAFF00] mb-2">
                    <Zap className="w-3.5 h-3.5" />
                    <span>03 / OUR SOLUTION · DIRECT NEXT.JS 16 SPECIALIST</span>
                  </div>
                  <h3 className="text-[24px] font-medium tracking-[-0.03em] text-white mb-6">
                    Saim Dev Architecture
                  </h3>
                  <ul className="space-y-4 text-[14px] text-white/85">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-1" />
                      <span><strong className="text-white">Fixed pricing from £250 / £390</strong> with zero monthly agency retainers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-1" />
                      <span>Pure Next.js 16 + React 19 code loading in under 1 second globally.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-1" />
                      <span>Live staging prototype delivered in <strong className="text-white">5 to 10 days</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-1" />
                      <span>Edge-cached serverless delivery with full GitHub repository ownership.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03B — CORE TECHNICAL CONCEPTS (Dark #000000 Solution Foundation) */}
        <section data-nav="dark" className="relative z-10 bg-black px-5 py-16 sm:py-20 border-t border-[#202020]">
          <div className="max-w-[1168px] mx-auto">
            <div data-gsap-reveal="" className="rh-edge-orbit-card is-lime p-8 sm:p-10 bg-[#0D0D0D] border border-[#222222]">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] mb-2.5">
                03 / CORE TECHNICAL ARCHITECTURE
              </div>
              <h2 className="text-[24px] sm:text-[32px] font-medium tracking-[-0.03em] text-white mb-6">
                Foundations That Outperform{" "}
                <span className="text-[#939393]">Legacy CMS Builds</span>
              </h2>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[14px]">
                <div className="space-y-2">
                  <dt className="text-white font-medium text-[17px]">What is Next.js?</dt>
                  <dd className="text-[#939393] leading-[1.6]">
                    Next.js is a full-stack React web framework designed by Vercel. It combines server-side rendering (SSR), static site generation (SSG), and edge middleware to deliver fast, secure, and search-optimised websites for modern businesses.
                  </dd>
                </div>
                <div className="space-y-2">
                  <dt className="text-white font-medium text-[17px]">What are Core Web Vitals?</dt>
                  <dd className="text-[#939393] leading-[1.6]">
                    Core Web Vitals are Google’s standardized metrics measuring real-world web page performance, primarily Largest Contentful Paint (&lt; 2.5s), Interaction to Next Paint (&lt; 200ms), and Cumulative Layout Shift (&lt; 0.1).
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* 04 — VALUE: UK ARCHITECTURE & FEATURES */}
        <RhSystemRows
          overline="04 / UK NEXT.JS ARCHITECTURE"
          title="Engineered for UK scale."
          titleMuted="Zero WordPress bloat."
          subtitle="Every UK deployment ships with App Router edge rendering, strict TypeScript safety, and 100% repository ownership."
          rows={[
            {
              num: "01",
              title: "Edge SSR & <0.8s LCP",
              description: "Server components and Vercel edge caching built to clear Google Core Web Vitals across 4G mobile networks nationwide.",
              tags: ["Next.js 16", "Edge SSR", "LCP < 0.8s"],
            },
            {
              num: "02",
              title: "Technical UK SEO & Schema",
              description: "Automated JSON-LD LocalBusiness, Service, and FAQPage schemas with canonical en-GB hreflang tags.",
              tags: ["JSON-LD", "en-GB SEO", "OpenGraph"],
            },
            {
              num: "03",
              title: "100% Code Ownership",
              description: "Zero proprietary page builders or agency lock-in retainers. Full GitHub handoff and production Vercel pipeline.",
              tags: ["TypeScript", "Clean Git", "Zero Lock-in"],
            },
          ]}
        />

        {/* 05A — TRUST: VERIFIED UK METRIC BENCHMARKS (Light #F5F5F7 Framing Dark Orbit Cards) */}
        <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-16 sm:py-20 px-5 border-t border-[#E6E6E6]">
          <div className="max-w-[1168px] mx-auto">
            <div data-gsap-reveal="" className="max-w-[720px] mb-10">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#595959] mb-2">
                05 / VERIFIED UK BENCHMARKS
              </div>
              <h2 className="text-[30px] sm:text-[42px] font-medium tracking-[-0.04em] leading-[1.08] text-[#0D0D0D]">
                Measurable engineering speed{" "}
                <span className="text-[#939393]">you can test live.</span>
              </h2>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rh-edge-orbit-card is-lime p-6 bg-[#0D0D0D] border border-[#222222] text-white">
                <div className="text-[32px] sm:text-[40px] font-medium tracking-[-0.04em] text-[#BAFF00] font-mono-tech leading-none mb-2">
                  90+
                </div>
                <div className="text-[12px] text-[#CBCBCB]">Google Core Web Vitals</div>
              </div>
              <div className="rh-edge-orbit-card is-lime p-6 bg-[#0D0D0D] border border-[#222222] text-white">
                <div className="text-[32px] sm:text-[40px] font-medium tracking-[-0.04em] text-white font-mono-tech leading-none mb-2">
                  &lt;0.8s
                </div>
                <div className="text-[12px] text-[#CBCBCB]">Sub-Second Load Time</div>
              </div>
              <div className="rh-edge-orbit-card is-lime p-6 bg-[#0D0D0D] border border-[#222222] text-white">
                <div className="text-[32px] sm:text-[40px] font-medium tracking-[-0.04em] text-white font-mono-tech leading-none mb-2">
                  5–10d
                </div>
                <div className="text-[12px] text-[#CBCBCB]">Rapid Sprint Turnaround</div>
              </div>
              <div className="rh-edge-orbit-card is-lime p-6 bg-[#0D0D0D] border border-[#222222] text-white">
                <div className="text-[32px] sm:text-[40px] font-medium tracking-[-0.04em] text-[#BAFF00] font-mono-tech leading-none mb-2">
                  £250+
                </div>
                <div className="text-[12px] text-[#CBCBCB]">Fixed GBP Pricing</div>
              </div>
            </div>
          </div>
        </section>

        {/* 05B — TRUST: LIVE UK CONCEPT BUILDS */}
        <RhBentoWorkGrid
          overline="05 / INTERACTIVE REFERENCE DEMOS"
          title="Test real Next.js builds"
          titleMuted="engineered for UK & global brands."
          proofStat="100%"
          proofLabel="Clean Next.js 16 & TypeScript source committed directly to your own GitHub repository"
          cursorLabel="Inspect Live Build"
          items={[
            {
              id: "uk-rh-clone",
              title: "RH Studio Flagship Clone",
              category: "High-Craft Agency UI",
              metric: "<0.8s LCP Target",
              description: "Smooth Lenis scrolling, GSAP timelines, and editorial light/dark contrast replicated cleanly in Next.js.",
              href: "/rh-clone/index.html",
              external: true,
              tags: ["Next.js 16", "GSAP", "Editorial UI"],
            },
            {
              id: "uk-hotbite",
              title: "HotBite — Direct UK Takeaway",
              category: "UK Hospitality",
              metric: "0% Commission",
              description: "Commission-free ordering menu with allergen badges and instant WhatsApp docket receipts.",
              href: "/hotbite/index.html",
              external: true,
              tags: ["Direct Orders", "Allergen Matrix", "Mobile First"],
            },
            {
              id: "uk-hq-leathercon",
              title: "HQ Leathercon Catalogue",
              category: "B2B Manufacturing",
              metric: "Zero Plugin Bloat",
              description: "Multi-category commercial product directory engineered with instant filtering and static edge speed.",
              href: "/hq-leathercon/index.html",
              external: true,
              tags: ["B2B Catalog", "Edge CDN", "Schema SEO"],
            },
            {
              id: "uk-frenchyse",
              title: "Frenchyse — Hospitality Concept",
              category: "Restaurant Brand",
              metric: "Mobile-First UI",
              description: "Fast booking & tasting-menu showcase engineered to eliminate heavy third-party WordPress builders.",
              href: "/frenchyse/index.html",
              external: true,
              tags: ["App Router", "Bookings", "Tailwind CSS"],
            },
          ]}
        />

        {/* 06 — PROCESS: UK DELIVERY SPRINT */}
        <RhProcessCarousel
          overline="06 / UK DELIVERY SPRINT"
          title="Live across the UK"
          titleMuted="in 5–10 days."
          stages={[
            {
              stage: "01",
              duration: "Day 1",
              title: "Scope & UK Market Audit",
              description: "Lock deliverables, UK keyword clusters, competitor benchmarks, and fixed GBP quote with zero surprise fees.",
              deliverables: ["Fixed GBP Quote", "SEO Blueprint", "UX Wireframe"],
            },
            {
              stage: "02",
              duration: "Days 2–4",
              title: "Next.js & Tailwind Build",
              description: "Custom React architecture, motion polish, and mobile-first responsive templates streamed to a live preview URL.",
              deliverables: ["App Router", "Staging URL", "Design Tokens"],
            },
            {
              stage: "03",
              duration: "Days 5–7",
              title: "Schema, QA & Speed Hardening",
              description: "Core Web Vitals tuning, structured data validation, and cross-browser device verification.",
              deliverables: ["Core Web Vitals", "JSON-LD QA", "Accessibility"],
            },
            {
              stage: "04",
              duration: "Launch",
              title: "Production & Git Handoff",
              description: "DNS switchover, SSL provisioning, and full source-code transfer directly to your organisation.",
              deliverables: ["GitHub Repo", "Zero Retainer", "Post-Launch Support"],
            },
          ]}
          quote="Target engagement benchmark: migrate a legacy agency WordPress build into clean Next.js 16 App Router with fixed GBP scope and zero monthly lock-in."
          author="Saim Dev UK Build Standard"
          role="Reference Architecture · United Kingdom & Europe"
          ctaHref="/contact"
          ctaLabel="Start UK Sprint"
        />

        {/* 07 — INVESTMENT: UK TRANSPARENT PRICING IN GBP (#F5F5F7 Light Band) */}
        <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-28 px-5 border-t border-[#E6E6E6]">
          <div className="max-w-[1168px] mx-auto">
            <div data-gsap-reveal="" className="max-w-[720px] mb-12">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#595959] mb-3">
                07 / UK &amp; EUROPE PACKAGES
              </div>
              <h2 className="text-[34px] sm:text-[48px] font-medium tracking-[-0.04em] leading-[1.06] text-[#0D0D0D] mb-3">
                Transparent GBP Pricing
              </h2>
              <p className="text-[15px] text-[#595959]">
                Fixed one-time investment. Invoicing ready for UK Ltd &amp; European VAT registered entities.
              </p>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#595959]">
                    Single Offer
                  </span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[#0D0D0D] mt-1 mb-3">
                    Landing Page
                  </h3>
                  <div className="text-[40px] font-medium tracking-[-0.04em] text-[#0D0D0D] font-mono-tech leading-none mb-4">
                    <RhOdometerNumber value="£250" />{" "}
                    <span className="text-[12px] font-normal text-[#595959]">one-time</span>
                  </div>
                  <p className="text-[13px] text-[#595959] mb-6 leading-[1.55]">
                    Ideal for Google Ads campaigns, London service promotions, and product launches.
                  </p>
                  <ul className="space-y-2.5 text-[13px] text-[#333333] mb-8">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> 1 High-Converting Page</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> WhatsApp &amp; Call Integration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> Sub-Second Loading Speed</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> 3–5 Days Turnaround</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20order%20the%20Landing%20Page%20package%20(£250)"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-3 rounded-full border border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#BAFF00] transition-colors text-[13px] font-medium"
                >
                  Order on WhatsApp
                </a>
              </div>

              <div className="rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#595959]">
                    Standard Business
                  </span>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-[#0D0D0D] mt-1 mb-3">
                    Starter Plan
                  </h3>
                  <div className="text-[40px] font-medium tracking-[-0.04em] text-[#0D0D0D] font-mono-tech leading-none mb-4">
                    <RhOdometerNumber value="£390" />{" "}
                    <span className="text-[12px] font-normal text-[#595959]">one-time</span>
                  </div>
                  <p className="text-[13px] text-[#595959] mb-6 leading-[1.55]">
                    Complete 5-page digital presence for UK clinics, tradesmen, consultants, and boutiques.
                  </p>
                  <ul className="space-y-2.5 text-[13px] text-[#333333] mb-8">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> Up to 5 Custom Pages</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> Local UK SEO &amp; Schema Markup</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> GDPR Cookie Banner Included</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> 5–7 Days Turnaround</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20order%20the%20Starter%20Plan%20(£390)"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-3 rounded-full border border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#BAFF00] transition-colors text-[13px] font-medium"
                >
                  Order on WhatsApp
                </a>
              </div>

              <div className="rh-edge-orbit-card is-lime bg-[#0D0D0D] text-white border border-[#202020] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#BAFF00]">
                      Full Scale
                    </span>
                    <span className="bg-[#BAFF00] text-[#0D0D0D] text-[10px] font-mono-tech font-semibold px-2.5 py-0.5 uppercase">
                      Best Value UK
                    </span>
                  </div>
                  <h3 className="text-[22px] font-medium tracking-[-0.02em] text-white mt-1 mb-3">
                    Business Plan
                  </h3>
                  <div className="text-[40px] font-medium tracking-[-0.04em] text-[#BAFF00] font-mono-tech leading-none mb-4">
                    <RhOdometerNumber value="£790" />{" "}
                    <span className="text-[12px] font-normal text-[#939393]">one-time</span>
                  </div>
                  <p className="text-[13px] text-[#939393] mb-6 leading-[1.55]">
                    Dominant 15-page web platform with blog system, analytics, and lead capture funnels.
                  </p>
                  <ul className="space-y-2.5 text-[13px] text-white/85 mb-8">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0" /> Up to 15 Pages &amp; Blog System</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0" /> Optimised Core Web Vitals</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0" /> Full Analytics &amp; Search Console</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0" /> 30 Days Priority Support</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20order%20the%20Business%20Plan%20(£790)"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-3 rounded-full bg-[#BAFF00] text-[#0D0D0D] hover:brightness-95 transition-all text-[13px] font-semibold"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — OBJECTIONS: UK FAQ ACCORDION (Dark #0D0D0D) */}
        <section data-nav="dark" className="relative z-10 bg-[#0D0D0D] text-white py-20 sm:py-28 px-5 border-t border-[#202020]">
          <div className="max-w-[1168px] mx-auto">
            <div data-gsap-reveal="" className="max-w-[720px] mb-10">
              <span className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#BAFF00] block mb-3">
                08 / UK BUSINESS QUESTIONS
              </span>
              <h2 className="text-[32px] sm:text-[42px] font-medium tracking-[-0.04em] leading-[1.08] text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div data-gsap-stagger="" className="space-y-3">
              {[
                {
                  q: "Why choose Next.js over WordPress for a UK business?",
                  a: "Traditional WordPress sites suffer from plugin bloat and slow server response times (often 3–5 seconds), which hurts conversions and UK search engine rankings. Next.js serves pre-rendered static content instantly across global edge servers with 95+ PageSpeed scores.",
                },
                {
                  q: "How does pricing and invoicing work for UK & European clients?",
                  a: "All projects feature transparent, fixed pricing in GBP (£) or EUR (€) with zero hidden fees. We provide compliant invoices formatted for UK Ltd and European reverse-charge VAT accounting.",
                },
                {
                  q: "Are your websites fully Privacy-conscious?",
                  a: "Yes. Every website is built with strict adherence to UK GDPR and EU data protection standards, including privacy-friendly cookie consent banners, SSL encryption, and zero unauthorized third-party trackers.",
                },
                {
                  q: "What is the typical project delivery timeline?",
                  a: "Starter business sites are delivered in 5–7 working days. Full multi-page business websites take 7–10 working days from project kickoff to live production deployment.",
                },
              ].map((item, idx) => (
                <details
                  key={item.q}
                  open={idx === 0}
                  className="group bg-[#141414] border border-[#242424] hover:border-[#BAFF00]/50 open:border-[#BAFF00]/60 transition-colors px-6 py-5"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none select-none">
                    <span className="text-[16px] font-medium text-white">{item.q}</span>
                    <span className="w-8 h-8 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white group-open:bg-[#BAFF00] group-open:border-[#BAFF00] group-open:text-[#0D0D0D] transition-colors shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="pt-3 text-[14px] text-[#B3B3B3] leading-[1.6] max-w-3xl">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 09 — CONVERSION: CONTEXTUAL COMPARISON + FINAL CTA BANNER (#F5F5F7 Framing Dark Card) */}
        <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-24 px-5 border-t border-[#E6E6E6]">
          <div className="max-w-[1168px] mx-auto space-y-8">
            <div
              data-gsap-reveal=""
              className="rounded-3xl bg-black border border-[#222222] text-white p-8 sm:p-14 text-center"
            >
              <div className="max-w-2xl mx-auto">
                <div className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] mb-3">
                  09 / START YOUR UK BUILD
                </div>
                <h2 className="text-3xl sm:text-5xl font-medium tracking-[-0.04em] leading-[1.06] text-white mb-4">
                  Ready to Upgrade Your UK Digital Presence?
                </h2>
                <p className="text-[#939393] text-[15px] mb-9">
                  Discuss your project directly on WhatsApp. No sales pitch, just honest technical advice and fixed GBP milestones.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20Next.js%20website%20for%20my%20UK%20business"
                    target="_blank"
                    rel="noreferrer"
                    className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] font-medium text-[14px] px-7 py-3.5 transition-all"
                  >
                    Chat on WhatsApp (+92 319 6526604)
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-7 py-3.5 rounded-full border border-[#333333] text-white hover:border-[#BAFF00] hover:text-[#BAFF00] font-medium text-[14px] transition-colors"
                  >
                    Submit Project Enquiry
                  </Link>
                </div>
              </div>
            </div>

            <div
              data-gsap-reveal=""
              className="p-8 bg-white border border-[#E6E6E6] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-[20px] font-medium tracking-[-0.02em] text-[#0D0D0D] mb-1">
                  Looking for packaged solutions or custom scopes?
                </h3>
                <p className="text-[14px] text-[#595959]">
                  Compare transparent deliverables, case study metrics, or explore all development services.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/services"
                  className="text-[13px] font-medium px-5 py-2.5 rounded-full border border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-colors"
                >
                  Explore our web development services
                </Link>
                <Link
                  href="/pricing"
                  className="text-[13px] font-medium px-5 py-2.5 rounded-full bg-[#BAFF00] text-[#0D0D0D] hover:brightness-95 transition-all inline-flex items-center gap-1.5"
                >
                  <span>Full Package Comparison</span>
                  <ShieldCheck className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        </main>

        <FooterSection />
      </div>
    </>
  );
}
