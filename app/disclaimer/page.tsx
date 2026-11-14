import { SiteFooter } from "@/components/SiteFooter";
import { RhHeader } from "@/components/rh/RhHeader";
import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: "Food Safety Disclaimer | Saim Dev",
  description: "Regulatory and guidance notice for kitchen templates, checklists, and calculators. General reference only and not official advice from the FSA.",
  alternates: {
    canonical: "https://www.saimdev.site/disclaimer",
    languages: {
      "en-GB": "https://www.saimdev.site/disclaimer",
    },
  },
  openGraph: {
    title: "Food Safety Disclaimer | Saim Dev",
    description: "Regulatory and guidance notice for kitchen templates, checklists, and calculators. General reference only and not official advice from the FSA.",
    url: "https://www.saimdev.site/disclaimer",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Food Safety Disclaimer - Saim Dev",
        type: "image/png",
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Safety Disclaimer | Saim Dev",
    description: "Regulatory and guidance notice for kitchen templates, checklists, and calculators. General reference only and not official advice from the FSA.",
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"]
  }
};

export default function DisclaimerPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Food Safety Disclaimer",
        "item": "https://www.saimdev.site/disclaimer"
      }
    ]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
        <RhHeader theme="dark" />

        {/* rh.design/privacy Dark Hero */}
        <section className="bg-[#0D0D0D] text-white pt-16 pb-16 sm:pt-20 sm:pb-20 px-4 sm:px-8 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#BAFF00] bg-white/[0.05] px-3.5 py-1.5 rounded-full border border-white/10 mb-6">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Regulatory &amp; Guidance Notice</span>
            </div>
            <p className="text-white/50 text-xs sm:text-sm font-mono uppercase tracking-wider mb-3">
              Last updated: October 2026
            </p>
            <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-white leading-[1.06]">
              Food Safety &amp; Legal Disclaimer
            </h1>
          </div>
        </section>

        {/* rh.design/privacy Light Structured Legal Content */}
        <main className="bg-[#F5F5F7] text-[#0D0D0D] py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Primary Callout Box */}
            <div className="p-6 sm:p-8 rounded-[24px] bg-[#0D0D0D] text-white border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5 text-[#BAFF00] font-semibold text-base">
                <AlertTriangle className="w-5 h-5 text-[#BAFF00] shrink-0" />
                <span>Important Food Safety &amp; Regulatory Notice</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                These templates, checklists, posters, and calculators are food-safety management tools designed to help food business operators organise kitchen records and document internal hygiene procedures. They do not constitute legal advice and using them does not guarantee compliance with UK food law or a five-star food hygiene rating. Businesses remain solely responsible for their own food safety practices.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-6 sm:p-12 border border-black/[0.08] space-y-8 text-sm sm:text-base text-[#0D0D0D]/80 leading-relaxed shadow-xs">
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#0D0D0D]">1. General Guidance Only</h2>
                <p>
                  All materials provided on this website—including HACCP plan templates, allergen charts, temperature log sheets, and cleaning rotas—are offered as general visual and operational references. They are provided on an &ldquo;as is&rdquo; basis without warranties of completeness, currentness, or fitness for a particular commercial purpose.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#0D0D0D]">2. Business Operator Responsibility</h2>
                <p>
                  Under UK food safety legislation (including the Food Safety Act 1990, the Food Hygiene Regulations 2006, and the Food Information Regulations 2014), each individual food business operator (FBO) is legally required to identify, evaluate, and control food safety hazards specific to their unique premises, equipment, menus, and operating conditions.
                </p>
                <p>
                  You must ensure that your recipes, allergen declarations, critical control points, and temperature limits reflect your actual ingredients, supplier specifications, and cooking methods.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#0D0D0D]">3. No Agency Approval or Endorsement</h2>
                <p>
                  None of the templates or tools on this website have been reviewed, certified, audited, or endorsed by the Food Standards Agency (FSA), Food Standards Scotland (FSS), any local authority environmental health department, or third-party auditing body.
                </p>
                <p>
                  For statutory regulations and official food safety management systems, always consult official government publications directly from the{" "}
                  <a
                    href="https://www.food.gov.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold text-[#0D0D0D]"
                  >
                    Food Standards Agency (food.gov.uk)
                  </a>.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#0D0D0D]">4. Limitation of Liability</h2>
                <p>
                  Saim Dev, its developers, and contributors shall not be liable for any direct, indirect, incidental, or consequential damages, inspection failures, enforcement actions, allergy incidents, or business disruptions arising from the use of or reliance on any template, calculator, or content made available on this website.
                </p>
              </section>
            </div>
          </div>
        </main>

        <SiteFooter theme="dark" />
      </div>
    </>
  );
}
