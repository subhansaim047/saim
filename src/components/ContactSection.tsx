"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { BUDGET_OPTIONS } from "../../content/plans";
import { getClaim } from "../lib/claims";
import ownerFacts from "../../content/owner-facts.json";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    projectType: "Custom Business Website",
    currentWebsite: "",
    budget: BUDGET_OPTIONS[0] as string,
    details: "",
  });

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
      className="relative w-full bg-black text-[#E1E0CC] px-4 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 overflow-hidden border-t border-white/10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-white/80">
              Accepting New UK & European Projects
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white max-w-3xl leading-[1.08]"
          >
            Let&apos;s build something <span className="font-serif italic text-primary">remarkable</span> together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-white/60 max-w-xl"
          >
            Fill out the project brief below to start directly on WhatsApp to discuss your project goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <div className="bg-[#0c0c0e] border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
              <h3 className="text-lg font-semibold text-white">Why Work With Saim Dev?</h3>
              
              <div className="space-y-4">
                {[
                  { title: "Rapid Turnaround", desc: "Complete delivery in 5–10 business days." },
                  { title: "High-Speed Performance", desc: "Next.js 16 + React 19 architecture optimised for Core Web Vitals." },
                  { title: "Direct WhatsApp Access", desc: "No middlemen — communicate directly with your lead engineer." },
                  { title: "Free Dedicated Support", desc: "14 to 30 days of post-launch testing, SEO indexing & revisions." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">{item.title}</h4>
                      <p className="text-[11px] text-white/50 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Direct WhatsApp communication</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span>{getClaim("satisfaction-guarantee")}</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-[#0c0c0e] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
              <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Fast Response Channels</span>
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20website%20project"
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +92 319 6526604</span>
              </a>
              {ownerFacts.workingHours ? <span className="text-[11px] text-white/40">Working hours: {ownerFacts.workingHours}</span> : null}
            </div>
          </motion.div>

          {/* Right Form (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 bg-[#0a0a0c] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1: Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono text-white/70 uppercase tracking-wider">
                    Your Name / Company *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. David Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#121215] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contactInfo" className="text-xs font-mono text-white/70 uppercase tracking-wider">
                    Email / Phone Number *
                  </label>
                  <input
                    type="text"
                    id="contactInfo"
                    required
                    placeholder="e.g. david@example.co.uk or +44..."
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full bg-[#121215] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Project Type & Current Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-xs font-mono text-white/70 uppercase tracking-wider">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#121215] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#121215] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="currentWebsite" className="text-xs font-mono text-white/70 uppercase tracking-wider">
                    Current Website (Optional)
                  </label>
                  <input
                    type="text"
                    id="currentWebsite"
                    placeholder="e.g. yourbusiness.co.uk"
                    value={formData.currentWebsite}
                    onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                    className="w-full bg-[#121215] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Budget Options */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-white/70 uppercase tracking-wider">
                  Estimated Budget Range
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {budgetOptions.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`text-left px-4 py-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                        formData.budget === b
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-white/10 bg-[#121215] text-white/70 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col gap-2">
                <label htmlFor="details" className="text-xs font-mono text-white/70 uppercase tracking-wider">
                  Project Details / Requirements
                </label>
                <textarea
                  id="details"
                  rows={4}
                  placeholder="Tell us about your business goals, desired timeline, or any specific features..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-[#121215] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="mt-2 w-full bg-primary hover:brightness-110 active:scale-95 text-black font-bold text-sm sm:text-base py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-black" />
                <span>Submit Brief via WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-[11px] text-white/50">
                🔒 {getClaim("end-to-end-encrypted")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
