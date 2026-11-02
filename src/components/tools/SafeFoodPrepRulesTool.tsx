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
  Sparkles,
  ClipboardCheck,
  Building2,
  UserCheck,
  RefreshCw,
  SlidersHorizontal,
  ChevronRight
} from "lucide-react";

interface PrepStation {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  iconBg: string;
  criticalRules: {
    rule: string;
    detail: string;
    standard: string;
  }[];
  temperatureStandard: string;
  ppeRequired: string[];
}

const PREP_STATIONS: PrepStation[] = [
  {
    id: "master",
    name: "Master Kitchen Standard (All Stations)",
    shortName: "All Stations",
    badge: "General Production",
    iconBg: "bg-slate-900 text-white",
    temperatureStandard: "Ambient prep < 20 minutes before returning to cold chain (< 8°C)",
    ppeRequired: ["Clean laundered apron", "Hairnet / beard snood", "Blue detectable plaster for minor cuts", "Zero watch or jewellery (plain band only)"],
    criticalRules: [
      {
        rule: "Rigorous 20-Second Handwashing",
        detail: "Wash forearms and hands at designated basins before handling food, after raw contact, touching waste, or using the WC.",
        standard: "Regulation (EC) No 852/2004 Annex II Chap VIII"
      },
      {
        rule: "Strict Colour-Coded Separation",
        detail: "Never use the same board or knife for raw meats and ready-to-eat produce without full 2-stage chemical disinfection.",
        standard: "FSA Safer Food, Better Business (SFBB)"
      },
      {
        rule: "Two-Stage Cleaning & Disinfection",
        detail: "Stage 1: Detergent wash to strip grease. Stage 2: Disinfectant spray with certified chemical meeting BS EN 1276.",
        standard: "BS EN 1276 / BS EN 13697 Certified"
      },
      {
        rule: "Clear FIFO Date Labelling",
        detail: "Every prepped pan, gastronorm, and vacuum bag must carry prep date, discard date, and allergenic ingredients.",
        standard: "Food Safety Act 1990 Section 14"
      }
    ]
  },
  {
    id: "raw-meat",
    name: "Raw Meat & Poultry Preparation Station",
    shortName: "Raw Meat & Poultry",
    badge: "High Biohazard Risk",
    iconBg: "bg-rose-600 text-white",
    temperatureStandard: "Chilled meat ≤ 5°C. Minimise bench time to under 15 minutes.",
    ppeRequired: ["Disposable red apron over chef whites", "Single-use food grade gloves", "Hair covering"],
    criticalRules: [
      {
        rule: "Dedicated Red Equipment Only",
        detail: "Use only red chopping boards, red knives, and dedicated raw meat cleavers. Never bring RTE equipment into this area.",
        standard: "FSA E. coli O157 Control Guidance"
      },
      {
        rule: "Raw Poultry Never Washed",
        detail: "Never wash raw chicken or turkey under taps. Water droplets splash Campylobacter bacteria up to 1 metre across kitchen prep areas.",
        standard: "UK FSA Campylobacter Intervention Standard"
      },
      {
        rule: "Immediate Disinfection Post-Prep",
        detail: "Strip raw meat station immediately after butchery. Spray BS EN 1276 sanitiser and adhere to full contact time (e.g. 60 seconds).",
        standard: "BS EN 1276 / Contact Time Verified"
      },
      {
        rule: "Chiller Storage Order (Bottom Tier)",
        detail: "Store prepped raw meats on bottom shelves in leakproof covered containers below cooked foods and unwashed produce.",
        standard: "Cross-Contamination Prevention Hierarchy"
      }
    ]
  },
  {
    id: "veg-salad",
    name: "Vegetable & Salad Sanitising Station",
    shortName: "Salad & Produce",
    badge: "Ready-To-Eat Ready",
    iconBg: "bg-emerald-600 text-white",
    temperatureStandard: "Wash water ambient. Chilled dressed salads maintained ≤ 5°C.",
    ppeRequired: ["Clean apron", "Clean bare hands after washing (or fresh gloves)", "Hairnet"],
    criticalRules: [
      {
        rule: "Brown Board for Root Veg, Green for Salads",
        detail: "Unwashed root vegetables containing farm soil must be prepped on brown boards. Green boards are reserved for clean ready-to-eat salads and fruits.",
        standard: "FSA Dual-Board Soil Separation Rule"
      },
      {
        rule: "Food-Safe Sanitiser Wash for Raw Salads",
        detail: "All raw salad leaves, herbs, and tomatoes served without further cooking must undergo clean water rinse with chlorine or peracetic acid wash.",
        standard: "UK Catering Good Hygiene Practice Guide"
      },
      {
        rule: "Soil Isolation Away from Cookline",
        detail: "Peeling potatoes and trimming muddy leeks generates airborne soil spores (Bacillus cereus, Clostridium). Keep at separate pot/veg wash bay.",
        standard: "Cross-Contamination Airborne Barrier"
      },
      {
        rule: "Salad Spinner & Drainage Disinfection",
        detail: "Spinners and colanders must be washed and disinfected daily. Never submerge raw meat equipment in salad preparation sinks.",
        standard: "BS EN 1276 Hygiene Standard"
      }
    ]
  },
  {
    id: "cookline",
    name: "Cookline & Hot-Holding Section",
    shortName: "Cookline & Hot-Hold",
    badge: "Thermal CCP Control",
    iconBg: "bg-amber-600 text-white",
    temperatureStandard: "Cooking: ≥ 75°C for 30s (82°C Scotland). Hot holding: ≥ 63°C continuously.",
    ppeRequired: ["Heat-resistant protective gauntlets", "Clean apron", "Chef jacket"],
    criticalRules: [
      {
        rule: "Mandatory Digital Probe Verification",
        detail: "Check the thermal centre of high-risk proteins (poultry, minced beef, pork, rolled joints). Ensure reading holds at target temperature.",
        standard: "Critical Control Point (CCP 1 - Thermal Lethality)"
      },
      {
        rule: "Pre-Service Hot-Holding Pre-Heat",
        detail: "Pre-heat hot cupboards and bain-maries before adding piping hot foods. Never use hot-holding equipment to reheat cold dishes.",
        standard: "Food Safety and Hygiene (England) Regs 2013"
      },
      {
        rule: "90-Minute Rapid Chill Protocol",
        detail: "Cooked batch recipes for cooling must be divided into shallow pans (< 5cm depth) and chilled to < 8°C within 90 minutes.",
        standard: "FSA SFBB Safe Method - Rapid Cooling"
      },
      {
        rule: "Single Reheating Maximum",
        detail: "Pre-cooked stews and gravies may only be reheated once to ≥ 75°C (82°C in Scotland). Discard leftover reheated portions.",
        standard: "Spore Germination & Toxin Prevention"
      }
    ]
  },
  {
    id: "allergen-free",
    name: "Dedicated Allergen-Safe & Gluten-Free Zone",
    shortName: "Allergen-Safe Zone",
    badge: "Natasha's Law Compliance",
    iconBg: "bg-purple-600 text-white",
    temperatureStandard: "Store allergen-safe ingredients in sealed airtight containers with purple colour labels.",
    ppeRequired: ["Fresh single-use apron (or purple apron)", "Fresh clean gloves", "Dedicated prep sleeves"],
    criticalRules: [
      {
        rule: "Dedicated Purple Utensils & Boards",
        detail: "Use dedicated purple chopping boards, knives, and measuring cups solely for allergen-free and gluten-free preparation.",
        standard: "Natasha's Law (Food Information Regs 2021)"
      },
      {
        rule: "Schedule Allergen Prep First",
        detail: "Prepare allergen-free items first thing in the morning following overnight deep cleaning, prior to airborne flour or nut handling.",
        standard: "Airborne Particulate Cross-Contact Protocol"
      },
      {
        rule: "Separate Fryers & Oil Wells",
        detail: "Never fry gluten-free chips in fryers used for battered fish, sausages, or onion rings. Frying temperatures do not destroy allergens.",
        standard: "FSA 14 Statutory Allergen Matrix Standard"
      },
      {
        rule: "Decontaminate Weighing Scales",
        detail: "Wipe down electronic scales with fresh single-use disposable blue roll before measuring allergen-safe flours and seasonings.",
        standard: "Microgram Threshold Allergen Protection"
      }
    ]
  }
];

