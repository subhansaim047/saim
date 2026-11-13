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
    glow: "from-[#2F6CE1]/25 to-transparent",
    iconHover: "group-hover:rotate-12 group-hover:scale-115",
    color: "text-[#2F6CE1]",
    borderHover: "group-hover:border-[#2F6CE1]/50 group-hover:shadow-[0_0_24px_rgba(47,108,225,0.22)]",
  },
  {
    step: "02",
    icon: Compass,
    title: "Strategy & Architecture",
    description:
      "We map your website architecture, page layout wireframes, and high-converting customer journeys.",
    glow: "from-[#1E4EC4]/25 to-transparent",
    iconHover: "group-hover:rotate-90 group-hover:scale-115",
    color: "text-[#1E4EC4]",
    borderHover: "group-hover:border-[#1E4EC4]/50 group-hover:shadow-[0_0_24px_rgba(30,78,196,0.20)]",
  },
  {
    step: "03",
    icon: Code2,
    title: "Design & Development",
    description:
      "We engineer pixel-perfect designs with clean, sub-second Next.js code and mobile accessibility.",
    glow: "from-[#020612]/20 to-transparent",
    iconHover: "group-hover:scale-125",
    color: "text-[#020612]",
    borderHover: "group-hover:border-[#020612]/40 group-hover:shadow-[0_0_24px_rgba(2,6,18,0.18)]",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We test cross-browser speed, submit sitemaps to Google, deploy to edge servers, and provide 14–30 days of direct support.",
    glow: "from-[#2F6CE1]/25 to-transparent",
    iconHover: "group-hover:-translate-y-1.5 group-hover:translate-x-1.5 group-hover:scale-115",
    color: "text-[#2F6CE1]",
    borderHover: "group-hover:border-[#2F6CE1]/50 group-hover:shadow-[0_0_24px_rgba(47,108,225,0.22)]",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative w-full bg-white py-20 sm:py-28 md:py-36 border-t border-[#020612]/[0.07] overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <FadeUp>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF5FF] border border-[#2F6CE1]/20 mb-4">
              <span className="section-dot" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#020612]">
                Workflow Roadmap
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#020612] mb-4" style={{ letterSpacing: "-0.03em" }}>
              Our Process <span className="text-[#2F6CE1]">In 4 Steps.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-[#020612]/70 leading-relaxed font-normal">
              A simple, structured 4-step roadmap to take your website from initial idea to live revenue engine.
            </p>
          </FadeUp>
        </div>

        {/* 4-STEP PROCESS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.step} delay={0.1 * index}>
                <div className="bento-card-sybiosme p-7 sm:p-8 flex flex-col justify-between h-full group relative overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="relative shrink-0">
                        <div
                          className={`relative w-12 h-12 rounded-2xl bg-[#EFF5FF] border border-[#2F6CE1]/20 ${item.borderHover} flex items-center justify-center transition-all duration-300 shadow-sm`}
                        >
                          <Icon
                            className={`w-5 h-5 ${item.color} transition-all duration-500 ease-out ${item.iconHover}`}
                          />
                        </div>
                      </div>

                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#1D4ED8] bg-[#EFF5FF] border border-[#2F6CE1]/20 px-3 py-1 rounded-full group-hover:border-[#2F6CE1]/45 transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="font-heading text-[#020612] text-lg sm:text-xl font-bold mb-3 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-[#020612]/70 text-xs sm:text-sm leading-relaxed font-normal">
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
