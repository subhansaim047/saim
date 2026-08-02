import React from 'react';
import { motion } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';

const projectsList = [
  {
    num: "01",
    category: "Client",
    title: "Nextlevel Studio",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    num: "02",
    category: "Personal",
    title: "Aura Brand Identity",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    num: "03",
    category: "Client",
    title: "Solaris Digital",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-14 relative z-30 px-4 sm:px-8 md:px-12 py-20 sm:py-28 font-['Kanit']">
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
                    <img src={project.img1} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[220px] sm:h-[280px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/10">
                    <img src={project.img2} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="md:col-span-7 h-[300px] sm:h-[516px] rounded-[24px] sm:rounded-[36px] overflow-hidden border border-white/10">
                  <img src={project.img3} alt={project.title} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
