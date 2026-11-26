"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, Code2, Building, Utensils, Stethoscope, Scissors, Briefcase, Laptop } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { RhHeader } from "@/components/rh/RhHeader";
import {
  EngineeringMediaFigure,
  EngineeringVerificationBadge,
  ServiceFitMatrix,
  TopicSiloNavigator,
} from "@/components/ui/EditorialVisualPack";
import {
  RhBentoWorkGrid,
  RhHeroPinned,
  RhOdometerNumber,
  RhProblemSolutionDeck,
  RhProcessCarousel,
  RhSystemRows,
  type RetentionBar,
  type StripProofItem,
} from "@/components/rh/RhModernSections";

const MOBILE_VIDEO_SLUGS = new Set([
  "ui-ux-design",
  "website-redesign",
  "landing-page-design",
  "web-application-development",
  "react-development",
  "custom-web-apps",
  "landing-pages-cro",
  "takeaway-web-design",
  "website-clone",
  "ecommerce-shopify",
]);

function formatFunnelOverline(step: string, text: string): string {
  return `${step} / ${text.replace(/^\d{1,2}\s*\/\s*/, "")}`;
}

function splitPriceForOdometer(raw: string): {
  prefix: string;
  amount: number | null;
  suffix: string;
} {
  const m = raw.match(/^(.*?)(\d[\d,]*)(.*)$/);
  if (!m) return { prefix: "", amount: null, suffix: raw };
  const num = Number(m[2].replace(/,/g, ""));
  if (!Number.isFinite(num)) return { prefix: "", amount: null, suffix: raw };
  return { prefix: m[1], amount: num, suffix: m[3] };
}

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface FeatureBenefit {
  feature: string;
  benefit: string;
  description: string;
}

export interface IndustryApplication {
  industry: string;
  description: string;
  exampleProject?: string;
  demoUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration?: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics?: string;
  demoUrl: string;
  previewImage?: string;
  previewAlt?: string;
  previewWidth?: number;
  previewHeight?: number;
}

export interface PricingTier {
  name: string;
  price: string;
  usdEquivalent?: string;
  description: string;
  badge?: string;
  features: string[];
  popular?: boolean;
}

export interface TestimonialItem {
  quote: string;
  client: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  serviceName: string;
  mainKeyword: string;
  seoTitle: string;
  seoDescription: string;
  canonicalUrl: string;
  badge: string;
  h1: string;
  subheading: string;
  stripLabel?: string;
  stripItems?: StripProofItem[];
  primaryCtaText?: string;
  secondaryCtaText?: string;
  painPoints: { problem: string; solution: string }[];
  problemSection?: {
    overline?: string;
    titleBefore: string;
    titleStrike: string;
    titleOwned: string;
    subtitle: string;
    solutionTag?: string;
    solutionTitle: string;
    solutionDesc: string;
    solutionMetrics?: { value: string; label: string }[];
    chartTitle?: string;
    chartBadge?: string;
    chartYAxis?: string;
    chartXAxis?: string;
    chartCaption?: string;
    bars?: RetentionBar[];
  };
  deliverables: ServiceDeliverable[];
  deliverablesMeta?: {
    overline?: string;
    title: string;
    titleMuted: string;
    subtitle: string;
    rowTags?: string[];
  };
  featuresAndBenefits: FeatureBenefit[];
  industries: IndustryApplication[];
  process: ProcessStep[];
  techStack: { name: string; role: string }[];
  caseStudies: CaseStudy[];
  competitorComparison?: {
    overline?: string;
    title: string;
    titleMuted: string;
    subtitle: string;
    columns: [string, string, string];
    rows: { criteria: string; saim: string; alternative: string }[];
  };
  engineeringChecklist?: {
    title: string;
    subtitle?: string;
    items: string[];
  };
  pricing: PricingTier[];
  whyChooseUs: { title: string; desc: string }[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  sectionHeadings?: {
    valueOverline?: string;
    valueTitle?: string;
    valueMuted?: string;
    marketOverline?: string;
    marketTitle?: string;
    marketMuted?: string;
    processOverline?: string;
    processTitle?: string;
    processMuted?: string;
    processSummary?: string;
    processStageTag?: string;
    stackOverline?: string;
    stackTitle?: string;
    stackMuted?: string;
    proofOverline?: string;
    proofTitle?: string;
    proofMuted?: string;
    pricingOverline?: string;
    pricingTitle?: string;
    pricingMuted?: string;
    pricingNote?: string;
    pricingButtonText?: string;
    advantageOverline?: string;
    advantageTitle?: string;
    advantageMuted?: string;
    feedbackOverline?: string;
    feedbackTitle?: string;
    feedbackMuted?: string;
    faqOverline?: string;
    faqIntro?: string;
    bannerTag?: string;
  };
  geoCoverage?: {
    overline?: string;
    title: string;
    titleMuted: string;
    subtitle: string;
    regions: {
      code: string;
      name: string;
      timezone: string;
      compliance: string;
      edgeNodes: string;
      summary: string;
    }[];
  };
  finalCta: {
    headline: string;
    description: string;
    primaryButtonText: string;
    whatsappText: string;
  };
  relatedServices: { name: string; href: string; desc: string }[];
  relatedGuides?: { title: string; href: string; tag: string; desc: string }[];
}

const getIndustryIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (
    lower.includes("restaurant") ||
    lower.includes("takeaway") ||
    lower.includes("food")
  )
    return <Utensils className="w-5 h-5 text-[#0D0D0D]" />;
  if (
    lower.includes("health") ||
    lower.includes("clinic") ||
    lower.includes("doctor")
  )
    return <Stethoscope className="w-5 h-5 text-[#0D0D0D]" />;
  if (
    lower.includes("beauty") ||
    lower.includes("salon") ||
    lower.includes("spa")
  )
    return <Scissors className="w-5 h-5 text-[#0D0D0D]" />;
  if (
    lower.includes("architecture") ||
    lower.includes("construction") ||
    lower.includes("estate")
  )
    return <Building className="w-5 h-5 text-[#0D0D0D]" />;
  if (lower.includes("corporate") || lower.includes("b2b"))
    return <Briefcase className="w-5 h-5 text-[#0D0D0D]" />;
  return <Laptop className="w-5 h-5 text-[#0D0D0D]" />;
};

