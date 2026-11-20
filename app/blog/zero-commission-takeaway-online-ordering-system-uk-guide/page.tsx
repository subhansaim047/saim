import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock,
  HelpCircle,
  QrCode,
  ShieldAlert,
  Sparkles,
  Tag,
} from "lucide-react";
import { RhHeader } from "@/components/rh/RhHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogSiloNav } from "@/components/blog/BlogSiloNav";
import { EngineeringVerificationBadge } from "@/components/ui/EditorialVisualPack";

export const metadata: Metadata = {
  title: "Zero Commission Takeaway Ordering System UK Guide | Saim Dev",
  description:
    "Step-by-step UK takeaway blueprint to launch a zero-commission direct online ordering system, cut 30% Just Eat fees, and convert repeat diners via QR flyers.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.saimdev.site/blog/zero-commission-takeaway-online-ordering-system-uk-guide",
    languages: {
      "en-GB":
        "https://www.saimdev.site/blog/zero-commission-takeaway-online-ordering-system-uk-guide",
      "en-US":
        "https://www.saimdev.site/blog/zero-commission-takeaway-online-ordering-system-uk-guide",
      "x-default":
        "https://www.saimdev.site/blog/zero-commission-takeaway-online-ordering-system-uk-guide",
    },
  },
  openGraph: {
    type: "article",
    title: "Zero Commission Takeaway Ordering System UK Guide | Saim Dev",
    description:
      "Step-by-step UK takeaway blueprint to launch a zero-commission direct online ordering system, cut 30% Just Eat fees, and convert repeat diners via QR flyers.",
    url: "https://www.saimdev.site/blog/zero-commission-takeaway-online-ordering-system-uk-guide",
    siteName: "Saim Dev",
    locale: "en_GB",
    images: [
      {
        url: "https://www.saimdev.site/demos/previews/hotbite-street-food-takeaway.webp",
        width: 1200,
        height: 630,
        alt: "Zero Commission Takeaway Online Ordering System UK Blueprint — Saim Dev",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Zero Commission Takeaway Ordering System UK Guide | Saim Dev",
    description:
      "Step-by-step UK takeaway blueprint to launch a zero-commission direct online ordering system, cut 30% Just Eat fees, and convert repeat diners via QR flyers.",
    images: [
      "https://www.saimdev.site/demos/previews/hotbite-street-food-takeaway.webp",
    ],
  },
};

export default function ZeroCommissionTakeawayOrderingGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            name: "Web & Hospitality Guides",
            item: "https://www.saimdev.site/blogs",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Zero Commission Takeaway Ordering System UK Guide",
            item: "https://www.saimdev.site/blog/zero-commission-takeaway-online-ordering-system-uk-guide",
          },
        ],
      },
      {
        "@type": "Article",
        headline:
          "Zero Commission Takeaway Ordering System UK: Complete 2026 Direct Ordering Blueprint",
        description:
          "Actionable engineering and operational playbook for UK takeaways and restaurants transitioning repeat customers off 28%–35% aggregator portals onto an owned 0% commission direct ordering website.",
        image:
          "https://www.saimdev.site/demos/previews/hotbite-street-food-takeaway.webp",
        datePublished: "2026-11-18",
        dateModified: "2026-11-20",
        author: {
          "@type": "Person",
          "@id": "https://www.saimdev.site/#person",
          name: "Saim Dev",
          url: "https://www.saimdev.site/about",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.saimdev.site/#organization",
          name: "Saim Dev",
          logo: {
            "@type": "ImageObject",
            url: "https://www.saimdev.site/saim-dev-logo.png",
          },
        },
        mainEntityOfPage:
          "https://www.saimdev.site/blog/zero-commission-takeaway-online-ordering-system-uk-guide",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does a zero-commission takeaway ordering system work in the UK?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Instead of renting a menu portal that deducts 14% to 35% on every order, a zero-commission takeaway ordering system runs on your own domain name with direct Stripe, Apple Pay, Google Pay, or cash-on-collection checkout. 100% of the order revenue goes straight into your UK business bank account minus standard card processing (~1.4% + 20p).",
            },
          },
          {
            "@type": "Question",
            name: "Should a UK takeaway quit Just Eat and Deliveroo cold turkey?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Keep marketplace apps as a customer acquisition channel for first-time diners, and use thermal bag-stuffer QR flyers offering a 10%–15% direct-only discount or free side to convert repeat Friday-night orders onto your own zero-commission website.",
            },
          },
          {
            "@type": "Question",
            name: "What legal allergen information must a UK takeaway ordering website show?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under UK Food Information Regulations 2014, distance selling (online and telephone takeaway ordering) requires clear disclosure of the 14 statutory allergens before the customer completes their purchase AND upon delivery. Built-in dish-level allergen badges and an interactive 14-allergen matrix satisfy this requirement cleanly.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a custom zero-commission takeaway website cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "With Saim Dev, a custom Next.js 16 direct takeaway ordering website starts at £250 one-time fixed with £0 monthly agency retainer, 100% source code ownership, and a free live homepage concept preview before you pay a deposit.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#EFEFEF] selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <RhHeader />

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-14">
        {/* Top Breadcrumb */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/55">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-[#BAFF00] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </Link>
          <span>•</span>
          <span>UK Hospitality &amp; Direct Ordering Blueprint</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 10 min read
          </span>
        </div>

        {/* H1 & Intro */}
        <header className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BAFF00]/10 border border-[#BAFF00]/30 text-[#BAFF00] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UK Takeaway Margin Recovery Playbook (2026)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Zero Commission Takeaway Ordering System UK: Complete Direct Ordering Blueprint
          </h1>

          <p className="text-base sm:text-lg text-white/75 leading-relaxed">
            Deploying a <strong>zero commission takeaway ordering system UK</strong> operators actually own is the single fastest way to recover net kitchen profit in 2026. When third-party delivery apps deduct 14% to 35% on every basket while withholding customer contact data, even a busy Friday night shift can leave a takeaway owner with less than 8% net profit after food cost, packaging, energy, and staff wages.
          </p>

          <EngineeringVerificationBadge contextLabel="Verified against UK FIR 2014 Distance Selling Allergen Rules & 2026 Takeaway Commission Benchmarks" />
        </header>

        {/* Section 1: The Real Math */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            1. How to Stop Paying Just Eat Commission UK: The Unit Economics of a £25 Takeaway Basket
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            To understand <strong>how to stop paying Just Eat commission UK</strong> kitchens lose every week, examine the unit economics of a standard £25.00 family takeaway order across three ordering channels. You can also model your own weekly order volume in our free{" "}
            <Link
              href="/tools/commission-savings-calculator"
              className="text-[#BAFF00] hover:underline font-semibold"
            >
              Takeaway Commission Savings Calculator
            </Link>{" "}
            and check your dish-by-dish gross profit in the{" "}
            <Link
              href="/tools/food-cost-calculator"
              className="text-[#BAFF00] hover:underline font-semibold"
            >
              Commercial Kitchen Food Cost &amp; GP% Calculator
            </Link>
            .
          </p>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#141414]">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase text-white/60 bg-white/[0.03]">
                  <th className="py-3.5 px-5">Cost Line on a £25.00 Order</th>
                  <th className="py-3.5 px-5">Delivery App (30% Cut)</th>
                  <th className="py-3.5 px-5">Monthly Lease Portal</th>
                  <th className="py-3.5 px-5 text-[#BAFF00]">Owned Next.js Direct Site</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-white">Platform Commission / Order Cut</td>
                  <td className="py-3.5 px-5 font-mono text-red-400">-£7.50 (30%)</td>
                  <td className="py-3.5 px-5 font-mono text-amber-300">-£1.50 + £120/mo fee</td>
                  <td className="py-3.5 px-5 font-mono text-[#BAFF00] font-bold">£0.00 (0% Commission)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-white">Stripe / Apple Pay Card Fee</td>
                  <td className="py-3.5 px-5 font-mono">-£0.50</td>
                  <td className="py-3.5 px-5 font-mono">-£0.65</td>
                  <td className="py-3.5 px-5 font-mono">-£0.55 (1.4% + 20p)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-white">Food &amp; Packaging Cost (32% CoGS)</td>
                  <td className="py-3.5 px-5 font-mono">-£8.00</td>
                  <td className="py-3.5 px-5 font-mono">-£8.00</td>
                  <td className="py-3.5 px-5 font-mono">-£8.00</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-5 font-semibold text-white">Net Contribution to Kitchen</td>
                  <td className="py-3.5 px-5 font-mono text-red-400">£9.00 (36%)</td>
                  <td className="py-3.5 px-5 font-mono text-amber-300">£14.85 (59%)</td>
                  <td className="py-3.5 px-5 font-mono text-[#BAFF00] font-bold">£16.45 (65.8%)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            Shifting just <strong>50 repeat weekly orders</strong> (£25 average basket) from a 30% marketplace portal onto your own{" "}
            <Link
              href="/services/takeaway-web-design"
              className="text-[#BAFF00] hover:underline font-semibold"
            >
              £250 commission-free takeaway website
            </Link>{" "}
            returns <strong>£347.50 per week (£18,070 per year)</strong> straight back to your bottom line — paying off the entire website build in the first 5 days of trading.
          </p>
        </section>

        {/* Section 2: Architecture of a Direct Ordering System */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            2. What a Direct Online Ordering System for Takeaways UK Must Include
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            Hungry Friday-night customers abandon clunky PDF menus or multi-page checkout forms in seconds. A modern <strong>direct online ordering system for takeaways UK</strong> diners prefer over aggregator apps requires five non-negotiable engineering features:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">
                1. Sub-Second Mobile Menu &amp; Modifier Drawer
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Built in Next.js 16 so category tabs (Burgers, Meal Deals, Peri-Peri, Sides) open instantaneously on 4G mobile connections with tap-friendly sauce, crust, and drink modifiers.
              </p>
            </div>
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">
                2. 1-Tap Apple Pay, Google Pay &amp; Stripe Payouts
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Zero password creation friction. Diners check out in 8 seconds using biometric Apple Pay or Google Pay, with funds settling directly into your UK bank account.
              </p>
            </div>
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">
                3. Postcode Delivery Zone &amp; Minimum Basket Logic
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Automatic UK postcode validation (e.g., E1/SW1 in{" "}
                <Link href="/services/takeaway-web-design-london" className="text-[#BAFF00] hover:underline">
                  London
                </Link>
                , M14 in{" "}
                <Link href="/services/takeaway-web-design-manchester" className="text-[#BAFF00] hover:underline">
                  Manchester
                </Link>
                , or B11 in{" "}
                <Link href="/services/takeaway-web-design-birmingham" className="text-[#BAFF00] hover:underline">
                  Birmingham
                </Link>
                ) applying tiered delivery fees by radius.
              </p>
            </div>
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">
                4. Statutory 14-Allergen &amp; Natasha&apos;s Law Badges
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Interactive allergen filters synced with our{" "}
                <Link href="/tools/allergen-matrix-generator" className="text-[#BAFF00] hover:underline">
                  14-Allergen Matrix Generator
                </Link>{" "}
                and{" "}
                <Link href="/tools/ppds-label-generator" className="text-[#BAFF00] hover:underline">
                  PPDS Label Generator
                </Link>{" "}
                plus a mandatory checkout allergy notes box.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: The 4-Step Bag-Flyer Conversion Playbook */}
        <section className="space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            3. How to Convert Just Eat Customers to Your Direct Website in 30 Days
          </h2>
          <p className="text-sm sm:text-base text-white/75 leading-relaxed">
            The smartest UK operators never switch off aggregator apps overnight. Instead, use this 4-step workflow to <strong>convert Just Eat customers to direct website</strong> regulars while letting the delivery portals pay for your local brand discovery:
          </p>

          <ol className="space-y-4">
            <li className="rounded-2xl bg-[#141414] border border-white/10 p-5 flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-[#BAFF00] text-[#0D0D0D] font-mono font-extrabold text-sm flex items-center justify-center shrink-0">
                01
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">
                  Staple a QR Code Discount Flyer to Every Outgoing Delivery Bag
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">
                  Print A6 thermal or gloss flyers reading: <em>&ldquo;Order Direct Next Time at YourTakeaway.co.uk — Scan QR for 15% Off Every Order + Free Garlic Bread.&rdquo;</em> Giving the customer 15% off still saves you 15% compared to a 30% portal cut.
                </p>
              </div>
            </li>
            <li className="rounded-2xl bg-[#141414] border border-white/10 p-5 flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-[#BAFF00] text-[#0D0D0D] font-mono font-extrabold text-sm flex items-center justify-center shrink-0">
                02
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">
                  Connect Your Google Business Profile &ldquo;Order Online&rdquo; Link to Your Domain
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">
                  Remove third-party aggregator links from your Google Maps listing and set your primary website and ordering URL to your own commission-free Next.js menu.
                </p>
              </div>
            </li>
            <li className="rounded-2xl bg-[#141414] border border-white/10 p-5 flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-[#BAFF00] text-[#0D0D0D] font-mono font-extrabold text-sm flex items-center justify-center shrink-0">
                03
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">
                  Keep Direct Menu Prices 10% Lower Than Aggregator Markup Prices
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">
                  Most UK takeaways mark up their aggregator menu prices by 15%–20% to survive commission cuts. Display a clear banner on your website showing that direct prices are always the lowest in town.
                </p>
              </div>
            </li>
            <li className="rounded-2xl bg-[#141414] border border-white/10 p-5 flex items-start gap-4">
              <span className="w-8 h-8 rounded-xl bg-[#BAFF00] text-[#0D0D0D] font-mono font-extrabold text-sm flex items-center justify-center shrink-0">
                04
              </span>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">
                  Display Your 5-Star FHRS Hygiene Badge &amp; Live Allergen Filter
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">
                  Follow our{" "}
                  <Link
                    href="/blog/uk-food-hygiene-rating-scheme-5-star-checklist"
                    className="text-[#BAFF00] hover:underline"
                  >
                    5-Star Food Hygiene Rating EHO Checklist
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/blog/natashas-law-ppds-food-labelling-guide"
                    className="text-[#BAFF00] hover:underline"
                  >
                    Natasha&apos;s Law PPDS Labelling Guide
                  </Link>{" "}
                  so direct customers see instant trust signals on your ordering page.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* Section 4: FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            4. Frequently Asked Questions on Commission-Free Restaurant Ordering Websites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">
                How does a zero-commission takeaway ordering system work in the UK?
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Instead of renting a menu portal that deducts 14% to 35% on every order, a zero-commission takeaway ordering system runs on your own domain name with direct Stripe, Apple Pay, Google Pay, or cash-on-collection checkout. 100% of the order revenue goes straight into your UK business bank account minus standard card processing (~1.4% + 20p).
              </p>
            </div>
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">
                Should a UK takeaway quit Just Eat and Deliveroo cold turkey?
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                No. Keep marketplace apps as a customer acquisition channel for first-time diners, and use thermal bag-stuffer QR flyers offering a 10%–15% direct-only discount or free side to convert repeat Friday-night orders onto your own zero-commission website.
              </p>
            </div>
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">
                What legal allergen information must a UK takeaway ordering website show?
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                Under UK Food Information Regulations 2014, distance selling (online and telephone takeaway ordering) requires clear disclosure of the 14 statutory allergens before the customer completes their purchase AND upon delivery.
              </p>
            </div>
            <div className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-2">
              <h3 className="text-base font-bold text-white">
                How much does a custom zero-commission takeaway website cost?
              </h3>
              <p className="text-xs text-white/65 leading-relaxed">
                With Saim Dev, a custom Next.js 16 direct takeaway ordering website starts at £250 one-time fixed with £0 monthly agency retainer, 100% source code ownership, and a free live homepage concept preview before you pay a deposit.
              </p>
            </div>
          </div>
        </section>

        {/* Conversion CTA */}
        <section className="rounded-3xl bg-gradient-to-br from-[#161b0d] via-[#121212] to-[#0D0D0D] border border-[#BAFF00]/35 p-8 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BAFF00]">
            Free Interactive Preview First • £250 Fixed One-Time Build
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Preview Your Custom 0% Commission Takeaway Website Before You Pay
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            Send us your current takeaway menu or Just Eat link. We will build a free interactive concept preview in the browser so you can test the speed and mobile ordering flow before paying a single penny.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/services/takeaway-web-design"
              className="px-6 py-3.5 rounded-full bg-[#BAFF00] text-[#0D0D0D] font-bold text-sm hover:bg-[#c8ff33] transition-colors inline-flex items-center gap-2"
            >
              <span>Inspect £250 Takeaway Ordering Spec</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools/commission-savings-calculator"
              className="px-6 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/15 transition-colors"
            >
              Calculate Your Annual Commission Savings
            </Link>
          </div>
        </section>

        <BlogSiloNav
          currentSlug="zero-commission-takeaway-online-ordering-system-uk-guide"
          category="compliance"
        />
      </main>

      <SiteFooter />
    </div>
  );
}
