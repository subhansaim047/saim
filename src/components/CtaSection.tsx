import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp } from "./FadeUp";
import { PrimaryButton } from "./PrimaryButton";
import { CtaDashboardMock } from "./CtaDashboardMock";
import { useIsMobile } from "../hooks/useIsMobile";

export const CtaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const dashboardY = useTransform(scrollYProgress, [0, 1], ["120px", "-120px"]);
  const grassY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["80px", "-40px"] : ["200px", "-200px"]
  );

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, transparent 0%, #14191E 100%)",
      }}
    >
      <div className="relative mx-auto max-w-[1080px] px-4 sm:px-6 pt-24 sm:pt-32 md:pt-40 pb-[440px] sm:pb-[520px] md:pb-[440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Left column */}
          <div className="relative z-20 max-w-[400px]">
            <FadeUp delay={1}>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.02em] leading-[1.05] text-white">
                Transform your business with high-converting web architecture.
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 text-landing-text text-base sm:text-lg leading-[1.5] max-w-[380px]">
                Turn your vision into a fast, modern digital platform engineered to rank on search, convert visitors into loyal clients, and automate business growth.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-10">
              <PrimaryButton
                as="a"
                href="https://wa.me/34711244392"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Project
              </PrimaryButton>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* Dashboard pinned to right edge, behind grass, parallax Y */}
      <motion.div
        style={{ y: dashboardY }}
        className="absolute top-[440px] sm:top-[460px] md:top-[500px] lg:top-20 left-4 right-4 sm:left-auto sm:-right-[8%] md:-right-[10%] lg:-right-[12%] z-10 sm:w-[85%] md:w-[80%] lg:w-[68%]"
      >
        <CtaDashboardMock />
      </motion.div>

      {/* Foreground grass — in front of dashboard, parallax Y */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none"
      />
    </section>
  );
};
