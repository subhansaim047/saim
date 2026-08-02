import React from "react";
import { motion } from "framer-motion";
import { ContactButton } from "./ContactButton";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Price", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "https://wa.me/12498984111" },
];

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen w-full bg-[#0C0C0C] relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-10 font-['Kanit']">
      
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex items-center justify-between z-30 pt-2 px-2 sm:px-4"
      >
        <div className="flex items-center gap-6 sm:gap-10 w-full justify-between">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm sm:text-base md:text-xl hover:opacity-70 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Main Hero Content */}
      <div className="relative z-20 my-auto flex flex-col items-center justify-center text-center py-6 sm:py-10">
        
        {/* ADDED BOLD HIGHLIGHTED LINE (CLEAN, PROFESSIONAL, ELEGANT) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 sm:mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.05] border border-[#BBCCD7]/30 backdrop-blur-md shadow-xl"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-pulse shadow-sm shadow-emerald-400/50" />
          <p className="text-white text-xs sm:text-sm md:text-base font-bold tracking-tight">
            Business growth starts with a <span className="text-[#BBCCD7] font-extrabold bg-[#BBCCD7]/15 px-2.5 py-0.5 rounded border border-[#BBCCD7]/30">better website</span>
          </p>
        </motion.div>

        {/* Massive Hero Heading */}
        <div className="overflow-hidden w-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] w-full"
          >
            Hi, i'm saim
          </motion.h1>
        </div>

      </div>

      {/* Floating Centered Hero Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none w-[260px] sm:w-[340px] md:w-[420px] lg:w-[500px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
          alt="Saim 3D Portrait"
          className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        />
      </motion.div>

      {/* Bottom Bar */}
      <div className="relative z-30 flex items-end justify-between w-full pb-4 sm:pb-8 pt-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[10px] sm:text-xs md:text-sm max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-left"
        >
          a 3d creator driven by crafting striking and unforgettable projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <ContactButton />
        </motion.div>
      </div>

    </section>
  );
};
