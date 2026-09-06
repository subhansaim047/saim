import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#050505] flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Very subtle glow top-left */}
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-white/[0.02] blur-[120px]" />
        
        {/* Faint vertical grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "16.66% 100%",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10">
          
          {/* ==============================================
              LEFT COLUMN - TYPOGRAPHY
          =============================================== */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center items-start z-20">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#111111] border border-white/5">
                <span className="text-[13px] font-medium text-white/80">
                  Full Stack Web Developer
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[11vw] sm:text-[8vw] lg:text-[4.5rem] xl:text-[5.5rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white mb-6"
            >
              High-Performance<br />
              Web Architecture
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg text-white/60 leading-relaxed font-normal max-w-[480px] mb-10"
            >
              Saim Dev is a worldwide collective of web developers & strategists connected by a shared purpose — building custom websites that unlock <strong className="text-white font-medium">measurable growth</strong>. Business growth starts with a better website.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              <a 
                href="https://wa.me/34711244392" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                Start Project
              </a>
              <a 
                href="#our-story"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-[#1a1a1a] border border-white/5 rounded-full hover:bg-[#222222] transition-colors"
              >
                View Work
              </a>
            </motion.div>
          </div>

          {/* ==============================================
              RIGHT COLUMN - PROPER ANIMATED MARQUEE GRID
          =============================================== */}
          <div className="w-full lg:w-[50%] h-[600px] lg:h-[800px] relative overflow-hidden rounded-3xl flex gap-6 z-10">
            
            {/* Top/Bottom Fade Masks for smooth scroll entry/exit */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#050505] to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none" />

            {/* Column 1 - Scrolling UP */}
            <div className="w-1/2 h-full flex flex-col relative pt-10">
              <motion.div 
                animate={{ y: ["0%", "-50%"] }}
                transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                className="flex flex-col gap-6 w-full absolute top-0"
              >
                {/* We render the set twice for seamless looping */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-6 w-full">
                    
                    {/* Card 1 */}
                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-[#111111] border border-white/5">
                      <img src="/section-performance.png" alt="Performance" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-light text-white mb-1">Latest Shot</h3>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Performance Analytics</p>
                      </div>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-[#111111] border border-white/5">
                      <img src="/hero-dev.webp" alt="UI Design" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-light text-white mb-1">Latest Shot</h3>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono">UI/UX Design Series</p>
                      </div>
                    </div>
                    
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Column 2 - Scrolling DOWN */}
            <div className="w-1/2 h-full flex flex-col relative">
              <motion.div 
                animate={{ y: ["-50%", "0%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                className="flex flex-col gap-6 w-full absolute bottom-0"
              >
                {/* We render the set twice for seamless looping */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex flex-col gap-6 w-full">
                    
                    {/* Card 3 */}
                    <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden bg-[#111111] border border-white/5">
                      <img src="/section-backend-ui.png" alt="Backend" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-light text-white mb-1">Latest Shot</h3>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Backend Architecture</p>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#111111] border border-white/5">
                      <img src="/section-techstack.png" alt="Tech Stack" className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-light text-white mb-1">Latest Shot</h3>
                        <p className="text-[10px] text-white/50 uppercase tracking-widest font-mono">Modern Tech Stack</p>
                      </div>
                    </div>

                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
