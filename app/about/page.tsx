import { SiteFooter } from "@/components/SiteFooter";
import { RhHeader } from "@/components/rh/RhHeader";
import {
  RhHeroPinned,
  RhProblemSolutionDeck,
  RhSystemRows,
} from "@/components/rh/RhModernSections";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Globe, UserCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: 'About Saim Dev | Remote Next.js Studio for UK & EU',
  description: 'Learn about Saim Dev, an independent Next.js developer providing fast, fixed-price websites and digital kitchen systems for UK small businesses.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.saimdev.site/about",
    languages: {
      "en-GB": "https://www.saimdev.site/about",
    },
  },
  openGraph: {
    title: 'About Saim Dev | Remote Next.js Studio for UK & EU',
    description: 'Learn about Saim Dev, an independent Next.js developer providing fast, fixed-price websites and digital kitchen systems for UK small businesses.',
    url: "https://www.saimdev.site/about",
    siteName: "Saim Dev",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://www.saimdev.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Saim Dev - Next.js Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'About Saim Dev | Remote Next.js Studio for UK & EU',
    description: 'Learn about Saim Dev, an independent Next.js developer providing fast, fixed-price websites and digital kitchen systems for UK small businesses.',
    creator: "@saimwebdev",
    images: ["https://www.saimdev.site/og-image.png"],
  },
};

