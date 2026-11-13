"use client";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";

const aboutSegments = [
  { text: "We are digital product architects,", className: "font-heading font-extrabold text-[#020612]" },
  { text: "engineering bespoke websites & web apps.", className: "font-heading italic font-extrabold text-[#2F6CE1]" },
  {
    text: "Specialized in custom software, e-commerce, headless CMS, and sub-second performance.",
    className: "font-heading font-bold text-[#020612]/60",
  },
];

const paragraphText =
  "Our studio engineers bespoke digital flagships and full-stack web software for ambitious companies — from e-commerce brands and SaaS startups to professional services and enterprise teams. We combine modern Next.js and TypeScript engineering with conversion-focused design to build platforms that rank, load in milliseconds, and turn visitors into paying clients.";

export const AboutSection = () => {
  return (
    <section id="our-story" className="bg-white py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-8 relative overflow-hidden border-t border-[#020612]/[0.07]">
      {/* Double-Bezel Concentric Squircle Frame */}
      <div className="relative z-10 max-w-6xl mx-auto rounded-[2.5rem] bg-[#F4F7FC] border border-[#020612]/[0.08] p-2 sm:p-3 shadow-[0_24px_60px_-30px_rgba(2,6,18,0.12)]">
        <div className="rounded-[calc(2.5rem-0.75rem)] bg-white p-8 sm:p-14 md:p-16 lg:p-20 text-center border border-[#020612]/[0.06] relative overflow-hidden">
          {/* Eyebrow Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF5FF] border border-[#2F6CE1]/20 mb-8 sm:mb-10">
            <span className="section-dot" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#020612]">
              UK Registered Agency • Based in Pakistan
            </span>
          </div>

          {/* Main Heading with 3 bold segments */}
          <div className="max-w-4xl mx-auto relative z-10">
            <WordsPullUpMultiStyle
              segments={aboutSegments}
              containerClassName="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.02] sm:leading-[0.96] text-center tracking-tight"
            />
          </div>

          {/* Body paragraph with crisp readability */}
          <p className="text-[#020612]/75 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-10 md:mt-14 leading-relaxed font-normal relative z-10" data-gsap-reveal>
            {paragraphText}
          </p>

          {/* Studio proof metrics */}
          <dl data-gsap-stagger className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto relative z-10">
            {[
              { k: "Sub-second", v: "Load speed" },
              { k: "100%", v: "Code ownership" },
              { k: "£0", v: "Forced retainers" },
            ].map((m) => (
              <div key={m.v} className="rounded-2xl bg-[#F8FAFC] border border-[#020612]/[0.08] hover:border-[#2F6CE1]/35 transition-colors px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
                <dt className="sr-only">{m.v}</dt>
                <dd className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[#020612]">{m.k}</dd>
                <p aria-hidden="true" className="mt-1 text-[10px] font-mono-tech font-semibold uppercase tracking-[0.2em] text-[#2F6CE1]">{m.v}</p>
              </div>
            ))}
          </dl>

          {/* AI-Friendly Business Description (LLMO & Search Indexing) */}
          <div className="mt-12 pt-8 border-t border-[#020612]/[0.08] max-w-2xl mx-auto relative z-10">
            <p className="text-[#020612]/65 text-xs sm:text-sm font-normal leading-relaxed">
              Saim Dev is a specialized web engineering agency registered in the United Kingdom and based in Pakistan. We engineer bespoke business websites, custom Next.js headless eCommerce stores, pixel-perfect website clones ($1,900 flat), and high-converting landing pages. We build with a strict 100% risk-free $0 upfront model: we build the live prototype first, you inspect it, and pay only if completely satisfied. Zero monthly fees, zero WordPress bloat, and 100% source code ownership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
