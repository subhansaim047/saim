"use client";

import React, { useState } from "react";
import {
  Printer,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Thermometer,
  Layers,
  Truck,
  Refrigerator,
  Flame,
  Snowflake,
  PackageCheck,
  UtensilsCrossed
} from "lucide-react";

interface FlowStep {
  id: string;
  stepNumber: number;
  name: string;
  isCCP: boolean;
  ccpNumber?: string;
  icon: any;
  hazards: string;
  criticalLimit: string;
  monitoringProcedure: string;
  correctiveAction: string;
  ukRegulation: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    id: "step-1",
    stepNumber: 1,
    name: "Purchasing & Supplier Approval",
    isCCP: false,
    icon: PackageCheck,
    hazards: "Chemicals, unapproved additives, physical contaminants, or unverified allergens from unaccredited vendors.",
    criticalLimit: "Suppliers must be on the approved supplier register; delivery specifications verified.",
    monitoringProcedure: "Annual review of vendor food safety certification (BRCGS, SALSA, or local council rating >=4).",
    correctiveAction: "Suspend unapproved vendors immediately; reject unauthorized ingredient substitutions.",
    ukRegulation: "Regulation (EC) No 852/2004 Annex II Chapter IX"
  },
  {
    id: "step-2",
    stepNumber: 2,
    name: "Goods Inwards & Delivery Receipt",
    isCCP: true,
    ccpNumber: "CCP 1",
    icon: Truck,
    hazards: "Bacterial multiplication (Salmonella, Listeria) if delivery cold chain was broken in transit.",
    criticalLimit: "Chilled foods: <= 5.0°C (legal max 8.0°C). Frozen foods: <= -18.0°C. Clean vehicle, sound packaging.",
    monitoringProcedure: "Probe representative delivery boxes using clean probe; check use-by dates and lot codes.",
    correctiveAction: "REJECT any delivery exceeding 8.0°C chilled or exhibiting signs of defrosting/damage.",
    ukRegulation: "Food Hygiene (England) Regs 2013 & Art 18 Reg EC 178/2002"
  },
  {
    id: "step-3",
    stepNumber: 3,
    name: "Cold, Frozen & Dry Storage",
    isCCP: true,
    ccpNumber: "CCP 2",
    icon: Refrigerator,
    hazards: "Cross-contamination from raw meat drips onto ready-to-eat foods; pest ingress; spore germination.",
    criticalLimit: "Chillers: 1°C to 5°C. Freezers: <= -18°C. Dry store: clean, dry, stock raised >15cm off floor.",
    monitoringProcedure: "Inspect and log ambient appliance temperatures twice daily (AM and PM opening checks).",
    correctiveAction: "Service refrigeration thermostat; transfer foods to backup chiller if temp rises >8°C.",
    ukRegulation: "FSA Safer Food, Better Business (SFBB) Chilling Pillar"
  },
  {
    id: "step-4",
    stepNumber: 4,
    name: "Thawing & Controlled Defrosting",
    isCCP: false,
    icon: Snowflake,
    hazards: "Surface temperature entering danger zone (8°C–63°C) while core remains frozen; bacterial growth.",
    criticalLimit: "Defrost strictly inside commercial chiller (1°C–5°C) on bottom shelf in deep drip tray. Never ambient.",
    monitoringProcedure: "Probe center of defrosting joint to confirm zero ice crystals remain before cooking.",
    correctiveAction: "Extend defrost time under refrigeration; never thaw under warm standing water.",
    ukRegulation: "FSA Cooking & Defrosting Safety Guidance"
  },
  {
    id: "step-5",
    stepNumber: 5,
    name: "Food Preparation & Allergen Controls",
    isCCP: false,
    icon: UtensilsCrossed,
    hazards: "Cross-contact of 14 statutory allergens; pathogen transfer between raw poultry and salad benches.",
    criticalLimit: "Strict colour-coded chopping boards (Red, Yellow, Blue, Green, Purple); BS EN 1499 hand hygiene.",
    monitoringProcedure: "Continuous shift supervision; separate prep areas and dedicated sanitized utensils.",
    correctiveAction: "Discard contaminated ready-to-eat food immediately; re-sanitize affected prep benches.",
    ukRegulation: "Natasha's Law (FIR 2021) & Cross-Contamination Standard"
  },
  {
    id: "step-6",
    stepNumber: 6,
    name: "Cooking & Core Thermal Lethality",
    isCCP: true,
    ccpNumber: "CCP 3",
    icon: Flame,
    hazards: "Survival of vegetative food poisoning bacteria (Campylobacter, Salmonella, E. coli O157, Listeria).",
    criticalLimit: "Core temperature: >= 75°C for 30 seconds (or 70°C for 2 min). Scotland: >= 82.0°C statutory.",
    monitoringProcedure: "Probe the thickest part of the product with calibrated digital needle thermometer for every batch.",
    correctiveAction: "Continue thermal cooking until probe confirms core has reached required temperature.",
    ukRegulation: "FSA Thermal Lethality Standards & Scottish Regs 2006"
  },
  {
    id: "step-7",
    stepNumber: 7,
    name: "Commercial Hot-Holding Pass",
    isCCP: true,
    ccpNumber: "CCP 4",
    icon: Flame,
    hazards: "Spore-formers (Clostridium perfringens) multiplying if food drops into danger zone (<63°C).",
    criticalLimit: "Hot food held at or above 63.0°C continuously. Maximum single 2-hour service exemption rule.",
    monitoringProcedure: "Probe hot-holding wells, bain-marie units, and carvery passes every 2 hours during service.",
    correctiveAction: "Reheat food once to >=75°C (82°C Scotland), or discard immediately if time exceeds 2 hours.",
    ukRegulation: "Food Hygiene (England) Regulations 2013 Schedule 4"
  },
  {
    id: "step-8",
    stepNumber: 8,
    name: "Rapid Blast Chilling (Cook to Chill)",
    isCCP: true,
    ccpNumber: "CCP 5",
    icon: Clock,
    hazards: "Bacillus cereus spore germination and toxin formation during prolonged slow ambient cooling.",
    criticalLimit: "Cool cooked food from 63°C down to 8°C or colder within 90 minutes maximum.",
    monitoringProcedure: "Record start cooling time, interim temperature at 45 mins, and final chilled temp at 90 mins.",
    correctiveAction: "Portion into shallow pans, use ice bath, or transfer to commercial blast chiller immediately.",
    ukRegulation: "FSA 90-Minute Rapid Chilling Standard"
  },
  {
    id: "step-9",
    stepNumber: 9,
    name: "Reheating Cooked Foods",
    isCCP: true,
    ccpNumber: "CCP 6",
    icon: Flame,
    hazards: "Survival of bacteria multiplied during storage; toxin production.",
    criticalLimit: "Core temperature must achieve >= 75°C for 30s (Scotland: >= 82°C). Only reheat once.",
    monitoringProcedure: "Probe center of every reheated portion or bulk batch before plating or transfer to hot hold.",
    correctiveAction: "Discard food if it fails to reach 75°C. NEVER cool and reheat a second time.",
    ukRegulation: "SFBB Reheating Safety Rules & Scottish Regs 2006"
  },
  {
    id: "step-10",
    stepNumber: 10,
    name: "Plating, Packaging & Takeaway Delivery",
    isCCP: false,
    icon: PackageCheck,
    hazards: "Post-cooking physical contamination; allergen mislabelling; temperature drop during transit.",
    criticalLimit: "Insulated delivery bags (hot foods >=63°C, cold foods <=8°C); allergen flags on containers.",
    monitoringProcedure: "Check dispatch temperatures; verify Natasha's Law PPDS label match before handover.",
    correctiveAction: "Repack in sanitized insulated bag; replace damaged containers before driver dispatch.",
    ukRegulation: "General Food Law Regulation (EC) No 178/2002"
  }
];

