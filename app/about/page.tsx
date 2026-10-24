import { SiteFooter } from "@/components/SiteFooter";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShieldCheck, Code2, Rocket, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Saim Dev | Next.js Web Architecture",
  description: "Learn about Saim Dev. We build high-speed Next.js websites, bespoke takeaway ordering systems, and practical digital tools for UK businesses.",
  alternates: {
    canonical: "https://www.saimdev.site/about",
  },
  openGraph: {
    title: "About Saim Dev | Next.js Web Architecture",
    description: "Learn about Saim Dev. We build high-speed Next.js websites, bespoke takeaway ordering systems, and practical digital tools for UK businesses.",
    url: "https://www.saimdev.site/about",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Saim Dev | Next.js Web Architecture",
    description: "Learn about Saim Dev. We build high-speed Next.js websites, bespoke takeaway ordering systems, and practical digital tools for UK businesses."
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1D1D1F] font-sans">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E5EA] px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-[#1D1D1F] text-base tracking-tight">Saim Dev</span>
        </Link>
        <Link
          href="/contact"
          className="text-xs font-bold text-gray-700 hover:text-black bg-gray-100 hover:bg-gray-200 px-3.5 py-1.5 rounded-full transition-colors"
        >
          Contact Us
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-12">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-black">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1D1D1F]">
            About Saim Dev
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We are a web development studio specialising in modern Next.js web applications, fast online ordering systems, and practical digital tools for independent businesses.
          </p>
        </div>

        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-6">
          <h2 className="text-2xl font-bold text-[#1D1D1F]">Our Approach to Web Engineering</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            We believe commercial websites should be fast, accessible, and straightforward. Rather than using slow, bloated page builders, we write clean Next.js and React code that achieves top-tier Core Web Vitals, rapid sub-second page loads, and intuitive mobile interfaces.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <Code2 className="w-5 h-5 text-indigo-600" />
              <h3 className="font-bold text-sm text-gray-900">Modern Codebase</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Next.js 16 App Router, React 19, TypeScript, and clean CSS styling.</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <Rocket className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-sm text-gray-900">High Performance</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Engineered for quick loading on 4G/5G mobile devices with zero clutter.</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <Globe className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-sm text-gray-900">UK Focus</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Tailored solutions for UK hospitality operators and local service businesses.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-4">
          <h2 className="text-2xl font-bold text-[#1D1D1F]">Food Safety Tools &amp; Resources</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Alongside bespoke client development, we provide free kitchen management tools and printable templates—including our interactive allergen matrix and kitchen checklists. These tools are completely free to use, run client-side in your browser, and help UK food businesses organise daily records.
          </p>
          <div className="pt-2">
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900 underline"
            >
              <span>Explore Food Safety Templates Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        <section className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 leading-relaxed">
          <p className="font-semibold text-amber-900 mb-1">Company Information</p>
          <p>
            For client inquiries, technical support, or partnership discussions, you can reach us through our <Link href="/contact" className="underline font-semibold">Contact Page</Link> or connect directly via WhatsApp.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
