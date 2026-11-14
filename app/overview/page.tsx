import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AboutSection } from "@/components/AboutSection";
import { ServicesBentoSection } from "@/components/ServicesBentoSection";
import { LiveDemosSection } from "@/components/LiveDemosSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";
import { ProcessSection } from "@/components/ProcessSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { TechStackSection } from "@/components/TechStackSection";
import { FeaturedToolsSection } from "@/components/FeaturedToolsSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import { RhHeader } from "@/components/rh/RhHeader";

const ProjectScopeEstimator = dynamic(
  () =>
    import("@/components/ProjectScopeEstimator").then(
      (m) => m.ProjectScopeEstimator
    ),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Full Studio Overview, Specs & Cost Estimator | Saim Dev",
  description:
    "Explore Saim Dev's complete engineering breakdown, interactive project scope cost estimator, live demos, architecture comparison, and full FAQ.",
  alternates: {
    canonical: "https://www.saimdev.site/overview",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const QUICK_JUMP_LINKS = [
  { href: "#estimator", label: "Interactive Cost Estimator" },
  { href: "#our-story", label: "Studio & Metrics" },
  { href: "#services", label: "Services Breakdown" },
  { href: "#demos", label: "Live Demos" },
  { href: "#benefits", label: "Why Custom Code" },
  { href: "#comparison", label: "Platform Comparison" },
  { href: "#performance", label: "Speed & SEO" },
  { href: "#tech-stack", label: "Tech Stack" },
  { href: "#process", label: "4-Step Process" },
  { href: "#pricing", label: "Full Pricing Plans" },
  { href: "#tools", label: "Free UK Tools" },
  { href: "#faq", label: "Detailed FAQ" },
  { href: "#contact", label: "Direct Contact" },
];

export default function StudioOverviewPage() {
  return (
    <div className="rh-page min-h-screen flex flex-col bg-[#F5F5F7] text-[#0D0D0D] selection:bg-[#BAFF00] selection:text-[#0D0D0D] overflow-x-hidden">
      <RhHeader theme="dark" />

      {/* Dark Architectural Hero & Quick-Jump Directory for "View More Details" visitors */}
      <section className="bg-[#0D0D0D] text-white border-b border-[#202020] pt-[136px] pb-14 sm:pt-[156px] sm:pb-20 px-5">
        <div className="max-w-[1168px] mx-auto flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-medium uppercase tracking-[0.88px] bg-[#161616] border border-[#262626] text-[#CBCBCB]">
                <span className="w-2 h-2 rounded-full bg-[#BAFF00]" />
                <span>Detailed Engineering Specs &amp; Scope Calculator</span>
              </div>
              <h1 className="text-[clamp(36px,4.8vw,62px)] font-medium tracking-[-0.035em] leading-[1.06]">
                <span className="text-white">Full Studio Overview </span>
                <span className="text-[#939393]">&amp; Cost Estimator</span>
              </h1>
              <p className="text-[16px] sm:text-[18px] text-[#939393] leading-[1.55]">
                Complete technical specifications, interactive project cost
                estimator, architecture comparisons, and full deliverables for
                every Saim Dev service.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium bg-[#161616] border border-[#2A2A2A] hover:bg-[#BAFF00] hover:text-[#0D0D0D] hover:border-[#BAFF00] text-white transition-colors shrink-0 self-start lg:self-auto"
            >
              ← Back to Minimal Homepage
            </Link>
          </div>

          {/* Anchor Jump Pills */}
          <nav
            aria-label="Detailed sections navigation"
            className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar pt-4 border-t border-[#202020]"
          >
            {QUICK_JUMP_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center px-4 py-2 rounded-full text-[13px] font-medium bg-[#161616] hover:bg-[#BAFF00] hover:text-[#0D0D0D] text-[#CBCBCB] border border-[#262626] transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <main className="flex-grow">
        <div id="estimator" className="scroll-mt-24">
          <ProjectScopeEstimator />
        </div>
        <div id="our-story" className="scroll-mt-24">
          <AboutSection />
        </div>
        <div id="services" className="scroll-mt-24">
          <ServicesBentoSection />
        </div>
        <div id="demos" className="scroll-mt-24">
          <LiveDemosSection />
        </div>
        <div id="benefits" className="scroll-mt-24">
          <BenefitsSection />
        </div>
        <div id="comparison" className="scroll-mt-24">
          <ComparisonMatrix />
        </div>
        <div id="performance" className="scroll-mt-24">
          <PerformanceSection />
        </div>
        <div id="tech-stack" className="scroll-mt-24">
          <TechStackSection />
        </div>
        <div id="process" className="scroll-mt-24">
          <ProcessSection />
        </div>
        <div id="pricing" className="scroll-mt-24">
          <PricingSection />
        </div>
        <div id="tools" className="scroll-mt-24">
          <FeaturedToolsSection />
        </div>
        <div id="faq" className="scroll-mt-24">
          <FaqSection />
        </div>
        <div id="contact" className="scroll-mt-24">
          <ContactSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
