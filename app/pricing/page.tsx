import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck, Flame, HelpCircle, FileText, Clock, ExternalLink } from "lucide-react";
import { SiteFooter } from "../../src/components/SiteFooter";

export const metadata: Metadata = {
  title: "Website Development Pricing & Packages UK | Saim Dev",
  description: "Transparent fixed-price web development packages from £250. Zero monthly retainers, 100% code ownership, UK CAP Code compliant terms, and 50/50 milestone safety.",
  alternates: {
    canonical: "https://www.saimdev.site/pricing",
  },
  openGraph: {
    title: "Website Development Pricing & Packages UK | Saim Dev",
    description: "Transparent fixed-price web development packages from £250. Zero monthly retainers, 100% code ownership, and 50/50 milestone protection.",
    url: "https://www.saimdev.site/pricing",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Website Development Pricing & Packages UK | Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Pricing & Packages UK | Saim Dev",
    description: "Transparent fixed-price web development packages from £250. Zero monthly retainers, 100% code ownership, and 50/50 milestone protection.",
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Website Development Pricing & Packages UK",
  "description": "Transparent fixed-price web development packages and custom software rates from Saim Dev.",
  "url": "https://www.saimdev.site/pricing",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"]
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "250",
    "highPrice": "2500",
    "offerCount": "4"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are there any hidden monthly fees or recurring retainers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All our website packages are one-off fixed fees. You own 100% of the code, domain, and hosting accounts from day one. You only pay your own hosting provider directly (e.g. Vercel free tier or £16/mo Pro, Cloudflare £0, or your chosen domain registrar)."
      }
    },
    {
      "@type": "Question",
      "name": "How does the 50/50 milestone payment work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You pay a 50% initial deposit to begin wireframing and engineering. The remaining 50% is only payable after you test and approve the completed staging website on our private preview link, before production DNS launch."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I need changes after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every package includes 14 to 30 days of direct post-launch warranty support where we fix any bugs or issues immediately at zero extra charge. Afterwards, we offer affordable on-demand hourly maintenance or straightforward fixed-rate update quotes."
      }
    },
    {
      "@type": "Question",
      "name": "How do your prices compare to traditional UK digital agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traditional UK digital agencies have high office overheads, account managers, and sales commissions, typically charging £3,000 to £15,000+ for standard websites. Because you work directly with a senior full-stack engineer remotely, you receive agency-grade Next.js engineering at a fraction of the traditional cost."
      }
    }
  ]
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
      "name": "Pricing",
      "item": "https://www.saimdev.site/pricing"
    }
  ]
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF4A1C] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <Link href="/process" className="text-white/70 hover:text-white transition-colors">Process</Link>
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
          <span className="text-white font-medium">Pricing &amp; Packages</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* HERO */}
        <section className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF4A1C] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
              Clear Fixed Investment
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.08]" style={{ letterSpacing: "-0.04em" }}>
            Transparent Pricing. Zero Monthly Lock-In.
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            Fixed-fee website engineering for UK and international businesses. 100% source code ownership, no mandatory monthly agency retainers, and safe 50/50 milestone invoicing.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-white/75">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>UK CAP Code &amp; ASA compliant pricing. Sourced market averages and honest scopes.</span>
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Landing Page */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/10 shadow-2xl flex flex-col justify-between group hover:border-white/20 transition-all">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/60 block mb-2">Campaign &amp; Local</span>
              <h2 className="text-2xl font-medium text-white mb-2 tracking-tight">Landing Page</h2>
              <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                High-converting 1-page online presence for single offers, Google Ads, or local trades.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl sm:text-5xl font-medium text-white tracking-tight">£250</span>
                <span className="text-xs font-mono text-white/50 uppercase">One-off</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                {[
                  "1 High-converting custom page",
                  "Mobile-first fast responsive design",
                  "Direct WhatsApp & lead capture forms",
                  "Google Maps & business schema",
                  "5 business days fast delivery",
                  "14 days direct post-launch warranty"
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4A1C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20the%20Landing%20Page%20plan%20(£250)."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-black font-semibold text-xs font-mono uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started — Landing Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Starter Plan */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-white/10 shadow-2xl flex flex-col justify-between group hover:border-white/20 transition-all">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">Most Popular For Small Businesses</span>
              <h2 className="text-2xl font-medium text-white mb-2 tracking-tight">Starter Plan</h2>
              <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                Complete multi-page presence for established local businesses, clinics, and service firms.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl sm:text-5xl font-medium text-white tracking-tight">£390</span>
                <span className="text-xs font-mono text-white/50 uppercase">One-off</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                {[
                  "Up to 5 custom Next.js pages",
                  "Sub-second page speeds & optimized assets",
                  "Interactive quote or booking integration",
                  "Local SEO metadata & JSON-LD schema",
                  "7 business days delivery",
                  "30 days direct post-launch warranty"
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4A1C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20the%20Starter%20Plan%20(£390)."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-white/[0.08] hover:bg-white text-white hover:text-black font-semibold text-xs font-mono uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started — Starter Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Business Plan */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#141211] border-2 border-[#FF4A1C]/60 shadow-[0_12px_48px_rgba(255,74,28,0.15)] flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-2xl bg-[#FF4A1C] text-[10px] font-mono uppercase tracking-widest text-white font-bold flex items-center gap-1">
              <Flame className="w-3 h-3 text-white" />
              <span>Recommended</span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">Full Growth &amp; Scale</span>
              <h2 className="text-2xl font-medium text-white mb-2 tracking-tight">Business Plan</h2>
              <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                Bespoke architecture engineered for competitive regional keywords and high lead volumes.
              </p>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-4xl sm:text-5xl font-medium text-white tracking-tight">£790</span>
                <span className="text-xs font-mono text-white/50 uppercase">One-off</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                {[
                  "Up to 15 custom pages & landing sections",
                  "Bespoke custom UI/UX design & brand identity",
                  "Comprehensive SEO architecture & silo linking",
                  "CRM, WhatsApp API & email notifications",
                  "10 business days delivery",
                  "30 days direct priority support"
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs text-white/75">
                    <CheckCircle2 className="w-4 h-4 text-[#FF4A1C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20the%20Business%20Plan%20(£790)."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#FF4A1C] hover:bg-[#FF4A1C]/90 text-white font-semibold text-xs font-mono uppercase tracking-wider text-center shadow-[0_4px_24px_rgba(255,74,28,0.35)] transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started — Business Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* CUSTOM & SAAS CALLOUT */}
        <section className="p-8 sm:p-12 rounded-3xl bg-[#121212] border border-white/10 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">Bespoke Software &amp; SaaS MVPs</span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-3">Custom Web Applications &amp; Member Portals</h2>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Need user logins, Stripe recurring billing, database dashboards, or custom calculators? We engineer scalable full-stack web applications on Next.js and PostgreSQL from £1,250.
            </p>
          </div>
          <Link
            href="/services/custom-web-apps"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-neutral-200 transition-all shrink-0"
          >
            <span>Explore Custom Web Apps</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </Link>
        </section>

        {/* FAQS */}
        <section className="max-w-3xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">Common Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">Frequently Asked Pricing Questions</h2>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <details key={item.name} className="p-6 rounded-2xl bg-[#121212] border border-white/10 cursor-pointer group" open>
                <summary className="font-medium text-base sm:text-lg text-white list-none flex items-center justify-between gap-4">
                  <span>{item.name}</span>
                  <HelpCircle className="w-4 h-4 text-white/40 group-hover:text-[#FF4A1C] transition-colors shrink-0" />
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-white/70 font-light leading-relaxed pt-3 border-t border-white/5">
                  {item.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="text-center py-12 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">Request a free fixed-fee quote</h2>
          <p className="text-xs sm:text-sm text-white/70 mb-8 max-w-lg mx-auto font-light">
            Share your project requirements with Saim directly on WhatsApp for an immediate response.
          </p>
          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20a%20quote%20for%20my%20website%20project."
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
