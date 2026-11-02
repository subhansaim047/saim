"use client";

import React, { useState } from "react";
import {
  Printer,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  Flame,
  Snowflake,
  Thermometer,
  Clock,
  Sparkles,
  Layers,
  Scale
} from "lucide-react";

interface HamCut {
  id: string;
  name: string;
  type: "Cured Gammon" | "Fresh Pork Leg" | "Pre-Cooked Glazed" | "Bone-In Joint";
  recommendedOvenTemp: string;
  cookingTimeMinutesPerKg: number;
  restingMinutes: number;
  targetCoreTempUK: number;
  targetCoreTempScotland: number;
  probeLocation: string;
  keyHazards: string;
}

const HAM_CUTS: HamCut[] = [
  {
    id: "bone-in-gammon",
    name: "Traditional Bone-In Gammon Joint",
    type: "Bone-In Joint",
    recommendedOvenTemp: "160°C – 170°C (Fan)",
    cookingTimeMinutesPerKg: 45,
    restingMinutes: 20,
    targetCoreTempUK: 75.0,
    targetCoreTempScotland: 82.0,
    probeLocation: "Insert probe into thickest muscle away from the bone (bone conducts heat artificially).",
    keyHazards: "Internal bone marrow can harbour Salmonella and Yersinia enterocolitica if undercooked."
  },
  {
    id: "boneless-gammon",
    name: "Rolled & Tied Boneless Gammon Joint",
    type: "Cured Gammon",
    recommendedOvenTemp: "160°C – 180°C (Fan)",
    cookingTimeMinutesPerKg: 40,
    restingMinutes: 15,
    targetCoreTempUK: 75.0,
    targetCoreTempScotland: 82.0,
    probeLocation: "Insert probe directly into geometric centre of the rolled cylinder.",
    keyHazards: "Rolling rolls surface bacteria into the center of the joint; must achieve full thermal lethality."
  },
  {
    id: "fresh-pork-leg",
    name: "Fresh Pork Leg (Roast Ham with Crackling)",
    type: "Fresh Pork Leg",
    recommendedOvenTemp: "220°C high sear (20m), then 170°C",
    cookingTimeMinutesPerKg: 35,
    restingMinutes: 20,
    targetCoreTempUK: 75.0,
    targetCoreTempScotland: 82.0,
    probeLocation: "Deepest muscle mass in the centre of the meat cut.",
    keyHazards: "Salmonella, Trichinella, and Listeria monocytogenes."
  },
  {
    id: "honey-glazed-ham",
    name: "Catering Carvery Glazed Ham (Pre-Boiled then Roasted)",
    type: "Pre-Cooked Glazed",
    recommendedOvenTemp: "180°C – 190°C (Glaze finishing)",
    cookingTimeMinutesPerKg: 20,
    restingMinutes: 15,
    targetCoreTempUK: 75.0,
    targetCoreTempScotland: 82.0,
    probeLocation: "Core center of roast before applying sugar/honey mustard glaze.",
    keyHazards: "Glazing crust caramelises rapidly while internal core may remain in the Danger Zone."
  }
];

