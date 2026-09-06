import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#0a0a0a] text-white flex items-center justify-center overflow-hidden">
      
      {/* Background Vertical Grid Lines & Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-[10%]">
        <div className="w-px h-full bg-white/5" />
        <div className="w-px h-full bg-white/5" />
        <div className="w-px h-full bg-white/5" />
        <div className="w-px h-full bg-white/5" />
      </div>
      
      {/* Subtle glowing ambient light behind the text */}
      <div 
        className="absolute top-[20%] left-0 w-[50vw] h-[50vh] bg-white/5 rounded-full blur-[150px] pointer-events-none z-0"
      />

      {/* Main Content Container: 2-column split on Desktop */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 md:px-16 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 max-w-7xl">
        
        {/* =======================
            LEFT COLUMN (Text)
        ======================== */}
        <div className="w-full lg:w-[45%] flex flex-col items-start gap-6 lg:gap-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#161616]"
          >
            <span className="text-xs sm:text-sm font-medium text-white/80 tracking-wide">
              Full Stack Dev
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-semibold leading-[1.05] tracking-tight text-white font-sans">
              High-Performance <br />
              <span className="text-white/90">Web Architecture</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <p className="text-base sm:text-lg text-white/60 leading-relaxed font-light max-w-lg">
              Saim Dev is a worldwide collective of web developers & strategists connected by a shared purpose — building custom websites that unlock <strong className="text-white font-medium">measurable growth</strong> for every business we work with.
            </p>
            <p className="text-sm text-primary/80 italic font-serif mt-1">
              "Business growth starts with a better website."
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a 
              href="https://wa.me/34711244392" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-black bg-white rounded-full transition-transform hover:scale-105 active:scale-95"
            >
              Start Project
            </a>
            <a 
              href="#our-story" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-[#1a1a1a] rounded-full transition-colors hover:bg-[#252525] border border-white/5"
            >
              View Work
            </a>
          </motion.div>
        </div>

        {/* =======================
            RIGHT COLUMN (Grid)
        ======================== */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full lg:w-[50%] grid grid-cols-2 gap-4 lg:gap-5"
        >
          {/* Top Wide Image (Spans 2 columns) */}
          <div className="col-span-2 group relative rounded-[2rem] overflow-hidden bg-[#161616] border border-white/5 aspect-[21/9] sm:aspect-[21/10]">
            <img 
              src="/hero-dev.webp" 
              alt="Performance Architecture" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            {/* Optional Overlay / Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Bottom Left Square */}
          <div className="col-span-1 group relative rounded-[2rem] overflow-hidden bg-[#161616] border border-white/5 aspect-square">
            <img 
              src="/section-performance.png" 
              alt="Performance Stats" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <span className="text-white/80 font-light text-sm">Latest Shot</span>
              <h3 className="text-white font-medium text-lg">Performance</h3>
            </div>
          </div>

          {/* Bottom Right Square */}
          <div className="col-span-1 group relative rounded-[2rem] overflow-hidden bg-[#161616] border border-white/5 aspect-square">
            <img 
              src="/section-backend.png" 
              alt="Backend Architecture" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <span className="text-white/80 font-light text-sm">Latest Shot</span>
              <h3 className="text-white font-medium text-lg">Architecture</h3>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
