import { SiteFooter } from "@/components/SiteFooter";
import { RhHeader } from "@/components/rh/RhHeader";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
  title: "Cookie Policy | Saim Dev",
  description: "Comprehensive cookie and browser storage inventory for Saim Dev. Learn how our essential technical storage and interactive kitchen tools save data locally.",
  alternates: {
    canonical: "https://www.saimdev.site/cookie-policy",
    languages: {
      "en-GB": "https://www.saimdev.site/cookie-policy",
    },
  },
  openGraph: {
    title: "Cookie Policy | Saim Dev",
    description: "Comprehensive cookie and browser storage inventory for Saim Dev. Learn how our essential technical storage and interactive kitchen tools save data locally.",
    url: "https://www.saimdev.site/cookie-policy",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cookie Policy - Saim Dev",
        type: "image/png",
      },
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Saim Dev",
    description: "Comprehensive cookie and browser storage inventory for Saim Dev. Learn how our essential technical storage and interactive kitchen tools store data locally.",
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"]
  }
};

export default function CookiePolicyPage() {
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
        "name": "Cookie Policy",
        "item": "https://www.saimdev.site/cookie-policy"
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>UK GDPR &amp; PECR Storage Inventory</span>
            </div>
            <p className="text-white/50 text-xs sm:text-sm font-mono uppercase tracking-wider mb-3">
              Last updated: 24 October 2026
            </p>
            <h1 className="text-4xl sm:text-6xl font-medium tracking-[-0.03em] text-white leading-[1.06]">
              Cookie &amp; Local Storage Policy
            </h1>
          </div>
        </section>

        {/* rh.design/privacy Light Structured Legal Content */}
        <main className="bg-[#F5F5F7] text-[#0D0D0D] py-16 sm:py-24 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-[24px] p-6 sm:p-12 border border-black/[0.08] space-y-8 text-sm sm:text-base text-[#0D0D0D]/80 leading-relaxed shadow-xs">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#0D0D0D]">1. Overview &amp; Privacy-First Architecture</h2>
              <p>
                Saim Dev adheres to data minimisation principles under UK GDPR and the Privacy and Electronic Communications Regulations (PECR). We do not deploy third-party advertising cookies, cross-site trackers, or invasive analytics pixels.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#0D0D0D]">2. Complete Browser Storage Inventory</h2>
              <p>
                The table below outlines every cookie and local storage item utilised across our website and client-side web applications:
              </p>

              <div className="overflow-x-auto mt-4 border border-black/10 rounded-2xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#F5F5F7] border-b border-black/10 text-[#0D0D0D] font-semibold">
                      <th className="p-3.5">Key / Cookie Name</th>
                      <th className="p-3.5">Type</th>
                      <th className="p-3.5">Provider</th>
                      <th className="p-3.5">Category</th>
                      <th className="p-3.5">Duration</th>
                      <th className="p-3.5">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black/[0.06] text-[#0D0D0D]/75">
                    <tr>
                      <td className="p-3.5 font-mono text-[#0D0D0D] font-medium">saim_cookie_consent</td>
                      <td className="p-3.5">localStorage</td>
                      <td className="p-3.5">Saim Dev</td>
                      <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">Strictly Necessary</span></td>
                      <td className="p-3.5">Persistent</td>
                      <td className="p-3.5">Remembers your cookie banner preference so the notice is not repeatedly shown.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono text-[#0D0D0D] font-medium">saim_allergen_matrix_v1</td>
                      <td className="p-3.5">localStorage</td>
                      <td className="p-3.5">Saim Dev</td>
                      <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">Functional Tool</span></td>
                      <td className="p-3.5">Persistent</td>
                      <td className="p-3.5">Saves dish and ingredient edits locally in your browser for the Allergen Matrix Generator.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono text-[#0D0D0D] font-medium">saim_food_cost_v1</td>
                      <td className="p-3.5">localStorage</td>
                      <td className="p-3.5">Saim Dev</td>
                      <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">Functional Tool</span></td>
                      <td className="p-3.5">Persistent</td>
                      <td className="p-3.5">Saves recipe pricing and target margin calculations on your device.</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-mono text-[#0D0D0D] font-medium">saim_recipe_calc_v1</td>
                      <td className="p-3.5">localStorage</td>
                      <td className="p-3.5">Saim Dev</td>
                      <td className="p-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">Functional Tool</span></td>
                      <td className="p-3.5">Persistent</td>
                      <td className="p-3.5">Saves scaled batch yields and commercial catering measurements locally.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#0D0D0D]">3. Third-Party External Services</h2>
              <p>
                When you interact with external services (such as contacting Saim Dev via WhatsApp or visiting our Instagram profile), those third-party platforms apply their own cookies and privacy policies. No data is shared with those platforms until you explicitly click their respective links.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#0D0D0D]">4. Managing Browser Storage</h2>
              <p>
                You can clear your local storage and cookies at any time through your browser settings:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#0D0D0D]/75">
                <li><strong className="text-[#0D0D0D]">Chrome / Edge:</strong> Settings → Privacy and Security → Site settings → Clear data.</li>
                <li><strong className="text-[#0D0D0D]">Safari:</strong> Preferences → Privacy → Manage Website Data.</li>
                <li><strong className="text-[#0D0D0D]">Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-medium tracking-[-0.02em] text-[#0D0D0D]">5. Contact Information</h2>
              <p>
                For questions regarding our technical storage policies, please message us on WhatsApp at +92 319 6526604 or visit our{" "}
                <Link href="/contact" className="underline font-semibold text-[#0D0D0D]">
                  Contact Page
                </Link>.
              </p>
            </section>
          </div>
        </main>

        <SiteFooter theme="dark" />
      </div>
    </>
  );
}
