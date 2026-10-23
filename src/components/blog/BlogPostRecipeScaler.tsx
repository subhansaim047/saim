"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, UtensilsCrossed, Scale, AlertTriangle, 
  CheckCircle2, Printer, ChevronDown, ChevronUp, Clock, MessageSquare 
} from "lucide-react";

const SCALING_PITFALLS = [
  {
    title: "The Spices & Salt Trap (Flavor Intensity)",
    desc: "Spices, pungent aromatics (chilli, cayenne, cloves), and salts do not scale linearly. Doubling a recipe from 4 portions to 40 portions using a 10x multiplier on chilli powder creates an unpalatable, hyper-pungent dish. Salt should initially be scaled to roughly 70%–80% of the mathematical multiplier and adjusted to taste."
  },
  {
    title: "Chemical Leaveners in Baking",
    desc: "Baking powder and baking soda release carbon dioxide based on liquid acidity and bowl surface area. In 8x bulk scaling, full linear multiplying causes doughs to over-expand, collapse, and leave an unpleasant soapy, metallic aftertaste."
  },
  {
    title: "Surface Area & Evaporation Rate",
    desc: "Cooking a 1-litre sauce in a 24cm saucepan evaporates moisture much faster than boiling a 20-litre batch in a commercial stockpot. Liquid reductions in bulk batches require significantly less initial water or stock, or extended simmering times."
  },
  {
    title: "Thickening Agents (Roux & Cornstarch)",
    desc: "Starch gelatinization behaves exponentially in large volumes. Over-multiplying roux or cornstarch slurries results in gummy, cement-like gravies rather than velvety sauces."
  }
];

const FAQS = [
  {
    q: "Why do professional kitchens insist on weight (grams/kg) instead of volume (cups/spoons)?",
    a: "Volume measurements vary drastically based on humidity, settling, and technique. A cup of all-purpose flour can weigh anywhere from 120g to 160g depending on whether it is sifted or packed. A 40g discrepancy in a single cup becomes a catastrophic 800g error when scaling a 20x catering batch."
  },
  {
    q: "How do I calculate the Recipe Conversion Factor (RCF)?",
    a: "The formula is simple: RCF = Desired Yield (portions) ÷ Current Yield (portions). For example, if your base recipe yields 6 portions and you need to cater for 150 guests: RCF = 150 ÷ 6 = 25. Every ingredient weight is then multiplied by 25."
  },
  {
    q: "Do cooking temperatures change when scaling a recipe?",
    a: "Generally, oven baking and frying temperatures remain constant. However, cooking duration increases because a larger thermal mass takes longer to reach safe internal core temperatures (75°C in UK food safety standards). Never increase the oven heat to 'speed up' a large roast, as the exterior will burn before the core cooks."
  },
  {
    q: "How does batch scaling affect portion cost calculations?",
    a: "Bulk scaling usually lowers portion costs because commercial kitchens can purchase ingredients in wholesale bulk packaging (e.g. 25kg sacks of flour or 5L oil tubs rather than 1kg retail boxes). Our interactive tool computes both portion cost and total batch cost simultaneously."
  }
];

