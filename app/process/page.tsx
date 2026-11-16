import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, GitBranch, RefreshCw } from "lucide-react";
import { SiteFooter } from "../../src/components/SiteFooter";
import { RhHeader } from "../../src/components/rh/RhHeader";
import {
  RhHeroPinned,
  RhProcessCarousel,
  RhSystemRows,
} from "../../src/components/rh/RhModernSections";

export const metadata: Metadata = {
  title: "Web Development Process & Delivery Workflow | Saim Dev",
  description: "Our transparent 4-stage engineering workflow: discovery, technical architecture, Next.js development, and deployment with 100% code ownership.",
  alternates: {
    canonical: "https://www.saimdev.site/process",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Web Development Process & Delivery Workflow | Saim Dev",
    description: "Transparent 4-stage website engineering workflow: discovery, architecture, Next.js build, and zero-downtime deployment.",
    url: "https://www.saimdev.site/process",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Development Process & Delivery Workflow | Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Process & Delivery Workflow | Saim Dev",
    description: "Transparent 4-stage website engineering workflow: discovery, architecture, Next.js build, and zero-downtime deployment.",
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

const processSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.saimdev.site/process/#webpage",
  "name": "Saim Dev 4-Stage Website Engineering Process",
  "description": "Step-by-step bespoke website engineering workflow from brief to zero-downtime edge deployment.",
  "url": "https://www.saimdev.site/process",
  "inLanguage": "en-GB",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  },
  "mainEntity": {
    "@type": "ItemList",
    "name": "4-Stage Website Engineering Sprint",
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Stage 01: Discovery & Strategic Brief (Day 1–2)",
        "description": "Define commercial objectives, target audience personas, feature requirements, and fixed delivery schedule."
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Stage 02: Information Architecture & Wireframing (Day 2–4)",
        "description": "Map information architecture, user journeys, Schema.org JSON-LD data structures, and conversion wireframes."
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Stage 03: Design & Next.js Full-Stack Engineering (Day 4–8)",
        "description": "Develop bespoke UI components with Next.js App Router, Tailwind CSS, TypeScript, and interactive staging preview."
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Stage 04: Testing, Edge Deployment & Full Code Handover (Day 8–10)",
        "description": "Execute Core Web Vitals audit, cross-browser validation, DNS/SSL launch, and transfer 100% GitHub repository ownership."
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.saimdev.site"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Engineering Process",
      "item": "https://www.saimdev.site/process"
    }
  ]
};

const processFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does the 4-stage website development process take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Landing pages take 3–5 business days, multi-page starter websites take 5–7 business days, and full custom web applications or online ordering systems take 7–10 business days from initial brief to live deployment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I review and test the website before paying the final 50% balance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. During Stage 03 we deploy your website to a private staging link so you can test every page, form, and mobile interaction before approving production launch and paying the final 50% milestone."
      }
    }
  ]
};

