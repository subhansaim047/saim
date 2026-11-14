"use client";

import Link from "next/link";
import { Code2, Zap, Search, ArrowRight, Bot, Cpu } from "lucide-react";
import { RhHeader } from "./rh/RhHeader";
import { SiteFooter } from "./SiteFooter";
import {
  RhHeroPinned,
  RhProblemSolutionDeck,
  RhSystemRows,
} from "./rh/RhModernSections";

export const TechnologiesPage = () => {
  return (
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      {/* 1. EXACT rh.design PAGE-OPEN HERO (3D Cube + Laser-Draw Strip) */}
      <RhHeroPinned
        badge="Engineering Stack · Next.js 16 & React 19"
        title={
          <>
            Next.js Tech Stack{" "}
            <span className="text-[#939393]">&amp; Web Engineering</span>
          </>
        }
        subtitle="Saim Dev combines Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS, and Cloudflare/Vercel edge infrastructure to ship sub-second UK web applications with 99+ Core Web Vitals and zero maintenance overhead."
        primaryCta={{ label: "Build With This Stack", href: "/contact" }}
        secondaryCta={{ label: "See Speed Case Studies", href: "/case-studies" }}
        videoType="cube"
        stripLabel="Zero plugin bloat · Edge native"
      />

      <RhProblemSolutionDeck
        overline="STACK BENCHMARKS"
        titleBefore="Why clean Next.js edge code beats"
        titleStrike="heavy plugins"
        titleOwned="every time."
        subtitle="Legacy WordPress and bloated page builders ship megabytes of render-blocking scripts. Our modern App Router architecture keeps bundles tiny and response times under 100ms."
        solutionTitle="Sub-Second LCP, Zero Cumulative Layout Shift, 100 SEO"
        solutionDesc="Engineered from first principles with React Server Components, edge image optimisation, and built-in Schema.org JSON-LD."
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

      <div className="max-w-[1168px] mx-auto px-5 py-20 sm:py-24">

        {/* 2. FRONTEND */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Code2 className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">Frontend Frameworks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <span className="text-2xl mb-3 block">⚛️</span>
              <h3 className="text-white font-medium text-lg mb-1">React 18</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Component-driven web UI with concurrent rendering and instant state updates.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-3 block">▲</span>
                <h3 className="text-white font-medium text-lg mb-1">Next.js</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed mb-2">
                  Server-side rendering, static site generation, and optimal edge routing.
                </p>
                <dl className="pt-2 border-t border-white/10 text-xs">
                  <dt className="text-primary font-mono text-[11px] uppercase tracking-wider font-bold mb-0.5">What is Next.js?</dt>
                  <dd className="text-white/60 leading-relaxed font-light">
                    Next.js is an open-source React framework developed by Vercel that combines server-side rendering, static site generation, and edge routing to build ultra-fast, search-optimised web applications.
                  </dd>
                </dl>
              </div>
              <Link
                href="/nextjs-developer-uk"
                className="text-xs text-primary hover:underline font-medium inline-flex items-center gap-1 mt-3"
              >
                <span>Hire Next.js Developer UK</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <span className="text-2xl mb-3 block">📘</span>
              <h3 className="text-white font-medium text-lg mb-1">TypeScript</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Strict type safety ensuring zero runtime exceptions and bulletproof code quality.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <span className="text-2xl mb-3 block">🎨</span>
              <h3 className="text-white font-medium text-lg mb-1">Tailwind CSS</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Utility-first, responsive design tokens with zero unused CSS footprint.
              </p>
            </div>
          </div>
        </div>

        {/* 3. PERFORMANCE */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Zap className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">Performance Engineering</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="liquid-glass rounded-2xl p-7 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Core Web Vitals Optimisation</h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-3">
                Sub-second LCP (Largest Contentful Paint &lt; 2.5s), minimal CLS (&lt; 0.1), and rapid INP (&lt; 200ms) for high Google search rankings.
              </p>
              <dl className="mb-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                <dt className="text-primary font-mono text-[11px] uppercase tracking-wider font-bold mb-1">What are Core Web Vitals?</dt>
                <dd className="text-white/60 leading-relaxed font-light">
                  Core Web Vitals are a standardized set of real-world user experience metrics defined by Google that evaluate loading speed (LCP), interactivity responsiveness (INP), and visual stability (CLS).
                </dd>
              </dl>
              <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 mb-3">
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">LCP &lt; 2.5s</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">CLS &lt; 0.1</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">INP &lt; 200ms</span>
              </div>
              <Link
                href="/case-studies"
                className="text-xs text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>View our website case studies for verified load times</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="liquid-glass rounded-2xl p-7 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Lighthouse Score Guarantee</h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-4">
                Guaranteed 90+ Lighthouse benchmark scores across Performance, Accessibility, Best Practices, and 100 SEO score.
              </p>
              <div className="flex items-center gap-3 text-xs font-mono text-emerald-400">
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">Perf 90+</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">SEO 100</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SEO & GEO */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Search className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">SEO, GEO & Search Indexing</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium mb-1">Technical SEO</h3>
              <p className="text-white/60 text-xs font-light">Meta tags, canonicals, and clean semantic HTML hierarchy.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium mb-1">Structured Data</h3>
              <p className="text-white/60 text-xs font-light">JSON-LD Organization, Person, Service, and FAQ schemas.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium mb-1">Sitemap & Robots</h3>
              <p className="text-white/60 text-xs font-light">Automated XML sitemap and search engine crawler instructions.</p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium mb-1">AI Search (LLMO)</h3>
              <p className="text-white/60 text-xs font-light">Optimised text blocks for ChatGPT, Claude, and Perplexity indexing.</p>
            </div>
          </div>
        </div>

        {/* 5. AI INTEGRATIONS */}
        <div className="mb-16">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Bot className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">AI & Automation Integrations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Smart Chatbots</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                24/7 client support AI assistants that answer enquiries and qualify leads automatically.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Lead Workflows</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Automated CRM syncing, instant email notifications, and Instagram lead routing.
              </p>
            </div>
            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">AI Search Readiness</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Structured content layers formatted for AI recommendation engines.
              </p>
            </div>
          </div>
        </div>

        {/* 6. DEVELOPMENT PROCESS */}
        <div className="mb-20 liquid-glass rounded-3xl p-8 sm:p-10 border border-white/15">
          <div className="flex items-center gap-2.5 mb-6 text-primary">
            <Cpu className="w-6 h-6" />
            <h2 className="text-2xl font-light text-white">Development Process & Standards</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-white/70 font-light">
            <div>
              <span className="text-primary font-mono text-sm block mb-1">01. Clean Codebase</span>
              Reusable TypeScript components with zero bloat and strict linting.
            </div>
            <div>
              <span className="text-primary font-mono text-sm block mb-1">02. Automated Builds</span>
              Instant CI/CD production pipelines via Vite & Vercel deployment.
            </div>
            <div>
              <span className="text-primary font-mono text-sm block mb-1">03. Security Hardening</span>
              SSL certificates, headers protection, and safe form handling.
            </div>
          </div>
        </div>

        {/* CONTEXTUAL INTERNAL LINKS CLUSTER */}
        <div className="mb-16 liquid-glass rounded-3xl p-8 border border-white/15">
          <h2 className="text-xl sm:text-2xl font-light text-white mb-2">
            Explore Web Architecture &amp; Client Solutions
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mb-6 font-light">
            Discover how we apply modern engineering to build high-converting platforms for UK small businesses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Fixed-Price Plans</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/services" className="after:absolute after:inset-0 focus:outline-none">
                  Web Development Services
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Specialist UK Freelancer</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/nextjs-developer-uk" className="after:absolute after:inset-0 focus:outline-none">
                  Next.js Web Development
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Client Proof</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/case-studies" className="after:absolute after:inset-0 focus:outline-none">
                  Website Case Studies
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
            <div className="relative p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group">
              <span className="text-xs font-mono text-primary uppercase block mb-1">Direct Consultation</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <Link href="/contact" className="after:absolute after:inset-0 focus:outline-none">
                  Discuss Your Project
                </Link>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* 7. CTA */}
        <div className="text-center bg-white/5 rounded-3xl p-10 border border-white/10">
          <h3 className="text-2xl font-light text-white mb-3">
            Want Modern Tech Architecture for Your Business?
          </h3>
          <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Let's build a fast, secure, and AI-ready platform that sets you apart from competitors.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all text-xs cursor-pointer shadow-xl"
            >
              <span>Start Your Project on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all text-xs cursor-pointer border border-white/15"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter theme="dark" />
    </div>
  );
};