export const BlogPostRecipeScaler: React.FC = () => {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-[#E1E0CC]">
      {/* ── Top Header ── */}
      <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </button>
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-white/15" />
          <span className="text-sm font-semibold text-white">Saim Dev Hospitality Systems</span>
        </Link>
      </header>

      {/* ── Hero / Article Header ── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        <header className="mb-12 border-b border-white/10 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Kitchen Operations &amp; Batch Production
            </span>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 8 Min Read
            </span>
            <span className="text-white/40 text-xs">Updated October 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            The Commercial Kitchen Guide to Recipe Scaling: How to Scale from 10 to 500 Portions Without Taste Breakdown
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
            Why linear math destroys bulk catering recipes, how to handle non-linear spices and liquids, 
            and how to generate standardized chef prep cards with our free interactive batch scaler.
          </p>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-12 h-12 rounded-full border border-primary/30 object-cover" />
            <div>
              <div className="text-sm font-bold text-white">Saim Dev Hospitality Systems</div>
              <div className="text-xs text-white/50">Lead Commercial Kitchen Systems &amp; Web Architect</div>
            </div>
          </div>
        </header>

        {/* ── Key Takeaway Alert Box ── */}
        <div className="p-6 rounded-2xl bg-amber-950/30 border border-amber-600/40 text-amber-200 mb-12 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
          <div className="text-sm leading-relaxed">
            <strong className="block text-white font-semibold mb-1 text-base">The Head Chef&apos;s Golden Rule:</strong>
            Cooking for 10 people is culinary chemistry; cooking for 500 people is industrial batch engineering. 
            If you simply multiply every ingredient by 50, your salt, aromatics, and leaveners will overwhelm the food, 
            and your sauce liquid will fail to reduce properly.
          </div>
        </div>

        {/* ── Table of Contents ── */}
        <nav className="p-6 rounded-2xl bg-[#0d0d10] border border-white/10 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 font-bold">Table of Contents</h2>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="#linear-fallacy" className="hover:text-primary hover:underline">&rarr; 1. The Fallacy of Linear Multiplication</a></li>
            <li><a href="#conversion-factor" className="hover:text-primary hover:underline">&rarr; 2. The Recipe Conversion Factor (RCF) Formula</a></li>
            <li><a href="#metric-standardization" className="hover:text-primary hover:underline">&rarr; 3. Grams vs Spoons: Why Volume Fails in Commercial Kitchens</a></li>
            <li><a href="#four-pitfalls" className="hover:text-primary hover:underline">&rarr; 4. The 4 Non-Linear Ingredients (Salt, Spices, Leaveners, Roux)</a></li>
            <li><a href="#sop-prep-cards" className="hover:text-primary hover:underline">&rarr; 5. Standard Operating Procedure (SOP) Prep Cards for Line Cooks</a></li>
            <li><a href="#interactive-tool" className="hover:text-primary hover:underline">&rarr; 6. Free Commercial Kitchen Recipe Scaler &amp; Cost Calculator</a></li>
            <li><a href="#frequently-asked-questions" className="hover:text-primary hover:underline">&rarr; 7. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ── SECTION 1 ── */}
        <section id="linear-fallacy" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            1. The Fallacy of Linear Multiplication
          </h2>
          <p>
            Every junior caterer makes this mistake once: taking an award-winning curry or pasta sauce designed for 6 portions, 
            multiplying every line item by 30 for an evening wedding banquet, and ending up with an over-salted, bitter disaster.
          </p>
          <p>
            Ingredients behave differently in large volumes. Surface contact area with cooking pans decreases per unit volume. 
            Evaporation rates drop dramatically. Alcohol burns off slower. Heat penetration takes twice as long.
          </p>
          <p>
            To scale successfully, commercial kitchens divide ingredients into <strong>Directly Scalable</strong> (proteins, starches, main vegetables) 
            and <strong>Sensory-Dependent</strong> (salt, chili, pungent aromatics, emulsifiers).
          </p>
        </section>

        {/* ── SECTION 2 ── */}
        <section id="conversion-factor" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            2. The Recipe Conversion Factor (RCF) Formula
          </h2>
          <p>
            The mathematical foundation of professional batching begins with the <strong>Recipe Conversion Factor</strong>:
          </p>
          <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/10 space-y-2 font-mono text-sm my-4">
            <div className="text-primary font-bold">RCF = Desired Portions ÷ Original Recipe Portions</div>
            <div className="text-white/60">New Ingredient Amount = Original Weight × RCF</div>
          </div>
          <p>
            Example: A signature slow-cooked lamb tagine recipe produces 8 covers. A corporate booking requests 120 covers:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm text-white/70">
            <li>RCF = 120 ÷ 8 = <strong>15.0</strong></li>
            <li>Diced Lamb: 1.2 kg × 15 = <strong>18.0 kg</strong> (100% linear)</li>
            <li>Couscous: 800g × 15 = <strong>12.0 kg</strong> (100% linear)</li>
            <li>Ground Cinnamon &amp; Cumin: 2 tbsp × 15 = <em>Do NOT multiply linearly. Scale to 60%–70% (approx 9–10 tbsp) and adjust after initial simmer.</em></li>
          </ul>
        </section>

        {/* ── SECTION 3 ── */}
        <section id="metric-standardization" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            3. Grams vs Spoons: Why Volume Fails in Commercial Kitchens
          </h2>
          <p>
            Cups, tablespoons, and pinches have no place in a profitable commercial kitchen. 
            Volume is subjective; weight is objective. A digital scale accurate to 1 gram eliminates line cook variability, 
            prevents costly over-seasoning, and ensures identical taste whether the Head Chef or the Sunday apprentice is running prep.
          </p>
        </section>

        {/* ── SECTION 4 ── */}
        <section id="four-pitfalls" className="space-y-6 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            4. The 4 Non-Linear Ingredients (Salt, Spices, Leaveners, Roux)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {SCALING_PITFALLS.map((p, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <strong className="text-white text-sm font-semibold">{p.title}</strong>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 5 ── */}
        <section id="sop-prep-cards" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            5. Standard Operating Procedure (SOP) Prep Cards for Line Cooks
          </h2>
          <p>
            A recipe should never live solely in an executive chef&apos;s memory. 
            Documenting prep procedures on laminated, print-ready kitchen sheets with exact weights, cooking temperatures, 
            holding limits (63°C+), and allergen tags ensures consistent quality, eliminates food waste, and speeds up service.
          </p>
        </section>

        {/* ── SECTION 6: LIVE INTERACTIVE TOOL ── */}
        <section id="interactive-tool" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121215] to-[#1c1c24] border border-primary/30 text-white space-y-6 shadow-2xl mb-16">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider">
              Free Kitchen Tool
            </span>
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">Batch Scaling &amp; Prep Sheets</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Use the Free Commercial Recipe Batch Scaler &amp; Cost Calculator
          </h3>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Input your base recipe, choose your target portion count (from 1 to 1,000+), and let the system scale every ingredient automatically. 
            Track ingredient portion costs, input kitchen instructions, and print clean laminated prep cards with zero paywall.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/recipe-cost-calculator"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>Launch Recipe Batch Scaler</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>Explore All Commercial Kitchen Tools</span>
            </Link>
          </div>
        </section>

        {/* ── SECTION 7: FAQS ── */}
        <section id="frequently-asked-questions" className="space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            7. Frequently Asked Questions (Recipe Scaling &amp; Catering)
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

        {/* ── BOTTOM CTA ── */}
        <div className="p-8 rounded-3xl bg-[#0a0a0d] border border-white/10 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Running a Takeaway or Catering Group?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            We build high-converting, sub-second online ordering platforms with integrated allergen management, 
            direct WhatsApp catering orders, and zero commission fees.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20custom%20catering%20and%20takeaway%20website"
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
