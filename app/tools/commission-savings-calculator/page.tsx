import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Plus, ShieldCheck, Zap } from "lucide-react";
import { CommissionSavingsCalculator } from "@/components/CommissionSavingsCalculator";
import { RhHeader } from "@/components/rh/RhHeader";
import { RhHeroPinned } from "@/components/rh/RhModernSections";
import { SiteFooter } from "@/components/SiteFooter";
import {
  EngineeringVerificationBadge,
  TopicSiloNavigator,
} from "@/components/ui/EditorialVisualPack";

export const metadata: Metadata = {
  title: "Takeaway Commission Calculator UK | 0% Fees | Saim Dev",
  description:
    "Calculate annual savings by moving repeat orders off Just Eat & Deliveroo onto your own £250 0% commission Next.js ordering website.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/tools/commission-savings-calculator",
    languages: {
      en: "https://www.saimdev.site/tools/commission-savings-calculator",
      "en-GB": "https://www.saimdev.site/tools/commission-savings-calculator",
      "en-US": "https://www.saimdev.site/tools/commission-savings-calculator",
      "x-default": "https://www.saimdev.site/tools/commission-savings-calculator",
    },
  },
  openGraph: {
    title: "Takeaway Commission Calculator UK | 0% Fees | Saim Dev",
    description:
      "Calculate annual savings by moving repeat orders off Just Eat & Deliveroo onto your own £250 0% commission Next.js ordering website.",
    url: "https://www.saimdev.site/tools/commission-savings-calculator",
    siteName: "Saim Dev",
    locale: "en_GB",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-services.png",
        width: 1200,
        height: 630,
        alt: "Takeaway Commission Savings Calculator - Saim Dev",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Takeaway Commission Calculator UK | 0% Fees | Saim Dev",
    description:
      "Calculate annual savings by moving repeat orders off Just Eat & Deliveroo onto your own £250 0% commission Next.js ordering website.",
    images: ["https://www.saimdev.site/og-services.png"],
  },
};

const CALCULATOR_FAQS = [
  {
    q: "How much commission do third-party delivery apps typically charge takeaways?",
    a: "In the UK and US, marketplace delivery platforms routinely deduct between 14% for customer collection/own-driver tiers up to 28%–35% plus VAT and service fees on marketplace-fulfilled orders. On a £30 average basket, a 30% cut immediately removes £9 before ingredients, rent, or kitchen wages.",
  },
  {
    q: "How does shifting 50% of repeat customers onto a direct site affect payback?",
    a: "If a local fish and chip shop or curry house processes 120 weekly orders at £26 average spend with 30% marketplace commission, moving half of returning customers via printed bag-flyer QR codes retains over £450 per week—repaying a £250 fixed-price direct ordering website in under 4 days.",
  },
  {
    q: "What makes a bespoke Next.js ordering site different from £89/month SaaS platforms?",
    a: "Monthly SaaS ordering apps rent you access to a shared template and often add per-order tech surcharges indefinitely (£1,068+ per year forever). Saim Dev builds your custom Next.js website for a one-off fixed fee (£250–£790 UK / $300–$999 US) with 0% commission and full repository ownership.",
  },
  {
    q: "Can repeat customers pay by card, Apple Pay, or dispatch directly to WhatsApp?",
    a: "Yes. Orders can route directly via Stripe Checkout, Apple Pay/Google Pay (paying only standard processor card fees of ~1.4% + 20p in the UK), cash on collection, or formatted WhatsApp kitchen dockets with postcode delivery radius verification.",
  },
];

