"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, Calculator, CheckCircle2, TrendingUp, 
  Coins, Scale, ChevronDown, ChevronUp, AlertCircle, Clock, MessageSquare 
} from "lucide-react";

const COST_LEAKS = [
  { 
    title: "Over-Portioning on the Line", 
    desc: "If line cooks dish out 200g of ribeye instead of the recipe spec 170g, that extra 30g across 100 steaks per night drains over £1,100 of pure profit every month." 
  },
  { 
    title: "Ignoring Cooking Shrinkage & Yield Loss", 
    desc: "1kg of raw beef mince yields roughly 750g cooked after water and fat render out. Calculating burger costs on raw weight artificially inflates your paper margins." 
  },
  { 
    title: "Supplier Invoice Price Creep", 
    desc: "Wholesalers quietly adjust dairy, cooking oil, and poultry prices by 4% to 8% without notice. Without regular recipe cost audits, food cost percentages silently balloon." 
  },
  { 
    title: "Unmonitored Kitchen Waste & Spoilage", 
    desc: "Prepping large batches without accurate sales forecasting results in prep pans expiring and heading straight into the bin." 
  }
];

const FAQS = [
  {
    q: "What is an acceptable food cost percentage for a commercial kitchen?",
    a: "In the UK hospitality industry, the standard benchmark for food cost is between 28% and 32%, which corresponds to a Gross Profit (GP) margin of 68% to 72%. For premium steakhouses or high-cost seafood, food cost may reach 34% (compensated by higher cash contribution margins), while pizza and pasta concepts often operate at 18% to 22% food cost."
  },
  {
    q: "What is the formula to calculate food cost percentage?",
    a: "For an individual recipe: Food Cost Percentage = (Total Cost of Ingredients ÷ Selling Price Excluding VAT) × 100. For overall monthly restaurant operations: Actual Food Cost % = [(Beginning Inventory + Purchases - Ending Inventory) ÷ Total Food Revenue] × 100."
  },
  {
    q: "How do I factor in third-party delivery commissions (Just Eat, Deliveroo, UberEats)?",
    a: "Delivery aggregators charge between 20% and 30% commission plus VAT. To protect your bottom line, either set higher menu prices on third-party delivery apps (a standard practice allowed by platforms) or incentivize direct ordering through your own commission-free takeaway website."
  },
  {
    q: "How often should a restaurant recalculate its recipe costs?",
    a: "Recipe costing should be audited at least quarterly. However, in times of high food inflation or whenever wholesale commodity prices (such as cooking oil, eggs, or beef) shift significantly, high-volume menu items should be reviewed monthly."
  }
];

