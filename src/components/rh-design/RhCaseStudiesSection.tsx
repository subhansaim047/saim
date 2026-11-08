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
    metrics: "0% Shopify Fees • 0.3s Speed",
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
    category: "Salon & Aesthetics Platform",
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
  },
  {
    id: "medspa",
    title: "Valèria MedSpa & Wellness Clinic",
    category: "Medical Aesthetics Practice",
    description: "High-ticket medical spa presence with interactive consultation booking, VIP membership funnels, and dynamic clinical treatment catalog.",
    tech: ["Next.js 15", "Stripe Ready", "Booking Engine"],
    metrics: "VIP Funnel • Sub-400ms",
    previewImage: "/hero-shots/shot-4.webp",
    demoUrl: "/demos/medspa/index.html"
  },
  {
    id: "barbershop",
    title: "Gentleman's Executive Grooming Studio",
    category: "Hospitality & Grooming",
    description: "Ultra-stylish modern barbershop platform with interactive service booking, master stylist profiles, and instant mobile appointment requests.",
    tech: ["Next.js 15", "Tailwind CSS", "Local SEO"],
    metrics: "Instant Booking • 100% Mobile",
    previewImage: "/hero-shots/shot-1.webp",
    demoUrl: "/demos/barbershop/index.html"
  }
];

export const RhCaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 sm:py-28 border-t border-[#242424] bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b5f900] mb-3">
              LIVE PORTFOLIO
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Our flagship live demos &amp; <br />
              <span className="text-[#a1a1a1]">production deployments.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#2c2c2c] text-xs font-mono text-[#b5f900]">
            <span className="w-2 h-2 rounded-full bg-[#b5f900] animate-pulse" />
            <span>15+ Live Working Demos Available</span>
          </div>
        </div>

        {/* 3x2 Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1c1c1c]">
                <img
                  src={proj.previewImage}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#b5f900] text-black text-[10px] font-mono font-bold">
                    {proj.metrics}
                  </span>
                </div>
              </div>

              {/* Info Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#b5f900] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#a1a1a1] leading-relaxed mb-4 line-clamp-2 font-light">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-[#1f1f1f] text-[10px] font-mono text-[#cbcbcb]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#222]">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#1c1c1c] hover:bg-[#b5f900] hover:text-black text-white text-xs font-semibold transition-all group/btn"
                  >
                    <span>Launch Live Interactive Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
