import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-6 sm:px-12 md:px-20 py-20 sm:py-28 font-['Kanit'] relative z-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl text-center mb-12 sm:mb-20 text-[#0C0C0C]"
        >
          Services
        </motion.h2>

        <div className="flex flex-col border-t border-[#0C0C0C]/15">
          {servicesList.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 border-b border-[#0C0C0C]/15 gap-4 md:gap-10"
            >
              <span className="font-black text-5xl sm:text-7xl md:text-8xl text-[#0C0C0C] tracking-tight shrink-0">
                {item.num}
              </span>
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="font-medium uppercase text-xl sm:text-2xl md:text-3xl text-[#0C0C0C]">
                  {item.name}
                </h3>
                <p className="font-light text-sm sm:text-base md:text-lg text-[#0C0C0C]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
