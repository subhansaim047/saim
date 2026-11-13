"use client";
import { FadeUp } from "./FadeUp";
import { PhoneCall, Compass, Code2, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Discovery & Brief",
    description:
      "We define your business goals, target clients, project scope, and design preferences.",
    glow: "from-[#FF4A1C]/35 to-transparent",
    iconHover: "group-hover:rotate-12 group-hover:scale-115",
    color: "text-[#FF4A1C]",
    borderHover: "group-hover:border-[#FF4A1C]/50 group-hover:shadow-[0_0_24px_rgba(255,74,28,0.25)]",
  },
  {
    step: "02",
    icon: Compass,
    title: "Strategy & Architecture",
    description:
      "We map your website architecture, page layout wireframes, and high-converting customer journeys.",
    glow: "from-sky-500/35 to-transparent",
    iconHover: "group-hover:rotate-90 group-hover:scale-115",
    color: "text-sky-600",
    borderHover: "group-hover:border-sky-400/50 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.20)]",
  },
  {
    step: "03",
    icon: Code2,
    title: "Design & Development",
    description:
      "We engineer pixel-perfect designs with clean, sub-second Next.js code and mobile accessibility.",
    glow: "from-emerald-500/35 to-transparent",
    iconHover: "group-hover:scale-125",
    color: "text-emerald-600",
    borderHover: "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_24px_rgba(52,211,153,0.20)]",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We test cross-browser speed, submit sitemaps to Google, deploy to edge servers, and provide 14–30 days of direct support.",
    glow: "from-purple-500/35 to-transparent",
    iconHover: "group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:scale-115",
    color: "text-purple-600",
    borderHover: "group-hover:border-purple-400/50 group-hover:shadow-[0_0_24px_rgba(192,132,252,0.20)]",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative w-full bg-white py-20 sm:py-28 md:py-36 border-t border-black/[0.06] overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.03] border border-black/[0.08] mb-4">
              <span className="section-dot" />
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-black/75">
                Workflow Roadmap
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#111115] mb-4" style={{ letterSpacing: "-0.04em" }}>
              Our Process <span className="text-black/45">In 4 Steps.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-black/65 leading-relaxed font-light">
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
                <div className="bento-card-sybiosme p-7 sm:p-8 flex flex-col justify-between h-full group relative overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      {/* Animated Icon Container */}
                      <div className="relative shrink-0">
                        <div
                          className={`relative w-12 h-12 rounded-2xl bg-[#FAFAFA] border border-black/[0.08] ${item.borderHover} flex items-center justify-center transition-all duration-300 shadow-sm`}
                        >
                          <Icon
                            className={`w-5 h-5 ${item.color} transition-all duration-500 ease-out ${item.iconHover}`}
                          />
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#111115]/80 bg-[#FAFAFA] border border-black/[0.08] px-3 py-1 rounded-full group-hover:border-black/20 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <p className="text-[#111115] text-lg sm:text-xl font-medium mb-3 transition-colors">
                      {item.title}
                    </p>

                    <p className="text-black/65 text-xs sm:text-sm leading-relaxed font-light">
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
