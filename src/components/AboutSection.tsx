"use client";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";

const aboutSegments = [
  { text: "We are digital product architects,", className: "font-normal text-[#111115]" },
  { text: "engineering bespoke websites & web apps.", className: "italic font-serif text-[#111115]/90" },
  {
    text: "Specialized in custom software, e-commerce, headless CMS, and sub-second performance.",
    className: "font-normal text-black/55",
  },
];

const paragraphText =
  "Our studio engineers bespoke digital flagships and full-stack web software for ambitious companies — from e-commerce brands and SaaS startups to professional services and enterprise teams. We combine modern Next.js and TypeScript engineering with conversion-focused design to build platforms that rank, load in milliseconds, and turn visitors into paying clients.";

export const AboutSection = () => {
  return (
    <section id="our-story" className="bg-white py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-8 relative overflow-hidden border-t border-black/[0.06]">
      {/* Double-Bezel Concentric Squircle Frame */}
      <div className="relative z-10 max-w-6xl mx-auto rounded-[2.5rem] bg-[#F4F4F6] border border-black/[0.08] p-2 sm:p-3 shadow-[0_24px_60px_-30px_rgba(17,17,21,0.12)]">
        <div className="rounded-[calc(2.5rem-0.75rem)] bg-white p-8 sm:p-14 md:p-16 lg:p-20 text-center border border-black/[0.06] relative overflow-hidden">
          {/* Sybiosme Eyebrow Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.03] border border-black/[0.08] mb-8 sm:mb-10">
            <span className="section-dot" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-black/75">
              UK Registered Agency • Based in Pakistan
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
          <p className="text-black/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-10 md:mt-14 leading-relaxed font-light relative z-10" data-gsap-reveal>
            {paragraphText}
          </p>

          {/* Studio proof metrics */}
          <dl data-gsap-stagger className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto relative z-10">
            {[
              { k: "Sub-second", v: "Load speed" },
              { k: "100%", v: "Code ownership" },
              { k: "£0", v: "Forced retainers" },
            ].map((m) => (
              <div key={m.v} className="rounded-2xl bg-[#FAFAFA] border border-black/[0.08] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <dt className="sr-only">{m.v}</dt>
                <dd className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111115] font-mono-tech">{m.k}</dd>
                <p aria-hidden="true" className="mt-1 text-[10px] font-mono-tech uppercase tracking-[0.2em] text-black/50">{m.v}</p>
              </div>
            ))}
          </dl>

          {/* AI-Friendly Business Description (LLMO & Search Indexing) */}
          <div className="mt-12 pt-8 border-t border-black/[0.08] max-w-2xl mx-auto relative z-10">
            <p className="text-black/65 text-xs sm:text-sm font-light leading-relaxed">
              Saim Dev is a specialized web engineering agency registered in the United Kingdom and based in Pakistan. We engineer bespoke business websites, custom Next.js headless eCommerce stores, pixel-perfect website clones ($1,900 flat), and high-converting landing pages. We build with a strict 100% risk-free $0 upfront model: we build the live prototype first, you inspect it, and pay only if completely satisfied. Zero monthly fees, zero WordPress bloat, and 100% source code ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
