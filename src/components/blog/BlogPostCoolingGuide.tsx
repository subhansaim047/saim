"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, 
  Printer, FileText, ChevronDown, ChevronUp, Scale, Clock, ThermometerSnowflake,
  Info, AlertOctagon, HelpCircle
} from "lucide-react";
import { SiteFooter } from "../SiteFooter";

const FAQS = [
  {
    q: "Why must cooked food be cooled quickly?",
    a: "Rapid cooling minimises time in the danger zone between 8°C and 63°C, preventing bacterial multiplication and spore germination."
  },
  {
    q: "What is the safest way to cool a large batch of food?",
    a: "Dividing batches into shallow stainless steel trays (under 50mm depth) and using a blast chiller or ice-water bath with frequent stirring."
  },
  {
    q: "Can a blast chiller be used for cooked food?",
    a: "Yes. Commercial blast chillers are designed specifically to pull hot cooked food down below 3°C within 90 minutes using high-velocity chilled airflow."
  },
  {
    q: "How should cooked rice be cooled?",
    a: "Spread rice into thin layers, cool as quickly as possible—ideally within one hour as advised by the FSA—and chill below 5°C to inhibit Bacillus cereus."
  },
  {
    q: "What should a kitchen record during cooling?",
    a: "Record the date, food item, batch size, cooling start and finish times, final core temperature, and staff initials in your food safety log."
  },
  {
    q: "What should staff do if food does not cool as expected?",
    a: "Execute HACCP corrective actions: subdivide into smaller trays, add ice baths, or safely discard the food if danger zone time limits are breached."
  },
  {
    q: "Is there one cooling time that applies to every UK food business?",
    a: "No single cooling time applies to every UK kitchen. While the FSA recommends cooling food within 90 minutes as standard SFBB best practice, exact cooling procedures depend on food type, portion mass, equipment, and your site-specific HACCP plan."
  }
];

