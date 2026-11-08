"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const RhNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#b5f900] rounded-xl p-1">
          <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-black font-extrabold text-sm tracking-tighter group-hover:scale-105 transition-transform shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm tracking-tight group-hover:text-[#b5f900] transition-colors">
              Saim Dev
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa]">
              Digital Studio
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#111113]/80 border border-[#27272a] backdrop-blur-md">
          <Link
            href="/services"
            className="px-3.5 py-1.5 text-xs text-[#a1a1aa] hover:text-white rounded-full transition-colors font-medium hover:bg-white/5"
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className="px-3.5 py-1.5 text-xs text-[#a1a1aa] hover:text-white rounded-full transition-colors font-medium hover:bg-white/5"
          >
            Work
          </Link>
          <Link
            href="/tools"
            className="px-3.5 py-1.5 text-xs text-[#a1a1aa] hover:text-white rounded-full transition-colors font-medium hover:bg-white/5"
          >
            Tools
          </Link>
          <Link
            href="/about"
            className="px-3.5 py-1.5 text-xs text-[#a1a1aa] hover:text-white rounded-full transition-colors font-medium hover:bg-white/5"
          >
            About
          </Link>
          <Link
            href="/blogs"
            className="px-3.5 py-1.5 text-xs text-[#a1a1aa] hover:text-white rounded-full transition-colors font-medium hover:bg-white/5"
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className="px-3.5 py-1.5 text-xs text-[#a1a1aa] hover:text-white rounded-full transition-colors font-medium hover:bg-white/5"
          >
            Contact
          </Link>
        </nav>

        {/* Right CTA Button & Indicators */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#111113] border border-[#27272a] text-[11px] font-mono text-[#a1a1aa]">
            <span className="w-2 h-2 rounded-full bg-[#b5f900] animate-pulse" />
            <span>UK Reg • PK Studio</span>
          </div>

          <MagneticButton
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20with%20the%20$0%20upfront%20offer"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="!px-4 !py-2 !text-xs font-semibold"
          >
            Start ($0 Upfront)
          </MagneticButton>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2 text-[#a1a1aa] hover:text-white focus-visible:outline-2 focus-visible:outline-[#b5f900] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#09090b]/95 backdrop-blur-xl border-b border-[#27272a] p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 font-medium">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Services & Pricing
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Selected Work (15+ Demos)
            </Link>
            <Link
              href="/tools"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Hospitality & Food Safety Tools
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              About Studio & UK Credentials
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Engineering Insights
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Contact Direct
            </Link>
          </nav>

          <div className="pt-4 border-t border-[#27272a] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#b5f900]" />
              <span>Registered in UK (WC2H 9JQ) • PK Studio</span>
            </div>
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20with%20the%20$0%20upfront%20offer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#b5f900] text-black font-semibold text-sm shadow-[0_4px_20px_rgba(181,249,0,0.25)] active:scale-95 transition-transform"
            >
              <span>Get Started ($0 Upfront)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