export default function AboutPage() {
  const aboutPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.saimdev.site/#person",
    "name": "Saim Dev",
    "jobTitle": "Founder & Lead Next.js Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site"
    },
    "url": "https://www.saimdev.site/about",
    "image": "https://www.saimdev.site/saim-dev-logo.jpg",
    "sameAs": [
      "https://github.com/subhansaim047",
      "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER",
      "https://x.com/saimwebdev",
      "https://www.instagram.com/saim_agency/",
      "https://saimswebagency.quora.com/",
      "https://www.tiktok.com/@saimdev.site",
      "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog"
    ]
  };

  const aboutBreadcrumbSchema = {
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
        "name": "About",
        "item": "https://www.saimdev.site/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbSchema) }}
      />
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      <RhHeroPinned
        badge="Pakistan-Based Studio · Serving UK & EU Remotely"
        title={
          <>
            About Saim Dev{" "}
            <span className="text-[#939393]">Engineering Studio</span>
          </>
        }
        subtitle="Saim Dev is an independent Next.js web development studio serving UK and European businesses remotely. We engineer sub-second websites, custom e-commerce storefronts, and commission-free takeaway ordering systems from £250—with direct founder-led communication, full GitHub code ownership, and zero monthly retainers."
        primaryCta={{ label: "Start a Project ($0 Upfront)", href: "/contact" }}
        secondaryCta={{ label: "Inspect Live Case Studies", href: "/case-studies" }}
        videoType="cube"
        stripLabel="Direct founder engineering · UK & EU"
      />

      <div className="bg-[#F5F5F7] text-[#0D0D0D]">
        <main className="max-w-[1168px] mx-auto px-5 py-16 sm:py-24 space-y-10">

        {/* Studio Identity Card */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
              SD
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Transparent Remote Partnership</h2>
              <p className="text-xs text-gray-500 font-mono">Founder-Led Engineering • Clear Fixed Milestone Pricing</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            By operating remotely from Pakistan with direct communication via WhatsApp and Google Meet, we offer independent UK and European business owners senior-level Next.js craftsmanship at clear, fixed prices (from £250). There are no middle managers, no hidden agency overheads, and no monthly lock-in contracts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Direct WhatsApp &amp; Loom updates aligned with UK business hours.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Full source code ownership on GitHub with zero platform dependency.</span>
            </div>
          </div>
        </section>

        {/* Founder & Lead Architect Profile */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-300 shadow-sm shrink-0">
                <img src="/saim-dev-logo.jpg" alt="Saim Dev - Founder & Next.js Engineer" width={120} height={120} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Saim Dev</h2>
                <p className="text-xs text-amber-700 font-mono font-semibold">Founder &amp; Lead Next.js Architect</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Specialist Full-Stack Web Developer serving UK &amp; European clients</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl w-fit">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct 1-on-1 Communication</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            As the founder of Saim Dev, I personally architect, write, and deploy every client website and food safety tool. With a sharp focus on Next.js Server Components, lightweight React UI, and technical SEO, I help independent business owners build digital systems that load in under 1 second, look agency-grade, and convert visitors into loyal customers.
          </p>
          
          {/* Verified Social & Professional Profiles (sameAs links) */}
          <div className="pt-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-3">
              Verified Profiles &amp; Social Channels (sameAs)
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="https://github.com/subhansaim047"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                GitHub: subhansaim047
              </a>
              <a
                href="https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                Contra: SAIMDEVELOPER
              </a>
              <a
                href="https://x.com/saimwebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                X: @saimwebdev
              </a>
              <a
                href="https://www.instagram.com/saim_agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                Instagram: @saim_agency
              </a>
              <a
                href="https://saimswebagency.quora.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                Quora: Saim Agency
              </a>
              <a
                href="https://www.tiktok.com/@saimdev.site"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                TikTok: @saimdev.site
              </a>
              <a
                href="https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                Threads: @saimdev.site
              </a>
            </div>
          </div>
        </section>

        {/* Engineering Philosophy */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-6">
          <h2 className="text-2xl font-bold text-[#1D1D1F]">Our Approach to Web Engineering</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            We believe commercial websites should be fast, accessible, and straightforward. Rather than using slow, bloated page builders, we write clean Next.js and React code that achieves top-tier Core Web Vitals, rapid sub-second page loads, and intuitive mobile interfaces.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <Code2 className="w-5 h-5 text-indigo-600" />
              <h3 className="font-bold text-sm text-gray-900">Modern Architecture</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS.</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <Rocket className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-sm text-gray-900">Sub-Second Speed</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Engineered for instant loading on 4G/5G mobile devices with zero clutter.</p>
            </div>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
              <Globe className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-sm text-gray-900">UK Hospitality Focus</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Tailored solutions for UK takeaways, restaurants, and local services.</p>
            </div>
          </div>
        </section>

        {/* Food Safety Tools & Free Resources */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-bold text-[#1D1D1F]">Food Safety Tools &amp; Resources</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Alongside bespoke client development, we provide free kitchen management tools and printable templates—including our interactive allergen matrix and kitchen checklists. These tools are completely free to use, run client-side in your browser, and help UK food businesses organize daily records in alignment with UK Food Standards Agency (FSA) guidance.
          </p>
          <div className="pt-2">
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 hover:text-black bg-amber-100 hover:bg-amber-200 px-4 py-2 rounded-xl transition-colors"
            >
              <span>Explore Kitchen Tools Hub</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="p-6 sm:p-8 rounded-3xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-sm text-amber-950 mb-1">Have a project in mind?</p>
            <p className="text-amber-800">Discuss your requirements directly with Saim. Fixed quotes delivered within 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="bg-black hover:bg-gray-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl inline-flex items-center gap-1.5 transition-all shadow shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </main>
      </div>

      <RhProblemSolutionDeck
        overline="WHY INDEPENDENT NEXT.JS ENGINEERING WINS"
        titleBefore="Direct senior craft without"
        titleStrike="agency overhead"
        titleOwned="or retainers."
        subtitle="Traditional agencies charge £3,000–£15,000+ to fund account managers and slow CMS themes. Working directly with Saim Dev delivers 99+ PageSpeed, full code IP, and fixed pricing from £250."
        solutionTitle="Founder-Built Code You Own Forever"
        solutionDesc="Every line of React, Next.js, and Tailwind CSS is authored cleanly, tested on a live staging link first ($0 upfront), and transferred straight to your GitHub."
      />

      <RhSystemRows
        overline="STUDIO PRINCIPLES"
        title="How we operate"
        titleMuted="with UK & EU founders"
        rows={[
          {
            num: "01",
            title: "Direct 1-on-1 Engineer Access",
            description:
              "Communicate straight with Saim on WhatsApp and Loom aligned with UK business hours—zero middlemen.",
            tags: ["Direct WhatsApp", "< 2h Reply"],
            href: "/contact",
          },
          {
            num: "02",
            title: "100% GitHub Source Ownership",
            description:
              "Complete repository, production Next.js source, and cloud hosting handed directly to your team.",
            tags: ["Zero Lock-In", "Clean TypeScript"],
            href: "/technologies",
          },
          {
            num: "03",
            title: "Verified Client Case Studies",
            description:
              "Real before-and-after metrics turning 4.8s WordPress sites into 0.6s sub-second revenue engines.",
            tags: ["+185% Leads", "99/100 CWV"],
            href: "/case-studies",
          },
        ]}
      />

      <SiteFooter theme="dark" />
    </div>
    </>
  );
}
