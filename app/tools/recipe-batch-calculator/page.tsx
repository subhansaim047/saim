import { Metadata } from "next";
import Link from "next/link";
import { IconTile } from "@/components/icons/IconTile";
import { ArrowLeft, ArrowRight, ShieldCheck, HelpCircle, CheckCircle2, Scale, ChefHat } from "lucide-react";
import { RecipeCalculatorTool } from "@/components/tools/RecipeCalculatorTool";
import { FoodSafetyDisclaimer } from "@/components/FoodSafetyDisclaimer";
import { RhHeader } from "@/components/rh/RhHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ToolsSiloNav } from "@/components/tools/ToolsSiloNav";

export const metadata: Metadata = {
  title: "Recipe Batch Calculator UK | Scaling Tool | Saim Dev",
  description: "Free commercial recipe scaler and batch calculator for UK catering and kitchens. Rescale ingredient quantities, calculate yields, and print prep sheets.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/tools/recipe-batch-calculator",
    languages: {
      "en-GB": "https://www.saimdev.site/tools/recipe-batch-calculator",
    },
  },
  openGraph: {
    title: "Recipe Batch Calculator UK | Scaling Tool | Saim Dev",
    description: "Free commercial recipe scaler and batch calculator for UK catering and kitchens. Rescale ingredient quantities, calculate yields, and print prep sheets.",
    url: "https://www.saimdev.site/tools/recipe-batch-calculator",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Commercial Recipe Scaler & Batch Calculator UK - Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Recipe Batch Calculator UK | Scaling Tool | Saim Dev",
    description: "Free commercial recipe scaler and batch calculator for UK catering and kitchens. Rescale ingredient quantities, calculate yields, and print prep sheets.",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

const faqs = [
  {
    q: "How does the recipe scaling factor formula work in commercial catering?",
    a: "The recipe conversion factor (RCF) is calculated by dividing your desired target servings by the base recipe yield (RCF = Target Servings / Base Servings). Multiply every ingredient weight by this factor. For example, scaling a 4-portion curry recipe to cater for 100 guests gives a conversion factor of 25 (100 / 4 = 25).",
  },
  {
    q: "Why shouldn't salt, spices, and thickening agents be scaled linearly?",
    a: "When scaling batches up by more than 4x (e.g. from 6 portions to 60 portions), pungent spices (chilli, cayenne, cloves), salt, and starches (cornflour, roux) intensify disproportionately due to reduced relative surface evaporation. Commercial culinary practice recommends scaling pungent spices by 75% to 80% of the mathematical multiplier, adjusting to taste at the final simmer.",
  },
  {
    q: "How should bakeries convert volumetric measurements to metric weight?",
    a: "Professional commercial bakeries measure all ingredients in grams (g) or kilograms (kg) using digital scales rather than volumetric cups or tablespoons. Volume varies drastically with packing density (1 cup of flour can weigh between 120g and 150g depending on humidity and settling), causing unpredictable batch hydration.",
  },
  {
    q: "What is cooking evaporation loss and how does it affect batch portioning?",
    a: "During simmering, braising, or roasting, foods lose between 10% and 25% of their raw weight in water evaporation. To ensure you yield the correct final portion weights for event catering, always factor expected shrinkage into your starting raw batch quantities.",
  },
  {
    q: "Can I print kitchen prep sheets from this recipe calculator?",
    a: "Yes. Once you have adjusted your target portion slider, click 'Print Prep Card' to generate a clean, formatted A4 kitchen specification sheet with bold ingredient weights ready for culinary station prep.",
  },
];

export default function RecipeBatchCalculatorPage() {
  const canonicalUrl = "https://www.saimdev.site/tools/recipe-batch-calculator";

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
        name: "Recipe Batch Calculator",
        item: canonicalUrl,
      },
    ],
  };

  // 2. WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Commercial Recipe Scaler & Batch Costing Calculator UK",
    description: "Free interactive browser tool for UK chefs, bakeries, event caterers, and dark kitchens to automatically rescale recipes, convert portion yields, and print standardised kitchen prep cards.",
    url: canonicalUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "All / Web Browser",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    dateModified: "2026-10-28",
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

  // 4. HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Scale Commercial Kitchen Recipes for Batch Catering",
    description: "Step-by-step instructions for chefs and kitchen managers to resize recipe portion yields accurately.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Input Base Recipe & Original Portions",
        text: "Enter your standard tested recipe ingredients with exact weights and the original number of servings it yields.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Set Target Event or Shift Servings",
        text: "Adjust the portion slider or enter your required batch size to automatically recalculate proportional quantities.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Verify Cooking Loss & Seasoning Rules",
        text: "Check high-intensity seasonings (spices, salt, extracts) and adjust cooking times for larger commercial vessel thermal mass.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Print A4 Station Prep Sheet",
        text: "Click print to generate a high-contrast station spec card with checkboxes for prep cooks and line chefs.",
      },
    ],
  };

  return (
    <div className="rh-page min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="no-print">
        <RhHeader theme="dark" />
      </div>

      {/* Modern Studio Dark Hero Band */}
      <section className="no-print bg-[#0D0D0D] text-white pt-28 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2 pb-1">
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#BAFF00] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Free Tools &amp; Calculators</span>
            </Link>
            <Link
              href="/services/takeaway-web-design"
              className="text-xs font-mono text-white/70 hover:text-[#BAFF00] transition-colors"
            >
              £250 Direct Ordering Websites →
            </Link>
          </div>

          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-white/55 font-mono flex-wrap">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/tools" className="hover:underline">Tools</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-[#BAFF00] font-semibold" aria-current="page">
                Recipe Batch Calculator
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3.5 mb-1">
            <IconTile color="blue" size="md"><ChefHat className="w-5 h-5" /></IconTile>
            <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#BAFF00]/15 text-[#BAFF00] border border-[#BAFF00]/35 text-xs font-mono font-bold uppercase">
              Free Culinary Scaling Tool
            </span>
            <span className="text-xs text-white/55 font-mono">
              Proportional Commercial Batching &amp; Mise en Place Spec
            </span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Commercial Recipe Scaler &amp; Batch Costing Calculator UK
          </h1>

          {/* Byline & Verification Date */}
          <div className="flex items-center gap-2 text-xs text-white/55 pt-1">
            <span>By <strong>Saim Dev</strong></span>
            <span>•</span>
            <span>Last Reviewed: <strong>28 October 2026</strong></span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-[#BAFF00] font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Standard Metric &amp; Imperial Kitchen Scaling</span>
            </span>
          </div>

          {/* 40-60 Word Direct Compliance & Calculation Answer Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white/85 shadow-xl leading-relaxed space-y-2">
            <div className="font-bold text-[#BAFF00] flex items-center gap-1.5 uppercase font-mono text-[11px] tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#BAFF00]" />
              <span>Direct Calculation Summary</span>
            </div>
            <p>
              This free recipe scaler and batch calculator allows UK commercial kitchens, event caterers, and bakeries to proportionally multiply or divide recipe ingredient yields. Input base quantities and drag the target servings slider to generate instant, kitchen-tested mise en place weights with zero sign-up required.
            </p>
          </div>
        
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">
        {/* ── INTERACTIVE TOOL ── */}
        <RecipeCalculatorTool />

        {/* ── COMMERCIAL RECIPE BATCHING MASTER GUIDE (1,500+ WORDS CONTEXT) ── */}
        <article className="no-print space-y-8 text-neutral-800 leading-relaxed">
          {/* Section 1: Scaling Mathematics & The 4x Rule */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-950">
                  Commercial Kitchen Scaling Mathematics: Avoiding the Multiplier Trap
                </h2>
                <p className="text-xs text-neutral-500">
                  Why mathematical scaling breaks down for seasonings, thermal inertia, and surface area evaporation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-mono text-xs">A</span>
                  <span>Direct Linear Multipliers (Proteins &amp; Starches)</span>
                </div>
                <p className="text-neutral-600 text-xs">
                  Base carbohydrates, primary butchery proteins, flours, and broths scale directly 1:1 with the recipe conversion factor. If 4 portions require 600g of diced chicken breast, 40 portions require exactly 6,000g (6kg) of chicken breast.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-mono text-xs">B</span>
                  <span>Non-Linear Multipliers (Spices, Salt &amp; Acid)</span>
                </div>
                <p className="text-neutral-600 text-xs">
                  Capasaicin, black pepper, cloves, dried herbs, and table salt intensify exponentially in large volume stock pots. For batches larger than 4x original yield, multiply seasonings by 70% to 80% of the calculated factor and season to final palate.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-mono text-xs">C</span>
                  <span>Thermal Mass &amp; Cooking Times</span>
                </div>
                <p className="text-neutral-600 text-xs">
                  Never multiply cooking times by the batch factor. A 50-litre bratt pan of beef stew takes longer to reach simmer than a 2-litre saucepan due to thermal mass, but once simmering, cooking time remains constant.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-mono text-xs">D</span>
                  <span>Pan Surface Area &amp; Liquid Reduction</span>
                </div>
                <p className="text-neutral-600 text-xs">
                  Large commercial tilt-skillets have higher surface evaporation than narrow stockpots. Monitor reduction thickness and maintain reserve warm stock to adjust culinary viscosity during large catering events.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Standard Units Conversion Table */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-950">
              UK Commercial Kitchen Weight &amp; Volume Quick Reference
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Use this standard culinary conversion table to translate kitchen wholesale packaging units into precise operational recipe measurements:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-neutral-100/80 border-b border-neutral-200 text-neutral-700 font-mono text-[11px] uppercase">
                    <th className="py-3 px-4">Culinary Unit</th>
                    <th className="py-3 px-4">Metric Equivalent</th>
                    <th className="py-3 px-4">Imperial Equivalent</th>
                    <th className="py-3 px-4">Standard Kitchen Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">1 Kilogram (kg)</td>
                    <td className="py-3 px-4 font-mono">1,000 grams (g)</td>
                    <td className="py-3 px-4 font-mono">2.205 lbs (35.27 oz)</td>
                    <td className="py-3 px-4">Wholesale butchery cuts, bulk flour, potato sacks</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">1 Litre (L)</td>
                    <td className="py-3 px-4 font-mono">1,000 millilitres (ml)</td>
                    <td className="py-3 px-4 font-mono">1.76 UK Pints (35.2 fl oz)</td>
                    <td className="py-3 px-4">Stock bases, cooking oils, dairy creams</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">1 UK Tablespoon (tbsp)</td>
                    <td className="py-3 px-4 font-mono">15 ml</td>
                    <td className="py-3 px-4 font-mono">0.5 fl oz</td>
                    <td className="py-3 px-4">Marinades, infused oils, dressings, vinegar glazes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">1 UK Teaspoon (tsp)</td>
                    <td className="py-3 px-4 font-mono">5 ml</td>
                    <td className="py-3 px-4 font-mono">0.17 fl oz</td>
                    <td className="py-3 px-4">Spices, baking powders, extracts, food colourings</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">1 Pound (lb)</td>
                    <td className="py-3 px-4 font-mono">453.6 grams (g)</td>
                    <td className="py-3 px-4 font-mono">16 ounces (oz)</td>
                    <td className="py-3 px-4">Traditional British bakery doughs and pastry butter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Frequently Asked Questions */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-950">
                  Recipe Scaling &amp; Batching FAQs
                </h2>
                <p className="text-xs text-neutral-500">
                  Culinary maths, portion control, and production scheduling for commercial catering operations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 space-y-2">
                  <h3 className="font-bold text-neutral-900 flex items-start gap-2">
                    <span className="text-amber-700 font-mono font-bold">Q{idx + 1}.</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-neutral-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Related Tools */}
          <section className="bg-neutral-100/70 rounded-3xl p-6 sm:p-8 border border-neutral-200 space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
              Related Commercial Kitchen Tools &amp; Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/tools/food-cost-calculator"
                className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-amber-700 flex items-center justify-between">
                    <span>Food Cost Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Calculate gross profit margins, plate costs, and VAT-inclusive menu pricing.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-700 mt-3 block">Open Free Tool →</span>
              </Link>

              <Link
                href="/tools/allergen-matrix-generator"
                className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-amber-700 flex items-center justify-between">
                    <span>14 Allergen Matrix Tool</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Track statutory allergens across recipes and generate printable kitchen matrices.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-700 mt-3 block">Open Free Tool →</span>
              </Link>

              <Link
                href="/blog/how-to-scale-recipes-commercial-catering-batch-calculator"
                className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-amber-700 flex items-center justify-between">
                    <span>Recipe Scaling Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Detailed guide to bulk culinary conversions, mise en place schedules, and yield factors.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-700 mt-3 block">Read Article →</span>
              </Link>
            </div>
          </section>

          {/* Silo Cross-Navigation */}
          <ToolsSiloNav currentSlug="recipe-batch-calculator" />

          {/* Legal Disclaimer */}
          <FoodSafetyDisclaimer />
        </article>
      </main>

      {/* Footer */}
      <SiteFooter theme="light" />
    </div>
  );
}