const MODEL_COMPARISON = [
  {
    channel: "Third-Party Delivery Apps (Just Eat / Deliveroo / DoorDash)",
    upfront: "£0–£150 onboarding",
    commission: "28% – 35% per order + VAT",
    yearlyDrainExample: "£30,420+ lost / yr on £1,950/wk shifted orders",
    ownership: "Platform owns customer data & retargets rivals",
  },
  {
    channel: "Rental Ordering SaaS (Monthly Portal Leases)",
    upfront: "£99 – £299 setup",
    commission: "£69–£149/mo + per-order fees",
    yearlyDrainExample: "£950 – £1,950+ fixed rent every year",
    ownership: "Account suspended if monthly plan stops",
  },
  {
    channel: "Saim Dev Bespoke Next.js Direct Ordering Website",
    upfront: "£250 / $300 one-off fixed",
    commission: "0% Commission · Standard Stripe ~1.5%",
    yearlyDrainExample: "£0 platform rent · Pays back in days",
    ownership: "100% customer list, domain & source code owned",
  },
];

export default function CommissionSavingsCalculatorPage() {
  const canonicalUrl = "https://www.saimdev.site/tools/commission-savings-calculator";

  const calculatorGraphSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: "Takeaway Commission Calculator UK | 0% Fees | Saim Dev",
        description:
          "Interactive ROI calculator comparing third-party delivery app commissions against a 0% commission Next.js direct takeaway ordering website.",
        inLanguage: "en-GB",
        isPartOf: { "@id": "https://www.saimdev.site/#website" },
        about: { "@id": "https://www.saimdev.site/#organization" },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        mainEntity: { "@id": `${canonicalUrl}#webapp` },
      },
      {
        "@type": "WebApplication",
        "@id": `${canonicalUrl}#webapp`,
        name: "Takeaway Commission Savings Calculator",
        url: canonicalUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        description:
          "Interactive ROI calculator comparing third-party delivery app commissions against a 0% commission Next.js direct takeaway ordering website.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "GBP",
        },
        provider: {
          "@id": "https://www.saimdev.site/#organization",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
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
            name: "Takeaway Web Design",
            item: "https://www.saimdev.site/services/takeaway-web-design",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Commission Savings Calculator",
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        isPartOf: { "@id": `${canonicalUrl}#webpage` },
        mainEntity: CALCULATOR_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="rh-page min-h-screen flex flex-col bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D] overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorGraphSchema) }}
      />

      <RhHeader theme="dark" />

      <main className="flex-grow">
        <RhHeroPinned
          badge="0% Commission ROI Simulator · UK & US Kitchens"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Takeaway Web Design", href: "/services/takeaway-web-design" },
            { label: "Commission Calculator" },
          ]}
          title={
            <>
              Takeaway Commission Calculator —{" "}
              <span className="text-[#939393]">Keep 100% of Sales</span>
            </>
          }
          subtitle="Model your exact weekly, monthly, and annual cash retained by redirecting repeat Just Eat, Deliveroo, Uber Eats, or DoorDash regulars onto your own fast Next.js ordering site."
          primaryCta={{ label: "Run Live Calculator", href: "#commission-calculator" }}
          secondaryCta={{ label: "See £250 Direct Build", href: "/services/takeaway-web-design" }}
          videoType="cube"
          stripLabel="Hospitality Margin Recovery · Built in Next.js 16"
          stripItems={[
            {
              label: "Direct Website Cost",
              tag: "One-Off Fee",
              tagValue: "£250 / $300",
              summary: "Bespoke mobile menu, basket drawer, postcode zones & 0% agency commission.",
              href: "/pricing",
            },
            {
              label: "Payback Speed",
              tag: "Typical ROI",
              tagValue: "3–14 Days",
              summary: "Converting just 15–25 returning family orders recovers full build cost.",
              href: "#commission-calculator",
            },
            {
              label: "Live Takeaway Demo",
              tag: "Try Mobile UX",
              tagValue: "HotBite",
              summary: "Inspect meal deal builders, add-on upsells & instant basket checkout.",
              href: "/hotbite/index.html",
            },
            {
              label: "Allergen Filtering",
              tag: "UK Legal Ready",
              tagValue: "14 Allergens",
              summary: "Display clear statutory allergen warnings cleanly on every dish.",
              href: "/services/takeaway-web-design",
            },
            {
              label: "Source Code",
              tag: "Zero Lock-In",
              tagValue: "100% Owned",
              summary: "Own your domain, customer phone book, and GitHub codebase outright.",
              href: "/overview",
            },
          ]}
        />

        {/* Band 1: Dark #000000 Interactive Calculator */}
        <section className="relative z-10 bg-black text-white py-16 md:py-24 border-b border-[#1D1D1D]">
          <div className="max-w-[1168px] mx-auto px-5 space-y-8">
            <div data-gsap-reveal="">
              <CommissionSavingsCalculator />
            </div>

            <div
              data-gsap-stagger=""
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
            >
              {[
                {
                  icon: Zap,
                  title: "Sub-Second Friday Rush UX",
                  desc: "Next.js menus load almost instantly on patchy mobile 4G instead of sluggish WordPress PDF embeds.",
                },
                {
                  icon: ShieldCheck,
                  title: "Bag-Flyer QR Customer Loop",
                  desc: "Slip a clean QR flyer offering 10% off first direct orders inside marketplace bags to convert regulars permanently.",
                },
                {
                  icon: CheckCircle2,
                  title: "Zero Monthly Agency Lock-In",
                  desc: "Pay £250 UK / $300 US once with 50/50 milestone protection—keep 100% margin across year-round growth.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-[#222222] bg-[#0D0D0D] p-6 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#BAFF00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-base font-semibold text-white">{card.title}</h2>
                    <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Band 2: Editorial Light #F5F5F7 Comparison Breakdown */}
        <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 md:py-28">
          <div className="max-w-[1168px] mx-auto px-5 space-y-12">
            <div data-gsap-reveal="" className="max-w-3xl space-y-3">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#666666] font-semibold">
                TOTAL COST OF OWNERSHIP COMPARISON
              </div>
              <h2 className="font-display-rh text-3xl sm:text-5xl font-semibold tracking-tight text-[#0D0D0D]">
                Marketplace Apps vs SaaS Leases vs Owned Next.js Ordering
              </h2>
              <p className="text-sm sm:text-base text-[#555555] font-light leading-relaxed">
                Marketplace discovery brings new local diners, while repeating regulars ordering via third-party portals unnecessarily drains profit every Friday night.
              </p>
            </div>

            <div
              data-gsap-reveal=""
              className="rounded-3xl border border-[#E6E6E6] bg-white overflow-hidden shadow-sm"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[680px]">
                  <thead>
                    <tr className="border-b border-[#EBEBEB] text-[11px] font-mono-tech uppercase tracking-[0.12em] text-[#666666] bg-[#FAFAFC]">
                      <th className="py-4 px-6">Ordering Channel</th>
                      <th className="py-4 px-6">Upfront Setup</th>
                      <th className="py-4 px-6">Ongoing Cut / Rent</th>
                      <th className="py-4 px-6">Asset Ownership</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBEBEB] text-xs sm:text-sm">
                    {MODEL_COMPARISON.map((row, idx) => (
                      <tr
                        key={row.channel}
                        className={idx === 2 ? "bg-[#0D0D0D] text-white" : "text-[#0D0D0D]"}
                      >
                        <td className="py-5 px-6 font-semibold">{row.channel}</td>
                        <td className="py-5 px-6">{row.upfront}</td>
                        <td
                          className={`py-5 px-6 font-mono-tech ${
                            idx === 2 ? "text-[#BAFF00] font-semibold" : "text-[#555555]"
                          }`}
                        >
                          {row.commission}
                        </td>
                        <td
                          className={`py-5 px-6 font-light ${
                            idx === 2 ? "text-[#CBCBCB]" : "text-[#555555]"
                          }`}
                        >
                          {row.ownership}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Regional City Hubs Bridge */}
            <div
              data-gsap-stagger=""
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {[
                {
                  href: "/services/takeaway-web-design",
                  city: "National UK & US Direct Ordering",
                  detail: "Full breakdown of our £250 / $300 commission-free package.",
                },
                {
                  href: "/services/takeaway-web-design-london",
                  city: "London Zone 1–6 Takeaways",
                  detail: "Thames postcode fencing & rapid commuter pickup UX.",
                },
                {
                  href: "/services/takeaway-web-design-birmingham",
                  city: "Birmingham & Balti Triangle",
                  detail: "Family platter combos & B1–B98 delivery tiers.",
                },
                {
                  href: "/services/takeaway-web-design-manchester",
                  city: "Manchester & Curry Mile",
                  detail: "Late-night student rush baskets & instant dispatch.",
                },
              ].map((hub) => (
                <Link
                  key={hub.href}
                  href={hub.href}
                  className="group rounded-2xl border border-[#E6E6E6] bg-white p-5 flex flex-col justify-between gap-4 hover:border-[#0D0D0D] transition-colors"
                >
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono-tech uppercase tracking-[0.12em] text-[#666666]">
                      <MapPin className="w-3.5 h-3.5 text-[#0D0D0D]" />
                      <span>Direct Build</span>
                    </div>
                    <h3 className="text-sm font-semibold text-[#0D0D0D] group-hover:underline">
                      {hub.city}
                    </h3>
                    <p className="text-xs text-[#555555] font-light leading-relaxed">
                      {hub.detail}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D0D0D]">
                    <span>Explore Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Band 3: Dark #000000 FAQs & Conversion CTA */}
        <section className="relative z-10 bg-black text-white py-20 md:py-28 border-t border-[#1D1D1D]">
          <div className="max-w-[1168px] mx-auto px-5 space-y-16">
            <div data-gsap-reveal="" className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <div className="text-[11px] font-mono-tech uppercase tracking-[0.14em] text-[#BAFF00]">
                  COMMISSION RECOVERY FAQ
                </div>
                <h2 className="font-display-rh text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Common Questions on Switching to Direct Orders
                </h2>
              </div>

              <div className="max-w-3xl mx-auto space-y-3">
                {CALCULATOR_FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl border border-[#222222] bg-[#0D0D0D] px-6 py-4 cursor-pointer transition-colors hover:border-[#3A3A3C] open:border-[#BAFF00]/50"
                  >
                    <summary className="flex items-center justify-between gap-4 list-none select-none focus:outline-none">
                      <span className="text-white text-sm sm:text-base font-semibold">
                        {faq.q}
                      </span>
                      <Plus className="w-4 h-4 text-[#BAFF00] flex-shrink-0 transition-transform duration-300 group-open:rotate-45" />
                    </summary>
                    <p className="pt-3 pb-1 text-[#A1A1AA] text-xs sm:text-sm leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div
              data-gsap-reveal=""
              className="rounded-3xl border border-[#222222] bg-[#0D0D0D] p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
            >
              <div className="space-y-3 max-w-2xl">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.16em] text-[#BAFF00] block">
                  READY TO KEEP YOUR MARGINS?
                </span>
                <h2 className="font-display-rh text-2xl sm:text-4xl font-semibold tracking-tight text-white">
                  Preview Your Direct Takeaway Menu Before Paying the Balance.
                </h2>
                <p className="text-xs sm:text-sm text-[#A1A1AA] font-light leading-relaxed">
                  Share your current takeaway menu link or flyer photo. We engineer a fast mobile ordering staging build in days with 0% commission forever.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20used%20the%20Commission%20Savings%20Calculator%20and%20want%20to%20build%20a%20direct%20ordering%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] font-bold text-xs sm:text-sm px-7 py-3.5 inline-flex items-center gap-2 hover:bg-white transition-colors"
                >
                  <span>WhatsApp Saim (+92 319 6526604)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="rh-btn-pill bg-black text-white font-medium text-xs sm:text-sm px-6 py-3.5 border border-[#333333] hover:border-[#BAFF00] transition-colors"
                >
                  Open Project Brief
                </Link>
              </div>
            </div>

            <TopicSiloNavigator
              siloId="hospitality-takeaway"
              currentPath="/tools/commission-savings-calculator"
              theme="dark"
            />
            <EngineeringVerificationBadge
              contextLabel="Verified ROI model for UK, US & European direct takeaway ordering vs 14%–35% aggregator deductions"
              theme="dark"
            />
          </div>
        </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
}
