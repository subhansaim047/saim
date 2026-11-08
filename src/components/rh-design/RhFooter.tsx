"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Mail, MessageCircle, MapPin } from "lucide-react";

export const RhFooter = () => {
  return (
    <footer className="py-16 border-t border-[#27272a] bg-[#09090b] text-white">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#27272a]">
          {/* Col 1 & 2: Brand Info & Legal Entity */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-black font-extrabold text-sm tracking-tighter group-hover:scale-105 transition-transform">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-base tracking-tight">
                  Saim Dev Studio
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa]">
                  Web Engineering Agency
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#a1a1aa] font-light max-w-sm leading-relaxed mb-6">
              Bespoke Next.js web applications, headless eCommerce flagships, and 1:1 pixel-perfect platforms. Registered in London, UK with our dedicated engineering hub in Pakistan.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-zinc-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b5f900] shrink-0" />
                <span>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b5f900] shrink-0" />
                <span>UK Registered Entity • $0 Upfront Deposit Sprint Guarantee</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#b5f900] mb-4">
              Services
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-[#a1a1aa]">
              <li>
                <Link href="/services/website-clone" className="hover:text-white transition-colors">
                  1:1 Website Clone ($1,900)
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce-shopify" className="hover:text-white transition-colors">
                  Headless eCommerce
                </Link>
              </li>
              <li>
                <Link href="/services/website-development" className="hover:text-white transition-colors">
                  Next.js Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/takeaway-web-design" className="hover:text-white transition-colors">
                  Takeaway Direct Ordering
                </Link>
              </li>
              <li>
                <Link href="/services/landing-pages-cro" className="hover:text-white transition-colors">
                  High-Converting Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/services/website-speed-optimization" className="hover:text-white transition-colors">
                  Speed & Core Web Vitals
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Free Kitchen Tools */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#b5f900] mb-4">
              Free Utilities
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-[#a1a1aa]">
              <li>
                <Link href="/tools/allergen-matrix-generator" className="hover:text-white transition-colors">
                  14-Allergen Matrix Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/food-cost-calculator" className="hover:text-white transition-colors">
                  Food Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/ppds-label-generator" className="hover:text-white transition-colors">
                  Natasha's Law Label Maker
                </Link>
              </li>
              <li>
                <Link href="/tools/recipe-batch-calculator" className="hover:text-white transition-colors">
                  Recipe Batch Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white text-zinc-300 font-medium transition-colors">
                  View All Tools Hub &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio & Connect */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#b5f900] mb-4">
              Studio
            </div>
            <ul className="flex flex-col gap-2.5 text-xs text-[#a1a1aa] mb-6">
              <li>
                <Link href="/case-studies" className="hover:text-white transition-colors">
                  Selected Work (15+ Demos)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Saim Dev
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Studio Direct
                </Link>
              </li>
            </ul>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20with%20the%20$0%20upfront%20offer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#b5f900] hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: +92 319 6526604</span>
              </a>
              <a
                href="mailto:contact@saimdev.site"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contact@saimdev.site</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Saim Dev Studio. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-zinc-300 transition-colors">
              Cookie Policy
            </Link>
            <span>•</span>
            <Link href="/disclaimer" className="hover:text-zinc-300 transition-colors">
              Food Safety Disclaimer
            </Link>
            <span>•</span>
            <span className="text-[#b5f900]">100% Code Ownership</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
