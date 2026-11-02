"use client";

import React, { useState } from "react";
import {
  Printer,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Info,
  Calendar,
  Thermometer,
  Clock,
  Sparkles,
  FileSpreadsheet,
  Building2,
  UserCheck
} from "lucide-react";

interface FridgeUnit {
  id: string;
  name: string;
  type: string;
  targetRange: string;
  maxLegal: number;
  amTemp: number;
  pmTemp: number;
  initials: string;
  notes: string;
}

const DEFAULT_FRIDGE_UNITS: FridgeUnit[] = [
  {
    id: "fridge-1",
    name: "Walk-In Main Chiller (Cold Store)",
    type: "Walk-In Cold Room",
    targetRange: "1.0°C – 4.0°C",
    maxLegal: 8.0,
    amTemp: 2.8,
    pmTemp: 3.4,
    initials: "JM",
    notes: "Defrost cycle completed normally at 05:00"
  },
  {
    id: "fridge-2",
    name: "Cookline Prep Saladette & Wells",
    type: "Under-Counter Prep Well",
    targetRange: "2.0°C – 5.0°C",
    maxLegal: 8.0,
    amTemp: 3.5,
    pmTemp: 4.6,
    initials: "JM",
    notes: "Lids kept closed between orders"
  },
  {
    id: "fridge-3",
    name: "Dedicated Raw Meat Upright Chiller",
    type: "Upright Commercial Refrigerator",
    targetRange: "0.0°C – 3.0°C",
    maxLegal: 5.0,
    amTemp: 1.9,
    pmTemp: 2.3,
    initials: "SA",
    notes: "Bottom drip trays inspected and dry"
  },
  {
    id: "fridge-4",
    name: "Fresh Fish & Seafood Storage Drawer",
    type: "Specialised Fish Chiller",
    targetRange: "0.0°C – 2.0°C",
    maxLegal: 4.0,
    amTemp: 0.8,
    pmTemp: 1.2,
    initials: "SA",
    notes: "Packed in fresh flake ice with drainage plug open"
  },
  {
    id: "fridge-5",
    name: "Dairy & Dessert Service Chiller",
    type: "Display / Pass Fridge",
    targetRange: "2.0°C – 5.0°C",
    maxLegal: 8.0,
    amTemp: 3.8,
    pmTemp: 4.1,
    initials: "JM",
    notes: "Stock rotated under FIFO date protocol"
  }
];

