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
  Timer,
  Clock,
  Sparkles,
  Layers,
  Thermometer,
  RotateCcw,
  FileSpreadsheet
} from "lucide-react";

interface CoolingBatch {
  id: string;
  dishName: string;
  initialTemp: number;
  timeStarted: string;
  midTemp: number;
  finalTemp: number;
  durationMinutes: number;
  method: string;
}

const DEFAULT_BATCHES: CoolingBatch[] = [
  {
    id: "batch-1",
    dishName: "Slow-Cooked Beef Chilli",
    initialTemp: 86,
    timeStarted: "14:15",
    midTemp: 24,
    finalTemp: 4.8,
    durationMinutes: 75,
    method: "Shallow Pans in Blast Chiller"
  },
  {
    id: "batch-2",
    dishName: "Rich Chicken Stock / Jus",
    initialTemp: 92,
    timeStarted: "15:00",
    midTemp: 28,
    finalTemp: 5.2,
    durationMinutes: 85,
    method: "Ice Water Bath & Sanitised Stirring Paddle"
  }
];

export function FoodCoolingPosterTool({ templateId }: { templateId?: string }) {
  const [businessName, setBusinessName] = useState<string>("The Crown Gastro Kitchen");
  const [stationIdentifier, setStationIdentifier] = useState<string>("Hot Prep & Blast Chiller Bay");
  const [chefSupervisor, setChefSupervisor] = useState<string>("Head Chef J. Morgan");
  const [jurisdiction, setJurisdiction] = useState<"uk" | "scotland">("uk");

  // Interactive Batch Log Simulator
  const [batches, setBatches] = useState<CoolingBatch[]>(DEFAULT_BATCHES);
  const [newDishName, setNewDishName] = useState<string>("");
  const [newInitialTemp, setNewInitialTemp] = useState<number>(85);
  const [newFinalTemp, setNewFinalTemp] = useState<number>(4.5);
  const [newDuration, setNewDuration] = useState<number>(80);
  const [newMethod, setNewMethod] = useState<string>("Shallow Gastronorms (< 5cm)");

  // Interactive Stopwatch
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startStopwatch = () => {
    if (isTimerRunning) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setIsTimerRunning(false);
    } else {
      setIsTimerRunning(true);
      timerIntervalRef.current = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const resetStopwatch = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    setIsTimerRunning(false);
    setTimerSeconds(0);
  };

  React.useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  const formatTimerTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const addBatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDishName.trim()) return;

    const newEntry: CoolingBatch = {
      id: `batch-${Date.now()}`,
      dishName: newDishName.trim(),
      initialTemp: Number(newInitialTemp),
      timeStarted: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      midTemp: Math.round(((Number(newInitialTemp) + Number(newFinalTemp)) / 2) * 10) / 10,
      finalTemp: Number(newFinalTemp),
      durationMinutes: Number(newDuration),
      method: newMethod
    };

    setBatches([newEntry, ...batches]);
    setNewDishName("");
  };

  const removeBatch = (id: string) => {
    setBatches(batches.filter(b => b.id !== id));
  };

  const exportBatchesCSV = () => {
    const headers = ["Batch ID", "Dish Name", "Initial Cooked Temp (°C)", "Time Started", "Final Temp (°C)", "Cooling Duration (Mins)", "Method", "Compliance Status"];
    const rows = batches.map(b => {
      const isCompliant = b.durationMinutes <= 90 && b.finalTemp <= 8;
      const status = isCompliant ? "COMPLIANT (<=90m to <=8C)" : "NON-COMPLIANT (Exceeded 90m or >8C)";
      return [
        `"${b.id}"`,
        `"${b.dishName}"`,
        b.initialTemp,
        `"${b.timeStarted}"`,
        b.finalTemp,
        b.durationMinutes,
        `"${b.method}"`,
        `"${status}"`
      ];
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `food_cooling_log_${new Date().toISOString().split("T")[0]}.csv`);
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
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200/80 mb-2">
              <Snowflake className="w-3.5 h-3.5 text-sky-600" />
              <span>UK Food Standards Agency (FSA) 90-Minute Cooling Rule Standard</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Commercial Kitchen Food Cooling Standard &amp; Rapid Chill Tracker
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
              Log hot batch cooling cycles in real time, verify compliance with the statutory 90-minute limit (from 63°C to ≤ 8°C), and print an EHO-compliant kitchen wall poster with emergency corrective action protocols.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={exportBatchesCSV}
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
              <span>Print A4 Poster</span>
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
              Station / Blast Chiller Bay
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
              Shift Supervisor / Head Chef
            </label>
            <input
              type="text"
              value={chefSupervisor}
              onChange={e => setChefSupervisor(e.target.value)}
              className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-2 font-medium text-slate-900 focus:outline-none shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
              Jurisdiction Threshold
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
                ≤ 8°C (UK Std)
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
                ≤ 5°C (Scotland)
              </button>
            </div>
          </div>
        </div>

        {/* 90-Minute Drill Stopwatch & Stage Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-sm">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30">
              <Timer className="w-3 h-3 text-sky-400" />
              Active Cooling Drill Timer
            </span>
            <div className="font-mono text-4xl sm:text-5xl font-black text-amber-400 tracking-tight">
              {formatTimerTime(timerSeconds)}
            </div>
            <p className="text-[11px] text-slate-300">
              Target: Reduce hot food (&gt; 63°C) to ambient (&lt; 21°C) within 45 mins, then &lt; 8°C within 90 mins total.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={startStopwatch}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isTimerRunning
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-emerald-600 hover:bg-emerald-700 text-white"
                }`}
              >
                {isTimerRunning ? "Pause Timer" : "Start 90m Drill"}
              </button>
              <button
                onClick={resetStopwatch}
                className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-200 transition-all cursor-pointer flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase text-slate-300 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Statutory 2-Stage Cooling Milestones (FSA SFBB)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-400">Stage 1: Ambient Drop</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                    0 – 45 Minutes
                  </span>
                </div>
                <div className="text-sm font-black text-white">&gt; 63°C down to ≤ 21°C</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Decant into shallow pans (&lt; 5cm). Immerse bases in ice baths or position under extraction fans. Cover loosely to vent steam.
                </p>
              </div>

              <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sky-400">Stage 2: Blast / Chiller</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                    45 – 90 Minutes
                  </span>
                </div>
                <div className="text-sm font-black text-white">≤ 21°C down to ≤ 8°C (ideally ≤ 5°C)</div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Transfer to blast chiller or dedicated cooling fridge. Seal airtight once cooled and apply dated shelf-life label.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Batch Log Entry Form */}
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-rose-600" />
              <span>Simulate / Log Food Batch Cooling Cycle</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              EHO Due Diligence Evidence
            </span>
          </div>

          <form onSubmit={addBatch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Dish / Recipe Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Lamb Rogan Josh"
                value={newDishName}
                onChange={e => setNewDishName(e.target.value)}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Initial Temp (°C)
              </label>
              <input
                type="number"
                step="0.1"
                value={newInitialTemp}
                onChange={e => setNewInitialTemp(parseFloat(e.target.value))}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Final Chilled Temp (°C)
              </label>
              <input
                type="number"
                step="0.1"
                value={newFinalTemp}
                onChange={e => setNewFinalTemp(parseFloat(e.target.value))}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                Total Time (Mins)
              </label>
              <input
                type="number"
                value={newDuration}
                onChange={e => setNewDuration(parseInt(e.target.value))}
                className="w-full bg-white border border-slate-300 focus:border-amber-600 rounded-lg px-3 py-1.5 font-medium text-slate-900 focus:outline-none shadow-2xs"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-black text-white text-xs font-bold py-2 rounded-lg transition-all shadow-xs cursor-pointer"
              >
                + Add Batch Record
              </button>
            </div>
          </form>

          {/* Batches Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Dish Name</th>
                  <th className="py-2.5 px-3">Start Temp</th>
                  <th className="py-2.5 px-3">Start Time</th>
                  <th className="py-2.5 px-3">Final Temp</th>
                  <th className="py-2.5 px-3">Total Mins</th>
                  <th className="py-2.5 px-3">Compliance Status</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {batches.map(b => {
                  const isCompliant = b.durationMinutes <= 90 && b.finalTemp <= (jurisdiction === "uk" ? 8 : 5);
                  return (
                    <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-3 font-bold text-slate-900">{b.dishName}</td>
                      <td className="py-2.5 px-3 text-rose-700 font-semibold">{b.initialTemp}°C</td>
                      <td className="py-2.5 px-3">{b.timeStarted}</td>
                      <td className="py-2.5 px-3 text-sky-700 font-semibold">{b.finalTemp}°C</td>
                      <td className="py-2.5 px-3 font-mono">{b.durationMinutes} min</td>
                      <td className="py-2.5 px-3">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            isCompliant
                              ? "bg-emerald-50 text-emerald-800 border border-emerald-300"
                              : "bg-rose-50 text-rose-800 border border-rose-300"
                          }`}
                        >
                          {isCompliant ? (
                            <>
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              PASS (≤ 90m to ≤ 8°C)
                            </>
                          ) : (
                            <>
                              <AlertTriangle className="w-3 h-3 text-rose-600" />
                              FAIL (Risk of Spores)
                            </>
                          )}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <button
                          onClick={() => removeBatch(b.id)}
                          className="text-slate-400 hover:text-rose-600 cursor-pointer font-bold text-[11px]"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          A4 PRINTABLE KITCHEN POSTER CONTAINER
      ════════════════════════════════════════════════════════════════ */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-900 space-y-6 printable-doc shadow-md print:border-none print:shadow-none print:p-0 print:m-0 print:max-w-none">
        {/* Poster Header */}
        <div className="border-b-4 border-slate-900 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="inline-block px-3 py-1 rounded bg-sky-400 text-slate-950 font-mono font-black text-xs uppercase tracking-wider mb-2">
                FSA CRITICAL CONTROL POINT (CCP 2 - RAPID CHILL)
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 uppercase tracking-tight">
                Commercial Kitchen Food Cooling Rules &amp; 90-Minute Limit
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                Mandatory Cooling Timelines, Spore Prevention &amp; Corrective Action Protocol
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-900 rounded-xl p-3 text-right min-w-[200px]">
              <div className="text-[10px] font-bold uppercase text-slate-500">Premises / Unit</div>
              <div className="text-sm font-black text-slate-900 truncate">{businessName}</div>
              <div className="text-xs font-bold text-sky-700 truncate">{stationIdentifier}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-200 text-[11px]">
            <div>
              <span className="font-bold text-slate-500 uppercase block">Supervisor:</span>
              <span className="font-black text-slate-900">{chefSupervisor}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Max Cooling Time:</span>
              <span className="font-black text-rose-700">90 Minutes (FSA Max 2h)</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Cold Holding Target:</span>
              <span className="font-black text-sky-700">≤ 5°C (Legal max 8°C)</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 uppercase block">Spore Risk:</span>
              <span className="font-black text-slate-900">B. cereus / C. perfringens</span>
            </div>
          </div>
        </div>

        {/* Visual 2-Stage Timeline */}
        <div className="border-2 border-slate-900 rounded-2xl p-5 bg-gradient-to-r from-amber-50 to-sky-50">
          <h3 className="text-xs font-black uppercase text-slate-950 mb-3 tracking-wider flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-900" />
            <span>The Statutory 90-Minute Cooling Timeline</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-4 rounded-xl border-2 border-amber-400 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-amber-500 text-white font-mono font-black text-[10px]">
                  STEP 1
                </span>
                <span className="font-bold text-slate-500 text-[10px]">Minute 0</span>
              </div>
              <div className="font-black text-slate-900 text-sm">Remove from Heat (&gt; 63°C)</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Immediately record finish cooking temperature (&ge; 75°C). Never leave food in deep cooking pots or stock kettles.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border-2 border-amber-500 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-amber-600 text-white font-mono font-black text-[10px]">
                  STEP 2
                </span>
                <span className="font-bold text-slate-500 text-[10px]">0 to 45 Mins</span>
              </div>
              <div className="font-black text-slate-900 text-sm">Rapid Pre-Chill to &le; 21°C</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Decant into shallow stainless gastronorm pans (&lt; 5cm depth). Immerse pan in ice water bath. Stir with clean sanitised probe paddle.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border-2 border-sky-400 space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-sky-600 text-white font-mono font-black text-[10px]">
                  STEP 3
                </span>
                <span className="font-bold text-slate-500 text-[10px]">45 to 90 Mins</span>
              </div>
              <div className="font-black text-slate-900 text-sm">Chiller Drop to &le; 8°C (Ideal &le; 5°C)</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Transfer pans to commercial blast chiller or top shelf of dedicated chilling unit. Verify core reaches &le; 8°C, cover airtight, and label.
              </p>
            </div>
          </div>
        </div>

        {/* Approved Rapid Cooling Methods Matrix */}
        <div>
          <h3 className="text-xs font-black uppercase text-slate-950 mb-3 tracking-wider">
            5 Approved Commercial Rapid Cooling Methods (FSA SFBB)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-300 bg-slate-50 space-y-1">
              <div className="font-black text-slate-900">1. Shallow Gastronorm Pans</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Never exceed 5cm food depth. Spreading stews and curries across shallow metal pans multiplies surface area for rapid heat loss.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-300 bg-slate-50 space-y-1">
              <div className="font-black text-slate-900">2. Ice Water Bath Immersion</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Place shallow pans inside a larger sink or tub filled with 50% ice and 50% cold water. Stir continuously with a disinfected spoon.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-300 bg-slate-50 space-y-1">
              <div className="font-black text-slate-900">3. Dividing Large Meat Joints</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Whole roasts (beef, pork, turkey) retain internal heat. Slice or divide whole roasts into smaller cuts under 2.5kg before chilling.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-300 bg-slate-50 space-y-1">
              <div className="font-black text-slate-900">4. Commercial Blast Chiller</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Utilise certified blast chiller cycles engineered to lower temperatures from +70°C to +3°C within 90 minutes with high-velocity cold airflow.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-300 bg-slate-50 space-y-1">
              <div className="font-black text-slate-900">5. Cold Liquid Top-Up</div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                For concentrated stocks, soups, and gravies, prepare as a reduction and top up with ice-cold potable water at the end of boiling.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-300 bg-slate-50 space-y-1">
              <div className="font-black text-slate-900">❌ Prohibited Action</div>
              <p className="text-[11px] text-rose-700 font-semibold leading-relaxed">
                Never place deep pots of steaming hot food directly into regular storage fridges. This warms up adjacent food into the Danger Zone.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Corrective Action Box */}
        <div className="p-4 rounded-2xl border-2 border-rose-600 bg-rose-50/70 text-xs space-y-2">
          <div className="flex items-center gap-2 text-rose-950 font-black uppercase text-xs">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>Mandatory EHO Corrective Action Protocol (Food Taking &gt; 2 Hours to Cool)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-rose-950 leading-relaxed font-medium">
            <p>
              <strong>If food is still above 8°C after 2 hours:</strong> Spore-forming pathogens (Clostridium perfringens) will have germinated. If discovered within 2 hours, immediately re-heat throughout to ≥ 75°C (82°C in Scotland) for 30 seconds and restart cooling with shallow pans.
            </p>
            <p>
              <strong>If food has been in Danger Zone (&gt; 8°C) for over 4 hours:</strong> REHEATING IS STRICTLY PROHIBITED. Bacterial heat-stable enterotoxins (Bacillus cereus) cannot be destroyed by boiling. Immediately discard into Category 3 waste and log in the SFBB Diary.
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
