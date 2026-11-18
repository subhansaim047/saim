import { SiteFooter } from "@/components/SiteFooter";
import { RhHeader } from "@/components/rh/RhHeader";
import {
  RhConversionBanner,
  RhHeroPinned,
  RhProblemSolutionDeck,
  RhSystemRows,
} from "@/components/rh/RhModernSections";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Rocket,
  Globe,
  UserCheck,
  CheckCircle2,
  Sparkles,
  Calculator,
} from "lucide-react";
import {
  ArchitecturalDiagram,
  EngineeringMediaFigure,
  EngineeringVerificationBadge,
  TOPIC_SILOS,
  TopicSiloDefinition,
} from "@/components/ui/EditorialVisualPack";

export const metadata: Metadata = {
  title: 'About Saim Dev | Remote Next.js Studio for UK & EU',
  description: 'Learn about Saim Dev, an independent Next.js developer providing fast, fixed-price websites and digital kitchen systems for UK small businesses.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/about",
    languages: {
      "en": "https://www.saimdev.site/about",
      "en-GB": "https://www.saimdev.site/about",
      "en-US": "https://www.saimdev.site/about",
      "x-default": "https://www.saimdev.site/about",
    },
  },
  openGraph: {
    title: 'About Saim Dev | Remote Next.js Studio for UK & EU',
    description: 'Learn about Saim Dev, an independent Next.js developer providing fast, fixed-price websites and digital kitchen systems for UK small businesses.',
    url: "https://www.saimdev.site/about",
    siteName: "Saim Dev",
    locale: "en_GB",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Saim Dev - Bespoke Next.js 16 Web Engineering & Performance Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Saim Dev | Remote Next.js Studio for UK & EU',
    description: 'Learn about Saim Dev, an independent Next.js developer providing fast, fixed-price websites and digital kitchen systems for UK small businesses.',
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

const ABOUT_FAQS = [
  {
    q: "How does your free live concept preview before payment work?",
    a: "You share your business brief, reference links, or current website first. We engineer an interactive homepage concept preview in the browser so you can test the visual direction, typography, and mobile speed before paying a single penny. You only pay the 50% milestone deposit if you love the direction, with the final 50% due upon production sign-off.",
  },
  {
    q: "What industries and business types does Saim Dev engineer platforms for?",
    a: "Over the last seven years our studio has engineered high-converting platforms for service leaders and ambitious brands across the UK, US, and Europe—including dental clinics, private healthcare practices, mechanics, auto detailing studios, luxury salons, commercial contractors, headless Shopify retailers, B2B SaaS startups, and zero-commission takeaway operators.",
  },
  {
    q: "Why are your fixed prices (£250–£1,490) lower than traditional UK or US agencies?",
    a: "Traditional agencies charge £5,000–£15,000+ to fund account managers, city-centre office leases, and bloated WordPress plugin chains. With Saim Dev, you work 1-on-1 with the senior Next.js architect writing your production code remotely, keeping overhead near zero while delivering 100% GitHub repository ownership and £0 monthly retainers.",
  },
  {
    q: "Can you migrate our existing WordPress, Webflow, or Wix site to Next.js 16 without losing Google rankings?",
    a: "Yes. We audit every indexed URL from Google Search Console, implement 1-hop 301 redirect rules in Next.js edge config, preserve canonical and H1 search-intent parity, and deploy clean Schema.org @graph structured data so your organic authority carries over cleanly.",
  },
];

const INDUSTRY_VERTICALS = [
  {
    tag: "Healthcare & Aesthetics",
    title: "Dentists, Private Clinics & Luxury Wellness Spas",
    desc: "Patient treatment hubs, consultation booking flows, local SEO schema, and calm editorial authority designed to convert high-value patient enquiries.",
    proofLabel: "Inspect SERENIA Clinic Demo",
    proofHref: "/demos",
    serviceHref: "/services/business-websites",
  },
  {
    tag: "Automotive & Trades",
    title: "Mechanics, Auto Detailing Studios & Contractors",
    desc: "Instant service package estimators, ceramic coating & repair booking calendars, postcode coverage pages, and one-tap WhatsApp lead capture.",
    proofLabel: "Inspect DetailX Auto Demo",
    proofHref: "/demos",
    serviceHref: "/services/landing-pages-cro",
  },
  {
    tag: "Salons & Service Leaders",
    title: "Hair Salons, Barbershops & Local Service Brands",
    desc: "Fast mobile lookbooks, multi-staff appointment scheduling interfaces, and local Google Business Profile landing architecture with zero monthly lock-in.",
    proofLabel: "Explore Business Websites (£390)",
    proofHref: "/services/business-websites",
    serviceHref: "/services/website-development",
  },
  {
    tag: "Hospitality & Dark Kitchens",
    title: "Zero-Commission UK Takeaways & Restaurants",
    desc: "Direct online ordering websites from £250 fixed price—replacing 28%–35% delivery app fees with postcode zones, 14-allergen filters, and Stripe checkout.",
    proofLabel: "Run Free Commission Calculator",
    proofHref: "/tools/commission-savings-calculator",
    serviceHref: "/services/takeaway-web-design",
  },
  {
    tag: "Retail & D2C Brands",
    title: "Headless Shopify & Custom E-Commerce Storefronts",
    desc: "Sub-second product filtering, instant variant switching, lookbook storytelling, and high-converting Stripe or Shopify Storefront API checkout.",
    proofLabel: "Inspect HQ Leathercon Store",
    proofHref: "/demos",
    serviceHref: "/services/ecommerce-shopify",
  },
  {
    tag: "Software & AI Platforms",
    title: "B2B SaaS MVPs, Client Portals & AI Web Solutions",
    desc: "Authenticated React 19 dashboards, role-based portals, custom calculators, and AI-powered web workflows engineered in strict TypeScript.",
    proofLabel: "Explore Custom Web Apps",
    proofHref: "/services/custom-web-apps",
    serviceHref: "/nextjs-developer-uk",
  },
];

const COMPETITOR_MATRIX = [
  {
    criterion: "Pre-Commitment Risk Reversal",
    saim: "Free Live Concept Preview in browser before you pay",
    agency: "£1,500–£3,000 upfront discovery deposit before seeing UI",
    diy: "You spend 40+ hours dragging templates yourself",
    freelance: "Static screenshot or template theme install",
  },
  {
    criterion: "Upfront Cost & Monthly Retainer",
    saim: "Fixed £250–£1,490 ($300–$1,850) · £0 mandatory retainer",
    agency: "£5,000–£15,000+ build + £350–£1,200/mo retainer",
    diy: "£25–£299/mo forever + paid app & transaction add-ons",
    freelance: "Unpredictable hourly billing & scope creep",
  },
  {
    criterion: "Core Architecture & Speed",
    saim: "Next.js 16 App Router, React 19, TypeScript (Target 95–100 CWV)",
    agency: "Legacy WordPress / Elementor with 25+ third-party plugins",
    diy: "Heavy client-side builder scripts (3.5s–6.2s mobile LCP)",
    freelance: "Purchased ThemeForest template with jQuery bloat",
  },
  {
    criterion: "Source Code & IP Ownership",
    saim: "100% client GitHub repository, Vercel/Cloudflare & DNS custody",
    agency: "Agency holds hosting & charges exit/handover fees",
    diy: "0% code export — site disappears if subscription stops",
    freelance: "Often undocumented or locked to developer account",
  },
  {
    criterion: "Who Engineers Your Platform",
    saim: "Direct 1-on-1 access to Founder & Lead Next.js Architect",
    agency: "Sold by senior partner, handed off to junior staff",
    diy: "Generic ticket support chatbot",
    freelance: "Variable code quality with zero CI guardrails",
  },
  {
    criterion: "Technical SEO & AI Pickup (GEO)",
    saim: "Built-in Schema.org @graph, Speakable, llms.txt & topic silos",
    agency: "Basic Yoast plugin setup sold as an extra £1,000 add-on",
    diy: "Flat URL structure with limited schema control",
    freelance: "Rarely includes structured entity graphs or redirect audits",
  },
];

export default function AboutPage() {
  const aboutGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://www.saimdev.site/about#profilepage",
        "url": "https://www.saimdev.site/about",
        "name": "About Saim Dev | Bespoke Next.js Web Engineering Studio for UK, US & EU",
        "description":
          "Saim Dev is a bespoke web engineering studio specializing in custom business websites, high-converting landing pages, SEO-engineered Next.js development, performance optimization, headless Shopify, and zero-commission takeaway ordering systems.",
        "isPartOf": { "@id": "https://www.saimdev.site/#website" },
        "mainEntity": { "@id": "https://www.saimdev.site/#person" },
        "about": { "@id": "https://www.saimdev.site/#organization" },
        "breadcrumb": { "@id": "https://www.saimdev.site/about#breadcrumb" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#manifesto-heading", "#founder-brief-heading", "#ai-entity-summary"],
        },
        "inLanguage": ["en-GB", "en-US"],
      },
      {
        "@type": "Person",
        "@id": "https://www.saimdev.site/#person",
        "name": "Saim Dev",
        "jobTitle": "Founder & Lead Next.js Architect",
        "worksFor": { "@id": "https://www.saimdev.site/#organization" },
        "url": "https://www.saimdev.site/about",
        "image": "https://www.saimdev.site/saim-dev-logo.jpg",
        "description":
          "Founder and principal Next.js 16 architect building fixed-price, high-converting websites, headless Shopify storefronts, and zero-commission takeaway ordering platforms with a free live concept preview before payment.",
        "knowsAbout": [
          "Next.js 16 App Router",
          "React 19 & TypeScript Web Engineering",
          "Bespoke Web Design & Lead Conversion (CRO)",
          "Technical SEO, Topic Silos & Schema.org @graph",
          "Core Web Vitals & Website Speed Optimization",
          "Headless Shopify Storefront API",
          "Commission-Free Takeaway Ordering Systems",
          "AI-Powered Web Solutions & Interactive ROI Calculators",
        ],
        "sameAs": [
          "https://github.com/subhansaim047",
          "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER",
          "https://x.com/saimwebdev",
          "https://www.instagram.com/saim_agency/",
          "https://saimswebagency.quora.com/",
          "https://www.tiktok.com/@saimdev.site",
          "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.saimdev.site/about#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.saimdev.site/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://www.saimdev.site/about",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.saimdev.site/about#faq",
        "isPartOf": { "@id": "https://www.saimdev.site/about#profilepage" },
        "mainEntity": ABOUT_FAQS.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutGraphSchema) }}
      />
      <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
        <RhHeader theme="dark" />

        <main>
          <RhHeroPinned
            badge="UK, US & European Next.js Studio · Direct Engineering"
            breadcrumb={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
            title={
              <>
                About Saim Dev{" "}
                <span className="text-[#939393]">Engineering Studio</span>
              </>
            }
            subtitle="Saim Dev is a bespoke web engineering studio specializing in custom business websites, high-converting landing pages, SEO-friendly Next.js 16 development, performance optimization, headless Shopify, zero-commission takeaway ordering, and AI-ready web solutions — with a free live preview before you pay."
            primaryCta={{ label: "Request Free Live Preview", href: "/contact" }}
            secondaryCta={{ label: "Explore 15+ Live Demos", href: "/demos" }}
            videoType="cube"
            stripLabel="Direct founder engineering · UK, US & EU"
            stripItems={[
              {
                label: "Free Live Preview",
                tag: "Risk Reversal",
                tagValue: "Try Before Pay",
                summary: "We build a live interactive concept preview first; you only proceed if you like the direction.",
                href: "/contact",
              },
              {
                label: "Fixed GBP & USD",
                tag: "Transparency",
                tagValue: "From £250 / $300",
                summary: "Written project deliverables with 50/50 milestone terms and £0 monthly retainer.",
                href: "/pricing",
              },
              {
                label: "GitHub IP Handover",
                tag: "Ownership",
                tagValue: "100% Owned",
                summary: "Receive the full GitHub repository and deploy cleanly to your own cloud account.",
                href: "/technologies",
              },
              {
                label: "Interactive Demo Hub",
                tag: "Verification",
                tagValue: "15+ Live Builds",
                summary: "Inspect responsive speed across retail, dental, auto, salon, and takeaway platforms.",
                href: "/demos",
              },
              {
                label: "Commission Calculator",
                tag: "Free ROI Tool",
                tagValue: "0% Fee Audit",
                summary: "Calculate exact monthly delivery-app commission savings vs a £250 direct ordering website.",
                href: "/tools/commission-savings-calculator",
              },
            ]}
          />

          {/* ================================================================
              01 — ARCHITECTURAL MANIFESTO & 7-YEAR TRACK RECORD (Dark #0D0D0D)
          ================================================================= */}
          <section
            id="manifesto"
            data-nav="dark"
            className="relative z-10 bg-[#0D0D0D] text-white py-20 sm:py-28 px-5 border-t border-b border-[#202020]"
          >
            <div className="max-w-[1168px] mx-auto space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-8 space-y-6">
                  <span className="inline-flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-[0.24em] text-[#BAFF00] bg-white/[0.05] border border-white/10 px-3.5 py-1.5 rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>01 / ARCHITECTURAL MANIFESTO &amp; STUDIO IDENTITY</span>
                  </span>

                  <h2
                    id="manifesto-heading"
                    className="text-[32px] sm:text-[46px] lg:text-[54px] font-medium tracking-[-0.04em] leading-[1.06] text-white"
                  >
                    We are web architects, engineering{" "}
                    <span className="text-[#BAFF00]">high-converting platforms</span>.{" "}
                    <span className="text-[#939393]">
                      Specialized in bespoke web design, lead conversion, and performance optimization.
                    </span>
                  </h2>

                  <p className="text-[17px] sm:text-[19px] text-white/85 leading-[1.65]">
                    Over the last seven years, our studio has engineered fast, modern, high-converting digital platforms for service leaders and ambitious brands across the UK, US, and Europe — dentists, mechanics, auto detailing studios, salons, contractors, private clinics, headless Shopify retailers, and zero-commission hospitality operators. Together, we craft digital platforms designed to rank on Google, load almost instantly, and turn visitors into loyal, paying clients.
                  </p>

                  <p
                    id="ai-entity-summary"
                    className="text-[15px] sm:text-[16px] text-[#A1A1AA] leading-[1.65] p-5 rounded-2xl bg-white/[0.03] border border-white/10"
                  >
                    <strong className="text-white">Entity Definition: </strong>
                    Saim Dev is a bespoke web engineering studio specializing in custom business websites, high-converting landing pages, SEO-friendly Next.js 16 development, Core Web Vitals performance optimization, headless Shopify storefronts, commission-free takeaway ordering systems, and AI-powered web solutions.
                  </p>
                </div>

                {/* Structured AI & Search Engine Knowledge Graph Box (<dl>) */}
                <aside
                  aria-label="Saim Dev Structured Studio Facts for Search and AI Engines"
                  className="lg:col-span-4 rounded-3xl bg-[#141417] border border-white/15 p-6 sm:p-7 space-y-4"
                >
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00]">
                      AI &amp; Search Entity Profile
                    </span>
                    <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[#BAFF00] text-[#0D0D0D] font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <dl className="space-y-3 text-xs leading-relaxed">
                    <div className="pb-2.5 border-b border-white/10">
                      <dt className="font-mono-tech uppercase text-[10px] text-white/55">Studio &amp; Lead Architect</dt>
                      <dd className="text-white font-medium mt-0.5">Saim Dev — Senior-Led Next.js 16 Studio</dd>
                    </div>
                    <div className="pb-2.5 border-b border-white/10">
                      <dt className="font-mono-tech uppercase text-[10px] text-white/55">Track Record &amp; Markets</dt>
                      <dd className="text-white font-medium mt-0.5">7+ Years · UK, United States &amp; Europe</dd>
                    </div>
                    <div className="pb-2.5 border-b border-white/10">
                      <dt className="font-mono-tech uppercase text-[10px] text-white/55">Signature Risk Reversal</dt>
                      <dd className="text-[#BAFF00] font-semibold mt-0.5">Free Live Concept Preview Before You Pay</dd>
                    </div>
                    <div className="pb-2.5 border-b border-white/10">
                      <dt className="font-mono-tech uppercase text-[10px] text-white/55">Fixed Pricing &amp; Retainers</dt>
                      <dd className="text-white font-mono-tech mt-0.5">From £250 ($300) · £0/mo Retainer · 50/50 Milestones</dd>
                    </div>
                    <div className="pb-2.5 border-b border-white/10">
                      <dt className="font-mono-tech uppercase text-[10px] text-white/55">Code &amp; Hosting Custody</dt>
                      <dd className="text-white font-medium mt-0.5">100% Client GitHub Repo + Vercel/Cloudflare Edge</dd>
                    </div>
                    <div>
                      <dt className="font-mono-tech uppercase text-[10px] text-white/55">Free Public ROI Utility</dt>
                      <dd className="mt-1">
                        <Link
                          href="/tools/commission-savings-calculator"
                          className="text-[#BAFF00] underline hover:text-white transition-colors font-medium"
                        >
                          Takeaway Commission Savings Calculator →
                        </Link>
                      </dd>
                    </div>
                  </dl>
                </aside>
              </div>

              {/* 6 Service Leader & Brand Verticals Grid */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] block mb-2">
                      INDUSTRIES &amp; SERVICE LEADERS WE ENGINEER
                    </span>
                    <h3 className="text-[26px] sm:text-[34px] font-medium tracking-[-0.03em] text-white">
                      Built for high-intent service leaders, retail brands &amp; SaaS teams
                    </h3>
                  </div>
                  <Link
                    href="/demos"
                    className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[#BAFF00] hover:underline shrink-0"
                  >
                    <span>Test All 15+ Interactive Reference Builds</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {INDUSTRY_VERTICALS.map((v) => (
                    <div
                      key={v.title}
                      className="rh-edge-orbit-card rounded-3xl bg-[#141417] border border-white/10 p-7 flex flex-col justify-between gap-6 hover:border-[#BAFF00]/60 transition-colors"
                    >
                      <div>
                        <span className="text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] bg-black/50 border border-white/10 px-2.5 py-1 rounded-full inline-block mb-4">
                          {v.tag}
                        </span>
                        <h4 className="text-[20px] font-medium tracking-[-0.02em] text-white mb-2.5 leading-snug">
                          {v.title}
                        </h4>
                        <p className="text-[14px] text-[#A1A1AA] leading-[1.6]">
                          {v.desc}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <Link
                          href={v.serviceHref}
                          className="text-white font-medium hover:text-[#BAFF00] transition-colors"
                        >
                          Service Specs →
                        </Link>
                        <Link
                          href={v.proofHref}
                          className="text-[#BAFF00] font-mono-tech hover:underline"
                        >
                          {v.proofLabel}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================
              02 — THE DIRECT FOUNDER BRIEF: OUR UNFAIR ADVANTAGE (#F5F5F7)
          ================================================================= */}
          <section
            id="founder-brief"
            className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-28 px-5 border-b border-[#E6E6E6]"
          >
            <div className="max-w-[1168px] mx-auto space-y-16">
              {/* Direct Founder Pitch Card + Remote Partnership Bento */}
              <div data-gsap-stagger="" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-7 rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 sm:p-10 flex flex-col justify-between gap-8 rounded-3xl">
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6E6E6]">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border border-black/15 bg-white shrink-0">
                          <img
                            src="/saim-dev-logo.jpg"
                            alt="Saim Dev — Founder & Lead Next.js 16 Web Architect for UK, US & EU Businesses"
                            width={120}
                            height={120}
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-[22px] font-medium tracking-[-0.03em] text-[#0D0D0D]">
                            Saim Dev
                          </p>
                          <p className="text-[12px] font-mono-tech uppercase tracking-wider text-[#595959]">
                            Founder &amp; Lead Next.js Architect · Direct Brief
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider bg-[#0D0D0D] text-[#BAFF00] px-3.5 py-1.5 rounded-full self-start sm:self-center shrink-0">
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Direct 1-on-1 Build</span>
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#595959] block mb-2">
                        02 / THE FOUNDER&apos;S DIRECT BRIEF · WHY WE WIN
                      </span>
                      <h2
                        id="founder-brief-heading"
                        className="text-[26px] sm:text-[34px] font-medium tracking-[-0.035em] leading-[1.12] text-[#0D0D0D]"
                      >
                        We build fixed-price Next.js sites for small businesses — with a free live preview before you pay.
                      </h2>
                    </div>

                    <p className="text-[15px] text-[#333333] leading-[1.68]">
                      We run a focused web engineering studio (<strong className="text-[#0D0D0D]">Saim Dev</strong>) and build Next.js 16 sites for small and mid-sized businesses across the UK, US, and Europe: custom business websites, high-converting landing pages, headless Shopify stores, and zero-commission takeaway ordering systems.
                    </p>

                    <div className="p-5 rounded-2xl bg-[#F5F5F7] border border-[#E6E6E6] space-y-3">
                      <p className="text-xs font-mono-tech uppercase tracking-wider font-semibold text-[#0D0D0D]">
                        Four Things Our Studio Does Differently (Our Unfair Advantage):
                      </p>
                      <ul className="space-y-2.5 text-[14px] text-[#222222] leading-[1.55]">
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0 mt-0.5" />
                          <span>
                            <strong>Fixed prices &amp; no monthly retainer:</strong> High-converting landing pages and takeaway ordering platforms start at <strong>£250 ($300 USD)</strong>, multi-page business websites at <strong>£390 ($500 USD)</strong>, and flagship builds at <strong>£790 ($999 USD)</strong>.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0 mt-0.5" />
                          <span>
                            <strong>We build a live preview first:</strong> You test a working interactive concept in your browser before committing, and you only move forward with the 50% milestone deposit if you like the direction.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0 mt-0.5" />
                          <span>
                            <strong>You get the full GitHub repo &amp; own the code:</strong> 100% clean Next.js 16, React 19, and TypeScript source handed directly to your team with zero proprietary lock-in.
                          </span>
                        </li>
                        <li className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0D0D0D] shrink-0 mt-0.5" />
                          <span>
                            <strong>Free public engineering tools upfront:</strong> We built a free{" "}
                            <Link
                              href="/tools/commission-savings-calculator"
                              className="underline font-semibold hover:text-black"
                            >
                              Takeaway Commission Savings Calculator
                            </Link>{" "}
                            for takeaway owners who want to see exactly what 30% delivery apps cost them every year.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-[14px] text-[#595959] leading-[1.6]">
                      If you have questions about Next.js 16, Core Web Vitals site speed, or moving off WordPress/Webflow without losing Google rankings, message us directly and we will audit your current setup within 24 hours.
                    </p>
                  </div>

                  {/* Verified Social & Professional Profiles (sameAs links) */}
                  <div className="pt-6 border-t border-[#E6E6E6]">
                    <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#595959] block mb-3">
                      Verified Profiles &amp; Public Code Repositories
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {[
                        { label: "GitHub: subhansaim047", href: "https://github.com/subhansaim047" },
                        { label: "Contra: SAIMDEVELOPER", href: "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER" },
                        { label: "X: @saimwebdev", href: "https://x.com/saimwebdev" },
                        { label: "Instagram: @saim_agency", href: "https://www.instagram.com/saim_agency/" },
                        { label: "Quora: Saim Agency", href: "https://saimswebagency.quora.com/" },
                        { label: "TikTok: @saimdev.site", href: "https://www.tiktok.com/@saimdev.site" },
                        {
                          label: "Threads: @saimdev.site",
                          href: "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog",
                        },
                      ].map((ch) => (
                        <a
                          key={ch.label}
                          href={ch.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#F5F5F7] border border-[#E6E6E6] text-[#0D0D0D] font-medium hover:bg-[#0D0D0D] hover:text-[#BAFF00] hover:border-[#0D0D0D] transition-colors"
                        >
                          {ch.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Dark Bento Column */}
                <div className="lg:col-span-5 rh-edge-orbit-card is-lime bg-[#0D0D0D] text-white border border-[#202020] p-8 sm:p-10 flex flex-col justify-between gap-8 rounded-3xl">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] block mb-3">
                        TRANSPARENT 50/50 MILESTONE PROTOCOL
                      </span>
                      <h3 className="text-[26px] font-medium tracking-[-0.03em] leading-[1.15] text-white mb-4">
                        Zero agency middlemen. See your live concept before committing.
                      </h3>
                      <p className="text-[14px] text-[#939393] leading-[1.6]">
                        Operating remotely with direct WhatsApp, Loom, and Google Meet communication keeps studio overhead near zero — passing enterprise Next.js 16 engineering straight to your business from £250.
                      </p>
                    </div>

                    <div className="space-y-3 text-[13px] text-white/85">
                      {[
                        {
                          step: "STEP 01",
                          title: "Free Live Concept Preview",
                          detail: "We prototype your homepage direction in the browser before any deposit.",
                        },
                        {
                          step: "STEP 02",
                          title: "Fixed Written Scope & 50% Start",
                          detail: "Exact route list, schema @graph, and GBP/USD price locked in writing.",
                        },
                        {
                          step: "STEP 03",
                          title: "Staging Verification on Your Phone",
                          detail: "Test mobile speed, forms, and checkout live on our edge staging link.",
                        },
                        {
                          step: "STEP 04",
                          title: "Final 50% & Full GitHub Handover",
                          detail: "Complete source repository, custom domain DNS, and 30-day warranty.",
                        },
                      ].map((item) => (
                        <div
                          key={item.step}
                          className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1"
                        >
                          <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#BAFF00]">
                            <span>{item.step}</span>
                            <span>VERIFIED GATE</span>
                          </div>
                          <p className="text-sm font-semibold text-white">{item.title}</p>
                          <p className="text-xs text-white/70 leading-relaxed">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] block mb-2">
                      FREE HOSPITALITY ROI UTILITY
                    </span>
                    <p className="text-[13px] text-[#B3B3B3] leading-[1.55] mb-4">
                      Run our live Takeaway Commission Savings Calculator or inspect our 5-star UK Food Hygiene &amp; Natasha&apos;s Law compliance guides.
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      <Link
                        href="/tools/commission-savings-calculator"
                        className="inline-flex items-center gap-2 text-xs font-semibold bg-[#BAFF00] text-[#0D0D0D] px-4 py-2.5 rounded-full hover:brightness-95 transition-all"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        <span>Run Commission Calculator</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/pricing"
                        className="inline-flex items-center gap-2 text-xs font-medium bg-white/[0.06] border border-white/15 text-white px-4 py-2.5 rounded-full hover:border-[#BAFF00] hover:text-[#BAFF00] transition-all"
                      >
                        <span>Compare Fixed Packages</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================================================
                  03 — COMPETITOR COMPARISON MATRIX (Why Saim Dev Beats Agencies & Builders)
              ============================================================= */}
              <div className="space-y-6">
                <div className="max-w-3xl">
                  <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#595959] block mb-2">
                    03 / COMPETITIVE BENCHMARK MATRIX
                  </span>
                  <h2 className="text-[30px] sm:text-[42px] font-medium tracking-[-0.04em] leading-[1.08] text-[#0D0D0D]">
                    How Saim Dev Beats Traditional Agencies, DIY Builders &amp; Freelance Marketplaces
                  </h2>
                  <p className="text-[15px] text-[#595959] leading-[1.6] mt-3">
                    Compare upfront risk, 24-month cost of ownership, mobile Core Web Vitals, and code custody side-by-side before choosing a web partner.
                  </p>
                </div>

                <div className="rounded-3xl border border-[#E6E6E6] bg-white overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[760px]">
                      <thead>
                        <tr className="bg-[#0D0D0D] text-white text-[11px] font-mono-tech uppercase tracking-wider">
                          <th className="py-4 px-5">Evaluation Criterion</th>
                          <th className="py-4 px-5 text-[#BAFF00]">Saim Dev (Next.js 16 Studio)</th>
                          <th className="py-4 px-5 text-white/75">Traditional Web Agency</th>
                          <th className="py-4 px-5 text-white/75">DIY SaaS Builder (Wix/Squarespace)</th>
                          <th className="py-4 px-5 text-white/75">Template Freelancer</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E6E6E6] text-xs sm:text-sm">
                        {COMPETITOR_MATRIX.map((row) => (
                          <tr key={row.criterion} className="hover:bg-[#FAFAFC] transition-colors">
                            <td className="py-4 px-5 font-semibold text-[#0D0D0D]">
                              {row.criterion}
                            </td>
                            <td className="py-4 px-5 font-semibold text-[#0D0D0D] bg-[#F6FCEB]">
                              <span className="inline-flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{row.saim}</span>
                              </span>
                            </td>
                            <td className="py-4 px-5 text-[#595959]">{row.agency}</td>
                            <td className="py-4 px-5 text-[#595959]">{row.diy}</td>
                            <td className="py-4 px-5 text-[#595959]">{row.freelance}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <ArchitecturalDiagram kind="tco" theme="light" />

              {/* Engineering Approach 3-Col */}
              <div>
                <div data-gsap-reveal="" className="max-w-[720px] mb-10">
                  <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#595959] mb-3">
                    04 / ENGINEERING PHILOSOPHY
                  </div>
                  <h2 className="text-[32px] sm:text-[42px] font-medium tracking-[-0.04em] leading-[1.08] text-[#0D0D0D]">
                    Our Approach to Web Engineering
                  </h2>
                </div>

                <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    {
                      icon: Code2,
                      title: "Modern Next.js 16 Architecture",
                      desc: "Next.js 16 App Router, React 19 Server Components, strict TypeScript, and Tailwind CSS with zero legacy CMS plugin bloat.",
                    },
                    {
                      icon: Rocket,
                      title: "Core Web Vitals & AI Search Ready",
                      desc: "We tune routes for sub-second mobile delivery across 4G/5G networks targeting 95+ Lighthouse scores alongside Schema.org @graph and llms.txt.",
                    },
                    {
                      icon: Globe,
                      title: "UK, US & European Sectors",
                      desc: "Tailored digital platforms for service leaders (dentists, mechanics, salons, contractors), Shopify merchants, SaaS teams, and UK takeaways.",
                    },
                  ].map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        className="rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 hover:border-[#0D0D0D] transition-colors flex flex-col justify-between min-h-[210px] rounded-2xl"
                      >
                        <span className="w-10 h-10 rounded-full bg-[#0D0D0D] text-[#BAFF00] flex items-center justify-center mb-6">
                          <Icon className="w-5 h-5" />
                        </span>
                        <div>
                          <h3 className="text-[20px] font-medium tracking-[-0.02em] text-[#0D0D0D] mb-2">
                            {pillar.title}
                          </h3>
                          <p className="text-[14px] text-[#595959] leading-[1.6]">{pillar.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <EngineeringMediaFigure
                src="/images/guides/senior-engineering-workspace.webp"
                alt="Saim Dev Next.js 16 web engineering studio workspace showing Core Web Vitals and TypeScript architecture telemetry"
                caption="Inside Saim Dev: direct senior-led engineering focusing on strict TypeScript, fast edge routing, and 100% client GitHub custody across UK, US, and European launches."
                tag="Studio Environment"
                theme="light"
              />

              {/* ============================================================
                  05 — COMPLETE 4-SILO TOPIC ARCHITECTURE DIRECTORY
              ============================================================= */}
              <div id="silo-architecture" className="space-y-6">
                <div className="max-w-3xl">
                  <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#595959] block mb-2">
                    05 / COMPLETE STUDIO TOPIC SILO ARCHITECTURE
                  </span>
                  <h2 className="text-[30px] sm:text-[40px] font-medium tracking-[-0.035em] leading-[1.1] text-[#0D0D0D]">
                    Explore Our 4 Core Engineering Pillars, Subtopics &amp; Technical Guides
                  </h2>
                  <p className="text-[15px] text-[#595959] leading-[1.6] mt-2">
                    Every Saim Dev service, regional city hub, interactive calculator, and engineering guide is organized into four connected topic silos for effortless navigation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {(Object.values(TOPIC_SILOS) as TopicSiloDefinition[]).map((silo) => (
                    <div
                      key={silo.id}
                      className="rounded-3xl bg-white border border-[#E6E6E6] p-7 flex flex-col justify-between gap-6"
                    >
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[10px] font-mono-tech uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#0D0D0D] text-[#BAFF00] font-semibold">
                            {silo.code}
                          </span>
                          <span className="text-xs font-mono-tech font-semibold text-[#595959]">
                            {silo.pillar.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-[#0D0D0D]">
                          <Link href={silo.pillar.href} className="hover:underline">
                            {silo.name}
                          </Link>
                        </h3>
                        <p className="text-xs text-[#595959] leading-relaxed">
                          {silo.aiSummary}
                        </p>

                        <div className="pt-3 border-t border-[#E6E6E6]">
                          <p className="text-[10px] font-mono-tech uppercase tracking-wider text-[#595959] mb-2">
                            Subtopic Services &amp; Hubs:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {silo.subtopics.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="text-xs px-2.5 py-1 rounded-lg bg-[#F5F5F7] border border-[#E6E6E6] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-[#BAFF00] transition-colors"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-[#E6E6E6]">
                          <p className="text-[10px] font-mono-tech uppercase tracking-wider text-[#595959] mb-2">
                            Cluster Guides &amp; Interactive Tools:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {silo.resources.map((res) => (
                              <Link
                                key={res.href}
                                href={res.href}
                                className="text-xs px-2.5 py-1 rounded-lg bg-[#F5F5F7] border border-[#E6E6E6] text-[#333333] hover:border-[#0D0D0D] transition-colors"
                              >
                                {res.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link
                        href={silo.pillar.href}
                        className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#0D0D0D] text-white text-xs font-semibold hover:bg-[#BAFF00] hover:text-[#0D0D0D] transition-colors"
                      >
                        <span>Open {silo.pillar.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <EngineeringVerificationBadge
                contextLabel="Every Saim Dev build and interactive tool distinguishes clearly between concept demos and production client launches"
                theme="light"
              />
            </div>
          </section>

          <RhProblemSolutionDeck
            overline="06 / WHY INDEPENDENT NEXT.JS ENGINEERING WINS"
            titleBefore="Direct senior craft without"
            titleStrike="agency overhead"
            titleOwned="or retainers."
            subtitle="Traditional agencies charge £3,000–£15,000+ to fund account managers and slow CMS themes. Working directly with Saim Dev delivers target 95+ Core Web Vitals, full code IP, and fixed pricing from £250."
            solutionTitle="Founder-Built Code You Own Forever"
            solutionDesc="Every line of React, Next.js 16, and Tailwind CSS is authored cleanly, verified on a live staging link under 50/50 milestones, and transferred straight to your GitHub."
            chartBadge="Studio Model"
          />

          <RhSystemRows
            overline="07 / STUDIO PRINCIPLES"
            title="How we operate"
            titleMuted="with UK, US & EU founders"
            rows={[
              {
                num: "01",
                title: "Free Live Concept Preview Before Deposit",
                description:
                  "Inspect your interactive homepage concept in a real browser first — you only pay the 50% milestone deposit if you approve the direction.",
                tags: ["Risk-Free Preview", "50/50 Milestones"],
                href: "/contact",
              },
              {
                num: "02",
                title: "Direct 1-on-1 Lead Architect Access",
                description:
                  "Communicate straight with Saim on WhatsApp and Loom aligned with UK, US, and European business hours — zero sales middlemen.",
                tags: ["Direct WhatsApp", "24h Written Quote"],
                href: "/process",
              },
              {
                num: "03",
                title: "100% GitHub Source & Cloud Ownership",
                description:
                  "Complete repository, production Next.js 16 source, and Vercel/Cloudflare edge deployment handed directly to your team with £0 monthly retainer.",
                tags: ["Zero Lock-In", "Clean TypeScript"],
                href: "/technologies",
              },
              {
                num: "04",
                title: "15+ Live Reference Demos & Free ROI Calculators",
                description:
                  "Test our interactive industry builds and free Takeaway Commission Savings Calculator before starting your project.",
                tags: ["Live Concepts", "0% Fee Calculator"],
                href: "/demos",
              },
            ]}
          />

          {/* ================================================================
              08 — STUDIO FAQ ACCORDION (Dark #0D0D0D)
          ================================================================= */}
          <section
            data-nav="dark"
            className="relative z-10 bg-[#0D0D0D] text-white py-20 sm:py-24 px-5 border-t border-[#202020]"
          >
            <div className="max-w-[1168px] mx-auto space-y-10">
              <div className="max-w-2xl">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] block mb-2">
                  08 / DIRECT STUDIO FAQ
                </span>
                <h2 className="text-[30px] sm:text-[42px] font-medium tracking-[-0.035em] text-white">
                  Questions About Working With Saim Dev
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {ABOUT_FAQS.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-2xl bg-[#141417] border border-white/10 p-6 space-y-2.5"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <RhConversionBanner
            overline="09 / WORK DIRECTLY WITH THE ENGINEER"
            title="Ready to see your free"
            titleMuted="live concept preview?"
            description="Connect directly with Saim on WhatsApp or via our project form to request your Free Live Concept Preview, fixed milestone quote, and 5–10 day build schedule."
            primaryLabel="Message Saim on WhatsApp"
            secondaryLabel="View Fixed Pricing Tiers"
            secondaryHref="/pricing"
          />
        </main>

        <SiteFooter theme="dark" />
      </div>
    </>
  );
}
