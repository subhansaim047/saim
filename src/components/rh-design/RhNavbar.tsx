"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export const RhNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#2c2c2c]" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1130px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/preview-rh" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-black font-extrabold text-sm tracking-tighter group-hover:scale-105 transition-transform">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm tracking-tight group-hover:text-[#b5f900] transition-colors">
              Saim Dev
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1a1]">
              Digital Studio
            </span>
          </div>
        </Link>

        {/* Center Nav Links - rh.design style */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#181818]/80 border border-[#2c2c2c] backdrop-blur-md">
          <a
            href="#case-studies"
            className="px-4 py-1.5 text-xs text-[#cbcbcb] hover:text-white rounded-full transition-colors font-medium"
          >
            Case Studies
          </a>
          <a
            href="#services"
            className="px-4 py-1.5 text-xs text-[#cbcbcb] hover:text-white rounded-full transition-colors font-medium"
          >
            Services
          </a>
          <a
            href="#why-us"
            className="px-4 py-1.5 text-xs text-[#cbcbcb] hover:text-white rounded-full transition-colors font-medium"
          >
            Why Us
          </a>
          <a
            href="#pricing"
            className="px-4 py-1.5 text-xs text-[#cbcbcb] hover:text-white rounded-full transition-colors font-medium"
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="px-4 py-1.5 text-xs text-[#cbcbcb] hover:text-white rounded-full transition-colors font-medium"
          >
            FAQ
          </a>
        </nav>

        {/* Right CTA Button with rh.design rolling text effect */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#2c2c2c] text-[11px] font-mono text-[#a1a1a1]">
            <span className="w-2 h-2 rounded-full bg-[#b5f900] animate-pulse" />
            <span>UK Reg • PK Studio</span>
          </div>

          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20with%20the%20$0%20upfront%20offer"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white text-black font-semibold text-xs px-5 py-2.5 transition-all duration-300 hover:bg-[#b5f900] group active:scale-95 shadow-[0_4px_20px_rgba(181,249,0,0.15)]"
          >
            <div className="relative z-10 flex items-center gap-1.5">
              <span>Start on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};