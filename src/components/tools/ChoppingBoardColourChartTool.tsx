"use client";

import React, { useState } from "react";
import {
  Printer,
  Search,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  Layers,
  Sparkles
} from "lucide-react";

interface BoardColour {
  id: string;
  name: string;
  colorName: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
  badgeClass: string;
  targetFood: string;
  examples: string[];
  keyRisk: string;
}

const BOARDS: BoardColour[] = [
  {
    id: "red",
    name: "Red Board",
    colorName: "Raw Meat & Poultry",
    bgClass: "bg-rose-50",
    borderClass: "border-rose-400",
    textClass: "text-rose-950",
    badgeClass: "bg-rose-600 text-white",
    targetFood: "Raw red meat, raw beef, pork, lamb, minced meat, raw poultry and game birds.",
    examples: ["Raw beef steaks", "Chicken breasts", "Pork chops", "Raw diced lamb", "Burgers before cooking"],
    keyRisk: "High risk of Salmonella, E. coli O157, and Campylobacter. Must never cross-contaminate cooked dishes."
  },
  {
    id: "blue",
    name: "Blue Board",
    colorName: "Raw Fish & Seafood",
    bgClass: "bg-sky-50",
    borderClass: "border-sky-400",
    textClass: "text-sky-950",
    badgeClass: "bg-sky-600 text-white",
    targetFood: "Raw fish fillets, whole fish, prawns, squid, shellfish, and crustaceans.",
    examples: ["Cod fillets", "Raw king prawns", "Whole salmon", "Mussels", "Raw calamari"],
    keyRisk: "Vibrio pathogens, marine parasites, and seafood allergen transfer to other foods."
  },
  {
    id: "yellow",
    name: "Yellow Board",
    colorName: "Cooked Meats & Poultry",
    bgClass: "bg-amber-50",
    borderClass: "border-amber-400",
    textClass: "text-amber-950",
    badgeClass: "bg-amber-500 text-slate-950",
    targetFood: "Pre-cooked sliced meats, roast joints, cooked chicken breasts, cured charcuterie.",
    examples: ["Carved roast beef", "Cooked bacon", "Sliced ham", "Grilled cooked chicken strips", "Pepperoni slices"],
    keyRisk: "Listeria monocytogenes and Staphylococcus aureus contamination on ready-to-eat meats."
  },
  {
    id: "green",
    name: "Green Board",
    colorName: "Washed Salad & Fresh Fruit",
    bgClass: "bg-emerald-50",
    borderClass: "border-emerald-400",
    textClass: "text-emerald-950",
    badgeClass: "bg-emerald-600 text-white",
    targetFood: "Washed salad greens, ready-to-eat raw vegetables, fruit, garnishes, and fresh herbs.",
    examples: ["Lettuce", "Sliced cucumber", "Tomatoes", "Fresh strawberries", "Lemon wedges", "Parsley garnish"],
    keyRisk: "Ready-to-eat foods received without further cooking; susceptible to bacterial cross-contact."
  },
  {
    id: "brown",
    name: "Brown Board",
    colorName: "Unwashed Root Vegetables",
    bgClass: "bg-amber-100/60",
    borderClass: "border-amber-700/60",
    textClass: "text-amber-950",
    badgeClass: "bg-amber-800 text-white",
    targetFood: "Unwashed root crops, soil-grown vegetables, and unpeeled tubers before scrubbing.",
    examples: ["Unpeeled dirty potatoes", "Whole carrots with tops", "Unwashed parsnips", "Earthy beetroot", "Turnips"],
    keyRisk: "Soil-borne bacterial spores (Bacillus cereus, Clostridium botulinum). Keep away from salad prep."
  },
  {
    id: "white",
    name: "White Board",
    colorName: "Bakery, Bread & Dairy",
    bgClass: "bg-slate-50",
    borderClass: "border-slate-300",
    textClass: "text-slate-900",
    badgeClass: "bg-slate-700 text-white",
    targetFood: "Bread loaves, burger buns, sliced block cheese, bakery doughs, cakes, and dairy.",
    examples: ["Brioche burger buns", "Cheddar cheese blocks", "Sandwich loaves", "Croissants", "Pizza dough rolling"],
    keyRisk: "Mould transfer, cross-flavoring, and dairy allergen segregation."
  },
  {
    id: "purple",
    name: "Purple Board",
    colorName: "Allergen-Free & Gluten-Free",
    bgClass: "bg-purple-50",
    borderClass: "border-purple-400",
    textClass: "text-purple-950",
    badgeClass: "bg-purple-600 text-white",
    targetFood: "Dedicated allergen-free orders, coeliac gluten-free prep, and nut-safe meal production.",
    examples: ["Gluten-free pasta prep", "Nut-free salad prep", "Dairy-free dessert assembly", "Special diet bespoke meals"],
    keyRisk: "Anaphylaxis from accidental allergen cross-contact. Must use dedicated purple knives and utensils."
  }
];

