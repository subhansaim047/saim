"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, MapPin, Code2, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const RhAboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white text-[#09090b] border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header - rh.design exact founder signature rhythm */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-gray-500 mb-3 font-semibold">
            A B O U T &nbsp; T H E &nbsp; F O U N D E R
          </div>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#09090b] leading-[1.12] mb-6"
            style={{ letterSpacing: "-0.035em" }}
          >
            Hi, I’m Saim{" "}
            <span className="text-[#9ca3af]">Nice to meet you.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            I’m the founder and lead digital architect at Saim Dev. We operate as a UK-registered engineering studio based out of Covent Garden, London with an agile high-output engineering team in Pakistan. We build commercial web software, headless eCommerce flagships, and 1:1 pixel-perfect website clones on Next.js 16.
          </p>
        </div>

        {/* 4-Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Bento 1: UK Registered Entity */}
          <div className="p-8 rounded-3xl bg-[#f4f5f6] border border-black/5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#09090b] shadow-2xs mb-6">
                <MapPin className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-lg font-semibold text-[#09090b] mb-2 tracking-tight">
                UK Registered Entity
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-4">
                Registered office at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ. Accountable international standard.
              </p>
            </div>
            <div className="pt-4 border-t border-black/5 text-xs font-mono font-semibold text-gray-500">
              London, WC2H 9JQ
            </div>
          </div>

          {/* Bento 2: Pakistan Engineering Hub */}
          <div className="p-8 rounded-3xl bg-[#f4f5f6] border border-black/5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#09090b] shadow-2xs mb-6">
                <Code2 className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-lg font-semibold text-[#09090b] mb-2 tracking-tight">
                Pakistan Engineering Hub
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-4">
                Agile, high-speed engineering output with rapid 48-hour turnarounds. Direct engineering communication with no middlemen.
              </p>
            </div>
            <div className="pt-4 border-t border-black/5 text-xs font-mono font-semibold text-gray-500">
              Senior Digital Engineers
            </div>
          </div>

          {/* Bento 3: $0 Upfront Sprint */}
          <div className="p-8 rounded-3xl bg-[#f4f5f6] border border-black/5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#09090b] shadow-2xs mb-6">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-lg font-semibold text-[#09090b] mb-2 tracking-tight">
                $0 Upfront Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light mb-4">
                We build and deploy the live working preview first. You only pay when you are 100% satisfied with the outcome.
              </p>
            </div>
            <div className="pt-4 border-t border-black/5 text-xs font-mono font-semibold text-gray-500">
              100% Risk Free
            </div>
          </div>

          {/* Bento 4: Direct Access */}
          <div className="p-8 rounded-3xl bg-[#09090b] text-white border border-black/10 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#b5f900] mb-6">
                <CheckCircle2 className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                Direct Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-6">
                Connect directly with lead engineer Saim on WhatsApp to discuss your project requirements.
              </p>
            </div>
            <div>
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20directly"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#b5f900] text-black font-semibold text-xs tracking-tight hover:bg-white transition-colors"
              >
                <span>WhatsApp Saim</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
