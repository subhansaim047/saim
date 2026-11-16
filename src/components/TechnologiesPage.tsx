"use client";

import Link from "next/link";
import {
  Code2,
  Zap,
  Search,
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cpu,
  Layers,
  FileCode2,
  Palette,
} from "lucide-react";
import { RhHeader } from "./rh/RhHeader";
import { SiteFooter } from "./SiteFooter";
import {
  RhHeroPinned,
  RhProblemSolutionDeck,
  RhSystemRows,
} from "./rh/RhModernSections";

export const TechnologiesPage = () => {
  return (
    <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      <main>
      {/* 1. PAGE-OPEN HERO (3D Cube + Laser-Draw Strip) */}
      <RhHeroPinned
        badge="Engineering Stack · Next.js 16 & React 19"
        title={
          <>
            Next.js Tech Stack{" "}
            <span className="text-[#939393]">&amp; Web Engineering</span>
          </>
        }
        subtitle="Saim Dev combines Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS, and Cloudflare/Vercel edge infrastructure to ship sub-second UK web applications with 95+ Core Web Vitals targets and zero maintenance overhead."
        primaryCta={{ label: "Build With This Stack", href: "/contact" }}
        secondaryCta={{ label: "See Architecture Benchmarks", href: "/case-studies" }}
        videoType="cube"
        stripLabel="Zero plugin bloat · Edge native"
        stripItems={[
          {
            label: "01. React 19 SSR",
            tag: "App Router",
            tagValue: "Next.js 16",
            summary: "Server-first rendering keeps heavy JavaScript off client phones for crisp TBT & INP.",
            href: "/nextjs-developer-uk",
          },
          {
            label: "02. Zero Theme Bloat",
            tag: "Tailwind + TS",
            tagValue: "Purged CSS",
            summary: "Strict TypeScript modules and compiled CSS utilities eliminate unused third-party scripts.",
            href: "/services/website-development",
          },
          {
            label: "03. Edge Media",
            tag: "WebP / AVIF",
            tagValue: "Target <1s LCP",
            summary: "Explicit intrinsic sizing and modern image formats prevent CLS and slow hero paint.",
            href: "/services/website-speed-optimization",
          },
          {
            label: "04. Structured Graph",
            tag: "Technical SEO",
            tagValue: "JSON-LD Ready",
            summary: "Typed Service, Organization, FAQ, and Breadcrumb schema shipped natively in route code.",
            href: "/services/seo-services",
          },
        ]}
      />

      <RhProblemSolutionDeck
        overline="STACK BENCHMARKS"
        titleBefore="Why clean Next.js edge code beats"
        titleStrike="heavy plugins"
        titleOwned="every time."
        subtitle="Legacy WordPress and bloated page builders ship megabytes of render-blocking scripts. Our modern App Router architecture keeps bundles tiny and response times fast."
        cards={[
          {
            source: "Legacy Plugin Stack",
            time: "Render Block",
            title: "35+ PHP plugins stalling Time to First Byte",
            detail: "Every database query and third-party stylesheet queues before your first heading paints on 4G.",
            severity: "critical",
          },
          {
            source: "Maintenance Tax",
            time: "Recurring",
            title: "Frequent security patches and broken theme updates",
            detail: "Coupled template builders demand monthly maintenance fees just to keep checkout forms alive.",
            severity: "warning",
          },
          {
            source: "Runtime Bloat",
            time: "Client JS",
            title: "Over-hydrated client scripts triggering sluggish taps",
            detail: "Heavy DOM nesting elevates Interaction to Next Paint (INP) and drops mobile ad quality scores.",
            severity: "critical",
          },
        ]}
        solutionTitle="Sub-Second LCP Targets, Zero Layout Shift, Semantic HTML"
        solutionDesc="Engineered from first principles with React Server Components, edge image optimisation, and built-in Schema.org JSON-LD."
        bars={[
          { value: "42", label: "Legacy Theme", heightPx: 140 },
          { value: "66", label: "Page Builder", heightPx: 215 },
          { value: "95+", label: "Next.js 16 Target", heightPx: 330, isHighlight: true },
        ]}
      />

      <RhSystemRows
        overline="CORE INFRASTRUCTURE"
        title="Production stack"
        titleMuted="& edge guarantees"
        rows={[
          {
            num: "01",
            title: "Next.js 16 & React 19 App Router",
            description:
              "Server Components, hybrid SSR/SSG rendering, and instant route prefetching for effortless page transitions.",
            tags: ["Next.js", "React 19", "Edge Routing"],
            href: "/nextjs-developer-uk",
          },
          {
            num: "02",
            title: "Strict TypeScript & Tailwind CSS",
            description:
              "Zero runtime type surprises and purged atomic CSS bundles that keep total page weight minimal.",
            tags: ["TypeScript", "Tailwind CSS", "Zero Bloat"],
          },
          {
            num: "03",
            title: "Core Web Vitals & Technical SEO",
            description:
              "Guaranteed 90+ Lighthouse scores, automated sitemaps, canonical hygiene, and full Schema.org structured data.",
            tags: ["LCP < 0.8s", "CLS 0.00", "JSON-LD"],
            href: "/case-studies",
          },
        ]}
      />

      {/* 2. ARCHITECTURAL FRONTEND & PERFORMANCE MATRIX (Dark #000000) */}
      <section className="relative z-10 bg-black text-white py-20 sm:py-28 px-5 border-t border-[#202020]">
        <div className="max-w-[1168px] mx-auto space-y-20">
          {/* Frontend Frameworks */}
          <div>
            <div data-gsap-reveal="" className="max-w-[760px] mb-12">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#939393] mb-3">
                01 / RUNTIME &amp; UI LAYER
              </div>
              <h2 className="text-[32px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.08] text-white">
                Frontend Frameworks{" "}
                <span className="text-[#939393]">&amp; Type Safety</span>
              </h2>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="rh-edge-orbit-card bg-[#111111] border border-[#222222] p-7 flex flex-col justify-between min-h-[240px]">
                <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-[#BAFF00] flex items-center justify-center mb-6">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[20px] font-medium tracking-[-0.02em] text-white mb-2">
                    React 19
                  </h3>
                  <p className="text-[13px] text-[#939393] leading-[1.6]">
                    Component-driven web UI with Server Components, concurrent rendering, and instant transitions.
                  </p>
                </div>
              </div>

              <div className="rh-edge-orbit-card is-lime bg-[#111111] border border-[#2A2A2A] p-7 flex flex-col justify-between min-h-[240px]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#BAFF00]">
                      CORE ENGINE
                    </span>
                  </div>
                  <h3 className="text-[20px] font-medium tracking-[-0.02em] text-white mb-2">
                    Next.js
                  </h3>
                  <p className="text-[13px] text-[#939393] leading-[1.6] mb-3">
                    Server-side rendering, static generation, and optimal edge routing.
                  </p>
                  <dl className="pt-3 border-t border-white/10 text-xs">
                    <dt className="text-[#BAFF00] font-mono-tech text-[10px] uppercase tracking-wider mb-1">
                      What is Next.js?
                    </dt>
                    <dd className="text-[#939393] leading-relaxed">
                      An open-source React framework built for sub-second SSR, static caching, and high-ranking SEO apps.
                    </dd>
                  </dl>
                </div>
                <Link
                  href="/nextjs-developer-uk"
                  className="text-xs text-[#BAFF00] hover:underline font-medium inline-flex items-center gap-1.5 mt-4"
                >
                  <span>Hire Next.js Developer UK</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="rh-edge-orbit-card bg-[#111111] border border-[#222222] p-7 flex flex-col justify-between min-h-[240px]">
                <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-[#BAFF00] flex items-center justify-center mb-6">
                  <FileCode2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[20px] font-medium tracking-[-0.02em] text-white mb-2">
                    TypeScript
                  </h3>
                  <p className="text-[13px] text-[#939393] leading-[1.6]">
                    Strict type safety eliminating runtime exceptions and making client handoffs clean and maintainable.
                  </p>
                </div>
              </div>

              <div className="rh-edge-orbit-card bg-[#111111] border border-[#222222] p-7 flex flex-col justify-between min-h-[240px]">
                <div className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/10 text-[#BAFF00] flex items-center justify-center mb-6">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[20px] font-medium tracking-[-0.02em] text-white mb-2">
                    Tailwind CSS
                  </h3>
                  <p className="text-[13px] text-[#939393] leading-[1.6]">
                    Utility-first architecture with purged atomic stylesheets for minimal CSS bundle overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Engineering */}
          <div>
            <div data-gsap-reveal="" className="max-w-[760px] mb-12">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#939393] mb-3">
                02 / SPEED &amp; CORE WEB VITALS
              </div>
              <h2 className="text-[32px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.08] text-white">
                Performance Engineering{" "}
                <span className="text-[#939393]">Guarantees</span>
              </h2>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rh-edge-orbit-card bg-[#111111] border border-[#222222] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center">
                      <Zap className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#BAFF00]">
                      LCP &lt; 0.8S TARGET
                    </span>
                  </div>
                  <h3 className="text-[24px] font-medium tracking-[-0.03em] text-white mb-3">
                    Core Web Vitals Optimisation
                  </h3>
                  <p className="text-[14px] text-[#939393] leading-[1.6] mb-5">
                    Sub-second LCP (&lt; 2.5s), zero layout shift (CLS &lt; 0.1), and rapid INP (&lt; 200ms) for higher UK Google rankings.
                  </p>
                  <dl className="mb-5 p-4 bg-black/60 border border-white/10 text-xs">
                    <dt className="text-[#BAFF00] font-mono-tech text-[10px] uppercase tracking-wider mb-1">
                      What are Core Web Vitals?
                    </dt>
                    <dd className="text-[#939393] leading-relaxed">
                      Core Web Vitals are standardized real-world UX metrics defined by Google evaluating loading speed (LCP), interactivity responsiveness (INP), and visual stability (CLS).
                    </dd>
                  </dl>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono-tech text-[#BAFF00]">
                    <span className="bg-white/[0.05] px-2.5 py-1 border border-white/10">LCP &lt; 2.5s</span>
                    <span className="bg-white/[0.05] px-2.5 py-1 border border-white/10">CLS &lt; 0.1</span>
                    <span className="bg-white/[0.05] px-2.5 py-1 border border-white/10">INP &lt; 200ms</span>
                  </div>
                  <Link
                    href="/case-studies"
                    className="text-xs text-[#BAFF00] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>Inspect Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="rh-edge-orbit-card bg-[#111111] border border-[#222222] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-10 h-10 rounded-full bg-white/[0.08] text-[#BAFF00] flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#939393]">
                      LIGHTHOUSE AUDIT
                    </span>
                  </div>
                  <h3 className="text-[24px] font-medium tracking-[-0.03em] text-white mb-3">
                    95+ Lighthouse Score Architecture
                  </h3>
                  <p className="text-[14px] text-[#939393] leading-[1.6] mb-6">
                    Every staging build is audited against Lighthouse Performance, Accessibility, Best Practices, and Technical SEO prior to final handover.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-[12px] font-mono-tech pt-4 border-t border-white/10">
                  <span className="px-3 py-1.5 bg-[#BAFF00] text-[#0D0D0D] font-semibold">Perf 95+</span>
                  <span className="px-3 py-1.5 bg-white/[0.06] border border-white/15 text-white">SEO 100</span>
                  <span className="px-3 py-1.5 bg-white/[0.06] border border-white/15 text-white">Clean Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEO, GEO & AI AUTOMATION (#F5F5F7 Light Contrast Band) */}
      <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-28 px-5 border-t border-[#E6E6E6]">
        <div className="max-w-[1168px] mx-auto space-y-20">
          {/* SEO & GEO */}
          <div>
            <div data-gsap-reveal="" className="max-w-[760px] mb-12">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#595959] mb-3">
                03 / DISCOVERY &amp; STRUCTURED SEARCH
              </div>
              <h2 className="text-[32px] sm:text-[44px] font-medium tracking-[-0.04em] leading-[1.08] text-[#0D0D0D]">
                SEO, GEO &amp; AI Search Indexing
              </h2>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Search,
                  title: "Technical SEO",
                  desc: "Clean semantic HTML, self-referencing canonicals, OpenGraph cards, and metadata discipline.",
                },
                {
                  icon: Code2,
                  title: "Structured Schema",
                  desc: "Validated JSON-LD Organization, Service, FAQPage, and BreadcrumbList graphs on key routes.",
                },
                {
                  icon: Layers,
                  title: "Sitemap & Robots",
                  desc: "Automated XML sitemap generation and zero accidental crawl blocks across production URLs.",
                },
                {
                  icon: Bot,
                  title: "AI Search (LLMO)",
                  desc: "Answer-first semantic markup engineered for ChatGPT, Perplexity, and Google AI Overviews.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rh-edge-orbit-card bg-white border border-[#E6E6E6] p-7 hover:border-[#0D0D0D] transition-colors flex flex-col justify-between min-h-[210px]"
                  >
                    <Icon className="w-5 h-5 text-[#0D0D0D] mb-6" />
                    <div>
                      <h3 className="text-[19px] font-medium tracking-[-0.02em] text-[#0D0D0D] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[13px] text-[#595959] leading-[1.6]">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contextual Cluster Links */}
          <div>
            <div data-gsap-reveal="" className="mb-10">
              <h2 className="text-[26px] sm:text-[34px] font-medium tracking-[-0.03em] text-[#0D0D0D] mb-2">
                Explore Web Architecture &amp; Client Solutions
              </h2>
              <p className="text-[15px] text-[#595959]">
                Inspect how this engineering stack powers real commercial builds and UK growth platforms.
              </p>
            </div>
            <div data-gsap-stagger="" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { k: "Fixed-Price Plans", label: "Web Development Services", href: "/services" },
                { k: "UK & US Pillar", label: "Next.js Website Development", href: "/services/website-development" },
                { k: "Client Proof", label: "Website Case Studies", href: "/case-studies" },
                { k: "Direct Briefing", label: "Discuss Your Project", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rh-edge-orbit-card group bg-white border border-[#E6E6E6] hover:border-[#0D0D0D] p-6 flex flex-col justify-between min-h-[120px] transition-colors"
                >
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#595959]">
                    {item.k}
                  </span>
                  <div className="flex items-center justify-between gap-2 text-[16px] font-medium text-[#0D0D0D] mt-4">
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="bg-black text-white py-20 sm:py-24 px-5 border-t border-[#202020]">
        <div data-gsap-reveal="" className="max-w-[760px] mx-auto text-center">
          <h3 className="text-[32px] sm:text-[46px] font-medium tracking-[-0.04em] leading-[1.08] text-white mb-4">
            Want Modern Tech Architecture{" "}
            <span className="text-[#939393]">for Your Business?</span>
          </h3>
          <p className="text-[16px] text-[#939393] max-w-[540px] mx-auto mb-9 leading-[1.6]">
            Let us build a sub-second, zero-bloat Next.js platform engineered to outrank slow legacy competitors.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] px-8 py-4 text-[15px] font-medium tracking-[-0.02em] inline-flex items-center gap-2"
            >
              <span>Start Your Project on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#333333] text-white hover:border-[#BAFF00] hover:text-[#BAFF00] text-[15px] font-medium tracking-[-0.02em] transition-colors"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