interface ReadinessAuditItem {
  id: string;
  category: "Hygiene" | "Separation" | "Temperature" | "Equipment";
  label: string;
  mandatoryRule: string;
}

const AUDIT_ITEMS: ReadinessAuditItem[] = [
  {
    id: "audit-1",
    category: "Hygiene",
    label: "Dedicated Handwash Basin Stocked",
    mandatoryRule: "Basin with unblocked hot & cold running water, bactericidal soap, and paper towels (no cloths)."
  },
  {
    id: "audit-2",
    category: "Hygiene",
    label: "Staff Hygiene & Fitness-to-Work Verified",
    mandatoryRule: "Clean protective aprons, hair coverings secured, no jewellery, and zero 48-hour sickness/diarrhoea reported."
  },
  {
    id: "audit-3",
    category: "Equipment",
    label: "BS EN 1276 Chemical Disinfectants Available",
    mandatoryRule: "Certified sanitiser bottles diluted according to manufacturer guidelines, within shelf-life."
  },
  {
    id: "audit-4",
    category: "Equipment",
    label: "Digital Probe Thermometer Calibrated",
    mandatoryRule: "Digital thermometer verified in ice bath (0°C ±1°C) or boiling water (100°C ±1°C) with probe wipes."
  },
  {
    id: "audit-5",
    category: "Separation",
    label: "Full Colour-Coded Boards & Knives Stationed",
    mandatoryRule: "Red (raw meat), Blue (raw fish), Yellow (cooked meat), Green (salad/fruit), Brown (root veg), White (bakery/dairy), Purple (allergens)."
  },
  {
    id: "audit-6",
    category: "Temperature",
    label: "Chilled Storage Operating at Safe Range (≤ 5°C)",
    mandatoryRule: "Refrigerators, walk-in coolers, and prep counter wells inspected and reading below statutory 8°C limit."
  },
  {
    id: "audit-7",
    category: "Separation",
    label: "Raw Meat Bottom-Shelf Vertical Separation Verified",
    mandatoryRule: "Raw animal proteins stored securely below all prepped produce, cooked meats, and ready-to-eat dressings."
  },
  {
    id: "audit-8",
    category: "Temperature",
    label: "Rapid Cooling Equipment & Shallow Pans Ready",
    mandatoryRule: "Clean shallow stainless pans (< 5cm depth) staged for rapid cooling within the 90-minute limit."
  }
];