export const ServicePageTemplate: React.FC<{ data: ServicePageData }> = ({
  data,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currencyMode, setCurrencyMode] = useState<"native" | "USD" | "GBP">("native");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const h = data.sectionHeadings;
  const whatsappHref = `https://wa.me/923196526604?text=${encodeURIComponent(
    `Hi Saim, I'd like to discuss ${data.serviceName} (${data.finalCta.whatsappText}).`
  )}`;

  const videoType = MOBILE_VIDEO_SLUGS.has(data.slug) ? "mobile" : "cube";

  return (
    <div
      className={`rh-page min-h-screen ${
        videoType === "mobile" ? "bg-[#0D0D0D]" : "bg-black"
      } text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D] relative`}
    >
      <RhHeader theme="dark" />

      <main>
        {/* ==============================================================
            01 — EXACT rh.design PAGE-OPEN HERO (3D Video + Laser-Draw Strip)
        =============================================================== */}
        <RhHeroPinned
          badge={data.badge}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: data.serviceName },
          ]}
          title={data.h1}
          subtitle={data.subheading}
          primaryCta={{
            label: data.primaryCtaText || "Request Fixed Quote",
            href: "/contact",
          }}
          secondaryCta={{
            label: data.secondaryCtaText || "Explore Live Demos",
            href: "#case-studies",
          }}
          videoType={videoType}
          stripLabel={data.stripLabel || `${data.serviceName} · Specs`}
          stripItems={data.stripItems}
        />

        {/* ==============================================================
            02 — SCROLLYTELLING BOTTLENECK DECK + GROWING RETENTION CHART
        =============================================================== */}
        <RhProblemSolutionDeck
          overline={data.problemSection?.overline || `01 / ${data.mainKeyword.toUpperCase()} AUDIT`}
          titleBefore={data.problemSection?.titleBefore || "Replacing"}
          titleStrike={data.problemSection?.titleStrike || "legacy friction"}
          titleOwned={data.problemSection?.titleOwned || `for ${data.serviceName}.`}
          subtitle={
            data.problemSection?.subtitle ||
            `How custom Next.js engineering resolves common commercial and technical blockers for ${data.serviceName}.`
          }
          cards={data.painPoints.slice(0, 4).map((p, idx) => ({
            source: `Challenge #${idx + 1}`,
            time: "Technical Audit",
            title: p.problem,
            detail: p.solution,
            severity: idx % 2 === 0 ? "critical" : "warning",
          }))}
          solutionTag={data.problemSection?.solutionTag}
          solutionTitle={
            data.problemSection?.solutionTitle || `Dedicated ${data.serviceName} Blueprint`
          }
          solutionDesc={
            data.problemSection?.solutionDesc ||
            data.painPoints[0]?.solution ||
            `Clean, modular React 19 and Next.js 16 architecture engineered around your scope with full repository handover.`
          }
          solutionMetrics={data.problemSection?.solutionMetrics}
          chartTitle={data.problemSection?.chartTitle}
          chartBadge={data.problemSection?.chartBadge}
          chartYAxis={data.problemSection?.chartYAxis}
          chartXAxis={data.problemSection?.chartXAxis}
          chartCaption={data.problemSection?.chartCaption}
          bars={data.problemSection?.bars}
        />

        {/* ==============================================================
            03 — INTERACTIVE SVG LINE-DRAW DELIVERABLES SYSTEM
        =============================================================== */}
        <RhSystemRows
          overline={formatFunnelOverline("03", data.deliverablesMeta?.overline || "SCOPE OF WORK")}
          title={data.deliverablesMeta?.title || "Core Deliverables for"}
          titleMuted={data.deliverablesMeta?.titleMuted || data.serviceName}
          subtitle={
            data.deliverablesMeta?.subtitle ||
            "Select any deliverable layer below to inspect included architecture, tooling, and handover standards."
          }
          rows={data.deliverables.map((deliv, idx) => ({
            num: String(idx + 1).padStart(2, "0"),
            title: deliv.title,
            description: deliv.description,
            tags: data.deliverablesMeta?.rowTags || [
              data.mainKeyword,
              "Fixed Scope",
              "Repo Ownership",
            ],
          }))}
        />

        {/* ==============================================================
            03B — PRODUCTION TECH STACK BAR (Dark #0D0D0D Transition)
        =============================================================== */}
        <section
          data-nav="dark"
          className="py-16 px-5 bg-[#0D0D0D] text-white border-t border-[#202020]"
        >
          <div className="max-w-[1168px] mx-auto">
            <div data-gsap-reveal="" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] block mb-2.5">
                  {formatFunnelOverline("03", h?.stackOverline || "TECHNICAL STACK")}
                </span>
                <h2 className="text-[clamp(26px,3.2vw,38px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  {h?.stackTitle || "Production Tooling for"}{" "}
                  <span className="text-[#939393]">
                    {h?.stackMuted || data.serviceName}
                  </span>
                </h2>
              </div>
              <Link
                href="/technologies"
                className="text-[14px] text-[#CBCBCB] hover:text-[#BAFF00] transition-colors"
              >
                Inspect full technology architecture →
              </Link>
            </div>

            <div data-gsap-stagger="" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {data.techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="rh-edge-orbit-card is-lime p-5 bg-[#161616] border border-[#242424] text-center flex flex-col items-center justify-center"
                >
                  <Code2 className="w-5 h-5 text-[#BAFF00] mb-2.5" />
                  <p className="text-[15px] font-medium text-white">{tech.name}</p>
                  <p className="text-[12px] text-[#939393] mt-0.5">{tech.role}</p>
                </div>
              ))}
            </div>

            {(() => {
              const isMigration = ["website-redesign", "website-clone", "wordpress-headless-cms"].includes(data.slug);
              const isCostStack = ["ecommerce-development", "ecommerce-shopify", "landing-pages-cro", "business-websites"].includes(data.slug);
              const figSrc = isMigration
                ? "/images/guides/zero-loss-migration-flow.webp"
                : isCostStack
                ? "/images/guides/nextjs-tco-comparison.webp"
                : "/images/guides/nextjs-edge-architecture.webp";
              const figAlt = isMigration
                ? `${data.mainKeyword} — ${data.serviceName} zero-loss Next.js 16 edge migration architecture visualization`
                : isCostStack
                ? `${data.mainKeyword} — ${data.serviceName} Core Web Vitals performance and 24-month total cost efficiency visual`
                : `${data.mainKeyword} — ${data.serviceName} Next.js 16 edge CDN routing architecture diagram`;
              const figCaption = isMigration
                ? `Every ${data.serviceName} sprint maps legacy URLs onto clean Next.js 16 routing with single-hop 301 safety and full Schema.org continuity.`
                : isCostStack
                ? `${data.serviceName} removes recurring app bloat and monthly builder taxes with owned TypeScript components built around speed and conversion.`
                : `Global edge routing pairs React 19 Server Components with London and US CDN nodes for responsive mobile interactions and crawl clarity.`;
              return (
                <EngineeringMediaFigure
                  src={figSrc}
                  alt={figAlt}
                  caption={figCaption}
                  tag={`${data.serviceName} · Visual Architecture`}
                  theme="dark"
                />
              );
            })()}
          </div>
        </section>

        {/* ==============================================================
            04 — VALUE: FEATURES & BENEFITS + SECTOR APPLICATIONS (Light #F5F5F7)
        =============================================================== */}
        <section className="py-20 sm:py-28 px-5 bg-[#F5F5F7] text-[#0D0D0D]">
          <div className="max-w-[1168px] mx-auto space-y-24">
            {/* Features & Benefits */}
            <div>
              <div data-gsap-reveal="" className="max-w-3xl mb-14">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#595959] block mb-3">
                  {formatFunnelOverline("04", h?.valueOverline || "Commercial Outcomes")}
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  {h?.valueTitle || "Engineering Standards for"}{" "}
                  <span className="text-[#939393]">{h?.valueMuted || data.serviceName}</span>
                </h2>
              </div>

              <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.featuresAndBenefits.map((item, idx) => (
                  <div
                    key={idx}
                    className="rh-edge-orbit-card p-8 rounded-3xl bg-white border border-[#E6E6E6] flex flex-col justify-between transition-colors hover:border-[#0D0D0D]"
                  >
                    <div>
                      <div className="inline-block px-3.5 py-1 rounded-full bg-[#0D0D0D] text-[#BAFF00] text-[12px] font-medium mb-5">
                        {item.feature}
                      </div>
                      <h3 className="text-[20px] font-medium text-[#0D0D0D] mb-2.5 tracking-[-0.015em]">
                        {item.benefit}
                      </h3>
                      <p className="text-[15px] text-[#595959] leading-[1.6]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industry Applications */}
            <div>
              <div data-gsap-reveal="" className="max-w-3xl mb-14">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#595959] block mb-3">
                  {formatFunnelOverline("04", h?.marketOverline || "Sector Applications")}
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  {h?.marketTitle || "Industries Built With"}{" "}
                  <span className="text-[#939393]">{h?.marketMuted || data.serviceName}</span>
                </h2>
              </div>

              <div data-gsap-stagger="" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.industries.map((ind, idx) => (
                  <div
                    key={idx}
                    className="rh-edge-orbit-card p-7 rounded-3xl bg-white border border-[#E6E6E6] flex flex-col justify-between transition-colors hover:border-[#0D0D0D]"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-2xl bg-[#BAFF00] flex items-center justify-center mb-5">
                        {getIndustryIcon(ind.industry)}
                      </div>
                      <h3 className="text-[19px] font-medium text-[#0D0D0D] mb-2">
                        {ind.industry}
                      </h3>
                      <p className="text-[14px] text-[#595959] leading-[1.6] mb-4">
                        {ind.description}
                      </p>
                    </div>
                    {ind.demoUrl && (
                      <a
                        href={ind.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0D0D0D] hover:opacity-70 pt-4 border-t border-[#E6E6E6]"
                      >
                        <span>Explore Live Demo ({ind.exampleProject})</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            05A — TRUST: COMMITMENTS, SCENARIOS & ARCHITECTURE COMPARISON (Dark #0D0D0D)
        =============================================================== */}
        <section
          id="architecture-comparison"
          data-nav="dark"
          className="py-20 sm:py-28 px-5 bg-[#0D0D0D] text-white border-t border-[#202020]"
        >
          <div className="max-w-[1168px] mx-auto space-y-24">
            {/* Why Choose Us */}
            <div>
              <div data-gsap-reveal="" className="max-w-3xl mb-14">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#BAFF00] block mb-3">
                  {formatFunnelOverline("05", h?.advantageOverline || "Engineering Commitments")}
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  {h?.advantageTitle || "Built Around Ownership &"}{" "}
                  <span className="text-[#939393]">{h?.advantageMuted || "Code Quality"}</span>
                </h2>
              </div>

              <div data-gsap-stagger="" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.whyChooseUs.map((item, idx) => (
                  <div
                    key={idx}
                    className="rh-edge-orbit-card is-lime p-7 rounded-3xl bg-[#161616] border border-[#242424] transition-colors hover:border-[#BAFF00]/60"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center font-bold text-[13px] mb-4">
                      ✓
                    </div>
                    <h3 className="text-[18px] font-medium text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#939393] leading-[1.6]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reference Scenarios */}
            <div>
              <div data-gsap-reveal="" className="max-w-3xl mb-14">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#BAFF00] block mb-3">
                  {formatFunnelOverline("05", h?.feedbackOverline || "Target Reference Scenarios")}
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  {h?.feedbackTitle || "Architecture Profiles for"}{" "}
                  <span className="text-[#939393]">{h?.feedbackMuted || data.serviceName}</span>
                </h2>
              </div>

              <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="rh-edge-orbit-card is-lime p-8 rounded-3xl bg-[#161616] border border-[#242424] flex flex-col justify-between"
                  >
                    <p className="text-[15px] text-[#CBCBCB] leading-[1.65] mb-6">
                      {t.quote}
                    </p>
                    <div className="pt-4 border-t border-[#242424]">
                      <p className="text-[15px] font-medium text-white">
                        {t.client}
                      </p>
                      <p className="text-[13px] text-[#939393]">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitor Comparison & Technical Audit Checklist */}
            {data.competitorComparison && (
              <div>
                <div data-gsap-reveal="" className="max-w-3xl mb-10">
                  <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] block mb-3">
                    {formatFunnelOverline("05", data.competitorComparison.overline || "ARCHITECTURE DECISION MATRIX")}
                  </span>
                  <h2 className="text-[clamp(28px,3.8vw,44px)] font-medium tracking-[-0.03em] leading-[1.1]">
                    {data.competitorComparison.title}{" "}
                    <span className="text-[#939393]">
                      {data.competitorComparison.titleMuted}
                    </span>
                  </h2>
                  <p className="text-[15px] text-[#939393] mt-3 leading-[1.6]">
                    {data.competitorComparison.subtitle}
                  </p>
                </div>

                <div data-gsap-reveal="" className="overflow-x-auto rounded-2xl border border-[#242424] bg-[#141414]">
                  <table className="w-full text-left border-collapse text-[14px]">
                    <thead>
                      <tr className="border-b border-[#242424] bg-[#191919]">
                        <th className="py-4 px-5 font-medium text-[#CBCBCB]">
                          {data.competitorComparison.columns[0]}
                        </th>
                        <th className="py-4 px-5 font-medium text-[#BAFF00]">
                          {data.competitorComparison.columns[1]}
                        </th>
                        <th className="py-4 px-5 font-medium text-[#939393]">
                          {data.competitorComparison.columns[2]}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#202020]">
                      {data.competitorComparison.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-[#181818] transition-colors">
                          <td className="py-4 px-5 font-medium text-white">
                            {row.criteria}
                          </td>
                          <td className="py-4 px-5 text-[#E5E5E5]">{row.saim}</td>
                          <td className="py-4 px-5 text-[#939393]">
                            {row.alternative}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {data.engineeringChecklist && (
              <div data-gsap-reveal="" className="p-8 sm:p-10 rounded-3xl bg-[#161616] border border-[#242424]">
                <div className="max-w-3xl mb-6">
                  <h3 className="text-[22px] sm:text-[26px] font-medium tracking-[-0.02em] text-white">
                    {data.engineeringChecklist.title}
                  </h3>
                  {data.engineeringChecklist.subtitle && (
                    <p className="text-[14px] text-[#939393] mt-2 leading-[1.6]">
                      {data.engineeringChecklist.subtitle}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {data.engineeringChecklist.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-[14px] text-[#CBCBCB] leading-[1.55]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#BAFF00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <ServiceFitMatrix
              title={`Is ${data.serviceName} the Right Fit for Your Business?`}
              idealFor={[
                `UK, US, or European brands needing ${data.serviceName} delivered cleanly on written fixed milestones.`,
                "Founders replacing slow WordPress themes, heavy SaaS builders, or expensive monthly agency retainers.",
                "Teams wanting full GitHub repository custody, strict TypeScript hygiene, and Schema.org structured data.",
              ]}
              notFor={[
                "Businesses wanting drag-and-drop DIY template editors without structured software engineering.",
                "Projects demanding unverified overnight promises or black-hat SEO link schemes.",
              ]}
              theme="dark"
            />

            <EngineeringVerificationBadge
              contextLabel={`All ${data.serviceName} builds undergo pre-launch CI type, canonical, mobile 390px, and schema verification`}
              theme="dark"
            />
          </div>
        </section>

        {/* ==============================================================
            05B — TRUST: PROOF BENTO + FLOATING LIME CURSOR DEPLOYMENTS (Light #FFFFFF)
        =============================================================== */}
        <div id="case-studies">
          <RhBentoWorkGrid
            overline={formatFunnelOverline("05", h?.proofOverline || "INTERACTIVE REFERENCE DEMOS")}
            title={h?.proofTitle || "Live Concept Builds"}
            titleMuted={h?.proofMuted || `& ${data.mainKeyword}`}
            quotes={data.testimonials.map((t) => ({
              quote: t.quote,
              author: t.client,
              role: t.role,
              company: t.company,
            }))}
            items={data.caseStudies.map((study, idx) => ({
              id: `cs-${idx}-${study.title}`,
              title: study.title,
              category: study.category,
              metric: study.metrics,
              description: study.description,
              href: study.demoUrl,
              external: study.demoUrl.startsWith("/") || study.demoUrl.startsWith("http"),
              previewImage: study.previewImage,
              previewAlt: study.previewAlt
                ? `${study.previewAlt} — ${data.mainKeyword} (${data.serviceName})`
                : `${study.title} — ${data.mainKeyword} & ${data.serviceName} Next.js 16 live reference build by Saim Dev`,
              previewWidth: study.previewWidth,
              previewHeight: study.previewHeight,
              tags: study.tech,
            }))}
            cursorLabel="Open Interactive Demo"
          />
        </div>

        {/* ==============================================================
            06 — PROCESS: DARK HORIZONTAL DRAG CAROUSEL + CONIC DIVIDER
        =============================================================== */}
        <RhProcessCarousel
          overline={formatFunnelOverline("06", h?.processOverline || "DELIVERY WORKFLOW")}
          title={h?.processTitle || "Milestone-Led"}
          titleMuted={h?.processMuted || "Engineering Timeline"}
          stagesSummaryCount={String(data.process.length)}
          stagesSummaryTitle="Stages"
          stagesSummaryText={
            h?.processSummary ||
            `Written scope and 50/50 milestone delivery for ${data.serviceName}.`
          }
          stages={data.process.map((step, idx) => ({
            stage: `STAGE 0${idx + 1}`,
            duration: step.duration || "Rapid Sprint",
            title: step.title,
            description: step.description,
            deliverables: [
              data.deliverables[idx]?.title || "Production Next.js Component",
              h?.processStageTag || "Staging Review Link",
            ],
          }))}
          quote={
            data.testimonials[0]?.quote ||
            "Clean Next.js 16 architecture built around a fixed milestone schedule with full repository handover."
          }
          author={data.testimonials[0]?.client || "Architecture Benchmark"}
          role={`${data.testimonials[0]?.role || "Target Pattern"}, ${
            data.testimonials[0]?.company || "Reference Spec"
          }`}
          ctaLabel={data.finalCta.primaryButtonText}
          ctaHref="/contact"
        />

        {/* ==============================================================
            06B — OPTIONAL REGIONAL COVERAGE (UK + US DELIVERY SPECS)
        =============================================================== */}
        {data.geoCoverage && (
          <section className="py-20 px-5 bg-black text-white border-t border-[#202020]">
            <div className="max-w-[1168px] mx-auto">
              <div data-gsap-reveal="" className="max-w-3xl mb-12">
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] block mb-3">
                  {data.geoCoverage.overline || "GLOBAL EDGE DELIVERY · UK & US"}
                </span>
                <h2 className="text-[clamp(28px,3.8vw,44px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  {data.geoCoverage.title}{" "}
                  <span className="text-[#939393]">{data.geoCoverage.titleMuted}</span>
                </h2>
                <p className="mt-3 text-[15px] text-[#939393] leading-[1.6]">
                  {data.geoCoverage.subtitle}
                </p>
              </div>

              <div data-gsap-stagger="" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.geoCoverage.regions.map((region) => (
                  <div
                    key={region.code}
                    className="rh-edge-orbit-card is-lime p-8 rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between gap-6"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span className="px-3 py-1 bg-[#BAFF00] text-[#0D0D0D] text-[11px] font-mono-tech font-semibold uppercase tracking-wider">
                          {region.code}
                        </span>
                        <span className="text-[12px] font-mono-tech text-[#939393]">
                          {region.edgeNodes}
                        </span>
                      </div>
                      <h3 className="text-[22px] font-medium text-white mb-2 tracking-[-0.02em]">
                        {region.name}
                      </h3>
                      <p className="text-[14px] text-[#CBCBCB] leading-[1.65]">
                        {region.summary}
                      </p>
                    </div>
                    <dl className="pt-4 border-t border-[#242424] grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
                      <div>
                        <dt className="text-[11px] font-mono-tech uppercase tracking-wider text-[#939393]">
                          Overlap &amp; Billing
                        </dt>
                        <dd className="text-white mt-0.5">{region.timezone}</dd>
                      </div>
                      <div>
                        <dt className="text-[11px] font-mono-tech uppercase tracking-wider text-[#939393]">
                          Standards &amp; Compliance
                        </dt>
                        <dd className="text-white mt-0.5">{region.compliance}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ==============================================================
            07 — INVESTMENT / PRICING (Odometer Digit-Roll rh.design style)
        =============================================================== */}
        <section className="py-20 sm:py-28 px-5 bg-[#F5F5F7] text-[#0D0D0D]">
          <div className="max-w-[1168px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#595959] block mb-3">
                  {formatFunnelOverline("07", h?.pricingOverline || "TRANSPARENT FIXED PRICING")}
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  {h?.pricingTitle || data.serviceName}{" "}
                  <span className="text-[#939393]">{h?.pricingMuted || "Packages"}</span>
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center p-1 bg-white border border-[#E6E6E6]">
                  {(
                    [
                      { key: "native", label: "Studio Listed" },
                      { key: "GBP", label: "GBP (£)" },
                      { key: "USD", label: "USD ($)" },
                    ] as const
                  ).map((opt) => (
                    <button
                      key={opt.key}
                      type="button"
                      onClick={() => setCurrencyMode(opt.key)}
                      className={`px-3 py-1.5 text-[12px] font-mono-tech transition-colors ${
                        currencyMode === opt.key
                          ? "bg-[#0D0D0D] text-[#BAFF00]"
                          : "text-[#595959] hover:text-[#0D0D0D]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <Link
                  href="/pricing"
                  className="text-[14px] font-medium text-[#0D0D0D] underline underline-offset-4"
                >
                  Compare all studio packages →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.pricing.map((tier, idx) => {
                const parsed = splitPriceForOdometer(tier.price);
                let displayPrefix = parsed.prefix;
                let displayAmount = parsed.amount;

                if (displayAmount !== null && currencyMode !== "native") {
                  const hasPound = tier.price.includes("£");
                  const hasDollar = tier.price.includes("$");
                  if (currencyMode === "USD") {
                    displayPrefix = displayPrefix.replace("£", "$");
                    if (hasPound) displayAmount = Math.round(displayAmount * 1.27);
                  } else if (currencyMode === "GBP") {
                    displayPrefix = displayPrefix.replace("$", "£");
                    if (hasDollar) displayAmount = Math.round(displayAmount * 0.79);
                  }
                }

                return (
                <div
                  key={idx}
                  className={`rh-edge-orbit-card ${
                    tier.popular ? "is-lime" : ""
                  } p-8 border flex flex-col justify-between relative ${
                    tier.popular
                      ? "bg-[#0D0D0D] text-white border-[#0D0D0D]"
                      : "bg-white text-[#0D0D0D] border-[#E6E6E6]"
                  }`}
                >
                  {tier.badge && (
                    <div className="bg-[#BAFF00] text-[#0D0D0D] text-[11px] font-mono-tech font-medium px-3 py-1 self-start mb-4 uppercase tracking-wider">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <h3 className="text-[22px] font-medium mb-2">
                      {tier.name}
                    </h3>
                    <p
                      className={`text-[14px] mb-6 ${
                        tier.popular ? "text-[#939393]" : "text-[#595959]"
                      }`}
                    >
                      {tier.description}
                    </p>
                    <div className="mb-7 pb-6 border-b border-current/10">
                      <span className="text-[36px] md:text-[42px] font-medium tracking-[-0.03em] leading-none block">
                        {displayAmount !== null ? (
                          <RhOdometerNumber
                            prefix={displayPrefix}
                            value={displayAmount}
                            suffix={
                              currencyMode === "USD"
                                ? parsed.suffix.replace("GBP", "USD")
                                : currencyMode === "GBP"
                                  ? parsed.suffix.replace("USD", "GBP")
                                  : parsed.suffix
                            }
                          />
                        ) : (
                          tier.price
                        )}
                      </span>
                      <span
                        className={`text-[12px] block mt-2 ${
                          tier.popular ? "text-[#939393]" : "text-[#595959]"
                        }`}
                      >
                        {currencyMode === "native" && tier.usdEquivalent
                          ? `${tier.usdEquivalent} · ${h?.pricingNote || "Fixed quote • 50/50 milestone terms"}`
                          : h?.pricingNote || "Fixed quote • 50/50 milestone terms"}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feat, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[14px]"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              tier.popular
                                ? "text-[#BAFF00]"
                                : "text-[#0D0D0D]"
                            }`}
                          />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`https://wa.me/923196526604?text=${encodeURIComponent(
                      `Hi Saim, I'd like to enquire about the ${tier.name} (${tier.price}) package for ${data.serviceName}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-6 rounded-full text-[14px] font-medium text-center transition-colors ${
                      tier.popular
                        ? "bg-[#BAFF00] text-[#0D0D0D] hover:bg-[#c8ff33]"
                        : "bg-[#0D0D0D] text-white hover:bg-[#242424]"
                    }`}
                  >
                    {h?.pricingButtonText || "Request Fixed Quote"}
                  </a>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==============================================================
            08 — OBJECTIONS: TECHNICAL FAQ ACCORDION (Dark #0D0D0D)
        =============================================================== */}
        <section
          data-nav="dark"
          className="py-20 sm:py-28 px-5 bg-[#0D0D0D] text-white border-t border-[#202020]"
        >
          <div className="max-w-[1168px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div data-gsap-reveal="" className="lg:col-span-5">
              <span className="text-[12px] uppercase tracking-[0.88px] text-[#BAFF00] block mb-3">
                {formatFunnelOverline("08", h?.faqOverline || "Technical FAQ")}
              </span>
              <h2 className="text-[clamp(30px,4vw,46px)] font-medium tracking-[-0.03em] leading-[1.1] text-white">
                Frequently Asked{" "}
                <span className="text-[#939393]">Questions</span>
              </h2>
              <p className="mt-4 text-[15px] text-[#939393] leading-[1.6]">
                {h?.faqIntro ||
                  `Answers covering scope, turnaround, source ownership, and milestone payments for ${data.serviceName}.`}
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#222222] border-t border-b border-[#222222]">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                    className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <span className="text-[18px] font-medium text-white group-hover:text-[#BAFF00] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        openFaq === idx
                          ? "bg-[#BAFF00] border-[#BAFF00] text-[#0D0D0D]"
                          : "border-[#2A2A2A] text-white group-hover:border-[#BAFF00]"
                      }`}
                    >
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={
                      openFaq === idx
                        ? "mt-3 text-[15px] text-[#CBCBCB] leading-[1.65] pr-8"
                        : "hidden"
                    }
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================================================
            09 — CONVERSION: GET STARTED & RELATED SERVICES (Light #F5F5F7)
        =============================================================== */}
        <section className="py-20 sm:py-28 px-5 bg-[#F5F5F7] text-[#0D0D0D]">
          <div className="max-w-[1168px] mx-auto space-y-20">
            {/* Final Conversion Banner inside Service Page */}
            <div
              className="rounded-3xl bg-black border border-[#222222] text-white p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
              data-gsap-reveal=""
            >
              <div className="max-w-2xl">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#BAFF00] block mb-2">
                  {formatFunnelOverline(
                    "09",
                    h?.bannerTag || "Fixed Quote • 50/50 Milestones • Full Code Handover"
                  )}
                </span>
                <h2 className="text-[clamp(26px,3.4vw,40px)] font-medium tracking-[-0.025em] leading-[1.15]">
                  {data.finalCta.headline}
                </h2>
                <p className="text-[15px] text-[#939393] mt-3 leading-[1.6]">
                  {data.finalCta.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rh-btn-pill inline-flex items-center gap-3 bg-[#BAFF00] text-[#0D0D0D] font-medium text-[15px] px-7 py-4 rounded-full hover:bg-[#c8ff33] transition-colors"
                >
                  <span>{data.finalCta.primaryButtonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="px-6 py-4 rounded-full border border-[#2A2A2A] text-white hover:border-[#BAFF00] hover:text-[#BAFF00] text-[14px] transition-colors"
                >
                  Submit Brief
                </Link>
              </div>
            </div>

            {/* Related Services */}
            {data.relatedServices && data.relatedServices.length > 0 && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <p className="text-[12px] uppercase tracking-[0.88px] text-[#595959]">
                    Explore Related Services
                  </p>
                  <Link
                    href="/services"
                    className="text-[13px] font-medium text-[#0D0D0D] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View All Web Development Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div data-gsap-stagger="" className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {data.relatedServices.map((rel, i) => (
                    <Link
                      key={i}
                      href={rel.href}
                      className="rh-edge-orbit-card p-6 rounded-2xl bg-white border border-[#E6E6E6] hover:border-[#0D0D0D] transition-colors block group"
                    >
                      <p className="text-[17px] font-medium text-[#0D0D0D] group-hover:underline">
                        {rel.name}
                      </p>
                      <p className="text-[14px] text-[#595959] mt-1.5 leading-[1.5]">
                        {rel.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Deep Technical Guides */}
            {data.relatedGuides && data.relatedGuides.length > 0 && (
              <div>
                <p className="text-[12px] uppercase tracking-[0.88px] text-[#595959] mb-5">
                  Next.js Engineering &amp; Cost Guides
                </p>
                <div data-gsap-stagger="" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.relatedGuides.map((guide, i) => (
                    <Link
                      key={i}
                      href={guide.href}
                      className="p-5 rounded-2xl bg-white border border-[#E6E6E6] hover:border-[#0D0D0D] transition-colors flex flex-col justify-between gap-3 group"
                    >
                      <div>
                        <span className="text-[10px] font-mono-tech uppercase tracking-wider text-[#595959] block mb-1.5">
                          {guide.tag}
                        </span>
                        <p className="text-[15px] font-medium text-[#0D0D0D] group-hover:underline leading-snug">
                          {guide.title}
                        </p>
                        <p className="text-[13px] text-[#595959] mt-1.5 leading-[1.5]">
                          {guide.desc}
                        </p>
                      </div>
                      <span className="text-[12px] font-medium text-[#0D0D0D] inline-flex items-center gap-1 pt-2 border-t border-[#E6E6E6]">
                        Read technical guide <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Topic Silo Architecture & AI Knowledge Cluster */}
            <TopicSiloNavigator
              currentPath={`/services/${data.slug}`}
              theme="light"
            />
          </div>
        </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
