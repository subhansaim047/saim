import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, Clock, ShieldCheck, ChevronRight, HelpCircle } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Shopify & E-Commerce Web Development UK | Saim Dev",
  description: "High-converting Shopify and custom e-commerce web development in the UK. Sub-second product filtering, friction-free checkout, and zero lock-in.",
  alternates: {
    canonical: "https://www.saimdev.site/services/ecommerce-shopify",
  },
  openGraph: {
    title: "Shopify & E-Commerce Web Development UK | Saim Dev",
    description: "High-converting Shopify and custom e-commerce web development in the UK. Sub-second product filtering, friction-free checkout, and zero lock-in.",
    url: "https://www.saimdev.site/services/ecommerce-shopify",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify & E-Commerce Web Development UK | Saim Dev",
    description: "High-converting Shopify and custom e-commerce web development in the UK. Sub-second product filtering, friction-free checkout, and zero lock-in.",
    creator: "@saimwebdev",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Shopify & Custom E-Commerce Web Development",
  "description": "High-converting Shopify and custom e-commerce web development in the UK. Sub-second product filtering, friction-free checkout, and zero lock-in.",
  "provider": {
    "@type": "Organization",
    "name": "Saim Dev",
    "url": "https://www.saimdev.site"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "United Kingdom"
    },
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "AdministrativeArea",
      "name": "European Union"
    }
  ],
  "offers": {
    "@type": "Offer",
    "price": "850",
    "priceCurrency": "GBP"
  }
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you build on Shopify or custom headless commerce?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build both! For standard retail brands, we build custom, lightweight Shopify themes using clean Liquid and Tailwind CSS. For high-volume brands requiring extreme performance, we build headless Next.js Commerce storefronts."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a custom Shopify or e-commerce website cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our custom e-commerce storefronts start from \u00a3850 for boutique online shops up to \u00a31,800+ for multi-category enterprise stores with complex shipping logic. All pricing is fixed and transparent."
      }
    },
    {
      "@type": "Question",
      "name": "Can you migrate my store from WooCommerce or Magento to Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We handle complete catalog migrations \u2014 transferring product data, customer accounts, order history, and 301 SEO redirects to preserve your Google rankings."
      }
    },
    {
      "@type": "Question",
      "name": "Will my e-commerce site load fast on mobile devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We strictly optimize assets, eliminate unneeded tracking scripts, and target mobile LCP under 2.5s and zero layout shifts."
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
      "name": "Services",
      "item": "https://www.saimdev.site/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Shopify & Custom E-Commerce Web Development",
      "item": "https://www.saimdev.site/services/ecommerce-shopify"
    }
  ]
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#FF4A1C] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <Link href="/services" className="text-white/70 hover:text-white transition-colors">All Services</Link>
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
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/30" />
          <span className="text-white font-medium truncate">E-Commerce & Retail Engineering</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* HERO SECTION */}
        <section className="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF4A1C] animate-pulse" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
              E-Commerce & Retail Engineering
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.08]" style={{ letterSpacing: "-0.04em" }}>
            Shopify & Custom E-Commerce Web Development
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
            High-converting, bespoke online stores engineered for speed, high average order value (AOV), and frictionless checkout on mobile devices.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-white/75 mb-10">
            <span className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#FF4A1C]" />
              <span>Launch in 7–12 business days</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Code Ownership</span>
            </span>
            <span className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white font-medium">
              <span>From £850</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20discussing%20E-Commerce & Retail Engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF4A1C] hover:bg-[#FF4A1C]/90 text-white font-semibold text-sm tracking-tight shadow-[0_4px_24px_rgba(255,74,28,0.3)] transition-all active:scale-95"
            >
              <span>Discuss Project on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/#estimator"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white font-medium text-sm tracking-tight transition-colors"
            >
              <span>Instant Scope Estimator</span>
            </Link>
          </div>
        </section>

        {/* PROBLEMS SOLVED */}
        <section className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">Market Reality</span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Why standard agency approaches fall short</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight mb-2.5">Sluggish Checkout & Abandoned Carts</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Slow loading themes and clunky checkouts cause up to 70% of shoppers to abandon carts before completing payment.</p>
            </div>
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight mb-2.5">Bloated App Store Chaos</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Installing dozens of Shopify apps slows your storefront down, inflates monthly software bills, and creates code conflicts.</p>
            </div>
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                <AlertCircle className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-medium text-white tracking-tight mb-2.5">Generic Cookie-Cutter Look</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Standard pre-made templates look identical to competitors, failing to establish the premium brand trust needed for high conversions.</p>
            </div>
            
          </div>
        </section>

        {/* DETAILED DELIVERABLES */}
        <section className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">What We Deliver</span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Engineering deliverables &amp; specifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[#FF4A1C] shrink-0 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-1.5">Custom Shopify Theme / Headless Commerce</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Bespoke Liquid code or headless Next.js Commerce storefront designed without bloated third-party page builders.</p>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[#FF4A1C] shrink-0 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-1.5">Instant Faceted Product Search & Filtering</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Sub-second product catalog filtering by size, color, price, and category that works seamlessly on mobile.</p>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[#FF4A1C] shrink-0 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-1.5">High-Converting Mobile Cart & Upsell Flow</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Slide-out drawer cart with free shipping progress bars, cross-sell recommendation chips, and 1-click checkout.</p>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[#FF4A1C] shrink-0 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-1.5">Seamless Payment Gateways Integration</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Native Apple Pay, Google Pay, Shop Pay, PayPal, and Stripe integration for friction-free transactions.</p>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[#FF4A1C] shrink-0 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-1.5">Automated Shipping, Inventory & ERP Sync</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Integration with UK carriers (Royal Mail, DPD) and automated stock tracking across online and physical channels.</p>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-xl flex items-start gap-4">
              <CheckCircle2 className="w-5 h-5 text-[#FF4A1C] shrink-0 mt-1" />
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-1.5">Technical SEO & Schema Product Markup</h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">Valid Product, Offer, and BreadcrumbList structured data for rich Google Shopping snippets.</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* REAL PEOPLE ALSO ASK FAQS */}
        <section className="mb-20 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4A1C] block mb-2">Direct Answers</span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            
            <details className="p-6 rounded-2xl bg-[#121212] border border-white/10 cursor-pointer group" open>
              <summary className="font-medium text-base sm:text-lg text-white list-none flex items-center justify-between gap-4">
                <span>Do you build on Shopify or custom headless commerce?</span>
                <HelpCircle className="w-4 h-4 text-white/40 group-hover:text-[#FF4A1C] transition-colors shrink-0" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-white/70 font-light leading-relaxed pt-3 border-t border-white/5">
                We build both! For standard retail brands, we build custom, lightweight Shopify themes using clean Liquid and Tailwind CSS. For high-volume brands requiring extreme performance, we build headless Next.js Commerce storefronts.
              </p>
            </details>
            
            <details className="p-6 rounded-2xl bg-[#121212] border border-white/10 cursor-pointer group" open>
              <summary className="font-medium text-base sm:text-lg text-white list-none flex items-center justify-between gap-4">
                <span>How much does a custom Shopify or e-commerce website cost?</span>
                <HelpCircle className="w-4 h-4 text-white/40 group-hover:text-[#FF4A1C] transition-colors shrink-0" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-white/70 font-light leading-relaxed pt-3 border-t border-white/5">
                Our custom e-commerce storefronts start from £850 for boutique online shops up to £1,800+ for multi-category enterprise stores with complex shipping logic. All pricing is fixed and transparent.
              </p>
            </details>
            
            <details className="p-6 rounded-2xl bg-[#121212] border border-white/10 cursor-pointer group" open>
              <summary className="font-medium text-base sm:text-lg text-white list-none flex items-center justify-between gap-4">
                <span>Can you migrate my store from WooCommerce or Magento to Shopify?</span>
                <HelpCircle className="w-4 h-4 text-white/40 group-hover:text-[#FF4A1C] transition-colors shrink-0" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-white/70 font-light leading-relaxed pt-3 border-t border-white/5">
                Yes. We handle complete catalog migrations — transferring product data, customer accounts, order history, and 301 SEO redirects to preserve your Google rankings.
              </p>
            </details>
            
            <details className="p-6 rounded-2xl bg-[#121212] border border-white/10 cursor-pointer group" open>
              <summary className="font-medium text-base sm:text-lg text-white list-none flex items-center justify-between gap-4">
                <span>Will my e-commerce site load fast on mobile devices?</span>
                <HelpCircle className="w-4 h-4 text-white/40 group-hover:text-[#FF4A1C] transition-colors shrink-0" />
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-white/70 font-light leading-relaxed pt-3 border-t border-white/5">
                Yes. We strictly optimize assets, eliminate unneeded tracking scripts, and target mobile LCP under 2.5s and zero layout shifts.
              </p>
            </details>
            
          </div>
        </section>

        {/* TWO-WAY INTERNAL LINKS (Tools & Blogs) */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-medium text-white mb-3">Explore Related Tools &amp; Case Studies</h2>
          <p className="text-xs sm:text-sm text-white/70 mb-8 max-w-xl mx-auto font-light">
            Review live interactive compliance software, open calculation engines, and engineering guides built by our studio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            
            <Link href="/tools/food-cost-calculator" className="p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#FF4A1C]/50 transition-all group">
              <span className="text-[10px] font-mono text-[#FF4A1C] uppercase block mb-1">Interactive Software</span>
              <span className="text-sm font-medium text-white group-hover:text-[#FF4A1C] transition-colors block">Food Cost Calculator</span>
              <span className="text-xs text-white/60 font-light block mt-1">E-commerce margin and pricing protection</span>
            </Link>
            
            <Link href="/tools/recipe-batch-calculator" className="p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#FF4A1C]/50 transition-all group">
              <span className="text-[10px] font-mono text-[#FF4A1C] uppercase block mb-1">Interactive Software</span>
              <span className="text-sm font-medium text-white group-hover:text-[#FF4A1C] transition-colors block">Recipe Batch Scaler</span>
              <span className="text-xs text-white/60 font-light block mt-1">Wholesale inventory and production scaling</span>
            </Link>
            
            <Link href="/blog/mastering-food-cost-percentage-commercial-kitchen-calculator" className="p-4 rounded-2xl bg-black/60 border border-white/10 hover:border-[#FF4A1C]/50 transition-all group">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">Technical Guide</span>
              <span className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors block">Protecting Product Margins in Commercial Retail</span>
              <span className="text-xs text-white/60 font-light block mt-1">Read technical architecture analysis</span>
            </Link>
            
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="text-center py-12 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-medium text-white mb-4">Ready to engineer your platform?</h2>
          <p className="text-xs sm:text-sm text-white/70 mb-8 max-w-lg mx-auto font-light">
            Contact our senior software engineer directly for a transparent scope review and fixed milestone quote.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20E-Commerce & Retail Engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-sm tracking-tight transition-all active:scale-95"
            >
              <span>Start on WhatsApp (+92 319 6526604)</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white font-medium text-sm tracking-tight transition-colors"
            >
              <span>Submit Web Inquiry</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