export function SafeFoodPrepRulesTool({ templateId }: { templateId?: string }) {
  const [selectedStationId, setSelectedStationId] = useState<string>("master");
  const [jurisdiction, setJurisdiction] = useState<"uk" | "scotland">("uk");
  const [businessName, setBusinessName] = useState<string>("The Crown Gastro & Kitchen");
  const [stationIdentifier, setStationIdentifier] = useState<string>("Main Kitchen Line - Bench 1");
  const [supervisorName, setSupervisorName] = useState<string>("Executive Chef");
  const [checkedAuditIds, setCheckedAuditIds] = useState<string[]>([
    "audit-1",
    "audit-2",
    "audit-3",
    "audit-5",
    "audit-6"
  ]);

  const activeStation = PREP_STATIONS.find(s => s.id === selectedStationId) || PREP_STATIONS[0];

  const toggleAuditItem = (id: string) => {
    setCheckedAuditIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const auditScorePercent = Math.round((checkedAuditIds.length / AUDIT_ITEMS.length) * 100);

  const cookingTempText = jurisdiction === "uk" ? "75°C for 30s (UK Standard)" : "82°C for instant/core (Scotland Regs)";

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Interactive Safe Food Prep Standard Operating Procedure (SOP)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              UK Commercial Kitchen Food Preparation Rules Poster &amp; Station SOP
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Customise your kitchen food preparation guidelines by specific culinary station, select legal jurisdiction temperature thresholds, and complete the pre-service shift audit before generating an A4 printable wall poster.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-sm hover:scale-[1.01] cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print A4 Poster</span>
            </button>
          </div>
        </div>

        {/* Configuration Toolbar */}
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
              placeholder="e.g. Saim's Bistro"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Station / Bench ID
            </label>
            <input
              type="text"
              value={stationIdentifier}
              onChange={e => setStationIdentifier(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
              placeholder="e.g. Prep Bench 1 (Raw Line)"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Head Chef / Supervisor
            </label>
            <input
              type="text"
              value={supervisorName}
              onChange={e => setSupervisorName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
              placeholder="e.g. Chef J. Reynolds"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              UK Cooking Temp Standard
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
                75°C (Eng/Wal/NI)
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

        {/* Station Navigation Pills */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Active Kitchen Station View:
          </label>
          <div className="flex flex-wrap gap-2">
            {PREP_STATIONS.map(station => {
              const isActive = station.id === selectedStationId;
              return (
                <button
                  key={station.id}
                  onClick={() => setSelectedStationId(station.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs scale-[1.01]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? "bg-amber-400" : "bg-slate-400"}`} />
                  <span>{station.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Pre-Prep Shift Readiness Audit Tool */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-amber-600" />
              <div>
                <h3 className="text-sm font-black text-slate-900">
                  Pre-Service Kitchen Readiness Audit Checklist
                </h3>
                <p className="text-[11px] text-slate-500">
                  Click items below as completed before staff begin active culinary prep.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">
                  Prep Readiness Score
                </span>
                <span className="text-sm font-black text-slate-900">
                  {checkedAuditIds.length} / {AUDIT_ITEMS.length} ({auditScorePercent}%)
                </span>
              </div>
              <div
                className={`px-3 py-1.5 rounded-xl text-xs font-black border ${
                  auditScorePercent === 100
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                    : auditScorePercent >= 75
                    ? "bg-amber-50 text-amber-800 border-amber-300"
                    : "bg-rose-50 text-rose-800 border-rose-300"
                }`}
              >
                {auditScorePercent === 100
                  ? "EHO Audit Ready"
                  : auditScorePercent >= 75
                  ? "Minor Gaps"
                  : "Prep Prohibited"}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {AUDIT_ITEMS.map(item => {
              const isChecked = checkedAuditIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleAuditItem(item.id)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-3 select-none ${
                    isChecked
                      ? "bg-white border-emerald-300 shadow-2xs"
                      : "bg-slate-100/70 border-slate-200 hover:border-slate-300 opacity-80"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}} // handled by parent onClick
                    className="mt-0.5 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <div className="space-y-0.5">
                    <span className={`font-bold block ${isChecked ? "text-slate-900" : "text-slate-600"}`}>
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 leading-snug block">
                      {item.mandatoryRule}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2 text-[11px] text-slate-500">
            <span className="italic">
              Rule based on FSA SFBB &amp; The Food Safety and Hygiene (England) Regulations 2013
            </span>
            <button
              type="button"
              onClick={() => setCheckedAuditIds(AUDIT_ITEMS.map(a => a.id))}
              className="text-amber-700 hover:text-amber-900 font-bold underline cursor-pointer"
            >
              Check All 8 As Complete
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          A4 PRINTABLE POSTER CONTAINER (Displays on web & full A4 print)
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-900 space-y-6 printable-doc shadow-md print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none">
        {/* Poster Header */}
        <div className="border-b-4 border-slate-900 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-amber-400 text-slate-950 font-mono font-black text-xs uppercase tracking-wider mb-2">
                COMMERCIAL KITCHEN FOOD SAFETY STANDARD
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                {activeStation.name}
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                Mandatory Operational Hygiene, Temperature Limits &amp; Cross-Contamination Barriers
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-900 rounded-xl p-3 text-right min-w-[200px]">
              <div className="text-[10px] font-bold uppercase text-slate-500">Premises / Bench</div>
              <div className="text-sm font-black text-slate-900 truncate">{businessName}</div>
              <div className="text-xs font-bold text-amber-700 truncate">{stationIdentifier}</div>
            </div>
          </div>

          {/* Quick Sign-off Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-200 text-[11px]">
            <div>
              <span className="font-bold text-slate-500 uppercase block">Supervisor:</span>
              <span className="font-black text-slate-900">{supervisorName}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Core Cook Target:</span>
              <span className="font-black text-rose-700">{cookingTempText}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Chilled Target:</span>
              <span className="font-black text-sky-700">≤ 5°C (Legal max 8°C)</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Sanitiser Code:</span>
              <span className="font-black text-emerald-800">BS EN 1276 / BS EN 13697</span>
            </div>
          </div>
        </div>

        {/* 4 Essential Food Preparation Rules Grid */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Station Critical Operating Rules (Mandatory Compliance)</span>
            </h3>
            <span className="text-[11px] font-bold text-slate-500">
              Station Standard: {activeStation.temperatureStandard}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeStation.criticalRules.map((ruleItem, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border-2 border-slate-300 bg-slate-50 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono font-black text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">
                      {ruleItem.standard}
                    </span>
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                    {ruleItem.rule}
                  </h4>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {ruleItem.detail}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Statutory EHO Audit Requirement
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 4 Cs Summary Reference Banner */}
        <div className="border-2 border-slate-900 rounded-2xl p-4 bg-amber-50/70">
          <h3 className="text-xs font-black uppercase text-amber-950 mb-3 tracking-wider">
            FSA 4 Cs Food Hygiene Pillar Matrix
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="bg-white p-3 rounded-xl border border-amber-300">
              <div className="font-black text-slate-900 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>1. CLEANING</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                2-stage method: detergent wipe to remove grease, then certified BS EN 1276 sanitiser with full contact time.
              </p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-amber-300">
              <div className="font-black text-slate-900 flex items-center gap-1.5 mb-1">
                <Flame className="w-3.5 h-3.5 text-rose-600" />
                <span>2. COOKING</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Core temperature ≥ 75°C for 30s (82°C in Scotland). Probe centre of thickest cut with disinfected probe.
              </p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-amber-300">
              <div className="font-black text-slate-900 flex items-center gap-1.5 mb-1">
                <Snowflake className="w-3.5 h-3.5 text-sky-600" />
                <span>3. CHILLING</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Cool hot cooked foods to &lt; 8°C within 90 minutes. Keep chillers between 1°C and 5°C (legal max 8°C).
              </p>
            </div>

            <div className="bg-white p-3 rounded-xl border border-amber-300">
              <div className="font-black text-slate-900 flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-orange-600" />
                <span>4. CROSS-CONTAMINATION</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Strict colour-coded boards, bottom-shelf raw storage, 20s handwash, and dedicated allergen-safe zones.
              </p>
            </div>
          </div>
        </div>

        {/* Required PPE & Hygiene Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50">
            <h4 className="font-black uppercase text-slate-900 mb-2 flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-slate-700" />
              <span>Mandatory Protective Clothing &amp; PPE</span>
            </h4>
            <ul className="space-y-1.5 text-slate-700 text-[11px]">
              {activeStation.ppeRequired.map((ppe, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>{ppe}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-slate-300 bg-slate-50">
            <h4 className="font-black uppercase text-slate-900 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-slate-700" />
              <span>Statutory Exclusion &amp; Health Rules</span>
            </h4>
            <ul className="space-y-1.5 text-slate-700 text-[11px]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                <span><strong>48-Hour Exclusion:</strong> Staff with vomiting/diarrhoea must stay off duty for 48h after symptoms cease.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                <span><strong>Blue Detectable Plasters:</strong> All cuts/burns must be dressed with metal-detectable blue waterproof plasters.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                <span><strong>Zero Cross-Contact:</strong> Single-use probe wipes must be used between every temperature probe insertion.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sign-off & Verification Footer */}
        <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[11px] text-slate-500">
            Issued under Food Safety Act 1990 • Regulation (EC) No 852/2004 • SFBB Compliance Form
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold text-slate-700">
            <div className="border-b border-slate-400 pb-1 min-w-[120px] text-center">
              Shift Lead Signature
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
