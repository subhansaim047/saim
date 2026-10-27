"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldAlert, CheckCircle2, AlertTriangle, 
  Printer, FileText, ChevronDown, ChevronUp, Scale, Clock, MessageSquare 
} from "lucide-react";

const ALLERGEN_LIST = [
  { name: "Celery", note: "Often hidden in bouillon cubes, spice rubs, soups, and processed meat seasonings." },
  { name: "Cereals containing Gluten", note: "Wheat, rye, barley, spelt, oats (sauces, batters, flours, soy sauce)." },
  { name: "Crustaceans", note: "Crabs, prawns, lobster, scampi, and Southeast Asian shrimp pastes." },
  { name: "Eggs", note: "Mayonnaise, egg wash on buns, pasta, glazes, dressings, desserts." },
  { name: "Fish", note: "Fish sauce, Worcestershire sauce, pizza toppings, Caesar salad dressing." },
  { name: "Lupin", note: "Flour blends, specialty breads, pastries, and battered goods." },
  { name: "Milk", note: "Butter, ghee, milk powder in buns, cheese, whey proteins, marinades." },
  { name: "Molluscs", note: "Mussels, squid, oysters, oyster sauce, snail escargot." },
  { name: "Mustard", note: "Liquid mustard, mustard flour in curries, sausages, marinades, dressings." },
  { name: "Nuts (Tree Nuts)", note: "Almonds, walnuts, cashews, pecans, Brazil nuts, pistachios, praline." },
  { name: "Peanuts", note: "Peanut butter, groundnut oil, satay sauces, bakery toppings." },
  { name: "Sesame Seeds", note: "Burger buns, tahini, hummus, toasted sesame oil, Asian glazes." },
  { name: "Soya", note: "Soy sauce, edamame, lecithin (E322), vegetable oil blends, textured protein." },
  { name: "Sulphur Dioxide (Sulphites)", note: "Wine, cider, dried fruits, sausages, pickled vegetables (>10mg/kg)." },
];

const FAQS = [
  {
    q: "Is an allergen matrix legally mandatory for UK takeaways and restaurants?",
    a: "Under the Food Information Regulations (FIR) 2014 and EU FIC 1169/2011, food businesses are legally required to declare the presence of any of the 14 major allergens. While the specific format of a matrix is not mandated by name, an up-to-date allergen matrix or recipe specification folder is the universally accepted standard by Environmental Health Officers (EHO) to prove full compliance."
  },
  {
    q: "Can I just tell customers verbally instead of writing an allergen matrix?",
    a: "You can provide allergen information verbally, BUT the law strictly requires clear signage (e.g., 'If you have an allergy, please ask a staff member') pointing customers to that information. Furthermore, when an EHO inspects your premises, you MUST have verifiable written records (like a printed matrix or ingredient file) to prove that your verbal advice is accurate and grounded in verified recipe specs."
  },
  {
    q: "What is the difference between 'Contains' and 'May Contain' on an allergen matrix?",
    a: "'Contains' means the allergen is an intentional ingredient in the dish (e.g. cheddar cheese in a cheeseburger). 'May Contain' is used only when an unavoidable cross-contamination risk remains despite all reasonable preventive controls (e.g. food prepared in a kitchen using peanuts on shared equipment)."
  },
  {
    q: "What are the penalties for non-compliance with Natasha's Law and FIR 2014?",
    a: "Failing to declare allergens correctly can lead to unlimited fines, criminal prosecution of business owners and head chefs, emergency hygiene prohibition orders (immediate shutdown), and civil liability if a customer suffers harm or anaphylaxis."
  }
];

