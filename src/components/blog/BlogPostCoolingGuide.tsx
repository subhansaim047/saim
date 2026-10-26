"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, 
  Printer, FileText, ChevronDown, ChevronUp, Scale, Clock, ThermometerSnowflake,
  Info, AlertOctagon, HelpCircle
} from "lucide-react";
import { SiteFooter } from "../SiteFooter";

const COOLING_METHODS = [
  { 
    method: "Blast Chilling", 
    desc: "Commercial blast chillers use high-velocity cold airflow to pull core temperatures from 70°C to below 3°C within 90 minutes. This is standard industry best practice in cook-chill catering." 
  },
  { 
    method: "Shallow Gastronorm Pans", 
    desc: "Spreading hot batches into clean stainless steel trays at a maximum depth of 50mm (2 inches) increases surface area, allowing heat to escape quickly before refrigeration." 
  },
  { 
    method: "Ice Baths & Cold Water Slurries", 
    desc: "Placing saucepots or soup containers into cold or iced water baths with periodic stirring drops core temperatures safely without heating surrounding kitchen equipment." 
  },
  { 
    method: "Portioning & Slicing Meat Joints", 
    desc: "Dividing large joints of beef, pork, or whole poultry into smaller cuts or individual portions releases trapped core heat far faster than attempting to cool whole roasts." 
  }
];

