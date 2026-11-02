"use client";

import React, { useState } from "react";
import {
  Printer,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  Search,
  Sparkles,
  Layers,
  Thermometer,
  Snowflake,
  ArrowDown
} from "lucide-react";

interface StorageShelf {
  shelfNumber: number;
  tierName: string;
  badge: string;
  badgeColor: string;
  borderClass: string;
  bgClass: string;
  headerColor: string;
  minCookTemp: string;
  allowedFoods: string[];
  keyRiskReason: string;
}

const SHELVES: StorageShelf[] = [
  {
    shelfNumber: 1,
    tierName: "Top Shelf: Ready-to-Eat (RTE) & Cooked Produce",
    badge: "Tier 1 (Highest Protection)",
    badgeColor: "bg-emerald-600 text-white",
    borderClass: "border-emerald-300",
    bgClass: "bg-emerald-50/70",
    headerColor: "text-emerald-950",
    minCookTemp: "Zero cooking step before service (ready to serve)",
    allowedFoods: [
      "Cooked batch dishes, stews, and prepped pasta",
      "Ready-to-eat salads, washed lettuce, cut tomatoes",
      "Dairy products: milk, cheeses, butter, yoghurts",
      "Cooked deli meats, ham, roast beef slices",
      "Pastries, desserts, cream cakes, and sauces"
    ],
    keyRiskReason: "Must be placed on the uppermost shelves to completely eliminate the possibility of any raw juices or dirty water dripping onto ready-to-consume food."
  },
  {
    shelfNumber: 2,
    tierName: "Second Shelf: Whole Raw Fish & Shellfish",
    badge: "Tier 2 (Low Drip Hazard)",
    badgeColor: "bg-sky-600 text-white",
    borderClass: "border-sky-300",
    bgClass: "bg-sky-50/70",
    headerColor: "text-sky-950",
    minCookTemp: "≥ 63°C (Minimum commercial cooking lethality)",
    allowedFoods: [
      "Whole raw salmon, sea bass, and cod fillets",
      "Raw king prawns, squid, scallops, and crab meat",
      "Clean fresh seafood stored in drainage pans with flake ice"
    ],
    keyRiskReason: "Raw fish carries lower bacterial load than red meats or poultry, requiring a lower thermal lethality threshold (63°C). Juices must never drip on cooked foods."
  },
  {
    shelfNumber: 3,
    tierName: "Third Shelf: Whole Cuts of Raw Beef, Lamb & Pork",
    badge: "Tier 3 (Surface Bacterial Load)",
    badgeColor: "bg-amber-600 text-white",
    borderClass: "border-amber-300",
    bgClass: "bg-amber-50/70",
    headerColor: "text-amber-950",
    minCookTemp: "≥ 70°C for 2 mins (or searing intact muscle surface)",
    allowedFoods: [
      "Whole raw beef steaks, ribeye, and sirloin joints",
      "Whole pork loins, pork chops, and gammon",
      "Whole legs of lamb, lamb racks, and mutton cuts"
    ],
    keyRiskReason: "Pathogens (such as E. coli) reside primarily on the outer surfaces of whole muscle meat. Kept above minced meats because whole meat juices carry lower systemic spore loads."
  },
  {
    shelfNumber: 4,
    tierName: "Fourth Shelf: Raw Minced Meats & Ground Sausages",
    badge: "Tier 4 (Internalised Pathogens)",
    badgeColor: "bg-orange-600 text-white",
    borderClass: "border-orange-300",
    bgClass: "bg-orange-50/70",
    headerColor: "text-orange-950",
    minCookTemp: "≥ 75°C for 30s (82°C Scotland)",
    allowedFoods: [
      "Raw minced beef, burger patties, and steak mince",
      "Raw pork sausages, sausage meat, and black pudding mix",
      "Formed raw kebabs, koftas, and minced lamb batches"
    ],
    keyRiskReason: "Grinding mixes surface bacteria throughout the meat interior. High drip fluid volume requires heavy leakproof containment above poultry."
  },
  {
    shelfNumber: 5,
    tierName: "Bottom Shelf: Raw Poultry & Unwashed Root Vegetables",
    badge: "Tier 5 (Highest Biohazard & Spore Risk)",
    badgeColor: "bg-rose-600 text-white",
    borderClass: "border-rose-400",
    bgClass: "bg-rose-50/80",
    headerColor: "text-rose-950",
    minCookTemp: "≥ 75°C for 30s (82°C in Scotland) throughout thermal centre",
    allowedFoods: [
      "Raw whole chickens, turkey crowns, and duck fillets",
      "Raw chicken wings, thighs, and diced poultry meat",
      "Unwashed root vegetables: sacks of potatoes, muddy leeks, and carrots"
    ],
    keyRiskReason: "Raw poultry carries high rates of Campylobacter and Salmonella; farm soil contains Bacillus cereus and Clostridium spores. Must strictly occupy the lowest tier so spills never touch other items."
  }
];

