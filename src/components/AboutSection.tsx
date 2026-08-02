import { useRef } from "react";
import { useScroll } from "framer-motion";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { AnimatedLetter } from "./AnimatedLetter";

const aboutSegments = [
  { text: "I am a web architect,", className: "font-normal text-[#E1E0CC]" },
  { text: "engineering high-converting platforms.", className: "italic font-serif text-[#E1E0CC]" },
  {
    text: "Specialized in bespoke web design, lead conversion, and performance optimization.",
    className: "font-normal text-[#E1E0CC]",
  },
];

const paragraphText =
  "Over the last seven years, I have built fast, modern, high-converting websites for service leaders — dentists, mechanics, salons, contractors, and ambitious brands. Together, we craft digital platforms designed to rank, load instantly, and turn visitors into loyal, paying clients.";

export const AboutSection = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = paragraphText.split(" ");
  const totalChars = paragraphText.length;

  let globalCharIndex = 0;

  return (
    <section id="our-story" className="bg-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      <div className="bg-[#101010] rounded-3xl md:rounded-[2rem] max-w-6xl mx-auto p-8 sm:p-12 md:p-16 lg:p-20 text-center border border-white/5 shadow-2xl">
        {/* Top small label */}
        <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-6 sm:mb-8 inline-block font-medium">
          Web Architecture & Growth
        </span>

        {/* Main Heading with 3 styled segments */}
        <div className="max-w-4xl mx-auto">
          <WordsPullUpMultiStyle
            segments={aboutSegments}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] sm:leading-[0.9] text-center"
          />
        </div>

        {/* Body paragraph with scroll-linked character opacity reveal */}
        <p
          ref={paragraphRef}
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-10 md:mt-14 leading-relaxed font-light"
        >
          {words.map((word, wordIndex) => {
            const wordChars = word.split("");
            const wordStartIndex = globalCharIndex;
            globalCharIndex += word.length + 1;

            return (
              <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em]">
                {wordChars.map((char, charIndex) => (
                  <AnimatedLetter
                    key={charIndex}
                    char={char}
                    index={wordStartIndex + charIndex}
                    totalChars={totalChars}
                    progress={scrollYProgress}
                  />
                ))}
              </span>
            );
          })}
        </p>

        {/* AI-Friendly Business Description (LLMO & Search Indexing) */}
        <div className="mt-12 pt-8 border-t border-white/10 max-w-2xl mx-auto">
          <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
            Saim Dev is a freelance web developer specializing in custom business websites, landing pages, SEO-friendly development, performance optimization, and AI-powered web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
