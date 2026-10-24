"use client";
import React from "react";
import { Zap, CheckCircle2, Globe, Cpu, ArrowUpRight } from "lucide-react";

export const VelorahHeroPreview = () => {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-2xl flex flex-col justify-between p-4 sm:p-6 border border-white/10"
      style={{
        background: "linear-gradient(135deg, #090d16 0%, #0d121f 50%, #05070c 100%)",
      }}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Window Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[10px] text-white/40 tracking-wider">
            production.edge.network
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Edge Live (24ms)</span>
        </div>
      </div>

      {/* Center Architecture Metrics Grid */}
      <div className="relative z-10 my-auto py-4 grid grid-cols-2 gap-3 sm:gap-4">
        <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-white/50">PERFORMANCE</span>
            <Zap className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="mt-3">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">99<span className="text-xs text-white/40 font-normal">/100</span></div>
            <p className="text-[10px] text-white/60 mt-0.5">Optimised Core Web Vitals</p>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-white/50">FRAMEWORK</span>
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="mt-3">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">Next.js 16</div>
            <p className="text-[10px] text-white/60 mt-0.5">Turbopack App Router</p>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-white/50">SERVERLESS</span>
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
          </div>
          <div className="mt-3">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">&lt; 0.8s</div>
            <p className="text-[10px] text-white/60 mt-0.5">Sub-second First Load</p>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-white/50">SEO &amp; SCHEMA</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
          </div>
          <div className="mt-3">
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">100%</div>
            <p className="text-[10px] text-white/60 mt-0.5">Structured Schema (JSON-LD)</p>
          </div>
        </div>
      </div>

      {/* Bottom Status Row */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
        <span className="font-mono text-[10px] text-white/40">
          UK &amp; European Web Architecture
        </span>
        <span className="flex items-center gap-1 text-primary text-[10px] font-medium">
          Verified Architecture <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
