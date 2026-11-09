"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";

export const RhConsultationSection = () => {
  return (
    <section className="py-24 sm:py-32 border-t border-white/10 bg-[#050505] text-[#fafafa] relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#b5f900]/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-16 rounded-[36px] bg-[#0c0c0e] border border-white/10 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
        >
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#b5f900] mb-4 font-semibold">
            F R O M &nbsp; Z E R O &nbsp; T O &nbsp; O N E
          </div>

          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 max-w-3xl leading-[1.12]"
            style={{ letterSpacing: "-0.035em" }}
          >
            Designed to ship.{" "}
            <span className="text-gray-400">Let&apos;s build your platform with $0 upfront.</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto font-light leading-relaxed mb-10">
            Send us your project brief or any reference website link. We engineer a live staging preview first. Inspect it on your phone and laptop — you only pay if you are 100% delighted.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20new%20project%20with%20the%20$0%20upfront%20offer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#b5f900] text-black font-semibold text-sm hover:bg-white transition-all duration-300 active:scale-95 shadow-[0_4px_24px_rgba(181,249,0,0.25)] group"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Discuss on WhatsApp ($0 Upfront)</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="mailto:contact@saimdev.site"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all"
            >
              <span>Email Scope Directly</span>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs text-zinc-400 font-mono">
            <ShieldCheck className="w-4 h-4 text-[#b5f900]" />
            <span>UK Registered Agency • Senior Full-Stack Engineering Studio</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};