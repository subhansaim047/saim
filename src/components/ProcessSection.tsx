"use client";

import React from "react";
import { FadeUp } from "./FadeUp";
import { PhoneCall, Compass, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    phase: "PHASE 1 · BRIEF",
    icon: PhoneCall,
    title: "Discovery Call",
    description:
      "We discuss your business goals, target clients, project scope, and design preferences.",
    glow: "from-[#FF4A1C]/35 to-transparent",
    iconColor: "text-[#FF4A1C]",
    borderColor: "border-[#FF4A1C]/25 group-hover:border-[#FF4A1C]/50",
    bgMesh: "from-[#201412] via-[#150f0e] to-[#0f0c0b]",
    nextTag: "Next: Strategy →",
  },
  {
    step: "02",
    phase: "PHASE 2 · WIREFRAME",
    icon: Compass,
    title: "Strategy & Planning",
    description:
      "Structuring website architecture, page layout wireframes, and high-converting copy paths.",
    glow: "from-sky-500/35 to-transparent",
    iconColor: "text-sky-400",
    borderColor: "border-sky-500/25 group-hover:border-sky-400/50",
    bgMesh: "from-[#121c24] via-[#0e141a] to-[#0a0e12]",
    nextTag: "Next: Development →",
  },
  {
    step: "03",
    phase: "PHASE 3 · NEXT.JS BUILD",
    icon: Code2,
    title: "Design & Development",
    description:
      "Crafting pixel-perfect custom designs and building fast, sub-second clean code.",
    glow: "from-emerald-500/35 to-transparent",
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/25 group-hover:border-emerald-400/50",
    bgMesh: "from-[#102018] via-[#0d1712] to-[#09110d]",
    nextTag: "Next: Deployment →",
  },
  {
    step: "04",
    phase: "PHASE 4 · GO LIVE",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Final testing, Google SEO indexing, live deployment, and 14–30 days dedicated support.",
    glow: "from-purple-500/35 to-transparent",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/25 group-hover:border-purple-400/50",
    bgMesh: "from-[#1c1424] via-[#140e1a] to-[#0e0a12]",
    nextTag: "Status: Live Revenue Engine ✔",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative w-full bg-black py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF4A1C]/[0.025] rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-14 sm:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                Workflow Roadmap
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4"
              style={{ letterSpacing: "-0.04em" }}
            >
              Our Process <span className="text-white/40">In 4 Steps.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light">
              A simple, structured 4-step roadmap to take your website from initial idea to live revenue engine.
            </p>
          </FadeUp>
        </div>

        {/* DOUBLE-BEZEL CONCENTRIC SQUIRCLE FRAME */}
        <div className="relative rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-2 sm:p-3 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
          <div className="relative rounded-[calc(2.5rem-0.75rem)] bg-[#121212] p-6 sm:p-8 lg:p-10 border border-white/5 overflow-hidden">
            
            {/* Ambient Radial Highlights */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF4A1C]/[0.05] rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

            {/* 4-STEP LUXURY TILES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10 items-stretch">
              {processSteps.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeUp key={item.step} delay={0.08 * index}>
                    <div
                      className={`relative rounded-[2rem] bg-gradient-to-br ${item.bgMesh} border ${item.borderColor} p-6 sm:p-7 flex flex-col justify-between h-full group transition-all duration-300 hover:-translate-y-1.5 shadow-xl overflow-hidden min-h-[320px]`}
                    >
                      {/* Top subtle glow */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                      <div>
                        {/* Top Bar: Icon + Step Watermark */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="relative shrink-0">
                            <div
                              className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 blur-md transition-all duration-500 pointer-events-none`}
                            />
                            <div className="relative w-12 h-12 rounded-2xl bg-[#111113] border border-white/10 flex items-center justify-center transition-all duration-300 shadow-md">
                              <Icon className={`w-5 h-5 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                            </div>
                          </div>

                          <span className="text-2xl sm:text-3xl font-mono font-medium text-white/35 group-hover:text-white transition-colors">
                            {item.step}
                          </span>
                        </div>

                        {/* Phase Tag */}
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/45 block mb-2">
                          {item.phase}
                        </span>

                        <h3 className="text-white text-lg sm:text-xl font-medium tracking-tight mb-2.5">
                          {item.title}
                        </h3>

                        <p className="text-white/65 text-xs sm:text-[13px] leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Flow Tag */}
                      <div className="pt-5 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/45 group-hover:text-white/80 transition-colors">
                        <span>{item.nextTag}</span>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
