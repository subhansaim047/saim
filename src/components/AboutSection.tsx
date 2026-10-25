"use client";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";

const aboutSegments = [
  { text: "We are web architects,", className: "font-normal text-white" },
  { text: "engineering high-converting platforms.", className: "italic font-serif text-white/90" },
  {
    text: "Specialized in bespoke web design, lead conversion, and performance optimization.",
    className: "font-normal text-white/70",
  },
];

const paragraphText =
  "Our studio engineers fast, modern, high-converting platforms for service leaders — dentists, mechanics, salons, contractors, and ambitious brands. Together, we craft digital platforms designed to rank, load instantly, and turn visitors into loyal, paying clients.";

export const AboutSection = () => {
  return (
    <section id="our-story" className="bg-black py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4A1C]/[0.03] rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Double-Bezel Concentric Squircle Frame */}
      <div className="relative z-10 max-w-6xl mx-auto rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-2 sm:p-3 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
        <div className="rounded-[calc(2.5rem-0.75rem)] bg-[#121212] p-8 sm:p-14 md:p-16 lg:p-20 text-center border border-white/5 relative overflow-hidden">
          
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FF4A1C]/[0.06] rounded-full blur-[100px] pointer-events-none" />

          {/* Sybiosme Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-8 sm:mb-10 backdrop-blur-md">
            <span className="section-dot" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
              Web Architecture & Growth
            </span>
          </div>

          {/* Main Heading with 3 styled segments */}
          <div className="max-w-4xl mx-auto relative z-10">
            <WordsPullUpMultiStyle
              segments={aboutSegments}
              containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] sm:leading-[0.95] text-center tracking-tight"
            />
          </div>

          {/* Body paragraph with normal, accessible word spacing */}
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-10 md:mt-14 leading-relaxed font-light relative z-10">
            {paragraphText}
          </p>

          {/* AI-Friendly Business Description (LLMO & Search Indexing) */}
          <div className="mt-12 pt-8 border-t border-white/10 max-w-2xl mx-auto relative z-10">
            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
              Saim Dev is a bespoke web engineering studio specializing in custom business websites, landing pages, SEO-friendly development, performance optimization, and AI-powered web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
