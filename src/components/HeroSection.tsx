import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "./WordsPullUp";

const navItems = [
  { label: "Our story", href: "#our-story" },
  { label: "Services", href: "/services" },
  { label: "Tech Stack", href: "/technologies" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Demo Sites", href: "/demos" },
  { label: "Blogs", href: "/blogs" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const HeroSection = () => {
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);

  return (
    <section className="h-[100dvh] w-full p-2 sm:p-4 md:p-6 bg-black relative box-border overflow-hidden">
      <div className="relative h-full w-full rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#080808]">

        {/* Subtle grain texture overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.35] mix-blend-overlay pointer-events-none z-0" />

        {/* Responsive Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex justify-center px-1 sm:px-4">
          {/* Mobile Multi-Row Wrap Layout */}
          <div className="flex sm:hidden flex-wrap items-center justify-center gap-1.5 p-2 bg-black/95 backdrop-blur-md rounded-b-xl border-x border-b border-white/15 max-w-full">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[10px] font-bold tracking-tight text-[#E1E0CC] bg-white/10 border border-white/15 px-2 py-0.5 rounded-md hover:bg-primary hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[10px] font-bold tracking-tight text-[#E1E0CC] bg-white/10 border border-white/15 px-2 py-0.5 rounded-md hover:bg-primary hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Desktop Single Row Layout */}
          <div className="hidden sm:flex bg-black/90 backdrop-blur-md rounded-b-3xl px-6 py-2.5 items-center justify-center gap-5 border-x border-b border-white/10">
            {navItems.map((item, index) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onMouseEnter={() => setHoveredNav(index)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className="text-xs md:text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  style={{
                    color: hoveredNav === index ? "#E1E0CC" : "rgba(225, 224, 204, 0.8)",
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(index)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className="text-xs md:text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap cursor-pointer"
                  style={{
                    color: hoveredNav === index ? "#E1E0CC" : "rgba(225, 224, 204, 0.8)",
                  }}
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </nav>

        {/* HERO BODY: Two-column split layout */}
        <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-8 md:px-10 lg:px-12 pt-20 pb-6 gap-6 lg:gap-10">

          {/* LEFT COLUMN: All text content */}
          <div className="flex flex-col justify-center gap-4 sm:gap-6 w-full lg:w-[50%] xl:w-[48%] flex-shrink-0">

            {/* Hero Label Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-1.5 self-start"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="block flex-shrink-0 rounded-full bg-primary"
                  style={{ width: "3px", height: "clamp(14px, 1.6vw, 22px)", opacity: 0.85 }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(13px, 1.35vw, 19px)",
                    fontWeight: 800,
                    letterSpacing: "0.22em",
                    color: "#DEDBC8",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  Full Stack Dev
                </span>
              </div>

              <div className="flex items-center gap-0 pl-[1.4rem]">
                {["Next.js", "Node.js", "Vite", "React", "Tailwind"].map((tech, i, arr) => (
                  <span key={tech} className="flex items-center">
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(9px, 0.85vw, 12px)",
                        fontWeight: 500,
                        letterSpacing: "0.13em",
                        color: "rgba(222,219,200,0.45)",
                        textTransform: "uppercase",
                      }}
                    >
                      {tech}
                    </span>
                    {i < arr.length - 1 && (
                      <span style={{ color: "rgba(222,219,200,0.25)", margin: "0 6px", fontSize: "9px" }}>
                        ▪
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <div className="pl-[1.4rem] mt-0.5">
                <div
                  style={{
                    width: "clamp(80px, 8vw, 130px)",
                    height: "1px",
                    background: "linear-gradient(to right, rgba(222,219,200,0.3), transparent)",
                  }}
                />
              </div>

              <div className="pl-[1.4rem]">
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(12px, 1.05vw, 16px)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "#DEDBC8",
                    letterSpacing: "0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  Business growth starts with a{" "}
                  <span
                    style={{
                      color: "#DEDBC8",
                      fontWeight: 400,
                      borderBottom: "1.5px solid rgba(222,219,200,0.55)",
                      paddingBottom: "1px",
                    }}
                  >
                    better website
                  </span>
                  .
                </span>
              </div>
            </motion.div>

            {/* Giant Name Heading */}
            <WordsPullUp
              text="Saim Dev"
              showAsterisk={true}
              className="text-[16vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw] xl:text-[8.5vw] font-bold leading-[0.85] tracking-[-0.07em] drop-shadow-2xl"
              style={{ color: "#E1E0CC" }}
            />

            {/* Sub-headline + Description + CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <div className="border-l-2 border-primary pl-3.5">
                <h3 className="text-white text-xs sm:text-base font-medium tracking-tight">
                  High-Performance Web Architecture
                </h3>
                <p className="text-white/60 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-0.5">
                  Strategic Design &amp; Digital Growth
                </p>
              </div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/90 text-[11px] sm:text-sm leading-relaxed font-light max-w-md"
              >
                Saim Dev is a worldwide collective of web developers &amp; strategists connected by a
                shared purpose — building custom websites that unlock{" "}
                <span className="text-[#E1E0CC] font-normal border-b border-primary/50">
                  measurable growth
                </span>{" "}
                for every business we work with.
              </motion.p>

              <motion.a
                href="https://wa.me/12498984111"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-primary rounded-full pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 flex items-center gap-3 hover:gap-4 transition-all duration-300 group cursor-pointer self-start shadow-xl"
              >
                <span className="text-black font-semibold text-xs sm:text-sm tracking-wide">
                  Start Your Project
                </span>
                <div className="bg-black rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E1E0CC]" />
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Developer Portfolio Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-end justify-center w-full lg:w-[50%] xl:w-[52%] h-full max-h-[75vh] flex-shrink-0"
          >
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080808] via-[#080808]/60 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#080808] via-[#080808]/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#080808] via-[#080808]/60 to-transparent z-10 pointer-events-none" />
              <img
                src="/hero-dev.png"
                alt="Saim Dev — Full Stack Developer Portfolio Preview"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


