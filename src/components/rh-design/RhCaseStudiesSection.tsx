"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    tech: ["Next.js 16", "Tailwind CSS", "TypeScript", "0% Fees"],
    metrics: "0% Shopify Fees • 0.3s Speed",
    previewImage: "/hero-shots/shot-4.webp",
    demoUrl: "/hq-leathercon/index.html"
  },
  {
    id: "hotbite",
    title: "HotBite Gourmet Street Food & Takeaway",
    category: "Food & Restaurant Engine",
    description: "Commission-free direct web ordering engine featuring Natasha's Law interactive 14-allergen filter matrix and instant WhatsApp kitchen dispatch.",
    tech: ["Next.js 16", "WhatsApp API", "Natasha's Law"],
    metrics: "0% Commission • £250 Fixed",
    previewImage: "/hero-shots/shot-1.webp",
    demoUrl: "/hotbite/index.html"
  },
  {
    id: "valeria",
    title: "Valèria Luxury Beauty Studio & Salon",
    category: "Salon & Aesthetics Platform",
    description: "Pixel-perfect luxury beauty salon showcase with silky 60fps micro-interactions, full service drawer, and high-conversion client booking.",
    tech: ["Next.js 16", "Framer Engine", "Tailwind CSS"],
    metrics: "Sub-400ms Speed • 100/100 CWV",
    previewImage: "/hero-shots/shot-3.webp",
    demoUrl: "/demos/valeria/index.html"
  },
  {
    id: "architecture",
    title: "Architecture & Interior Design Studio",
    category: "Portfolio & Studio Showcase",
    description: "15-page architectural firm showcase engineered with minimalist typographic rhythm, edge-to-edge project inspections, and fluid responsive states.",
    tech: ["Next.js 16", "Tailwind CSS", "TypeScript"],
    metrics: "Retina Assets • Zero Lag",
    previewImage: "/hero-shots/shot-2.webp",
    demoUrl: "/demos/architecture/index.html"
  },
  {
    id: "medspa",
    title: "Valèria MedSpa & Wellness Clinic",
    category: "Medical Aesthetics Practice",
    description: "High-ticket medical spa presence with interactive consultation booking, VIP membership funnels, and dynamic clinical treatment catalog.",
    tech: ["Next.js 16", "Stripe Ready", "Booking Engine"],
    metrics: "VIP Funnel • Sub-400ms",
    previewImage: "/hero-shots/shot-4.webp",
    demoUrl: "/demos/medspa/index.html"
  },
  {
    id: "akdetailing",
    title: "DetailX Automotive Detailing Studio",
    category: "Automotive & Detailing",
    description: "High-end auto salon showcase with interactive package booking, multi-step ceramic coating selector, and instant mobile appointment requests.",
    tech: ["Next.js 16", "Tailwind CSS", "Interactive Packages"],
    metrics: "Instant Booking • 100% Mobile",
    previewImage: "/hero-shots/shot-1.webp",
    demoUrl: "/demos/akdetailing/index.html"
  }
];

export const RhCaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-[#050505] text-[#fafafa] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header - rh.design exact dark section transition */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#b5f900] mb-3 font-semibold">
              C A S E &nbsp; S T U D I E S
            </div>
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.12]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Our success stories
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors group"
          >
            <span>See all 15+ live demos</span>
            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#b5f900] group-hover:text-black transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>

        {/* 3x2 Grid of Flagship Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="group rounded-3xl bg-[#0f0f12] border border-white/10 hover:border-[#b5f900]/40 overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              {/* Media Preview Box */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#18181b]">
                <Image
                  src={proj.previewImage}
                  alt={proj.title}
                  width={480}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white uppercase tracking-wider">
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
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#b5f900] transition-colors tracking-tight">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2 font-light">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-white/10 hover:bg-[#b5f900] hover:text-black text-white text-xs font-semibold transition-all group/btn border border-white/10 hover:border-transparent"
                  >
                    <span>Launch Live Interactive Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
