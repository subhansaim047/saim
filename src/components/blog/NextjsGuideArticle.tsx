"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, ChevronDown, ChevronUp, Clock } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { BlogSiloNav } from "@/components/blog/BlogSiloNav";
import {
  ArchitecturalDiagram,
  ArchitecturalDiagramKind,
  EngineeringMediaFigure,
  EngineeringVerificationBadge,
  ServiceFitMatrix,
} from "@/components/ui/EditorialVisualPack";

export interface NextjsGuideSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: { title: string; detail: string }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: string;
}

export interface NextjsGuideFaq {
  q: string;
  a: string;
}

export interface NextjsGuideData {
  slug: string;
  categoryLabel: string;
  h1: string;
  breadcrumbTitle: string;
  directAnswer: string;
  publishedDisplay: string;
  updatedDisplay: string;
  readTime: string;
  heroFigure?: {
    src: string;
    alt: string;
    caption: string;
    tag?: string;
  };
  diagramKind?: ArchitecturalDiagramKind;
  keyTakeaways: string[];
  sections: NextjsGuideSection[];
  fitComparison?: {
    title?: string;
    idealFor: string[];
    notFor: string[];
  };
  conclusionHeading: string;
  conclusionParagraphs: string[];
  faqs: NextjsGuideFaq[];
  relatedLinks: { label: string; href: string }[];
}

