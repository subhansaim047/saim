import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Code2, Cpu, FileCheck2, Gauge, Plus, ShieldCheck, Wrench } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { RhHeader } from "@/components/rh/RhHeader";
import {
  RhBentoWorkGrid,
  RhHeroPinned,
  RhOdometerNumber,
  RhProblemSolutionDeck,
  RhProcessCarousel,
  RhSystemRows,
} from "@/components/rh/RhModernSections";

const ProjectScopeEstimator = dynamic(
  () =>
    import("@/components/ProjectScopeEstimator").then(
      (m) => m.ProjectScopeEstimator
    ),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Full Studio Overview, Specs & Cost Estimator | Saim Dev",
  description:
    "Explore Saim Dev's complete engineering breakdown, interactive project scope cost estimator, live demos, architecture comparison, and full FAQ.",
  alternates: {
    canonical: "https://www.saimdev.site/overview",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const QUICK_JUMP_LINKS = [
  { href: "#estimator", label: "Interactive Cost Estimator" },
  { href: "#our-story", label: "Studio & Metrics" },
  { href: "#services", label: "Services Breakdown" },
  { href: "#demos", label: "Live Demos" },
  { href: "#benefits", label: "Why Custom Code" },
  { href: "#comparison", label: "Platform Comparison" },
  { href: "#performance", label: "Speed & SEO" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#process", label: "4-Step Process" },
  { href: "#pricing", label: "Full Pricing Plans" },
  { href: "#tools", label: "Free UK Tools" },
  { href: "#faq", label: "Detailed FAQ" },
  { href: "#contact", label: "Direct Contact" },
];

const OVERVIEW_FAQS = [
  {
    q: "How does the $0 upfront guarantee work?",
    a: "For every new project we design and engineer the interactive staging build first. You test speed, layout, forms, and mobile responsiveness on a private staging URL before paying the final launch invoice.",
  },
  {
    q: "Are there any monthly agency retainers or hidden hosting fees?",
    a: "Zero monthly retainers. You pay a transparent fixed one-off fee from £250, receive 100% of the custom Next.js GitHub repository, and deploy cleanly to Vercel or Cloudflare Pages with zero recurring maintenance lock-in.",
  },
  {
    q: "How fast can Saim Dev launch a custom business or takeaway website?",
    a: "High-converting landing pages and direct takeaway menus launch in 3 to 5 business days. Multi-page company websites ship within 5 to 10 days with full JSON-LD schema and Core Web Vitals QA.",
  },
  {
    q: "Why custom Next.js instead of WordPress, Wix, or Shopify templates?",
    a: "Page builders ship megabytes of unused scripts and vulnerable plugins, stalling mobile buyers. Next.js 16 edge architecture eliminates plugin bloat, delivers sub-second loads (99+ Lighthouse), and puts full IP ownership in your hands.",
  },
  {
    q: "What post-launch warranty is included with every package?",
    a: "Every production handover includes 14 to 30 days of direct engineer bug warranty via WhatsApp, DNS cutover configuration, XML sitemap indexing, and team walkthrough documentation.",
  },
];

export default function StudioOverviewPage() {
  return (
    <div className="rh-page min-h-screen flex flex-col bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D] overflow-x-hidden">
      <RhHeader theme="dark" />

      <RhHeroPinned
        badge="Detailed Engineering Specs & Scope Calculator"
        title={
          <>
            Full Studio Overview{" "}
            <span className="text-[#939393]">&amp; Cost Estimator</span>
          </>
        }
        subtitle="Complete technical specifications, interactive project scope cost estimator, architecture comparisons, and full deliverables for every Saim Dev service."
        primaryCta={{ label: "Estimate Project Scope", href: "#estimator" }}
        secondaryCta={{ label: "Back to Minimal Homepage", href: "/" }}
        videoType="cube"
        stripLabel="Full Architecture · Fixed-Price Engineering"
      />

      {/* Sticky Quick-Jump Directory Strip */}
      <div className="bg-black border-b border-[#1D1D1D] py-4 px-5">
        <div className="max-w-[1168px] mx-auto">
          <nav
            aria-label="Detailed sections navigation"
            className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar"
          >
            {QUICK_JUMP_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[12px] font-mono-tech bg-[#0D0D0D] hover:bg-[#BAFF00] hover:text-[#0D0D0D] text-[#D1D1D6] border border-[#222222] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main className="flex-grow">
        {/* 1. Interactive Scope Estimator */}
        <div className="scroll-mt-24">
          <ProjectScopeEstimator />
        </div>

        {/* 2. Studio Diagnostic & Platform Comparison (Light RH Band) */}
        <div id="our-story" className="scroll-mt-24 relative">
          <div id="comparison" className="scroll-mt-24" />
          <RhProblemSolutionDeck
            overline="STUDIO ARCHITECTURE & COMPARISON"
            titleBefore="Legacy templates stall mobile growth —"
            titleStrike="bloated retainers"
            titleOwned="own custom Next.js code."
            subtitle="Compare slow database-heavy themes against pre-rendered TypeScript & Next.js edge code engineered for speed and conversion."
            solutionTitle="Built once. Owned 100% by your business."
            solutionDesc="From £250 direct takeaway menus to multi-page UK service flagships and bespoke SaaS web apps, every line of code compiles down to instant static & edge routes."
          />
        </div>

        {/* 3. Interactive Deliverables Matrix (White RH Rows Band) */}
        <div id="services" className="scroll-mt-24 border-t border-[#E6E6E6]">
          <RhSystemRows
            overline="FULL SERVICE BREAKDOWN"
            title="Every architecture deliverable"
            titleMuted="at fixed transparent pricing."
            subtitle="Select any engineering track below to inspect full page scope, schema deliverables, and live staging timelines."
            rows={[
              {
                num: "01",
                title: "Commission-Free Takeaway Ordering (£250)",
                description:
                  "Replace 30% Just Eat & Deliveroo commissions with direct WhatsApp or card checkout menus plus interactive Natasha's Law 14-allergen filtering.",
                tags: ["0% Commission", "14 Allergens", "3–5 Days"],
                href: "/services/takeaway-web-design",
              },
              {
                num: "02",
                title: "Custom Next.js Company Flagship (£450)",
                description:
                  "Replace bloated WordPress & Wix sites with hand-coded responsive TypeScript systems achieving 99+ Lighthouse performance and full source ownership.",
                tags: ["No Retainers", "99+ Speed", "Schema.org SEO"],
                href: "/services/website-development",
              },
              {
                num: "03",
                title: "Headless eCommerce & Custom Web Apps (£750–£1,250)",
                description:
                  "Bespoke Stripe storefronts, booking portals, and internal dashboards engineered without recurring Shopify app charges or per-seat SaaS tax.",
                tags: ["Stripe API", "Zero App Fees", "Full IP Rights"],
                href: "/services/custom-web-apps",
              },
              {
                num: "04",
                title: "SEO Redesign & Core Web Vitals Rescue (£199–£299)",
                description:
                  "Upgrade ageing websites without losing rankings via strict 301 redirect mapping, AVIF asset compression, and verified sub-second LCP scores.",
                tags: ["301 Map Safe", "Sub-0.8s LCP", "CRO Focus"],
                href: "/services/website-redesign",
              },
            ]}
          />
        </div>

        {/* 4. Live Showcase & Proof Grid (Dark Bento Band) */}
        <div id="demos" className="scroll-mt-24">
          <RhBentoWorkGrid
            overline="LIVE DEMOS & PRODUCTION SYSTEMS"
            title="Verified client results"
            titleMuted="& interactive showcases."
            items={[
              {
                id: "takeaway-demo",
                category: "HOSPITALITY TECH",
                title: "Zero-Commission Takeaway Platform",
                description:
                  "Interactive 14-allergen filtering menu with WhatsApp kitchen dispatch eliminating 30%+ portal cuts.",
                href: "/demos",
                metric: "0% portal cut",
                tags: ["Next.js", "WhatsApp", "Natasha's Law"],
              },
              {
                id: "uk-cases",
                category: "UK CASE STUDIES",
                title: "Next.js Conversion Rebuilds",
                description:
                  "Verified traffic, Core Web Vitals, and patient/lead conversion jumps across UK dental & service sites.",
                href: "/case-studies",
                metric: "+185% leads",
                tags: ["Case Study", "99+ CWV", "Schema"],
              },
              {
                id: "food-safety-tools",
                category: "FREE COMPLIANCE TOOLS",
                title: "Allergen Matrix & SFBB Diary Suite",
                description:
                  "160+ printable UK food safety checklists, PPDS label makers, and margin calculators with instant browser export.",
                href: "/tools",
                metric: "160+ templates",
                tags: ["UK FSA", "SFBB", "Free Tools"],
              },
              {
                id: "tech-profile",
                category: "UK DEVELOPER PROFILE",
                title: "Enterprise TypeScript & Edge Stack",
                description:
                  "Clean TypeScript components, GSAP ScrollTrigger choreography, and edge CDN caching ready for scaling.",
                href: "/technologies",
                metric: "99+ PageSpeed",
                tags: ["React 19", "GSAP", "Edge SSR"],
              },
            ]}
          />
        </div>

        {/* 5. Engineering Standards, Performance & Tech Stack (Dark #000000 Band) */}
        <section
          id="benefits"
          className="scroll-mt-24 relative z-10 bg-black text-white py-20 md:py-28 border-y border-[#1D1D1D]"
        >
          <div id="performance" className="scroll-mt-24" />
          <div id="tech-stack" className="scroll-mt-24" />
          <div className="max-w-[1168px] mx-auto px-5 space-y-14">
            <div data-gsap-reveal="" className="max-w-2xl space-y-3">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.16em] text-[#BAFF00]">
                WHY CUSTOM CODE · SPEED · TECH STACK
              </div>
              <h2 className="font-display-rh text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                Production engineering benchmarks{" "}
                <span className="text-[#939393]">verified before launch.</span>
              </h2>
            </div>

            <div
              data-gsap-stagger=""
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                { val: 99, suffix: "+", label: "Google PageSpeed", note: "Mobile Core Web Vitals" },
                { val: 600, suffix: "ms", label: "Target Mobile LCP", note: "Edge SSR / Static HTML" },
                { val: 100, suffix: "%", label: "Code Ownership", note: "Private GitHub handoff" },
                { val: 0, prefix: "£", label: "Monthly Retainer", note: "One-time transparent fee" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rh-edge-orbit-card is-lime rounded-2xl border border-[#222222] bg-[#0D0D0D] p-6 space-y-1.5"
                >
                  <div className="text-3xl sm:text-4xl font-semibold text-[#BAFF00] font-display-rh">
                    <RhOdometerNumber
                      value={stat.val}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-sm font-medium text-white">{stat.label}</div>
                  <div className="text-xs font-mono-tech text-[#8E8E93]">{stat.note}</div>
                </div>
              ))}
            </div>

            <div
              data-gsap-stagger=""
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {[
                {
                  icon: Code2,
                  title: "Next.js 16 & React 19",
                  desc: "App Router streaming SSR, partial prerendering, and zero bloat client bundles.",
                },
                {
                  icon: Cpu,
                  title: "TypeScript Strict Safety",
                  desc: "Typed API contracts, predictable form schemas, and bug-resistant UI components.",
                },
                {
                  icon: Gauge,
                  title: "GSAP & Edge Media",
                  desc: "60fps GPU-composited scroll reveals, AVIF imagery, and sub-second first paint.",
                },
                {
                  icon: ShieldCheck,
                  title: "Schema.org & Local SEO",
                  desc: "Verified JSON-LD graphs, clean canonicals, and accessible WCAG contrast ratios.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rh-edge-orbit-card is-lime rounded-3xl border border-[#222222] bg-[#0D0D0D] p-6 space-y-3"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black border border-[#222222] text-[#BAFF00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/technologies"
                className="rh-btn-pill bg-white text-[#0D0D0D] px-6 py-3 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#BAFF00] transition-colors"
              >
                <span>Inspect Full Tech Stack</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/process"
                className="rh-btn-pill bg-[#0D0D0D] text-white px-6 py-3 text-xs sm:text-sm font-medium border border-[#262626] hover:border-[#BAFF00] transition-colors"
              >
                Explore 4-Stage Workflow
              </Link>
            </div>
          </div>
        </section>

        {/* 6. 4-Stage Delivery Carousel */}
        <div id="process" className="scroll-mt-24">
          <RhProcessCarousel
            overline="MILESTONE WORKFLOW"
            title="Live staging before you pay."
            titleMuted="Zero agency risk."
            stages={[
              {
                stage: "01",
                duration: "Days 1–2",
                title: "Fixed Scope & Architecture Plan",
                description:
                  "We lock exact pages, integrations, schema, and delivery date in writing before writing a single line of code.",
                deliverables: ["Written Specification", "Fixed Fee Lock", "Site Map"],
              },
              {
                stage: "02",
                duration: "Days 3–6",
                title: "Custom Next.js Build on Staging",
                description:
                  "Your responsive design, interactive animations, forms, and WhatsApp pipelines go live on a private preview URL.",
                deliverables: ["Private Preview Link", "Mobile QA", "Schema Markup"],
              },
              {
                stage: "03",
                duration: "Days 6–8",
                title: "PageSpeed & Accessibility Verification",
                description:
                  "Verify 95+ Core Web Vitals scores, clean navigation, and cross-device layout polish together before approval.",
                deliverables: ["CWV Audit Pass", "Zero Console Errors", "Copy Polish"],
              },
              {
                stage: "04",
                duration: "Launch",
                title: "Domain Cutover & Full Code Handover",
                description:
                  "Full GitHub source repository ownership transferred cleanly to you alongside 14–30 days launch warranty.",
                deliverables: ["GitHub Ownership", "Vercel DNS Cutover", "Post-Launch Support"],
              },
            ]}
            quote="Our live staging build ran faster than we thought possible, and receiving 100% of our GitHub codebase meant zero lock-in."
            author="Dr. Marcus Vance"
            role="Practice Director, Apex Dental Care"
            ctaHref="/process"
            ctaLabel="Read Full Process Specs"
          />
        </div>

        {/* 7. Pricing Plans & Free Tools (Light #F5F5F7 Band) */}
        <section
          id="pricing"
          className="scroll-mt-24 relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 md:py-28 border-t border-[#E6E6E6]"
        >
          <div className="max-w-[1168px] mx-auto px-5 space-y-20">
            <div className="space-y-10">
              <div
                data-gsap-reveal=""
                className="flex flex-col md:flex-row md:items-end justify-between gap-4"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#666666] font-semibold">
                    TRANSPARENT UK PRICING
                  </div>
                  <h2 className="font-display-rh text-3xl sm:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
                    Fixed-price packages{" "}
                    <span className="text-[#767676]">built to own outright.</span>
                  </h2>
                </div>
                <Link
                  href="/pricing"
                  className="rh-btn-pill bg-[#0D0D0D] text-white px-6 py-3 text-xs sm:text-sm font-medium inline-flex items-center gap-2 hover:bg-[#BAFF00] hover:text-[#0D0D0D] transition-colors self-start"
                >
                  <span>Full Pricing &amp; Currency Toggle</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div
                data-gsap-stagger=""
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    tier: "Landing / Takeaway",
                    price: 250,
                    timeline: "3–5 Days",
                    desc: "Single-offer conversion page or 0% commission direct ordering storefront.",
                    features: [
                      "Custom Next.js responsive UI",
                      "WhatsApp order / enquiry routing",
                      "Natasha's Law 14-allergen option",
                      "Local SEO schema & 99+ CWV",
                    ],
                    featured: false,
                  },
                  {
                    tier: "Starter Business (Up to 5 Pages)",
                    price: 390,
                    timeline: "5–7 Days",
                    desc: "High-authority multi-page storefront engineered for local UK businesses.",
                    features: [
                      "Up to 5 bespoke Next.js routes",
                      "Interactive booking & scope forms",
                      "LocalBusiness JSON-LD & sitemaps",
                      "100% GitHub repo + 30d warranty",
                    ],
                    featured: true,
                  },
                  {
                    tier: "Growth Flagship (Up to 15 Pages)",
                    price: 790,
                    timeline: "7–10 Days",
                    desc: "Enterprise design system, rich editorial blogs, CMS, and interactive funnels.",
                    features: [
                      "Up to 15 bespoke editorial pages",
                      "CMS & programmatic SEO siloing",
                      "Custom calculators & motion specs",
                      "Zero monthly agency retainers",
                    ],
                    featured: false,
                  },
                ].map((plan) => (
                  <div
                    key={plan.tier}
                    className={`rh-edge-orbit-card rounded-3xl p-8 flex flex-col justify-between gap-6 border ${
                      plan.featured
                        ? "bg-[#0D0D0D] text-white border-[#0D0D0D]"
                        : "bg-white text-[#0D0D0D] border-[#E6E6E6]"
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-[11px] font-mono-tech uppercase tracking-wider ${
                            plan.featured ? "text-[#BAFF00]" : "text-[#666666]"
                          }`}
                        >
                          {plan.tier}
                        </span>
                        <span
                          className={`text-[11px] font-mono-tech px-2.5 py-0.5 rounded-full ${
                            plan.featured
                              ? "bg-[#BAFF00] text-[#0D0D0D] font-semibold"
                              : "bg-[#F5F5F7] text-[#0D0D0D]"
                          }`}
                        >
                          {plan.timeline}
                        </span>
                      </div>
                      <div className="text-4xl font-semibold tracking-tight font-display-rh">
                        <RhOdometerNumber prefix="£" value={plan.price} />
                      </div>
                      <p
                        className={`text-xs sm:text-sm font-light leading-relaxed ${
                          plan.featured ? "text-[#A1A1AA]" : "text-[#555555]"
                        }`}
                      >
                        {plan.desc}
                      </p>
                      <ul className="space-y-2 pt-2 border-t border-current/10">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2 text-xs sm:text-sm">
                            <span className="w-4 h-4 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center text-[10px] font-bold shrink-0">
                              ✓
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={`https://wa.me/923196526604?text=${encodeURIComponent(
                        `Hi Saim, I'd like to start the ${plan.tier} package (£${plan.price}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rh-btn-pill w-full py-3 px-5 text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors ${
                        plan.featured
                          ? "bg-[#BAFF00] text-[#0D0D0D] hover:bg-white"
                          : "bg-[#0D0D0D] text-white hover:bg-[#BAFF00] hover:text-[#0D0D0D]"
                      }`}
                    >
                      <span>Start on WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Free UK Kitchen & Business Tools Subsection */}
            <div id="tools" className="scroll-mt-24 pt-12 border-t border-[#E6E6E6] space-y-8">
              <div
                data-gsap-reveal=""
                className="flex flex-col md:flex-row md:items-end justify-between gap-4"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#666666] font-semibold">
                    FREE UK HOSPITALITY &amp; FOOD SAFETY SUITE
                  </div>
                  <h2 className="font-display-rh text-2xl sm:text-4xl font-semibold tracking-tight text-[#0D0D0D]">
                    Interactive compliance &amp; margin tools — zero login required.
                  </h2>
                </div>
                <Link
                  href="/tools"
                  className="rh-btn-pill bg-white text-[#0D0D0D] border border-[#CCCCCC] hover:border-[#0D0D0D] px-5 py-2.5 text-xs font-semibold inline-flex items-center gap-2 self-start"
                >
                  <span>Open All UK Tools</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div
                data-gsap-stagger=""
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {[
                  {
                    href: "/tools/allergen-matrix-generator",
                    title: "Allergen Matrix Generator",
                    desc: "14 UK statutory allergen chart compliant with Natasha's Law.",
                    icon: ShieldCheck,
                  },
                  {
                    href: "/tools/commission-savings-calculator",
                    title: "Commission Savings Audit",
                    desc: "Calculate annual money recovered leaving 30% delivery apps.",
                    icon: Gauge,
                  },
                  {
                    href: "/tools/sfbb-daily-diary",
                    title: "SFBB Daily Log Generator",
                    desc: "Instant FSA Safer Food Better Business temperature & checklist logs.",
                    icon: FileCheck2,
                  },
                  {
                    href: "/tools/food-cost-calculator",
                    title: "Menu Profit & GP Calculator",
                    desc: "Live dish gross profit margins and menu pricing breakdown.",
                    icon: Wrench,
                  },
                ].map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="rh-edge-orbit-card rounded-2xl border border-[#E6E6E6] bg-white p-6 space-y-2.5 block hover:border-[#0D0D0D] transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-[#0D0D0D]" />
                      <h3 className="text-sm font-semibold text-[#0D0D0D] group-hover:underline">
                        {tool.title}
                      </h3>
                      <p className="text-xs text-[#555555] font-light leading-relaxed">
                        {tool.desc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ & Direct Contact Section (Dark #000000 Band) */}
        <section
          id="faq"
          className="scroll-mt-24 relative z-10 bg-black text-white py-20 md:py-28 border-t border-[#1D1D1D]"
        >
          <div className="max-w-[1168px] mx-auto px-5 space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div data-gsap-reveal="" className="lg:col-span-5 space-y-3">
                <div className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#BAFF00]">
                  ANSWERS &amp; GUARANTEES
                </div>
                <h2 className="font-display-rh text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Detailed Overview <span className="text-[#939393]">FAQ</span>
                </h2>
                <p className="text-sm text-[#A1A1AA] font-light leading-relaxed">
                  Clear terms on staging previews, repository ownership, and fixed UK project billing.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {OVERVIEW_FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl border border-[#222222] bg-[#0D0D0D] px-6 py-4 cursor-pointer hover:border-[#3A3A3C] open:border-[#BAFF00]/50 transition-colors"
                  >
                    <summary className="flex items-center justify-between gap-4 list-none select-none focus:outline-none">
                      <span className="text-sm sm:text-base font-medium text-white">
                        {faq.q}
                      </span>
                      <Plus className="w-4 h-4 text-[#BAFF00] shrink-0 transition-transform duration-300 group-open:rotate-45" />
                    </summary>
                    <p className="pt-3 pb-1 text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div
              id="contact"
              data-gsap-reveal=""
              className="scroll-mt-24 rounded-3xl border border-[#222222] bg-[#0D0D0D] p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
            >
              <div className="space-y-3 max-w-2xl">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.16em] text-[#BAFF00] block">
                  DIRECT ENGINEER CONTACT
                </span>
                <h2 className="font-display-rh text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                  Ready to inspect your live staging build with $0 upfront?
                </h2>
                <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                  Message Saim directly on WhatsApp or submit a technical brief via the dedicated contact page. Fixed quotes issued within 2 hours.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20reviewed%20the%20Studio%20Overview%20and%20would%20like%20a%20staging%20build."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] font-bold text-xs sm:text-sm px-7 py-3.5 inline-flex items-center gap-2 hover:bg-white transition-colors"
                >
                  <span>WhatsApp (+92 319 6526604)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="rh-btn-pill bg-black text-white font-medium text-xs sm:text-sm px-6 py-3.5 border border-[#333333] hover:border-[#BAFF00] transition-colors"
                >
                  Open Contact Form
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