export function HamCookingTemperatureTool({ templateId }: { templateId?: string }) {
  const [businessName, setBusinessName] = useState<string>("The Crown Carvery & Kitchen");
  const [stationIdentifier, setStationIdentifier] = useState<string>("Carvery Roast Line - Oven 2");
  const [chefName, setChefName] = useState<string>("Head Chef J. Morgan");
  const [selectedCutId, setSelectedCutId] = useState<string>("bone-in-gammon");
  const [weightKg, setWeightKg] = useState<number>(3.5);
  const [jurisdiction, setJurisdiction] = useState<"uk" | "scotland">("uk");

  const selectedCut = HAM_CUTS.find(c => c.id === selectedCutId) || HAM_CUTS[0];

  const estimatedCookMins = Math.round(selectedCut.cookingTimeMinutesPerKg * weightKg);
  const cookHours = Math.floor(estimatedCookMins / 60);
  const cookRemainingMins = estimatedCookMins % 60;

  const targetCore = jurisdiction === "uk" ? selectedCut.targetCoreTempUK : selectedCut.targetCoreTempScotland;

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200/80 mb-2">
              <Flame className="w-3.5 h-3.5 text-rose-600" />
              <span>UK Commercial Meat Roasting &amp; Safe Thermal Lethality Standard</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Ham &amp; Gammon Cooking Temperature Chart &amp; Core Probe Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Calculate commercial roasting times by joint weight, probe the thermal centre according to FSA critical core temperature standards (75°C for 30s / 82°C Scotland), and print an EHO compliance roast chart.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-sm hover:scale-[1.01] cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print A4 Roast Chart</span>
            </button>
          </div>
        </div>

        {/* Configuration Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
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
              Oven / Station ID
            </label>
            <input
              type="text"
              value={stationIdentifier}
              onChange={e => setStationIdentifier(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Head Chef / Roasting Lead
            </label>
            <input
              type="text"
              value={chefName}
              onChange={e => setChefName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Statutory Temperature Standard
            </label>
            <div className="grid grid-cols-2 gap-1.5 bg-white p-1 rounded-lg border border-slate-300 shadow-2xs">
              <button
                type="button"
                onClick={() => setJurisdiction("uk")}
                className={`py-1 text-center font-bold rounded cursor-pointer transition-colors ${
                  jurisdiction === "uk"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                75°C (UK Std)
              </button>
              <button
                type="button"
                onClick={() => setJurisdiction("scotland")}
                className={`py-1 text-center font-bold rounded cursor-pointer transition-colors ${
                  jurisdiction === "scotland"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                82°C (Scotland)
              </button>
            </div>
          </div>
        </div>

        {/* Joint Selector Pills */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Ham / Gammon Cut:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {HAM_CUTS.map(cut => {
              const isSelected = cut.id === selectedCutId;
              return (
                <button
                  key={cut.id}
                  onClick={() => setSelectedCutId(cut.id)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-800 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <span className={`text-[10px] uppercase font-bold tracking-wider block ${isSelected ? "text-amber-400" : "text-slate-500"}`}>
                    {cut.type}
                  </span>
                  <div className="text-xs font-black mt-0.5 truncate">{cut.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Roasting Calculator Output Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-gradient-to-br from-rose-950 via-slate-900 to-slate-900 text-white shadow-sm">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-400/30">
              <Scale className="w-3 h-3 text-rose-400" />
              Batch Joint Weight
            </span>
            <div className="flex items-center gap-3">
              <input
                type="number"
                step="0.1"
                min="0.5"
                max="25"
                value={weightKg}
                onChange={e => setWeightKg(parseFloat(e.target.value) || 1)}
                className="w-28 bg-white/10 border border-white/20 rounded-xl px-3 py-2 font-mono text-2xl font-black text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <span className="text-xl font-black text-slate-300">kg</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Recommended Oven: <strong className="text-white">{selectedCut.recommendedOvenTemp}</strong>
            </p>
          </div>

          <div className="space-y-2 border-l border-white/10 lg:pl-6">
            <span className="text-[11px] uppercase font-bold text-slate-400 block">
              Estimated Cook Time (Pre-Rest)
            </span>
            <div className="font-mono text-3xl font-black text-white">
              {cookHours > 0 ? `${cookHours} hr ` : ""}
              {cookRemainingMins} mins
            </div>
            <p className="text-[11px] text-slate-300">
              Plus mandatory <strong className="text-amber-400">{selectedCut.restingMinutes} min rest</strong> under foil to equalise internal temperatures.
            </p>
          </div>

          <div className="space-y-2 border-l border-white/10 lg:pl-6">
            <span className="text-[11px] uppercase font-bold text-slate-400 block">
              Mandatory Minimum Core Temperature
            </span>
            <div className="font-mono text-3xl font-black text-rose-400">
              ≥ {targetCore}°C
            </div>
            <p className="text-[11px] text-slate-300">
              Hold reading for at least <strong className="text-white">30 seconds</strong> before slicing.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          A4 PRINTABLE HAM ROASTING POSTER CONTAINER
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-900 space-y-6 printable-doc shadow-md print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none">
        {/* Poster Header */}
        <div className="border-b-4 border-slate-900 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-rose-600 text-white font-mono font-black text-xs uppercase tracking-wider mb-2">
                FSA CRITICAL CONTROL POINT (CCP 1 - THERMAL LETHALITY)
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                Ham &amp; Gammon Cooking Temperature &amp; Carvery Standard
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                Mandatory Core Probing Standards, Oven Timings &amp; Service Holding Rules
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-900 rounded-xl p-3 text-right min-w-[200px]">
              <div className="text-[10px] font-bold uppercase text-slate-500">Premises / Oven</div>
              <div className="text-sm font-black text-slate-900 truncate">{businessName}</div>
              <div className="text-xs font-bold text-rose-700 truncate">{stationIdentifier}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-200 text-[11px]">
            <div>
              <span className="font-bold text-slate-500 uppercase block">Supervisor:</span>
              <span className="font-black text-slate-900">{chefName}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Critical Core Temp:</span>
              <span className="font-black text-rose-700">≥ {targetCore}°C (30s)</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Hot Holding Limit:</span>
              <span className="font-black text-amber-700">≥ 63.0°C Continuously</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Max Ambient Carvery:</span>
              <span className="font-black text-slate-900">2-Hour Exemption Limit</span>
            </div>
          </div>
        </div>

        {/* Roasting Parameters Table */}
        <div className="overflow-x-auto rounded-xl border-2 border-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-2.5 px-3">Joint Cut / Style</th>
                <th className="py-2.5 px-2">Oven Temp</th>
                <th className="py-2.5 px-2">Time / kg</th>
                <th className="py-2.5 px-2">Resting</th>
                <th className="py-2.5 px-2">Min Core Temp</th>
                <th className="py-2.5 px-3">Probe Location Protocol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-900">
              {HAM_CUTS.map(cut => (
                <tr key={cut.id} className={cut.id === selectedCutId ? "bg-amber-50/70 font-bold" : ""}>
                  <td className="py-2.5 px-3">
                    <div className="font-bold text-slate-900">{cut.name}</div>
                    <div className="text-[10px] text-slate-500">{cut.type}</div>
                  </td>
                  <td className="py-2.5 px-2 text-[11px]">{cut.recommendedOvenTemp}</td>
                  <td className="py-2.5 px-2 font-mono">{cut.cookingTimeMinutesPerKg} min/kg</td>
                  <td className="py-2.5 px-2 font-mono">{cut.restingMinutes} min</td>
                  <td className="py-2.5 px-2 font-black font-mono text-rose-700">
                    ≥ {jurisdiction === "uk" ? cut.targetCoreTempUK : cut.targetCoreTempScotland}°C
                  </td>
                  <td className="py-2.5 px-3 text-[11px] text-slate-700">{cut.probeLocation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4 Essential Roasting & Carvery Rules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1.5">
            <h4 className="font-black uppercase text-slate-900 flex items-center gap-1.5">
              <Thermometer className="w-4 h-4 text-rose-600" />
              <span>Correct Probing Technique</span>
            </h4>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Always sanitise the digital probe with an antibacterial probe wipe before and after insertion. For bone-in joints, probe the thickest meat mass without touching the bone. Hold reading for 30 seconds and record on the Daily Cooking Log.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1.5">
            <h4 className="font-black uppercase text-slate-900 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-amber-600" />
              <span>Carvery Hot-Holding (≥ 63°C)</span>
            </h4>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Carvery roast decks, heat lamps, and holding wells must maintain carved joints at ≥ 63°C throughout service. If heat lamps drop below 63°C, the UK 2-hour display exemption applies; remaining meat must be discarded after 2 hours.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1.5">
            <h4 className="font-black uppercase text-slate-900 flex items-center gap-1.5">
              <Snowflake className="w-4 h-4 text-sky-600" />
              <span>Rapid Cooling Leftover Ham (90 Mins)</span>
            </h4>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Leftover whole roast ham must never be placed steaming into the walk-in fridge. Carve into small portions, place in shallow gastronorm pans, and chill to &lt; 8°C within 90 minutes before refrigerated storage.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-1.5">
            <h4 className="font-black uppercase text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Allergen Notice: Glazes &amp; Mustards</span>
            </h4>
            <p className="text-[11px] text-slate-700 leading-relaxed">
              Commercial honey, mustard, and beer glazes frequently introduce statutory allergens (Mustard, Gluten/Barley, Sulphites). Update the kitchen Allergen Matrix whenever a glazed ham recipe is prepared.
            </p>
          </div>
        </div>

        {/* Sign-off & Verification Footer */}
        <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[11px] text-slate-500">
            FSA Safer Food, Better Business (SFBB) • Regulation (EC) No 852/2004 • Food Safety Act 1990
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold text-slate-700">
            <div className="border-b border-slate-400 pb-1 min-w-[120px] text-center">
              Roasting Lead Sign-Off
            </div>
            <div className="border-b border-slate-400 pb-1 min-w-[100px] text-center">
              Date: ___ / ___ / 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