export const BlogPostAllergenMatrix: React.FC = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* ── Top Header ── */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={28} height={28} loading="lazy" decoding="async" className="w-7 h-7 rounded-full object-cover border border-white/15" />
          <span className="text-sm font-semibold text-white">Saim Dev Hospitality Systems</span>
        </Link>
      </header>

      {/* ── Hero / Article Header ── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        <header className="mb-12 border-b border-white/10 pb-10">
                  {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium truncate" aria-current="page">14-Allergen Matrix Guide for UK Restaurants</li>
          </ol>
        </nav>

<div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Legal Compliance &amp; Natasha&apos;s Law
            </span>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 8 Min Read
            </span>
            <span className="text-white/40 text-xs">Updated October 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            How to Create a Compliant 14-Allergen Matrix for UK Restaurants &amp; Takeaways
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Learn how to create a fully compliant 14-allergen matrix for your commercial kitchen. A comprehensive, step-by-step masterclass on auditing recipes, preventing cross-contamination, and presenting accurate allergen declarations for UK restaurants and takeaways.
        </p>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12 rounded-full border border-primary/30 object-cover" />
            <div>
              <div className="text-sm font-bold text-white">Saim Dev Food Safety Architecture</div>
              <div className="text-xs text-white/50">Lead Commercial Kitchen Systems &amp; Web Compliance Engineer</div>
            </div>
          </div>
        </header>

        {/* ── Key Takeaway Alert Box ── */}
        <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-600/40 text-amber-200 mb-12 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
          <div className="text-sm leading-relaxed">
            <strong className="block text-white font-semibold mb-1 text-base">Key Operational Requirement:</strong>
            Under Natasha&apos;s Law (October 2021) and the Food Information Regulations 2014, relying on a chef&apos;s memory 
            during a rush service is a direct regulatory failure. Every commercial kitchen operating in England, Wales, Scotland, 
            and Northern Ireland must maintain an unclipped, verified breakdown of all 14 statutory allergens for every single menu item.
          </div>
        </div>

        {/* ── Key Regulatory Definition ── */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white/90 mb-12">
          <dl className="space-y-2 text-sm leading-relaxed">
            <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold">What are the 14 statutory allergens?</dt>
            <dd className="text-white/80">
              Under UK food law (Regulation (EU) No 1169/2011 retained in UK law and the Food Information Regulations 2014), food businesses are legally required to declare 14 specific allergens whenever used as ingredients: celery, cereals containing gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, tree nuts, peanuts, sesame seeds, soya, and sulphur dioxide (or sulphites above 10mg/kg).
            </dd>
          </dl>
        </div>

        {/* ── Table of Contents ── */}
        <nav className="p-6 rounded-2xl bg-[#0d0d10] border border-white/10 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 font-bold">Table of Contents</h2>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="#why-paper-fails" className="hover:text-primary hover:underline">&rarr; 1. The Legal Reality: Why Hand-Written Notes Fail EHO Audits</a></li>
            <li><a href="#fourteen-allergens" className="hover:text-primary hover:underline">&rarr; 2. The 14 Statutory Allergens &amp; Their Hidden Kitchen Sources</a></li>
            <li><a href="#ppds-vs-loose" className="hover:text-primary hover:underline">&rarr; 3. Prepacked for Direct Sale (PPDS) vs Loose Food Rules</a></li>
            <li><a href="#step-by-step-audit" className="hover:text-primary hover:underline">&rarr; 4. Step-by-Step Blueprint: Building Your Allergen Matrix</a></li>
            <li><a href="#cross-contamination" className="hover:text-primary hover:underline">&rarr; 5. Eliminating Hidden Cross-Contamination Points</a></li>
            <li><a href="#interactive-tool" className="hover:text-primary hover:underline">&rarr; 6. Free Digital 14-Allergen Matrix Generator</a></li>
            <li><a href="#frequently-asked-questions" className="hover:text-primary hover:underline">&rarr; 7. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ── SECTION 1 ── */}
        <section id="why-paper-fails" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            1. The Legal Reality: Why Hand-Written Notes Fail EHO Audits
          </h2>
          <p>
            When an Environmental Health Officer (EHO) conducts an unannounced food hygiene inspection at your takeaway or restaurant, 
            they test staff knowledge on allergen management within the first 15 minutes. Asking a junior line cook, <em>&quot;Does your house burger sauce contain mustard or fish?&quot;</em> 
            is a classic test. If that cook hesitates, guesses, or scrambles through grease-stained handwritten notebooks, your Food Hygiene Rating takes an immediate hit.
          </p>
          <p>
            Food allergies are not an operational inconvenience; they are life-threatening medical realities. In the UK alone, an estimated 2 million people live with diagnosed food allergies, 
            and over 600,000 live with coeliac disease. An Environmental Health Officer will not accept excuses like <em>&quot;The chef was on holiday when the supplier swapped the brand of mayonnaise.&quot;</em>
          </p>
          <p>
            A standardized 14-allergen matrix bridges the gap between supplier invoices, kitchen prep staff, front-of-house service, and the end customer.
          </p>
        </section>

        {/* ── SECTION 2 ── */}
        <section id="fourteen-allergens" className="space-y-6 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            2. The 14 Statutory Allergens &amp; Their Hidden Kitchen Sources
          </h2>
          <p>
            Under UK law, 14 specific ingredients must be highlighted and controlled. Many chefs assume allergens are obvious (e.g. nuts in pesto or milk in cheese). 
            However, most food safety incidents arise from <strong>hidden sub-ingredients</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {ALLERGEN_LIST.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <strong className="text-white text-sm font-semibold">{item.name}</strong>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3 ── */}
        <section id="ppds-vs-loose" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            3. Prepacked for Direct Sale (PPDS) vs Loose Food Rules
          </h2>
          <p>
            Following the tragic death of Natasha Ednan-Laperouse, Natasha&apos;s Law took effect in October 2021, mandating full ingredient and allergen labeling on all 
            <strong> Prepacked for Direct Sale (PPDS)</strong> foods.
          </p>
          <div className="p-5 rounded-2xl bg-[#0c0c10] border border-white/10 space-y-3">
            <h3 className="text-sm font-bold text-primary uppercase font-mono tracking-wider">How to Identify PPDS in Your Business:</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white/70">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>PPDS Food:</strong> Sandwiches, salads, cakes, or pasta pots packaged on site <em>before</em> the customer selects or orders them. These MUST have a label listing the full ingredient breakdown with allergens emphatically bolded.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Loose Food (Made to Order):</strong> Meals prepared after ordering (e.g. burgers cooked to order, hot curries served in takeaway containers). These require an accessible written Allergen Matrix and verbal disclosure notices.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ── SECTION 4 ── */}
        <section id="step-by-step-audit" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            4. Step-by-Step Blueprint: Building Your Allergen Matrix
          </h2>

          <figure className="my-6 rounded-2xl overflow-hidden border border-white/10 bg-[#141414] p-4 text-center">
            <img
              src="/templates/posters/template-146.webp"
              alt="14 Statutory Food Allergens Reference Chart for UK Food Businesses"
              width={800}
              height={1131}
              loading="lazy"
              decoding="async"
              className="mx-auto rounded-xl max-h-[460px] w-auto object-contain shadow-lg"
            />
            <figcaption className="mt-3 text-xs text-white/50">
              Figure 1: Statutory 14 allergens checklist layout for UK commercial kitchens and takeaways.
            </figcaption>
          </figure>
          <p>
            Do not build an allergen matrix by reading recipe titles. You must conduct an exhaustive 4-step forensic ingredient audit:
          </p>

          <ol className="space-y-4 list-decimal pl-5 text-white/80 text-sm sm:text-base">
            <li>
              <strong>Gather Every Physical Ingoing Label:</strong> Inspect the back of every sauce jar, spice tub, cooking oil tin, and bread delivery box. Keep specification sheets in a dedicated folder.
            </li>
            <li>
              <strong>Audit Compounded Ingredients:</strong> If you use Worcester sauce, it contains anchovies (Fish). If you use store-bought curry paste, it may contain mustard flour or shrimp paste (Crustaceans).
            </li>
            <li>
              <strong>Map Each Menu Item Separately:</strong> Document the base protein, bun, cooking oil, seasoning rub, garnishes, and accompanying dipping pots.
            </li>
            <li>
              <strong>Establish an Ingoing Goods Verification Protocol:</strong> When your supplier delivers a different brand of vegetable oil or brioche bun due to stock shortages, the delivery driver won&apos;t alert you. Your chef must check labels on arrival.
            </li>
          </ol>
        </section>

        {/* ── SECTION 5 ── */}
        <section id="cross-contamination" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            5. Eliminating Hidden Cross-Contamination Points
          </h2>
          <p>
            A matrix stating that French fries are &quot;Gluten Free&quot; is dangerous if those fries are submerged in the same commercial fryer used for beer-battered cod and breaded onion rings.
          </p>
          <div className="p-4 rounded-xl bg-red-950/30 border border-red-700/40 text-red-200 text-xs sm:text-sm space-y-2">
            <strong className="block text-red-300 font-bold">Primary Kitchen Cross-Contact Danger Zones:</strong>
            <ul className="list-disc pl-5 space-y-1 text-white/70">
              <li><strong>Deep-Fat Fryers:</strong> Frying oil transfers microscopic gluten, fish, and crustacean proteins instantly. Separate dedicated allergen fryers are required for free-from claims.</li>
              <li><strong>Toasters &amp; Salamanders:</strong> Toasting regular wheat bread leaves crumbs that contaminate gluten-free bread.</li>
              <li><strong>Chopping Boards &amp; Color Coding:</strong> Using purple allergen-dedicated boards and tongs prevents accidental knife cross-contact.</li>
            </ul>
          </div>
        </section>

        {/* ── SECTION 6: LIVE INTERACTIVE TOOL CALLOUT ── */}
        <section id="interactive-tool" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121215] to-[#1c1c24] border border-primary/30 text-white space-y-6 shadow-2xl mb-16">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider">
              Free Kitchen Tool
            </span>
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">Zero Paywall • Instant Export</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Use the Free Interactive 14-Allergen Matrix Generator
          </h3>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Stop fiddling with broken Excel sheets or outdated paper logs. Use our free, browser-based commercial kitchen matrix. 
            Add your dishes, click the 14 statutory allergens to toggle <strong>Contains (C)</strong> or <strong>May Contain (MC)</strong>, 
            and print an unclipped, high-contrast chart formatted specifically for your kitchen wall display.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/food-safety-templates/allergy-matrix"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>free 14-allergen matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/food-safety-templates/food-allergen-chart"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full flex items-center gap-2 transition-all border border-white/20"
            >
              <span>food allergen chart</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-4 py-3.5 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>
        </section>

        {/* ── SECTION 7: FAQS ── */}
        <section id="frequently-asked-questions" className="space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            7. Frequently Asked Questions (EHO Audits &amp; Compliance)
          </h2>

          <div className="space-y-3 pt-2">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-primary" /> : <ChevronDown className="w-4 h-4 shrink-0 text-white/40" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Bottom Navigation ── */}
        <div className="text-center mb-8">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Need an Online Ordering Website with Automated Allergen Filtering?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            We engineer bespoke, sub-second web platforms for UK takeaways and restaurant groups. 
            Features include automated Natasha&apos;s Law customer filters, direct WhatsApp orders, and 0% commission fees.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20takeaway%20website%20with%20automated%20allergen%20filtering"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Project on WhatsApp (+92 319 6526604)</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
