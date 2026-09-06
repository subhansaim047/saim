import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
      {/* Background ambient lighting similar to Webild (Subtle top-left and top-right glows) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-br from-white/[0.02] to-transparent" />
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-white/[0.01] blur-[100px]" />
        
        {/* Subtle vertical grid lines like Webild */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20vw 100%",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 max-w-[1400px]">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* ==============================================
              LEFT COLUMN - TYPOGRAPHY (Saim Dev Text)
          =============================================== */}
          <div className="w-full lg:w-[48%] flex flex-col justify-center items-start z-20">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-[11px] sm:text-[13px] font-medium tracking-wide text-white/80">
                  Full Stack Web Developer
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-[12vw] sm:text-[8vw] lg:text-[4.5rem] xl:text-[5rem] font-medium leading-[1.05] tracking-tight text-white mb-6 font-sans"
            >
              High-Performance <br />
              <span className="text-white">Web Architecture</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-[15px] sm:text-lg text-white/60 leading-relaxed font-normal max-w-lg mb-10"
            >
              Saim Dev is a worldwide collective of web developers & strategists connected by a shared purpose — building custom websites that unlock <strong className="text-white font-medium">measurable growth</strong> for every business we work with. Business growth starts with a better website.
            </motion.p>

            {/* Tech stack chips underneath description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              {["Next.js", "Node.js", "Vite", "React", "Tailwind"].map((tech) => (
                <span key={tech} className="text-xs font-mono text-white/40 uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
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
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
              >
                View Work
              </a>
            </motion.div>
          </div>


          {/* ==============================================
              RIGHT COLUMN - ANIMATED GRID
          =============================================== */}
          <div className="w-full lg:w-[50%] h-[500px] sm:h-[600px] lg:h-[700px] relative overflow-hidden rounded-2xl flex gap-4 lg:gap-6 pt-10 px-2 sm:px-0 z-10">
            
            {/* Column 1 (Scrolls Down) */}
            <motion.div 
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: [-150, 0, -150], opacity: 1 }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity, opacity: { duration: 1 } }}
              className="w-1/2 flex flex-col gap-4 lg:gap-6"
            >
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                <img src="/section-performance.png" alt="Performance" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-light text-white">Performance</h3>
                  <p className="text-xs text-white/60 mt-1 uppercase tracking-widest">Analytics</p>
                </div>
              </div>
              
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                <img src="/hero-dev.webp" alt="UI Design" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-light text-white">Latest</h3>
                  <p className="text-xs text-white/60 mt-1 uppercase tracking-widest">UI/UX Design</p>
                </div>
              </div>
            </motion.div>

            {/* Column 2 (Scrolls Up) */}
            <motion.div 
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [0, -150, 0], opacity: 1 }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity, opacity: { duration: 1 } }}
              className="w-1/2 flex flex-col gap-4 lg:gap-6 pt-16 lg:pt-24"
            >
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                <img src="/section-backend-ui.png" alt="Backend" className="absolute inset-0 w-full h-full object-cover object-left opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-light text-white">Architecture</h3>
                  <p className="text-xs text-white/60 mt-1 uppercase tracking-widest">Backend</p>
                </div>
              </div>

              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                <img src="/section-techstack.png" alt="Tech Stack" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-light text-white">Tech Stack</h3>
                  <p className="text-xs text-white/60 mt-1 uppercase tracking-widest">Modern</p>
                </div>
              </div>
            </motion.div>

            {/* Top and Bottom faded gradients to mask the scrolling images */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20" />

          </div>
        </div>
      </div>
    </section>
  );
};
