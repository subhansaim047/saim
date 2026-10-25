"use client";
import { FadeUp } from "./FadeUp";
import { PhoneCall, Compass, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Discovery Call",
    description:
      "We discuss your business goals, target clients, project scope, and design preferences.",
  },
  {
    step: "02",
    icon: Compass,
    title: "Strategy & Planning",
    description:
      "Structuring website architecture, page layout wireframes, and high-converting copy paths.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Design & Development",
    description:
      "Crafting pixel-perfect custom designs and building fast, sub-second clean code.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Final testing, Google SEO indexing, live deployment, and 14–30 days dedicated support.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative w-full bg-[#0A0A0A] py-20 sm:py-28 md:py-36 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4A1C]/[0.025] rounded-full blur-[160px] pointer-events-none z-0" />

      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                Workflow Roadmap
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4" style={{ letterSpacing: "-0.04em" }}>
              Our Process <span className="text-white/40">In 4 Steps.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light">
              A simple, structured 4-step roadmap to take your website from initial idea to live revenue engine.
            </p>
          </FadeUp>
        </div>

        {/* 4-STEP PROCESS GRID — Sybiosme Squircle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.step} delay={0.1 * index}>
                <div className="bento-card-sybiosme p-7 sm:p-8 flex flex-col justify-between h-full group relative overflow-hidden shadow-xl">
                  {/* Subtle Ambient Hover Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4A1C]/[0.05] rounded-full blur-2xl group-hover:bg-[#FF4A1C]/[0.12] transition-all duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.05] backdrop-blur-md flex items-center justify-center text-white border border-white/10 group-hover:border-[#FF4A1C]/40 group-hover:text-[#FF4A1C] group-hover:scale-105 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-white/90 bg-white/[0.06] border border-white/10 px-3 py-1 rounded-full">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-white text-lg sm:text-xl font-medium mb-3 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-white/65 text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};
