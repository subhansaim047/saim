import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Sparkles, CheckCircle2, Clock, ShieldCheck } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    projectType: "Custom Business Website",
    currentWebsite: "",
    budget: "$1,000 – $2,500",
    details: "",
  });

  const projectTypes = [
    "Custom Business Website",
    "E-Commerce Store",
    "Landing Page / Redesign",
    "Web App / SaaS",
  ];

  const budgetOptions = [
    "$500 – $1,000",
    "$1,000 – $2,500",
    "$2,500 – $5,000",
    "$5,000+",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = formData.name.trim() || "Prospective Client";
    const contact = formData.contactInfo.trim() || "Not provided";
    const currentSite = formData.currentWebsite.trim() || "None (New Project)";
    const details = formData.details.trim() || "Looking forward to discussing project details!";

    const message = `👋 Hello Saim Dev! I would like to start a website project:

👤 *Name / Business:* ${name}
📍 *Contact / Location:* ${contact}
🚀 *Project Type:* ${formData.projectType}
🌐 *Current Website:* ${currentSite}
💰 *Budget Range:* ${formData.budget}
📝 *Project Details:* ${details}`;

    const whatsappUrl = `https://wa.me/12498984111?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-black text-[#E1E0CC] px-4 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-primary text-xs font-mono tracking-widest uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct WhatsApp Inquiry</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-4"
          >
            Let&apos;s Build Your Website
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/60 leading-relaxed"
          >
            Share your project requirements below. Clicking submit will open a direct WhatsApp chat
            with your briefing pre-filled for an instant quote and consultation.
          </motion.p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Info Panel (4 cols) */}
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
                  { title: "Fast Turnaround", desc: "Complete delivery in 5–10 business days." },
                  { title: "Sub-Second Performance", desc: "Built with Next.js, React & modern headless architecture." },
                  { title: "Direct WhatsApp Access", desc: "No middleman — chat directly with your senior developer." },
                  { title: "Free 30-Day Support", desc: "Post-launch testing, SEO indexing & revisions included." },
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
                  <span>Reply in ~15 mins</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span>100% Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-[#0c0c0e] border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
              <span className="text-xs font-mono text-white/40 uppercase tracking-wider">Direct Hotline</span>
              <a
                href="https://wa.me/12498984111"
                target="_blank"
                rel="noreferrer"
                className="text-base sm:text-lg font-bold text-white hover:text-primary transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>+1 (249) 898-4111</span>
              </a>
              <span className="text-[11px] text-white/40">Available Monday – Saturday on WhatsApp</span>
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
              
              {/* Row 1: Name & Contact/Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-xs font-medium text-white/80">
                    Your Name / Business <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe / Apex Studio"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-info" className="text-xs font-medium text-white/80">
                    Phone / Email / Location <span className="text-primary">*</span>
                  </label>
                  <input
                    id="contact-info"
                    type="text"
                    required
                    placeholder="e.g. +1 (555) 0192 or john@company.com"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>

              {/* Project Type Selector */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-white/80">Project Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`text-xs px-3 py-2.5 rounded-xl border transition-all text-center cursor-pointer ${
                        formData.projectType === type
                          ? "bg-primary text-black font-semibold border-primary shadow-md"
                          : "bg-white/5 text-white/70 border-white/10 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Website & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="current-website" className="text-xs font-medium text-white/80">
                    Existing Website <span className="text-white/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="current-website"
                    type="text"
                    placeholder="e.g. www.yoursite.com"
                    value={formData.currentWebsite}
                    onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="budget-select" className="text-xs font-medium text-white/80">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget-select"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#141416] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-black text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Requirements */}
              <div className="flex flex-col gap-2">
                <label htmlFor="project-details" className="text-xs font-medium text-white/80">
                  Project Details &amp; Goals
                </label>
                <textarea
                  id="project-details"
                  rows={3}
                  placeholder="Tell us about your business, the features you need, or reference websites you like..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
              </div>

              {/* Submit to WhatsApp Button */}
              <button
                type="submit"
                className="mt-2 w-full bg-primary hover:bg-white text-black font-bold text-sm sm:text-base py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-black" />
                <span>Start Project on WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-[11px] text-white/40">
                🔒 Your details are kept 100% confidential and directly transmitted via WhatsApp encryption.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