export default function ProcessPage() {
  return (
    <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processFaqSchema) }}
      />

      <RhHeader theme="dark" />

      <main>
      <RhHeroPinned
        badge="Proven Delivery Methodology · 4-Stage Sprint"
        title={
          <>
            How We Build &amp; Deploy{" "}
            <span className="text-[#939393]">Your Website</span>
          </>
        }
        subtitle="No missed deadlines, no surprise invoices, and no bloated agency middlemen. A transparent 4-stage Next.js engineering sprint with direct engineer communication from brief to production launch in 5–12 days."
        primaryCta={{ label: "Schedule Initial Brief", href: "/contact" }}
        secondaryCta={{ label: "View Transparent Pricing", href: "/pricing" }}
        videoType="cube"
        stripLabel="5–12 Day Sprint · 50/50 Milestone Protection"
        stripItems={[
          {
            label: "01. Scope Lock",
            tag: "Day 1",
            tagValue: "Written Spec",
            summary: "Fixed GBP/EUR/USD quote, route inventory, and target launch window agreed before build begins.",
            href: "#process-stages",
          },
          {
            label: "02. Staging Build",
            tag: "Days 2–6",
            tagValue: "Live Preview",
            summary: "Direct URL on Vercel staging showing responsive breakpoints, forms, and interactive flows.",
            href: "/demos",
          },
          {
            label: "03. CWV & Schema QA",
            tag: "Days 7–10",
            tagValue: "Target 95+ CWV",
            summary: "Core Web Vitals tuning, canonicals, JSON-LD validation, and desktop/mobile browser checks.",
            href: "/services/website-speed-optimization",
          },
          {
            label: "04. Repo Handoff",
            tag: "Launch",
            tagValue: "100% Ownership",
            summary: "Production DNS cutover, clean GitHub source transfer, and post-launch support window.",
            href: "/pricing",
          },
        ]}
      />

      <RhProcessCarousel
        title="Interactive 4-Stage"
        titleMuted="Engineering Workflow"
        stages={[
          {
            stage: "STAGE 01",
            duration: "Day 1–2",
            title: "Discovery & Strategic Brief",
            description:
              "We audit competitors, target audience flows, Stripe/WhatsApp integrations, and lock your exact delivery date and fixed quote.",
            deliverables: [
              "Competitor & Core Web Vitals gap review",
              "Exact page inventory & scope lock",
              "Third-party API & CRM mapping",
            ],
          },
          {
            stage: "STAGE 02",
            duration: "Day 2–4",
            title: "Strategy & Information Architecture",
            description:
              "Conversion wireframes, semantic HTML5 structure, Schema.org JSON-LD planning, and mobile-first responsive tokens.",
            deliverables: [
              "Conversion-focused wireframes",
              "Typography & Swiss design system",
              "Schema.org structured data map",
            ],
          },
          {
            stage: "STAGE 03",
            duration: "Day 4–8",
            title: "Design & Next.js Full-Stack Engineering",
            description:
              "We build your production Next.js App Router codebase and deploy to a private interactive staging URL for live testing.",
            deliverables: [
              "Semantic Next.js 16 + Tailwind CSS code",
              "Private staging URL for real device testing",
              "WhatsApp API & form webhook integration",
            ],
          },
          {
            stage: "STAGE 04",
            duration: "Day 8–10",
            title: "Testing, Launch & Complete Handover",
            description:
              "Cross-browser QA, Core Web Vitals verification (95+), DNS/SSL cutover, Google Search Console indexing, and GitHub IP transfer.",
            deliverables: [
              "99+ Lighthouse performance check",
              "Custom domain, SSL & CDN cache",
              "100% GitHub repo + 30d warranty",
            ],
          },
        ]}
      />

      <RhSystemRows
        overline="MILESTONE BREAKDOWN"
        title="Detailed sprint gates"
        titleMuted="& quality checks"
        rows={[
          {
            num: "01",
            title: "Stage 01 — Discovery & Strategic Brief (Day 1–2)",
            description:
              "Define commercial objectives, target audience personas, feature requirements, and fixed delivery schedule.",
            tags: ["Fixed Quote", "Zero Surprises"],
          },
          {
            num: "02",
            title: "Stage 02 — Information Architecture (Day 2–4)",
            description:
              "Map information architecture, user journeys, Schema.org JSON-LD data structures, and conversion wireframes.",
            tags: ["Wireframes", "JSON-LD Schema"],
          },
          {
            num: "03",
            title: "Stage 03 — Next.js Full-Stack Engineering (Day 4–8)",
            description:
              "Develop bespoke UI components with Next.js App Router, Tailwind CSS, TypeScript, and interactive staging preview.",
            tags: ["Next.js 16", "Live Staging URL"],
          },
          {
            num: "04",
            title: "Stage 04 — Edge Deployment & Handover (Day 8–10)",
            description:
              "Execute Core Web Vitals audit, cross-browser validation, DNS/SSL launch, and transfer 100% GitHub repository ownership.",
            tags: ["GitHub Ownership", "30d Warranty"],
          },
        ]}
      />

      {/* ARCHITECTURAL COMMERCIAL SAFEGUARDS (#F5F5F7 Light Contrast Band) */}
      <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-28 px-5 border-t border-[#E6E6E6]">
        <div className="max-w-[1168px] mx-auto">
          <div data-gsap-reveal="" className="max-w-[740px] mb-14">
            <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#595959] mb-4">
              CLIENT PROTECTION &amp; OWNERSHIP
            </div>
            <h2 className="text-[34px] sm:text-[48px] font-medium tracking-[-0.04em] leading-[1.06] text-[#0D0D0D]">
              Built with zero risk{" "}
              <span className="text-[#939393]">and full code independence.</span>
            </h2>
          </div>

          <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 flex flex-col justify-between min-h-[250px] transition-colors hover:border-[#0D0D0D]">
              <div className="flex items-center justify-between mb-6">
                <span className="w-11 h-11 rounded-full bg-[#0D0D0D] text-[#BAFF00] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#595959]">
                  01 / MILESTONES
                </span>
              </div>
              <div>
                <h3 className="text-[22px] font-medium tracking-[-0.03em] text-[#0D0D0D] mb-2">
                  50/50 Milestone Safety
                </h3>
                <p className="text-[14px] text-[#595959] leading-[1.6]">
                  50% deposit to begin architecture; final 50% only after you test your private staging prototype and approve production launch.
                </p>
              </div>
            </div>

            <div className="rh-edge-orbit-card is-lime bg-[#0D0D0D] text-white border border-[#202020] p-8 flex flex-col justify-between min-h-[250px]">
              <div className="flex items-center justify-between mb-6">
                <span className="w-11 h-11 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center">
                  <GitBranch className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#BAFF00]">
                  02 / OWNERSHIP
                </span>
              </div>
              <div>
                <h3 className="text-[22px] font-medium tracking-[-0.03em] text-white mb-2">
                  100% Code Ownership
                </h3>
                <p className="text-[14px] text-[#B3B3B3] leading-[1.6]">
                  Full GitHub repository rights, deployment pipeline, and source files transferred cleanly upon final sign-off. Zero agency lock-in.
                </p>
              </div>
            </div>

            <div className="rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 flex flex-col justify-between min-h-[250px] transition-colors hover:border-[#0D0D0D]">
              <div className="flex items-center justify-between mb-6">
                <span className="w-11 h-11 rounded-full bg-[#0D0D0D] text-[#BAFF00] flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </span>
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#595959]">
                  03 / WARRANTY
                </span>
              </div>
              <div>
                <h3 className="text-[22px] font-medium tracking-[-0.03em] text-[#0D0D0D] mb-2">
                  Post-Launch Warranty
                </h3>
                <p className="text-[14px] text-[#595959] leading-[1.6]">
                  14 to 30 days of direct senior engineering support after go-live to guarantee zero regressions across traffic spikes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM ARCHITECTURAL CTA */}
      <section className="bg-black text-white py-20 sm:py-24 px-5 border-t border-[#202020]">
        <div data-gsap-reveal="" className="max-w-[760px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] mb-6">
            DIRECT SENIOR ENGINEER
          </div>
          <h2 className="text-[32px] sm:text-[48px] font-medium tracking-[-0.04em] leading-[1.08] text-white mb-4">
            Have a project ready to launch?
          </h2>
          <p className="text-[16px] text-[#939393] mb-9 max-w-[540px] mx-auto leading-[1.6]">
            Connect directly with senior engineer Saim on WhatsApp or send your brief to lock a fixed timeline and start Stage 01.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] px-8 py-4 text-[15px] font-medium tracking-[-0.02em] inline-flex items-center gap-2"
            >
              <span>Message on WhatsApp (+92 319 6526604)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#333333] text-white hover:border-[#BAFF00] hover:text-[#BAFF00] text-[15px] font-medium tracking-[-0.02em] transition-colors"
            >
              <span>Submit Brief Online</span>
            </Link>
          </div>
        </div>
      </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
