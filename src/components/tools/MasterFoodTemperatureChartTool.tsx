"use client";

import React, { useState } from "react";
import {
  Printer,
  ShieldCheck,
  AlertTriangle,
  Flame,
  Snowflake,
  Thermometer,
  Clock,
  Sparkles,
  Info,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface TempZoneInfo {
  name: string;
  badge: string;
  badgeColor: string;
  bgLight: string;
  borderColor: string;
  description: string;
  legalStatus: string;
  maxDuration: string;
  correctiveAction: string;
  pathogens: string;
}

export function MasterFoodTemperatureChartTool({
  templateId
}: {
  templateId?: string;
}) {
  const [selectedTempC, setSelectedTempC] = useState<number>(75);
  const [unit, setUnit] = useState<"C" | "F">("C");
  const [jurisdiction, setJurisdiction] = useState<"uk" | "scotland">("uk");
  const [premisesName, setPremisesName] = useState<string>("The Crown Restaurant & Kitchen");
  const [managerName, setManagerName] = useState<string>("Executive Chef R. Taylor");
  const [stationName, setStationName] = useState<string>("Main Kitchen Cook Line & Hot Pass");

  const toF = (c: number) => Math.round((c * 9) / 5 + 32);
  const displayTemp = unit === "C" ? `${selectedTempC}°C` : `${toF(selectedTempC)}°F`;

  const getZoneInfo = (temp: number): TempZoneInfo => {
    if (temp <= -18) {
      return {
        name: "Deep Frozen Storage Zone",
        badge: "Safe Preservation",
        badgeColor: "bg-blue-600 text-white",
        bgLight: "bg-blue-50/70",
        borderColor: "border-blue-300",
        description: "Commercial deep freezer temperature. All bacterial multiplication and enzymatic spoilage is completely halted. Pathogens enter dormant state.",
        legalStatus: "UK Statutory Requirement: Freezer units must maintain ≤ -18°C continuously. Tolerance up to -15°C allowed briefly during automated defrost cycles.",
        maxDuration: "Long-term commercial storage (3–12 months depending on manufacturer date code).",
        correctiveAction: "If unit rises above -15°C: inspect door seals, verify compressor airflow. If thawed, never refreeze without cooking first.",
        pathogens: "Dormant (Listeria, Salmonella, Clostridium remain viable but cannot multiply)."
      };
    } else if (temp > -18 && temp <= 0) {
      return {
        name: "Sub-Zero Transition & Thawing Risk Zone",
        badge: "Thaw Warning",
        badgeColor: "bg-cyan-600 text-white",
        bgLight: "bg-cyan-50/70",
        borderColor: "border-cyan-300",
        description: "Sub-zero ice crystallization and partial thawing. Ice crystals can puncture cell membranes, releasing moisture (purge) upon thawing.",
        legalStatus: "Uncontrolled freezer temperature. Sub-zero temperatures > -18°C reduce shelf-life and risk condensation.",
        maxDuration: "Temporary holding only during supervised defrosting or delivery transit (max 2 hours).",
        correctiveAction: "Adjust thermostat down to ≤ -18°C. Check evaporator fans for ice build-up.",
        pathogens: "Minimal bacterial activity, but surface condensation allows fungal growth."
      };
    } else if (temp > 0 && temp <= 5) {
      return {
        name: "Commercial Chilled Food Storage (Optimal)",
        badge: "Safe Cold Storage",
        badgeColor: "bg-emerald-600 text-white",
        bgLight: "bg-emerald-50/70",
        borderColor: "border-emerald-300",
        description: "Best practice commercial refrigeration range. Significantly slows pathogen growth and maintains crispness, texture, and sensory quality.",
        legalStatus: "UK Best Practice: 1°C to 5°C. Food Standards Agency (FSA) strongly advises keeping commercial fridges at 5°C or colder to prevent Listeria.",
        maxDuration: "Use-by date as determined by HACCP plan and manufacturer lab validation (typically 2–5 days for open foods).",
        correctiveAction: "Maintain clean air circulation around evaporator coils. Avoid overloading shelves.",
        pathogens: "Psychrotrophic bacteria like Listeria monocytogenes can slowly multiply if held above 5°C."
      };
    } else if (temp > 5 && temp <= 8) {
      return {
        name: "Chilled Storage Upper Legal Threshold",
        badge: "Legal Limit",
        badgeColor: "bg-amber-600 text-white",
        bgLight: "bg-amber-50/70",
        borderColor: "border-amber-300",
        description: "Upper statutory legal limit for cold holding in England, Wales, and Northern Ireland. Pathogens begin accelerating metabolic division.",
        legalStatus: "Food Hygiene (England) Regulations 2013: 8.0°C is the absolute statutory legal limit for chill holding. Readings >8°C constitute an offence.",
        maxDuration: "Allowed under statutory tolerance, but commercial operators should adjust chiller down to ≤5°C immediately.",
        correctiveAction: "Check chiller door seals, reduce opening frequency during service peak, service condenser fans.",
        pathogens: "Listeria monocytogenes growth rate doubles compared to 3°C."
      };
    } else if (temp > 8 && temp < 63) {
      return {
        name: "TEMPERATURE DANGER ZONE",
        badge: "CRITICAL HAZARD",
        badgeColor: "bg-rose-600 text-white animate-pulse",
        bgLight: "bg-rose-50/80",
        borderColor: "border-rose-400",
        description: "CRITICAL DANGER ZONE (8°C to 63°C). Microorganisms multiply exponentially through binary fission every 20 minutes. Peak multiplication occurs at human body temperature (37°C).",
        legalStatus: "PROHIBITED STORAGE RANGE. Food Hygiene Regulations forbid storing high-risk foods in this zone without strict time-temperature control exemptions.",
        maxDuration: "Statutory 2-hour hot service exemption or 4-hour cold buffet exemption. Once time expires, remaining food must be discarded immediately.",
        correctiveAction: "Cook/reheat immediately to ≥75°C (82°C Scotland), or rapidly chill to ≤8°C within 90 minutes. If exposure time exceeds exemption limits, CONDEMN & DISPOSE.",
        pathogens: "Rapid multiplication of Salmonella, E. coli O157, Staphylococcus aureus, Bacillus cereus, Clostridium perfringens."
      };
    } else if (temp >= 63 && temp < 75) {
      return {
        name: "Commercial Hot-Holding Zone",
        badge: "Safe Hot-Holding",
        badgeColor: "bg-amber-700 text-white",
        bgLight: "bg-amber-50/70",
        borderColor: "border-amber-300",
        description: "Statutory hot-holding temperature for buffet wells, soup kettles, carvery decks, and pass heat-lamps. Prevents bacterial multiplication.",
        legalStatus: "UK Statutory Requirement: Hot food must be held at or above 63.0°C at all times. If hot food falls below 63°C, it must be consumed or discarded within 2 hours.",
        maxDuration: "Continuous service permitted as long as core temperature remains strictly ≥ 63°C.",
        correctiveAction: "Stir soups and gravies regularly to eliminate cold spots. Check bain-marie water bath levels and lamp heights.",
        pathogens: "Vegetative pathogen cells cannot reproduce; spore-formers remain dormant."
      };
    } else if (temp >= 75 && temp < 82) {
      return {
        name: "FSA Safe Cooking & Core Thermal Lethality (UK General)",
        badge: "Pathogen Elimination",
        badgeColor: "bg-emerald-700 text-white",
        bgLight: "bg-emerald-50/70",
        borderColor: "border-emerald-300",
        description: "Critical Control Point (CCP). Achieves instantaneous 6-log (99.9999%) reduction of Salmonella, Campylobacter, and Listeria within 30 seconds.",
        legalStatus: "FSA England/Wales/NI Standard: Core temperature of 75°C for at least 30 seconds (or 70°C for 2 min / 80°C for 6 seconds).",
        maxDuration: "Cooking completion standard. Food is safe for immediate service, hot holding (≥63°C), or blast chilling.",
        correctiveAction: "Continue thermal application if needle probe indicates core has not reached 75°C.",
        pathogens: "Destruction of all vegetative foodborne pathogens."
      };
    } else {
      return {
        name: "Scottish Statutory Core & Commercial Warewash Sanitisation",
        badge: "High Thermal Lethality",
        badgeColor: "bg-purple-700 text-white",
        bgLight: "bg-purple-50/70",
        borderColor: "border-purple-300",
        description: "Statutory cooking core for Food Standards Scotland (82°C). Also the minimum final rinse temperature for commercial pass-through dishwashers (thermal disinfection).",
        legalStatus: "Food Hygiene (Scotland) Regulations 2006: Reheating and cooking core must reach 82°C. BS EN 1276/BS EN 1499 warewashing standard.",
        maxDuration: "Instantaneous thermal kill at 82°C. Dishwasher rinse cycle 10–15 seconds.",
        correctiveAction: "Verify boiler water pressure and heating elements if commercial dishwasher rinse fails to hit 82°C.",
        pathogens: "Complete microbial destruction of heat-resistant vegetative strains."
      };
    }
  };

  const zone = getZoneInfo(selectedTempC);

  const presets = [
    { label: "Deep Freezer", temp: -18, icon: Snowflake },
    { label: "Safe Fridge", temp: 3, icon: Thermometer },
    { label: "Fridge Limit", temp: 8, icon: AlertCircle },
    { label: "Peak Danger", temp: 37, icon: AlertTriangle },
    { label: "Hot Holding", temp: 63, icon: Flame },
    { label: "Juice / HTST", temp: 71, icon: Flame },
    { label: "FSA Cooking", temp: 75, icon: CheckCircle2 },
    { label: "Scotland / Rinse", temp: 82, icon: Sparkles }
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 mb-2">
              <Thermometer className="w-3.5 h-3.5 text-amber-600" />
              <span>UK Food Standards Agency &amp; EHO Master Temperature Scale</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              UK Master Food Temperature Danger Zone &amp; Storage Chart
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Explore the statutory UK commercial kitchen food temperature hierarchy. Inspect legal cold holding limits (≤5°C / 8°C), the 8°C–63°C Danger Zone, hot holding rules (≥63°C), and cooking lethality (75°C / 82°C Scotland).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setUnit(u => (u === "C" ? "F" : "C"))}
              className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
            >
              Switch Unit: {unit === "C" ? "°F" : "°C"}
            </button>

            <button
              onClick={() => setJurisdiction(j => (j === "uk" ? "scotland" : "uk"))}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                jurisdiction === "scotland"
                  ? "bg-purple-50 text-purple-800 border-purple-300"
                  : "bg-slate-50 text-slate-700 border-slate-200"
              }`}
            >
              Regs: {jurisdiction === "scotland" ? "Scotland (82°C)" : "UK Standard (75°C)"}
            </button>

            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print A4 Wall Poster</span>
            </button>
          </div>
        </div>

        {/* Quick Jump Presets */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Quick Jump to Critical Control Points (CCP):
          </label>
          <div className="flex flex-wrap gap-2">
            {presets.map(p => {
              const Icon = p.icon;
              const isActive = selectedTempC === p.temp;
              return (
                <button
                  key={p.label}
                  onClick={() => setSelectedTempC(p.temp)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs scale-105"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{p.label} ({p.temp}°C)</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Temperature Slider & Big Visualiser */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Live Temperature Probe Inspector
              </span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                  {displayTemp}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${zone.badgeColor}`}>
                  {zone.badge}
                </span>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-slate-400 block font-medium">Classified Safety Zone:</span>
              <span className="text-base sm:text-lg font-bold text-amber-400">
                {zone.name}
              </span>
            </div>
          </div>

          {/* Slider */}
          <div className="space-y-2">
            <input
              type="range"
              min="-25"
              max="100"
              value={selectedTempC}
              onChange={e => setSelectedTempC(parseInt(e.target.value, 10))}
              className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] font-bold text-slate-400">
              <span>-25°C (Deep Freeze)</span>
              <span>0°C</span>
              <span className="text-rose-400">8°C–63°C (Danger Zone)</span>
              <span>75°C (UK Core)</span>
              <span>100°C (Boil)</span>
            </div>
          </div>
        </div>

        {/* Detailed Zone Diagnostics */}
        <div className={`p-6 rounded-2xl border ${zone.borderColor} ${zone.bgLight} space-y-4`}>
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-slate-900">{zone.name} - Scientific Impact</h3>
              <p className="text-xs text-slate-700 leading-relaxed">{zone.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 text-xs">
            <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-0.5">UK Legal &amp; Regulatory Status</span>
              <span className="text-slate-600 leading-relaxed block">{zone.legalStatus}</span>
            </div>
            <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-0.5">Max Permitted Duration</span>
              <span className="text-slate-600 leading-relaxed block">{zone.maxDuration}</span>
            </div>
            <div className="p-3 bg-white/80 rounded-xl border border-slate-200/80">
              <span className="font-bold text-slate-900 block mb-0.5">Mandatory Corrective Action</span>
              <span className="text-slate-600 leading-relaxed block">{zone.correctiveAction}</span>
            </div>
          </div>
        </div>

        {/* Master Temperature Benchmarks Reference Matrix */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Statutory Commercial Kitchen Temperature Hierarchy</span>
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                  <th className="p-3">Stage / Appliance</th>
                  <th className="p-3">Standard Target (°C)</th>
                  <th className="p-3">Statutory Legal Limit</th>
                  <th className="p-3">Audit Frequency</th>
                  <th className="p-3">Key Bacterial Hazard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                <tr className="hover:bg-blue-50/50">
                  <td className="p-3 font-bold flex items-center gap-1.5">
                    <Snowflake className="w-3.5 h-3.5 text-blue-600" /> Commercial Deep Freezer
                  </td>
                  <td className="p-3 font-semibold text-blue-700">-18°C or colder</td>
                  <td className="p-3 text-slate-600">≤ -18°C (Brief -15°C defrost)</td>
                  <td className="p-3">Twice daily (AM/PM)</td>
                  <td className="p-3 text-slate-600">All growth halted / dormant</td>
                </tr>
                <tr className="hover:bg-emerald-50/50">
                  <td className="p-3 font-bold flex items-center gap-1.5">
                    <Thermometer className="w-3.5 h-3.5 text-emerald-600" /> Walk-in Chiller / Prep Fridge
                  </td>
                  <td className="p-3 font-semibold text-emerald-700">1°C to 5°C</td>
                  <td className="p-3 text-slate-600">Legal max 8.0°C (England/Wales)</td>
                  <td className="p-3">Twice daily (AM/PM)</td>
                  <td className="p-3 text-slate-600">Listeria monocytogenes</td>
                </tr>
                <tr className="hover:bg-rose-50/50 bg-rose-50/30">
                  <td className="p-3 font-bold flex items-center gap-1.5 text-rose-800">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Temperature Danger Zone
                  </td>
                  <td className="p-3 font-bold text-rose-700">8°C to 63°C</td>
                  <td className="p-3 text-rose-700 font-semibold">STRICTLY PROHIBITED</td>
                  <td className="p-3">Continuous monitoring</td>
                  <td className="p-3 text-rose-700">Rapid Salmonella &amp; E. coli growth</td>
                </tr>
                <tr className="hover:bg-amber-50/50">
                  <td className="p-3 font-bold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-600" /> Hot-Holding Buffet / Pass
                  </td>
                  <td className="p-3 font-semibold text-amber-700">≥ 63°C</td>
                  <td className="p-3 text-slate-600">≥ 63.0°C (Max 2h exemption)</td>
                  <td className="p-3">Every 2 hours during service</td>
                  <td className="p-3 text-slate-600">Clostridium perfringens</td>
                </tr>
                <tr className="hover:bg-emerald-50/50">
                  <td className="p-3 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Cooking Core (UK General)
                  </td>
                  <td className="p-3 font-semibold text-emerald-700">≥ 75°C for 30s</td>
                  <td className="p-3 text-slate-600">75°C (30s) / 70°C (2m)</td>
                  <td className="p-3">Every cook batch</td>
                  <td className="p-3 text-slate-600">Campylobacter &amp; Salmonella lethality</td>
                </tr>
                <tr className="hover:bg-purple-50/50">
                  <td className="p-3 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" /> Scottish Cooking &amp; Reheating
                  </td>
                  <td className="p-3 font-semibold text-purple-700">≥ 82°C instant</td>
                  <td className="p-3 text-slate-600">82.0°C statutory requirement</td>
                  <td className="p-3">Every reheat batch</td>
                  <td className="p-3 text-slate-600">Destruction of bacterial toxins</td>
                </tr>
                <tr className="hover:bg-cyan-50/50">
                  <td className="p-3 font-bold flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-600" /> Rapid Blast Chilling
                  </td>
                  <td className="p-3 font-semibold text-cyan-700">63°C down to 8°C in 90m</td>
                  <td className="p-3 text-slate-600">Within 90 mins max</td>
                  <td className="p-3">Every cooked cooled batch</td>
                  <td className="p-3 text-slate-600">Bacillus cereus spore germination</td>
                </tr>
                <tr className="hover:bg-indigo-50/50">
                  <td className="p-3 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Dishwasher Sanitising Rinse
                  </td>
                  <td className="p-3 font-semibold text-indigo-700">≥ 82°C</td>
                  <td className="p-3 text-slate-600">BS EN 1276 thermal disinfection</td>
                  <td className="p-3">Daily temperature strip test</td>
                  <td className="p-3 text-slate-600">Surface cross-contamination removal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Printable High-Contrast A4 Commercial Wall Poster */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 space-y-6 printable-doc shadow-xs">
        {/* Poster Header */}
        <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-1">
              Official Commercial Kitchen Safety Notice
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              MASTER FOOD TEMPERATURE CHART
            </h1>
            <p className="text-xs font-semibold text-slate-600">
              Food Safety Act 1990 &bull; Food Hygiene Regulations &bull; SFBB HACCP Standard
            </p>
          </div>

          <div className="text-right text-xs space-y-1">
            <div className="font-bold text-slate-900">{premisesName}</div>
            <div className="text-slate-600">{stationName}</div>
            <div className="text-slate-500 font-mono text-[10px]">Supervisor: {managerName}</div>
          </div>
        </div>

        {/* Visual Temperature Spectrum (Printable High-Contrast) */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Cold Chain Side */}
            <div className="p-4 rounded-xl border-2 border-blue-500 bg-blue-50/40 space-y-3">
              <h4 className="text-sm font-black text-blue-900 uppercase tracking-wide flex items-center gap-1.5">
                <Snowflake className="w-4 h-4 text-blue-600" />
                <span>Cold Chain &amp; Storage Controls</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-white rounded border border-blue-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Commercial Deep Freezer</span>
                  <span className="font-black text-blue-700 bg-blue-100 px-2 py-0.5 rounded">≤ -18°C</span>
                </div>
                <div className="p-2 bg-white rounded border border-blue-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Walk-In &amp; Prep Refrigerators</span>
                  <span className="font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">1°C to 5°C</span>
                </div>
                <div className="p-2 bg-white rounded border border-blue-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Statutory Legal Max Chilled Limit</span>
                  <span className="font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">8.0°C</span>
                </div>
                <div className="p-2 bg-white rounded border border-blue-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Rapid Chilling (Cook to Chill)</span>
                  <span className="font-black text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded">63°C &rarr; 8°C in 90m</span>
                </div>
              </div>
            </div>

            {/* Thermal Cooking & Holding Side */}
            <div className="p-4 rounded-xl border-2 border-rose-500 bg-rose-50/40 space-y-3">
              <h4 className="text-sm font-black text-rose-900 uppercase tracking-wide flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-600" />
                <span>Hot Holding &amp; Cooking Lethality</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="p-2 bg-white rounded border border-rose-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Commercial Hot-Holding Pass</span>
                  <span className="font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded">≥ 63°C</span>
                </div>
                <div className="p-2 bg-white rounded border border-rose-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">UK Cooking Core (General)</span>
                  <span className="font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">≥ 75°C (30s)</span>
                </div>
                <div className="p-2 bg-white rounded border border-rose-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Scottish Statutory Core &amp; Reheat</span>
                  <span className="font-black text-purple-700 bg-purple-100 px-2 py-0.5 rounded">≥ 82°C Instant</span>
                </div>
                <div className="p-2 bg-white rounded border border-rose-200 flex justify-between items-center">
                  <span className="font-bold text-slate-900">Dishwasher Final Sanitising Rinse</span>
                  <span className="font-black text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">≥ 82°C</span>
                </div>
              </div>
            </div>
          </div>

          {/* Danger Zone Warning Banner */}
          <div className="p-4 rounded-xl border-2 border-dashed border-red-600 bg-red-50 text-center space-y-1">
            <div className="text-sm font-black text-red-900 tracking-wider uppercase flex items-center justify-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>THE DANGER ZONE: 8°C TO 63°C</span>
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <p className="text-xs text-red-800 font-medium max-w-2xl mx-auto">
              Bacteria multiply exponentially between 8°C and 63°C, peaking at 37°C. High-risk foods must NEVER be kept in this zone without documented time-exemption protocols. Hot food falling below 63°C must be eaten or thrown away within 2 hours.
            </p>
          </div>

          {/* Probe Calibration Verification Protocol */}
          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 space-y-2 text-xs">
            <span className="font-bold text-slate-900 uppercase tracking-wide block">
              Monthly Digital Probe Thermometer Calibration Check Protocol:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              <div className="p-2 bg-white rounded border border-slate-200">
                <span className="font-bold text-slate-900 block">Ice Water Slush Test:</span>
                <span>Submerge probe in crushed ice water. Temperature must read between <strong>-1.0°C and +1.0°C</strong> within 30 seconds.</span>
              </div>
              <div className="p-2 bg-white rounded border border-slate-200">
                <span className="font-bold text-slate-900 block">Boiling Water Test:</span>
                <span>Immerse probe into vigorously rolling boiling water. Temperature must read between <strong>99.0°C and 101.0°C</strong>.</span>
              </div>
            </div>
          </div>

          {/* Supervisor Weekly Verification Sign-Off */}
          <div className="pt-2 border-t-2 border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px]">
            <div>
              <span className="font-bold text-slate-900 block uppercase">Weekly Audit Week:</span>
              <span className="text-slate-600 underline decoration-dotted">Week _____ / Year 2026</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block uppercase">Lead Chef Sign:</span>
              <span className="text-slate-600 underline decoration-dotted">_____________________</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block uppercase">Probe Serial No:</span>
              <span className="text-slate-600 underline decoration-dotted">ETI-Thermapen-_____</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 block uppercase">EHO File Date:</span>
              <span className="text-slate-600 underline decoration-dotted">___ / ___ / 2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
