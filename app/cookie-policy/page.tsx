import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Cookie, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: "Cookie Policy | Saim Dev",
  description: "Comprehensive cookie and browser storage inventory for Saim Dev. Learn how our essential technical storage and interactive kitchen tools save data locally.",
  alternates: {
    canonical: "https://www.saimdev.site/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Saim Dev",
    description: "Comprehensive cookie and browser storage inventory for Saim Dev. Learn how our essential technical storage and interactive kitchen tools save data locally.",
    url: "https://www.saimdev.site/cookie-policy",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Saim Dev",
    description: "Comprehensive cookie and browser storage inventory for Saim Dev. Learn how our essential technical storage and interactive kitchen tools store data locally."
  }
};

export default function CookiePolicyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F]">Cookie &amp; Local Storage Policy</h1>
          <p className="text-xs text-gray-500">Last updated: 24 October 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-6 text-sm text-gray-700 leading-relaxed shadow-sm">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">1. Overview &amp; Privacy-First Architecture</h2>
            <p>
              Saim Dev adheres to data minimisation principles under UK GDPR and the Privacy and Electronic Communications Regulations (PECR). We do not deploy third-party advertising cookies, cross-site trackers, or invasive analytics pixels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">2. Complete Browser Storage Inventory</h2>
            <p>
              The table below outlines every cookie and local storage item utilised across our website and client-side web applications:
            </p>

            <div className="overflow-x-auto mt-4 border border-gray-200 rounded-xl">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-900 font-semibold">
                    <th className="p-3">Key / Cookie Name</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Provider</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-600">
                  <tr>
                    <td className="p-3 font-mono text-gray-900 font-medium">saim_cookie_consent</td>
                    <td className="p-3">localStorage</td>
                    <td className="p-3">Saim Dev</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">Strictly Necessary</span></td>
                    <td className="p-3">Persistent</td>
                    <td className="p-3">Remembers your cookie banner preference so the notice is not repeatedly shown.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-gray-900 font-medium">saim_allergen_matrix_v1</td>
                    <td className="p-3">localStorage</td>
                    <td className="p-3">Saim Dev</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">Functional Tool</span></td>
                    <td className="p-3">Persistent</td>
                    <td className="p-3">Saves dish and ingredient edits locally in your browser for the Allergen Matrix Generator.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-gray-900 font-medium">saim_food_cost_v1</td>
                    <td className="p-3">localStorage</td>
                    <td className="p-3">Saim Dev</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">Functional Tool</span></td>
                    <td className="p-3">Persistent</td>
                    <td className="p-3">Saves recipe pricing and target margin calculations on your device.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-gray-900 font-medium">saim_recipe_calc_v1</td>
                    <td className="p-3">localStorage</td>
                    <td className="p-3">Saim Dev</td>
                    <td className="p-3"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-medium">Functional Tool</span></td>
                    <td className="p-3">Persistent</td>
                    <td className="p-3">Saves scaled batch yields and commercial catering measurements locally.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">3. Third-Party External Services</h2>
            <p>
              When you interact with external services (such as contacting Saim Dev via WhatsApp or visiting our Instagram profile), those third-party platforms apply their own cookies and privacy policies. No data is shared with those platforms until you explicitly click their respective links.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">4. Managing Browser Storage</h2>
            <p>
              You can clear your local storage and cookies at any time through your browser settings:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li><strong>Chrome / Edge:</strong> Settings → Privacy and Security → Site settings → Clear data.</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data.</li>
              <li><strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">5. Contact Information</h2>
            <p>
              For questions regarding our technical storage policies, please message us on WhatsApp at +92 319 6526604 or visit our{" "}
              <Link href="/contact" className="underline font-semibold text-black">
                Contact Page
              </Link>.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter theme="light" />
    </div>
  );
}
