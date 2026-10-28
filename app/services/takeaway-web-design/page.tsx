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
  title: 'Takeaway Website Design UK | Commission-Free Orders',
  description: "Custom Next.js takeaway ordering websites from £250. Avoid 30%+ Just Eat fees with built-in Natasha's Law allergen filters and WhatsApp kitchen dispatch.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/services/takeaway-web-design",
    languages: {
      "en-GB": "https://www.saimdev.site/services/takeaway-web-design",
    },
  },
  openGraph: {
    title: 'Takeaway Website Design UK | Commission-Free Orders',
    description: "Custom Next.js takeaway ordering websites from £250. Avoid 30%+ Just Eat fees with built-in Natasha's Law allergen filters and WhatsApp kitchen dispatch.",
    url: "https://www.saimdev.site/services/takeaway-web-design",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Website Design UK - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: 'Takeaway Website Design UK | Commission-Free Orders',
    description: "Custom Next.js takeaway ordering websites from £250. Avoid 30%+ Just Eat fees with built-in Natasha's Law allergen filters and WhatsApp kitchen dispatch.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const faqs = [
  {
    q: "How does the direct ordering system work without aggregator commissions?",
    a: "When a customer visits your custom website, they browse your digital menu with live allergen filters, add items to their basket, and check out directly via WhatsApp or direct SMS. The complete order—including customer name, delivery address, phone number, order items, and allergen notes—lands instantly on your kitchen phone or tablet. You keep 100% of the sale with zero commission cuts.",
  },
  {
    q: "Why is an online allergen filter essential for UK takeaways?",
    a: "Under the Food Information Regulations 2014 and Natasha's Law, food businesses must provide clear, verified allergen information for all 14 statutory allergens. Our menus feature an interactive filter allowing customers with allergies (such as gluten, nuts, dairy, or shellfish) to filter dishes safely before ordering, drastically reducing front-of-house telephone queries and cross-contamination liability.",
  },
  {
    q: "Are there any hidden monthly fees or subscription charges?",
    a: "No. You pay a single fixed fee of £250 for the complete website setup and deployment. You own the code and domain. Hosting on high-speed global infrastructure is included free under standard usage tiers, meaning zero recurring monthly cuts from your hard-earned profits.",
  },
  {
    q: "How quickly can my takeaway website launch?",
    a: "Standard takeaway websites are completed and launched within 3 to 5 working days once you provide your menu, pricing, logo, and food photos. We handle domain setup, digital menu transcription, allergen tagging, and Google Maps local SEO integration.",
  },
  {
    q: "Can customers still pay online via card or Apple Pay / Google Pay?",
    a: "Yes. If you wish to accept digital payments before dispatch, we can integrate Stripe or PayPal directly into your checkout workflow, allowing instant card payments directly into your UK bank account at standard card processing rates (around 1.4% + 20p) instead of aggregator 30%+ cuts.",
  },
];

