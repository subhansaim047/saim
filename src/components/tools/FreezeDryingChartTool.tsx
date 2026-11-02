"use client";

import React, { useState, useMemo } from "react";
import {
  Printer,
  ShieldCheck,
  Clock,
  Sparkles,
  Search,
  CheckCircle2,
  AlertTriangle,
  Info,
  Thermometer,
  Layers,
  ArrowRight,
  Flame,
  Snowflake,
  PackageCheck,
  FileText
} from "lucide-react";

interface FreezeDryItem {
  id: string;
  name: string;
  category: "fruits" | "vegetables" | "meats" | "dairy" | "candy";
  prepAdvice: string;
  sliceThickness: string;
  baseDryHours: number;
  maxDryHours: number;
  reconstituteRatio: string;
  specialNote: string;
}

const FREEZE_DRY_DATABASE: FreezeDryItem[] = [
  {
    id: "strawberries",
    name: "Strawberries (Sliced)",
    category: "fruits",
    prepAdvice: "Wash, hull, and slice uniformly into 6mm to 10mm cross-sections.",
    sliceThickness: "6mm - 10mm",
    baseDryHours: 24,
    maxDryHours: 32,
    reconstituteRatio: "1:1 with warm water or eat crisp as snack",
    specialNote: "High acid content; ensure thorough secondary drying before bagging."
  },
  {
    id: "blueberries",
    name: "Blueberries (Whole / Pierced)",
    category: "fruits",
    prepAdvice: "Must pierce skin or blanch for 15 seconds to crack waxy skin before freezing.",
    sliceThickness: "Whole (punctured)",
    baseDryHours: 36,
    maxDryHours: 48,
    reconstituteRatio: "Soak in room temp water for 10 minutes",
    specialNote: "Unpunctured skins trap internal moisture, doubling cycle time or causing soft cores."
  },
  {
    id: "apples",
    name: "Apples (Sliced / Wedges)",
    category: "fruits",
    prepAdvice: "Peel or leave skin on, core, and slice 6mm thick. Dip in citric acid / lemon juice to prevent browning.",
    sliceThickness: "6mm (1/4 inch)",
    baseDryHours: 22,
    maxDryHours: 30,
    reconstituteRatio: "Rehydrates rapidly in cold water (5-7 mins)",
    specialNote: "Excellent candidate for freeze-drying; low density yields very crisp result."
  },
  {
    id: "bananas",
    name: "Bananas (Coins)",
    category: "fruits",
    prepAdvice: "Peel and slice into 8mm coins. Space evenly on tray; avoid overlapping sticky slices.",
    sliceThickness: "8mm",
    baseDryHours: 28,
    maxDryHours: 38,
    reconstituteRatio: "Best consumed dry as snack; can rehydrate in warm milk/porridge",
    specialNote: "High sugar content prolongs primary sublimation phase."
  },
  {
    id: "sweetcorn",
    name: "Sweetcorn (Whole Kernel)",
    category: "vegetables",
    prepAdvice: "Steam-blanch fresh corn for 2 minutes and ice bath, or use frozen sweetcorn straight on trays.",
    sliceThickness: "Individual kernels",
    baseDryHours: 20,
    maxDryHours: 26,
    reconstituteRatio: "1:0.8 boiling water for 5 minutes",
    specialNote: "Fastest vegetable to freeze-dry. Ideal benchmark food for calibrating machines."
  },
  {
    id: "peas",
    name: "Garden Peas",
    category: "vegetables",
    prepAdvice: "Use frozen garden peas straight onto cold trays for fastest processing.",
    sliceThickness: "Individual peas",
    baseDryHours: 20,
    maxDryHours: 26,
    reconstituteRatio: "1:1 hot water with 1% pinch of salt (3-5 mins)",
    specialNote: "Pre-frozen IQF peas require zero machine freezing time."
  },
  {
    id: "broccoli",
    name: "Broccoli (Florets)",
    category: "vegetables",
    prepAdvice: "Cut into 20mm bite-sized florets. Steam-blanch for 2 minutes to deactivate enzymes.",
    sliceThickness: "20mm florets",
    baseDryHours: 22,
    maxDryHours: 28,
    reconstituteRatio: "1:1.2 hot water for 8 minutes",
    specialNote: "Blanching preserves vibrant green chlorophyll colour and prevents stale odour during storage."
  },
  {
    id: "cooked-chicken",
    name: "Cooked Chicken Breast (Diced / Shredded)",
    category: "meats",
    prepAdvice: "Cook thoroughly to 75°C core. Trim all visible fat. Dice into 12mm cubes or shred finely.",
    sliceThickness: "12mm cubes or shreds",
    baseDryHours: 24,
    maxDryHours: 32,
    reconstituteRatio: "1:1 warm broth or water for 10 minutes",
    specialNote: "FAT DOES NOT FREEZE-DRY. Excess fat causes rancidity over time; use only ultra-lean cuts."
  },
  {
    id: "cooked-beef-mince",
    name: "Cooked Lean Beef Mince (Ground Beef)",
    category: "meats",
    prepAdvice: "Brown extra-lean mince (<5% fat). Rinse under warm water to wash away residual surface lipids.",
    sliceThickness: "Crumbled mince",
    baseDryHours: 22,
    maxDryHours: 30,
    reconstituteRatio: "1:1 simmering broth or marinara sauce",
    specialNote: "Rinsing removes fat oils that would otherwise turn stale and spoil airtight Mylar pouches."
  },
  {
    id: "raw-beef-steak",
    name: "Raw Beef Strips / Steak",
    category: "meats",
    prepAdvice: "Trim all external fat caps. Slice across grain into 6mm to 8mm strips. Pre-freeze solid at -20°C.",
    sliceThickness: "6mm - 8mm strips",
    baseDryHours: 28,
    maxDryHours: 38,
    reconstituteRatio: "Cold water rehydration in chiller, then cook to safe core temperature",
    specialNote: "Raw meats must be handled under strict HACCP allergen and raw-prep segregation controls."
  },
  {
    id: "eggs-scrambled",
    name: "Cooked Scrambled Eggs",
    category: "dairy",
    prepAdvice: "Scramble without added butter, oil, or cream. Cook until dry, no wet curds. Cool before traying.",
    sliceThickness: "Evenly spread curds",
    baseDryHours: 22,
    maxDryHours: 28,
    reconstituteRatio: "Sprinkle warm water gently until soft (1:0.75)",
    specialNote: "Fat-free cooking is essential to avoid oxidative off-flavours during long-term storage."
  },
  {
    id: "whole-milk",
    name: "Whole Milk / Dairy Liquids",
    category: "dairy",
    prepAdvice: "Pour milk into pre-freezing trays at 8mm depth and freeze solid in commercial chest freezer first.",
    sliceThickness: "8mm liquid sheet",
    baseDryHours: 32,
    maxDryHours: 44,
    reconstituteRatio: "Whisk 1 part freeze-dried milk powder with 3 parts cold water",
    specialNote: "Liquid expanding in vacuum can bubble over trays; pre-freezing solid is mandatory."
  },
  {
    id: "skittles-candy",
    name: "Skittles / Chew Confectionery",
    category: "candy",
    prepAdvice: "Place candy onto parchment-lined trays with 10mm gap between sweets to allow 2x puff expansion.",
    sliceThickness: "Individual pieces",
    baseDryHours: 2,
    maxDryHours: 6,
    reconstituteRatio: "Do not reconstitute; consume as crunchy, intense candy",
    specialNote: "Candy mode bypasses deep freezing: warm shelf temp (50°C-55°C) pops internal sugar shells."
  }
];

