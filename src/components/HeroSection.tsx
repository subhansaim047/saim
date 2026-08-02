import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Calendar, Eye, ArrowUpRight, ChevronDown, Sparkles, ShieldCheck } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "AI Architecture", href: "#ai-services", isSpecial: true },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

const testimonials = [
  {
    quote: "Saim Dev delivered a custom web architecture that tripled our lead conversion rate within 30 days. Outstanding speed, aesthetic polish, and strategic vision.",
    author: "David K.",
    role: "Founder & CEO, Nexova Inc.",
  },
  {
    quote: "The cleanest UI/UX work we have ever commissioned. Our organic search traffic doubled and bounce rate dropped by 65% after relaunch.",
    author: "Elena R.",
    role: "VP of Product, Solar Digital",
  },
  {
    quote: "Exceptional craftsmanship. They turned our complex SaaS platform into a seamless, lightning-fast digital experience.",
    author: "Marcus Vance",
    role: "Managing Director, Vance Media",
  },
];

export const HeroSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="min-h-[100dvh] w-full p-3 sm:p-5 md:p-8 bg-black relative box-border overflow-hidden flex flex-col justify-between selection:bg-emerald-500 selection:text-black">
      <div className="relative flex-1 w-full rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#07090E] p-4 sm:p-8 md:p-12 lg:p-14 flex flex-col justify-between shadow-2xl">
        
        {/* Subtle Ambient Background Mesh */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

        {/* Top Navbar */}
        <header className="relative z-20 flex items-center justify-between gap-4 pb-6 sm:pb-10">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-[#E1E0CC] font-bold text-xl sm:text-2xl tracking-tighter font-sans">
              saim<span className="text-emerald-400 font-extrabold">dev</span>
              <sup className="text-[0.45em] text-white/50 ml-0.5">®</sup>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-black/80 backdrop-blur-xl px-4 py-2 rounded-full border border-white/15 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${
                  item.isSpecial
                    ? "text-emerald-400 font-semibold hover:bg-emerald-500/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.isSpecial && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3 h-3 opacity-60" />}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button / Status */}
          <a
            href="https://wa.me/12498984111"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:hidden text-[11px] font-mono font-medium text-black bg-primary px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </header>

        {/* Massive Hero Statement */}
        <div className="relative z-10 my-auto py-6 sm:py-10 flex flex-col gap-4">
          
          {/* Professional Clean Bold Highlighted Statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-[#E1E0CC]/30 backdrop-blur-md self-start shadow-xl"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse shadow-sm shadow-emerald-400/50" />
            <p className="text-white text-sm sm:text-base md:text-lg font-bold tracking-tight">
              Business growth starts with a <span className="text-[#E1E0CC] font-extrabold bg-[#E1E0CC]/15 px-2.5 py-0.5 rounded border border-[#E1E0CC]/30">better website</span>
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.2vw] font-black leading-[0.92] tracking-[-0.05em] uppercase text-white font-sans text-left"
          >
            Business Growth Starts <br />
            With a <span className="text-[#E1E0CC] underline decoration-emerald-500/60 decoration-wavy decoration-2">Better Website.</span>
          </motion.h1>
        </div>

        {/* Bottom Row Grid: Left Testimonial + Right High-Converting Action Box */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-6 border-t border-white/10">
          
          {/* Left Column: 5-Star Client Review Carousel Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                5.0 Verified ROI
              </span>
            </div>

            {/* Testimonial Quote */}
            <div className="min-h-[90px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed italic">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <p className="text-xs font-mono font-semibold text-[#E1E0CC] mt-2">
                    — {testimonials[activeTestimonial].author} <span className="text-white/40 font-normal">({testimonials[activeTestimonial].role})</span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Navigation Indicators */}
            <div className="flex items-center gap-2 pt-1">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx ? "w-8 bg-emerald-400" : "w-3 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: High-Converting Card & Dual CTA Buttons */}
          <div className="lg:col-span-7 bg-white/[0.03] backdrop-blur-2xl p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/15 space-y-5 shadow-2xl">
            <p className="text-white/70 text-xs sm:text-base leading-relaxed font-light">
              Generate more revenue for your business through ROI-focused web architecture, modern UI/UX design, and strategic digital growth. Our approach has helped <span className="text-[#E1E0CC] font-semibold">130+ businesses</span> unlock market authority.
            </p>

            {/* Dual CTA Button Stack */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary CTA */}
              <a
                href="https://wa.me/12498984111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#111622] hover:bg-[#182030] border border-white/20 hover:border-emerald-500/50 rounded-xl p-1.5 pl-5 flex items-center justify-between transition-all duration-300 group shadow-lg cursor-pointer"
              >
                <span className="text-white font-medium text-xs sm:text-sm tracking-wide">
                  Start growing online now
                </span>
                <div className="w-9 h-9 rounded-lg bg-emerald-500 text-black flex items-center justify-center transition-transform group-hover:scale-105">
                  <Calendar className="w-4 h-4" />
                </div>
              </a>

              {/* Secondary CTA */}
              <a
                href="#case-studies"
                className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl p-1.5 pl-5 flex items-center justify-between transition-all duration-300 group shadow-lg cursor-pointer font-semibold"
              >
                <span className="text-xs sm:text-sm tracking-wide">
                  View case studies
                </span>
                <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center transition-transform group-hover:scale-105">
                  <Eye className="w-4 h-4" />
                </div>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Custom Architecture
              </span>
              <span>⚡ Fast 14-Day Delivery</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