export function FoodFlowChartTool({
  templateId
}: {
  templateId?: string;
}) {
  const [activeStepId, setActiveStepId] = useState<string>("step-6");
  const [establishmentName, setEstablishmentName] = useState("The Royal Oak Kitchen");
  const [haccpLead, setHaccpLead] = useState("Head Chef A. Vance");

  const currentStep = FLOW_STEPS.find(s => s.id === activeStepId) || FLOW_STEPS[5];
  const Icon = currentStep.icon;

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/80 mb-2">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Codex Alimentarius &amp; UK FSA HACCP Food Flow Framework</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Commercial Kitchen HACCP Food Flow Chart &amp; CCP Process Map
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Step through all 10 stages of the commercial kitchen food process flow. Inspect Critical Control Points (CCPs), statutory critical limits, monitoring procedures, and corrective action protocols. Print a landscape A4 compliance diagram.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print A4 Process Map</span>
            </button>
          </div>
        </div>

        {/* Business Settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Food Business Name
            </label>
            <input
              type="text"
              value={establishmentName}
              onChange={e => setEstablishmentName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-blue-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              HACCP Lead / Operations Manager
            </label>
            <input
              type="text"
              value={haccpLead}
              onChange={e => setHaccpLead(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-blue-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>
        </div>

        {/* Step Progression Buttons (Pill / Flow Bar) */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Operational Process Stage:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {FLOW_STEPS.map(step => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-xs scale-[1.02]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span>Stage {step.stepNumber}</span>
                    {step.isCCP && (
                      <span className={`px-1.5 py-0.5 rounded ${isActive ? "bg-rose-500 text-white" : "bg-rose-100 text-rose-700"}`}>
                        {step.ccpNumber}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold mt-1 line-clamp-1">{step.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep Inspection Card */}
        <div className={`p-6 rounded-2xl border ${currentStep.isCCP ? "bg-rose-50/50 border-rose-300" : "bg-slate-50 border-slate-300"} space-y-4`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className={`p-2.5 rounded-xl ${currentStep.isCCP ? "bg-rose-600 text-white" : "bg-slate-900 text-white"}`}>
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Process Step {currentStep.stepNumber}
                  </span>
                  {currentStep.isCCP && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-rose-600 text-white tracking-widest">
                      {currentStep.ccpNumber} - Critical Control Point
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{currentStep.name}</h3>
              </div>
            </div>

            <div className="text-xs text-slate-600 font-mono">
              <strong>Statutory Baseline:</strong> {currentStep.ukRegulation}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-200 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-rose-700 block uppercase tracking-wide">
                Identified Food Safety Hazards
              </span>
              <p className="text-slate-700 leading-relaxed">{currentStep.hazards}</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-emerald-700 block uppercase tracking-wide">
                Statutory Critical Limit
              </span>
              <p className="text-slate-700 leading-relaxed font-semibold">{currentStep.criticalLimit}</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-blue-700 block uppercase tracking-wide">
                Monitoring &amp; Verification Protocol
              </span>
              <p className="text-slate-700 leading-relaxed">{currentStep.monitoringProcedure}</p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-amber-700 block uppercase tracking-wide">
                Immediate Corrective Action
              </span>
              <p className="text-slate-700 leading-relaxed">{currentStep.correctiveAction}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Printable High-Contrast A4 Master Process Flow Diagram */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-900 space-y-6 printable-doc shadow-xs">
        {/* Poster Header */}
        <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest mb-1">
              HACCP System Process Flow Diagram
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              MASTER FOOD FLOW CHART
            </h1>
            <p className="text-xs font-semibold text-slate-600">
              Regulation (EC) No 852/2004 Article 5 &bull; Safer Food, Better Business (SFBB) Due Diligence
            </p>
          </div>

          <div className="text-right text-xs space-y-1">
            <div className="font-bold text-slate-900">{establishmentName}</div>
            <div className="text-slate-600">HACCP Lead: {haccpLead}</div>
            <div className="text-slate-500 font-mono text-[10px]">Verified: Audit Year 2026</div>
          </div>
        </div>

        {/* Process Flow Table (High-Contrast Printable) */}
        <div className="overflow-x-auto rounded-xl border-2 border-slate-900">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-bold">
                <th className="p-2.5 border-r border-slate-700">Stage</th>
                <th className="p-2.5 border-r border-slate-700">Operational Process</th>
                <th className="p-2.5 border-r border-slate-700">CCP?</th>
                <th className="p-2.5 border-r border-slate-700">Critical Limit</th>
                <th className="p-2.5 border-r border-slate-700">Monitoring Frequency</th>
                <th className="p-2.5">Corrective Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-900">
              {FLOW_STEPS.map(step => (
                <tr key={step.id} className={step.isCCP ? "bg-rose-50/40 font-medium" : "hover:bg-slate-50"}>
                  <td className="p-2.5 font-bold border-r border-slate-200">Stage {step.stepNumber}</td>
                  <td className="p-2.5 font-bold border-r border-slate-200">{step.name}</td>
                  <td className="p-2.5 border-r border-slate-200">
                    {step.isCCP ? (
                      <span className="font-black text-rose-700 bg-rose-100 px-1.5 py-0.5 rounded text-[10px]">
                        {step.ccpNumber}
                      </span>
                    ) : (
                      <span className="text-slate-400 text-[10px]">PRP</span>
                    )}
                  </td>
                  <td className="p-2.5 border-r border-slate-200 font-semibold">{step.criticalLimit}</td>
                  <td className="p-2.5 border-r border-slate-200 text-slate-700">{step.monitoringProcedure}</td>
                  <td className="p-2.5 text-slate-700">{step.correctiveAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Sign-Off Blocks */}
        <div className="pt-2 border-t-2 border-slate-900 grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px]">
          <div>
            <span className="font-bold text-slate-900 block uppercase">HACCP Team Lead:</span>
            <span className="text-slate-600 underline decoration-dotted">{haccpLead}</span>
          </div>
          <div>
            <span className="font-bold text-slate-900 block uppercase">Annual Review Date:</span>
            <span className="text-slate-600 underline decoration-dotted">___ / ___ / 2026</span>
          </div>
          <div>
            <span className="font-bold text-slate-900 block uppercase">Local Authority EHO:</span>
            <span className="text-slate-600 underline decoration-dotted">Council District _______</span>
          </div>
          <div>
            <span className="font-bold text-slate-900 block uppercase">SFBB File Ref:</span>
            <span className="text-slate-600 underline decoration-dotted">HACCP-FLOW-01</span>
          </div>
        </div>
      </div>
    </div>
  );
}
