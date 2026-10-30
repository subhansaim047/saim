import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Percent,
  Smartphone,
  MapPin,
  HelpCircle,
  Clock,
  Check,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { CommissionSavingsCalculator } from "@/components/CommissionSavingsCalculator";

export const metadata: Metadata = {
  title: "Takeaway Website Design Birmingham | Direct Ordering | Saim Dev",
  description: "Takeaway website design in Birmingham from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering for West Midlands food.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/services/takeaway-web-design-birmingham",
    languages: {
      "en-GB": "https://www.saimdev.site/services/takeaway-web-design-birmingham",
    },
  },
  openGraph: {
    title: "Takeaway Website Design Birmingham | Direct Ordering | Saim Dev",
    description: "Takeaway website design in Birmingham from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering for West Midlands food.",
    url: "https://www.saimdev.site/services/takeaway-web-design-birmingham",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Website Design Birmingham - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Takeaway Website Design Birmingham | Direct Ordering | Saim Dev",
    description: "Takeaway website design in Birmingham from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering for West Midlands food.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const birminghamFaqs = [
  {
    q: "How does direct online ordering help Birmingham takeaways increase profits?",
    a: "Birmingham has one of the UK's most celebrated takeaway scenes, including the world-famous Balti Triangle and vibrant street food hubs. With aggregators taking up to 34% in commissions, food operators sacrifice a massive slice of revenue. A custom Next.js website from Saim Dev starting from £250 fixed price allows customers to order directly via WhatsApp or digital card checkout with zero commission fees.",
  },
  {
    q: "Are Natasha's Law allergen declarations included for Birmingham restaurants?",
    a: "Yes. Every menu comes with an interactive 14-allergen filter matrix designed in accordance with the UK Food Information Regulations 2014 and Natasha's Law guidance, allowing customers to easily filter out allergens including gluten, nuts, dairy, celery, mustard, and sesame.",
  },
  {
    q: "Which areas in Birmingham and the West Midlands do you serve?",
    a: "We work remotely with food operators across Birmingham City Centre, Sparkbrook and the Balti Triangle, Digbeth, Edgbaston, Harborne, Moseley, Solihull, Sutton Coldfield, Wolverhampton, Coventry, and Dudley.",
  },
  {
    q: "How fast can our Birmingham takeaway website be deployed?",
    a: "Standard takeaway websites are completed and launched within 3 to 5 working days from receiving your menu and details. We configure domain setup, mobile optimisation, and WhatsApp kitchen routing.",
  },
];

