"use client";

import React, { useState, useEffect } from "react";
import {
  Thermometer,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Printer,
  Download,
  Plus,
  Trash2,
  Calendar,
  RotateCcw,
  Info,
  Clock,
  Sparkles,
  HelpCircle,
  FileSpreadsheet
} from "lucide-react";

interface DailyRecord {
  day: string;
  amTemp: string;
  pmTemp: string;
  amInitials: string;
  pmInitials: string;
  visualCheck: boolean;
  notes: string;
}

interface CorrectiveAction {
  id: string;
  date: string;
  unit: string;
  temp: string;
  cause: string;
  action: string;
  signedBy: string;
  resolved: boolean;
}

const DEFAULT_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const INITIAL_UNITS = [
  { id: "unit-1", name: "Walk-in Deep Freezer (Main)" },
  { id: "unit-2", name: "Cook Line Under-Counter Freezer" },
  { id: "unit-3", name: "Storage Chest Freezer #1" }
];

export const FreezerTemperatureChartTool: React.FC<{ templateId?: string }> = ({
  templateId
}) => {
  // Establishment details for EHO printable compliance
  const [establishment, setEstablishment] = useState("The Crown & Anchor Catering Ltd");
  const [managerName, setManagerName] = useState("Head Chef / Kitchen Supervisor");
  const [weekCommencing, setWeekCommencing] = useState(() => {
    const d = new Date();
    // Monday of current week
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.setDate(diff));
    return monday.toISOString().split("T")[0];
  });

  const [units, setUnits] = useState(INITIAL_UNITS);
  const [activeUnitId, setActiveUnitId] = useState("unit-1");
  const [newUnitName, setNewUnitName] = useState("");

  // Storage of logs per unit
  const [unitLogs, setUnitLogs] = useState<Record<string, DailyRecord[]>>(() => {
    const initial: Record<string, DailyRecord[]> = {};
    INITIAL_UNITS.forEach(u => {
      initial[u.id] = DEFAULT_DAYS.map(day => ({
        day,
        amTemp: "-19.5",
        pmTemp: "-18.8",
        amInitials: "JD",
        pmInitials: "MR",
        visualCheck: true,
        notes: ""
      }));
    });
    return initial;
  });

  // Corrective action items
  const [actions, setActions] = useState<CorrectiveAction[]>([
    {
      id: "ca-1",
      date: new Date().toISOString().split("T")[0],
      unit: "Cook Line Under-Counter Freezer",
      temp: "-14.2°C",
      cause: "Scheduled 30-min auto-defrost cycle in progress during afternoon rush.",
      action: "Re-probed after 45 minutes; core temp stabilised at -18.6°C. Door seals verified airtight.",
      signedBy: "JD",
      resolved: true
    }
  ]);

  // Calibration tool
  const [probeId, setProbeId] = useState("ETI Therma-20 #1");
  const [iceTestTemp, setIceTestTemp] = useState("0.1");
  const [boilTestTemp, setBoilTestTemp] = useState("99.9");
  const [calibratedDate, setCalibratedDate] = useState(() => new Date().toISOString().split("T")[0]);

  // Load from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem("saim_freezer_chart_data");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.establishment) setEstablishment(parsed.establishment);
        if (parsed.managerName) setManagerName(parsed.managerName);
        if (parsed.weekCommencing) setWeekCommencing(parsed.weekCommencing);
        if (parsed.units) setUnits(parsed.units);
        if (parsed.unitLogs) setUnitLogs(parsed.unitLogs);
        if (parsed.actions) setActions(parsed.actions);
      }
    } catch {
      // Local storage fallback
    }
  }, []);

  // Persist changes
  const saveState = (updatedLogs = unitLogs, updatedActions = actions, updatedUnits = units) => {
    try {
      localStorage.setItem(
        "saim_freezer_chart_data",
        JSON.stringify({
          establishment,
          managerName,
          weekCommencing,
          units: updatedUnits,
          unitLogs: updatedLogs,
          actions: updatedActions
        })
      );
    } catch {
      // Non-blocking
    }
  };

  const handleTempChange = (dayIndex: number, field: "amTemp" | "pmTemp", val: string) => {
    const activeRecords = [...(unitLogs[activeUnitId] || [])];
    if (!activeRecords[dayIndex]) return;

    activeRecords[dayIndex] = {
      ...activeRecords[dayIndex],
      [field]: val
    };

    const nextLogs = {
      ...unitLogs,
      [activeUnitId]: activeRecords
    };
    setUnitLogs(nextLogs);
    saveState(nextLogs);

    // If out of range, check if we should suggest corrective action
    const num = parseFloat(val);
    if (!isNaN(num) && num > -18.0) {
      const activeUnit = units.find(u => u.id === activeUnitId);
      const day = activeRecords[dayIndex].day;
      const existing = actions.find(a => a.unit === activeUnit?.name && a.date.includes(day));
      if (!existing) {
        const newAction: CorrectiveAction = {
          id: `ca-${Date.now()}`,
          date: `${weekCommencing} (${day})`,
          unit: activeUnit?.name || "Freezer",
          temp: `${val}°C`,
          cause: num > -15.0 ? "Potential gasket air leak or compressor fault" : "Defrost cycle or heavy door opening",
          action: "Inspect door seals, check condenser vents, and re-probe in 30 minutes.",
          signedBy: managerName.slice(0, 2).toUpperCase() || "SUP",
          resolved: false
        };
        const nextActions = [newAction, ...actions];
        setActions(nextActions);
        saveState(nextLogs, nextActions);
      }
    }
  };

  const handleInitialsChange = (dayIndex: number, field: "amInitials" | "pmInitials", val: string) => {
    const activeRecords = [...(unitLogs[activeUnitId] || [])];
    if (!activeRecords[dayIndex]) return;
    activeRecords[dayIndex] = {
      ...activeRecords[dayIndex],
      [field]: val.toUpperCase().slice(0, 3)
    };
    const nextLogs = { ...unitLogs, [activeUnitId]: activeRecords };
    setUnitLogs(nextLogs);
    saveState(nextLogs);
  };

  const addUnit = () => {
    if (!newUnitName.trim()) return;
    const newId = `unit-${Date.now()}`;
    const nextUnits = [...units, { id: newId, name: newUnitName.trim() }];
    const nextLogs = {
      ...unitLogs,
      [newId]: DEFAULT_DAYS.map(day => ({
        day,
        amTemp: "-19.0",
        pmTemp: "-18.5",
        amInitials: "ST",
        pmInitials: "ST",
        visualCheck: true,
        notes: ""
      }))
    };
    setUnits(nextUnits);
    setUnitLogs(nextLogs);
    setActiveUnitId(newId);
    setNewUnitName("");
    saveState(nextLogs, actions, nextUnits);
  };

  const removeUnit = (id: string) => {
    if (units.length <= 1) return;
    const nextUnits = units.filter(u => u.id !== id);
    const nextLogs = { ...unitLogs };
    delete nextLogs[id];
    setUnits(nextUnits);
    setUnitLogs(nextLogs);
    if (activeUnitId === id) {
      setActiveUnitId(nextUnits[0].id);
    }
    saveState(nextLogs, actions, nextUnits);
  };

  const addManualAction = () => {
    const activeUnit = units.find(u => u.id === activeUnitId);
    const newAction: CorrectiveAction = {
      id: `ca-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
      unit: activeUnit?.name || "Freezer Unit",
      temp: "-15.0°C",
      cause: "High temperature warning observed during routine inspection",
      action: "Sanitised probe re-tested. Stock checked for ice crystals and firmness.",
      signedBy: "JD",
      resolved: true
    };
    const nextActions = [newAction, ...actions];
    setActions(nextActions);
    saveState(unitLogs, nextActions);
  };

  const toggleActionResolved = (id: string) => {
    const next = actions.map(a => (a.id === id ? { ...a, resolved: !a.resolved } : a));
    setActions(next);
    saveState(unitLogs, next);
  };

  const deleteAction = (id: string) => {
    const next = actions.filter(a => a.id !== id);
    setActions(next);
    saveState(unitLogs, next);
  };

  const exportCSV = () => {
    let csv = "Establishment,Week Commencing,Unit,Day,AM Temp (°C),AM Initials,PM Temp (°C),PM Initials,Status\n";
    units.forEach(u => {
      const records = unitLogs[u.id] || [];
      records.forEach(r => {
        const amNum = parseFloat(r.amTemp);
        const pmNum = parseFloat(r.pmTemp);
        const isOk = (!isNaN(amNum) ? amNum <= -18.0 : true) && (!isNaN(pmNum) ? pmNum <= -18.0 : true);
        csv += `"${establishment}","${weekCommencing}","${u.name}","${r.day}","${r.amTemp}","${r.amInitials}","${r.pmTemp}","${r.pmInitials}","${isOk ? "PASS" : "ACTION REQUIRED"}"\n`;
      });
    });

    csv += "\nCORRECTIVE ACTIONS LOG\n";
    csv += "Date,Unit,Recorded Temp,Identified Cause,Action Taken,Signed By,Resolved\n";
    actions.forEach(a => {
      csv += `"${a.date}","${a.unit}","${a.temp}","${a.cause}","${a.action}","${a.signedBy}","${a.resolved ? "YES" : "NO"}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Freezer_Temperature_Log_${weekCommencing}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Helper status evaluator
  const getTempStatus = (val: string) => {
    if (!val || isNaN(parseFloat(val))) return { status: "empty", label: "Pending", color: "text-gray-400 bg-gray-50 border-gray-200" };
    const n = parseFloat(val);
    if (n <= -18.0) {
      return { status: "pass", label: "Compliant (≤ -18°C)", color: "text-emerald-800 bg-emerald-50 border-emerald-300" };
    }
    if (n <= -15.0) {
      return { status: "warning", label: "Defrost / Warning (-17 to -15°C)", color: "text-amber-800 bg-amber-50 border-amber-300" };
    }
    return { status: "fail", label: "Critical Hazard (> -15°C)", color: "text-rose-800 bg-rose-50 border-rose-300" };
  };

  const activeUnit = units.find(u => u.id === activeUnitId) || units[0];
  const activeRecords = unitLogs[activeUnitId] || [];

  // Probe Calibration status
  const iceVal = parseFloat(iceTestTemp);
  const boilVal = parseFloat(boilTestTemp);
  const icePass = !isNaN(iceVal) && iceVal >= -0.5 && iceVal <= 0.5;
  const boilPass = !isNaN(boilVal) && boilVal >= 99.5 && boilVal <= 100.5;
  const probePass = icePass && boilPass;

  return (
    <div className="space-y-8">
      {/* Interactive Tool Banner & Description */}
      <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-blue-800/40 no-print">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-200 border border-blue-400/30">
              <Thermometer className="w-3.5 h-3.5 text-blue-400" />
              UK FSA SFBB Compliant System
            </span>
            <span className="text-xs text-blue-200/80 font-mono">
              Statutory Limit: ≤ -18.0°C
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Commercial Freezer Temperature Log Sheet &amp; Chart
          </h2>

          <p className="text-sm sm:text-base text-blue-100/90 max-w-3xl leading-relaxed">
            Record daily AM and PM freezer probe readings, monitor automatic defrost cycles, and produce audit-ready Food Standards Agency (FSA) compliance sheets. Includes automated corrective action triggers and probe calibration verification.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => window.print()}
              className="bg-white hover:bg-gray-100 text-gray-900 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md cursor-pointer hover:scale-[1.01]"
            >
              <Printer className="w-4 h-4 text-blue-600" />
              <span>Print Official EHO Record (PDF)</span>
            </button>
            <button
              onClick={exportCSV}
              className="bg-blue-800/60 hover:bg-blue-700/80 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all border border-blue-400/30 cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span>Export CSV Audit File</span>
            </button>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Establishment Header (Editable on screen, neatly formatted for print) */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Food Establishment / Business Name
            </label>
            <input
              type="text"
              value={establishment}
              onChange={e => {
                setEstablishment(e.target.value);
                saveState();
              }}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 font-bold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 print:hidden"
            />
            <div className="hidden print:block text-base font-extrabold text-black border-b border-gray-400 pb-1">
              {establishment || "Commercial Kitchen"}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Week Commencing (Monday)
            </label>
            <input
              type="date"
              value={weekCommencing}
              onChange={e => {
                setWeekCommencing(e.target.value);
                saveState();
              }}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 print:hidden"
            />
            <div className="hidden print:block text-sm font-bold text-black border-b border-gray-400 pb-1">
              Week Commencing: {weekCommencing}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Supervisor / Manager Sign-off
            </label>
            <input
              type="text"
              value={managerName}
              onChange={e => {
                setManagerName(e.target.value);
                saveState();
              }}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 print:hidden"
            />
            <div className="hidden print:block text-sm font-bold text-black border-b border-gray-400 pb-1">
              Supervisor: {managerName}
            </div>
          </div>
        </div>
      </div>

      {/* Unit Tabs & Multi-Freezer Controls (Screen Only) */}
      <div className="space-y-3 no-print">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-1.5">
            <Thermometer className="w-4 h-4 text-blue-600" />
            Kitchen Freezers Under Monitoring ({units.length}):
          </label>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="e.g. Pastry Line Freezer #2"
              value={newUnitName}
              onChange={e => setNewUnitName(e.target.value)}
              className="text-xs bg-white border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addUnit}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 transition shadow-xs cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Freezer</span>
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {units.map(u => (
            <div
              key={u.id}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition border ${
                activeUnitId === u.id
                  ? "bg-blue-900 text-white border-blue-900 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setActiveUnitId(u.id)}
            >
              <span>{u.name}</span>
              {units.length > 1 && (
                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    removeUnit(u.id);
                  }}
                  className="text-gray-400 hover:text-rose-400 transition ml-1"
                  title="Remove this freezer"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Weekly Temperature Table (Both Screen & High-Res Print) */}
      <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm print:rounded-none print:border-black print:border print:shadow-none">
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3 print:bg-white print:border-b-2 print:border-black">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              Active Unit: <span className="text-blue-700 print:text-black">{activeUnit?.name}</span>
            </h3>
            <p className="text-xs text-gray-500">
              Statutory requirement: Check morning opening &amp; evening closing. Target: &le; -18.0&deg;C.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 no-print">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>FSA Due Diligence Ready</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-gray-100/80 border-b border-gray-200 text-gray-700 text-[11px] uppercase tracking-wider font-bold print:bg-gray-200 print:border-black print:text-black">
                <th className="py-3 px-3 sm:px-4 w-28">Day</th>
                <th className="py-3 px-3 sm:px-4">AM Temp (&deg;C)</th>
                <th className="py-3 px-2 sm:px-3 w-16">AM Init</th>
                <th className="py-3 px-3 sm:px-4">PM Temp (&deg;C)</th>
                <th className="py-3 px-2 sm:px-3 w-16">PM Init</th>
                <th className="py-3 px-3 sm:px-4 min-w-[150px]">FSA Compliance Status</th>
                <th className="py-3 px-3 sm:px-4 min-w-[180px] no-print">Notes / Observations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 print:divide-black">
              {activeRecords.map((rec, idx) => {
                const amStatus = getTempStatus(rec.amTemp);
                const pmStatus = getTempStatus(rec.pmTemp);
                const amNum = parseFloat(rec.amTemp);
                const pmNum = parseFloat(rec.pmTemp);
                const isFail = (!isNaN(amNum) && amNum > -18.0) || (!isNaN(pmNum) && pmNum > -18.0);

                return (
                  <tr
                    key={rec.day}
                    className={`hover:bg-blue-50/30 transition-colors ${
                      isFail ? "bg-rose-50/40" : ""
                    }`}
                  >
                    {/* Day */}
                    <td className="py-3.5 px-3 sm:px-4 font-bold text-gray-900 border-r border-gray-100 print:border-black">
                      {rec.day}
                    </td>

                    {/* AM Temp */}
                    <td className="py-3.5 px-3 sm:px-4">
                      <div className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={rec.amTemp}
                          onChange={e => handleTempChange(idx, "amTemp", e.target.value)}
                          className="w-20 bg-gray-50 border border-gray-300 rounded-md px-2 py-1 font-mono font-bold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 print:hidden"
                          placeholder="-19.0"
                        />
                        <span className="hidden print:inline font-mono font-bold text-sm">
                          {rec.amTemp ? `${rec.amTemp}°C` : "___°C"}
                        </span>
                      </div>
                    </td>

                    {/* AM Initials */}
                    <td className="py-3.5 px-2 sm:px-3">
                      <input
                        type="text"
                        value={rec.amInitials}
                        onChange={e => handleInitialsChange(idx, "amInitials", e.target.value)}
                        className="w-12 bg-gray-50 border border-gray-300 rounded-md px-1.5 py-1 text-center font-bold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase print:hidden"
                        placeholder="JD"
                      />
                      <span className="hidden print:inline font-bold text-xs uppercase">
                        {rec.amInitials || "___"}
                      </span>
                    </td>

                    {/* PM Temp */}
                    <td className="py-3.5 px-3 sm:px-4">
                      <div className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={rec.pmTemp}
                          onChange={e => handleTempChange(idx, "pmTemp", e.target.value)}
                          className="w-20 bg-gray-50 border border-gray-300 rounded-md px-2 py-1 font-mono font-bold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 print:hidden"
                          placeholder="-18.5"
                        />
                        <span className="hidden print:inline font-mono font-bold text-sm">
                          {rec.pmTemp ? `${rec.pmTemp}°C` : "___°C"}
                        </span>
                      </div>
                    </td>

                    {/* PM Initials */}
                    <td className="py-3.5 px-2 sm:px-3">
                      <input
                        type="text"
                        value={rec.pmInitials}
                        onChange={e => handleInitialsChange(idx, "pmInitials", e.target.value)}
                        className="w-12 bg-gray-50 border border-gray-300 rounded-md px-1.5 py-1 text-center font-bold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase print:hidden"
                        placeholder="MR"
                      />
                      <span className="hidden print:inline font-bold text-xs uppercase">
                        {rec.pmInitials || "___"}
                      </span>
                    </td>

                    {/* Status Badge */}
                    <td className="py-3.5 px-3 sm:px-4">
                      <div className="flex flex-col gap-1">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${amStatus.color} print:border-black print:text-black`}
                        >
                          AM: {amStatus.label}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${pmStatus.color} print:border-black print:text-black`}
                        >
                          PM: {pmStatus.label}
                        </span>
                      </div>
                    </td>

                    {/* Notes */}
                    <td className="py-3.5 px-3 sm:px-4 no-print">
                      <input
                        type="text"
                        value={rec.notes}
                        onChange={e => {
                          const active = [...activeRecords];
                          active[idx] = { ...active[idx], notes: e.target.value };
                          const next = { ...unitLogs, [activeUnitId]: active };
                          setUnitLogs(next);
                          saveState(next);
                        }}
                        className="w-full bg-gray-50 border border-gray-300 rounded-md px-2 py-1 text-xs text-gray-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Gasket seal OK, no frost buildup"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Manager Weekly Verification Sign-off Box (Essential for EHO Inspection) */}
        <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 print:bg-white print:border-black print:border-t-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-bold text-gray-900 block">Weekly Manager Verification &amp; Due Diligence Declaration</span>
              <p className="text-gray-600 max-w-xl text-[11px]">
                I confirm that all freezer temperatures were verified daily by trained food handlers, recorded on calibrated instrumentation, and appropriate corrective actions were executed for any deviation above -18.0&deg;C.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Manager Signature:</span>
                <span className="font-mono text-sm underline decoration-gray-400 font-bold text-gray-900">
                  {managerName || "Signed on Record"}
                </span>
              </div>
              <div>
                <span className="text-gray-500 block text-[10px] uppercase">Date Audited:</span>
                <span className="font-mono text-sm text-gray-900">{calibratedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corrective Action Log Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-5 print:rounded-none print:border-black print:border">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4 print:border-black">
          <div>
            <h3 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>EHO Corrective Action Log</span>
            </h3>
            <p className="text-xs text-gray-600 mt-0.5">
              Mandatory under Section 21 of the Food Safety Act 1990 whenever temperatures rise above -18.0&deg;C.
            </p>
          </div>

          <button
            onClick={addManualAction}
            className="bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition no-print cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Record Corrective Incident</span>
          </button>
        </div>

        {actions.length === 0 ? (
          <div className="text-center py-6 text-gray-500 text-xs italic">
            No temperature excursions recorded. All freezers operating within statutory parameters (&le; -18.0&deg;C).
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-gray-100/70 border-b border-gray-200 text-[11px] font-bold text-gray-700 uppercase print:bg-gray-200 print:border-black print:text-black">
                  <th className="py-2.5 px-3 w-28">Date / Time</th>
                  <th className="py-2.5 px-3">Equipment</th>
                  <th className="py-2.5 px-3 w-20">Temp</th>
                  <th className="py-2.5 px-3">Identified Cause</th>
                  <th className="py-2.5 px-3">Corrective Action Taken</th>
                  <th className="py-2.5 px-2 w-14">Sign</th>
                  <th className="py-2.5 px-3 w-24">Status</th>
                  <th className="py-2.5 px-2 w-10 no-print"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 print:divide-black">
                {actions.map(act => (
                  <tr key={act.id} className="hover:bg-gray-50/50">
                    <td className="py-2.5 px-3 font-medium text-gray-900 whitespace-nowrap">{act.date}</td>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{act.unit}</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-rose-700">{act.temp}</td>
                    <td className="py-2.5 px-3 text-gray-700 max-w-xs">{act.cause}</td>
                    <td className="py-2.5 px-3 text-gray-900 font-medium max-w-sm">{act.action}</td>
                    <td className="py-2.5 px-2 font-bold uppercase text-gray-800">{act.signedBy}</td>
                    <td className="py-2.5 px-3">
                      <button
                        onClick={() => toggleActionResolved(act.id)}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border flex items-center gap-1 ${
                          act.resolved
                            ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                            : "bg-rose-50 text-rose-800 border-rose-300"
                        } print:border-black print:text-black cursor-pointer`}
                      >
                        {act.resolved ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <AlertTriangle className="w-3 h-3 text-rose-600" />}
                        <span>{act.resolved ? "Resolved" : "Pending"}</span>
                      </button>
                    </td>
                    <td className="py-2.5 px-2 no-print text-right">
                      <button
                        onClick={() => deleteAction(act.id)}
                        className="text-gray-400 hover:text-rose-500 transition cursor-pointer"
                        title="Delete log entry"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Thermometer Probe Calibration Checker (A Unique Competitive Differentiator) */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50/40 rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm space-y-4 no-print">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <Thermometer className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900">
                Monthly Probe Thermometer Calibration Check
              </h4>
              <p className="text-xs text-gray-600">
                UK FSA standard: Calibrate using crushed ice water (0.0&deg;C) and boiling water (100.0&deg;C). Tolerance: &plusmn;0.5&deg;C.
              </p>
            </div>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border ${
              probePass
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : "bg-rose-50 text-rose-800 border-rose-300"
            }`}
          >
            {probePass ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <AlertTriangle className="w-4 h-4 text-rose-600" />}
            <span>{probePass ? "Thermometer Calibrated &amp; Valid" : "Out of Tolerance (Service Required)"}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs pt-2">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Probe Model / Serial ID</label>
            <input
              type="text"
              value={probeId}
              onChange={e => setProbeId(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
              Ice Point Test (Target: 0.0&deg;C &plusmn;0.5)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={iceTestTemp}
                onChange={e => setIceTestTemp(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-mono font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className={`text-[10px] font-bold px-2 py-1 rounded ${icePass ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                {icePass ? "PASS" : "FAIL"}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">
              Boiling Point Test (Target: 100.0&deg;C &plusmn;0.5)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={boilTestTemp}
                onChange={e => setBoilTestTemp(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-mono font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className={`text-[10px] font-bold px-2 py-1 rounded ${boilPass ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
                {boilPass ? "PASS" : "FAIL"}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase mb-1">Calibration Test Date</label>
            <input
              type="date"
              value={calibratedDate}
              onChange={e => setCalibratedDate(e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-1.5 font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
