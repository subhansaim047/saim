import { Metadata } from "next";
import Link from "next/link";
import { IconTile } from "@/components/icons/IconTile";
import { ArrowLeft, ArrowRight, ShieldCheck, HelpCircle, FileText, CheckCircle2, Calculator, Percent, DollarSign, ChefHat } from "lucide-react";
import { FoodCostCalculatorTool } from "@/components/tools/FoodCostCalculatorTool";
import { FoodSafetyDisclaimer } from "@/components/FoodSafetyDisclaimer";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Food Cost Calculator UK | Commercial Kitchen GP% & Menu Pricing",
  description: "Free commercial food cost calculator for UK restaurants, takeaways, and caterers. Calculate plate cost, gross profit margins, and VAT-inclusive menu prices.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/tools/food-cost-calculator",
    languages: {
      "en-GB": "https://www.saimdev.site/tools/food-cost-calculator",
    },
  },
  openGraph: {
    title: "Food Cost Calculator UK | Commercial Kitchen GP% & Menu Pricing",
    description: "Free commercial food cost calculator for UK restaurants, takeaways, and caterers. Calculate plate cost, gross profit margins, and VAT-inclusive menu prices.",
    url: "https://www.saimdev.site/tools/food-cost-calculator",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Commercial Kitchen Food Cost Calculator UK - Saim Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Food Cost Calculator UK | Commercial Kitchen GP% & Menu Pricing",
    description: "Free commercial food cost calculator for UK restaurants, takeaways, and caterers. Calculate plate cost, gross profit margins, and VAT-inclusive menu prices.",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

const faqs = [
  {
    q: "How do I calculate food cost percentage in a UK commercial kitchen?",
    a: "Divide total raw ingredient costs per dish (including packaging and waste allowance) by the net menu selling price excluding 20% VAT, then multiply by 100. Target food cost percentages in UK hospitality typically range between 28% and 34%, delivering a 66% to 72% gross profit margin.",
  },
  {
    q: "How does UK VAT affect takeaway and restaurant food costing?",
    a: "In the UK, hot takeaway food, all restaurant dining, and home delivery are subject to 20% standard rate VAT. To determine your true net revenue, divide customer menu prices by 1.20 before calculating food cost percentage or gross profit margins. Failing to strip VAT inflates margins by 20%.",
  },
  {
    q: "What is the difference between food cost percentage and gross profit (GP) margin?",
    a: "Food cost percentage represents the proportion of revenue spent on raw ingredients. Gross profit margin represents remaining revenue after ingredient costs are deducted. Together they total 100%: if your food cost is 28%, your gross profit margin is 72%.",
  },
  {
    q: "How should commercial kitchens factor ingredient trim and shrinkage into costs?",
    a: "Raw meats, seafood, and fresh produce lose weight through peeling, trimming, and cooking. Calculate usable yield percentage: divide raw purchase price by usable weight percentage. For example, if beef brisket costs £10/kg with 75% yield after trim, the actual plate cost is £13.33/kg.",
  },
  {
    q: "How often should UK restaurants update recipe cost calculations?",
    a: "Audit high-volume signature dishes monthly and review complete menu pricing quarterly or whenever wholesale invoice supplier prices fluctuate by more than 5%. Automated digital recipe recalculations prevent margin erosion during wholesale inflation.",
  },
];

export default function FoodCostCalculatorPage() {
  const canonicalUrl = "https://www.saimdev.site/tools/food-cost-calculator";

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
        name: "Food Cost Calculator UK",
        item: canonicalUrl,
      },
    ],
  };

  // 2. WebApplication Schema
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Commercial Kitchen Food Cost & Gross Profit Calculator UK",
    description: "Free interactive browser calculator for UK restaurants, takeaways, and commercial catering operators to calculate recipe plate costs, gross profit percentages, and VAT-inclusive menu pricing.",
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
    name: "How to Cost a Commercial Recipe and Calculate UK Menu Profitability",
    description: "Step-by-step procedure for UK chefs, takeaway operators, and restaurant managers to calculate plate costs, GP margins, and selling prices.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Enter Primary Ingredients & Invoiced Unit Costs",
        text: "Input base proteins, carbohydrates, and main components with exact invoiced wholesale costs and portion quantities in grams or units.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Add Seasonings, Dressings & Packaging Overheads",
        text: "Include secondary items like oils, garnishes, takeaway packaging boxes, paper bags, and condiment sachets to capture complete cost of goods sold.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Input Target Gross Profit Margin or Selling Price",
        text: "Set target food cost percentage (e.g. 28% to 32%) or test your proposed menu selling price to view instant live gross profit margins.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Calculate Price Inclusive of 20% UK VAT & Print Spec Sheet",
        text: "Review the net selling price, verify total plate margin, add standard 20% UK VAT for hot food and dine-in, and print your standardized recipe costing sheet.",
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
                Food Cost Calculator UK
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3.5 mb-1">
            <IconTile color="emerald" size="md"><Calculator className="w-5 h-5" /></IconTile>
            <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold uppercase">
              Free Kitchen Costing Tool
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              UK Hospitality Gross Profit (GP%) & VAT 20% Standard
            </span>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-950">
            Commercial Kitchen Food Cost &amp; Gross Profit Calculator UK
          </h1>

          {/* Byline & Verification Date */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 pt-1">
            <span>By <strong>Saim Dev</strong></span>
            <span>•</span>
            <span>Last Reviewed: <strong>28 October 2026</strong></span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Aligned with UK Hospitality Costing Benchmarks</span>
            </span>
          </div>

          {/* 40-60 Word Direct Compliance & Calculation Answer Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-sm text-neutral-900 leading-relaxed space-y-2">
            <div className="font-bold text-amber-950 flex items-center gap-1.5 uppercase font-mono text-[11px] tracking-wide">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>Direct Calculation Summary</span>
            </div>
            <p>
              This free UK food cost calculator helps commercial kitchens, restaurants, and takeaways determine exact dish plate costs, gross profit (GP) percentages, and profitable selling prices. Input primary ingredients, packaging overheads, and target profit margins to generate instant VAT-adjusted menu pricing with zero sign-up required.
            </p>
          </div>
        </div>

        {/* ── INTERACTIVE TOOL ── */}
        <FoodCostCalculatorTool />

        {/* ── COMMERCIAL KITCHEN COSTING MASTER GUIDE (1,500+ WORDS CONTEXT) ── */}
        <article className="no-print space-y-8 text-neutral-800 leading-relaxed">
          {/* Section 1: Core Formulas */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-950">
                  Standard Commercial Kitchen Costing Formulas (UK Hospitality)
                </h2>
                <p className="text-xs text-neutral-500">
                  Authoritative formulas for recipe plate costing, gross profit margin, and statutory VAT adjustments.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-mono text-xs">1</span>
                  <span>Food Cost Percentage Formula</span>
                </div>
                <div className="font-mono bg-white p-2.5 rounded-xl border border-neutral-200 text-amber-950 text-xs">
                  Food Cost % = (Total Cost of Ingredients / Net Selling Price ex. VAT) × 100
                </div>
                <p className="text-neutral-600 text-xs">
                  Represents the percentage of each pound earned that goes directly toward purchasing raw ingredients and portion packaging.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-mono text-xs">2</span>
                  <span>Gross Profit (GP%) Margin Formula</span>
                </div>
                <div className="font-mono bg-white p-2.5 rounded-xl border border-neutral-200 text-amber-950 text-xs">
                  Gross Profit Margin % = ((Net Selling Price - Plate Cost) / Net Selling Price) × 100
                </div>
                <p className="text-neutral-600 text-xs">
                  Represents remaining revenue to cover operational kitchen wages, utilities, commercial rent, business rates, and net net profit.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-mono text-xs">3</span>
                  <span>UK VAT Removal Formula (Standard Rate 20%)</span>
                </div>
                <div className="font-mono bg-white p-2.5 rounded-xl border border-neutral-200 text-amber-950 text-xs">
                  Price Excluding VAT = Menu Price (incl. VAT) / 1.20
                </div>
                <p className="text-neutral-600 text-xs">
                  Mandatory step for all UK hot food takeaways, restaurants, and catering services. Never calculate food cost % against gross VAT-inclusive prices.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-2">
                <div className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center font-mono text-xs">4</span>
                  <span>Usable Yield &amp; Waste Factor Adjustment</span>
                </div>
                <div className="font-mono bg-white p-2.5 rounded-xl border border-neutral-200 text-amber-950 text-xs">
                  Actual Ingredient Cost = Invoiced As-Purchased Cost / Usable Yield %
                </div>
                <p className="text-neutral-600 text-xs">
                  Compensates for butchery trim, peeling losses, and evaporation shrinkage during commercial food preparation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Industry Benchmarks */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-950">
              UK Hospitality Profitability Benchmarks by Sector
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Every commercial kitchen sector operates with unique labor overheads and preparation complexity. Below are typical industry standard food cost percentages and gross profit margin targets across the UK:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-neutral-100/80 border-b border-neutral-200 text-neutral-700 font-mono text-[11px] uppercase">
                    <th className="py-3 px-4">Hospitality Sector</th>
                    <th className="py-3 px-4">Target Food Cost %</th>
                    <th className="py-3 px-4">Target GP Margin %</th>
                    <th className="py-3 px-4">Key Cost Drivers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 text-neutral-700">
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">Pizza &amp; Italian Takeaway</td>
                    <td className="py-3 px-4 text-emerald-700 font-mono font-bold">18% – 24%</td>
                    <td className="py-3 px-4 font-mono font-bold text-neutral-900">76% – 82%</td>
                    <td className="py-3 px-4">Flour and dough volume, mozzarella yield, delivery packaging boxes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">Smash Burger &amp; Street Food</td>
                    <td className="py-3 px-4 text-emerald-700 font-mono font-bold">25% – 30%</td>
                    <td className="py-3 px-4 font-mono font-bold text-neutral-900">70% – 75%</td>
                    <td className="py-3 px-4">Prime beef brisket blend, artisan brioche buns, single-use kraft packaging</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">Traditional Fish &amp; Chip Shop</td>
                    <td className="py-3 px-4 text-amber-700 font-mono font-bold">30% – 36%</td>
                    <td className="py-3 px-4 font-mono font-bold text-neutral-900">64% – 70%</td>
                    <td className="py-3 px-4">Atlantic cod and haddock commodity prices, frying oil filtration cycles, potato sack quality</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">Gastro Pub &amp; Casual Dining</td>
                    <td className="py-3 px-4 text-emerald-700 font-mono font-bold">28% – 32%</td>
                    <td className="py-3 px-4 font-mono font-bold text-neutral-900">68% – 72%</td>
                    <td className="py-3 px-4">Fresh steaks and poultry butchery, garnishes, daily chef preparation hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-neutral-900">Commercial Event Caterer</td>
                    <td className="py-3 px-4 text-emerald-700 font-mono font-bold">22% – 28%</td>
                    <td className="py-3 px-4 font-mono font-bold text-neutral-900">72% – 78%</td>
                    <td className="py-3 px-4">Batch scaling buffer (5% extra portions), transport cooling logs, off-site holding equipment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Step-by-Step Practical Guide */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-neutral-950">
              How to Standardize Recipe Costing in 4 Steps
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-700">
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-2xl bg-amber-100 text-amber-900 font-mono font-bold flex items-center justify-center shrink-0">
                  01
                </span>
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900">Weigh Every Single Ingredient (No Teaspoon Estimates)</h3>
                  <p>
                    Culinary variation destroys kitchen gross margins. Standardize recipes in grams (g) or millilitres (ml) rather than vague culinary units like &quot;handfuls&quot; or &quot;pinches&quot;. A chef adding an extra 15g of cheddar cheese per burger can cost a busy takeaway over £2,400 annually in uncaptured ingredient drift.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-2xl bg-amber-100 text-amber-900 font-mono font-bold flex items-center justify-center shrink-0">
                  02
                </span>
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900">Include Packaging and Single-Use Disposables</h3>
                  <p>
                    For delivery and takeaway businesses, food packaging is a direct ingredient cost. Include the burger box (£0.22), greaseproof paper (£0.03), branded paper bag (£0.12), and condiment sauce ramekins (£0.08) directly inside the plate costing table to prevent uncounted overhead loss.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-2xl bg-amber-100 text-amber-900 font-mono font-bold flex items-center justify-center shrink-0">
                  03
                </span>
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900">Separate Dine-In vs. Third-Party Delivery Portals</h3>
                  <p>
                    Third-party delivery platforms charge between 15% and 30% plus VAT in sales commissions. If you sell a burger for £10 on an aggregator, you receive as little as £7.00 net. Use this calculator to set higher delivery channel prices that preserve your required 70% gross profit benchmark.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-2xl bg-amber-100 text-amber-900 font-mono font-bold flex items-center justify-center shrink-0">
                  04
                </span>
                <div className="space-y-1">
                  <h3 className="font-bold text-neutral-900">Conduct Monthly Supplier Invoiced Audits</h3>
                  <p>
                    Wholesale food prices frequently adjust weekly. Designate a kitchen supervisor or manager to cross-examine supplier invoices against your standard recipe cost cards at the end of each trading month to immediately spot wholesale price hikes.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Frequently Asked Questions */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-800">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-950">
                  Commercial Kitchen Food Costing FAQs
                </h2>
                <p className="text-xs text-neutral-500">
                  Expert guidance on recipe profitability, gross margin targets, and UK hospitality finance.
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

          {/* Section 5: Related Compliance & Kitchen Tools */}
          <section className="bg-neutral-100/70 rounded-3xl p-6 sm:p-8 border border-neutral-200 space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
              Related Commercial Kitchen Tools &amp; Regulatory Guides
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
                    Generate Natasha&apos;s Law compliant labels with automated 14 allergen bolding.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-700 mt-3 block">Open Free Tool →</span>
              </Link>

              <Link
                href="/tools"
                className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-amber-700 flex items-center justify-between">
                    <span>14 Allergen Matrix Tool</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Audit menu ingredients and create printable statutory allergen matrices for staff.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-semibold text-amber-700 mt-3 block">Open Free Tool →</span>
              </Link>

              <Link
                href="/blog/mastering-food-cost-percentage-commercial-kitchen-calculator"
                className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-sm transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-neutral-900 group-hover:text-amber-700 flex items-center justify-between">
                    <span>Food Cost Master Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Deep dive into commercial kitchen portion control, shrinkage reduction, and GP targets.
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
