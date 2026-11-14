import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PhoneCall, Compass, Code2, Rocket, CheckCircle2, ShieldCheck, GitBranch, RefreshCw } from "lucide-react";
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
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
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

      <main className="max-w-[1168px] mx-auto px-5 py-16 sm:py-20">

        {/* 4 STAGES DEEP DIVE */}
        <section className="space-y-12 mb-24 max-w-5xl mx-auto">
          {[
            {
              num: "01",
              title: "Discovery & Strategic Brief",
              timeline: "Day 1–2",
              icon: PhoneCall,
              color: "text-[#FF4A1C]",
              desc: "We review your target market, competitors, branding requirements, key integrations (Stripe, WhatsApp, Calendly, CRMs), and conversion goals. We agree on an exact written specification and delivery date with a 50% milestone deposit.",
              checkpoints: [
                "Business objectives & competitor gap review",
                "Exact page inventory & copy requirements",
                "Technical stack & third-party API requirements",
                "Signed scope confirmation with fixed delivery date"
              ]
            },
            {
              num: "02",
              title: "Strategy & Information Architecture",
              timeline: "Day 2–4",
              icon: Compass,
              color: "text-sky-400",
              desc: "We establish the information architecture, UX wireframes, navigation flow, and visual moodboards. You review and approve the wireframe structure before any production code is written.",
              checkpoints: [
                "Conversion-focused wireframes & section layouts",
                "Typography scale & brand design tokens",
                "Schema.org JSON-LD structured data planning",
                "Mobile-first responsive layout validation"
              ]
            },
            {
              num: "03",
              title: "Design & Next.js Full-Stack Engineering",
              timeline: "Day 4–8",
              icon: Code2,
              color: "text-emerald-400",
              desc: "We build your bespoke website using Next.js 14/15 App Router, TypeScript, and Tailwind CSS. We host the build on a private staging link where you can test interactions, forms, and speeds in real time.",
              checkpoints: [
                "Semantic, clean, zero-bloat code architecture",
                "Fast interactive components & micro-animations",
                "Private password-protected staging URL for client testing",
                "Form validation, WhatsApp lead routing & CRM webhooks"
              ]
            },
            {
              num: "04",
              title: "Testing, Launch & Complete Handover",
              timeline: "Day 8–10",
              icon: Rocket,
              color: "text-purple-400",
              desc: "We execute full cross-browser testing, verify Core Web Vitals on mobile and desktop, configure your custom domain with SSL, submit sitemaps to Google Search Console, and hand over 100% of the repository.",
              checkpoints: [
                "Lighthouse Core Web Vitals audit & optimisation",
                "DNS record pointing, SSL encryption & CDN edge caching",
                "Google Search Console sitemap indexing request",
                "100% GitHub code handover + 14–30 days post-launch warranty"
              ]
            }
          ].map((stage) => {
            const Icon = stage.icon;
            return (
              <div key={stage.num} className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className={`w-6 h-6 ${stage.color}`} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#FF4A1C] uppercase tracking-widest block">Stage {stage.num}</span>
                      <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight">{stage.title}</h2>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-white/70 self-start">
                    {stage.timeline}
                  </span>
                </div>

                <p className="text-sm text-white/70 font-light leading-relaxed mb-6 max-w-3xl">
                  {stage.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/5">
                  {stage.checkpoints.map((cp) => (
                    <div key={cp} className="flex items-start gap-2.5 text-xs text-white/75">
                      <CheckCircle2 className="w-4 h-4 text-[#FF4A1C] shrink-0 mt-0.5" />
                      <span>{cp}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* BOTTOM GUARANTEES */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <ShieldCheck className="w-6 h-6 text-[#FF4A1C] mb-3" />
            <h3 className="text-base font-medium text-white mb-1.5">50/50 Milestone Safety</h3>
            <p className="text-xs text-white/60 font-light leading-relaxed">50% deposit to begin architecture, 50% only when staging is approved and ready for live deployment.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <GitBranch className="w-6 h-6 text-emerald-400 mb-3" />
            <h3 className="text-base font-medium text-white mb-1.5">100% Code Ownership</h3>
            <p className="text-xs text-white/60 font-light leading-relaxed">Full GitHub repository rights transferred upon final payment. No vendor lock-in or licensing fees.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <RefreshCw className="w-6 h-6 text-sky-400 mb-3" />
            <h3 className="text-base font-medium text-white mb-1.5">Post-Launch Warranty</h3>
            <p className="text-xs text-white/60 font-light leading-relaxed">14 to 30 days of direct developer bug-fix support to ensure your live website runs flawlessly.</p>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="text-center py-12 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">Have a project ready to launch?</h2>
          <p className="text-xs sm:text-sm text-white/70 mb-8 max-w-lg mx-auto font-light">
            Connect directly with senior engineer Saim on WhatsApp to review your requirements.
          </p>
          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-sm tracking-tight transition-all active:scale-95"
          >
            <span>Message on WhatsApp (+92 319 6526604)</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
