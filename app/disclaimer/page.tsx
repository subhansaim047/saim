import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: "Food Safety Disclaimer | Saim Dev",
  description: "Regulatory and guidance notice for kitchen templates, checklists, and calculators. General reference only and not official advice from the FSA.",
  alternates: {
    canonical: "https://www.saimdev.site/disclaimer",
  },
  openGraph: {
    title: "Food Safety Disclaimer | Saim Dev",
    description: "Regulatory and guidance notice for kitchen templates, checklists, and calculators. General reference only and not official advice from the FSA.",
    url: "https://www.saimdev.site/disclaimer",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Safety Disclaimer | Saim Dev",
    description: "Regulatory and guidance notice for kitchen templates, checklists, and calculators. General reference only and not official advice from the FSA."
  }
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1D1D1F] font-sans">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-[#1D1D1F] text-base tracking-tight">Saim Dev</span>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-8">
        <div className="space-y-3">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-black">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F]">
            Food Safety &amp; Legal Disclaimer
          </h1>
          <p className="text-xs text-gray-500">Last updated: October 2026</p>
        </div>

        {/* Primary Callout Box */}
        <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 text-amber-950 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Important Food Safety &amp; Regulatory Notice</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            These templates, checklists, posters, and calculators are food-safety management tools designed to help food business operators organise kitchen records and document internal hygiene procedures. They do not constitute legal advice and using them does not guarantee compliance with UK food law or a five-star food hygiene rating. Businesses remain solely responsible for their own food safety practices.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">1. General Guidance Only</h2>
            <p>
              All materials provided on this website—including HACCP plan templates, allergen charts, temperature log sheets, and cleaning rotas—are offered as general visual and operational references. They are provided on an &ldquo;as is&rdquo; basis without warranties of completeness, currentness, or fitness for a particular commercial purpose.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">2. Business Operator Responsibility</h2>
            <p>
              Under UK food safety legislation (including the Food Safety Act 1990, the Food Hygiene Regulations 2006, and the Food Information Regulations 2014), each individual food business operator (FBO) is legally required to identify, evaluate, and control food safety hazards specific to their unique premises, equipment, menus, and operating conditions.
            </p>
            <p>
              You must ensure that your recipes, allergen declarations, critical control points, and temperature limits reflect your actual ingredients, supplier specifications, and cooking methods.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">3. No Agency Approval or Endorsement</h2>
            <p>
              None of the templates or tools on this website have been reviewed, certified, audited, or endorsed by the Food Standards Agency (FSA), Food Standards Scotland (FSS), any local authority environmental health department, or third-party auditing body.
            </p>
            <p>
              For statutory regulations and official food safety management systems, always consult official government publications directly from the{" "}
              <a
                href="https://www.food.gov.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold text-black"
              >
                Food Standards Agency (food.gov.uk)
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">4. Limitation of Liability</h2>
            <p>
              Saim Dev, its developers, and contributors shall not be liable for any direct, indirect, incidental, or consequential damages, inspection failures, enforcement actions, allergy incidents, or business disruptions arising from the use of or reliance on any template, calculator, or content made available on this website.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
