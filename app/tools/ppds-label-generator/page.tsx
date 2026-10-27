import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, HelpCircle, FileText, CheckCircle2, ChevronDown } from "lucide-react";
import { PpdsLabelGeneratorTool } from "@/components/tools/PpdsLabelGeneratorTool";
import { FoodSafetyDisclaimer } from "@/components/FoodSafetyDisclaimer";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "PPDS Label Generator UK | Free Natasha's Law Labels",
  description: "Generate compliant Natasha's Law PPDS food labels online. Automatically bold all 14 UK allergens, set use-by dates, and print free A4 sticker sheets.",
  alternates: {
    canonical: "https://www.saimdev.site/tools/ppds-label-generator",
    languages: {
      "en-GB": "https://www.saimdev.site/tools/ppds-label-generator",
    },
  },
  openGraph: {
    title: "PPDS Label Generator UK | Free Natasha's Law Labels",
    description: "Generate compliant Natasha's Law PPDS food labels online. Automatically bold all 14 UK allergens, set use-by dates, and print free A4 sticker sheets.",
    url: "https://www.saimdev.site/tools/ppds-label-generator",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Natasha's Law PPDS Food Label Generator - Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPDS Label Generator UK | Free Natasha's Law Labels",
    description: "Generate compliant Natasha's Law PPDS food labels online. Automatically bold all 14 UK allergens, set use-by dates, and print free A4 sticker sheets.",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is PPDS food under UK Natasha's Law?",
    a: "Prepacked for Direct Sale (PPDS) food is food that is packed on the premises before a consumer selects or orders it. Common examples include sandwiches made in a cafe and wrapped in clingfilm, salad bowls boxed before lunchtime rush, and bakery items bagged on-site before customer selection. It does NOT apply to meals cooked to order or loose unpackaged bakery items.",
  },
  {
    q: "What mandatory information must appear on a PPDS label?",
    a: "Under the Food Information (Amendment) (England) Regulations 2020, every PPDS label must display two core elements: the legal name of the food, and a full ingredients list with any of the 14 statutory allergens clearly emphasised (typically in bold, capitalised, or contrasting colours) every time they appear.",
  },
  {
    q: "Do compound ingredients need sub-ingredient breakdowns?",
    a: "Yes. Under UK food labelling rules, compound ingredients (such as mayonnaise, bread, or curry paste) must be expanded to list their individual sub-ingredients in brackets (e.g., 'Mayonnaise [Rapeseed oil, water, pasteurised egg yolk, spirit vinegar, sugar, salt, mustard flour]'). Any allergens in compound ingredients must also be highlighted in bold.",
  },
  {
    q: "What size font is legally required on Natasha's Law food labels?",
    a: "The Food Standards Agency mandates an x-height of at least 1.2mm for mandatory particulars on packages where the largest surface area exceeds 80cm². For packages smaller than 80cm², the minimum x-height is 0.9mm. The text must remain easily legible, indelible, and distinct from the background.",
  },
  {
    q: "Can I print these labels on standard UK sticker sheets?",
    a: "Yes. This generator provides an A4 Sheet mode formatted specifically for standard 63.5mm × 38.1mm 21-up sticker sheets (such as Avery L7160 / J8160), allowing you to print adhesive food labels directly from your web browser with zero margins.",
  },
];

