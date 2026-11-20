import type { Metadata } from "next";
import Link from "next/link";
import {
  Calculator,
  ShieldAlert,
  Tag,
  Percent,
  Scale,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { RhHeader } from "@/components/rh/RhHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FoodSafetyDisclaimer } from "@/components/FoodSafetyDisclaimer";

export const metadata: Metadata = {
  title: "Free UK Takeaway & Kitchen Tools Hub | Saim Dev",
  description:
    "Free interactive tools for UK restaurants and takeaways: 14-allergen matrix generator, Natasha's Law PPDS label maker, food cost & commission calculators.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/tools",
    languages: {
      "en-GB": "https://www.saimdev.site/tools",
      "en-US": "https://www.saimdev.site/tools",
      "x-default": "https://www.saimdev.site/tools",
    },
  },
  openGraph: {
    type: "website",
    title: "Free UK Takeaway & Kitchen Tools Hub | Saim Dev",
    description:
      "Free interactive tools for UK restaurants and takeaways: 14-allergen matrix generator, Natasha's Law PPDS label maker, food cost & commission calculators.",
    url: "https://www.saimdev.site/tools",
    siteName: "Saim Dev",
    locale: "en_GB",
    images: [
      {
        url: "https://www.saimdev.site/og-tools.png",
        width: 1200,
        height: 630,
        alt: "Free UK Takeaway & Commercial Kitchen Tools Hub - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Free UK Takeaway & Kitchen Tools Hub | Saim Dev",
    description:
      "Free interactive tools for UK restaurants and takeaways: 14-allergen matrix generator, Natasha's Law PPDS label maker, food cost & commission calculators.",
    images: ["https://www.saimdev.site/og-tools.png"],
  },
};

const INTERACTIVE_TOOLS = [
  {
    href: "/tools/commission-savings-calculator",
    badge: "Takeaway Margin ROI",
    title: "Takeaway Commission Savings Calculator",
    desc: "Calculate exact annual profit kept by moving repeat Just Eat, Deliveroo, and Uber Eats orders onto a £250 0% commission direct ordering website.",
    bullets: ["Just Eat / Deliveroo / Uber Eats Fee Math", "1-Year & 3-Year Cash Recovery", "Direct Website Payback Timeline"],
    icon: Calculator,
  },
  {
    href: "/tools/allergen-matrix-generator",
    badge: "14 UK/EU Allergens",
    title: "14-Allergen Matrix Generator UK",
    desc: "Build an interactive dish-by-dish allergen chart covering all 14 UK statutory allergens with instant printable A4 kitchen reference sheets.",
    bullets: ["All 14 Statutory UK/EU Allergens", "Contains & May Contain Toggles", "Printable A4 Kitchen Reference PDF"],
    icon: ShieldAlert,
  },
  {
    href: "/tools/ppds-label-generator",
    badge: "Natasha's Law PPDS",
    title: "Natasha's Law PPDS Food Label Generator",
    desc: "Format Prepacked for Direct Sale (PPDS) ingredient labels with automatic bold allergen emphasis ready for thermal or A4 label printing.",
    bullets: ["Automatic 14-Allergen Bold Highlighting", "1.2mm Typography Guidance", "Instant Printable Thermal & Sheet Labels"],
    icon: Tag,
  },
  {
    href: "/tools/food-cost-calculator",
    badge: "Gross Profit & Menu Math",
    title: "Commercial Kitchen Food Cost & GP% Calculator",
    desc: "Cost recipes down to the gram, calculate food cost percentage and gross profit margin (65%–75% target), and set profitable menu prices.",
    bullets: ["Portion Cost & Shrinkage Math", "Target GP% Menu Price Suggestions", "Browser LocalStorage Autosave"],
    icon: Percent,
  },
  {
    href: "/tools/recipe-batch-calculator",
    badge: "Catering & Prep Scaling",
    title: "Commercial Recipe Batch Scaler",
    desc: "Scale commercial catering recipes from 10 to 500 portions using Recipe Conversion Factor (RCF) math with automatic g/kg and ml/L unit conversion.",
    bullets: ["Automatic g/kg & ml/L Unit Conversion", "Recipe Conversion Factor (RCF) Math", "Printable Chef Prep Cards"],
    icon: Scale,
  },
];

const COMPLIANCE_GUIDES = [
  {
    href: "/blog/uk-food-hygiene-rating-scheme-5-star-checklist",
    tag: "5-Star FHRS Rating",
    title: "UK Food Hygiene Rating Scheme: Complete 5-Star EHO Checklist",
    desc: "How Environmental Health Officers score hygiene handling, physical structure, and SFBB documentation.",
  },
  {
    href: "/blog/natashas-law-ppds-food-labelling-guide",
    tag: "Natasha's Law",
    title: "Natasha's Law PPDS Food Labelling Guide for UK Takeaways & Delis",
    desc: "Statutory rules for Prepacked for Direct Sale food, compound ingredients, and allergen emphasis.",
  },
  {
    href: "/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
    tag: "Allergen Matrix",
    title: "How to Create a 14-Allergen Matrix for UK Restaurants & Takeaways",
    desc: "Step-by-step recipe audit workflow, supplier specification checks, and cross-contamination controls.",
  },
  {
    href: "/blog/level-2-food-hygiene-practice-test-kitchen-staff-guide",
    tag: "Staff Training Quiz",
    title: "Level 2 Food Hygiene Practice Test: Questions & Answers for Kitchen Staff",
    desc: "Interactive revision questions covering the temperature danger zone, cleaning stages, and UK food law.",
  },
  {
    href: "/blog/how-to-write-haccp-plan-uk-food-business-step-by-step",
    tag: "HACCP Principles",
    title: "How to Write a HACCP Plan for Your UK Food Business (7 Principles)",
    desc: "Plain-English guide to hazard analysis, Critical Control Points (CCPs), critical limits, and corrective actions.",
  },
  {
    href: "/blog/sfbb-daily-kitchen-opening-closing-checklist-guide",
    tag: "SFBB Daily Checks",
    title: "SFBB Daily Kitchen Opening & Closing Checklist Guide",
    desc: "Build a disciplined daily opening, closing, and 4 Cs routine for UK takeaways and commercial kitchens.",
  },
  {
    href: "/blog/commercial-kitchen-food-cooling-temperature-guide",
    tag: "Temperature Control",
    title: "Commercial Kitchen Food Cooling Guide: UK 90-Minute Rule & Limits",
    desc: "Safe methods for cooling cooked food below 8°C within 90 minutes using blast chillers, ice baths, and batch dividing.",
  },
  {
    href: "/blog/mastering-food-cost-percentage-commercial-kitchen-calculator",
    tag: "Kitchen Economics",
    title: "How to Calculate Food Cost Percentage & Protect 70%+ Gross Margins",
    desc: "Formula breakdown for CoGS, portion yields, menu engineering matrices, and delivery app margin erosion.",
  },
  {
    href: "/blog/how-to-scale-recipes-commercial-catering-batch-calculator",
    tag: "Batch Catering",
    title: "How to Scale Commercial Recipes from 10 to 500 Portions Accurately",
    desc: "Why weight beats volume in commercial prep, non-linear spice/evaporation adjustments, and batch yield math.",
  },
];

export default function ToolsHubPage() {
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
        name: "Free UK Takeaway & Kitchen Tools Hub",
        item: "https://www.saimdev.site/tools",
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Interactive UK Takeaway & Commercial Kitchen Tools",
    description:
      "Browser-based calculators and generators for UK takeaways, restaurants, and catering kitchens built by Saim Dev.",
    numberOfItems: INTERACTIVE_TOOLS.length,
    itemListElement: INTERACTIVE_TOOLS.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.title,
      url: `https://www.saimdev.site${tool.href}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are these UK takeaway calculators and allergen generators free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every calculator and generator in the Saim Dev Kitchen Tools Hub runs 100% free in your browser with instant A4/PDF print export and zero account signup.",
        },
      },
      {
        "@type": "Question",
        name: "Where is my recipe, food cost, or allergen matrix data stored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your inputs are saved locally in your own browser storage (localStorage) so you can return and edit your matrix or costings at any time without uploading proprietary recipes to external servers.",
        },
      },
      {
        "@type": "Question",
        name: "Can Saim Dev build a custom 0% commission online ordering website for my takeaway?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We engineer custom fixed-price Next.js takeaway ordering websites starting from £250 one-time with 0% commission, direct Stripe/Apple Pay checkout, and a free live homepage preview before you commit.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#EFEFEF] selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <RhHeader />

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        {/* Hero */}
        <section className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BAFF00]/10 border border-[#BAFF00]/30 text-[#BAFF00] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free UK Hospitality Utilities • Built by Saim Dev</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Free UK Takeaway &amp; Commercial Kitchen{" "}
            <span className="text-[#BAFF00]">Tools Hub</span>
          </h1>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl">
            Interactive calculators and printable kitchen generators engineered for UK restaurants, takeaways, cafes, and catering operators — covering{" "}
            <strong className="text-white">0% commission delivery ROI</strong>,{" "}
            <strong className="text-white">14 statutory food allergens</strong>,{" "}
            <strong className="text-white">Natasha&apos;s Law PPDS labels</strong>,{" "}
            <strong className="text-white">food cost GP% margins</strong>, and{" "}
            <strong className="text-white">batch recipe scaling</strong>.
          </p>
        </section>

        {/* 5 Interactive Tools Grid */}
        <section aria-labelledby="interactive-tools-heading" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#BAFF00]">
                5 Live Browser Utilities
              </span>
              <h2 id="interactive-tools-heading" className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Interactive Generators &amp; Margin Calculators
              </h2>
            </div>
            <p className="text-xs font-mono text-white/50">
              100% Free • Instant Print / PDF Export • No Signup Required
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERACTIVE_TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-3xl bg-[#141414] border border-white/10 hover:border-[#BAFF00]/60 p-7 flex flex-col justify-between transition-all hover:-translate-y-1 shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#BAFF00]/10 border border-[#BAFF00]/30 flex items-center justify-center text-[#BAFF00]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-white/70">
                        {tool.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#BAFF00] transition-colors leading-snug">
                      {tool.title}
                    </h3>

                    <p className="text-sm text-white/65 leading-relaxed">
                      {tool.desc}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {tool.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs text-white/75">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#BAFF00] shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#BAFF00]">
                    <span>Launch Interactive Tool</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 9 UK Kitchen Compliance & Economics Guides */}
        <section aria-labelledby="compliance-guides-heading" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#BAFF00]">
                UK Hospitality Knowledge Library
              </span>
              <h2 id="compliance-guides-heading" className="text-2xl sm:text-3xl font-bold text-white mt-1">
                UK Food Hygiene, Natasha&apos;s Law &amp; Kitchen Margin Guides
              </h2>
            </div>
            <Link
              href="/blogs"
              className="text-xs font-mono text-[#BAFF00] hover:underline inline-flex items-center gap-1.5"
            >
              <span>View All 16 Engineering &amp; Operational Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPLIANCE_GUIDES.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#BAFF00]/50 p-6 flex flex-col justify-between transition-all"
              >
                <div className="space-y-2.5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#BAFF00]">
                    <BookOpen className="w-3.5 h-3.5" />
                    {g.tag}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#BAFF00] transition-colors leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {g.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#BAFF00]">
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Direct Takeaway Website Conversion Banner */}
        <section className="rounded-3xl bg-gradient-to-br from-[#161b0d] via-[#121212] to-[#0D0D0D] border border-[#BAFF00]/30 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAFF00]">
              0% Commission Direct Ordering • Fixed-Price Next.js Build
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Lose the 30% Delivery App Commission. Launch Your Own Direct Takeaway Ordering Website for £250.
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              We build sub-second Next.js direct ordering websites for UK takeaways and restaurants in{" "}
              <Link href="/services/takeaway-web-design-london" className="text-[#BAFF00] hover:underline">
                London
              </Link>
              ,{" "}
              <Link href="/services/takeaway-web-design-manchester" className="text-[#BAFF00] hover:underline">
                Manchester
              </Link>
              ,{" "}
              <Link href="/services/takeaway-web-design-birmingham" className="text-[#BAFF00] hover:underline">
                Birmingham
              </Link>
              , and across the UK — with a free interactive concept preview before you pay a penny.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/services/takeaway-web-design"
              className="px-6 py-3.5 rounded-full bg-[#BAFF00] text-[#0D0D0D] font-bold text-sm hover:bg-[#c8ff33] transition-colors inline-flex items-center gap-2"
            >
              <span>See £250 Takeaway Package</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/demos"
              className="px-6 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/15 transition-colors"
            >
              Inspect Live Demos
            </Link>
          </div>
        </section>

        <FoodSafetyDisclaimer />
      </main>

      <SiteFooter />
    </div>
  );
}