export const NextjsGuideArticle: React.FC<{ data: NextjsGuideData }> = ({ data }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="rh-page min-h-screen bg-black text-[#E1E0CC] selection:bg-[#BAFF00] selection:text-[#0D0D0D] flex flex-col">
      <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-16 sm:pt-14 sm:pb-20 flex-1 w-full">
        {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/60 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium truncate" aria-current="page">{data.breadcrumbTitle}</li>
          </ol>
        </nav>

        <article>
          {/* Article Hero Header */}
          <header className="mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-[#BAFF00] mb-5">
              {data.categoryLabel}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
              {data.h1}
            </h1>

            <div className="p-4 sm:p-5 rounded-xl border border-[#BAFF00]/30 bg-[#BAFF00]/[0.06] text-white/95 text-sm sm:text-base leading-relaxed mb-6">
              <strong className="text-[#BAFF00]">Direct Answer:</strong> {data.directAnswer}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/75">
              <div className="flex items-center gap-3">
                <img
                  src="/saim-dev-logo.jpg"
                  alt="Saim Dev — Lead Next.js Architect"
                  className="w-9 h-9 rounded-full border border-white/20 object-cover"
                  width={36}
                  height={36}
                  decoding="async"
                />
                <div>
                  <Link href="/about" className="font-semibold text-white hover:text-[#BAFF00] transition-colors">
                    Saim Dev Engineering Team
                  </Link>
                  <span className="block text-white/60 text-[11px]">
                    Next.js 16 &amp; Technical SEO Practice (UK &amp; US)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/60">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Published {data.publishedDisplay} · Updated {data.updatedDisplay}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {data.readTime}
                </span>
              </div>
            </div>

            {/* Hero Editorial Visual (Helpful Media) */}
            {data.heroFigure && (
              <EngineeringMediaFigure
                src={data.heroFigure.src}
                alt={data.heroFigure.alt}
                caption={data.heroFigure.caption}
                tag={data.heroFigure.tag}
                theme="dark"
                priority={true}
              />
            )}

            {/* Key Takeaways Box */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 mb-8">
              <p className="text-xs font-bold tracking-widest uppercase text-[#BAFF00] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#BAFF00]" />
                Key Takeaways for UK &amp; US Teams
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/85">
                {data.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#BAFF00] font-bold">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </header>

          {/* Table of Contents */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">
              In this guide
            </p>
            <ol className="space-y-2">
              {data.sections.map((section, idx) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(section.id)}
                    className="text-sm text-white/85 hover:text-[#BAFF00] transition-colors text-left cursor-pointer flex items-center gap-2.5"
                  >
                    <span className="text-[#BAFF00] font-mono text-[10px] flex-shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span>{section.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("faq-section")}
                  className="text-sm text-white/85 hover:text-[#BAFF00] transition-colors text-left cursor-pointer flex items-center gap-2.5"
                >
                  <span className="text-[#BAFF00] font-mono text-[10px] flex-shrink-0">
                    {String(data.sections.length + 1).padStart(2, "0")}
                  </span>
                  <span>Frequently Asked Questions</span>
                </button>
              </li>
            </ol>
          </div>

          {/* Main Body Sections */}
          <div className="space-y-14">
            {data.sections.map((section, idx) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  <span className="text-[#BAFF00] font-mono text-sm mr-2.5 align-middle">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-white/85 text-sm sm:text-base leading-[1.75]">
                    {p}
                  </p>
                ))}

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3 pt-1">
                    {section.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="p-4 rounded-xl border border-white/10 bg-white/[0.025] text-sm sm:text-base text-white/85 leading-relaxed"
                      >
                        <strong className="text-white font-semibold block mb-1">{b.title}</strong>
                        <span className="text-white/75 text-sm">{b.detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="overflow-x-auto rounded-2xl border border-white/15 bg-[#121214]">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                      <thead>
                        <tr className="border-b border-white/15 bg-white/[0.04]">
                          {section.table.headers.map((h, hIdx) => (
                            <th key={hIdx} className="py-3.5 px-4 font-semibold text-white">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`py-3.5 px-4 ${
                                  cIdx === 0 ? "font-medium text-white" : "text-white/80"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.callout && (
                  <div className="p-4 rounded-xl border border-white/15 bg-white/[0.04] text-sm text-white/90 leading-relaxed">
                    <strong className="text-[#BAFF00]">Engineering Note: </strong>
                    {section.callout}
                  </div>
                )}

                {idx === 1 && data.diagramKind && (
                  <ArchitecturalDiagram kind={data.diagramKind} theme="dark" />
                )}
              </section>
            ))}

            {/* Unique Fit Qualifier Element */}
            {data.fitComparison && (
              <ServiceFitMatrix
                title={data.fitComparison.title}
                idealFor={data.fitComparison.idealFor}
                notFor={data.fitComparison.notFor}
                theme="dark"
              />
            )}

            {/* E-E-A-T Verification & Methodology Block */}
            <EngineeringVerificationBadge
              contextLabel="Prepared & verified by Saim Dev Senior Next.js Architects against production build telemetry"
              theme="dark"
            />

            {/* FAQ Section */}
            <section id="faq-section" className="scroll-mt-28 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {data.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-xl border border-white/10 bg-white/[0.025] overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left text-sm sm:text-base font-medium text-white hover:text-[#BAFF00] transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#BAFF00] shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white/60 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4 text-sm text-white/80 leading-relaxed border-t border-white/10 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Bottom Summary */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">{data.conclusionHeading}</h2>
              {data.conclusionParagraphs.map((cp, idx) => (
                <p key={idx} className="text-white/85 text-sm sm:text-base leading-relaxed">
                  {cp}
                </p>
              ))}
            </section>
          </div>
        </article>

        {/* Conversion CTA Box linking to Pillar Service */}
        <div className="mt-12 rounded-2xl border border-[#BAFF00]/35 bg-[#BAFF00]/[0.06] p-7 mb-10">
          <p className="text-white font-bold text-xl mb-2">
            Need Fixed-Scope Next.js Website Development (UK or US)?
          </p>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Explore full Next.js 16 &amp; React 19 deliverables, GBP (£390–£1,450) and USD ($500–$1,850) fixed milestones, live interactive builds, and clean GitHub source code handover.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/website-development"
              className="inline-flex items-center gap-2 bg-[#BAFF00] text-[#0D0D0D] font-bold px-6 py-3 rounded-full hover:bg-white transition-colors text-sm"
            >
              <span>Explore Next.js Website Development UK &amp; US</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/25 text-white hover:border-[#BAFF00] hover:text-[#BAFF00] font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              <span>Request Fixed Quote</span>
            </Link>
          </div>
        </div>

        <BlogSiloNav currentSlug={data.slug} category="growth" />

        {/* Related Services & Guides */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-[#BAFF00] mb-2">
            Related Engineering Resources
          </p>
          <p className="text-white/80 text-xs sm:text-sm mb-5 font-light">
            Compare Next.js services, sprint hiring, and technical architecture case specs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {data.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#BAFF00]/45 text-white/90 hover:text-white transition-colors flex items-center justify-between gap-2"
              >
                <span>{link.label}</span>
                <span className="text-[#BAFF00] text-xs font-mono shrink-0">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Saim Dev Blog Hub</span>
          </Link>
        </div>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
