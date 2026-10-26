"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, 
  Printer, FileText, ChevronDown, ChevronUp, Scale, Clock, Tag
} from "lucide-react";
import { SiteFooter } from "../SiteFooter";

const PPDS_EXAMPLES = [
  { item: "Pre-boxed sandwiches or wraps", status: "PPDS (Mandatory Full Label)", notes: "Packaged before the customer selects or orders them." },
  { item: "Pots of coleslaw, potato salad or pasta salad", status: "PPDS (Mandatory Full Label)", notes: "Portioned and lidded in advance for grab-and-go display." },
  { item: "Pre-packaged bakery cookies or muffins", status: "PPDS (Mandatory Full Label)", notes: "Enclosed in bags or film wrap before customer ordering." },
  { item: "Burgers made to order across the counter", status: "Non-PPDS (Verbal / Menu Notice)", notes: "Food ordered and wrapped after customer specifies preferences." },
  { item: "Meals delivered by third-party delivery apps", status: "Distance Selling (Pre-order info required)", notes: "Allergens must be provided before ordering and at physical delivery." }
];

const FAQS = [
  {
    q: "What exactly is Pre-Packed for Direct Sale (PPDS) food under Natasha's Law?",
    a: "PPDS food is food that is packaged at the same premises from which it is sold to customers, and is in its packaging before the customer chooses or orders it. This includes grab-and-go sandwiches in plastic wedges, salads in sealed bowls, pre-packed burgers in hot cabinets, and packaged cakes."
  },
  {
    q: "What must be written on a Natasha's Law label?",
    a: "A compliant PPDS label must clearly state: (1) the full legal or customary name of the food, (2) a complete list of ingredients in descending order of weight, and (3) any of the 14 statutory allergens emphasized (e.g. in BOLD, uppercase, or contrasting colour) every time they appear in the ingredients list."
  },
  {
    q: "Does Natasha's Law apply to takeaway meals ordered over the phone or online?",
    a: "Natasha's Law specifically targets PPDS food. For food sold by 'distance communication' (phone, website, or delivery apps), distance selling rules apply: allergen information must be provided before the purchase is concluded (e.g. on your website menu) and at the moment the food is delivered to the customer (e.g. on item stickers or order receipts)."
  },
  {
    q: "What are the legal consequences for failing to comply with PPDS labelling?",
    a: "Failure to comply with Natasha's Law (Food Information (Amendment) Regulations 2019) is a criminal offence. Local authorities can issue improvement notices, and serious breaches risk unlimited financial penalties and criminal prosecution."
  }
];