export function WalkInCoolerStorageChartTool({ templateId }: { templateId?: string }) {
  const [businessName, setBusinessName] = useState<string>("The Crown Restaurant & Kitchen");
  const [coolerIdentifier, setCoolerIdentifier] = useState<string>("Walk-In Chiller 1 (Main Cold Store)");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredShelves = SHELVES.map(shelf => {
    if (!searchQuery.trim()) return { ...shelf, isMatch: false };
    const query = searchQuery.toLowerCase();
    const hasMatch =
      shelf.tierName.toLowerCase().includes(query) ||
      shelf.allowedFoods.some(f => f.toLowerCase().includes(query)) ||
      shelf.keyRiskReason.toLowerCase().includes(query);
    return { ...shelf, isMatch: hasMatch };
  });

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200/80 mb-2">
              <Snowflake className="w-3.5 h-3.5 text-sky-600" />
              <span>UK Commercial Kitchen Vertical Refrigeration Hierarchy</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Walk-In Cooler &amp; Commercial Fridge Food Storage Shelf Chart
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Eliminate drip cross-contamination by organising walk-in chillers and catering upright refrigerators according to official FSA vertical shelf rules. Search any food ingredient to find its mandatory shelf tier.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-sm hover:scale-[1.01] cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print Cooler Door Chart</span>
            </button>
          </div>
        </div>

        {/* Toolbar & Live Ingredient Classifier Search */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Establishment Name
            </label>
            <input
              type="text"
              value={businessName}
              onChange={e => setBusinessName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Cooler / Chiller Unit ID
            </label>
            <input
              type="text"
              value={coolerIdentifier}
              onChange={e => setCoolerIdentifier(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Search Food or Ingredient
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="e.g. Chicken thighs, salmon, pasta..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg pl-8 pr-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Airflow & Physical Spacing Standard */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              15cm Floor Clearance
            </span>
            <p className="text-[11px] text-slate-600">
              Never place food containers or crates directly on the floor. Maintain at least 15cm off the floor on stainless shelving or plastic dunnage racks.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              5cm Air Circulation Perimeter
            </span>
            <p className="text-[11px] text-slate-600">
              Leave a 5cm gap between stored goods and insulated walls to allow constant cold air convection and eliminate warm ambient pockets.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
            <span className="font-bold text-slate-900 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Clear Evaporator Fan Zone
            </span>
            <p className="text-[11px] text-slate-600">
              Never stack boxes directly in front of the blower coil or evaporator fans. Blocking airflow triggers compressor strain and temperature spikes.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          A4 / A3 PRINTABLE WALK-IN DOOR CHART
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-900 space-y-6 printable-doc shadow-md print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none">
        {/* Poster Header */}
        <div className="border-b-4 border-slate-900 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-rose-500 text-white font-mono font-black text-xs uppercase tracking-wider mb-2">
                CRITICAL CROSS-CONTAMINATION BARRIER
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                Walk-In Cooler Shelf Storage Hierarchy
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                Mandatory Vertical Storage Order: Top (Ready-to-Eat) to Bottom (Raw Biohazards)
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-900 rounded-xl p-3 text-right min-w-[200px]">
              <div className="text-[10px] font-bold uppercase text-slate-500">Unit ID</div>
              <div className="text-sm font-black text-slate-900 truncate">{businessName}</div>
              <div className="text-xs font-bold text-sky-700 truncate">{coolerIdentifier}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-200 text-xs font-bold text-slate-700">
            <ArrowDown className="w-4 h-4 text-rose-600 animate-bounce" />
            <span>CRITICAL RULE: Higher shelves must NEVER contain items with higher bacterial cooking requirements than lower shelves!</span>
          </div>
        </div>

        {/* 5 Vertical Shelves Stack */}
        <div className="space-y-4">
          {filteredShelves.map(shelf => (
            <div
              key={shelf.shelfNumber}
              className={`p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                shelf.isMatch
                  ? "ring-4 ring-amber-400 border-amber-600 bg-amber-50/90 shadow-md"
                  : `${shelf.borderClass} ${shelf.bgClass}`
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-black/10">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-mono font-black text-sm flex items-center justify-center shrink-0">
                    S{shelf.shelfNumber}
                  </span>
                  <div>
                    <h3 className={`text-sm sm:text-base font-black ${shelf.headerColor}`}>
                      {shelf.tierName}
                    </h3>
                    <span className="text-[11px] font-bold text-slate-600">
                      Required Cooking Lethality: <strong className="text-slate-900">{shelf.minCookTemp}</strong>
                    </span>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 ${shelf.badgeColor}`}>
                  {shelf.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 text-xs">
                <div className="md:col-span-2 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase text-slate-600 block">
                    Permitted Foods Stored Here:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-800">
                    {shelf.allowedFoods.map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-white/80 border border-black/10 space-y-1 text-[11px]">
                  <span className="font-bold text-slate-900 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-amber-600" />
                    EHO Rationale:
                  </span>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {shelf.keyRiskReason}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Temperature & Audit Stamp */}
        <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[11px] text-slate-500">
            Reg (EC) No 852/2004 Annex II Chap IX • FSA SFBB Chilling Safe Method • Food Safety Act 1990
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold text-slate-700">
            <div className="border-b border-slate-400 pb-1 min-w-[120px] text-center">
              Cooler Manager Sign-Off
            </div>
            <div className="border-b border-slate-400 pb-1 min-w-[100px] text-center">
              Verified: ___ / ___ / 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
