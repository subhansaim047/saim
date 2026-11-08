"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const RhFooter = () => {
  return (
    <footer className="py-12 border-t border-[#2c2c2c] bg-[#0d0d0d] text-white">
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#242424]">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-extrabold text-xs">
                S
              </div>
              <span className="text-white font-semibold text-base tracking-tight">
                Saim Dev
              </span>
            </div>
            <p className="text-xs text-[#a1a1a1] font-light max-w-sm">
              Our Agency Registered in UK • Based in Pakistan. Bespoke Next.js web applications, e-commerce, and 1:1 pixel-perfect platforms.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#cbcbcb]">
            <a href="#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#why-us" className="hover:text-white transition-colors">
              Why Us
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <Link href="/" className="text-[#b5f900] hover:underline flex items-center gap-1 font-semibold">
              <span>View Classic Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#595959] font-mono">
          <div>&copy; {new Date().getFullYear()} Saim Dev. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Next.js 15 App Router</span>
            <span>•</span>
            <span>$0 Upfront Guarantee</span>
            <span>•</span>
            <span>Zero Monthly Retainers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};