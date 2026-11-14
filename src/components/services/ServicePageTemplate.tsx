"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Code2,
  Check,
  X,
  Building,
  Utensils,
  Stethoscope,
  Scissors,
  Briefcase,
  Laptop,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { RhHeader } from "@/components/rh/RhHeader";
import {
  RhBentoWorkGrid,
  RhHeroPinned,
  RhOdometerNumber,
  RhProblemSolutionDeck,
  RhProcessCarousel,
  RhSystemRows,
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
}

export interface PricingTier {
  name: string;
  price: string;
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
  painPoints: { problem: string; solution: string }[];
  deliverables: ServiceDeliverable[];
  featuresAndBenefits: FeatureBenefit[];
  industries: IndustryApplication[];
  process: ProcessStep[];
  techStack: { name: string; role: string }[];
  caseStudies: CaseStudy[];
  pricing: PricingTier[];
  whyChooseUs: { title: string; desc: string }[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  finalCta: {
    headline: string;
    description: string;
    primaryButtonText: string;
    whatsappText: string;
  };
  relatedServices: { name: string; href: string; desc: string }[];
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

  const whatsappHref = `https://wa.me/923196526604?text=${encodeURIComponent(
    `Hi Saim, I'm interested in ${data.serviceName} (${data.finalCta.whatsappText}) with the $0 upfront offer.`
  )}`;

  const videoType = MOBILE_VIDEO_SLUGS.has(data.slug) ? "mobile" : "cube";

  return (
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D] relative">
      <RhHeader theme="dark" />

      <main>
        {/* ==============================================================
            01 — EXACT rh.design PAGE-OPEN HERO (3D Video + Laser-Draw Strip)
        =============================================================== */}
        <RhHeroPinned
          badge={data.badge}
          title={data.h1}
          subtitle={data.subheading}
          primaryCta={{
            label: "Get a Free Consultation ($0 Upfront)",
            href: "/contact",
          }}
          secondaryCta={{
            label: "View Live Demos",
            href: "#case-studies",
          }}
          videoType={videoType}
          stripLabel={`${data.serviceName} · Verified Proof`}
        />

        {/* ==============================================================
            02 — SCROLLYTELLING BOTTLENECK DECK + GROWING RETENTION CHART
        =============================================================== */}
        <RhProblemSolutionDeck
          overline="01 / PROBLEM VS SOLUTION"
          titleBefore={`Why Your Business Needs`}
          titleStrike="legacy bloat"
          titleOwned={`${data.serviceName}.`}
          subtitle="Outdated templates and fragile CMS builds throttle conversions and lock your revenue into monthly retainers. Explore how custom Next.js engineering resolves every bottleneck."
          cards={data.painPoints.slice(0, 4).map((p, idx) => ({
            source: `Bottleneck #${idx + 1}`,
            time: "Audited",
            title: p.problem,
            detail: p.solution,
            severity: idx % 2 === 0 ? "critical" : "warning",
          }))}
          solutionTitle={`The Saim Dev ${data.serviceName} Architecture`}
          solutionDesc={
            data.painPoints[0]?.solution ||
            "Clean, modular Next.js & Tailwind CSS code built around your brand—delivered live before you spend a penny."
          }
        />

        {/* ==============================================================
            03 — INTERACTIVE SVG LINE-DRAW DELIVERABLES SYSTEM
        =============================================================== */}
        <RhSystemRows
          overline="02 / SCOPE OF WORK"
          title="What Is Included in Our"
          titleMuted={data.serviceName}
          subtitle="Hover any architectural row to inspect the geometric wireframe overlay and deliverable breakdown."
          rows={data.deliverables.map((deliv, idx) => ({
            num: String(idx + 1).padStart(2, "0"),
            title: deliv.title,
            description: deliv.description,
            tags: [data.serviceName, "$0 Upfront Guarantee", "100% Owned"],
          }))}
        />

        {/* ==============================================================
            04 — FEATURES & BENEFITS + 05 — INDUSTRY APPLICATIONS (Light #F5F5F7)
        =============================================================== */}
        <section className="py-20 sm:py-28 px-5 bg-[#F5F5F7] text-[#0D0D0D]">
          <div className="max-w-[1168px] mx-auto space-y-24">
            {/* Features & Benefits */}
            <div>
              <div className="max-w-3xl mb-14">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#595959] block mb-3">
                  03 / Value Proposition
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  What Makes Our Solution{" "}
                  <span className="text-[#939393]">Different?</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.featuresAndBenefits.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-white border border-[#E6E6E6] flex flex-col justify-between"
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
              <div className="max-w-3xl mb-14">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#595959] block mb-3">
                  04 / Market Fit
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  Who Is This Service{" "}
                  <span className="text-[#939393]">Engineered For?</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.industries.map((ind, idx) => (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-white border border-[#E6E6E6] flex flex-col justify-between"
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
            06 — DARK HORIZONTAL DRAG PROCESS CAROUSEL + CONIC DIVIDER
        =============================================================== */}
        <RhProcessCarousel
          overline="05 / DELIVERY WORKFLOW"
          title="Our Risk-Free"
          titleMuted="Engineering Process"
          stagesSummaryCount={String(data.process.length)}
          stagesSummaryTitle="Stages"
          stagesSummaryText={`Fixed scope & zero upfront deposit for ${data.serviceName}.`}
          stages={data.process.map((step, idx) => ({
            stage: `STAGE 0${idx + 1}`,
            duration: step.duration || "Rapid Sprint",
            title: step.title,
            description: step.description,
            deliverables: [
              data.deliverables[idx]?.title || "Production Next.js Component",
              "$0 Upfront Staging Link",
            ],
          }))}
          quote={
            data.testimonials[0]?.quote ||
            "Clean Next.js engineering delivered ahead of schedule with zero monthly retainers."
          }
          author={data.testimonials[0]?.client || "UK Business Director"}
          role={`${data.testimonials[0]?.role || "Founder"}, ${
            data.testimonials[0]?.company || "Verified Client"
          }`}
          ctaLabel={data.finalCta.primaryButtonText}
          ctaHref="/contact"
        />

        {/* 07 — TECH STACK BAR */}
        <section
          data-nav="dark"
          className="py-16 px-5 bg-[#0D0D0D] text-white border-t border-[#202020]"
        >
          <div className="max-w-[1168px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.25em] text-[#BAFF00] block mb-2.5">
                  06 / MODERN STACK
                </span>
                <h2 className="text-[clamp(26px,3.2vw,38px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  Built With Next.js &amp;{" "}
                  <span className="text-[#939393]">Edge Infrastructure</span>
                </h2>
              </div>
              <Link
                href="/technologies"
                className="text-[14px] text-[#CBCBCB] hover:text-[#BAFF00] transition-colors"
              >
                Inspect full technology architecture →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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
          </div>
        </section>

        {/* ==============================================================
            08 — PROOF BENTO + FLOATING LIME CURSOR DEPLOYMENTS
        =============================================================== */}
        <div id="case-studies">
          <RhBentoWorkGrid
            overline="07 / SHIPPED WORK & LIVE DEMOS"
            title="Recent Deployments"
            titleMuted="& Live Proof"
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
              tags: study.tech,
            }))}
            cursorLabel="Open Live Demo"
          />
        </div>

        {/* ==============================================================
            09 — PRICING / INVESTMENT (Odometer Digit-Roll rh.design style)
        =============================================================== */}
        <section className="py-20 sm:py-28 px-5 bg-[#F5F5F7] text-[#0D0D0D]">
          <div className="max-w-[1168px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="text-[11px] font-mono-tech uppercase tracking-[0.3em] text-[#595959] block mb-3">
                  08 / TRANSPARENT FIXED PRICING
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  {data.serviceName}{" "}
                  <span className="text-[#939393]">Packages</span>
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
                        One-time fixed price • $0 upfront deposit
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
                      `Hi Saim, I'd like to get started with ${tier.name} (${tier.price}) for ${data.serviceName} with $0 upfront.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-6 rounded-full text-[14px] font-medium text-center transition-colors ${
                      tier.popular
                        ? "bg-[#BAFF00] text-[#0D0D0D] hover:bg-[#c8ff33]"
                        : "bg-[#0D0D0D] text-white hover:bg-[#242424]"
                    }`}
                  >
                    Start Project ($0 Upfront)
                  </a>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==============================================================
            10 — WHY CHOOSE US & 11 — TESTIMONIALS (Dark #0D0D0D)
        =============================================================== */}
        <section className="py-20 sm:py-28 px-5 bg-[#0D0D0D] text-white border-t border-[#202020]">
          <div className="max-w-[1168px] mx-auto space-y-24">
            {/* Why Choose Us */}
            <div>
              <div className="max-w-3xl mb-14">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#BAFF00] block mb-3">
                  09 / Studio Advantage
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  Why Businesses Choose{" "}
                  <span className="text-[#939393]">Saim Dev</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.whyChooseUs.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-[#161616] border border-[#242424]"
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

            {/* Testimonials */}
            <div>
              <div className="max-w-3xl mb-14">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#BAFF00] block mb-3">
                  10 / Client Feedback
                </span>
                <h2 className="text-[clamp(30px,4vw,48px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  What Our Clients{" "}
                  <span className="text-[#939393]">Say</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-[#161616] border border-[#242424] flex flex-col justify-between"
                  >
                    <p className="text-[15px] text-[#CBCBCB] leading-[1.65] mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="pt-4 border-t border-[#242424]">
                      <p className="text-[15px] font-medium text-white">
                        {t.client}
                      </p>
                      <p className="text-[13px] text-[#939393]">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================================
            12 — FAQS & 13 — RELATED SERVICES (Light #F5F5F7)
        =============================================================== */}
        <section className="py-20 sm:py-28 px-5 bg-[#F5F5F7] text-[#0D0D0D]">
          <div className="max-w-[1168px] mx-auto space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#595959] block mb-3">
                  11 / Clarifications
                </span>
                <h2 className="text-[clamp(30px,4vw,46px)] font-medium tracking-[-0.03em] leading-[1.1]">
                  Frequently Asked{" "}
                  <span className="text-[#939393]">Questions</span>
                </h2>
                <p className="mt-4 text-[15px] text-[#595959] leading-[1.6]">
                  Everything you need to know about our {data.serviceName}{" "}
                  process, fixed pricing, and $0 upfront guarantee.
                </p>
              </div>

              <div className="lg:col-span-7 divide-y divide-[#E6E6E6] border-t border-b border-[#E6E6E6]">
                {data.faqs.map((faq, idx) => (
                  <div key={idx} className="py-6">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={openFaq === idx}
                      className="w-full text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="text-[18px] font-medium text-[#0D0D0D]">
                        {faq.question}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          openFaq === idx
                            ? "bg-[#0D0D0D] border-[#0D0D0D] text-[#BAFF00]"
                            : "border-[#CCCCCC] text-[#0D0D0D]"
                        }`}
                      >
                        {openFaq === idx ? "−" : "+"}
                      </span>
                    </button>
                    {openFaq === idx && (
                      <div className="mt-3 text-[15px] text-[#595959] leading-[1.65] pr-8">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Final Conversion Banner inside Service Page */}
            <div className="rounded-3xl bg-[#0D0D0D] text-white p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-[12px] uppercase tracking-[0.88px] text-[#BAFF00] block mb-2">
                  Zero Risk • 100% Satisfaction
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
                  className="inline-flex items-center gap-3 bg-[#BAFF00] text-[#0D0D0D] font-medium text-[15px] px-7 py-4 rounded-full hover:bg-[#c8ff33] transition-colors"
                >
                  <span>{data.finalCta.primaryButtonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/services"
                  className="px-6 py-4 rounded-full border border-[#2A2A2A] text-white hover:border-white text-[14px] transition-colors"
                >
                  Compare Services
                </Link>
              </div>
            </div>

            {/* Related Services */}
            {data.relatedServices && data.relatedServices.length > 0 && (
              <div>
                <p className="text-[12px] uppercase tracking-[0.88px] text-[#595959] mb-5">
                  Explore Related Services
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {data.relatedServices.map((rel, i) => (
                    <Link
                      key={i}
                      href={rel.href}
                      className="p-6 rounded-2xl bg-white border border-[#E6E6E6] hover:border-[#0D0D0D] transition-colors block group"
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
          </div>
        </section>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
