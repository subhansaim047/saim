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
  title: "Takeaway Website Design London | Online Ordering | Saim Dev",
  description: "Custom Next.js takeaway ordering websites for London restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/services/takeaway-web-design-london",
    languages: {
      "en-GB": "https://www.saimdev.site/services/takeaway-web-design-london",
    },
  },
  openGraph: {
    title: "Takeaway Website Design London | Online Ordering | Saim Dev",
    description: "Custom Next.js takeaway ordering websites for London restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering.",
    url: "https://www.saimdev.site/services/takeaway-web-design-london",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Website Design London - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Takeaway Website Design London | Online Ordering | Saim Dev",
    description: "Custom Next.js takeaway ordering websites for London restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const londonFaqs = [
  {
    q: "How does a direct ordering website save money for London takeaways?",
    a: "London food businesses face some of the highest overheads in the UK. Aggregator platforms like Just Eat, Deliveroo, and Uber Eats take between 20% and 34% of every order. With a custom Next.js website from Saim Dev starting at £250 fixed price, London takeaways take orders directly via WhatsApp or digital checkout, eliminating aggregator commissions entirely.",
  },
  {
    q: "Do your London restaurant websites support Natasha's Law allergen filters?",
    a: "Yes. Every menu features an interactive 14-allergen filter matrix built specifically to meet the Food Information Regulations 2014 and Natasha's Law guidance. London diners can instantly filter dishes for allergens such as gluten, nuts, dairy, celery, or shellfish before placing their order.",
  },
  {
    q: "Which areas and boroughs of London do you support?",
    a: "We work remotely with food operators across all 32 London boroughs, including Westminster, Camden, Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Croydon, Ealing, and Greenwich, as well as Greater London.",
  },
  {
    q: "How quickly can a London takeaway website be launched?",
    a: "Most London takeaway websites launch within 3 to 5 business days once your menu, pricing, and branding materials are received. We configure domain routing, Google local search optimization, and direct WhatsApp kitchen routing.",
  },
];

export default function LondonTakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design-london";

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
        name: "London",
        item: canonicalUrl,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Takeaway Website Design London - Saim Dev",
    description: "Custom Next.js takeaway ordering websites for London restaurants from £250. Cut Just Eat commissions with Natasha's Law allergen filters & WhatsApp ordering.",
    url: canonicalUrl,
    priceRange: "£250",
    areaServed: {
      "@type": "City",
      name: "London",
    },
    provider: {
      "@type": "Person",
      name: "Saim Dev",
      url: "https://www.saimdev.site/about",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "London Takeaway Web Design Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "London Takeaway Direct Ordering System",
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
    mainEntity: londonFaqs.map((f) => ({
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
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20London%20takeaway%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all shadow"
          >
            <span>London Enquiries</span>
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
              London
            </li>
          </ol>
        </nav>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-mono font-bold uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>London Restaurant &amp; Takeaway Tech</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Takeaway Website Design London
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Empowering independent London takeaways, cafes, and dark kitchens to eliminate 30%+ Just Eat and Deliveroo fees with custom, lightning-fast Next.js direct ordering websites.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20London%20takeaway%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Build London Takeaway Site (£250 Fixed)</span>
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
              <div className="text-2xl font-extrabold text-amber-400 font-mono">32 Boroughs</div>
              <div className="text-xs text-white/70 font-medium">London Coverage</div>
              <div className="text-[11px] text-white/50">All London regions</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">14 Allergens</div>
              <div className="text-xs text-white/70 font-medium">Interactive Filter</div>
              <div className="text-[11px] text-white/50">Natasha&apos;s Law Compliant</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">3–5 Days</div>
              <div className="text-xs text-white/70 font-medium">Turnaround Time</div>
              <div className="text-[11px] text-white/50">Swift deployment</div>
            </div>
          </div>
        </div>

        {/* Direct Answer Box (AEO) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10">
          <dl className="space-y-2 text-xs sm:text-sm text-white/80">
            <dt className="text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
              Direct Answer: How Does It Work for London Food Businesses?
            </dt>
            <dd className="text-white/70 leading-relaxed font-light">
              Saim Dev builds commission-free takeaway websites for London restaurants and food businesses starting from £250. Each site includes an online ordering menu, statutory 14-allergen filtering aligned with Natasha&apos;s Law, instant WhatsApp kitchen dispatch, and full Google local SEO setup — helping London takeaways recover 20% to 34% commission fees previously lost to third-party delivery aggregators.
            </dd>
          </dl>
        </div>

        {/* Commission Calculator */}
        <CommissionSavingsCalculator />

        {/* London Market Realities */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              Capital City Dining Landscape
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why London Takeaways Must Own Their Customer Data
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              London is home to more than 18,000 food establishments. Relying entirely on delivery aggregators means losing your brand identity, paying thousands in commissions every month, and never owning your customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <Percent className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Reclaim Monthly Profit</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                If your London kitchen does £10,000 per month via delivery apps, you forfeit up to £3,400 every single month. A direct website pays for itself in less than two weeks.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">London Allergen Compliance</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                London Environmental Health Officers (EHOs) rigorously audit food businesses for accurate allergen declarations. Our digital menus highlight all 14 statutory allergens clearly.
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-neutral-900 border border-white/10 space-y-3">
              <Zap className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Sub-Second Mobile Ordering</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Londoners expect immediate mobile responses. Built with Next.js, our menus load in under 800 milliseconds, ensuring zero drop-off on busy 4G and 5G mobile networks.
              </p>
            </div>
          </div>
        </div>

        {/* London Coverage Areas */}
        <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              Hyper-Local Coverage
            </span>
            <h2 className="text-2xl font-bold text-white">
              Serving All London Boroughs &amp; Neighborhoods
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Whether you manage a fish and chip shop in East London, an artisan bakery in South London, or a high-volume pizza takeaway in West London:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-white/80">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Central London &amp; Soho</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Camden &amp; Islington</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Hackney &amp; Shoreditch</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Tower Hamlets &amp; Bow</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Brixton &amp; Lambeth</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Southwark &amp; Bermondsey</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Wandsworth &amp; Battersea</div>
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">Ealing &amp; Acton</div>
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
              London FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {londonFaqs.map((faq, i) => (
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
            Ready to Launch Your London Takeaway Website?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
            Contact us today on WhatsApp. Fixed £250 setup, no recurring commissions, and your digital menu live within 3–5 days.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20get%20started%20with%20a%20London%20takeaway%20website"
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
