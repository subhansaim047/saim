import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Zap, X } from "lucide-react";
import { FooterSection } from "@/components/FooterSection";
import { RhHeader } from "@/components/rh/RhHeader";
import {
  ArchitecturalDiagram,
  EngineeringMediaFigure,
  EngineeringVerificationBadge,
  TopicSiloNavigator,
} from "@/components/ui/EditorialVisualPack";
import {
  RhBentoWorkGrid,
  RhHeroPinned,
  RhProcessCarousel,
  RhSystemRows,
  RhOdometerNumber,
} from "@/components/rh/RhModernSections";

export const metadata: Metadata = {
  title: 'Freelance Next.js Developer UK | Direct Sprints | Saim Dev',
  description: 'Work directly with a senior React & App Router engineer on rapid UI builds, migrations, and technical audits across UK & US timezones. Book a sprint.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/nextjs-developer-uk",
    languages: {
      "en": "https://www.saimdev.site/nextjs-developer-uk",
      "en-GB": "https://www.saimdev.site/nextjs-developer-uk",
      "en-US": "https://www.saimdev.site/nextjs-developer-uk",
      "x-default": "https://www.saimdev.site/nextjs-developer-uk",
    },
  },
  openGraph: {
    title: 'Freelance Next.js Developer UK | Direct Sprints | Saim Dev',
    description: 'Work directly with a senior React & App Router engineer on rapid UI builds, migrations, and technical audits across UK & US timezones. Book a sprint.',
    url: "https://www.saimdev.site/nextjs-developer-uk",
    siteName: "Saim Dev",
    locale: "en_GB",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "https://www.saimdev.site/og-image.png", width: 1200, height: 630, alt: "Freelance Next.js Developer UK & US - Saim Dev" }]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: 'Freelance Next.js Developer UK | Direct Sprints | Saim Dev',
    description: 'Work directly with a senior React & App Router engineer on rapid UI builds, migrations, and technical audits across UK & US timezones. Book a sprint.',
    images: ["https://www.saimdev.site/og-image.png"]
  }
};

const developerGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.saimdev.site/nextjs-developer-uk#webpage",
      "url": "https://www.saimdev.site/nextjs-developer-uk",
      "name": "Freelance Next.js Developer UK | Direct Sprints | Saim Dev",
      "description": "Work directly with a senior React & App Router engineer on rapid UI builds, migrations, and technical audits across UK & US timezones.",
      "isPartOf": { "@id": "https://www.saimdev.site/#website" },
      "about": { "@id": "https://www.saimdev.site/nextjs-developer-uk#service" },
      "author": { "@id": "https://www.saimdev.site/#person" },
      "breadcrumb": { "@id": "https://www.saimdev.site/nextjs-developer-uk#breadcrumb" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.saimdev.site/og-image.png",
        "width": 1200,
        "height": 630
      },
      "inLanguage": ["en-GB", "en-US"]
    },
    {
      "@type": "Service",
      "@id": "https://www.saimdev.site/nextjs-developer-uk#service",
      "name": "Freelance Next.js Developer & Engineering Sprints",
      "serviceType": "Freelance Next.js Developer UK & US",
      "url": "https://www.saimdev.site/nextjs-developer-uk",
      "provider": { "@id": "https://www.saimdev.site/#organization" },
      "areaServed": [
        { "@type": "Country", "name": "United Kingdom", "identifier": "GB" },
        { "@type": "Country", "name": "United States", "identifier": "US" },
        { "@type": "AdministrativeArea", "name": "European Union" }
      ],
      "offers": [
        {
          "@type": "AggregateOffer",
          "priceCurrency": "GBP",
          "lowPrice": "250",
          "highPrice": "790",
          "offerCount": 3
        },
        {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "300",
          "highPrice": "999",
          "offerCount": 3
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.saimdev.site/nextjs-developer-uk#breadcrumb",
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
          "name": "Freelance Next.js Developer UK",
          "item": "https://www.saimdev.site/nextjs-developer-uk"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.saimdev.site/nextjs-developer-uk#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why hire a dedicated freelance Next.js developer over a multi-layer UK agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional agencies pass briefs through account managers before a junior edits a WordPress theme. Working directly with a senior freelance Next.js developer removes communication lag, enforces strict TypeScript App Router patterns, and ships fixed-milestone code with zero retainers."
          }
        },
        {
          "@type": "Question",
          "name": "How does sprint pricing and invoicing work for UK & US clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sprints operate on fixed GBP (£) or USD ($) milestones with zero recurring retainers. We issue clean commercial invoices ready for UK Ltd, European VAT reverse-charge, and US business bookkeeping."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle privacy and Core Web Vitals engineering?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every sprint pairs PECR-aware consent patterns and security headers with React Server Components, tree-shaken CSS, image dimension enforcement, and Lighthouse QA before production handover."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical sprint delivery timeline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Single-route UI sprints take 3–5 working days, while full 5-to-15-page Next.js engineering sprints run 5–10 working days from written specification to GitHub handover."
          }
        }
      ]
    }
  ]
};

