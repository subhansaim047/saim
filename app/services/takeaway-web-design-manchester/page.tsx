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
  title: "Takeaway Website Design Manchester | Direct Ordering | Saim Dev",
  description: "Takeaway website design for Manchester restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp kitchen dispatch.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/services/takeaway-web-design-manchester",
    languages: {
      "en-GB": "https://www.saimdev.site/services/takeaway-web-design-manchester",
    },
  },
  openGraph: {
    title: "Takeaway Website Design Manchester | Direct Ordering | Saim Dev",
    description: "Takeaway website design for Manchester restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp kitchen dispatch.",
    url: "https://www.saimdev.site/services/takeaway-web-design-manchester",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Website Design Manchester - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Takeaway Website Design Manchester | Direct Ordering | Saim Dev",
    description: "Takeaway website design for Manchester restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp kitchen dispatch.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const manchesterFaqs = [
  {
    q: "How can Manchester takeaways stop paying high aggregator commissions?",
    a: "Greater Manchester is home to over 5,000 eateries and takeaways. With portals like Just Eat and Uber Eats charging up to 34% per order, food businesses lose substantial revenue. Saim Dev creates direct Next.js ordering websites starting from £250 fixed price, letting you take orders directly via WhatsApp or online payments with 0% commission.",
  },
  {
    q: "Does the Manchester takeaway system include full allergen filtering?",
    a: "Yes. Every menu is equipped with an interactive 14-allergen filter matrix strictly aligned with UK Food Information Regulations 2014 and Natasha's Law guidance. Customers across Manchester can quickly filter out gluten, nuts, dairy, egg, or other statutory allergens.",
  },
  {
    q: "Which areas in Greater Manchester do you cover?",
    a: "We work remotely with food operators across Manchester City Centre, the Northern Quarter, Ancoats, Didsbury, Chorlton, Salford, Trafford, Stockport, Bolton, Bury, Rochdale, Oldham, and Wigan.",
  },
  {
    q: "How long does setup take for a Manchester food business?",
    a: "Most Manchester takeaway builds are launched within 3 to 5 business days after receiving your menu, logo, and price list. We set up domain routing, local SEO, and WhatsApp kitchen routing.",
  },
];

export default function ManchesterTakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design-manchester";

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
        name: "Manchester",
        item: canonicalUrl,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Takeaway Website Design Manchester - Saim Dev",
    description: "Takeaway website design for Manchester restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp kitchen dispatch.",
    url: canonicalUrl,
    priceRange: "£250",
    areaServed: {
      "@type": "City",
      name: "Manchester",
    },
    provider: {
      "@type": "Person",
      name: "Saim Dev",
      url: "https://www.saimdev.site/about",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Manchester Takeaway Web Design Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Manchester Takeaway Direct Ordering System",
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
    mainEntity: manchesterFaqs.map((f) => ({
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
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20Manchester%20takeaway%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all shadow"
          >
            <span>Manchester Enquiries</span>
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
              Manchester
            </li>
          </ol>
        </nav>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-mono font-bold uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Manchester Food &amp; Takeaway Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Takeaway Website Design Manchester
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Fast, bespoke Next.js direct ordering websites for Greater Manchester takeaways, curry houses, and pizza bars. Zero commissions and direct WhatsApp kitchen orders from £250.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Manchester%20takeaway%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Build Manchester Takeaway Site (£250 Fixed)</span>
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
              <div className="text-[11px] text-white/50">Keep 100% of order totals</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">10 Boroughs</div>
              <div className="text-xs text-white/70 font-medium">Manchester Coverage</div>
              <div className="text-[11px] text-white/50">Across Greater Manchester</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">14 Allergens</div>
              <div className="text-xs text-white/70 font-medium">Interactive Filter</div>
              <div className="text-[11px] text-white/50">Natasha&apos;s Law Compliant</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">3–5 Days</div>
              <div className="text-xs text-white/70 font-medium">Turnaround Time</div>
              <div className="text-[11px] text-white/50">Rapid launch</div>
            </div>
          </div>
        </div>

        {/* Direct Answer Box (AEO) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10">
          <dl className="space-y-2 text-xs sm:text-sm text-white/80">
            <dt className="text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
              Direct Answer: How Does Direct Ordering Benefit Manchester Food Operators?
            </dt>
            <dd className="text-white/70 leading-relaxed font-light">
              Saim Dev provides custom, commission-free takeaway website design for Manchester eateries from £250. Rather than paying 20% to 34% commissions to third-party aggregator portals, your Manchester customers order directly via a sub-second Next.js menu with live 14-allergen filtering aligned with Natasha&apos;s Law, receiving orders straight to your kitchen WhatsApp or tablet.
            </dd>
          </dl>
        </div>

        {/* Commission Calculator */}
        <CommissionSavingsCalculator />

        {/* Manchester Market Context */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              Northern Powerhouse Food Sector
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why Manchester Restaurants Are Moving Away From Food Apps
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              From the Curry Mile in Rusholme to bustling burger bars in the Northern Quarter and Ancoats, independent Manchester takeaways are protecting their margins by taking direct orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <Percent className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Protect Hard-Earned Profit</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Paying thousands of pounds every month to delivery apps drains working capital. A custom £250 website lets you keep every pound paid by your local customers.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Natasha&apos;s Law Safeguards</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                UK legislation requires unambiguous allergen declarations. Our digital menus clearly highlight and filter all 14 statutory allergens for customer peace of mind.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <Zap className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Blazing Edge Performance</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Pre-rendered on global edge networks, our Next.js pages load in under 800ms, making mobile ordering effortless for customers throughout Manchester.
              </p>
            </div>
          </div>
        </div>

        {/* Manchester Coverage Areas */}
        <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              Regional Coverage
            </span>
            <h2 className="text-2xl font-bold text-white">
              Supporting Kitchens Across Greater Manchester
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              We deliver bespoke websites for takeaways, chip shops, and bakeries across all Greater Manchester districts:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-white/80">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Manchester City Centre</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Northern Quarter &amp; Ancoats</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Rusholme (Curry Mile)</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Didsbury &amp; Chorlton</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Salford &amp; MediaCity</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Trafford &amp; Altrincham</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Stockport &amp; Cheadle</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Bolton, Bury &amp; Rochdale</div>
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
              Manchester FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {manchesterFaqs.map((faq, i) => (
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
            Ready to Launch Your Manchester Takeaway Website?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
            Contact us today on WhatsApp. Fixed £250 setup, zero ongoing commissions, and your digital menu live within 3–5 days.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20a%20Manchester%20takeaway%20website"
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
