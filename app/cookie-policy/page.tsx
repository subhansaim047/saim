import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Saim Dev",
  description: "How Saim Dev uses cookies and browser storage on this website and its free tools.",
  openGraph: {
    title: "Cookie Policy | Saim Dev",
    description: "How Saim Dev uses cookies and browser storage on this website and its free tools.",
    url: "https://www.saimdev.site/cookie-policy",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Saim Dev",
    description: "How Saim Dev uses cookies and browser storage on this website and its free tools."
  },
  alternates: {
    canonical: "https://www.saimdev.site/cookie-policy",
  },
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F]">Cookie Policy</h1>
          <p className="text-xs text-gray-500">Last updated: October 2026</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your computer or mobile device when you visit a website. They help the site remember your preferences and ensure specific technical functions operate correctly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">2. How Saim Dev Uses Cookies</h2>
            <p>We believe in data minimisation. Our website uses:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Strictly Necessary Storage:</strong> Used to record whether you have acknowledged our cookie notice.
              </li>
              <li>
                <strong>Browser Local Storage (Client-Side Tools):</strong> Our interactive tools (such as the Allergen Matrix Generator and Food Cost Calculator) use your browser&apos;s built-in <code>localStorage</code> to save your custom table edits so you do not lose work if you refresh the page. This data remains on your device and is never transmitted to our servers.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">3. Third-Party Services</h2>
            <p>
              When you click external links (such as contacting us on WhatsApp or following our social media channels), those external services may set their own cookies according to their individual privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">4. Managing Your Preferences</h2>
            <p>
              You can control and disable cookies via your browser settings. You can also clear your browser cache and local storage at any time to remove saved tool data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">5. Contact Us</h2>
            <p>
              If you have any questions regarding our use of cookies or technical storage, please contact us via our{" "}
              <Link href="/contact" className="underline font-semibold text-black">
                Contact Page
              </Link>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-[#E5E5EA] bg-white py-8 px-4 sm:px-8 text-center text-xs text-gray-500">
        <p>© 2026 Saim Dev. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-gray-600">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>•</span>
          <Link href="/services" className="hover:text-black">Services</Link>
          <span>•</span>
          <Link href="/demos" className="hover:text-black">Demos</Link>
          <span>•</span>
          <Link href="/about" className="hover:text-black">About</Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-black">Contact</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
          <span>•</span>
          <Link href="/cookie-policy" className="hover:text-black font-semibold text-black">Cookie Policy</Link>
          <span>•</span>
          <Link href="/disclaimer" className="hover:text-black">Disclaimer</Link>
        </div>
      </footer>
    </div>
  );
}
