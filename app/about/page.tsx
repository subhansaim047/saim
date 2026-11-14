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
    <div className="rh-page min-h-screen bg-black text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
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

      {/* ARCHITECTURAL STUDIO PROFILE (#F5F5F7 Contrast Band) */}
      <section className="relative z-10 bg-[#F5F5F7] text-[#0D0D0D] py-20 sm:py-28 px-5 border-b border-[#E6E6E6]">
        <div className="max-w-[1168px] mx-auto space-y-12">
          {/* Founder & Remote Partnership Bento */}
          <div data-gsap-stagger="" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-7 rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E6E6E6]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-black/15 bg-white shrink-0">
                      <img
                        src="/saim-dev-logo.jpg"
                        alt="Saim Dev - Founder & Next.js Engineer"
                        width={120}
                        height={120}
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-[24px] font-medium tracking-[-0.03em] text-[#0D0D0D]">
                        Saim Dev
                      </h2>
                      <p className="text-[12px] font-mono-tech uppercase tracking-wider text-[#595959]">
                        Founder &amp; Lead Next.js Architect
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[11px] font-mono-tech uppercase tracking-wider bg-[#0D0D0D] text-[#BAFF00] px-3.5 py-1.5 self-start sm:self-center">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Direct 1-on-1 Access</span>
                  </span>
                </div>

                <p className="text-[15px] text-[#333333] leading-[1.65] mt-6">
                  As the founder of Saim Dev, I personally architect, write, and deploy every client website and food safety tool. With a sharp focus on Next.js Server Components, lightweight React UI, and technical SEO, I help UK and EU business owners launch digital systems that load in under 1 second and convert traffic without bloated monthly retainers.
                </p>
              </div>

              {/* Verified Social & Professional Profiles (sameAs links) */}
              <div className="pt-6 border-t border-[#E6E6E6]">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#595959] block mb-3">
                  Verified Profiles &amp; Channels
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    { label: "GitHub: subhansaim047", href: "https://github.com/subhansaim047" },
                    { label: "Contra: SAIMDEVELOPER", href: "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER" },
                    { label: "X: @saimwebdev", href: "https://x.com/saimwebdev" },
                    { label: "Instagram: @saim_agency", href: "https://www.instagram.com/saim_agency/" },
                    { label: "Quora: Saim Agency", href: "https://saimswebagency.quora.com/" },
                    { label: "TikTok: @saimdev.site", href: "https://www.tiktok.com/@saimdev.site" },
                    {
                      label: "Threads: @saimdev.site",
                      href: "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog",
                    },
                  ].map((ch) => (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#F5F5F7] border border-[#E6E6E6] text-[#0D0D0D] font-medium hover:bg-[#0D0D0D] hover:text-[#BAFF00] hover:border-[#0D0D0D] transition-colors"
                    >
                      {ch.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rh-edge-orbit-card is-lime bg-[#0D0D0D] text-white border border-[#202020] p-8 sm:p-10 flex flex-col justify-between gap-8">
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] block mb-4">
                  TRANSPARENT REMOTE PARTNERSHIP
                </span>
                <h3 className="text-[26px] font-medium tracking-[-0.03em] leading-[1.15] text-white mb-4">
                  Senior-level execution with fixed milestone pricing.
                </h3>
                <p className="text-[14px] text-[#939393] leading-[1.6] mb-6">
                  Operating remotely with direct communication via WhatsApp and Google Meet keeps studio overhead near zero—delivering enterprise Next.js quality from £250.
                </p>
                <div className="space-y-3 text-[13px] text-white/85">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-0.5" />
                    <span>Direct WhatsApp &amp; Loom updates aligned with UK business hours.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-0.5" />
                    <span>Full GitHub repository ownership with zero platform lock-in.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#939393] block mb-2">
                  FREE INDUSTRY UTILITIES
                </span>
                <p className="text-[13px] text-[#B3B3B3] leading-[1.55] mb-4">
                  Free browser-based kitchen tools &amp; printable allergen matrices aligned with UK FSA guidance.
                </p>
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 text-xs font-medium bg-[#BAFF00] text-[#0D0D0D] px-4 py-2.5 rounded-full hover:brightness-95 transition-all"
                >
                  <span>Explore Kitchen Tools Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Engineering Approach 3-Col */}
          <div>
            <div data-gsap-reveal="" className="max-w-[720px] mb-10">
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.35em] text-[#595959] mb-3">
                ENGINEERING PHILOSOPHY
              </div>
              <h2 className="text-[32px] sm:text-[42px] font-medium tracking-[-0.04em] leading-[1.08] text-[#0D0D0D]">
                Our Approach to Web Engineering
              </h2>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Code2,
                  title: "Modern Architecture",
                  desc: "Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS with zero legacy CMS bloat.",
                },
                {
                  icon: Rocket,
                  title: "Sub-Second Speed",
                  desc: "Engineered for instant loading on 4G/5G mobile networks with 95+ Core Web Vitals.",
                },
                {
                  icon: Globe,
                  title: "UK Hospitality Focus",
                  desc: "Tailored digital systems for UK takeaways, restaurants, and local commercial brands.",
                },
              ].map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rh-edge-orbit-card bg-white border border-[#E6E6E6] p-8 hover:border-[#0D0D0D] transition-colors flex flex-col justify-between min-h-[210px]"
                  >
                    <span className="w-10 h-10 rounded-full bg-[#0D0D0D] text-[#BAFF00] flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-[20px] font-medium tracking-[-0.02em] text-[#0D0D0D] mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-[14px] text-[#595959] leading-[1.6]">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Architectural Dark CTA Bar */}
          <div
            data-gsap-reveal=""
            className="p-8 sm:p-10 bg-black text-white border border-[#202020] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <div className="text-[11px] font-mono-tech uppercase tracking-[0.2em] text-[#BAFF00] mb-2">
                FIXED QUOTES WITHIN 24 HOURS
              </div>
              <p className="text-[22px] sm:text-[26px] font-medium tracking-[-0.03em] text-white mb-1">
                Have a project in mind?
              </p>
              <p className="text-[14px] text-[#939393]">
                Discuss your requirements directly with Saim and start with a $0 upfront interactive prototype.
              </p>
            </div>
            <Link
              href="/contact"
              className="rh-btn-pill bg-[#BAFF00] text-[#0D0D0D] px-7 py-3.5 text-[14px] font-medium tracking-[-0.02em] inline-flex items-center gap-2 shrink-0"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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
