import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0C0C0C] relative flex flex-col items-center justify-center text-center px-6 py-24 sm:py-32 font-['Kanit'] overflow-hidden">
      
      {/* Decorative 3D Images */}
      <motion.img
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1 }}
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
        alt="Moon 3D Icon"
        className="absolute top-[5%] left-[2%] sm:left-[4%] w-[110px] sm:w-[160px] md:w-[210px] pointer-events-none drop-shadow-2xl"
      />

      <motion.img
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25 }}
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
        alt="3D Sphere Object"
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] w-[90px] sm:w-[140px] md:w-[180px] pointer-events-none drop-shadow-2xl"
      />

      <motion.img
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.15 }}
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
        alt="Lego 3D Icon"
        className="absolute top-[5%] right-[2%] sm:right-[4%] w-[110px] sm:w-[160px] md:w-[210px] pointer-events-none drop-shadow-2xl"
      />

      <motion.img
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
        alt="3D Group Icon"
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] w-[120px] sm:w-[170px] md:w-[220px] pointer-events-none drop-shadow-2xl"
      />

      {/* Main Content */}
      <div className="max-w-2xl mx-auto z-10 flex flex-col items-center gap-8 sm:gap-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hero-heading font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl leading-none"
        >
          About me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#D7E2EA] font-medium text-base sm:text-xl md:text-2xl leading-relaxed max-w-xl text-center"
        >
          With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <ContactButton />
        </motion.div>
      </div>

    </section>
  );
};
