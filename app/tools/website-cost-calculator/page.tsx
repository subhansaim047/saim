import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle2,
  HelpCircle,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { RhHeader } from "@/components/rh/RhHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WebsiteCostCalculatorTool } from "@/components/tools/WebsiteCostCalculatorTool";

export const metadata: Metadata = {
  title: "Website Cost Calculator UK & Europe | Instant Quote | Saim Dev",
  description:
    "Interactive website cost calculator for UK, European & US businesses. Estimate custom Next.js web design, headless Shopify & web app pricing in GBP, EUR & USD.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/tools/website-cost-calculator",
    languages: {
      "en-GB": "https://www.saimdev.site/tools/website-cost-calculator",
      "en-US": "https://www.saimdev.site/tools/website-cost-calculator",
      "x-default": "https://www.saimdev.site/tools/website-cost-calculator",
    },
  },
  openGraph: {
    type: "website",
    title: "Website Cost Calculator UK & Europe | Instant Quote | Saim Dev",
    description:
      "Interactive website cost calculator for UK, European & US businesses. Estimate custom Next.js web design, headless Shopify & web app pricing in GBP, EUR & USD.",
    url: "https://www.saimdev.site/tools/website-cost-calculator",
    siteName: "Saim Dev",
    locale: "en_GB",
    images: [
      {
        url: "https://www.saimdev.site/og-tools.png",
        width: 1200,
        height: 630,
        alt: "Website Cost Calculator UK & Europe — Interactive Next.js Price Estimator",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@saimwebdev",
    title: "Website Cost Calculator UK & Europe | Instant Quote | Saim Dev",
    description:
      "Interactive website cost calculator for UK, European & US businesses. Estimate custom Next.js web design, headless Shopify & web app pricing in GBP, EUR & USD.",
    images: ["https://www.saimdev.site/og-tools.png"],
  },
};

export default function WebsiteCostCalculatorPage() {
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
        name: "Free Business & Kitchen Tools Hub",
        item: "https://www.saimdev.site/tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Website Cost Calculator UK & Europe",
        item: "https://www.saimdev.site/tools/website-cost-calculator",
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Website Cost Calculator UK, Europe & US",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (Web Browser)",
    url: "https://www.saimdev.site/tools/website-cost-calculator",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "GBP",
    },
    description:
      "Interactive website cost calculator and 24-month total cost of ownership (TCO) estimator for UK, European, and US businesses comparing custom Next.js development against traditional agency retainers and WordPress/Shopify leases.",
    creator: {
      "@type": "Organization",
      name: "Saim Dev",
      url: "https://www.saimdev.site",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a custom business website cost in the UK in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In the UK, a high-converting single landing page or direct takeaway website costs £250 fixed with Saim Dev (compared to £1,500–£2,500 at traditional agencies). A 3–5 page starter business website costs £390 fixed, a 10–15 page business flagship costs £790 fixed, and custom headless Shopify or full-stack web apps start at £1,490 fixed.",
        },
      },
      {
        "@type": "Question",
        name: "Why is a custom Next.js website cheaper over 24 months than WordPress or Wix?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WordPress, Wix, and app-heavy Shopify builds carry recurring monthly plugin licences, security maintenance retainers, and managed hosting fees averaging £80 to £350 per month (£1,920 to £8,400 over 24 months). A custom Next.js 16 build is a one-time fixed investment deployed on global edge infrastructure with £0 mandatory monthly agency retainers and 100% GitHub code ownership.",
        },
      },
      {
        "@type": "Question",
        name: "Do I pay upfront after using the website cost calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. After configuring your scope in the website cost calculator, you send us your brief and we engineer a free interactive homepage concept preview in the browser first. You only pay the 50% milestone deposit if you approve the live direction, with the remaining 50% paid upon final deployment.",
        },
      },
      {
        "@type": "Question",
        name: "Can I estimate website development costs in EUR (€) or USD ($)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Use the GBP (£), EUR (€), and USD ($) currency toggle at the top of the calculator to view instant fixed-milestone pricing for UK, European Union, and United States projects.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <RhHeader />

      <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        {/* Breadcrumb & Hero */}
        <section className="space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/50">
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-[#BAFF00] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Free Tools Hub</span>
            </Link>
            <span>/</span>
            <span>Website Cost Calculator UK, Europe &amp; US</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BAFF00]/10 border border-[#BAFF00]/30 text-[#BAFF00] text-xs font-mono uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant GBP (£) • EUR (€) • USD ($) Scope &amp; TCO Estimator</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Website Cost Calculator UK &amp; Europe:{" "}
            <span className="text-[#BAFF00]">Instant Fixed-Price Estimator</span>
          </h1>

          <p className="text-base sm:text-lg text-white/75 leading-relaxed">
            Use our interactive <strong>website cost calculator UK</strong> to estimate exact one-time development costs for custom{" "}
            <Link href="/services/website-development" className="text-[#BAFF00] hover:underline">
              Next.js 16 business websites
            </Link>
            ,{" "}
            <Link href="/services/landing-pages-cro" className="text-[#BAFF00] hover:underline">
              high-converting PPC landing pages
            </Link>
            ,{" "}
            <Link href="/services/ecommerce-shopify" className="text-[#BAFF00] hover:underline">
              headless Shopify storefronts
            </Link>
            , and{" "}
            <Link href="/services/custom-web-apps" className="text-[#BAFF00] hover:underline">
              full-stack web applications
            </Link>
            . Compare our transparent fixed-fee milestones against 24-month traditional agency retainers and recurring CMS plugin taxes.
          </p>
        </section>

        {/* Interactive Calculator Component */}
        <section aria-label="Interactive Website Cost Calculator">
          <WebsiteCostCalculatorTool />
        </section>

        {/* Benchmark Table: Web Design Price Calculator Breakdown */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAFF00]">
              2026 UK, Europe &amp; US Market Benchmarks
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Web Design Price Calculator Breakdown by Project Tier
            </h2>
            <p className="text-sm text-white/65 leading-relaxed">
              Most agency quote forms hide their pricing behind discovery calls so they can anchor fees to your revenue. Below is the exact engineering cost matrix used inside our custom website cost estimator.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#141414]">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono uppercase text-white/60 bg-white/[0.02]">
                  <th className="py-4 px-5">Website Architecture Tier</th>
                  <th className="py-4 px-5">Saim Dev Fixed Fee</th>
                  <th className="py-4 px-5">Typical UK/EU Agency</th>
                  <th className="py-4 px-5">24-Month App/CMS Rent</th>
                  <th className="py-4 px-5">Delivery Sprint</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/80">
                <tr>
                  <td className="py-4 px-5 font-semibold text-white">
                    <Link href="/services/landing-pages-cro" className="hover:text-[#BAFF00] underline">
                      Conversion Landing Page / Direct Takeaway
                    </Link>
                  </td>
                  <td className="py-4 px-5 font-mono font-bold text-[#BAFF00]">£250 / €290 / $300</td>
                  <td className="py-4 px-5 font-mono text-white/60">£1,800 – £3,000</td>
                  <td className="py-4 px-5 font-mono text-white/60">£1,800+ (ClickFunnels/Apps)</td>
                  <td className="py-4 px-5 font-mono">3–5 days</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold text-white">
                    <Link href="/services/business-websites" className="hover:text-[#BAFF00] underline">
                      Starter Small Business Website (3–5 Pages)
                    </Link>
                  </td>
                  <td className="py-4 px-5 font-mono font-bold text-[#BAFF00]">£390 / €460 / $500</td>
                  <td className="py-4 px-5 font-mono text-white/60">£3,000 – £5,000</td>
                  <td className="py-4 px-5 font-mono text-white/60">£2,400+ (WP Hosting/Plugins)</td>
                  <td className="py-4 px-5 font-mono">5–7 days</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold text-white">
                    <Link href="/services/website-development" className="hover:text-[#BAFF00] underline">
                      Business Flagship &amp; SEO Silo (8–15 Pages)
                    </Link>
                  </td>
                  <td className="py-4 px-5 font-mono font-bold text-[#BAFF00]">£790 / €920 / $999</td>
                  <td className="py-4 px-5 font-mono text-white/60">£6,000 – £10,000</td>
                  <td className="py-4 px-5 font-mono text-white/60">£4,200+ (Retainers &amp; Licences)</td>
                  <td className="py-4 px-5 font-mono">7–14 days</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold text-white">
                    <Link href="/services/ecommerce-shopify" className="hover:text-[#BAFF00] underline">
                      Headless Shopify / Custom Stripe E-Commerce
                    </Link>
                  </td>
                  <td className="py-4 px-5 font-mono font-bold text-[#BAFF00]">£1,490 / €1,750 / $1,850</td>
                  <td className="py-4 px-5 font-mono text-white/60">£10,000 – £18,000</td>
                  <td className="py-4 px-5 font-mono text-white/60">£6,500+ (Paid Shopify Apps)</td>
                  <td className="py-4 px-5 font-mono">14–21 days</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 font-semibold text-white">
                    <Link href="/services/custom-web-apps" className="hover:text-[#BAFF00] underline">
                      Custom Web App, Portal &amp; SaaS MVP
                    </Link>
                  </td>
                  <td className="py-4 px-5 font-mono font-bold text-[#BAFF00]">£1,490 / €1,750 / $1,850</td>
                  <td className="py-4 px-5 font-mono text-white/60">£12,000 – £25,000</td>
                  <td className="py-4 px-5 font-mono text-white/60">£8,000+ (Per-Seat / Bubble Caps)</td>
                  <td className="py-4 px-5 font-mono">14–28 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Deep Editorial Sections Targeting Secondary Keywords */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-[#141414] border border-white/10 p-7 space-y-4">
            <h2 className="text-xl font-bold text-white">
              How Our Next.js Website Cost Calculator Computes 24-Month TCO
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              When comparing quotes in a <strong>custom website cost estimator UK</strong>, upfront build price is only half the equation. Legacy WordPress and drag-and-drop builder sites charge recurring monthly fees for security patching, premium form plugins, caching add-ons, and SEO extensions.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Because Saim Dev engineers your site in clean{" "}
              <Link href="/technologies" className="text-[#BAFF00] hover:underline">
                Next.js 16 App Router, React 19, and TypeScript
              </Link>
              , your technical SEO schemas, interactive calculators, and conversion flows are compiled directly into the codebase — eliminating monthly plugin subscriptions and giving you 100% GitHub repository ownership.
            </p>
          </div>

          <div className="rounded-3xl bg-[#141414] border border-white/10 p-7 space-y-4">
            <h2 className="text-xl font-bold text-white">
               E-Commerce Website Cost Calculator UK: Headless vs Plugin Stores
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Retail brands using an <strong>ecommerce website cost calculator UK</strong> often overlook third-party Shopify app bloat (bundle apps, review widgets, currency switchers, and upsell popups) that adds £150–£350/month to their store bill while degrading mobile Core Web Vitals.
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              Our fixed-price{" "}
              <Link href="/services/ecommerce-development" className="text-[#BAFF00] hover:underline">
                custom Next.js e-commerce storefronts
              </Link>{" "}
              and{" "}
              <Link href="/services/ecommerce-shopify" className="text-[#BAFF00] hover:underline">
                headless Shopify builds
              </Link>{" "}
              replace paid monthly app scripts with native React components, sub-second collection filtering, and direct Stripe/Apple Pay checkout.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAFF00]">
              Website Cost &amp; Scope FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions About UK &amp; European Website Costs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqSchema.mainEntity.map((faq) => (
              <div
                key={faq.name}
                className="rounded-2xl bg-[#141414] border border-white/10 p-6 space-y-2.5"
              >
                <h3 className="text-base font-bold text-white flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-[#BAFF00] shrink-0 mt-1" />
                  <span>{faq.name}</span>
                </h3>
                <p className="text-xs text-white/65 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Connected Silo Links */}
        <section className="rounded-3xl bg-white/[0.03] border border-white/10 p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#BAFF00]">
                Topic Hub Silo Navigation
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                Explore Connected Pricing Guides, Calculators &amp; Service Pillars
              </h2>
            </div>
            <Link
              href="/pricing"
              className="text-xs font-mono text-[#BAFF00] hover:underline inline-flex items-center gap-1.5"
            >
              <span>View Full Fixed-Price Packages Table</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <Link
              href="/blog/nextjs-website-development-cost-uk-us"
              className="p-4 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#BAFF00]/50 transition-all space-y-1"
            >
              <span className="font-mono text-[10px] text-[#BAFF00] uppercase">Cost Guide</span>
              <div className="font-bold text-white">Next.js Website Development Cost UK &amp; US (2026)</div>
            </Link>
            <Link
              href="/blog/small-business-website-packages-guide"
              className="p-4 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#BAFF00]/50 transition-all space-y-1"
            >
              <span className="font-mono text-[10px] text-[#BAFF00] uppercase">Buyer Playbook</span>
              <div className="font-bold text-white">Small Business Website Packages Guide UK</div>
            </Link>
            <Link
              href="/tools/commission-savings-calculator"
              className="p-4 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#BAFF00]/50 transition-all space-y-1"
            >
              <span className="font-mono text-[10px] text-[#BAFF00] uppercase">Takeaway ROI Tool</span>
              <div className="font-bold text-white">Takeaway Commission Savings Calculator</div>
            </Link>
            <Link
              href="/nextjs-developer-uk"
              className="p-4 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#BAFF00]/50 transition-all space-y-1"
            >
              <span className="font-mono text-[10px] text-[#BAFF00] uppercase">Direct Engineering</span>
              <div className="font-bold text-white">Hire a Freelance Next.js Developer UK</div>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
