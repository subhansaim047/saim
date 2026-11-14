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
import { RhHeader } from "@/components/rh/RhHeader";
import { CommissionSavingsCalculator } from "@/components/CommissionSavingsCalculator";
import {
  RhHeroPinned,
  RhProcessCarousel,
  RhSystemRows,
} from "@/components/rh/RhModernSections";

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
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
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

      <RhHeader theme="dark" />

      <RhHeroPinned
        badge="Birmingham & West Midlands Food Tech · 0% Commission"
        title={
          <>
            Takeaway Website Design{" "}
            <span className="text-[#939393]">Birmingham</span>
          </>
        }
        subtitle="Saim Dev builds bespoke Next.js takeaway ordering websites for Birmingham and West Midlands restaurants, Balti houses, and burger bars starting from £250 fixed price. Bypass 30%+ Just Eat commissions with Natasha's Law 14-allergen menus across Birmingham, Solihull, and Wolverhampton."
        primaryCta={{
          label: "Build Birmingham Site (£250)",
          href: "https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Birmingham%20takeaway%20website",
        }}
        secondaryCta={{
          label: "Interactive Allergen Demo",
          href: "/tools/allergen-matrix-generator",
        }}
        videoType="mobile"
        stripLabel="West Midlands · Commission-Free Ordering"
      />

      <main className="max-w-[1168px] mx-auto px-5 py-16 sm:py-20 space-y-16">
        <div className="max-w-5xl mx-auto">

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
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

        {/* REGIONAL SIBLING & NATIONAL SILO HUBS */}
        <div className="rounded-3xl p-8 bg-white/[0.03] border border-white/10 space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <MapPin className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                UK Regional &amp; National Takeaway Web Design Network
              </h2>
              <p className="text-xs text-white/60">
                Explore our national takeaway web development architecture or discover sister regional ordering hubs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/services/takeaway-web-design"
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.07] transition-all group"
            >
              <span className="text-[11px] font-mono uppercase text-amber-400 block mb-1">National Pillar</span>
              <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors block mb-1">
                UK Takeaway Web Design (Main Hub)
              </span>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                National £250 fixed-price takeaway ordering package with interactive 14-allergen menus and zero commission fees.
              </p>
            </Link>
            <Link
              href="/services/takeaway-web-design-london"
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.07] transition-all group"
            >
              <span className="text-[11px] font-mono uppercase text-amber-400 block mb-1">Regional Sibling</span>
              <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors block mb-1">
                London Takeaway Web Design
              </span>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Zero-commission online ordering and Natasha&apos;s Law digital menus covering all 32 London boroughs.
              </p>
            </Link>
            <Link
              href="/services/takeaway-web-design-manchester"
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-400/50 hover:bg-white/[0.07] transition-all group"
            >
              <span className="text-[11px] font-mono uppercase text-amber-400 block mb-1">Regional Sibling</span>
              <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors block mb-1">
                Manchester Takeaway Web Design
              </span>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                High-speed digital menus and direct ordering engineered for Curry Mile, Rusholme, and Greater Manchester takeaways.
              </p>
            </Link>
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
              Submit Project Enquiry
            </Link>
          </div>
        </div>
      </main>

      <RhSystemRows
        overline="WEST MIDLANDS STACK"
        title="Commission-free ordering"
        titleMuted="for Birmingham kitchens."
        subtitle="Built for Birmingham Balti houses, burger kitchens, and multi-site restaurants across Solihull, Sutton Coldfield, and Wolverhampton."
        rows={[
          {
            num: "01",
            title: "Natasha's Law 14-Allergen Filter",
            description: "Interactive allergen filtering across every menu category so diners inspect ingredients safely before ordering.",
            tags: ["14 Allergens", "FSA Compliant", "Instant Search"],
            href: "/tools/allergen-matrix-generator",
          },
          {
            num: "02",
            title: "Direct WhatsApp & Stripe Checkout",
            description: "Stop handing 30%+ per basket to delivery portals. Direct orders arrive cleanly in your kitchen with full customer data.",
            tags: ["0% Commission", "Stripe UK", "B-Postcode Zones"],
          },
          {
            num: "03",
            title: "Birmingham Local SEO & Schema",
            description: "Structured LocalBusiness and Menu schemas engineered to capture direct high-intent searches across the Midlands.",
            tags: ["LocalBusiness JSON-LD", "99+ Speed", "Mobile First"],
          },
        ]}
      />

      <RhProcessCarousel
        overline="LAUNCH SPRINT"
        title="Commission-free menu live"
        titleMuted="in 3–5 days."
        stages={[
          {
            stage: "01",
            duration: "Day 1",
            title: "Menu & Allergen Audit",
            description: "We digitize your dishes, sides, meal combos, and full 14-allergen matrix with zero manual data entry.",
            deliverables: ["Full Menu JSON", "Allergen Matrix", "B-Postcode Map"],
          },
          {
            stage: "02",
            duration: "Days 2–3",
            title: "Mobile Storefront Build",
            description: "Fast mobile-first UX built to handle weekend dinner rushes smoothly with instant category filtering.",
            deliverables: ["Mobile Cart UX", "Upsell Logic", "Staging Link"],
          },
          {
            stage: "03",
            duration: "Day 4",
            title: "Bag-Flyer QR & Testing",
            description: "End-to-end order routing verification plus print-ready QR packaging inserts to convert portal diners direct.",
            deliverables: ["Print QR Assets", "WhatsApp Test", "Speed QA"],
          },
          {
            stage: "04",
            duration: "Day 5",
            title: "Live Go-Live (£250 Fixed)",
            description: "Deploy on your own domain with 100% ownership and zero recurring fees per order.",
            deliverables: ["Custom Domain", "0% Per Order", "Code Handoff"],
          },
        ]}
        quote="Our Birmingham direct takeaway orders grew every weekend once customers could scan the QR code and reorder straight from their phone with zero app surcharge."
        author="Faisal Akhtar"
        role="Director, Midlands Smokehouse"
        ctaHref="/contact"
        ctaLabel="Launch Birmingham Menu"
      />

      <SiteFooter theme="dark" />
    </div>
  );
}
