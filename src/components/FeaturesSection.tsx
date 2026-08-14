import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";

const headerSegments = [
  {
    text: "Studio-grade workflows for visionary creators.",
    className: "text-[#E1E0CC] block w-full text-center font-normal",
  },
  {
    text: "Built for pure vision. Powered by art.",
    className: "text-gray-500 block w-full text-center font-normal mt-1",
  },
];

interface FeatureCardProps {
  index: number;
  children: ReactNode;
}

const AnimatedFeatureCard = ({ index, children }: FeatureCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section id="workshops" className="min-h-screen bg-black relative py-20 px-4 sm:px-6 md:px-8 box-border flex flex-col justify-center">
      {/* Subtle Noise Background */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Text */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-col items-center"
          />
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Card 1 - Video Card */}
          <AnimatedFeatureCard index={0}>
            <div className="relative rounded-2xl overflow-hidden min-h-[360px] lg:h-full flex flex-col justify-end p-6 sm:p-8 group shadow-xl">
              <video preload="metadata" autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <p className="text-lg sm:text-xl font-medium text-[#E1E0CC] relative z-10">
                Your creative canvas.
              </p>
            </div>
          </AnimatedFeatureCard>

          {/* Card 2 - Project Storyboard. (01) */}
          <AnimatedFeatureCard index={1}>
            <div className="bg-[#212121] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[360px] lg:h-full relative overflow-hidden group shadow-xl border border-white/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                    alt="Project Storyboard Icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                  />
                  <span className="text-xs text-gray-500 font-mono">01</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-4">
                  Project Storyboard.
                </h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Sequence visualizer & timeline</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Frame-by-frame annotation</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Real-time collaborator sync</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Instant animatic export</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="#learn-more-01"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#E1E0CC] hover:text-white transition-colors group/link font-medium"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </AnimatedFeatureCard>

          {/* Card 3 - Smart Critiques. (02) */}
          <AnimatedFeatureCard index={2}>
            <div className="bg-[#212121] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[360px] lg:h-full relative overflow-hidden group shadow-xl border border-white/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                    alt="Smart Critiques Icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                  />
                  <span className="text-xs text-gray-500 font-mono">02</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-4">
                  Smart Critiques.
                </h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>AI automated scene analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Contextual creative notes</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>NLE tool integrations</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="#learn-more-02"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#E1E0CC] hover:text-white transition-colors group/link font-medium"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </AnimatedFeatureCard>

          {/* Card 4 - Immersion Capsule. (03) */}
          <AnimatedFeatureCard index={3}>
            <div className="bg-[#212121] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[360px] lg:h-full relative overflow-hidden group shadow-xl border border-white/5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <img
                    src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                    alt="Immersion Capsule Icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                  />
                  <span className="text-xs text-gray-500 font-mono">03</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-4">
                  Immersion Capsule.
                </h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Deep focus notification silencing</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Generative ambient soundscapes</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>Studio schedule & deadline syncing</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="#learn-more-03"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#E1E0CC] hover:text-white transition-colors group/link font-medium"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </AnimatedFeatureCard>
        </div>
      </div>
    </section>
  );
};