export const BlogPostNatashasLaw: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>
        <Link
          href="/food-safety-templates/food-allergen-chart"
          className="text-xs bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full font-mono hover:bg-primary/20 transition-all"
        >
          Open 14-Allergen Generator
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium truncate" aria-current="page">Natasha's Law PPDS Guide</li>
          </ol>
        </nav>

        {/* Hero Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
            <Tag className="w-3.5 h-3.5" />
            <span>UK Food Labelling Legislation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Natasha's Law PPDS Food Labelling Guide for UK Takeaways, Cafes &amp; Delis
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            A practical compliance walkthrough on Pre-Packed for Direct Sale (PPDS) labelling requirements, ingredient lists, and allergen emphasis for food businesses.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-3">
            <span>By Saim Dev Engineering Studio</span>
            <span>•</span>
            <span>Updated: 25 October 2026</span>
            <span>•</span>
            <span>Reading time: 7 mins</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="space-y-10 text-sm sm:text-base text-white/80 leading-relaxed">
          {/* ── Key Regulatory Definitions ── */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white/90 mb-4">
            <dl className="space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold mb-1">What is Natasha’s Law?</dt>
                <dd className="text-white/80">
                  Natasha’s Law is the UK Food Information (Amendment) Regulations 2019, which took effect across England, Wales, Scotland, and Northern Ireland on 1 October 2021. It mandates that any food business selling Prepacked for Direct Sale (PPDS) food must display a label with a full ingredients list and clear emphasis of any of the 14 statutory allergens present.
                </dd>
              </div>
              <div className="pt-3 border-t border-white/10">
                <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold mb-1">What is PPDS (Prepacked for Direct Sale)?</dt>
                <dd className="text-white/80">
                  Prepacked for Direct Sale (PPDS) refers to food that is packaged on the same premises from which it is offered to consumers before it is ordered or selected. Common examples include boxed sandwiches, packaged salads, and bakery goods wrapped on-site before display.
                </dd>
              </div>
            </dl>
          </div>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Understanding Natasha's Law: What UK Food Operators Must Know
            </h2>
            <p>
              Natasha's Law (the <em>Food Information (Amendment) (England) Regulations 2019</em>, with reciprocal legislation across Scotland, Wales, and Northern Ireland) requires any business in the UK that produces <strong>Pre-Packed for Direct Sale (PPDS)</strong> food to label it with a full ingredients list and clear allergen highlighting.
            </p>
            <p>
              The legislation was introduced following the tragic death of Natasha Ednan-Laperouse, who suffered a fatal allergic reaction after eating a baguette containing undeclared sesame seeds. The law closed the regulatory loophole where foods pre-packaged on-site were previously exempt from individual labelling.
            </p>
          </section>

          {/* Section 2: PPDS Decision Table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Is Your Food PPDS? Takeaway &amp; Cafe Classification Matrix
            </h2>
            <p>
              The defining test for PPDS is whether the food is enclosed in packaging <strong>before</strong> the consumer orders it. Review this operational reference:
            </p>

            <div className="overflow-x-auto border border-white/10 rounded-2xl">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10 text-white">
                    <th className="p-3.5">Food Product Type</th>
                    <th className="p-3.5">Classification</th>
                    <th className="p-3.5">Labelling Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/70">
                  {PPDS_EXAMPLES.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="p-3.5 font-medium text-white">{row.item}</td>
                      <td className="p-3.5 font-mono text-primary text-xs">{row.status}</td>
                      <td className="p-3.5">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: The 3 Rules of a Compliant Label */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              The Three Mandatory Elements of a PPDS Label
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-primary font-mono text-xs font-bold uppercase">Element 1</span>
                <h3 className="text-base font-bold text-white">Name of the Food</h3>
                <p className="text-xs text-white/70">Must be clear and accurate. Avoid ambiguous trade names without describing what the food actually is.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-primary font-mono text-xs font-bold uppercase">Element 2</span>
                <h3 className="text-base font-bold text-white">Complete Ingredients List</h3>
                <p className="text-xs text-white/70">Listed in descending order by weight. Compound ingredients (e.g. mayonnaise) must break down sub-ingredients.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-primary font-mono text-xs font-bold uppercase">Element 3</span>
                <h3 className="text-base font-bold text-white">Emphasised Allergens</h3>
                <p className="text-xs text-white/70">Any of the 14 regulated allergens must be emphasised in <strong>BOLD</strong> or contrasting typeface every time they appear.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Interactive Tool Cross-Link */}
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Generate Your 14-Allergen Kitchen Chart</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Auditing ingredient specifications? Use our interactive 14-Allergen Matrix Generator to create clean, printable kitchen reference sheets for your kitchen team:
            </p>
            <div className="pt-2">
              <Link
                href="/food-safety-templates/food-allergen-chart"
                className="inline-flex items-center gap-2 bg-primary text-black font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all shadow"
              >
                <span>Launch Free Allergen Chart Tool</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Section 5: FAQs */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Frequently Asked Questions on Natasha's Law
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-sm sm:text-base font-semibold text-white">{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-primary shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 border-t border-white/5 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Interactive Tool Bridge */}
          <section className="mb-8 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                Free Interactive Compliance Tool
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Generate Natasha's Law PPDS Labels Online
              </h3>
              <p className="text-xs text-white/70 max-w-xl leading-relaxed">
                Use our free web tool to generate Prepacked for Direct Sale food labels with automated 14-allergen bolding and standard A4 adhesive sticker layouts.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/tools/ppds-label-generator"
                className="bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs px-5 py-3 rounded-full inline-flex items-center gap-1.5 transition-all shadow-lg"
              >
                <span>PPDS label generator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/tools"
                className="bg-white/10 hover:bg-white/15 text-white text-xs font-medium px-4 py-3 rounded-full transition-all border border-white/15"
              >
                <span>return to all kitchen tools</span>
              </Link>
            </div>
          </section>

          {/* Agency Conversion Bridge */}
          <section className="mt-12 p-8 rounded-3xl bg-[#111113] border border-primary/30 relative overflow-hidden">
            <span className="text-primary text-xs font-mono uppercase tracking-widest block mb-2">
              Next-Gen Restaurant Tech
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Automate allergen filtering on your digital takeaway menu.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl mb-6">
              Saim Dev builds custom online food ordering websites with dynamic allergen toggles so customers can filter out gluten, dairy, or nuts with zero confusion.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20looking%20for%20an%20online%20menu%20website%20with%20allergen%20filtering"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:brightness-110 text-black text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full transition-all"
              >
                Explore Services
              </Link>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
