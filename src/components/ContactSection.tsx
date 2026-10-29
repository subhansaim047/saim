"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, CheckCircle2, Clock, ShieldCheck, Mail, ChevronDown } from "lucide-react";
import { BUDGET_OPTIONS } from "../../content/plans";
import { getClaim } from "../lib/claims";
import ownerFacts from "../../content/owner-facts.json";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    projectType: "Custom Business Website",
    currentWebsite: "",
    budget: BUDGET_OPTIONS[0] as string,
    details: "",
  });

  const [formOpen, setFormOpen] = useState(true);

  const projectTypes = [
    "Custom Business Website",
    "E-Commerce Store",
    "Landing Page / Redesign",
    "Web App / SaaS",
  ];

  const budgetOptions = BUDGET_OPTIONS;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim() || "Prospective Client";
    const contact = formData.contactInfo.trim() || "Not provided";
    const currentSite = formData.currentWebsite.trim() || "None (New Project)";
    const details = formData.details.trim() || "Looking forward to discussing project details!";

    const message = `👋 Hello Saim Dev! I would like to start a website project:

• Name / Business: ${name}
• Contact / Location: ${contact}
• Project Type: ${formData.projectType}
• Current Website: ${currentSite}
• Budget Range: ${formData.budget}
• Project Details: ${details}`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/923196526604?text=${encodedMessage}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-transparent text-white px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 md:py-36 overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FF4A1C]/[0.025] rounded-full blur-[170px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* SYBIOSME CONTACT CARD PANEL */}
        <div className="rounded-[2.75rem] bg-[#121212] border border-white/10 p-7 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Radial Lighting in Top Corner */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF4A1C]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 relative z-10">
            <div>
              {/* Plate Avatar & Availability Pill */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1a1a1a] to-[#333] border-2 border-[#121212] flex items-center justify-center text-xs font-semibold text-white shadow-md">
                    SD
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF4A1C] to-[#ff7b57] border-2 border-[#121212] flex items-center justify-center text-xs font-semibold text-white shadow-md">
                    UK
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/80">
                    Accepting New UK &amp; EU Projects
                  </span>
                </div>
              </div>

              <h2
                className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.08]"
                style={{ letterSpacing: "-0.04em" }}
              >
                Another question?<br />
                <span className="text-white/40">Let’s talk.</span>
              </h2>
            </div>

            {/* Direct WhatsApp Call Action — Sybiosme Primary Action Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20website%20project"
                target="_blank"
                rel="noreferrer"
                className="sybiosme-action-btn bg-white hover:bg-neutral-100 text-black shadow-xl"
              >
                <div className="flex flex-col items-start pr-1">
                  <span className="text-sm font-semibold tracking-tight">Book a call / WhatsApp</span>
                  <span className="text-[10px] text-black/60 font-mono">20min – No commitment</span>
                </div>
                <div className="btn-arrow bg-black text-white">
                  <svg viewBox="0 0 17 15" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                    <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Channels & Trust Indicators */}
          <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-white/70">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
              <span>contact@saimdev.site</span>
            </div>
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>WhatsApp: +92 319 6526604</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#FF4A1C] flex-shrink-0" />
              <span>50/50 Milestone Approval</span>
            </div>
          </div>

          {/* Collapsible Project Brief Form — Sybiosme Accordion Form */}
          <div className="pt-8 relative z-10">
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={() => setFormOpen(!formOpen)}
                className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
              >
                <span className="text-lg sm:text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                  Prefer to send a project brief?
                </span>
                <div className={cn("sybiosme-disclosure-icon", formOpen && "bg-[#FF4A1C]/15 border-[#FF4A1C]/35 text-[#FF4A1C]")}>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", formOpen && "rotate-180")} />
                </div>
              </button>
            </div>

            {formOpen && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-2">
                {/* Row 1: Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-xs font-mono text-white/60 uppercase tracking-wider">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. David Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF4A1C] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-info" className="text-xs font-mono text-white/60 uppercase tracking-wider">
                      Email / Phone Number *
                    </label>
                    <input
                      type="text"
                      id="contact-info"
                      required
                      placeholder="e.g. david@example.co.uk or +44..."
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF4A1C] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Project Type & Current Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-type" className="text-xs font-mono text-white/60 uppercase tracking-wider">
                      Project Type
                    </label>
                    <select
                      id="contact-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF4A1C] transition-colors cursor-pointer"
                    >
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#181818] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-website" className="text-xs font-mono text-white/60 uppercase tracking-wider">
                      Current Website (Optional)
                    </label>
                    <input
                      type="text"
                      id="contact-website"
                      placeholder="e.g. yourbusiness.co.uk"
                      value={formData.currentWebsite}
                      onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF4A1C] transition-colors"
                    />
                  </div>
                </div>

                {/* Budget Selection Pills */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {budgetOptions.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={cn(
                          "text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all cursor-pointer",
                          formData.budget === b
                            ? "border-[#FF4A1C] bg-[#FF4A1C]/15 text-white font-semibold"
                            : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:text-white"
                        )}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-details" className="text-xs font-mono text-white/60 uppercase tracking-wider">
                    Project Details / Requirements *
                  </label>
                  <textarea
                    id="contact-details"
                    required
                    rows={4}
                    placeholder="Tell us about your business goals, target timeline, or reference websites..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#FF4A1C] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="sybiosme-action-btn w-full bg-[#FF4A1C] hover:bg-[#e03f15] text-white shadow-xl py-3.5 pl-6 pr-2.5 mt-2"
                >
                  <span className="text-sm font-semibold tracking-tight">Submit Brief via WhatsApp</span>
                  <div className="btn-arrow bg-white text-black">
                    <svg viewBox="0 0 17 15" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                      <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
                    </svg>
                  </div>
                </button>

                <p className="text-center text-[11px] text-white/50">
                  🔒 {getClaim("end-to-end-encrypted")}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