export default function BirminghamTakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design-birmingham";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.saimdev.site/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.saimdev.site/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Takeaway Web Design",
        item: "https://www.saimdev.site/services/takeaway-web-design",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Birmingham",
        item: canonicalUrl,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Takeaway Website Design Birmingham - Saim Dev",
    description: "Takeaway website design in Birmingham from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering for West Midlands food.",
    url: canonicalUrl,
    priceRange: "£250",
    areaServed: {
      "@type": "City",
      name: "Birmingham",
    },
    provider: {
      "@type": "Person",
      name: "Saim Dev",
      url: "https://www.saimdev.site/about",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Birmingham Takeaway Web Design Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Birmingham Takeaway Direct Ordering System",
          price: "250",
          priceCurrency: "GBP",
          description: "Fixed-price £250 Next.js ordering platform with zero commission cuts, 14-allergen menu filtering, and direct kitchen dispatch.",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: birminghamFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-400 selection:text-black">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link
          href="/services/takeaway-web-design"
          className="flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>UK Takeaway Service</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/tools"
            className="text-xs text-white/60 hover:text-white transition-colors hidden sm:inline-block"
          >
            Free Kitchen Tools
          </Link>
          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20Birmingham%20takeaway%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all shadow"
          >
            <span>Birmingham Enquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
          <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li>
              <Link href="/services/takeaway-web-design" className="hover:text-white transition-colors">Takeaway Web Design</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-amber-400 font-semibold" aria-current="page">
              Birmingham
            </li>
          </ol>
        </nav>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-mono font-bold uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Birmingham &amp; West Midlands Food Tech</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Takeaway Website Design Birmingham
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Bespoke Next.js direct ordering platforms for Birmingham curry houses, grill rooms, and takeaways. Keep 100% of order totals with direct WhatsApp kitchen notifications from £250.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Birmingham%20takeaway%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Build Birmingham Site (£250 Fixed)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/allergen-matrix-generator"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all border border-white/15"
            >
              <span>Interactive Allergen Demo</span>
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">0%</div>
              <div className="text-xs text-white/70 font-medium">Commission Fees</div>
              <div className="text-[11px] text-white/50">Zero cuts to portals</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">2nd Largest</div>
              <div className="text-xs text-white/70 font-medium">UK City Market</div>
              <div className="text-[11px] text-white/50">High-volume diner base</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">14 Allergens</div>
              <div className="text-xs text-white/70 font-medium">Interactive Filter</div>
              <div className="text-[11px] text-white/50">Natasha&apos;s Law Compliant</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">3–5 Days</div>
              <div className="text-xs text-white/70 font-medium">Turnaround Time</div>
              <div className="text-[11px] text-white/50">Quick go-to-market</div>
            </div>
          </div>
        </div>

        {/* Direct Answer Box (AEO) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10">
          <dl className="space-y-2 text-xs sm:text-sm text-white/80">
            <dt className="text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
              Direct Answer: How Does Direct Ordering Help Birmingham Food Businesses?
            </dt>
            <dd className="text-white/70 leading-relaxed font-light">
              Saim Dev designs and builds commission-free takeaway ordering websites for Birmingham restaurants and catering businesses starting from £250. Diners order directly from your mobile-optimised digital menu with real-time 14-allergen filtering aligned with Natasha&apos;s Law, dispatching tickets straight to your kitchen WhatsApp and bypassing third-party portal fees.
            </dd>
          </dl>
        </div>

        {/* Commission Calculator */}
        <CommissionSavingsCalculator />

        {/* Birmingham Market Context */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              West Midlands Hospitality Economy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why Birmingham Takeaways Need Independent Ordering
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Birmingham boasts an iconic culinary heritage. But third-party delivery apps eat away at your operational margins. Taking control of your online presence gives you independent customer loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <Percent className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Retain Every Order Pound</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Paying 20% to 34% commission per dish hurts profitability. Direct orders guarantee that 100% of customer spend stays in your Birmingham business.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Natasha&apos;s Law Transparency</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Give your customers confidence with instant allergen identification. Our menus flag all 14 statutory allergens clearly for full transparency.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <Zap className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Instant Kitchen Orders</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Orders arrive formatted directly on your WhatsApp or kitchen tablet, complete with delivery details, item notes, and allergen warnings.
              </p>
            </div>
          </div>
        </div>

        {/* Birmingham Coverage Areas */}
        <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              West Midlands Coverage
            </span>
            <h2 className="text-2xl font-bold text-white">
              Serving Food Operators Across Birmingham &amp; Surrounds
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              We deliver custom websites for eateries across Birmingham and the wider West Midlands conurbation:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-white/80">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Birmingham City Centre</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Balti Triangle (Sparkbrook)</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Digbeth &amp; Bullring Area</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Edgbaston &amp; Harborne</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Moseley &amp; Kings Heath</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Solihull &amp; Shirley</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Sutton Coldfield &amp; Erdington</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Wolverhampton &amp; Dudley</div>
          </div>
        </div>

        {/* Free Kitchen Tools Cross Link */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white text-sm font-semibold mb-1">Looking for statutory kitchen compliance tools?</h3>
            <p className="text-xs text-white/60">Explore our free statutory allergen matrix, food cost calculators, and SFBB records.</p>
          </div>
          <Link
            href="/tools"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0"
          >
            Explore Free Kitchen Tools
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              Birmingham FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {birminghamFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-neutral-900 border border-white/10 px-6 py-4 cursor-pointer hover:border-white/20 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 list-none select-none focus:outline-none">
                  <span className="text-white text-sm font-semibold">{faq.q}</span>
                  <span className="text-amber-400 text-lg font-light flex-shrink-0">+</span>
                </summary>
                <p className="pt-3 pb-1 text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-neutral-900 to-black border border-white/10 space-y-6">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ready to Launch Your Birmingham Takeaway Website?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
            Contact us today on WhatsApp. Fixed £250 setup, zero ongoing commissions, and your digital menu live within 3–5 days.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20a%20Birmingham%20takeaway%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Chat on WhatsApp (+92 319 6526604)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all border border-white/15"
            >
              Submit Project Inquiry
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