export const BlogPostCoolingGuide: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* Top Bar Navigation */}
      <div className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
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
      </div>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium truncate" aria-current="page">Food Cooling Temperature Guide</li>
          </ol>
        </nav>

        <article className="space-y-10">
          {/* Article Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
              <ThermometerSnowflake className="w-3.5 h-3.5" />
              <span>Commercial Food Safety &amp; Chilling Standards</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Commercial Kitchen Food Cooling Temperature Guide UK
            </h1>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Safe commercial food cooling, temperature control limits, bacterial risk prevention, and UK food hygiene standards.
            </p>
          </div>

          {/* ── OPENING DIRECT-ANSWER SECTION (FIRST 100 WORDS) ── */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-primary/20 text-white/90 leading-relaxed text-sm sm:text-base">
            <span className="text-primary font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Direct Answer: Safe Food Cooling in UK Catering
            </span>
            <p>
              In commercial catering, cooked food must be cooled safely to prevent foodborne illness. Rapid cooling reduces the time high-risk foods spend in the temperature danger zone where pathogenic bacteria multiply quickly. Food businesses across the UK must follow their site-specific food-safety management system alongside official FSA or FSS guidance. Because cooling rates depend on food density and equipment, procedures vary by kitchen.
            </p>
          </div>

          {/* ── SECTION 1: Why Is Rapid Food Cooling Important? ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Why Is Rapid Food Cooling Important?
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              When cooking ends, food temperatures drop into warm ranges that support rapid bacterial growth. Leaving large volumes of hot food to cool slowly at room temperature creates an avoidable hazard. Deep containers insulate the thermal core, allowing warm conditions to persist. High-risk foods like cooked rice, pasta, meat joints, gravies, and stocks require diligent control. Documented temperature records verify safe cooling methods.
            </p>
          </section>

          {/* ── SECTION 2: The Food Temperature Danger Zone ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              The Food Temperature Danger Zone
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              In UK food safety, 8°C to 63°C is the temperature danger zone, where bacteria like <em>Salmonella</em> multiply rapidly.
            </p>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Under Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013 and devolved equivalents, cold holding requires 8°C or below, while hot holding requires 63°C or above (logged in a <Link href="/food-safety-templates/hot-holding-food-temperature-log" className="text-primary hover:underline font-medium">hot holding food temperature log</Link>). This danger zone is an operational benchmark rather than a blanket statutory rule for every stage. Caterers must follow validated HACCP controls referencing official FSA guidance and the <Link href="/food-safety-templates/reheating-food-temperature-guide" className="text-primary hover:underline font-medium">reheating food temperature guide</Link>.
            </p>
          </section>

          {/* ── SECTION 3: A Safe Commercial Food-Cooling Process (10 Steps) ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              A Safe Commercial Food-Cooling Process
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Commercial kitchens should follow a structured 10-step safe cooling procedure:
            </p>
            <ol className="space-y-2 text-sm sm:text-base text-white/80 list-decimal list-inside bg-white/[0.02] p-5 rounded-2xl border border-white/10 leading-relaxed">
              <li><strong className="text-white">Stop heat:</strong> Remove cooked items from heat sources promptly.</li>
              <li><strong className="text-white">Divide batches:</strong> Split large quantities into smaller portions to speed cooling.</li>
              <li><strong className="text-white">Use shallow pans:</strong> Spread food into stainless trays (max depth 50mm).</li>
              <li><strong className="text-white">Allow airflow:</strong> Space containers on open wire racks for unhindered ventilation.</li>
              <li><strong className="text-white">Rapid cooling:</strong> Deploy a commercial blast chiller or ice-water bath.</li>
              <li><strong className="text-white">Shield food:</strong> Cover loosely with clean parchment or vented lids.</li>
              <li><strong className="text-white">Probe core:</strong> Check internal temperatures with a sanitised digital probe.</li>
              <li><strong className="text-white">Cold storage:</strong> Move batches into cold storage once below 8°C.</li>
              <li><strong className="text-white">Corrective action:</strong> If cooling lags, subdivide, refresh ice, or discard.</li>
              <li><strong className="text-white">Review procedures:</strong> Re-evaluate cooling in your <Link href="/food-safety-templates/haccp-plan-builder" className="text-primary hover:underline font-medium">HACCP plan builder</Link> whenever recipes or equipment change.</li>
            </ol>

            <figure className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#141414] p-4 text-center">
              <img
                src="/templates/charts/template-128.webp"
                alt="Commercial Kitchen Food Cooling Time and Temperature Curve Chart"
                width={800}
                height={1131}
                loading="lazy"
                decoding="async"
                className="mx-auto rounded-xl max-h-[460px] w-auto object-contain shadow-lg"
              />
              <figcaption className="mt-3 text-xs text-white/50">
                Figure 1: Safe food cooling temperature progression curve (from 63°C down to 8°C or below within 90 minutes).
              </figcaption>
            </figure>
          </section>

          {/* ── SECTION 4: Why Container Depth and Portion Size Matter ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Why Container Depth and Portion Size Matter
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Heat dissipates slowly through dense foods. In deep stockpots, the centre remains insulated, keeping core temperatures dangerously warm while exterior surfaces cool. Transferring hot food into shallow stainless steel pans (maximum depth 50mm) increases surface area for rapid heat loss. Slicing large meat joints or portioning poultry similarly releases trapped core heat, ensuring even chilling.
            </p>
          </section>

          {/* ── SECTION 5: Blast Chilling and Other Cooling Methods ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Blast Chilling and Other Cooling Methods
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Commercial blast chillers circulate high-velocity cold air to reduce core temperatures from 70°C to below 3°C within 90 minutes, setting the cook-chill benchmark. Alternatively, kitchens use ice-water baths and sanitised cooling paddles for liquid dishes. Never place hot food directly into storage fridges: this elevates cabinet heat, endangers adjacent foods, and strains compressors.
            </p>
          </section>

          {/* ── SECTION 6: Cooling Cooked Rice, Pasta and High-Risk Foods ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Cooling Cooked Rice, Pasta and High-Risk Foods
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Uncooked rice harbours spores of <em>Bacillus cereus</em>, which survive boiling. If cooled slowly, spores germinate and produce heat-stable emetic toxins resisting reheating. Rice must be cooled as quickly as possible—ideally within one hour as advised in FSA Safer Food, Better Business guidance—and chilled at 5°C or lower. Thick gravies, sauces, and large meat joints also retain core heat and should be stirred or sliced before chilling.
            </p>
          </section>

          {/* ── SECTION 7: Temperature Monitoring and Records ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Temperature Monitoring and Records
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Disinfect probe thermometers with food-safe antibacterial wipes before inserting them into the core where cooling is slowest. Log batch names, cooling times, core temperatures, and staff initials on a <Link href="/food-safety-templates/fridge-temperature-record-sheet-pdf" className="text-primary hover:underline font-medium">fridge temperature record sheet</Link> or <Link href="/food-safety-templates/freezer-temperature-chart" className="text-primary hover:underline font-medium">freezer temperature chart</Link>. Maintaining accurate cooling logs provides essential due-diligence evidence for local authority inspections.
            </p>
          </section>

          {/* ── SECTION 8: What to Do If Food Cools Too Slowly ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What to Do If Food Cools Too Slowly
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              When cooling lags, act promptly. Subdivide batches into shallower trays or submerge containers into ice-water baths. If food lingers in the danger zone beyond safe HACCP limits, safely discard it—never guess. Under specific validated HACCP safe methods, slow food may be reheated once to 75°C (82°C in Scotland) before rapid re-chilling; reheating does not destroy heat-stable toxins like <em>Bacillus cereus</em> cereulide. Review processes to prevent recurrence.
            </p>
          </section>

          {/* ── SECTION 9: Cooling Checklist for Commercial Kitchens ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Cooling Checklist for Commercial Kitchens
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Maintain cooling standards across kitchen shifts using this concise checklist, paired with your daily <Link href="/food-safety-templates/opening-and-closing-checklist-template" className="text-primary hover:underline font-medium">opening and closing checklist template</Link>:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-white/80 list-disc list-inside bg-white/[0.02] p-5 rounded-2xl border border-white/10 leading-relaxed">
              <li>Batches split into shallow pans under 50mm depth.</li>
              <li>Blast chiller or ice-water bath utilised.</li>
              <li>Vented covers shield food from contamination.</li>
              <li>Digital probe sanitised before and after use.</li>
              <li>Core temperatures checked at the thickest part.</li>
              <li>Cooling start and finish times recorded.</li>
              <li>Batches moved to cold storage once below 8°C.</li>
              <li>Cold storage kept at 5°C or below.</li>
              <li>Slow batches corrected or discarded promptly.</li>
              <li>Team trained on site-specific HACCP procedures.</li>
            </ul>
          </section>

          {/* ── SECTION 10: England, Wales, Scotland and Northern Ireland ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              England, Wales, Scotland and Northern Ireland
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Food hygiene rules across the UK share core standards, but administration varies:
            </p>
            <ul className="space-y-2 text-sm sm:text-base text-white/80 list-disc list-inside bg-white/[0.02] p-5 rounded-2xl border border-white/10 leading-relaxed">
              <li><strong className="text-white">England:</strong> FSA policy, enforced by local councils under 2013 regulations; voluntary rating display.</li>
              <li><strong className="text-white">Wales:</strong> FSA policy; mandatory hygiene rating display by law.</li>
              <li><strong className="text-white">Scotland:</strong> Food Standards Scotland under 2006 regulations; operates FHIS and CookSafe (82°C reheating standard).</li>
              <li><strong className="text-white">Northern Ireland:</strong> FSA policy; mandatory hygiene rating display applies by law.</li>
            </ul>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Local Environmental Health Officers inspect businesses against these regional frameworks and site-specific HACCP.
            </p>
          </section>

          {/* ── RELATED TEMPLATES & TOOLS ── */}
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Related Kitchen Due Diligence Tools &amp; Logs</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Access free printable sheets and interactive tools to maintain compliant kitchen records:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <Link
                href="/food-safety-templates/food-cooling-poster"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">food cooling poster</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/fridge-temperature-record-sheet-pdf"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">fridge temperature record sheet</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/freezer-temperature-chart"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">freezer temperature chart</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/hot-holding-food-temperature-log"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">hot holding food temperature log</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/reheating-food-temperature-guide"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">reheating food temperature guide</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/haccp-plan-builder"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">HACCP plan builder</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/opening-and-closing-checklist-template"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">opening and closing checklist</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/tools"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">all kitchen tools</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            </div>
          </section>

          {/* ── SECTION 11: Frequently Asked Questions ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Frequently Asked Questions
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

          {/* ── VISIBLE DISCLAIMER ── */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-[11px] text-white/50 leading-relaxed">
            <p>
              <strong>Food Safety Information Disclaimer:</strong> This guide provides general food safety information for commercial kitchens across the UK. It does not replace site-specific food-safety management systems (HACCP or SFBB) or official guidance from the Food Standards Agency, Food Standards Scotland, or your local authority environmental health department. Businesses must validate their own cooling controls to ensure customer safety.
            </p>
          </div>

          {/* ── AGENCY CONVERSION BRIDGE ── */}
          <section className="mt-12 p-8 rounded-3xl bg-[#111113] border border-primary/30 relative overflow-hidden">
            <span className="text-primary text-xs font-mono uppercase tracking-widest block mb-2">
              Modern Web Engineering
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Bespoke websites for UK food businesses.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl mb-6">
              Saim Dev builds high-speed Next.js websites for UK caterers and restaurants, optimized for online ordering and local search.
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
