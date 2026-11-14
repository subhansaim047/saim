import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Zap, HelpCircle, Code2 } from "lucide-react";
import { FooterSection } from "@/components/FooterSection";
import { RhHeader } from "@/components/rh/RhHeader";
import {
  RhHeroPinned,
  RhProcessCarousel,
  RhSystemRows,
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
      <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
        <RhHeader theme="dark" />

        {/* 1. EXACT rh.design PAGE-OPEN HERO (3D Cube + Laser-Draw Strip) */}
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
        />

        {/* TRUST STATS BAR */}
        <section className="px-5 py-14 max-w-[1168px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#141414] border border-white/10 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-[#BAFF00] mb-0.5">90+</div>
              <div className="text-xs text-white/60">Google Core Web Vitals</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">&lt;0.8s</div>
              <div className="text-xs text-white/60">Sub-Second Load Time</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">5-10 Days</div>
              <div className="text-xs text-white/60">Rapid Sprint Turnaround</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">£390+</div>
              <div className="text-xs text-white/60">Fixed GBP Pricing (No Retainers)</div>
            </div>
          </div>
        </section>

        {/* KEY TECHNICAL DEFINITIONS */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 font-bold">
              Core Technical Concepts
            </h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-white/80">
              <div className="space-y-1.5">
                <dt className="text-white font-semibold text-sm">What is Next.js?</dt>
                <dd className="text-white/60 leading-relaxed font-light">
                  Next.js is a full-stack React web framework designed by Vercel. It combines server-side rendering (SSR), static site generation (SSG), and edge middleware to deliver fast, secure, and search-optimised websites for modern businesses.
                </dd>
              </div>
              <div className="space-y-1.5">
                <dt className="text-white font-semibold text-sm">What are Core Web Vitals?</dt>
                <dd className="text-white/60 leading-relaxed font-light">
                  Core Web Vitals are Google’s standardized metrics measuring real-world web page performance, primarily Largest Contentful Paint (loading speed &lt; 2.5s), Interaction to Next Paint (responsiveness &lt; 200ms), and Cumulative Layout Shift (visual stability &lt; 0.1).
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* WHY UK BUSINESSES CHOOSE SAIM DEV VS UK AGENCIES */}
        <section className="py-16 sm:py-24 border-t border-white/10 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase text-primary tracking-wider mb-2 block">
                Agile Engineering vs Bloated Agencies
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white">
                Why Pay £3,000–£5,000+ to Slow UK Agencies?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional Agency */}
              <div className="p-7 rounded-2xl border border-red-500/20 bg-red-950/10 flex flex-col gap-4">
                <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                  <span>Traditional UK Digital Agencies</span>
                </h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span><strong>£3,000 – £8,000+</strong> standard upfront quotes with monthly maintenance retainers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Heavy, slow WordPress themes with 40+ plugins that fail Google Core Web Vitals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>6 to 12 weeks average timeline with endless bureaucratic meetings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span>Vulnerable to security breaches, database hacks, and plugin updates breaking the site.</span>
                  </li>
                </ul>
              </div>

              {/* Saim Dev */}
              <div className="p-7 rounded-2xl border border-primary/40 bg-primary/[0.04] flex flex-col gap-4 shadow-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Saim Dev (Next.js 16 Specialist)</span>
                </h3>
                <ul className="space-y-3 text-sm text-white/85">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><strong>Transparent fixed pricing from £390</strong> with zero recurring monthly lock-ins.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Pure Next.js 16 + React 19 architecture loading in under 1 second.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Live production deployment delivered in <strong>5 to 10 days</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Serverless, unhackable static delivery with free global CDN and SSL.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UK TRANSPARENT PRICING IN GBP */}
        <section className="py-16 sm:py-24 border-t border-white/10 bg-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase text-primary tracking-wider mb-2 block">
                UK & Europe Packages
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-white mb-3">
                Transparent GBP Pricing
              </h2>
              <p className="text-white/60 text-sm">
                Fixed one-time investment. Invoicing ready for UK Ltd & European VAT registered entities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Starter */}
              <div className="p-6 rounded-2xl border border-white/10 bg-[#0f0f0f] flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-mono text-white/60">Single Offer</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">Landing Page</h3>
                  <div className="text-3xl font-bold text-white mb-4">£250 <span className="text-xs font-normal text-white/50">one-time</span></div>
                  <p className="text-xs text-white/60 mb-6">Ideal for Google Ads campaigns, London service promotions, and new product launches.</p>
                  <ul className="space-y-2 text-xs text-white/80 mb-6">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 1 High-Converting Page</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> WhatsApp & Call Integration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Sub-Second Loading Speed</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 3–5 Days Turnaround</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20order%20the%20Landing%20Page%20package%20(£250)"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-semibold"
                >
                  Order on WhatsApp
                </a>
              </div>

              {/* Business Starter */}
              <div className="p-6 rounded-2xl border border-white/10 bg-[#161616] flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-mono text-primary font-bold">Standard Business</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">Starter Plan</h3>
                  <div className="text-3xl font-bold text-white mb-4">£390 <span className="text-xs font-normal text-white/50">one-time</span></div>
                  <p className="text-xs text-white/60 mb-6">Complete 5-page digital presence for UK clinics, tradesmen, consultants, and boutiques.</p>
                  <ul className="space-y-2 text-xs text-white/80 mb-6">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Up to 5 Custom Pages</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Local UK SEO & Schema Markup</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> GDPR Cookie Banner Included</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 5–7 Days Turnaround</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20order%20the%20Starter%20Plan%20(£390)"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-2.5 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all text-xs font-semibold"
                >
                  Order on WhatsApp
                </a>
              </div>

              {/* Full Growth */}
              <div className="p-6 rounded-2xl border border-primary/40 bg-[#202020] flex flex-col justify-between relative shadow-2xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-[10px] font-bold px-3 py-0.5 rounded-full uppercase">
                  Best Value in UK
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-primary">Full Scale</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">Business Plan</h3>
                  <div className="text-3xl font-bold text-white mb-4">£790 <span className="text-xs font-normal text-white/50">one-time</span></div>
                  <p className="text-xs text-white/60 mb-6">Dominant 15-page web platform with blog system, analytics, and lead capture funnels.</p>
                  <ul className="space-y-2 text-xs text-white/80 mb-6">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Up to 15 Pages & Blog System</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Optimised Core Web Vitals Guaranteed</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Full Analytics & Search Console</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-primary" /> 30 Days Priority Support</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20order%20the%20Business%20Plan%20(£790)"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-2.5 rounded-full bg-primary text-black hover:brightness-110 transition-all text-xs font-bold shadow-md"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CONTEXTUAL NAVIGATION */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/10">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-1">Looking for packaged solutions or custom scopes?</h3>
              <p className="text-xs sm:text-sm text-white/60">Compare transparent deliverables, case study metrics, or get a direct project estimate.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/services"
                className="text-xs font-semibold px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Explore our web development services
              </Link>
              <Link
                href="/contact"
                className="text-xs font-semibold px-4 py-2.5 rounded-full bg-primary text-black hover:brightness-110 transition-colors"
              >
                Discuss your website project
              </Link>
            </div>
          </div>
        </section>

        {/* UK FAQ */}
        <section className="py-16 sm:py-24 border-t border-white/10 bg-black">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase text-primary tracking-wider mb-2 block">
                UK Business Questions
              </span>
              <h2 className="text-3xl font-normal text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="font-semibold text-white text-base mb-2">Why choose Next.js over WordPress for a UK business?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Traditional WordPress sites suffer from plugin bloat and slow server response times (often 3–5 seconds), which hurts conversions and UK search engine rankings. Next.js serves pre-rendered static content instantly across global edge servers with 95+ PageSpeed scores.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="font-semibold text-white text-base mb-2">How does pricing and invoicing work for UK & European clients?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  All projects feature transparent, fixed pricing in GBP (£) or EUR (€) with zero hidden fees. We provide compliant invoices formatted for UK Ltd and European reverse-charge VAT accounting.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="font-semibold text-white text-base mb-2">Are your websites fully Privacy-conscious?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Yes. Every website is built with strict adherence to UK GDPR and EU data protection standards, including privacy-friendly cookie consent banners, SSL encryption, and zero unauthorized third-party trackers.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/10 bg-white/[0.02]">
                <h3 className="font-semibold text-white text-base mb-2">What is the typical project delivery timeline?</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Starter business sites are delivered in 5–7 working days. Full multi-page business websites take 7–10 working days from project kickoff to live production deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <RhSystemRows
          overline="UK NEXT.JS ARCHITECTURE"
          title="Engineered for UK scale."
          titleMuted="Zero WordPress bloat."
          subtitle="Every UK deployment ships with App Router edge rendering, strict TypeScript safety, and 100% repository ownership."
          rows={[
            {
              num: "01",
              title: "Edge SSR & <0.8s LCP",
              description: "Server components and Vercel edge caching built to clear Google Core Web Vitals across 4G mobile networks nationwide.",
              tags: ["Next.js 15", "Edge SSR", "LCP < 0.8s"],
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

        <RhProcessCarousel
          overline="UK DELIVERY SPRINT"
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
              description: "Lighthouse 99+ tuning, structured data validation, and cross-browser device verification.",
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
          quote="Saim Dev rebuilt our slow agency WordPress site into a sub-second Next.js platform in seven days — our UK organic enquiries doubled within six weeks."
          author="James Thornton"
          role="Operations Director, UK Trade Services"
          ctaHref="/contact"
          ctaLabel="Start UK Sprint"
        />

        {/* BOTTOM CTA BANNER */}
        <section className="py-16 sm:py-20 border-t border-white/10 bg-black text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
              Ready to Upgrade Your UK Digital Presence?
            </h2>
            <p className="text-white/60 text-sm mb-8">
              Discuss your project directly on WhatsApp. No sales pitch, just honest technical advice.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20Next.js%20website%20for%20my%20UK%20business"
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-black font-semibold text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-xl"
              >
                Chat on WhatsApp (+92 319 6526604)
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all border border-white/15"
              >
                Discuss your website project via enquiry form
              </Link>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </>
  );
}