export const ChoppingBoardColourChartTool: React.FC<{ templateId?: string }> = () => {
  const [establishment, setEstablishment] = useState("Commercial Catering Kitchen");
  const [prepStation, setPrepStation] = useState("Main Prep Line & Cook Station");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBoards = BOARDS.filter(b => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      b.name.toLowerCase().includes(q) ||
      b.colorName.toLowerCase().includes(q) ||
      b.targetFood.toLowerCase().includes(q) ||
      b.examples.some(ex => ex.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-8">
      {/* Interactive Tool Banner & Search Classifier */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-indigo-800/40 no-print">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              UK Industry Standard 7-Colour Coding System
            </span>
            <span className="text-xs text-indigo-200/80 font-mono">
              FSA Cross-Contamination Barrier
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Commercial Chopping Board Colour Chart &amp; Food Classifier
          </h2>

          <p className="text-sm sm:text-base text-indigo-100/90 max-w-3xl leading-relaxed">
            Eliminate cross-contamination in your kitchen brigade. Look up any culinary ingredient to instantly identify its designated board colour, review microbial risk controls, and print a high-contrast A4 wall reference chart.
          </p>

          {/* Interactive Food Search Classifier */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Type ingredient (e.g. Chicken, Cucumber, Cheddar, Cod)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-bold text-indigo-200 hover:text-white px-3 py-2 bg-white/5 rounded-xl border border-white/10"
              >
                Clear
              </button>
            )}
          </div>

          <div className="pt-2">
            <button
              onClick={() => window.print()}
              className="bg-white hover:bg-gray-100 text-gray-900 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md cursor-pointer hover:scale-[1.01]"
            >
              <Printer className="w-4 h-4 text-indigo-600" />
              <span>Print A4 Kitchen Wall Poster</span>
            </button>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Establishment Header (Screen & Print) */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Food Establishment / Restaurant Name
            </label>
            <input
              type="text"
              value={establishment}
              onChange={e => setEstablishment(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 font-bold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 print:hidden"
            />
            <div className="hidden print:block text-xl font-black text-black border-b-2 border-black pb-1">
              {establishment || "Commercial Kitchen"}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Prep Station / Culinary Department
            </label>
            <input
              type="text"
              value={prepStation}
              onChange={e => setPrepStation(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 print:hidden"
            />
            <div className="hidden print:block text-sm font-bold text-gray-800 border-b border-gray-400 pb-1">
              Station: {prepStation}
            </div>
          </div>
        </div>
      </div>

      {/* Main 7-Colour Chopping Board Grid (Screen & Print) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm print:rounded-none print:border-2 print:border-black print:p-4 print:shadow-none space-y-6">
        <div className="text-center space-y-2 border-b-2 border-indigo-600 pb-4 print:border-black">
          <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-black uppercase tracking-widest print:bg-gray-200 print:text-black">
            Official EHO Food Hygiene Reference
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 uppercase tracking-tight">
            UK Chopping Board Colour Coding Chart
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto print:text-black font-medium">
            Strict board segregation prevents cross-contamination. Always wash and sanitise boards through a commercial dishwasher operating at &ge;82&deg;C rinse.
          </p>
        </div>

        {/* Boards Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBoards.map(b => (
            <div
              key={b.id}
              className={`p-4 sm:p-5 rounded-2xl border-2 ${b.borderClass} ${b.bgClass} flex flex-col justify-between print:bg-white print:border-2 print:border-black space-y-3`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider ${b.badgeClass} print:bg-black print:text-white`}>
                    {b.name}
                  </span>
                  <span className="text-[11px] font-extrabold uppercase text-gray-600 print:text-black">
                    {b.colorName}
                  </span>
                </div>

                <p className="text-xs font-semibold text-gray-800 leading-snug print:text-black">
                  {b.targetFood}
                </p>

                <div className="pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">Common Examples:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {b.examples.map((ex, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white/90 border border-gray-300 text-gray-800 px-2 py-0.5 rounded font-medium print:border-black print:bg-gray-100"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200/60 print:border-black text-[11px] text-gray-700 italic print:text-black">
                <strong>Safety Control:</strong> {b.keyRisk}
              </div>
            </div>
          ))}
        </div>

        {/* EHO Inspection Due Diligence & Sanitation Note */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-300 print:bg-white print:border print:border-black space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-amber-950 font-mono uppercase text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>EHO Scoring Rules for Chopping Boards:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700 print:text-black">
            <li><strong>Board Wear &amp; Grooves:</strong> Replace plastic cutting boards immediately once deep knife grooves appear. Bacteria multiply in knife cuts where sanitisers cannot reach.</li>
            <li><strong>Thermal Disinfection:</strong> Wash in a commercial pass-through dishwasher with wash temp &ge;60&deg;C and final rinse &ge;82&deg;C.</li>
            <li><strong>Storage Racks:</strong> Store clean chopping boards in vertical stainless-steel drying racks with air circulation. Never stack wet boards flat.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
