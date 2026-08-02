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
    <section id="process" className="relative w-full bg-black py-16 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-xl mx-auto mb-14">


          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
              My Process
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-sm sm:text-base text-foreground/60 leading-relaxed">
              A simple, structured 4-step roadmap to take your website from initial idea to live revenue engine.
            </p>
          </FadeUp>
        </div>

        {/* 4-STEP PROCESS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.step} delay={0.1 * index}>
                <div className="liquid-glass rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full border border-white/10 hover:border-white/25 transition-all duration-300 group relative overflow-hidden">
                  {/* Subtle Top Ambient Glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/15 transition-all duration-500 pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-primary/90 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-white text-lg font-medium mb-2.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed font-light">
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