export default function PpdsLabelGeneratorPage() {
  const canonicalUrl = "https://www.saimdev.site/tools/ppds-label-generator";

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
        name: "Free Kitchen Tools",
        item: "https://www.saimdev.site/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "PPDS Food Label Generator",
        item: canonicalUrl,
      },
    ],
  };

  // 2. WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free Natasha's Law PPDS Food Label Generator UK",
    description: 'Generate compliant Natasha\'s Law PPDS food labels online for free. Automatically bold all 14 statutory allergens, set expiry dates, and print A4 sheets.',
    url: canonicalUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All / Web Browser",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    dateModified: "2026-10-27",
    publisher: {
      "@type": "Organization",
      name: "Saim Dev",
      url: "https://www.saimdev.site",
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
    <div className="min-h-screen bg-[#FBFBFA] text-[#1D1D1F] font-sans">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] px-4 sm:px-8 py-3.5 flex items-center justify-between no-print">
        <Link
          href="/tools"
          className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to all kitchen tools</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/services"
            className="text-xs font-bold text-amber-700 hover:text-amber-900 hidden sm:inline-block"
          >
            ££250 Takeaway Websites
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
        {/* Visible Breadcrumb Navigation */}
        <div className="no-print space-y-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono flex-wrap">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/tools" className="hover:underline">Tools</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-bold" aria-current="page">
                PPDS Label Generator
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold uppercase">
              UK Compliance Tool
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Food Standards Agency (FSA) & FIR 2020 Aligned
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            PPDS Label Generator: Free Natasha's Law Food Labels
          </h1>

          {/* Byline & Verification Date */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
            <span>By <strong>Saim Dev</strong></span>
            <span>·</span>
            <span>Last Reviewed: <strong>27 October 2026</strong></span>
            <span>·</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified against FSA Natasha's Law Guidance</span>
            </span>
          </div>

          {/* 40-60 Word Direct Answer Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-sm text-neutral-900 leading-relaxed space-y-2">
            <div className="font-bold text-amber-950 flex items-center gap-1.5 uppercase font-mono text-[11px] tracking-wide">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Direct Compliance Answer</span>
            </div>
            <p>
              Under Natasha&apos;s Law (FIR 2020), UK food businesses selling prepacked for direct sale (PPDS) food must display the food name and full ingredients list with all 14 statutory allergens highlighted in bold. This free interactive tool automatically detects and bolds allergens, calculates dates, and formats standard adhesive labels ready for printing.
            </p>
          </div>
        </div>

        {/* ── INTERACTIVE TOOL ── */}
        <PpdsLabelGeneratorTool />

        {/* ── Regulatory Definitions List ── */}
        <div className="no-print bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
            Key Regulatory Definitions
          </h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-800">
            <div className="p-4 rounded-2xl bg-white border border-neutral-200">
              <dt className="font-bold text-neutral-950 mb-1">What is PPDS (Prepacked for Direct Sale)?</dt>
              <dd className="text-neutral-600 leading-relaxed">
                Food that is packaged at the same premises from which it is offered to consumers before it is ordered or selected. Examples include pre-boxed sandwiches in display chillers, bottled fresh juices, and packaged bakery goods.
              </dd>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-neutral-200">
              <dt className="font-bold text-neutral-950 mb-1">What is Natasha’s Law?</dt>
              <dd className="text-neutral-600 leading-relaxed">
                The Food Information (Amendment) Regulations 2019, in force across the UK since 1 October 2021. It requires all PPDS food to feature an explicit label showing the product name, full ingredients list, and clear emphasis for any of the 14 major allergens.
              </dd>
            </div>
          </dl>
        </div>

        {/* ── HOW TO USE STEP-BY-STEP GUIDE ── */}
        <div className="no-print bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900">
            How to Generate & Print Compliant Natasha&apos;s Law Food Labels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-neutral-900 text-white font-mono font-bold flex items-center justify-center text-[11px]">
                1
              </span>
              <h3 className="font-bold text-neutral-900 text-sm">Input Legal Name</h3>
              <p className="text-neutral-600 leading-relaxed">
                State the precise name of the food so consumers immediately know what the product is (e.g. &apos;Ham &amp; Cheese Baguette&apos;).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-neutral-900 text-white font-mono font-bold flex items-center justify-center text-[11px]">
                2
              </span>
              <h3 className="font-bold text-neutral-900 text-sm">List All Ingredients</h3>
              <p className="text-neutral-600 leading-relaxed">
                Type ingredients in descending order of weight. Expand compound items like dressings or dough into sub-ingredients in brackets.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-neutral-900 text-white font-mono font-bold flex items-center justify-center text-[11px]">
                3
              </span>
              <h3 className="font-bold text-neutral-900 text-sm">Verify Allergens</h3>
              <p className="text-neutral-600 leading-relaxed">
                Check the auto-detected allergen list. The tool automatically bolds all matching allergens throughout your text.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1.5">
              <span className="w-6 h-6 rounded-full bg-neutral-900 text-white font-mono font-bold flex items-center justify-center text-[11px]">
                4
              </span>
              <h3 className="font-bold text-neutral-900 text-sm">Print Sticker Sheet</h3>
              <p className="text-neutral-600 leading-relaxed">
                Select Single or 21-up A4 sheet, click Print, and feed standard adhesive sticker sheets into your office printer.
              </p>
            </div>
          </div>
        </div>

        {/* ── FREQUENTLY ASKED QUESTIONS ── */}
        <div className="no-print bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-neutral-900">
                Natasha&apos;s Law &amp; PPDS Labelling FAQs
              </h2>
              <p className="text-xs text-neutral-500">
                Official UK food labelling compliance answers for caterers, delis, bakeries, and takeaways.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-4 text-xs sm:text-sm space-y-2"
              >
                <div className="font-bold text-neutral-900 flex items-start gap-2">
                  <span className="text-amber-600 font-mono font-bold">Q{idx + 1}.</span>
                  <span>{faq.q}</span>
                </div>
                <div className="text-neutral-700 leading-relaxed pl-6">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── REGULATORY DISCLAIMER ── */}
        <div className="no-print">
          <FoodSafetyDisclaimer />
        </div>

        {/* ── RELATED COMPLIANCE RESOURCES ── */}
        <div className="no-print space-y-4">
          <h3 className="text-lg font-bold text-neutral-900">
            Related UK Allergen &amp; Food Safety Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/blog/natashas-law-ppds-food-labelling-guide"
              className="bg-white rounded-2xl p-5 border border-neutral-200 hover:border-neutral-400 transition-colors flex flex-col justify-between shadow-sm group"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold">
                  Inspection Guide
                </span>
                <h4 className="text-xs font-bold text-neutral-900 group-hover:text-amber-800 line-clamp-2">
                  Natasha&apos;s Law PPDS Food Labelling Guide for UK Takeaways
                </h4>
                <p className="text-[11px] text-neutral-500 line-clamp-2">
                  In-depth explanation of packaging rules, compound ingredients, and EHO audit requirements.
                </p>
              </div>
              <div className="text-xs text-amber-700 font-bold flex items-center gap-1 pt-3">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/food-safety-templates/food-allergen-chart"
              className="bg-white rounded-2xl p-5 border border-neutral-200 hover:border-neutral-400 transition-colors flex flex-col justify-between shadow-sm group"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold">
                  Interactive Matrix
                </span>
                <h4 className="text-xs font-bold text-neutral-900 group-hover:text-amber-800 line-clamp-2">
                  UK 14 Food Allergen Chart Matrix &amp; Poster
                </h4>
                <p className="text-[11px] text-neutral-500 line-clamp-2">
                  Audit dishes and generate printable 14-allergen matrices for front-of-house staff.
                </p>
              </div>
              <div className="text-xs text-amber-700 font-bold flex items-center gap-1 pt-3">
                <span>Open Matrix Tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            <Link
              href="/food-safety-templates/haccp-plan-builder"
              className="bg-white rounded-2xl p-5 border border-neutral-200 hover:border-neutral-400 transition-colors flex flex-col justify-between shadow-sm group"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-amber-700 font-bold">
                  HACCP Builder
                </span>
                <h4 className="text-xs font-bold text-neutral-900 group-hover:text-amber-800 line-clamp-2">
                  7-Principle HACCP Plan Builder &amp; CCP Matrix
                </h4>
                <p className="text-[11px] text-neutral-500 line-clamp-2">
                  Step-by-step hazard analysis and critical control point documentation for UK kitchens.
                </p>
              </div>
              <div className="text-xs text-amber-700 font-bold flex items-center gap-1 pt-3">
                <span>Build HACCP Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* ── CONVERSION BRIDGE: TAKEAWAY WEB DEVELOPMENT ── */}
        <div className="no-print rounded-3xl bg-neutral-950 text-white p-8 sm:p-10 space-y-4 shadow-2xl border border-neutral-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                  Bespoke Takeaway Web Development · Fixed £250
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] px-2 py-0.5 rounded-full font-mono uppercase">
                  Zero Commission
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Want Natasha&apos;s Law Allergen Filtering Built Into Your Online Ordering Menu?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                We build custom Next.js direct-ordering websites for UK takeaways and restaurants from £250. Includes live interactive allergen filtering for your entire menu, WhatsApp &amp; SMS order routing, and zero third-party commission cuts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20takeaway%20website%20with%20Natasha's%20Law%20allergen%20filtering"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-6 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/services/takeaway-web-design"
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-5 py-3.5 rounded-full inline-flex items-center justify-center gap-1.5 transition-all border border-white/15"
              >
                <span>takeaway website with allergen filter</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter theme="light" className="mt-12" />
    </div>
  );
}