export default function NextJsDeveloperUkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(developerGraphSchema) }}
      />
      <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
        <RhHeader theme="dark" />

        <main>
        {/* 1. PAGE-OPEN HERO (3D Cube + Laser-Draw Strip) */}
        <RhHeroPinned
          badge="Senior Freelance Next.js Engineer · UK & US Timezones"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Freelance Next.js Developer UK" },
          ]}
          title={
            <>
              Freelance Next.js Developer{" "}
              <span className="text-[#939393]">for UK &amp; US Product Teams.</span>
            </>
          }
          subtitle="Direct senior React 19 and Next.js 16 engineering sprints for UK and US businesses, product teams, and design agencies. Rapid feature shipping, Core Web Vitals optimization, and full GitHub code ownership from £250 / $300 fixed."
          primaryCta={{
            label: "Start on WhatsApp (+92 319 6526604)",
            href: "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20hiring%20a%20freelance%20Next.js%20developer",
          }}
          secondaryCta={{ label: "Full Website Development Service", href: "/services/website-development" }}
          videoType="cube"
          stripLabel="Direct Freelance Sprints · Zero Agency Retainers"
          stripItems={[
            {
              label: "01. UK & US Milestones",
              tag: "From £250 / $300",
              tagValue: "No Retainer Lock-In",
              summary: "Fixed GBP/USD sprint quotes (£250/$300 UI, £390/$500 starter, £790/$999 scale) with 50/50 split.",
              href: "/pricing",
            },
            {
              label: "02. Edge Architecture",
              tag: "App Router",
              tagValue: "RSC + ISR",
              summary: "Next.js 16 React Server Components and CDN caching engineered cleanly for mobile 4G.",
              href: "/services/website-speed-optimization",
            },
            {
              label: "03. Turnkey Builds",
              tag: "Full Service",
              tagValue: "Web Dev Hub",
              summary: "Need complete Next.js website development UK & US delivery? Inspect our flagship build service.",
              href: "/services/website-development",
            },
            {
              label: "04. Repo Ownership",
              tag: "Code Handoff",
              tagValue: "100% Yours",
              summary: "Clean GitHub PRs or full repository transfer with zero proprietary CMS dependencies.",
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
                      <span><strong className="text-white">Fixed pricing from £250 / $300</strong> with zero monthly agency retainers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-1" />
                      <span>Pure Next.js 16 + React 19 static &amp; edge architecture built to minimize blocking JS.</span>
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

        {/* 04 — VALUE: UK & US FREELANCE ARCHITECTURE & FEATURES */}
        <RhSystemRows
          overline="04 / DIRECT FREELANCE ENGINEERING"
          title="Senior Next.js delivery."
          titleMuted="Without agency middlemen."
          subtitle="Every sprint ships App Router Server Components, strict TypeScript interfaces, and clean GitHub PRs."
          rows={[
            {
              num: "01",
              title: "Edge SSR & App Router Speed",
              description: "Server components and edge caching structured to pass Google Core Web Vitals thresholds across UK and US 4G networks.",
              tags: ["Next.js 16", "React 19", "Edge SSR"],
            },
            {
              num: "02",
              title: "Technical SEO & Schema @graph",
              description: "Validated JSON-LD Service, Organization, and BreadcrumbList graphs paired with multi-region UK & US metadata.",
              tags: ["JSON-LD", "UK & US SEO", "OpenGraph"],
            },
            {
              num: "03",
              title: "100% Code Ownership",
              description: "Zero proprietary page builders or agency lock-in retainers. Full GitHub handoff and production Vercel pipeline.",
              tags: ["TypeScript", "Clean Git", "Zero Lock-in"],
            },
          ]}
        />

        {/* 05A — TRUST: VERIFIABLE ENGINEERING STANDARDS (Light #F5F5F7 Framing Dark Orbit Cards) */}
        <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-16 sm:py-20 px-5 border-t border-[#E6E6E6]">
          <div className="max-w-[1168px] mx-auto">
            <div data-gsap-reveal="" className="max-w-[720px] mb-10">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#595959] mb-2">
                05 / ENGINEERING BENCHMARKS
              </div>
              <h2 className="text-[30px] sm:text-[42px] font-medium tracking-[-0.04em] leading-[1.08] text-[#0D0D0D]">
                Measurable engineering discipline{" "}
                <span className="text-[#939393]">verified before handover.</span>
              </h2>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rh-edge-orbit-card is-lime p-6 bg-[#0D0D0D] border border-[#222222] text-white">
                <div className="text-[32px] sm:text-[40px] font-medium tracking-[-0.04em] text-[#BAFF00] font-mono-tech leading-none mb-2">
                  RSC
                </div>
                <div className="text-[12px] text-[#CBCBCB]">Server-First Bundle Budget</div>
              </div>
              <div className="rh-edge-orbit-card is-lime p-6 bg-[#0D0D0D] border border-[#222222] text-white">
                <div className="text-[32px] sm:text-[40px] font-medium tracking-[-0.04em] text-white font-mono-tech leading-none mb-2">
                  0-Lock
                </div>
                <div className="text-[12px] text-[#CBCBCB]">100% GitHub Source Owned</div>
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
                <div className="text-[12px] text-[#CBCBCB]">From $300 USD Fixed Sprints</div>
              </div>
            </div>

            <EngineeringMediaFigure
              src="/images/guides/nextjs-edge-architecture.webp"
              alt="Distributed Next.js edge CDN routing architecture for UK and US product teams"
              caption="Senior Next.js 16 sprints deploy cleanly onto global London and US edge networks with zero monthly plugin maintenance retainers."
              tag="Freelance Sprint Architecture"
              theme="light"
            />
            <ArchitecturalDiagram kind="sprint" theme="light" />
            <EngineeringVerificationBadge
              contextLabel="Direct TypeScript PRs and production builds verified with automated CI checks before launch"
              theme="light"
            />
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
              title: "1:1 Editorial UI Architecture",
              category: "High-Craft Agency UI",
              metric: "Edge Static RSC",
              description: "Smooth Lenis scrolling, GSAP timelines, and editorial light/dark contrast reconstructed cleanly in Next.js.",
              href: "/services/website-clone",
              tags: ["Next.js 16", "GSAP", "1:1 Rebuild"],
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
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> 1 High-Converting Route</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> WhatsApp &amp; Call Integration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> Static Edge Rendering ($300 USD)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> 3–5 Days Turnaround</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20order%20the%20Landing%20Page%20package%20(£250)"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    Complete 5-page digital presence for UK &amp; US clinics, consultants, trades, and boutiques ($500 USD).
                  </p>
                  <ul className="space-y-2.5 text-[13px] text-[#333333] mb-8">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> Up to 5 Custom Pages</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> UK &amp; US Technical SEO Schema</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> PECR Consent Banner Ready</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0" /> 5–7 Days Turnaround</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20order%20the%20Starter%20Plan%20(£390)"
                  target="_blank"
                  rel="noopener noreferrer"
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
                      Most Popular · $999 USD
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
                  rel="noopener noreferrer"
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
                08 / UK &amp; US ENGINEERING QUESTIONS
              </span>
              <h2 className="text-[32px] sm:text-[42px] font-medium tracking-[-0.04em] leading-[1.08] text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div data-gsap-stagger="" className="space-y-3">
              {[
                {
                  q: "Why hire a dedicated freelance Next.js developer over a multi-layer UK agency?",
                  a: "Traditional agencies pass briefs through account managers before a junior edits a WordPress theme. Working directly with a senior freelance Next.js developer removes communication lag, enforces strict TypeScript App Router patterns, and ships fixed-milestone code with zero retainers.",
                },
                {
                  q: "How does sprint pricing and invoicing work for UK & US clients?",
                  a: "Sprints operate on fixed GBP (£) or USD ($) milestones with zero recurring retainers. We issue clean commercial invoices ready for UK Ltd, European VAT reverse-charge, and US business bookkeeping.",
                },
                {
                  q: "How do you handle privacy and Core Web Vitals engineering?",
                  a: "Every sprint pairs PECR-aware consent patterns and security headers with React Server Components, tree-shaken CSS, image dimension enforcement, and Lighthouse QA before production handover.",
                },
                {
                  q: "What is the typical sprint delivery timeline?",
                  a: "Single-route UI sprints take 3–5 working days, while full 5-to-15-page Next.js engineering sprints run 5–10 working days from written specification to GitHub handover.",
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
                    rel="noopener noreferrer"
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
                  href="/services/website-development"
                  className="text-[13px] font-medium px-5 py-2.5 rounded-full border border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white transition-colors"
                >
                  Next.js Website Development UK &amp; US
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

            <TopicSiloNavigator
              siloId="nextjs-core"
              currentPath="/nextjs-developer-uk"
              theme="light"
            />
          </div>
        </section>
        </main>

        <FooterSection />
      </div>
    </>
  );
}
