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
import { ArrowRight, Code2, Rocket, Globe, UserCheck, CheckCircle2 } from "lucide-react";
import { EngineeringMediaFigure, EngineeringVerificationBadge } from "@/components/ui/EditorialVisualPack";

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
        alt: "About Saim Dev - Next.js Development Studio",
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

export default function AboutPage() {
  const aboutGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://www.saimdev.site/about#profilepage",
        "url": "https://www.saimdev.site/about",
        "name": "About Saim Dev | Remote Next.js Studio for UK & US",
        "description": "Independent Next.js web engineering studio serving UK, US, and European businesses remotely.",
        "isPartOf": { "@id": "https://www.saimdev.site/#website" },
        "mainEntity": { "@id": "https://www.saimdev.site/#person" },
        "breadcrumb": { "@id": "https://www.saimdev.site/about#breadcrumb" },
        "inLanguage": ["en-GB", "en-US"]
      },
      {
        "@type": "Person",
        "@id": "https://www.saimdev.site/#person",
        "name": "Saim Dev",
        "jobTitle": "Founder & Lead Next.js Architect",
        "worksFor": { "@id": "https://www.saimdev.site/#organization" },
        "url": "https://www.saimdev.site/about",
        "image": "https://www.saimdev.site/saim-dev-logo.jpg",
        "knowsAbout": [
          "Next.js 16 App Router",
          "React 19",
          "TypeScript",
          "Technical SEO & Schema.org",
          "Core Web Vitals Engineering"
        ],
        "sameAs": [
          "https://github.com/subhansaim047",
          "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER",
          "https://x.com/saimwebdev",
          "https://www.instagram.com/saim_agency/",
          "https://saimswebagency.quora.com/",
          "https://www.tiktok.com/@saimdev.site",
          "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.saimdev.site/about#breadcrumb",
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
            "name": "About",
            "item": "https://www.saimdev.site/about"
          }
        ]
      }
    ]
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
          subtitle="Saim Dev is a senior-led Next.js 16 engineering studio serving UK, US, and European companies remotely. Fixed-milestone delivery from £250 ($300 USD), Free Concept Preview options, full GitHub source custody, and zero monthly retainers."
          primaryCta={{ label: "Start a Project", href: "/contact" }}
          secondaryCta={{ label: "Explore Studio Demos", href: "/demos" }}
          videoType="cube"
          stripLabel="Direct founder engineering · UK & EU"
          stripItems={[
            {
              label: "Direct Lead Engineer",
              tag: "Access",
              tagValue: "1-on-1 Build",
              summary: "Communicate directly with the engineer scoping and writing every TypeScript component.",
              href: "/contact",
            },
            {
              label: "Fixed GBP Scopes",
              tag: "Transparency",
              tagValue: "£250–£1,500",
              summary: "Written project deliverables with 50/50 milestone terms agreed upfront.",
              href: "/pricing",
            },
            {
              label: "GitHub IP Handover",
              tag: "Ownership",
              tagValue: "100% Owned",
              summary: "Deploy cleanly to your own cloud account with zero recurring maintenance lock-in.",
              href: "/technologies",
            },
            {
              label: "Interactive Demo Hub",
              tag: "Verification",
              tagValue: "Live Previews",
              summary: "Inspect responsive speed across retail, dental, legal, and UK takeaway concepts.",
              href: "/demos",
            },
            {
              label: "Commission Calculator",
              tag: "ROI Tool",
              tagValue: "0% Fee Audit",
              summary: "Calculate exact monthly delivery-app commission savings vs a £250 direct ordering website.",
              href: "/tools/commission-savings-calculator",
            },
          ]}
        />

      {/* ARCHITECTURAL STUDIO PROFILE (#F5F5F7 Contrast Band) */}
      <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-28 px-5 border-b border-[#E6E6E6]">
        <div className="max-w-[1168px] mx-auto space-y-12">
          {/* Founder & Remote Partnership Bento */}
          <div data-gsap-stagger="" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6E6E6]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-black/15 bg-white shrink-0">
                      <img
                        src="/saim-dev-logo.jpg"
                        alt="Saim Dev - Founder & Next.js Engineer"
                        width={120}
                        height={120}
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[#0D0D0D]">
                        Saim Dev
                      </h2>
                      <p className="text-[12px] font-mono-tech uppercase tracking-wider text-[#595959]">
                        Founder &amp; Lead Next.js Architect
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider bg-[#0D0D0D] text-[#BAFF00] px-3.5 py-1.5 self-start sm:self-center">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Direct 1-on-1 Access</span>
                  </span>
                </div>

                <p className="text-[15px] text-[#333333] leading-[1.65] mt-6">
                  Led by founder and principal Next.js architect Saim Dev, our studio scopes, writes, tests, and deploys every client website and hospitality utility in-house. We pair React Server Components, lightweight Tailwind CSS, and verifiable Schema.org markup so UK, US, and European companies load pages swiftly and convert traffic without monthly agency retainers.
                </p>
              </div>

              {/* Verified Social & Professional Profiles (sameAs links) */}
              <div className="pt-6 border-t border-[#E6E6E6]">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#595959] block mb-3">
                  Verified Profiles &amp; Channels
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
                      className="px-3 py-1.5 bg-[#F5F5F7] border border-[#E6E6E6] text-[#0D0D0D] font-medium hover:bg-[#0D0D0D] hover:text-[#BAFF00] hover:border-[#0D0D0D] transition-colors"
                    >
                      {ch.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rh-edge-orbit-card is-lime bg-[#0D0D0D] text-white border border-[#202020] p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] block mb-4">
                  TRANSPARENT REMOTE PARTNERSHIP
                </span>
                <h3 className="text-[26px] font-medium tracking-[-0.03em] leading-[1.15] text-white mb-4">
                  Senior-level execution with fixed milestone pricing.
                </h3>
                <p className="text-[14px] text-[#939393] leading-[1.6] mb-6">
                  Operating remotely with direct communication via WhatsApp and Google Meet keeps studio overhead near zero—delivering enterprise Next.js quality from £250.
                </p>
                <div className="space-y-3 text-[13px] text-white/85">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-0.5" />
                    <span>Direct WhatsApp &amp; Loom updates aligned with UK business hours.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-0.5" />
                    <span>Full GitHub repository ownership with zero platform lock-in.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#939393] block mb-2">
                  FREE HOSPITALITY ROI UTILITY
                </span>
                <p className="text-[13px] text-[#B3B3B3] leading-[1.55] mb-4">
                  Calculate exact delivery-app savings and inspect our 5-star UK Food Hygiene &amp; Natasha&apos;s Law compliance guides.
                </p>
                <Link
                  href="/tools/commission-savings-calculator"
                  className="inline-flex items-center gap-2 text-xs font-medium bg-[#BAFF00] text-[#0D0D0D] px-4 py-2.5 rounded-full hover:brightness-95 transition-all"
                >
                  <span>Run Commission Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Engineering Approach 3-Col */}
          <div>
            <div data-gsap-reveal="" className="max-w-[720px] mb-10">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#595959] mb-3">
                ENGINEERING PHILOSOPHY
              </div>
              <h2 className="text-[32px] sm:text-[42px] font-medium tracking-[-0.04em] leading-[1.08] text-[#0D0D0D]">
                Our Approach to Web Engineering
              </h2>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Code2,
                  title: "Modern Architecture",
                  desc: "Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS with zero legacy CMS bloat.",
                },
                {
                  icon: Rocket,
                  title: "Core Web Vitals Speed",
                  desc: "We tune routes for responsive mobile delivery across 4G/5G networks targeting 95+ Lighthouse scores.",
                },
                {
                  icon: Globe,
                  title: "UK, US & E-Commerce Sectors",
                  desc: "Tailored digital systems for B2B SaaS startups, Shopify merchants, service companies, and UK takeaways.",
                },
              ].map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 hover:border-[#0D0D0D] transition-colors flex flex-col justify-between min-h-[210px]"
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

          {/* Architectural Dark CTA Bar */}
          <div
            data-gsap-reveal=""
            className="p-8 sm:p-10 bg-black text-white border border-[#202020] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] mb-2">
                FIXED QUOTES WITHIN 24 HOURS
              </div>
              <p className="text-[22px] sm:text-[26px] font-medium tracking-[-0.03em] text-white mb-1">
                Have a project in mind?
              </p>
              <p className="text-[14px] text-[#939393]">
                Discuss your requirements directly with Saim and request a Free Concept Preview or fixed milestone spec.
              </p>
            </div>
            <Link
              href="/contact"
              className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] px-7 py-3.5 text-[14px] font-medium tracking-[-0.02em] inline-flex items-center gap-2 shrink-0"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <EngineeringMediaFigure
            src="/images/guides/senior-engineering-workspace.webp"
            alt="Saim Dev Next.js engineering workspace showing clean architecture telemetry"
            caption="Inside Saim Dev: direct senior-led engineering focusing on strict TypeScript, fast edge routing, and 100% client GitHub custody across UK, US, and European launches."
            tag="Studio Environment"
            theme="light"
          />

          <EngineeringVerificationBadge
            contextLabel="Every Saim Dev build and interactive tool distinguishes clearly between concept demos and production client launches"
            theme="light"
          />
        </div>
      </section>

      <RhProblemSolutionDeck
        overline="WHY INDEPENDENT NEXT.JS ENGINEERING WINS"
        titleBefore="Direct senior craft without"
        titleStrike="agency overhead"
        titleOwned="or retainers."
        subtitle="Traditional agencies charge £3,000–£15,000+ to fund account managers and slow CMS themes. Working directly with Saim Dev delivers target 95+ Core Web Vitals, full code IP, and fixed pricing from £250."
        solutionTitle="Founder-Built Code You Own Forever"
        solutionDesc="Every line of React, Next.js 16, and Tailwind CSS is authored cleanly, verified on a live staging link under 50/50 milestones, and transferred straight to your GitHub."
        chartBadge="Studio Model"
      />

      <RhSystemRows
        overline="STUDIO PRINCIPLES"
        title="How we operate"
        titleMuted="with UK & EU founders"
        rows={[
          {
            num: "01",
            title: "Direct 1-on-1 Engineer Access",
            description:
              "Communicate straight with Saim on WhatsApp and Loom aligned with UK business hours—zero middlemen.",
            tags: ["Direct WhatsApp", "UK Business Hours"],
            href: "/contact",
          },
          {
            num: "02",
            title: "100% GitHub Source Ownership",
            description:
              "Complete repository, production Next.js 16 source, and cloud hosting handed directly to your team.",
            tags: ["Zero Lock-In", "Clean TypeScript"],
            href: "/technologies",
          },
          {
            num: "03",
            title: "Reference Architectures & Interactive Demos",
            description:
              "Explore live interactive demonstrations replacing slow page builders with sub-second static & SSR routing.",
            tags: ["Live Concepts", "Target CWV 95+"],
            href: "/case-studies",
          },
        ]}
      />

      <RhConversionBanner
        overline="09 / WORK DIRECTLY WITH THE ENGINEER"
        title="Ready to build without"
        titleMuted="agency middlemen?"
        description="Connect directly with Saim on WhatsApp or via our project form to lock scope, pricing, and your 5–10 day build timeline."
        primaryLabel="Message Saim on WhatsApp"
        secondaryLabel="View Pricing Tiers"
        secondaryHref="/pricing"
      />
      </main>

      <SiteFooter theme="dark" />
    </div>
    </>
  );
}