export const BlogPostFoodCost: React.FC = () => {
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
          <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-7 h-7 rounded-full object-cover border border-white/15" />
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
            <li className="text-white font-medium truncate" aria-current="page">Commercial Kitchen Food Cost Percentage Guide</li>
          </ol>
        </nav>

<div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              Kitchen Economics &amp; Profit Margins
            </span>
            <span className="text-white/40 text-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 9 Min Read
            </span>
            <span className="text-white/40 text-xs">Updated October 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">
            How to Calculate Food Cost Percentage &amp; Protect 70%+ Gross Margins in Your Commercial Kitchen
          </h1>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
            A practical, no-fluff guide to mastering recipe unit economics, factoring in trim shrinkage, 
            and pricing your restaurant or takeaway menu for sustainable profitability.
          </p>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-12 h-12 rounded-full border border-primary/30 object-cover" />
            <div>
              <div className="text-sm font-bold text-white">Saim Dev Hospitality Systems</div>
              <div className="text-xs text-white/50">Lead Commercial Kitchen Systems &amp; Web Architect</div>
            </div>
          </div>
        </header>

        {/* ── Alert Highlight ── */}
        <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-600/40 text-emerald-200 mb-12 flex items-start gap-4">
          <TrendingUp className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
          <div className="text-sm leading-relaxed">
            <strong className="block text-white font-semibold mb-1 text-base">The Hospitality Paradox:</strong>
            Being packed on a Friday night does not ensure you are profitable. In fact, many busy restaurants run themselves out of business 
            because their highest-selling dishes are underpriced by £1.50 to £2.50 per plate, actively subsidizing every customer who walks through the door.
          </div>
        </div>

        {/* ── Table of Contents ── */}
        <nav className="p-6 rounded-2xl bg-[#0d0d10] border border-white/10 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 font-bold">Table of Contents</h2>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li><a href="#the-formula" className="hover:text-primary hover:underline">&rarr; 1. The Core Formulas: Food Cost % vs Gross Profit (GP) %</a></li>
            <li><a href="#shrinkage-yield" className="hover:text-primary hover:underline">&rarr; 2. Yield Factor &amp; Cooking Shrinkage: The Math Most Chefs Skip</a></li>
            <li><a href="#step-by-step-costing" className="hover:text-primary hover:underline">&rarr; 3. Step-by-Step Breakdown: Costing a Signature Dish</a></li>
            <li><a href="#pricing-strategy" className="hover:text-primary hover:underline">&rarr; 4. Menu Engineering: Pricing for Target 70%–75% Margins</a></li>
            <li><a href="#stopping-leaks" className="hover:text-primary hover:underline">&rarr; 5. Stopping the 4 Biggest Kitchen Profit Leaks</a></li>
            <li><a href="#interactive-tool" className="hover:text-primary hover:underline">&rarr; 6. Free Commercial Kitchen Food Cost Calculator</a></li>
            <li><a href="#frequently-asked-questions" className="hover:text-primary hover:underline">&rarr; 7. Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ── SECTION 1 ── */}
        <section id="the-formula" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            1. The Core Formulas: Food Cost % vs Gross Profit (GP) %
          </h2>
          <p>
            Understanding the distinction between <strong>Food Cost %</strong> and <strong>Gross Profit (GP) %</strong> is the foundation of restaurant financial management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-primary font-bold uppercase">Recipe Food Cost Formula</span>
              <div className="text-lg font-bold text-white font-mono">
                Food Cost % = (Portion Cost ÷ Net Selling Price) × 100
              </div>
              <p className="text-xs text-white/60">
                Net Selling Price is menu price minus 20% VAT (Price ÷ 1.2 in the UK).
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0e0e12] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Gross Profit (GP) Margin</span>
              <div className="text-lg font-bold text-white font-mono">
                GP % = 100% - Food Cost %
              </div>
              <p className="text-xs text-white/60">
                If your food cost is 28%, your Gross Profit is 72%. That 72% must pay rent, kitchen wages, utilities, and deliver net profit.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 2 ── */}
        <section id="shrinkage-yield" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            2. Yield Factor &amp; Cooking Shrinkage: The Math Most Chefs Skip
          </h2>
          <p>
            The single most common error in kitchen costing is calculating costs based on <em>As Purchased (AP)</em> weight rather than <em>Edible Portion (EP)</em> weight.
          </p>
          <p>
            Consider fresh chicken breast bought at wholesale for £6.00/kg. When trimmed of cartilage, excess fat, and water, you lose roughly 12% in prep. 
            When grilled, evaporation reduces the cooked weight by another 18%. 
            Your true cost per cooked kilogram is not £6.00 — it is <strong>£8.45/kg</strong>.
          </p>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-white/80">
            True Ingredient Cost = As Purchased Price ÷ Usable Yield Percentage
          </div>
        </section>

        {/* ── SECTION 3 ── */}
        <section id="step-by-step-costing" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            3. Step-by-Step Breakdown: Costing a Signature Cheeseburger
          </h2>
          <p>
            Let&apos;s cost an actual commercial artisan burger to demonstrate how micro-costs add up:
          </p>

          <div className="overflow-x-auto border border-white/10 rounded-2xl my-4">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#1D1D1F] text-white font-mono uppercase text-[10px]">
                <tr>
                  <th className="p-3">Component / Ingredient</th>
                  <th className="p-3">Portion Size</th>
                  <th className="p-3">Bulk Cost</th>
                  <th className="p-3 text-right">Unit Portion Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">Dry-Aged Beef Patty (6oz)</td>
                  <td className="p-3">170g</td>
                  <td className="p-3">£8.50 / kg</td>
                  <td className="p-3 text-right text-emerald-400">£1.45</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">Brioche Burger Bun (Glazed)</td>
                  <td className="p-3">1 unit</td>
                  <td className="p-3">£14.40 / case (48)</td>
                  <td className="p-3 text-right text-emerald-400">£0.30</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">Mature Cheddar Cheese (2 slices)</td>
                  <td className="p-3">40g</td>
                  <td className="p-3">£7.00 / kg</td>
                  <td className="p-3 text-right text-emerald-400">£0.28</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">House Secret Burger Sauce</td>
                  <td className="p-3">30ml</td>
                  <td className="p-3">£4.20 / L</td>
                  <td className="p-3 text-right text-emerald-400">£0.13</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">Crisp Lettuce, Tomato &amp; Pickle</td>
                  <td className="p-3">45g</td>
                  <td className="p-3">Mixed box</td>
                  <td className="p-3 text-right text-emerald-400">£0.16</td>
                </tr>
                <tr>
                  <td className="p-3 text-white font-sans font-semibold">Branded Greaseproof &amp; Takeaway Box</td>
                  <td className="p-3">1 set</td>
                  <td className="p-3">Case of 500</td>
                  <td className="p-3 text-right text-emerald-400">£0.18</td>
                </tr>
                <tr className="bg-white/5 font-bold text-white text-sm">
                  <td colSpan={3} className="p-3 font-sans">Total Cost Per Portion:</td>
                  <td className="p-3 text-right text-primary">£2.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 4 ── */}
        <section id="pricing-strategy" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            4. Menu Engineering: Pricing for Target 70%–75% Margins
          </h2>
          <p>
            With our burger costing exactly <strong>£2.50</strong> to produce, what should you sell it for on your menu to achieve a healthy <strong>72% Gross Margin (28% Food Cost)</strong>?
          </p>
          <div className="p-6 rounded-2xl bg-[#0e0e12] border border-white/10 space-y-3 font-mono text-sm">
            <div className="text-white/60">Required Net Selling Price = Total Cost ÷ Target Food Cost %</div>
            <div className="text-white font-bold text-base">Net Price = £2.50 ÷ 0.28 = £8.93</div>
            <div className="text-white/60">Adding 20% UK VAT: £8.93 × 1.20 = £10.71</div>
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold text-base">
              Recommended Menu Selling Price: £10.95 (delivering 72.5% Gross Margin)
            </div>
          </div>
        </section>

        {/* ── SECTION 5 ── */}
        <section id="stopping-leaks" className="space-y-4 mb-14 text-white/80 leading-relaxed text-base">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            5. Stopping the 4 Biggest Kitchen Profit Leaks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {COST_LEAKS.map((leak, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <strong className="text-white text-sm font-semibold">{leak.title}</strong>
                </div>
                <p className="text-xs text-white/65 leading-relaxed">{leak.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: LIVE INTERACTIVE TOOL ── */}
        <section id="interactive-tool" className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121215] to-[#1c1c24] border border-primary/30 text-white space-y-6 shadow-2xl mb-16">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-primary text-black font-black text-xs uppercase tracking-wider">
              Free Kitchen Tool
            </span>
            <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">Real-Time Yield Economics</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Use the Free Commercial Food Cost &amp; Recipe Margin Calculator
          </h3>

          <p className="text-sm sm:text-base text-white/70 leading-relaxed">
            Stop guessing your food margins. Input ingredients, batch sizes, wholesale pack prices, and wastage factors into our free commercial tool. 
            The system instantly calculates your exact portion cost, food cost percentage, and displays your gross margin in real time.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/food-safety-templates/food-cost-calculator"
              className="bg-primary hover:brightness-110 text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-xl"
            >
              <span>commercial food cost calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/tools"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-full transition-all"
            >
              <span>return to all kitchen tools</span>
            </Link>
          </div>
        </section>

        {/* ── SECTION 7: FAQS ── */}
        <section id="frequently-asked-questions" className="space-y-4 mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-white/10 pb-3">
            7. Frequently Asked Questions (Recipe Costing &amp; Economics)
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
            Want to Stop Losing 30% of Every Order to Third-Party Delivery Apps?
          </h3>
          <p className="text-xs sm:text-sm text-white/60 max-w-xl mx-auto leading-relaxed">
            We develop bespoke, ultra-fast online ordering web apps for UK takeaways and restaurants with zero commission fees, 
            Google Maps local ranking SEO, and direct WhatsApp order flow.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20zero%20commission%20takeaway%20ordering%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-xl"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Your Takeaway Project on WhatsApp (+92 319 6526604)</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};
