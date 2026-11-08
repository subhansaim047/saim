"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: string;
  previewImage: string;
  demoUrl: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "hq-leathercon",
    title: "HQ Leathercon Luxury Storefront",
    category: "1:1 E-Commerce Clone",
    description: "Multi-thousand product luxury leather storefront reconstructed into a sub-second Next.js architecture with instant faceted search and cart drawer.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript", "Dynamic Filters"],
    metrics: "100% 1:1 Match • Sub-second",
    previewImage: "/hero-shots/shot-4.webp",
    demoUrl: "/hq-leathercon/index.html"
  },
  {
    id: "hotbite",
    title: "HotBite Gourmet Street Food & Takeaway",
    category: "Food & Restaurant System",
    description: "Commission-free direct web ordering engine featuring Natasha's Law interactive 14-allergen filter matrix and instant WhatsApp kitchen dispatch.",
    tech: ["Next.js 15", "Tailwind CSS", "WhatsApp API", "Natasha's Law"],
    metrics: "0% Commission • £250 Fixed",
    previewImage: "/hero-shots/shot-1.webp",
    demoUrl: "/hotbite/index.html"
  },
  {
    id: "valeria",
    title: "Valèria Luxury Beauty Studio & Salon",
    category: "Salon & Wellness Platform",
    description: "Pixel-perfect luxury beauty salon showcase with silky 60fps micro-interactions, full service drawer, and high-conversion client booking.",
    tech: ["Next.js 15", "Framer Engine", "Tailwind CSS"],
    metrics: "Sub-400ms Speed • 100/100 CWV",
    previewImage: "/hero-shots/shot-3.webp",
    demoUrl: "/demos/valeria/index.html"
  },
  {
    id: "architecture",
    title: "Architecture & Interior Design Studio",
    category: "Portfolio & Studio Showcase",
    description: "15-page architectural firm showcase engineered with minimalist typographic rhythm, edge-to-edge project inspections, and fluid responsive states.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    metrics: "Retina Assets • Zero Lag",
    previewImage: "/hero-shots/shot-2.webp",
    demoUrl: "/demos/architecture/index.html"
  }
];

export const RhCaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 sm:py-28 border-t border-[#2c2c2c] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
              CASE STUDIES
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Our success stories &amp;{" "}
              <span className="text-[#a1a1a1]">live deployments.</span>
            </h2>
          </div>

          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#b5f900] hover:text-white transition-colors"
          >
            <span>All 15 Interactive Live Demos</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2x2 Grid of Large Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#3a3a3a] overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-2xl"
            >
              {/* Media Preview Box */}
              <a
                href={proj.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden bg-[#1c1c1c]"
              >
                <img
                  src={proj.previewImage}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />

                {/* Floating Metric Pill */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#3a3a3a] text-[10px] font-mono uppercase tracking-wider text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b5f900]" />
                  <span>{proj.metrics}</span>
                </div>

                {/* Live Preview Button Indicator */}
                <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-black font-semibold text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl group-hover:scale-105">
                  <span>Open Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#b5f900] mb-2">
                    {proj.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-3 group-hover:text-[#b5f900] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a1a1a1] font-light leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242424] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-[#cbcbcb] bg-[#1e1e1e] border border-[#2c2c2c] px-2.5 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-white group-hover:text-[#b5f900] inline-flex items-center gap-1 transition-colors shrink-0 ml-2"
                  >
                    <span>View Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};