import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "./WordsPullUp";

const navItems = [
  { label: "Our story", href: "#our-story" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#technologies" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Demo Sites", href: "#demos" },
  { label: "Blogs", href: "#blogs" },
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
      <div className="relative h-full w-full rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video (Centering the person sitting on the hill directly in the middle on mobile) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[45%_30%] sm:object-center"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.6] mix-blend-overlay pointer-events-none" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 pointer-events-none" />

        {/* Responsive Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex justify-center px-1 sm:px-4">
          {/* Mobile Multi-Row Wrap Layout */}
          <div className="flex sm:hidden flex-wrap items-center justify-center gap-1.5 p-2 bg-black/95 backdrop-blur-md rounded-b-xl border-x border-b border-white/15 max-w-full">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold tracking-tight text-[#E1E0CC] bg-white/10 border border-white/15 px-2 py-0.5 rounded-md hover:bg-primary hover:text-black transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Single Row Layout */}
          <div className="hidden sm:flex bg-black/90 backdrop-blur-md rounded-b-3xl px-6 py-2.5 items-center justify-center gap-5 border-x border-b border-white/10">
            {navItems.map((item, index) => (
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
            ))}
          </div>
        </nav>

        {/* Hero Content (Bottom-aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10 lg:p-12 z-10 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-end">
            {/* Left 8 columns: Bold "WEB ARCHITECT" & Giant Bold Heading */}
            <div className="lg:col-span-8 flex flex-col justify-end">
              {/* ── Hero Label Group ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-1.5 mb-3 sm:mb-4 self-start"
              >

                {/* Row 1: accent bar + FULL STACK DEV */}
                <div className="flex items-center gap-2.5">
                  <span
                    className="block flex-shrink-0 rounded-full bg-primary"
                    style={{ width: '3px', height: 'clamp(14px, 1.6vw, 22px)', opacity: 0.85 }}
                  />
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(13px, 1.35vw, 19px)',
                      fontWeight: 800,
                      letterSpacing: '0.22em',
                      color: '#DEDBC8',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                    }}
                  >
                    Full Stack Dev
                  </span>
                </div>

                {/* Row 2: tech stack — muted, tight spacing */}
                <div className="flex items-center gap-0 pl-[1.4rem]">
                  {['Next.js', 'Node.js', 'Vite', 'React', 'Tailwind'].map((tech, i, arr) => (
                    <span key={tech} className="flex items-center">
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 'clamp(9px, 0.85vw, 12px)',
                          fontWeight: 500,
                          letterSpacing: '0.13em',
                          color: 'rgba(222,219,200,0.45)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {tech}
                      </span>
                      {i < arr.length - 1 && (
                        <span style={{ color: 'rgba(222,219,200,0.25)', margin: '0 6px', fontSize: '9px' }}>▪</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Thin separator */}
                <div
                  className="pl-[1.4rem] mt-0.5"
                >
                  <div
                    style={{ width: 'clamp(80px, 8vw, 130px)', height: '1px', background: 'linear-gradient(to right, rgba(222,219,200,0.3), transparent)' }}
                  />
                </div>

                {/* Row 3: Business growth quote — elegant italic */}
                <div className="pl-[1.4rem]">
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: 'clamp(12px, 1.05vw, 16px)',
                      fontWeight: 700,
                      fontStyle: 'italic',
                      color: '#DEDBC8',
                      letterSpacing: '0.01em',
                      lineHeight: 1.4,
                    }}
                  >
                    Business growth starts with a{' '}
                    <span
                      style={{
                        color: '#DEDBC8',
                        fontWeight: 400,
                        borderBottom: '1.5px solid rgba(222,219,200,0.55)',
                        paddingBottom: '1px',
                      }}
                    >
                      better website
                    </span>
                    .
                  </span>
                </div>

              </motion.div>

              <WordsPullUp
                text="Saim Dev"
                showAsterisk={true}
                className="text-[16vw] sm:text-[15vw] md:text-[14vw] lg:text-[13vw] xl:text-[12vw] 2xl:text-[13vw] font-bold leading-[0.85] tracking-[-0.07em] drop-shadow-2xl"
                style={{ color: "#E1E0CC" }}
              />
            </div>

            {/* Right 4 columns: Sub-headline + Description + CTA Button */}
            <div className="lg:col-span-4 flex flex-col justify-end gap-3 sm:gap-5 pb-1 lg:pb-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-l-2 border-primary pl-3.5"
              >
                <h3 className="text-white text-xs sm:text-base font-medium tracking-tight">
                  High-Performance Web Architecture
                </h3>
                <p className="text-white/60 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-0.5">
                  Strategic Design & Digital Growth
                </p>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/90 text-[11px] sm:text-sm leading-relaxed font-light line-clamp-3 sm:line-clamp-none"
              >
                Saim Dev is a worldwide collective of web developers & strategists connected by a shared purpose — building custom websites that unlock{" "}
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
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-primary rounded-full pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 flex items-center gap-3 hover:gap-4 transition-all duration-300 group cursor-pointer self-start shadow-xl mt-1 sm:mt-0"
              >
                <span className="text-black font-semibold text-xs sm:text-sm tracking-wide">
                  Start Your Project
                </span>
                <div className="bg-black rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E1E0CC]" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