const FAQS = [
  {
    q: "Is the 90-minute cooling rule a statutory UK law?",
    a: "No. Retained UK legislation (Regulation (EC) No 852/2004, Annex II, Chapter IX) states that food to be held or served chilled must be cooled as quickly as possible to avoid health risks. The 90-minute figure is Food Standards Agency (FSA) guidance in the Safer Food, Better Business (SFBB) system and an industry standard benchmark for cook-chill operations."
  },
  {
    q: "Why can't I put hot steaming food straight into a commercial fridge?",
    a: "Placing hot food directly into a refrigerator elevates the interior air temperature of the unit. This warms neighbouring chilled foods into the Danger Zone (8°C to 63°C), promoting bacterial multiplication and placing heavy mechanical strain on commercial compressor coils."
  },
  {
    q: "Why does cooked rice require a stricter 1-hour cooling protocol?",
    a: "Uncooked rice naturally contains spores of Bacillus cereus, a bacterium whose spores survive boiling temperatures. If rice cools slowly, spores germinate into bacteria and produce emetic toxins (cereulide) that are heat-stable and cannot be destroyed by subsequent reheating. Rice should be cooled within 1 hour and chilled below 5°C."
  },
  {
    q: "What is the legal maximum temperature for cold holding in England?",
    a: "Under Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013, cold food that supports bacterial growth must be kept at or below 8°C. Best practice in professional kitchens is to maintain storage fridges between 0°C and 5°C to provide a safety buffer."
  },
  {
    q: "What should I do if a batch of stew has taken 3 hours to cool to 15°C?",
    a: "If food has lingered in the Danger Zone beyond safe limits without monitored cooling controls, it should be safely discarded. If internal temperature monitoring demonstrates it remained safe and within your HACCP corrective limits, it may be immediately reheated to a core temperature of at least 75°C (82°C in Scotland) or disposed of to eliminate foodborne illness hazards."
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
            A practical guide for UK head chefs, catering managers, and takeaway operators on safe cooling workflows, bacterial growth limits, probe monitoring, and due diligence compliance.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-3">
            <span>By Saim Dev Food Safety Technical Team</span>
            <span>•</span>
            <span>Updated: October 2026</span>
            <span>•</span>
            <span>Reading time: 8 mins</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="space-y-10 text-sm sm:text-base text-white/80 leading-relaxed">

          {/* ── AEO DIRECT ANSWER HIGHLIGHT BOX ── */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-primary/30 relative space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-primary tracking-wider">
              <Info className="w-4 h-4 text-primary shrink-0" />
              <span>Direct Answer: Commercial Food Cooling in the UK</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              In UK commercial kitchens, food cooling is the controlled temperature reduction of hot cooked food to <strong>8°C or below</strong> prior to chilled storage. Retained Regulation (EC) No 852/2004 requires food businesses to cool food <em>as quickly as possible</em> to prevent health hazards. The Food Standards Agency (FSA) recommends placing food into chilled storage within <strong>90 minutes</strong>, while commercial cook-chill operations aim to blast-chill from 70°C to below 3°C within 90 minutes.
            </p>
          </div>

          {/* ── SECTION 1: What Commercial Food Cooling Means ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What Commercial Food Cooling Means in UK Catering
            </h2>
            <p>
              Commercial food cooling is the active management of hot food transitioning from cooking heat (75°C+) down to safe refrigeration temperatures. This process is a Critical Control Point (CCP) in any food safety management system based on HACCP principles.
            </p>
            <p>
              In catering and takeaways, bulk batches of curry, stew, and jointed meats retain significant thermal mass. Leaving these items on ambient prep tables allows them to linger inside the bacterial Danger Zone between <strong>8°C and 63°C</strong>. In this thermal band, bacteria such as <em>Clostridium perfringens</em> and <em>Salmonella</em> double in population every 20 minutes under ambient kitchen warmth.
            </p>
          </section>

          {/* ── SECTION 2: Legal Requirements vs FSA Guidance ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Legal Requirements vs. FSA Guidance and Best Practice
            </h2>
            <p>
              Food business operators must distinguish between statutory legislation, regulatory guidance, and commercial best practice during Environmental Health Officer (EHO) audits:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">1. Statutory Legislation</span>
                <h3 className="text-sm font-semibold text-white">Retained Regulation (EC) 852/2004</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Annex II, Chapter IX mandates that food to be held chilled must be cooled as quickly as possible following cooking to avoid health risks. Schedule 4 of the Food Safety and Hygiene (England) Regulations 2013 sets the legal cold-holding ceiling at 8°C.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase">2. FSA Guidance (SFBB)</span>
                <h3 className="text-sm font-semibold text-white">The 90-Minute Benchmark</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  The Food Standards Agency Safer Food, Better Business (SFBB) pack advises caterers to cool food as quickly as possible and place it into chilled storage within 90 minutes. This is guidance rather than an inflexible statutory limit.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">3. Industry Best Practice</span>
                <h3 className="text-sm font-semibold text-white">Commercial Blast Chilling</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  The UK Cook-Chill Guidelines specify blast-chilling cooked food from 70°C down to 3°C or lower within 90 minutes. This provides an optimal safety margin for central production units.
                </p>
              </div>
            </div>

            <p className="text-xs text-white/60">
              *Regional Variations: In Scotland, temperature rules are enforced under the Food Hygiene (Scotland) Regulations 2006 alongside Food Standards Scotland (FSS) CookSafe guidance.
            </p>
          </section>

          {/* ── SECTION 3: Safe Cooling Workflow ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              The 5-Step Commercial Safe Cooling Workflow
            </h2>
            <p>
              Relying on kitchen ambient air to cool deep pots of food invites compliance failure. Follow this systematic 5-step procedure:
            </p>

            <ol className="space-y-3 pt-1">
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">1</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Divide into Shallow Containers</h3>
                  <p className="text-xs text-white/70 mt-0.5">
                    Decant hot stews and sauces from stockpots into shallow stainless steel gastronorms (maximum depth 50mm). This maximizes surface area for rapid heat loss.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">2</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Portion Large Meat Joints</h3>
                  <p className="text-xs text-white/70 mt-0.5">
                    Dense cuts of roast beef, pork, or whole birds retain heat deep in their muscle core. Carve roasts into smaller cuts before chilling.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">3</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Utilise Ice Baths or Cold Water Immersion</h3>
                  <p className="text-xs text-white/70 mt-0.5">
                    Place containers into sinks filled with iced water. Stir periodically with clean, sanitised utensils to conduct heat away from the core.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">4</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Protect from Cross-Contamination</h3>
                  <p className="text-xs text-white/70 mt-0.5">
                    Cover containers loosely with clean parchment or perforated lids to allow steam to escape while shielding food from airborne contaminants.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">5</span>
                <div>
                  <h3 className="text-sm font-semibold text-white">Transfer to Monitored Cold Storage</h3>
                  <p className="text-xs text-white/70 mt-0.5">
                    Once pre-cooled, transfer containers immediately to refrigerators operating below 5°C, recording time and temperature in your log.
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* ── SECTION 4: High-Risk Foods (Cooked Rice & Bacillus cereus) ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Specific Risks: Cooked Rice and Bacillus Cereus
            </h2>
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
                <AlertOctagon className="w-4 h-4 shrink-0 text-amber-400" />
                <span>Why Rice Requires a Strict 1-Hour Protocol</span>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Raw uncooked rice carries spores of <em>Bacillus cereus</em> that survive boiling temperatures. When cooked rice cools slowly at room temperature, spores germinate into vegetative bacteria that produce an emetic toxin called <strong>cereulide</strong>.
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Cereulide is heat-stable and resists subsequent frying or microwave reheating. It causes acute vomiting and nausea within hours of consumption.
              </p>
              <p className="text-xs sm:text-sm text-white/90 font-medium">
                Mandatory Rice Protocol: Cool cooked rice within 1 hour, refrigerate immediately at or below 5°C, store for no more than 24 hours, and reheat thoroughly only once.
              </p>
            </div>
          </section>

          {/* ── SECTION 5: Temperature Monitoring & Due Diligence ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Temperature Monitoring and Record Keeping
            </h2>
            <p>
              Under Section 21 of the Food Safety Act 1990, documented records provide statutory due diligence evidence. Kitchen supervisors must verify cooling with a calibrated probe thermometer cleaned with food-safe probe wipes.
            </p>
            <p>
              Insert the probe into the thermal centre (thickest part) of the cooling batch, recording:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-white/70">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Date, food item, and batch number</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Initial core cooking temperature (≥75°C)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Time cooling commenced</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Final temperature before refrigeration (&lt;8°C)</span>
              </li>
            </ul>
          </section>

          {/* ── SECTION 6: Corrective Actions ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Corrective Action When Cooling is Too Slow
            </h2>
            <p>
              When food fails to reach target temperatures within planned timeframes, enact documented corrective actions:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 text-xs sm:text-sm text-white/80">
              <p>
                <strong>Under 2 Hours in Danger Zone:</strong> Reheat the batch to a core temperature of 75°C (82°C in Scotland) for 2 minutes to destroy vegetative bacteria, then rapidly cool using shallow pans or blast chilling.
              </p>
              <p>
                <strong>Exceeding 2 Hours Unmonitored:</strong> Discard the food immediately. Do not attempt re-chilling if food has spent uncontrolled hours between 8°C and 63°C, as heat-stable toxins may have developed.
              </p>
            </div>
          </section>

          {/* ── SECTION 7: Site-Specific Food Safety Procedures ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Site-Specific FSMS vs. General Guidance
            </h2>
            <p>
              This guide provides technical information based on UK FSA principles. It does not replace a documented Food Safety Management System (FSMS) tailored to your specific kitchen premises, equipment capacity, and staff volumes.
            </p>
            <p>
              Always consult your local council Environmental Health Officer (EHO) and primary authority advice when validating operational timings in your kitchen.
            </p>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 space-y-1">
              <span className="font-bold text-white block">Official Legislative Sources:</span>
              <p>&bull; Retained Regulation (EC) No 852/2004 on hygiene of foodstuffs.</p>
              <p>&bull; Food Safety and Hygiene (England) Regulations 2013 (Schedule 4: Temperature Control).</p>
              <p>&bull; Food Standards Agency (FSA): Safer Food, Better Business (SFBB) for Caterers.</p>
              <p>&bull; Food Standards Scotland (FSS): CookSafe Food Safety Assurance System.</p>
            </div>
          </section>

          {/* ── SECTION 8: Relevant Internal Links ── */}
          <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <span>Related Kitchen Due Diligence Tools &amp; Logs</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Access free printable sheets and interactive tools to maintain compliant kitchen records:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
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
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">fridge temperature sheet</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
              <Link
                href="/food-safety-templates/freezer-temperature-chart"
                className="p-3.5 rounded-xl bg-black/60 border border-white/10 hover:border-primary/40 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-semibold text-white group-hover:text-primary transition-colors">freezer temperature chart</span>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs px-4 py-2.5 rounded-full transition-all"
              >
                <span>return to all kitchen tools</span>
              </Link>
            </div>
          </section>

          {/* ── SECTION 9: FAQs ── */}
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

          {/* ── REGULATORY DISCLAIMER ── */}
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-[11px] text-white/50 leading-relaxed">
            <p>
              <strong>Food Safety Information Disclaimer:</strong> This guide and associated printable records are provided for general educational purposes and due diligence operational assistance only. They do not constitute official legal advice or formal environmental health compliance verification. Food business operators remain solely responsible under the Food Safety Act 1990 for developing, establishing, and maintaining their own site-specific Food Safety Management System (FSMS) aligned with HACCP principles.
            </p>
          </div>

          {/* ── AGENCY CONVERSION BRIDGE ── */}
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
