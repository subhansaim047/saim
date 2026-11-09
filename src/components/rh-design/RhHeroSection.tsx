"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const RhHeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#f4f5f6] text-[#09090b] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Top Eyebrow - rh.design exact wording */}
        <div className="text-xs sm:text-sm font-medium text-gray-500 mb-6 tracking-tight">
          No account managers. No juniors. Just senior engineers who ship.
        </div>

        {/* Display H1 Headline with Inline App Preview Capsule */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight text-[#09090b] leading-[1.08] mb-10 max-w-5xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          We engineer products that grow revenue for ambitious{" "}
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#09090b] border border-black/15 align-middle mx-1 shadow-md translate-y-[-2px]">
            <span className="w-5 h-5 rounded-full bg-[#b5f900] flex items-center justify-center text-[10px] text-black font-extrabold font-mono">
              ⚡
            </span>
            <span className="text-xs sm:text-sm font-mono text-white font-medium pr-1">
              Next.js 16
            </span>
          </span>{" "}
          businesses
        </h1>

        {/* Action Row: Black Pill Button + 5/5 Rating Proof */}
        <div className="flex flex-wrap items-center gap-6 mb-16 sm:mb-20">
          <Link
            href="#case-studies"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#09090b] hover:bg-black text-white text-sm font-medium tracking-tight transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Show recent work</span>
          </Link>

          {/* Contra / Verified Rating */}
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/80 border border-black/5 shadow-2xs">
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
              C
            </div>
            <div className="flex flex-col">
              <div className="flex text-[#ff4a1c] text-xs">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xs">★</span>
                ))}
              </div>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider font-semibold">
                5/5 RATING • VERIFIED CLIENTS
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-gray-500 pl-2">
            <span className="w-2 h-2 rounded-full bg-[#b5f900]" />
            <span>London UK Registered • $0 Upfront Sprint</span>
          </div>
        </div>

        {/* Dual Hero Bento Showcase Cards - rh.design exact layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Web Dashboard Inspection (HQ Leathercon Storefront) */}
          <div className="rounded-3xl bg-gradient-to-br from-[#e5e7eb] to-[#d1d5db] p-6 sm:p-8 border border-black/5 flex flex-col justify-between overflow-hidden shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-mono text-[#09090b] font-medium shadow-2xs">
                Next.js 16 Storefront
              </span>
              <span className="text-xs font-mono text-gray-600 font-semibold">
                0% Shopify Fees • 0.3s Speed
              </span>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-lg border border-black/10">
              <Image
                src="/hero-shots/shot-4.webp"
                alt="HQ Leathercon Luxury Storefront Showcase"
                width={600}
                height={375}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <h4 className="font-semibold text-sm">HQ Leathercon Luxury Goods</h4>
                  <p className="text-[11px] text-white/80 font-light">Sub-second dynamic catalog with zero lock-in</p>
                </div>
                <Link
                  href="/hq-leathercon/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-white text-black text-xs font-semibold hover:bg-[#b5f900] transition-colors"
                >
                  Live Demo ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Mobile Device Mockup (HotBite Takeaway Engine) */}
          <div className="rounded-3xl bg-[#09090b] p-6 sm:p-8 border border-white/10 flex flex-col justify-between overflow-hidden shadow-sm group hover:shadow-md transition-shadow text-white">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-mono text-white font-medium">
                Hospitality Platform
              </span>
              <span className="text-xs font-mono text-[#b5f900] font-semibold">
                Natasha's Law Compliant
              </span>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#18181b] shadow-lg border border-white/10">
              <Image
                src="/hero-shots/shot-1.webp"
                alt="HotBite Takeaway Online Ordering System"
                width={600}
                height={375}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <h4 className="font-semibold text-sm">HotBite Takeaway Engine</h4>
                  <p className="text-[11px] text-white/70 font-light">Direct WhatsApp kitchen dispatch with 0% commission</p>
                </div>
                <Link
                  href="/hotbite/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-[#b5f900] text-black text-xs font-semibold hover:bg-white transition-colors"
                >
                  Live Demo ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
