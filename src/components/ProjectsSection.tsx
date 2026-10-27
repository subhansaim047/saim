"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';

const projectsList = [
  {
    num: "01",
    category: "Client",
    title: "Nextlevel Studio",
    img1: "/hero-shots/shot-1.webp",
    img2: "/hero-shots/shot-2.webp",
    img3: "/hero-shots/shot-3.webp"
  },
  {
    num: "02",
    category: "Personal",
    title: "Aura Brand Identity",
    img1: "/hero-shots/shot-4.webp",
    img2: "/hero-shots/shot-2.webp",
    img3: "/hero-shots/shot-3.webp"
  },
  {
    num: "03",
    category: "Client",
    title: "Solaris Digital",
    img1: "/hero-shots/shot-1.webp",
    img2: "/hero-shots/shot-2.webp",
    img3: "/hero-shots/shot-3.webp"
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-black rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-14 relative z-30 px-4 sm:px-8 md:px-12 py-20 sm:py-28 font-['Kanit']">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="hero-heading font-black uppercase tracking-tight text-5xl sm:text-7xl md:text-8xl text-center"
        >
          Project
        </motion.h2>

        {/* Project Cards Stack */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-10 flex flex-col gap-8 shadow-2xl"
            >
              {/* Top Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#D7E2EA]/20">
                <div className="flex items-center gap-4">
                  <span className="font-black text-4xl sm:text-6xl text-[#D7E2EA]">
                    {project.num}
                  </span>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-medium uppercase text-[#D7E2EA]">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <LiveProjectButton />
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-5 flex flex-col gap-4">
                  <div className="h-[180px] sm:h-[220px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/10">
                    <img src={project.img1} alt={`${project.title} Web Architecture Showcase`} width={600} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[220px] sm:h-[280px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/10">
                    <img src={project.img2} alt={`${project.title} Responsive Mobile Interface`} width={600} height={400} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:col-span-7 h-[300px] sm:h-[516px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/10">
                  <img src={project.img3} alt={`${project.title} High-Performance Next.js Application`} width={1000} height={700} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