export function FridgeTemperatureRecordTool({ templateId }: { templateId?: string }) {
  const [businessName, setBusinessName] = useState<string>("The Crown Restaurant & Kitchen");
  const [logMonth, setLogMonth] = useState<string>("October 2026");
  const [supervisorName, setSupervisorName] = useState<string>("Head Chef J. Morgan");
  const [units, setUnits] = useState<FridgeUnit[]>(DEFAULT_FRIDGE_UNITS);

  // Probe Calibration State
  const [iceBathTemp, setIceBathTemp] = useState<number>(0.2);
  const [boilingTemp, setBoilingTemp] = useState<number>(99.8);
  const [calibrationDate, setCalibrationDate] = useState<string>("2026-10-15");

  const updateUnitTemp = (id: string, field: "amTemp" | "pmTemp", val: number) => {
    setUnits(prev =>
      prev.map(u => (u.id === id ? { ...u, [field]: val } : u))
    );
  };

  const updateUnitInitials = (id: string, val: string) => {
    setUnits(prev =>
      prev.map(u => (u.id === id ? { ...u, initials: val.toUpperCase().slice(0, 3) } : u))
    );
  };

  const getComplianceStatus = (temp: number, maxLegal: number) => {
    if (temp <= 5.0) return { label: "OPTIMAL", color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
    if (temp <= maxLegal) return { label: "CAUTION (5-8°C)", color: "text-amber-700 bg-amber-50 border-amber-300" };
    return { label: "VIOLATION (>8°C)", color: "text-rose-700 bg-rose-50 border-rose-300 font-black animate-pulse" };
  };

  const exportCSV = () => {
    const headers = ["Unit ID", "Unit Name", "Type", "Target Range", "Max Legal (°C)", "AM Temp (°C)", "PM Temp (°C)", "Initials", "Notes"];
    const rows = units.map(u => [
      `"${u.id}"`,
      `"${u.name}"`,
      `"${u.type}"`,
      `"${u.targetRange}"`,
      u.maxLegal,
      u.amTemp,
      u.pmTemp,
      `"${u.initials}"`,
      `"${u.notes}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `fridge_temperature_log_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 font-sans">
      {/* Interactive Control Panel (Web Mode) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-xs space-y-6 no-print">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>UK Food Safety and Hygiene (England) Regulations 2013 (Schedule 4)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Commercial Fridge Temperature Record Sheet &amp; EHO Due Diligence Log
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Track twice-daily AM and PM temperature probe readings across all commercial refrigeration units. Automatically highlights statutory temperature excursions (&gt; 8°C), logs corrective actions, and verifies monthly probe calibration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={exportCSV}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer border border-slate-300"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => window.print()}
              className="bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-sm hover:scale-[1.01] cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Print A4 Record Sheet</span>
            </button>
          </div>
        </div>

        {/* Configuration Toolbar */}
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
              Inspection Month / Year
            </label>
            <input
              type="text"
              value={logMonth}
              onChange={e => setLogMonth(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Supervisor / Chef In Charge
            </label>
            <input
              type="text"
              value={supervisorName}
              onChange={e => setSupervisorName(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>
        </div>

        {/* Interactive Temperature Grid */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Refrigeration Unit</th>
                <th className="py-3 px-3">Target Range</th>
                <th className="py-3 px-3">Legal Max</th>
                <th className="py-3 px-3">AM Check (°C)</th>
                <th className="py-3 px-3">AM Status</th>
                <th className="py-3 px-3">PM Check (°C)</th>
                <th className="py-3 px-3">PM Status</th>
                <th className="py-3 px-3">Initials</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {units.map(u => {
                const amStatus = getComplianceStatus(u.amTemp, u.maxLegal);
                const pmStatus = getComplianceStatus(u.pmTemp, u.maxLegal);
                return (
                  <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">{u.name}</div>
                      <div className="text-[11px] text-slate-500">{u.type}</div>
                    </td>
                    <td className="py-3 px-3 font-semibold text-slate-600">{u.targetRange}</td>
                    <td className="py-3 px-3 font-bold text-slate-700">≤ {u.maxLegal}°C</td>
                    <td className="py-3 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={u.amTemp}
                        onChange={e => updateUnitTemp(u.id, "amTemp", parseFloat(e.target.value))}
                        className="w-20 bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-2 py-1 font-bold text-slate-900 focus:outline-none shadow-2xs"
                      />
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${amStatus.color}`}>
                        {amStatus.label}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <input
                        type="number"
                        step="0.1"
                        value={u.pmTemp}
                        onChange={e => updateUnitTemp(u.id, "pmTemp", parseFloat(e.target.value))}
                        className="w-20 bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-2 py-1 font-bold text-slate-900 focus:outline-none shadow-2xs"
                      />
                    </td>
                    <td className="py-3 px-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${pmStatus.color}`}>
                        {pmStatus.label}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <input
                        type="text"
                        value={u.initials}
                        onChange={e => updateUnitInitials(u.id, e.target.value)}
                        className="w-14 bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-2 py-1 font-mono font-bold text-center text-slate-900 focus:outline-none shadow-2xs"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Monthly Probe Calibration Verification Block */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-amber-600" />
              <span>Monthly Probe Thermometer Calibration Check (SFBB Mandatory)</span>
            </h3>
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Tolerance: ± 1.0°C Required
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Ice Water Slurry Test (Target: 0°C ± 1°C)
              </label>
              <input
                type="number"
                step="0.1"
                value={iceBathTemp}
                onChange={e => setIceBathTemp(parseFloat(e.target.value))}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-bold text-slate-900 focus:outline-none shadow-2xs"
              />
              <span className={`text-[10px] font-bold block mt-1 ${Math.abs(iceBathTemp) <= 1 ? "text-emerald-700" : "text-rose-700"}`}>
                {Math.abs(iceBathTemp) <= 1 ? "✓ Pass (Within tolerance)" : "✗ Fail - Recalibrate / Replace probe"}
              </span>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Boiling Water Test (Target: 100°C ± 1°C)
              </label>
              <input
                type="number"
                step="0.1"
                value={boilingTemp}
                onChange={e => setBoilingTemp(parseFloat(e.target.value))}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-bold text-slate-900 focus:outline-none shadow-2xs"
              />
              <span className={`text-[10px] font-bold block mt-1 ${Math.abs(boilingTemp - 100) <= 1 ? "text-emerald-700" : "text-rose-700"}`}>
                {Math.abs(boilingTemp - 100) <= 1 ? "✓ Pass (Within tolerance)" : "✗ Fail - Recalibrate / Replace probe"}
              </span>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Calibration Verification Date
              </label>
              <input
                type="date"
                value={calibrationDate}
                onChange={e => setCalibrationDate(e.target.value)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-bold text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          A4 PRINTABLE LOG SHEET CONTAINER
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-900 space-y-6 printable-doc shadow-md print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none">
        {/* Sheet Header */}
        <div className="border-b-4 border-slate-900 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-slate-900 text-white font-mono font-black text-xs uppercase tracking-wider mb-2">
                SFBB DUE DILIGENCE COMPLIANCE RECORD
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                Commercial Refrigerator Temperature Log
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                Mandatory Twice-Daily Temperature Monitoring Under UK Food Hygiene Legislation
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-900 rounded-xl p-3 text-right min-w-[200px]">
              <div className="text-[10px] font-bold uppercase text-slate-500">Premises / Period</div>
              <div className="text-sm font-black text-slate-900 truncate">{businessName}</div>
              <div className="text-xs font-bold text-slate-700 truncate">{logMonth}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-200 text-[11px]">
            <div>
              <span className="font-bold text-slate-500 uppercase block">Supervisor:</span>
              <span className="font-black text-slate-900">{supervisorName}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Statutory Limit:</span>
              <span className="font-black text-rose-700">≤ 8.0°C (Max Legal Limit)</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Best Practice Range:</span>
              <span className="font-black text-emerald-800">1.0°C to 5.0°C</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Probe Calibration:</span>
              <span className="font-black text-slate-900">Ice: {iceBathTemp}°C | Boil: {boilingTemp}°C</span>
            </div>
          </div>
        </div>

        {/* Printable Units Table */}
        <div className="overflow-x-auto rounded-xl border-2 border-slate-900">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-900 text-white font-black uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-2.5 px-3">Unit Name</th>
                <th className="py-2.5 px-2">Target</th>
                <th className="py-2.5 px-2">Max Legal</th>
                <th className="py-2.5 px-2">AM (°C)</th>
                <th className="py-2.5 px-2">PM (°C)</th>
                <th className="py-2.5 px-2">Sign</th>
                <th className="py-2.5 px-3">Operational Notes / Defrost Cycle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium text-slate-900">
              {units.map(u => (
                <tr key={u.id}>
                  <td className="py-2.5 px-3 font-bold">{u.name}</td>
                  <td className="py-2.5 px-2 text-slate-600">{u.targetRange}</td>
                  <td className="py-2.5 px-2 font-bold text-rose-700">≤ {u.maxLegal}°C</td>
                  <td className="py-2.5 px-2 font-black font-mono">{u.amTemp}°C</td>
                  <td className="py-2.5 px-2 font-black font-mono">{u.pmTemp}°C</td>
                  <td className="py-2.5 px-2 font-mono font-bold text-center">{u.initials || "___"}</td>
                  <td className="py-2.5 px-3 text-[11px] text-slate-600">{u.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Section 21 Corrective Action Protocol */}
        <div className="p-4 rounded-xl border border-slate-300 bg-slate-50 text-xs space-y-2">
          <div className="font-black text-slate-900 uppercase text-xs flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Statutory Corrective Action Protocol (Readings &gt; 8.0°C)</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-700">
            <li><strong>Re-probe Internal Food Centre:</strong> Check if air temperature reading was triggered by door opening during restocking. Probe internal temperature of high-risk food.</li>
            <li><strong>4-Hour Exemption Assessment:</strong> If food temperature has been between 8°C and 63°C for under 4 hours, immediately transfer food to a working backup chiller.</li>
            <li><strong>Immediate Destruction:</strong> If high-risk food has exceeded 8°C for over 4 hours, condemn and discard into Category 3 food waste. Record weight and reasons in SFBB Diary.</li>
            <li><strong>Refrigeration Service Call:</strong> Clean condenser coils, inspect door rubber gaskets, and contact refrigeration engineer.</li>
          </ol>
        </div>

        {/* Sign-off & Verification Footer */}
        <div className="pt-4 border-t-2 border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-[11px] text-slate-500">
            Food Safety Act 1990 (Sec 21) • Food Safety and Hygiene (England) Regs 2013 • Retained Reg (EC) 852/2004
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold text-slate-700">
            <div className="border-b border-slate-400 pb-1 min-w-[120px] text-center">
              Head Chef Sign-Off
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
