"use client";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";

const aboutSegments = [
  { text: "We are digital product architects,", className: "font-normal text-white" },
  { text: "engineering bespoke websites & web apps.", className: "italic font-serif text-white/90" },
  {
    text: "Specialized in custom software, e-commerce, headless CMS, and sub-second performance.",
    className: "font-normal text-white/70",
  },
];

const paragraphText =
  "Our studio engineers bespoke digital flagships and full-stack web software for ambitious companies — from e-commerce brands and SaaS startups to professional services and enterprise teams. We combine modern Next.js and TypeScript engineering with conversion-focused design to build platforms that rank, load in milliseconds, and turn visitors into paying clients.";

export const AboutSection = () => {
  return (
    <section id="our-story" className="bg-transparent py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-8 relative overflow-hidden">
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
            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
              Saim Dev is an independent UK full-stack digital engineering studio building bespoke business websites, Shopify & WooCommerce stores, custom Next.js SaaS web applications, and headless CMS platforms. We provide guaranteed sub-second performance, 100% source code ownership, built-in structured schema, and direct senior engineer collaboration with zero agency markups or mandatory monthly retainers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
