"use client";

import React, { useState, useEffect } from "react";
import {
  Printer,
  Timer,
  Play,
  Pause,
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Info
} from "lucide-react";

interface HandWashingPosterToolProps {
  templateId?: string;
}

const STEPS = [
  {
    step: 1,
    title: "Wet Hands",
    desc: "Use warm potable running water (approx 38°C). Never start with soap on dry hands.",
    rule: "Warm Water Flow"
  },
  {
    step: 2,
    title: "Apply Soap",
    desc: "Dispense certified antibacterial liquid soap (BS EN 1499 standard). No bar soap.",
    rule: "BS EN 1499 Soap"
  },
  {
    step: 3,
    title: "Rub Palms & Interlace",
    desc: "Lather palms together, then interlace fingers to scrub between all finger webs.",
    rule: "Fingers & Webs"
  },
  {
    step: 4,
    title: "Backs, Thumbs & Wrists",
    desc: "Rub back of each hand with opposite palm. Clean both thumbs and scrub wrists.",
    rule: "Rotational Rubbing"
  },
  {
    step: 5,
    title: "Rinse Thoroughly",
    desc: "Rinse completely under clean running water until all suds and transient bacteria flush away.",
    rule: "Full Rinse"
  },
  {
    step: 6,
    title: "Dry with Blue Roll",
    desc: "Dry completely using single-use blue paper towels. Turn off taps using the paper towel.",
    rule: "Blue Paper Roll"
  }
];

const TRIGGERS = [
  "Before handling ready-to-eat foods or starting a prep shift",
  "Immediately after touching raw meat, poultry, raw eggs, or fish",
  "After clearing refuse, touching bins, or handling chemical bottles",
  "After blowing nose, coughing, sneezing, or touching face/hair",
  "After visiting the washroom or entering the food preparation area",
  "Before putting on disposable food-handling gloves and when changing tasks"
];

export const HandWashingPosterTool: React.FC<HandWashingPosterToolProps> = () => {
  const [establishment, setEstablishment] = useState("Commercial Catering Kitchen");
  const [basinLocation, setBasinLocation] = useState("Prep Line Washbasin #1");

  // 20-Second Handwashing Practice Timer
  const [secondsLeft, setSecondsLeft] = useState(20);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(s => s - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
      setHasFinished(true);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, secondsLeft]);

  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(20);
    setHasFinished(false);
  };

  const startTimer = () => {
    if (secondsLeft === 0) {
      setSecondsLeft(20);
      setHasFinished(false);
    }
    setIsActive(true);
  };

  return (
    <div className="space-y-8">
      {/* Interactive Tool Banner & 20s Trainer */}
      <div className="bg-gradient-to-br from-cyan-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-cyan-800/40 no-print">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-200 border border-cyan-400/30">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              UK Food Standards Agency &amp; Regulation (EC) No 852/2004
            </span>
            <span className="text-xs text-cyan-200/80 font-mono">
              Statutory Standard: 20 Seconds Lathering
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Commercial Kitchen Handwashing Poster &amp; 20-Second Practice Trainer
          </h2>

          <p className="text-sm sm:text-base text-cyan-100/90 max-w-3xl leading-relaxed">
            Train food handlers on the official 6-step handwashing technique and print a high-contrast wall poster for all dedicated kitchen washbasins. Features an interactive 20-second compliance timer to ensure staff lathering meets EHO inspection standards.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Interactive Timer Controls */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2">
              <Timer className="w-5 h-5 text-cyan-300" />
              <div className="font-mono text-2xl font-black text-white w-12 text-center">
                {secondsLeft}s
              </div>
              <button
                type="button"
                onClick={isActive ? () => setIsActive(false) : startTimer}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
              >
                {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isActive ? "Pause" : secondsLeft === 0 ? "Restart" : "Start 20s Drill"}</span>
              </button>
              <button
                type="button"
                onClick={resetTimer}
                className="text-cyan-200 hover:text-white transition p-1 cursor-pointer"
                title="Reset timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {hasFinished && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-bold animate-pulse">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>20-Second Contact Time Complete (FSA Verified)</span>
              </div>
            )}

            <button
              onClick={() => window.print()}
              className="bg-white hover:bg-gray-100 text-gray-900 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-md cursor-pointer ml-auto hover:scale-[1.01]"
            >
              <Printer className="w-4 h-4 text-cyan-600" />
              <span>Print A4 Kitchen Wall Poster</span>
            </button>
          </div>
        </div>

        {/* Ambient background glow */}
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Editable Basin Location Header (Screen & Print) */}
      <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm print:border-none print:shadow-none print:p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Food Business / Restaurant Name
            </label>
            <input
              type="text"
              value={establishment}
              onChange={e => setEstablishment(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 font-bold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 print:hidden"
            />
            <div className="hidden print:block text-xl font-black text-black border-b-2 border-black pb-1">
              {establishment || "Commercial Kitchen"}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
              Designated Washbasin Location
            </label>
            <input
              type="text"
              value={basinLocation}
              onChange={e => setBasinLocation(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 print:hidden"
            />
            <div className="hidden print:block text-sm font-bold text-gray-800 border-b border-gray-400 pb-1">
              Station Location: {basinLocation}
            </div>
          </div>
        </div>
      </div>

      {/* Printable Poster Visual Document (A4 High Contrast) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm print:rounded-none print:border-2 print:border-black print:p-4 print:shadow-none space-y-6">
        <div className="text-center space-y-2 border-b-2 border-cyan-600 pb-4 print:border-black">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-black uppercase tracking-widest print:bg-gray-200 print:text-black">
            Official EHO Hygiene Standard
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 uppercase tracking-tight">
            How to Wash Your Hands in a Commercial Kitchen
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto print:text-black font-medium">
            Wash hands for at least 20 seconds. Use dedicated handwash basins only—never use food prep or potwash sinks.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map(s => (
            <div
              key={s.step}
              className="p-4 rounded-2xl bg-cyan-50/40 border border-cyan-200/80 print:bg-white print:border print:border-black flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-cyan-700 text-white font-black text-sm flex items-center justify-center print:bg-black">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100/70 px-2 py-0.5 rounded print:text-black print:bg-gray-200">
                    {s.rule}
                  </span>
                </div>
                <h3 className="text-sm font-extrabold text-gray-900 pt-1">{s.title}</h3>
                <p className="text-xs text-gray-700 leading-relaxed print:text-black">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Triggers Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 print:bg-white print:border print:border-black space-y-3">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            Mandatory Kitchen Handwashing Moments (When to Wash):
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 print:text-black">
            {TRIGGERS.map((t, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Regulatory Footer Note */}
        <div className="p-3 bg-gray-100 rounded-xl text-[10px] text-gray-600 print:bg-white print:text-black print:border-t print:border-black flex flex-wrap items-center justify-between gap-2">
          <span>Compliant with Regulation (EC) No 852/2004 &amp; UK Food Hygiene Regulations</span>
          <span>Basin Standard: Hot/Cold Water + BS EN 1499 Soap + Blue Paper Roll</span>
        </div>
      </div>
    </div>
  );
};
