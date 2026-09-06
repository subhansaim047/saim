import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "./WordsPullUp";

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#030303] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Effects (Webild Inspired Blur & Gradients) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated ambient glowing orbs */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[#E8C97A]/10 blur-[100px]"
        />
        
        {/* Subtle dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "radial-gradient(circle, #DEDBC8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#DEDBC8] uppercase">
              Full Stack Dev
            </span>
          </div>
        </motion.div>

        {/* Massive Headline (Webild Vibe) */}
        <div className="w-full max-w-5xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[12vw] sm:text-[9vw] md:text-[7vw] lg:text-[6rem] font-bold leading-[0.9] tracking-tighter text-white drop-shadow-2xl font-sans">
              High-Performance <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#E8C97A] to-primary/70">
                Web Architecture
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Tagline & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-12 flex flex-col gap-4"
        >
          <p className="text-lg sm:text-2xl font-light text-[#DEDBC8] italic font-serif">
            Business growth starts with a better website.
          </p>
          <p className="text-sm sm:text-base text-white/60 leading-relaxed font-light">
            Saim Dev is a worldwide collective of web developers & strategists connected by a shared purpose — building custom websites that unlock <strong className="text-primary font-medium">measurable growth</strong> for every business we work with.
          </p>
          
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
            {["Next.js", "Node.js", "Vite", "React", "Tailwind"].map((tech) => (
              <span key={tech} className="px-3 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/40 border border-white/10 rounded-md bg-white/5">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <a 
            href="https://wa.me/34711244392" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-black bg-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#our-story" 
            className="inline-flex items-center justify-center px-8 py-4 font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </motion.div>

        {/* Floating Image (Replaces the split layout with a center floating mockup) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl mx-auto mt-20 relative perspective-[2000px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 h-full w-full" />
          <img 
            src="/hero-dev.webp" 
            alt="Saim Dev Portfolio" 
            className="w-full h-auto rounded-t-2xl sm:rounded-t-[2rem] border-t border-l border-r border-white/10 shadow-2xl relative z-0"
            style={{ transform: "rotateX(5deg) scale(0.98)" }}
          />
        </motion.div>

      </div>
    </section>
  );
};
