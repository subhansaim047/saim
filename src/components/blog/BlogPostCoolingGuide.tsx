"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, 
  Printer, FileText, ChevronDown, ChevronUp, Scale, Clock, ThermometerSnowflake
} from "lucide-react";
import { SiteFooter } from "../SiteFooter";

const COOLING_METHODS = [
  { method: "Blast Chilling", desc: "Commercial blast chillers pull cooked food from 70°C down to below 3°C within 90 minutes. Mandatory for high-volume cook-chill catering." },
  { method: "Shallow Trays", desc: "Dividing large pots of stews, gravies, or rice into shallow stainless steel gastros (maximum 50mm depth) increases surface area and speeds cooling." },
  { method: "Ice Bath Rapid Immersion", desc: "Placing soup and sauce containers in an ice-water slurry with occasional stirring drops internal core temperatures safely before refrigeration." },
  { method: "Portioning & Slicing", desc: "Cutting large joints of meat, roast beef, or pork into smaller cuts immediately after cooking releases trapped heat rapidly." }
];

const FAQS = [
  {
    q: "What is the UK legal requirement for cooling cooked food?",
    a: "Under the Food Safety and Hygiene (England) Regulations 2013 and Food Standards Agency guidance, food that is to be held chilled must be cooled as quickly as possible. The accepted UK standard is to cool cooked food from cooking temperature (75°C+) to below 8°C within a maximum of 90 minutes."
  },
  {
    q: "Why can't I put hot food straight into a commercial fridge or walk-in?",
    a: "Placing steaming hot containers directly into a refrigerator raises the ambient temperature inside the unit. This warms up surrounding chilled foods into the 'Danger Zone' (8°C to 63°C), creating ideal conditions for pathogenic bacteria (like Salmonella and Listeria) to multiply on already-stored foods."
  },
  {
    q: "What is the '2-hour / 4-hour rule' in food safety?",
    a: "The rule dictates how long potentially hazardous food can remain at room temperature: (1) Under 2 hours: food can be used immediately or chilled below 8°C. (2) Between 2 and 4 hours: food can still be safely consumed immediately but cannot be re-chilled. (3) After 4 hours: food must be thrown away immediately as toxin-producing bacteria may have reached dangerous concentrations."
  },
  {
    q: "Why is cooling cooked rice particularly dangerous in commercial takeaways?",
    a: "Uncooked rice contains spores of Bacillus cereus, a bacterium that can survive boiling. If cooked rice is left cooling slowly at room temperature, the spores germinate into bacteria that produce heat-stable toxins capable of causing severe food poisoning. Rice must be cooled within 1 hour and chilled below 4°C."
  }
];

export const BlogPostCoolingGuide: React.FC = () => {
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
          <span>Back to Articles</span>
        </Link>
        <Link
          href="/food-safety-templates/food-cooling-poster"
          className="text-xs bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full font-mono hover:bg-primary/20 transition-all"
        >
          Print Food Cooling Poster
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
            <li className="text-white font-medium truncate" aria-current="page">Food Cooling Temperature Guide</li>
          </ol>
        </nav>

        {/* Hero Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
            <ThermometerSnowflake className="w-3.5 h-3.5" />
            <span>Temperature Control &amp; Chilling Standards</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Commercial Kitchen Food Cooling Guide: The UK 90-Minute Rule &amp; Temperature Limits
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            Everything UK restaurant and takeaway managers need to know about rapidly reducing food temperatures, avoiding the Danger Zone, and passing EHO chilling audits.
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
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              The Science of Rapid Food Cooling in Commercial Hospitality
            </h2>
            <p>
              In commercial food preparation, the temperature range between <strong>8°C and 63°C</strong> is known as the <em>Danger Zone</em>. In this thermal band, foodborne bacteria such as <em>Clostridium perfringens</em>, <em>Bacillus cereus</em>, and <em>Salmonella</em> double in population every 20 minutes.
            </p>
            <p>
              When hot dishes (stews, curries, roast meats, broths) are left to cool on kitchen counters at ambient temperature, they spend hours in this danger zone. UK food hygiene regulations strictly demand that cooked food intended for cold storage must be cooled to <strong>8°C or below within 90 minutes</strong>.
            </p>
          </section>

          {/* Section 2: Approved Cooling Techniques */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Approved Kitchen Methods to Achieve the 90-Minute Target
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COOLING_METHODS.map((m, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{m.method}</span>
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: The Danger Zone Visual Matrix */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              UK Temperature Control Critical Limits
            </h2>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30">
                  <span className="text-xs font-mono uppercase text-red-300">Cooking Core</span>
                  <div className="text-2xl font-black text-white mt-1">75°C+</div>
                  <span className="text-[10px] text-red-200">Destroys active bacteria</span>
                </div>
                <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30">
                  <span className="text-xs font-mono uppercase text-amber-300">The Danger Zone</span>
                  <div className="text-2xl font-black text-white mt-1">8°C &ndash; 63°C</div>
                  <span className="text-[10px] text-amber-200">Rapid bacterial growth</span>
                </div>
                <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30">
                  <span className="text-xs font-mono uppercase text-blue-300">Cold Holding</span>
                  <div className="text-2xl font-black text-white mt-1">&le; 4°C</div>
                  <span className="text-[10px] text-blue-200">Legal limit 8°C max</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Cross Links */}
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Printable Cooling &amp; Fridge Logs</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Download and print our verified temperature monitoring sheets to keep on-site records for your daily SFBB pack:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link
                href="/food-safety-templates/food-cooling-poster"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">Food Cooling Procedures Poster</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/fridge-temperature-record-sheet-pdf"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">Fridge &amp; Chiller Record Sheet</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            </div>
          </section>

          {/* Section 5: FAQs */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Frequently Asked Questions on Commercial Food Cooling
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

          {/* Agency Conversion Bridge */}
          <section className="mt-12 p-8 rounded-3xl bg-[#111113] border border-primary/30 relative overflow-hidden">
            <span className="text-primary text-xs font-mono uppercase tracking-widest block mb-2">
              Fast, Modern Web Architecture
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Elevate your food brand with custom web engineering.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl mb-6">
              Saim Dev builds bespoke Next.js websites for UK catering and restaurant operators, optimized for sub-second speeds, mobile ordering, and maximum local search visibility.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I%20am%20interested%20in%20a%20website%20for%20my%20catering%20or%20restaurant%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:brightness-110 text-black text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-lg"
              >
                <span>Discuss on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full transition-all"
              >
                View Services &amp; Packages
              </Link>
            </div>
          </section>
        </article>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
