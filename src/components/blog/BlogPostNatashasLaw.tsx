"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, 
  Printer, FileText, ChevronDown, ChevronUp, Scale, Clock, Tag,
  Info, AlertOctagon, HelpCircle, ExternalLink
} from "lucide-react";
import { SiteFooter } from "../SiteFooter";

const FAQS = [
  {
    q: "What does PPDS mean?",
    a: "PPDS stands for Prepacked for Direct Sale. It refers to food that is packaged on the same premises from which it is sold to consumers, before the customer selects or orders it."
  },
  {
    q: "What is Natasha’s Law?",
    a: "Natasha’s Law is the UK Food Information (Amendment) Regulations 2019, which took effect on 1 October 2021. It requires food businesses in England, Wales, Scotland, and Northern Ireland to provide a full ingredients list and clear allergen emphasis on all PPDS food."
  },
  {
    q: "Does PPDS food need an ingredients list?",
    a: "Yes. Every PPDS food item must display a complete ingredients list directly on the package, with ingredients listed in descending order by weight as recorded during recipe preparation."
  },
  {
    q: "How must allergens be emphasised?",
    a: "Any of the 14 statutory allergens present in the food must be visually emphasised within the ingredients list every time they appear, such as by using bold typeface, capital letters, or contrasting text styling."
  },
  {
    q: "Is a sandwich prepared and wrapped in a cafe PPDS food?",
    a: "Yes. If a sandwich is prepared, wrapped in packaging (such as film, plastic wedges, or paper bags), and placed in a display fridge before a customer orders it, it is classified as PPDS."
  },
  {
    q: "Are online takeaway orders covered by the same rules?",
    a: "No. Distance selling (online, phone, and app orders) follows separate rules under the Food Information Regulations. Allergen information must be made available before purchase is completed and provided in writing at delivery or collection."
  },
  {
    q: "What happens if a supplier changes an ingredient?",
    a: "If a supplier or ingredient brand changes, operators must immediately check product specifications, update recipe sheets, and print revised packaging labels before selling newly prepared batches."
  },
  {
    q: "Can a label generator replace food-safety checks?",
    a: "No. Digital label generators format text and assist with layout, but the food business operator remains legally responsible for verifying actual ingredients, recipe accuracy, and supplier allergen specifications."
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
          href="/tools/ppds-label-generator"
          className="text-xs bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full font-mono hover:bg-primary/20 transition-all"
        >
          Free PPDS Label Generator
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
            <li className="text-white font-medium truncate" aria-current="page">Natasha&apos;s Law PPDS Guide</li>
          </ol>
        </nav>

        {/* Hero Article Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-primary uppercase bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
            <Tag className="w-3.5 h-3.5" />
            <span>UK Food Labelling Legislation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Natasha’s Law PPDS Food Labelling Guide for UK Food Businesses
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            A practical compliance walkthrough on Prepacked for Direct Sale (PPDS) labelling requirements, ingredient declarations, and mandatory allergen emphasis for UK food businesses.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-3">
            <span>By Saim Dev Engineering Studio</span>
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
              <span>Direct Answer: What Is Natasha’s Law and PPDS?</span>
            </div>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Prepacked for Direct Sale (PPDS) food is food packaged on the premises before a customer selects or orders it. Under Natasha’s Law (the Food Information Amendment Regulations 2019), any UK food business selling PPDS food—including cafes, bakeries, delis, restaurants, and takeaways—must clearly label each item with the name of the food, a complete ingredients list, and any of the 14 statutory allergens emphasised. Businesses must verify current official guidance for their specific operational circumstances.
            </p>
          </div>

          {/* ── SECTION 1: What Is PPDS Food? ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What Is PPDS Food?
            </h2>
            <p>
              Prepacked for Direct Sale (PPDS) food is packaged before selection on the same premises where sold directly to consumers.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Display Sandwiches &amp; Wraps:</strong> Sandwiches wrapped in a cafe before customer arrival.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Pre-Boxed Salads:</strong> Salads and pasta pots portioned and lidded in advance.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Packaged Bakery Goods:</strong> Cookies or pasties wrapped on-site for retail sale.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Takeaway Collection Items:</strong> Food packaged on-site by a takeaway for customer pickup.</span>
              </li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <strong className="text-xs text-white block">Non-Prepacked Food:</strong>
                <span className="text-xs text-white/70">Loose counter food sold without packaging.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <strong className="text-xs text-white block">Packed After Ordering:</strong>
                <span className="text-xs text-white/70">Items packaged after customer order, like bespoke sandwiches.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <strong className="text-xs text-white block">Prepacked (Off-Site):</strong>
                <span className="text-xs text-white/70">Food packaged off-site under standard prepack regulations.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                <strong className="text-xs text-white block">Distance Selling:</strong>
                <span className="text-xs text-white/70">Food ordered remotely via phone, website, or delivery apps.</span>
              </div>
            </div>
          </section>

          {/* ── SECTION 2: What Must a PPDS Label Include? ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              What Must a PPDS Label Include?
            </h2>
            <p>
              Under UK food labelling rules, a compliant PPDS label must present mandatory details legibly on the package:
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>1. Name of the Food</span>
                </h3>
                <p className="text-xs text-white/70">Clear descriptive name accurately identifying the product.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>2. Complete Ingredients List</span>
                </h3>
                <p className="text-xs text-white/70">All ingredients listed in descending order by preparation weight.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>3. Emphasised Statutory Allergens</span>
                </h3>
                <p className="text-xs text-white/70">Highlighted in BOLD or contrasting text every time they appear.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>4. Legibility &amp; Business Details</span>
                </h3>
                <p className="text-xs text-white/70">Easily readable text with responsible operator contact details where required.</p>
              </div>
            </div>

            <p className="text-xs text-white/60">
              *Official guidance allows flexibility in physical label layout (such as printed adhesive labels or wrappers), provided required elements remain prominent and legible.
            </p>
          </section>

          {/* ── SECTION 3: The 14 Statutory Allergens ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              The 14 Statutory Allergens
            </h2>
            <p>
              UK food regulations require clear declaration of the 14 statutory allergens:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/80 pt-1">
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>1. Celery:</strong> Stalks, leaves, seeds, salt.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>2. Cereals with Gluten:</strong> Wheat, rye, barley, oats.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>3. Crustaceans:</strong> Prawns, crabs, lobsters.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>4. Eggs:</strong> Fresh, liquid, and dried egg.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>5. Fish:</strong> Fresh, canned fish, fish sauces.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>6. Lupin:</strong> Lupin flour, seeds, bakery blends.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>7. Milk:</strong> Dairy milk, cheese, butter, cream.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>8. Molluscs:</strong> Mussels, oysters, squid, clams.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>9. Mustard:</strong> Liquid, powder, seeds, dressings.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>10. Tree Nuts:</strong> Almonds, walnuts, cashews, hazelnuts.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>11. Peanuts:</strong> Groundnuts, peanut butter, oils.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>12. Sesame:</strong> Sesame seeds, tahini, oils.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>13. Soya:</strong> Soybeans, soy sauce, tofu, lecithin.</div>
              <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5"><strong>14. Sulphites:</strong> Concentrations &gt;10 mg/kg or 10 mg/l.</div>
            </div>

            <p className="text-xs text-white/70 pt-1">
              Allergens must be identified when present as ingredients or sub-ingredients. Explore our free <Link href="/food-safety-templates/food-allergen-chart" className="text-primary hover:underline font-semibold">food allergen chart</Link> and structured <Link href="/food-safety-templates/allergy-matrix" className="text-primary hover:underline font-semibold">14-allergen matrix</Link>.
            </p>
          </section>

          {/* ── SECTION 4: Compound Ingredients and Hidden Allergens ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Compound Ingredients and Hidden Allergens
            </h2>
            <p>
              A compound ingredient consists of multiple sub-ingredients. Under Natasha’s Law, kitchen teams cannot list only the compound name—they must declare sub-ingredients and identify hidden allergens.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 text-xs sm:text-sm text-white/80">
              <span className="font-bold text-white block">Common Kitchen Compound Ingredients:</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/70">
                <li>&bull; <strong>Mayonnaise:</strong> Pasteurised egg, mustard.</li>
                <li>&bull; <strong>Pesto:</strong> Hard cheese (milk), pine nuts, cashews.</li>
                <li>&bull; <strong>Bread:</strong> Wheat gluten, soya, sesame seeds.</li>
                <li>&bull; <strong>Stock cubes:</strong> Celery, wheat gluten.</li>
                <li>&bull; <strong>Commercial sauces:</strong> Soya, fish, wheat, mustard, sulphites.</li>
                <li>&bull; <strong>Spice mixes:</strong> Mustard powder, celery seeds.</li>
                <li>&bull; <strong>Chocolate:</strong> Milk powder, soya lecithin.</li>
                <li>&bull; <strong>Marinades:</strong> Soy sauce (soya, wheat), fish sauce.</li>
                <li>&bull; <strong>Worcestershire sauce:</strong> Barley gluten, anchovies (fish).</li>
                <li>&bull; <strong>Composite fillings:</strong> Chicken mayo with egg and mustard.</li>
              </ul>
            </div>

            <p className="text-xs sm:text-sm text-white/70">
              Businesses must verify physical supplier trade specifications rather than guessing contents.
            </p>
          </section>

          {/* ── SECTION 5: How to Create a PPDS Label ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              How to Create a PPDS Label
            </h2>
            <p>
              Follow these 9 steps to produce compliant PPDS food labels:
            </p>

            <ol className="space-y-1.5 pt-1 text-xs sm:text-sm">
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">1</span>
                <div><strong>Identify product:</strong> Confirm item meets PPDS criteria before packaging.</div>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">2</span>
                <div><strong>Record ingredients:</strong> Document all recipe ingredients and compound components.</div>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">3</span>
                <div><strong>Check specifications:</strong> Inspect manufacturer trade labels and data sheets.</div>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">4</span>
                <div><strong>Identify allergens:</strong> Flag any of the 14 allergens in items and sub-ingredients.</div>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">5</span>
                <div><strong>Order ingredients:</strong> Arrange ingredients in descending order by weight.</div>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">6</span>
                <div><strong>Emphasise allergens:</strong> Highlight allergens in BOLD capitals or contrasting text.</div>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">7</span>
                <div><strong>Add business details:</strong> Include food name and responsible operator address.</div>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">8</span>
                <div><strong>Check before printing:</strong> Proofread completed labels against physical kitchen stock.</div>
              </li>
              <li className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-mono text-xs flex items-center justify-center shrink-0 font-bold">9</span>
                <div><strong>Review recipe changes:</strong> Re-audit labels whenever ingredients or suppliers change.</div>
              </li>
            </ol>
          </section>

          {/* ── SECTION 6: PPDS Labelling Examples ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              PPDS Labelling Examples
            </h2>
            <p>
              Review these practical PPDS labelling examples showing proper ingredient ordering and allergen emphasis:
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1 text-xs">
                <span className="font-bold text-primary block">Example 1: Chicken Salad Sandwich</span>
                <p><strong>Ingredients:</strong> White bread [WHEAT flour, water, yeast, salt, SOYA flour], roast chicken breast (32%), mayonnaise [oil, water, pasteurised EGG, vinegar, MUSTARD flour], lettuce.</p>
                <p className="text-white/60"><strong>Allergens:</strong> WHEAT, SOYA, EGG, MUSTARD.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1 text-xs">
                <span className="font-bold text-primary block">Example 2: Basil Pesto Pasta Salad</span>
                <p><strong>Ingredients:</strong> Penne pasta (52%) [durum WHEAT semolina, water], basil pesto (18%) [oil, basil, Parmesan cheese (MILK), pine NUTS, garlic, salt], tomatoes.</p>
                <p className="text-white/60"><strong>Allergens:</strong> WHEAT, MILK, NUTS.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 space-y-1 text-xs">
                <span className="font-bold text-primary block">Example 3: Almond Tart</span>
                <p><strong>Ingredients:</strong> Pastry [WHEAT flour, butter (MILK), sugar, EGG], frangipane [ground ALMONDS (NUTS) (24%), butter (MILK), EGG], jam, flaked ALMONDS (NUTS).</p>
                <p className="text-white/60"><strong>Allergens:</strong> WHEAT, MILK, EGG, ALMONDS (NUTS).</p>
              </div>
            </div>

            <p className="text-xs text-white/60">
              *Always verify actual delivery packaging, as commercial formulations vary between brands.
            </p>
          </section>

          {/* ── SECTION 7: PPDS and Online or Telephone Orders ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              PPDS and Online or Telephone Orders
            </h2>
            <p>
              Food sold through distance selling (websites, phone orders, and delivery apps) is governed by separate Food Information Regulations.
            </p>
            <p>
              When selling food remotely:
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>Before Purchase:</strong> Allergen information must be available before payment (via online menu filters or verbal declaration over the phone).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span><strong>At Delivery or Collection:</strong> Clear written allergen information must accompany the food at physical handover (such as printed receipts or item container stickers).</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-1.5 text-xs text-white/70">
              <p><strong>Key distinctions:</strong> In-store PPDS requires full labels affixed directly. Distance selling requires remote declarations plus written handover notices. Items packaged after customer choice follow non-prepacked rules.</p>
            </div>
          </section>

          {/* ── SECTION 8: When a Recipe or Supplier Changes ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              When a Recipe or Supplier Changes
            </h2>
            <p>
              Ingredient substitutions create serious risk of accidental allergen exposure. Review product labels immediately when:
            </p>

            <ul className="space-y-1.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Brand changes:</strong> Different brands use different oils, thickeners, or fillers.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Supplier changes:</strong> Wholesalers substitute equivalent product lines without notice.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Recipe changes:</strong> Modifying dressings or seasonings alters ingredient weight order.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Seasoning changes:</strong> Switching bouillon or sauces can introduce celery, gluten, or soya.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Prepacking transitions:</strong> Items pre-portioned into grab-and-go packaging become PPDS.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Cross-contact warnings:</strong> Manufacturers update factory allergen notices.</span>
              </li>
            </ul>

            <p className="text-xs text-white/60">
              Read our guide on <Link href="/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants" className="text-primary hover:underline font-semibold">how to create a compliant 14-allergen matrix</Link>.
            </p>
          </section>

          {/* ── SECTION 9: Use the Free PPDS Label Generator ── */}
          <section className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                Free Interactive Compliance Tool
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Use the Free PPDS Label Generator
              </h2>
              <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
                Use our <Link href="/tools/ppds-label-generator" className="text-amber-300 font-bold underline hover:text-white transition-colors">free PPDS label generator</Link> to create clean, printable labels with automated 14-allergen bolding for standard adhesive sticker sheets.
              </p>
              <p className="text-xs text-white/60 max-w-xl leading-relaxed">
                While this PPDS labelling tool assists with formatting, food businesses remain responsible for verifying ingredients, supplier data, and official guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/tools/ppds-label-generator"
                className="w-full sm:w-auto text-center bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <span>Launch PPDS Label Tool</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/tools"
                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full transition-all border border-white/15"
              >
                <span>All Kitchen Tools</span>
              </Link>
              <Link
                href="/blogs"
                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-full transition-all border border-white/15"
              >
                <span>All Food Safety Blog Articles</span>
              </Link>
            </div>
          </section>

          {/* ── SECTION 10: Frequently Asked Questions ── */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Frequently Asked Questions About Natasha’s Law
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

          {/* ── SECTION 11: Official Sources & Disclaimer ── */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/60 space-y-1.5">
            <span className="font-bold text-white block">Official Guidance Sources:</span>
            <p>&bull; <a href="https://www.food.gov.uk/safety-hygiene/food-allergy-and-intolerance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Food Standards Agency (FSA): Introduction to allergen labelling and PPDS guidance</a></p>
            <p>&bull; <a href="https://www.foodstandards.gov.scot/business-and-industry/safety-and-regulation/food-hygiene-information-scheme" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Food Standards Scotland (FSS): Prepacked for Direct Sale food guidance</a></p>
            <p>&bull; <a href="https://www.gov.uk/food-labelling-and-packaging" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GOV.UK: Food labelling and packaging requirements for UK businesses</a></p>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-[11px] text-white/50 leading-relaxed">
            <p>
              <strong>Food Safety Information Disclaimer:</strong> This guide provides general information and does not replace current official guidance, a site-specific food-safety management system or advice from the relevant local authority.
            </p>
          </div>

          {/* ── AGENCY CONVERSION BRIDGE ── */}
          <section className="mt-12 p-8 rounded-3xl bg-[#111113] border border-primary/30 relative overflow-hidden">
            <span className="text-primary text-xs font-mono uppercase tracking-widest block mb-2">
              Next-Gen Hospitality Engineering
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Automate allergen filtering on your digital takeaway menu.
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl mb-6">
              Saim Dev builds custom Next.js websites for independent UK takeaways and restaurants with dynamic allergen toggles so customers can filter dishes safely with zero confusion.
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
                Explore Web Services
              </Link>
            </div>
          </section>

        </article>
      </main>

      <SiteFooter theme="dark" />
    </div>
  );
};
