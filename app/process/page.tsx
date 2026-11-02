import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, PhoneCall, Compass, Code2, Rocket, CheckCircle2, ShieldCheck, Clock, FileCheck, GitBranch, RefreshCw } from "lucide-react";
import { SiteFooter } from "../../src/components/SiteFooter";

export const metadata: Metadata = {
  title: "Web Development Process & Delivery Workflow | Saim Dev",
  description: "Our transparent 4-stage website engineering workflow: discovery, technical architecture, Next.js development, and zero-downtime deployment with 100% code handover.",
  alternates: {
    canonical: "https://www.saimdev.site/process",
  },
  openGraph: {
    title: "Web Development Process & Delivery Workflow | Saim Dev",
    description: "Transparent 4-stage website engineering workflow: discovery, architecture, Next.js build, and zero-downtime deployment.",
    url: "https://www.saimdev.site/process",
    siteName: "Saim Dev",
    type: "website",
  },
};

const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Saim Dev 4-Stage Website Engineering Process",
  "description": "Step-by-step bespoke website engineering workflow from brief to zero-downtime edge deployment.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Discovery & Strategic Brief",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "Define commercial objectives, target audience personas, feature requirements, and timeline constraints."
      }
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Information Architecture & Wireframing",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "Map information architecture, user journeys, data schemas, and high-fidelity wireframes."
      }
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Design & Next.js Full-Stack Engineering",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "Develop bespoke UI components with Next.js 14/15, Tailwind CSS, TypeScript, and clean database integrations."
      }
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Testing, Edge Deployment & Full Code Handover",
      "itemListElement": {
        "@type": "HowToDirection",
        "text": "Execute Core Web Vitals audit, cross-browser validation, DNS configuration, and hand over 100% repository rights."
      }
    }
  ]
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF4A1C] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />

      {/* HEADER / NAVIGATION */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4A1C] group-hover:scale-125 transition-transform" />
            <span className="font-bold text-white tracking-tight text-lg">Saim Dev</span>
          </Link>

          <nav className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <Link href="/services" className="text-white/70 hover:text-white transition-colors">Services</Link>
            <span className="text-white/20">/</span>
            <Link href="/pricing" className="text-white/70 hover:text-white transition-colors">Pricing</Link>
            <span className="text-white/20">/</span>
            <Link href="/tools" className="text-white/70 hover:text-white transition-colors">160 Tools</Link>
          </nav>
        </div>
      </header>

      {/* BREADCRUMBS */}
      <div className="border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-white/70 font-mono">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white font-medium">Engineering Process</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* HERO */}
        <section className="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF4A1C] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
              Proven Delivery Methodology
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.08]" style={{ letterSpacing: "-0.04em" }}>
            How We Build &amp; Deploy Your Website
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            No missed deadlines, no surprise invoices, and no bloated agency middlemen. A transparent 4-stage engineering sprint with direct engineer communication from brief to production launch.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-white/75 mb-10">
            <span className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#FF4A1C]" />
              <span>5–12 Day Delivery</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2">
              <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Fixed-Price Quote</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>50/50 Milestones</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20project%20timeline%20and%20process."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF4A1C] hover:bg-[#FF4A1C]/90 text-white font-semibold text-sm tracking-tight shadow-[0_4px_24px_rgba(255,74,28,0.3)] transition-all active:scale-95"
            >
              <span>Schedule Initial Brief</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white font-medium text-sm tracking-tight transition-colors"
            >
              <span>View Transparent Pricing</span>
            </Link>
          </div>
        </section>

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