export const FreezeDryingChartTool: React.FC<{ templateId?: string }> = ({ templateId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<FreezeDryItem>(FREEZE_DRY_DATABASE[0]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [thicknessModifier, setThicknessModifier] = useState<number>(1.0); // 0.8 thin, 1.0 standard, 1.3 thick
  const [preFrozen, setPreFrozen] = useState<boolean>(true);
  const [trayLoadKg, setTrayLoadKg] = useState<number>(0.9); // kg per tray

  // HACCP printable log state
  const [batchNumber, setBatchNumber] = useState<string>("FD-2026-089");
  const [facilityName, setFacilityName] = useState<string>("Artisan Preserves & Catering Lab");
  const [operatorName, setOperatorName] = useState<string>("Head of Production");

  const filteredItems = useMemo(() => {
    return FREEZE_DRY_DATABASE.filter(item => {
      const matchCat = selectedCategory === "all" || item.category === selectedCategory;
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.prepAdvice.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  // Dynamic cycle calculations
  const calculatedCycle = useMemo(() => {
    if (selectedItem.category === "candy") {
      return {
        preFreezeHours: 0,
        primaryHours: Math.round(selectedItem.baseDryHours * 0.7 * 10) / 10,
        secondaryHours: Math.round(selectedItem.baseDryHours * 0.3 * 10) / 10,
        totalHours: selectedItem.baseDryHours,
        targetTemp: "-40°C Condenser / +55°C Shelf",
        vacuumTarget: "< 350 mTorr"
      };
    }

    const preFreezeHrs = preFrozen ? 0 : 5.0; // In-machine freeze takes ~5 hrs
    const thicknessFactor = thicknessModifier;
    const loadFactor = trayLoadKg > 1.0 ? 1.15 : 1.0;

    const basePrimary = selectedItem.baseDryHours * 0.75 * thicknessFactor * loadFactor;
    const baseSecondary = selectedItem.baseDryHours * 0.25 * thicknessFactor;

    const primaryHours = Math.round(basePrimary * 10) / 10;
    const secondaryHours = Math.round(baseSecondary * 10) / 10;
    const totalHours = Math.round((preFreezeHrs + primaryHours + secondaryHours) * 10) / 10;

    return {
      preFreezeHours: preFreezeHrs,
      primaryHours,
      secondaryHours,
      totalHours,
      targetTemp: "-45°C Condenser / +45°C Shelf",
      vacuumTarget: "< 250 mTorr (Ideal Sublimation)"
    };
  }, [selectedItem, thicknessModifier, preFrozen, trayLoadKg]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cyan-900 via-sky-800 to-indigo-900 text-white p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 text-xs font-semibold uppercase tracking-wider mb-3 border border-cyan-400/30">
              <Snowflake className="w-3.5 h-3.5" />
              Sublimation &amp; Moisture Control Standard
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Interactive Freeze Drying Time &amp; Cycle Calculator
            </h2>
            <p className="text-sm sm:text-base text-cyan-100/90 max-w-3xl mt-1 leading-relaxed">
              Calculate exact sublimation, desorption, and pre-freezing cycle times based on food matrix, slice thickness, and tray load weight. Includes mandatory moisture verification standards for 25-year shelf life.
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-cyan-950 font-bold hover:bg-cyan-50 transition shadow-sm text-sm shrink-0 self-start md:self-center"
          >
            <Printer className="w-4 h-4 text-cyan-700" />
            Print HACCP Log
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Interactive Configuration Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-600" />
              1. Select Food Matrix &amp; Loading Parameters
            </h3>

            {/* Food Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Food Item To Freeze-Dry:
              </label>
              <select
                value={selectedItem.id}
                onChange={(e) => {
                  const found = FREEZE_DRY_DATABASE.find(item => item.id === e.target.value);
                  if (found) setSelectedItem(found);
                }}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                {FREEZE_DRY_DATABASE.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name} ({item.category.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>

            {/* Thickness / Cut Option */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setThicknessModifier(0.8)}
                className={`p-3 rounded-xl border text-left transition ${
                  thicknessModifier === 0.8
                    ? "bg-cyan-600 text-white border-cyan-600 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-cyan-300"
                }`}
              >
                <div className="text-xs font-bold uppercase">Thin Cut</div>
                <div className="text-xs opacity-90 mt-0.5">5mm - 6mm slices</div>
                <div className="text-[11px] font-semibold mt-1 opacity-80">-20% cycle time</div>
              </button>

              <button
                type="button"
                onClick={() => setThicknessModifier(1.0)}
                className={`p-3 rounded-xl border text-left transition ${
                  thicknessModifier === 1.0
                    ? "bg-cyan-600 text-white border-cyan-600 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-cyan-300"
                }`}
              >
                <div className="text-xs font-bold uppercase">Standard Cut</div>
                <div className="text-xs opacity-90 mt-0.5">10mm - 12mm (1/2")</div>
                <div className="text-[11px] font-semibold mt-1 opacity-80">Baseline benchmark</div>
              </button>

              <button
                type="button"
                onClick={() => setThicknessModifier(1.3)}
                className={`p-3 rounded-xl border text-left transition ${
                  thicknessModifier === 1.3
                    ? "bg-cyan-600 text-white border-cyan-600 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:border-cyan-300"
                }`}
              >
                <div className="text-xs font-bold uppercase">Thick / Chunk</div>
                <div className="text-xs opacity-90 mt-0.5">15mm - 20mm slices</div>
                <div className="text-[11px] font-semibold mt-1 opacity-80">+30% cycle time</div>
              </button>
            </div>

            {/* Pre-Freeze Toggle and Tray Loading */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white border border-gray-200 rounded-xl p-3.5">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-xs font-bold text-gray-800">
                    Pre-Frozen at -20°C / -40°C:
                  </span>
                  <input
                    type="checkbox"
                    checked={preFrozen}
                    onChange={(e) => setPreFrozen(e.target.checked)}
                    className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                  />
                </label>
                <p className="text-[11px] text-gray-500 mt-1 leading-normal">
                  Pre-freezing food in a chest freezer saves 4–6 machine run hours and protects vacuum pump seals.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-3.5">
                <div className="flex items-center justify-between text-xs font-bold text-gray-800 mb-1">
                  <span>Tray Density (Weight):</span>
                  <span className="text-cyan-700 font-extrabold">{trayLoadKg} kg / tray</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="1.5"
                  step="0.1"
                  value={trayLoadKg}
                  onChange={(e) => setTrayLoadKg(parseFloat(e.target.value))}
                  className="w-full accent-cyan-600"
                />
                <p className="text-[11px] text-gray-500 mt-1">
                  Recommended: &le; 1.0 kg/tray. Overloading causes trapped moisture cores.
                </p>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 text-white rounded-2xl p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between border-b border-cyan-800/60 pb-3">
                <div className="text-xs uppercase tracking-wider text-cyan-300 font-bold">
                  Estimated Total Run Time
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-200 border border-cyan-400/30">
                  {selectedItem.category.toUpperCase()}
                </span>
              </div>

              <div className="my-4 text-center">
                <div className="text-4xl sm:text-5xl font-black text-cyan-300 tracking-tight">
                  {calculatedCycle.totalHours} <span className="text-lg font-bold text-white">Hours</span>
                </div>
                <div className="text-xs text-cyan-200/80 mt-1">
                  {preFrozen ? "Excludes external freezer pre-freeze" : "Includes full in-chamber freeze cycle"}
                </div>
              </div>

              {/* Cycle Breakdown Badges */}
              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <Snowflake className="w-3.5 h-3.5 text-sky-400" />
                    Pre-Freezing Phase:
                  </span>
                  <span className="font-bold text-white">{calculatedCycle.preFreezeHours} hrs</span>
                </div>

                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    Primary Sublimation (Ice to Vapour):
                  </span>
                  <span className="font-bold text-white">{calculatedCycle.primaryHours} hrs</span>
                </div>

                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <span className="text-gray-300 flex items-center gap-1.5">
                    <Thermometer className="w-3.5 h-3.5 text-emerald-400" />
                    Secondary Desorption (Residual &le;2%):
                  </span>
                  <span className="font-bold text-white">{calculatedCycle.secondaryHours} hrs</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-cyan-800/60 text-[11px] text-cyan-200/70 space-y-1">
              <div><strong>Chamber Vacuum Target:</strong> {calculatedCycle.vacuumTarget}</div>
              <div><strong>Thermal Profile:</strong> {calculatedCycle.targetTemp}</div>
            </div>
          </div>
        </div>

        {/* Selected Item Preparation & Reconstitution Card */}
        <div className="border border-sky-200 bg-sky-50/60 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Matrix Specification Sheet
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                {selectedItem.name}
              </h3>
            </div>
            <div className="text-xs font-semibold px-3 py-1 bg-white border border-sky-300 rounded-lg text-sky-900 self-start sm:self-auto">
              Slice Standard: {selectedItem.sliceThickness}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
            <div className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-2xs">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                Preparation Protocol
              </div>
              <p className="leading-relaxed">{selectedItem.prepAdvice}</p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-2xs">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <PackageCheck className="w-3.5 h-3.5 text-indigo-600" />
                Rehydration &amp; Kitchen Use
              </div>
              <p className="leading-relaxed">{selectedItem.reconstituteRatio}</p>
            </div>

            <div className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-2xs">
              <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                Critical Control Point Note
              </div>
              <p className="leading-relaxed">{selectedItem.specialNote}</p>
            </div>
          </div>
        </div>

        {/* Moisture Testing Protocols - The 4 Gold Standards */}
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-2">
            <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Mandatory Moisture Verification Protocol (&le; 2% Residual Moisture Target)
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Food must NEVER be sealed into long-term Mylar bags until all 4 verification tests pass. Trapped moisture allows botulinum and fungal spoilage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4 text-xs">
              <div className="font-bold text-emerald-950 mb-1 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">1</span>
                The Snap &amp; Crumble Test
              </div>
              <p className="text-emerald-900/80 leading-relaxed">
                Break the thickest slice on the tray in half. It must shatter, crunch, or crumble into dry powder. Any gummy or flexible bend indicates core ice remains.
              </p>
            </div>

            <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4 text-xs">
              <div className="font-bold text-emerald-950 mb-1 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">2</span>
                Core Warmth Inspection
              </div>
              <p className="text-emerald-900/80 leading-relaxed">
                Touch the inner core of diced meats or thick fruits against your upper lip or wrist. It must feel completely warm (room temperature). Coolness proves active sublimation.
              </p>
            </div>

            <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4 text-xs">
              <div className="font-bold text-emerald-950 mb-1 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">3</span>
                Mason Jar Condensation Test
              </div>
              <p className="text-emerald-900/80 leading-relaxed">
                Seal warm sample pieces in an airtight glass jar for 15 minutes. Check walls under light. Any microscopic condensation fogging requires 2+ extra drying hours.
              </p>
            </div>

            <div className="border border-emerald-200 bg-emerald-50/50 rounded-xl p-4 text-xs">
              <div className="font-bold text-emerald-950 mb-1 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-black">4</span>
                Airtight Packaging Protocol
              </div>
              <p className="text-emerald-900/80 leading-relaxed">
                Pack within 15 minutes of cycle completion into 7-mil food-grade Mylar bags with genuine iron-based Oxygen Absorbers (300cc-500cc per gallon) and impulse seal.
              </p>
            </div>
          </div>
        </div>

        {/* Searchable Food Matrix Reference Table */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-600" />
                Comprehensive Food Matrix Reference Guide
              </h3>
              <p className="text-xs text-gray-500">
                Reference values calibrated for consumer and small commercial freeze dryers (e.g. Harvest Right, Blue Alpine, Labconco).
              </p>
            </div>

            {/* Category Filter Pills & Search */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Search food item..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-xs bg-gray-50 border border-gray-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-cyan-500"
              >
                <option value="all">All Categories</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="meats">Meats &amp; Proteins</option>
                <option value="dairy">Dairy &amp; Liquids</option>
                <option value="candy">Candy &amp; Sweets</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-gray-200">
                <tr>
                  <th className="py-2.5 px-3">Food Item</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">Slice Standard</th>
                  <th className="py-2.5 px-3">Cycle Range</th>
                  <th className="py-2.5 px-3">Prep &amp; Pre-Treatment Note</th>
                  <th className="py-2.5 px-3">Select</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filteredItems.map(item => (
                  <tr
                    key={item.id}
                    className={`hover:bg-cyan-50/50 transition cursor-pointer ${
                      selectedItem.id === item.id ? "bg-cyan-50/80 font-medium" : ""
                    }`}
                    onClick={() => setSelectedItem(item)}
                  >
                    <td className="py-2.5 px-3 font-semibold text-gray-900">{item.name}</td>
                    <td className="py-2.5 px-3 capitalize">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-800">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-2.5 px-3">{item.sliceThickness}</td>
                    <td className="py-2.5 px-3 font-semibold text-cyan-800">
                      {item.baseDryHours} – {item.maxDryHours} hrs
                    </td>
                    <td className="py-2.5 px-3 text-gray-600 max-w-xs truncate" title={item.prepAdvice}>
                      {item.prepAdvice}
                    </td>
                    <td className="py-2.5 px-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedItem(item);
                        }}
                        className="text-[11px] font-bold text-cyan-700 hover:text-cyan-900 underline"
                      >
                        Calculate
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Printable EHO / HACCP Compliance Section */}
        <div className="border border-slate-300 rounded-2xl p-6 bg-slate-50 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <div>
              <h4 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-700" />
                HACCP Freeze-Drying Batch Log &amp; Quality Record
              </h4>
              <p className="text-xs text-gray-500">
                Print or file this record to comply with commercial preservation audits and food safety traceability standards.
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-700 text-white text-xs font-bold hover:bg-cyan-800 transition"
            >
              <Printer className="w-3.5 h-3.5" />
              Print Log Sheet
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                Facility / Kitchen:
              </label>
              <input
                type="text"
                value={facilityName}
                onChange={(e) => setFacilityName(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                Batch Log Number:
              </label>
              <input
                type="text"
                value={batchNumber}
                onChange={(e) => setBatchNumber(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-gray-600 mb-1">
                Responsible Operator:
              </label>
              <input
                type="text"
                value={operatorName}
                onChange={(e) => setOperatorName(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-gray-500 text-[11px] block">Item Name:</span>
              <span className="font-bold text-gray-900">{selectedItem.name}</span>
            </div>
            <div>
              <span className="text-gray-500 text-[11px] block">Calculated Run:</span>
              <span className="font-bold text-cyan-800">{calculatedCycle.totalHours} Hours</span>
            </div>
            <div>
              <span className="text-gray-500 text-[11px] block">Chamber Vacuum:</span>
              <span className="font-bold text-emerald-800">&le; 250 mTorr (Pass)</span>
            </div>
            <div>
              <span className="text-gray-500 text-[11px] block">Moisture Verification:</span>
              <span className="font-bold text-emerald-800">&le; 2% Residual (Pass)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