export default function TakeawayWebDesignPage() {
  const canonicalUrl = "https://www.saimdev.site/services/takeaway-web-design";

  // 1. Breadcrumb Schema
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
        name: "Takeaway Web Design UK",
        item: canonicalUrl,
      },
    ],
  };

  // 2. ProfessionalService Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Takeaway Website Design UK - Saim Dev",
    description: "Custom Next.js takeaway ordering websites from £250. Avoid 30%+ Just Eat fees with built-in Natasha's Law allergen filters and WhatsApp kitchen dispatch.",
    url: canonicalUrl,
    priceRange: "£250",
    areaServed: ["United Kingdom", "European Union"],
    provider: {
      "@type": "Person",
      name: "Saim Dev",
      url: "https://www.saimdev.site/about",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Takeaway Web Development Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Commission-Free Takeaway Starter System",
          price: "250",
          priceCurrency: "GBP",
          description: "Custom Next.js takeaway ordering websites from £250. Avoid 30%+ Just Eat fees with built-in Natasha's Law allergen filters and WhatsApp kitchen dispatch.",
        },
      ],
    },
  };

  // 3. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <Link
          href="/services"
          className="flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Web Services</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/tools"
            className="text-xs text-white/60 hover:text-white transition-colors hidden sm:inline-block"
          >
            Free Kitchen Tools
          </Link>
          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20takeaway%20website%20demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all shadow"
          >
            <span>WhatsApp Enquiry</span>
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
            <li className="text-amber-400 font-semibold" aria-current="page">
              Takeaway Web Design UK
            </li>
          </ol>
        </nav>

        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-mono font-bold uppercase">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>UK Takeaway &amp; Restaurant Web Specialist</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Stop Paying 30%+ Just Eat &amp; Deliveroo Fees
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            Stop paying excessive portal commissions today. We build lightning-fast Next.js direct ordering websites for UK takeaways, chip shops, and pizzerias with full code ownership, zero commissions, and instant mobile ordering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20%C2%A3250%20takeaway%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Book Takeaway Build (£250 Fixed)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/tools/allergen-matrix-generator"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all border border-white/15"
            >
              <span>Try Live Allergen Matrix Demo</span>
            </Link>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">0%</div>
              <div className="text-xs text-white/70 font-medium">Commission Fees</div>
              <div className="text-[11px] text-white/50">Keep 100% of revenue</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">&lt; 0.8s</div>
              <div className="text-xs text-white/70 font-medium">Page Load Speed</div>
              <div className="text-[11px] text-white/50">100/100 Core Web Vitals</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">14 Allergens</div>
              <div className="text-xs text-white/70 font-medium">Interactive Filter</div>
              <div className="text-[11px] text-white/50">Natasha&apos;s Law Compliant</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-extrabold text-amber-400 font-mono">3–5 Days</div>
              <div className="text-xs text-white/70 font-medium">Turnaround Time</div>
              <div className="text-[11px] text-white/50">Fast launch to market</div>
            </div>
          </div>
        </div>

        {/* Semantic Concept Definition */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10">
          <dl className="space-y-2 text-xs sm:text-sm text-white/80">
            <dt className="text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
              What is a Direct Ordering Website?
            </dt>
            <dd className="text-white/70 leading-relaxed font-light">
              A direct ordering website is an independent digital ordering platform owned exclusively by a takeaway or restaurant. It enables local customers to browse menus, filter allergens, and submit collection or delivery orders directly via WhatsApp, SMS, or online payment gateways—eliminating third-party portal cuts and commission percentages.
            </dd>
          </dl>
        </div>

        {/* ── THE MATH: JUST EAT VS DIRECT SYSTEM ── */}
        <CommissionSavingsCalculator />

        {/* ── CUISINE SPECIALISMS ACROSS THE UK ── */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              Specialized UK Menu Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Tailored For Every UK Takeaway Cuisine
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Each food category has unique ordering workflows, modifier choices, and allergen profiles. We build custom menu logic tailored to your food.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">01 · Fish &amp; Chip Shops</div>
              <h3 className="font-semibold text-white text-base">Chippy Orders &amp; Batter Profiles</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Haddock, cod, mushy peas, and curry sauce options with salt &amp; vinegar toggles and clear gluten labelling for designated fryer days.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">02 · Indian &amp; Tandoori Houses</div>
              <h3 className="font-semibold text-white text-base">Curry Spice Tiers &amp; Sundries</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Madras, Korma, and Biryani spice customisation, rice selections, tandoori marinades, and explicit dairy/nut highlighting on every dish.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">03 · Chinese &amp; Noodle Bars</div>
              <h3 className="font-semibold text-white text-base">Combos, Chow Mein &amp; Sauces</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Set banquet menus, crispy shredded chilli beef, chow mein choices, sweet &amp; sour modifiers, and soy/sesame/mollusc allergen indicators.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">04 · Pizza &amp; Kebab Houses</div>
              <h3 className="font-semibold text-white text-base">Crust Modifiers &amp; Kebab Trays</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Thin crust, deep pan, stuffed crust, create-your-own toppings, doner/shish kebab salad &amp; chilli/garlic sauce selectors with zero friction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">05 · Burger &amp; Peri Peri Grills</div>
              <h3 className="font-semibold text-white text-base">Smash Patties &amp; Heat Levels</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Double smash burgers, brioche buns, lemon &amp; herb to extra hot bastes, loaded skin-on fries, and drink meal deals with real-time totals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <div className="text-amber-400 font-mono font-bold text-sm">06 · Dessert &amp; Waffle Lounges</div>
              <h3 className="font-semibold text-white text-base">Gelato, Crepes &amp; Shakes</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Belgian waffles, cookie dough, gelato scoops, milkshakes, and precise nut/dairy/egg cross-contact alerts for peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* ── FREE KITCHEN TOOLS & DUE DILIGENCE SUITE ── */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900/50 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest block mb-1">
                Zero-Cost Operational Utilities
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Free Kitchen Tools &amp; Compliance Hub
              </h2>
              <p className="text-xs text-white/70 mt-1 font-light">
                Use our suite of free catering calculators and compliance tools to streamline kitchen operations.
              </p>
            </div>
            <Link
              href="/tools"
              className="self-start sm:self-auto text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              Browse All Tools &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/tools/allergen-matrix-generator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-orange-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">14 Allergen Matrix</div>
              <div className="text-[11px] text-white/60 mt-1">Generate dish allergen charts with CSV and PDF export.</div>
            </Link>

            <Link
              href="/tools/ppds-label-generator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-amber-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">PPDS Label Maker</div>
              <div className="text-[11px] text-white/60 mt-1">Natasha&apos;s Law compliant packaging labels with auto-bolding.</div>
            </Link>

            <Link
              href="/tools/food-cost-calculator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-emerald-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">Food Cost Calculator</div>
              <div className="text-[11px] text-white/60 mt-1">Calculate gross margins, food cost % and target prices.</div>
            </Link>

            <Link
              href="/tools/recipe-batch-calculator"
              className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-all group"
            >
              <div className="text-xs font-mono text-blue-400 font-bold mb-1">Interactive Tool</div>
              <div className="text-sm font-semibold text-white group-hover:text-amber-300">Recipe Batch Scaling</div>
              <div className="text-[11px] text-white/60 mt-1">Scale commercial recipes from 10 to 500 portions instantly.</div>
            </Link>
          </div>
        </div>

        {/* ── CORE SYSTEM FEATURES ── */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest">
              What&apos;s Included In The £250 Package
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Complete Digital Takeaway Architecture
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Everything your UK takeaway needs to accept online orders, maintain hygiene compliance, and rank on Google Maps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Interactive Natasha&apos;s Law Allergen Filter</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Diners can toggle any of the 14 UK statutory allergens (gluten, peanuts, milk, mustard, etc.) to immediately highlight or hide unsafe dishes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Direct WhatsApp Kitchen Dispatch</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Orders arrive cleanly formatted with customer contact, delivery address, order items, subtotal, and preparation notes directly to WhatsApp.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Sub-Second Next.js Performance</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Built on Next.js 16 with static page caching. Your menu opens instantly even on patchy 4G phone connections without lagging.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Google Maps &amp; Local SEO Pack</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Complete local structured data markup (`Restaurant`, `OpeningHoursSpecification`, `GeoCoordinates`) to boost Google Maps rankings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Zero Commission Fees Forever</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                You own 100% of your customer list, phone numbers, and repeat orders. No middleman holding your payouts or charging subscription penalties.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">3 to 5 Day Delivery Guarantee</h3>
              <p className="text-xs text-white/70 leading-relaxed font-light">
                Send us your paper menu or PDF, and your live custom ordering website will be ready to accept orders within 3 to 5 business days.
              </p>
            </div>
          </div>
        </div>

        {/* ── TRANSPARENT PRICING CARD ── */}
        <div className="max-w-xl mx-auto rounded-3xl bg-gradient-to-b from-neutral-900 to-black border-2 border-amber-400/50 p-8 sm:p-10 text-center space-y-6 shadow-2xl relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-black font-extrabold text-[11px] font-mono uppercase px-4 py-1 rounded-full shadow">
            Fixed Price · Zero Hidden Fees
          </div>

          <div className="space-y-2 pt-2">
            <h3 className="text-2xl font-bold text-white">Full Takeaway Direct-Ordering System</h3>
            <div className="text-4xl sm:text-5xl font-black text-amber-400 font-mono">
              £250
            </div>
            <p className="text-xs text-white/60">One-time payment · 100% Code Ownership</p>
          </div>

          <div className="border-t border-b border-white/10 py-6 text-left space-y-3 text-xs text-white/80">
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full Next.js responsive website optimized for mobile</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full digital menu with dishes, categories &amp; photos</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Interactive Natasha&apos;s Law 14-allergen filter matrix</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct WhatsApp and phone order dispatch</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Domain connection &amp; SSL setup</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Google Business Profile &amp; Local Schema SEO setup</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>30 days post-launch support and menu adjustments</span>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20ready%20to%20get%20the%20%C2%A3250%20takeaway%20website%20system"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm py-4 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Get Started Now via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="text-[11px] text-white/50">
              No deposit required to start discussion · Saim Dev builds &amp; previews your menu first
            </div>
          </div>
        </div>

        {/* ── FREQUENTLY ASKED QUESTIONS ── */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-10 space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-white/60">
                Everything you need to know about setting up a direct takeaway ordering system.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs sm:text-sm"
              >
                <div className="font-bold text-white flex items-start gap-2">
                  <span className="text-amber-400 font-mono">Q{idx + 1}.</span>
                  <span>{faq.q}</span>
                </div>
                <div className="text-white/70 leading-relaxed pl-6">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FINAL CTA ── */}
        <div className="text-center bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 rounded-3xl p-10 border border-amber-400/30 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Take Back Control of Your Takeaway Orders?
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed font-light">
            Send us a photo of your menu today on WhatsApp. We will set up your digital allergen-filtered demo so you can test it before paying a penny.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20here%20is%20my%20takeaway%20menu,%20can%20you%20set%20up%20a%20demo%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105 cursor-pointer"
            >
              <span>Send Menu on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
