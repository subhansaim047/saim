"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export const RhNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
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
          ? "py-3 bg-[#f4f5f6]/90 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo - rh.design circle monogram */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#09090b] rounded-full p-1"
        >
          <div className="w-9 h-9 rounded-full bg-[#09090b] flex items-center justify-center text-white font-extrabold text-xs tracking-tight group-hover:scale-105 transition-transform shadow-sm">
            SD
          </div>
          <div className="flex flex-col">
            <span className="text-[#09090b] font-semibold text-sm tracking-tight leading-tight">
              Saim Dev
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
              UK Reg • PK Studio
            </span>
          </div>
        </Link>

        {/* Center Nav Links - rh.design clean navigation */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/70 border border-black/5 shadow-2xs backdrop-blur-md">
          <Link
            href="#case-studies"
            className="px-4 py-1.5 text-xs text-gray-600 hover:text-black rounded-full transition-colors font-medium hover:bg-black/5"
          >
            Case Studies
          </Link>
          <Link
            href="#services"
            className="px-4 py-1.5 text-xs text-gray-600 hover:text-black rounded-full transition-colors font-medium hover:bg-black/5"
          >
            Services
          </Link>
          <Link
            href="#pricing"
            className="px-4 py-1.5 text-xs text-gray-600 hover:text-black rounded-full transition-colors font-medium hover:bg-black/5"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="px-4 py-1.5 text-xs text-gray-600 hover:text-black rounded-full transition-colors font-medium hover:bg-black/5"
          >
            About
          </Link>
          <Link
            href="/tools"
            className="px-4 py-1.5 text-xs text-gray-600 hover:text-black rounded-full transition-colors font-medium hover:bg-black/5"
          >
            Tools
          </Link>
        </nav>

        {/* Right CTA - rh.design iconic lime arrow button */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20with%20the%20$0%20upfront%20offer"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#09090b] rounded-full p-1"
          >
            <span className="text-xs font-semibold text-[#09090b] group-hover:text-black transition-colors">
              Get in touch
            </span>
            <div className="w-9 h-9 rounded-full bg-[#b5f900] border border-black/10 flex items-center justify-center text-black transition-transform group-hover:scale-105 group-hover:rotate-45 shadow-sm">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 text-gray-700 hover:text-black focus-visible:outline-2 focus-visible:outline-[#09090b] rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-white/95 backdrop-blur-xl border-b border-gray-200 p-6 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 font-medium">
            <Link
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-gray-800 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
            >
              Case Studies (15+ Demos)
            </Link>
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-gray-800 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
            >
              Services &amp; Architecture
            </Link>
            <Link
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-gray-800 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
            >
              Pricing ($0 Upfront Sprint)
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-gray-800 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
            >
              About Studio &amp; UK Registration
            </Link>
            <Link
              href="/tools"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-gray-800 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
            >
              Hospitality &amp; Food Safety Tools
            </Link>
            <Link
              href="/blogs"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-base text-gray-800 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
            >
              Insights &amp; Articles
            </Link>
          </nav>

          <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-gray-600 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#b5f900]" />
              <span>Registered in UK (Covent Garden) • PK Studio</span>
            </div>
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20with%20the%20$0%20upfront%20offer"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#09090b] text-white font-semibold text-sm shadow-md active:scale-95 transition-transform"
            >
              <span>Get in touch ($0 Upfront)</span>
              <div className="w-5 h-5 rounded-full bg-[#b5f900] flex items-center justify-center text-black">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
