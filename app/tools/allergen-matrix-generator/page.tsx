import { Metadata } from "next";
import Link from "next/link";
import { IconTile } from "@/components/icons/IconTile";
import { ShieldAlert, ArrowLeft, ArrowRight, ShieldCheck, HelpCircle, FileText, CheckCircle2, AlertTriangle, BookOpen, Layers } from "lucide-react";
import { AllergenMatrixTool } from "@/components/tools/AllergenMatrixTool";
import { FoodSafetyDisclaimer } from "@/components/FoodSafetyDisclaimer";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "14 Allergen Matrix Generator UK | Free Kitchen Allergy Chart",
  description: "Create a statutory 14 allergen matrix chart for your UK restaurant or takeaway. Free interactive allergen table generator with printable A4 kitchen poster export.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/tools/allergen-matrix-generator",
    languages: {
      "en-GB": "https://www.saimdev.site/tools/allergen-matrix-generator",
    },
  },
  openGraph: {
    title: "14 Allergen Matrix Generator UK | Free Kitchen Allergy Chart",
    description: "Create a statutory 14 allergen matrix chart for your UK restaurant or takeaway. Free interactive allergen table generator with printable A4 kitchen poster export.",
    url: "https://www.saimdev.site/tools/allergen-matrix-generator",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free 14 Allergen Matrix Generator UK - Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "14 Allergen Matrix Generator UK | Free Kitchen Allergy Chart",
    description: "Create a statutory 14 allergen matrix chart for your UK restaurant or takeaway. Free interactive allergen table generator with printable A4 kitchen poster export.",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

const faqs = [
  {
    q: "Is an allergen matrix legally required for UK restaurants and takeaways?",
    a: "Under the Food Information Regulations 2014 (FIR), all UK food businesses are legally obligated to provide accurate allergen information for all 14 statutory allergens upon customer request. While having a specific grid format is not strictly prescribed by statute, maintaining an up-to-date allergen matrix chart is recognized by the Food Standards Agency (FSA) and inspecting Environmental Health Officers (EHOs) as industry best practice for due diligence.",
  },
  {
    q: "What are the 14 statutory food allergens in the UK?",
    a: "The 14 legally recognized food allergens are: Celery, Cereals containing gluten (wheat, barley, rye, oats), Crustaceans (prawns, crabs, lobsters), Eggs, Fish, Lupin, Milk, Molluscs (mussels, oysters, squid), Mustard, Tree Nuts (almonds, walnuts, hazelnuts, cashews, pecans, Brazil nuts, pistachios, macadamia), Peanuts, Sesame seeds, Soya, and Sulphur dioxide/Sulphites (above 10mg/kg).",
  },
  {
    q: "How should commercial kitchens communicate 'May Contain' cross-contamination risks?",
    a: "Use 'May Contain' warnings only when there is a genuine, unavoidable risk of cross-contact that cannot be controlled through thorough cleaning or physical segregation—such as shared deep fat fryers, shared baking ovens, or supplier-flagged ingredient batches. The FSA explicitly advises against using blanket 'may contain' disclaimers across entire menus.",
  },
  {
    q: "How often should a restaurant or takeaway review its allergen matrix?",
    a: "Review your allergen matrix whenever a recipe changes, whenever a supplier alters ingredient specifications or product brands, and at least quarterly during routine kitchen management audits. Always retain dated copies in your food safety HACCP due diligence binder.",
  },
  {
    q: "Can staff provide allergen information verbally?",
    a: "Yes. Food businesses can communicate allergen information verbally, provided staff have ready access to written, verified allergen records (such as this allergen matrix chart) to verify details before answering customer enquiries, and a prominent customer signpost directs guests to ask staff for allergen details.",
  },
];

export default function AllergenMatrixGeneratorPage() {
  const canonicalUrl = "https://www.saimdev.site/tools/allergen-matrix-generator";

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
        name: "14 Allergen Matrix Generator",
        item: canonicalUrl,
      },
    ],
  };

  // 2. WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Free 14 Food Allergen Matrix Generator & Kitchen Chart Maker UK",
    description: "Free interactive browser tool for UK restaurants, takeaways, cafes, and mobile caterers to audit menu items against the 14 statutory food allergens and export printable A4 kitchen matrix sheets.",
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
    name: "How to Build a Compliant 14-Allergen Matrix for UK Food Businesses",
    description: "Step-by-step instructions for chefs, caterers, and food handlers to map menu items against all 14 statutory allergens.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Audit Complete Ingredient Packaging & Wholesale Specs",
        text: "Inspect every component of your dishes, expanding compound ingredients such as sauces, stocks, batters, and marinades.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Map Dish Items Against the 14 Regulated Allergens",
        text: "Select 'Contains' for deliberate ingredients and 'May Contain' for genuine shared-equipment or fryer cross-contact risks.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Verify Cooking Equipment & Oil Segregation",
        text: "Confirm whether items share fryers, grills, or preparation boards with allergens like gluten, fish, or crustaceans.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Print A4 Kitchen Poster & Train Front-of-House Staff",
        text: "Print the verified allergen matrix, display it at order-taking and kitchen pass stations, and brief all staff on answering customer queries.",
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            £250 Takeaway Websites
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
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
                14 Allergen Matrix Generator
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3.5 mb-1">
            <IconTile color="vermilion" size="md"><ShieldAlert className="w-5 h-5" /></IconTile>
            <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold uppercase">
              Free Kitchen Compliance Tool
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Aligned with UK Food Information Regulations (FIR 2014)
            </span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Free 14 Food Allergen Matrix Generator &amp; Kitchen Chart Maker UK
          </h1>

          {/* Byline & Verification Date */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
            <span>By <strong>Saim Dev</strong></span>
            <span>•</span>
            <span>Last Reviewed: <strong>28 October 2026</strong></span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Aligned with UK Food Standards Agency Guidelines</span>
            </span>
          </div>

          {/* 40-60 Word Direct Compliance & Calculation Answer Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-sm text-neutral-900 leading-relaxed space-y-2">
            <div className="font-bold text-amber-950 flex items-center gap-1.5 uppercase font-mono text-[11px] tracking-wide">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Direct Compliance Summary</span>
            </div>
            <p>
              Under UK Food Information Regulations (FIR 2014), commercial catering and takeaway businesses must clearly communicate the presence of all 14 statutory allergens in their menu items. This free interactive tool enables kitchen operators to audit dishes, track direct and cross-contact risks, and print a verified A4 kitchen allergen matrix for EHO inspection readiness.
            </p>
          </div>
        </div>

        {/* ── INTERACTIVE TOOL ── */}
        <AllergenMatrixTool />

        {/* ── 14 ALLERGENS REGULATORY MASTER GUIDE (1,500+ WORDS CONTEXT) ── */}
        <article className="no-print space-y-8 text-neutral-800 leading-relaxed">
          {/* Section 1: Complete 14 Allergens Table */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-950">
                  The 14 Statutory UK Food Allergens: Commercial Kitchen Reference
                </h2>
                <p className="text-xs text-neutral-500">
                  Full statutory definitions, common culinary sources, and hidden ingredients required under UK food law.
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-neutral-100/80 border-b border-neutral-200 text-neutral-700 font-mono text-[11px] uppercase">
                    <th className="py-3 px-3">Allergen</th>
                    <th className="py-3 px-3">Common Culinary Sources</th>
                    <th className="py-3 px-3">Hidden / Overlooked Ingredients</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">1. Celery</td>
                    <td className="py-3 px-3">Stalks, leaves, seeds, celery salt</td>
                    <td className="py-3 px-3">Bouillon cubes, soup bases, spice rubs, pre-made tomato sauces</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">2. Cereals containing Gluten</td>
                    <td className="py-3 px-3">Wheat, rye, barley, oats, spelt, kamut</td>
                    <td className="py-3 px-3">Soy sauce, batter mixes, beer batters, gravies thickened with flour</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">3. Crustaceans</td>
                    <td className="py-3 px-3">Crabs, lobsters, prawns, scampi, crayfish</td>
                    <td className="py-3 px-3">Shrimp paste (belacan), Thai curries, fish stocks, dim sum</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">4. Eggs</td>
                    <td className="py-3 px-3">Whole eggs, egg whites, dried egg powders</td>
                    <td className="py-3 px-3">Mayonnaise, brioche buns, pasta, mousses, cocktail foam, egg washes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">5. Fish</td>
                    <td className="py-3 px-3">Fresh, frozen, smoked, or canned fish</td>
                    <td className="py-3 px-3">Worcestershire sauce, Caesar salad dressing, fish sauce, nam pla</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">6. Lupin</td>
                    <td className="py-3 px-3">Lupin flour, lupin seeds</td>
                    <td className="py-3 px-3">Artisan pastries, continental breads, vegan pies, pizza bases</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">7. Milk</td>
                    <td className="py-3 px-3">Butter, cream, cheese, milk powders, whey</td>
                    <td className="py-3 px-3">Garlic butter on pizza crusts, glaze on burger buns, batter coatings</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">8. Molluscs</td>
                    <td className="py-3 px-3">Mussels, oysters, squid (calamari), snails</td>
                    <td className="py-3 px-3">Oyster sauce in stir-fries, paella broth, canned seafood blends</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">9. Mustard</td>
                    <td className="py-3 px-3">Liquid mustard, mustard flour, mustard seeds</td>
                    <td className="py-3 px-3">Salad vinaigrettes, marinades, processed sausages, curry powders</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">10. Tree Nuts</td>
                    <td className="py-3 px-3">Almonds, hazelnuts, walnuts, cashews, pecans, pistachios</td>
                    <td className="py-3 px-3">Pesto sauce, satay sauces, marzipan, dukkah, nut oils, desserts</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">11. Peanuts</td>
                    <td className="py-3 px-3">Peanuts, groundnut oil, peanut butter</td>
                    <td className="py-3 px-3">Chilli oils, satay marinades, baked goods, Asian stir-fry sauces</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">12. Sesame Seeds</td>
                    <td className="py-3 px-3">Sesame seeds, tahini, sesame oil</td>
                    <td className="py-3 px-3">Burger bun crusts, hummus, falafel, Korean barbecue glazes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">13. Soya</td>
                    <td className="py-3 px-3">Soybeans, edamame, tofu, soy milk</td>
                    <td className="py-3 px-3">Soy lecithin in chocolate, processed burger binders, teriyaki sauce</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-bold text-neutral-900">14. Sulphur Dioxide</td>
                    <td className="py-3 px-3">Preservatives in dried fruit, wine, beer</td>
                    <td className="py-3 px-3">Processed burger patties, sausages (preservative E220–E228), cider</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Statutory Legal Obligations & EHO Due Diligence */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-950">
              UK Legal Framework: FIR 2014 &amp; Natasha&apos;s Law Requirements
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
              <p>
                In the United Kingdom, food allergen management is governed by the <strong>Food Safety Act 1990</strong>, the <strong>Food Information Regulations 2014 (FIR)</strong>, and the <strong>Food Information (Amendment) (England) Regulations 2020 (Natasha&apos;s Law)</strong>. Environmental Health Officers (EHOs) treat allergen non-compliance as an immediate risk to life, and failure to provide accurate allergen declarations can result in unlimited fines, business closure notices, or criminal prosecution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                  <h3 className="font-bold text-neutral-900">1. Mandatory Signposting Notice</h3>
                  <p className="text-neutral-600 text-xs">
                    Food businesses must display a clear, easily visible customer notice at all ordering points (counters, menus, websites) prompting guests to inform staff of any allergies before placing their food order.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                  <h3 className="font-bold text-neutral-900">2. Documented Due Diligence</h3>
                  <p className="text-neutral-600 text-xs">
                    Verbal advice alone is insufficient if staff cannot reference a verified written matrix. Retaining this printed allergen chart proves due diligence under Section 21 of the Food Safety Act 1990.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                  <h3 className="font-bold text-neutral-900">3. Compound Ingredient Transparency</h3>
                  <p className="text-neutral-600 text-xs">
                    Staff must verify wholesale food labels for sub-ingredients. For example, a pre-made curry sauce may contain hidden shrimp paste (crustaceans) or wheat flour (gluten).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-1.5">
                  <h3 className="font-bold text-neutral-900">4. Oil &amp; Fryer Segregation</h3>
                  <p className="text-neutral-600 text-xs">
                    If chips are cooked in the same oil as battered fish or breaded chicken nuggets, they must be marked as containing gluten and fish due to deep-fat fryer cross-contact.
                  </p>
                </div>
              </div>
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
                  Allergen Management &amp; Matrix FAQs
                </h2>
                <p className="text-xs text-neutral-500">
                  Common questions on allergen matrices, EHO expectations, and UK food safety law.
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
              Related Kitchen Compliance Tools &amp; Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/tools/ppds-label-generator"
                className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-amber-700 flex items-center justify-between">
                    <span>PPDS Label Generator</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Print adhesive packaging stickers compliant with Natasha&apos;s Law regulations.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-700 mt-3 block">Open Free Tool →</span>
              </Link>

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
                    Calculate commercial recipe plate margins, gross profit %, and VAT adjustments.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-700 mt-3 block">Open Free Tool →</span>
              </Link>

              <Link
                href="/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants"
                className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-amber-700 flex items-center justify-between">
                    <span>Allergen Matrix Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    In-depth editorial tutorial on structuring kitchen allergen matrices to pass EHO audits.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-700 mt-3 block">Read Article →</span>
              </Link>
            </div>
          </section>

          {/* Legal Disclaimer */}
          <FoodSafetyDisclaimer />
        </article>
      </main>

      {/* Footer */}
      <SiteFooter theme="light" />
    </div>
  );
}
