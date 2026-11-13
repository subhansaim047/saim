"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import type { LiquidGlassOrbState } from "./reactdrops/liquid-glass-orb/liquid-glass-orb";
import { ViewportMount } from "./reactdrops/ViewportMount";
import { SoapBubbleMaterial, SoapBubbleSurface } from "./reactdrops/soap-bubble";
import { ReactDropButton, LOGO_MATERIAL_DEFAULTS, LOGO_BUBBLE_PALETTE } from "./ReactDropButton";
import { MessageSquare, ShieldCheck, Mail, ChevronDown } from "lucide-react";
import { BUDGET_OPTIONS } from "../../content/plans";
import { getClaim } from "../lib/claims";
import { StudioHoursAndMapCard } from "./StudioHoursAndMapCard";

const LazyLiquidGlassOrb = dynamic(
  () => import("./reactdrops/liquid-glass-orb/liquid-glass-orb").then((m) => m.LiquidGlassOrb),
  { ssr: false }
);

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
  const [orbState, setOrbState] = useState<LiquidGlassOrbState>("idle");

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
    <SoapBubbleMaterial {...LOGO_MATERIAL_DEFAULTS}>
      <section
        id="contact"
        className="relative w-full bg-white text-[#020612] px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-28 md:py-36 overflow-hidden border-t border-[#020612]/[0.07]"
      >
        <div className="relative z-10 max-w-5xl mx-auto">
          
          {/* CONTACT CARD PANEL */}
          <div className="rounded-[2.75rem] bg-[#F8FAFC] border border-[#020612]/[0.08] p-7 sm:p-12 md:p-14 shadow-[0_24px_70px_-30px_rgba(2,6,18,0.12)] relative overflow-hidden">
            
            {/* Heading Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#020612]/[0.08] relative z-10">
              <div>
                {/* Plate Avatar, Liquid Glass Orb & Availability Pill */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <ViewportMount
                    unmountWhenFar
                    rootMargin="360px 0px"
                    minHeight={44}
                    className="w-11 h-11 rounded-full shrink-0 overflow-hidden flex items-center justify-center bg-[radial-gradient(circle_at_35%_30%,#93C5FD_0%,#2F6CE1_55%,#020612_100%)] border border-[#2F6CE1]/35 shadow-[0_6px_18px_rgba(47,108,225,0.22)]"
                  >
                    <LazyLiquidGlassOrb
                      preset="cobalt"
                      baseColor="#2F6CE1"
                      colorA="#020612"
                      colorB="#dbeafe"
                      colorC="#5B92F5"
                      size={44}
                      state={orbState}
                      animateEntrance={true}
                      aria-hidden={true}
                    />
                  </ViewportMount>
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#020612] to-[#1e293b] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-md">
                      SD
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2F6CE1] to-[#5B92F5] border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-md">
                      UK
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#2F6CE1]/25">
                    <span className="w-2 h-2 rounded-full bg-[#2F6CE1] animate-pulse" />
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#020612]">
                      Accepting New UK &amp; EU Projects
                    </span>
                  </div>
                </div>

                <h2
                  className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#020612] leading-[1.08]"
                  style={{ letterSpacing: "-0.03em" }}
                >
                  Another question?<br />
                  <span className="text-[#2F6CE1]">Let’s talk.</span>
                </h2>
              </div>

              {/* Direct WhatsApp Call Action — ReactDrops Royal Blue Bubble */}
              <div className="flex flex-col sm:flex-row gap-3">
                <ReactDropButton
                  variant="primary"
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20website%20project"
                  external
                  className="h-[58px]"
                  innerClassName="px-2.5 pl-5 gap-4 text-white"
                >
                  <div className="flex flex-col items-start pr-1 text-left">
                    <span className="text-sm font-bold tracking-tight">Book a call / WhatsApp</span>
                    <span className="text-[10px] text-white/80 font-mono">20min – No commitment</span>
                  </div>
                  <span className="w-9 h-9 rounded-full bg-white text-[#2F6CE1] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 17 15" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                      <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
                    </svg>
                  </span>
                </ReactDropButton>
              </div>
            </div>

            {/* Quick Channels & Trust Indicators */}
            <div className="py-6 border-b border-[#020612]/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-[#020612]/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
                <span>contact@saimdev.site</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
                <span>WhatsApp: +92 319 6526604</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2F6CE1] flex-shrink-0" />
                <span>50/50 Milestone Approval</span>
              </div>
            </div>

            {/* Collapsible Project Brief Form */}
            <div className="pt-8 relative z-10">
              <div className="flex items-center justify-between mb-6">
                <SoapBubbleSurface
                  as="button"
                  type="button"
                  {...LOGO_BUBBLE_PALETTE}
                  surface="bubble"
                  interactive={true}
                  radius={9999}
                  iridescence={0.26}
                  oilOpacity={0.16}
                  clearCenter={0.88}
                  tint="rgba(255, 255, 255, 0.92)"
                  soapColor="rgba(47, 108, 225, 0.16)"
                  wobble={0.28}
                  onClick={() => setFormOpen(!formOpen)}
                  className="saim-reactdrop-glass inline-flex items-center gap-3 px-4 py-2 rounded-full text-left group cursor-pointer focus:outline-none"
                >
                  <span className="relative z-[2] font-heading text-base sm:text-lg font-bold text-[#020612] group-hover:text-[#1D4ED8] transition-colors">
                    Prefer to send a project brief?
                  </span>
                  <div className="relative z-[2] sybiosme-disclosure-icon">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${formOpen ? "rotate-180 text-[#2F6CE1]" : ""}`} />
                  </div>
                </SoapBubbleSurface>
              </div>

              {formOpen && (
                <form
                  onSubmit={handleSubmit}
                  onFocusCapture={() => setOrbState("listening")}
                  onBlurCapture={() => setOrbState("idle")}
                  className="flex flex-col gap-6 pt-2"
                >
                  {/* Row 1: Name & Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-xs font-mono font-semibold text-[#020612]/70 uppercase tracking-wider">
                        Your Name / Company *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        placeholder="e.g. David Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-[#020612]/[0.12] rounded-2xl px-4 py-3.5 text-sm text-[#020612] placeholder-[#020612]/40 focus:outline-none focus:border-[#2F6CE1] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-info" className="text-xs font-mono font-semibold text-[#020612]/70 uppercase tracking-wider">
                        Email / Phone Number *
                      </label>
                      <input
                        type="text"
                        id="contact-info"
                        required
                        placeholder="e.g. david@example.co.uk or +44..."
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        className="w-full bg-white border border-[#020612]/[0.12] rounded-2xl px-4 py-3.5 text-sm text-[#020612] placeholder-[#020612]/40 focus:outline-none focus:border-[#2F6CE1] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Project Type & Current Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-type" className="text-xs font-mono font-semibold text-[#020612]/70 uppercase tracking-wider">
                        Project Type
                      </label>
                      <select
                        id="contact-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-white border border-[#020612]/[0.12] rounded-2xl px-4 py-3.5 text-sm text-[#020612] focus:outline-none focus:border-[#2F6CE1] transition-colors cursor-pointer"
                      >
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="bg-white text-[#020612]">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-website" className="text-xs font-mono font-semibold text-[#020612]/70 uppercase tracking-wider">
                        Current Website (Optional)
                      </label>
                      <input
                        type="text"
                        id="contact-website"
                        placeholder="e.g. yourbusiness.co.uk"
                        value={formData.currentWebsite}
                        onChange={(e) => setFormData({ ...formData, currentWebsite: e.target.value })}
                        className="w-full bg-white border border-[#020612]/[0.12] rounded-2xl px-4 py-3.5 text-sm text-[#020612] placeholder-[#020612]/40 focus:outline-none focus:border-[#2F6CE1] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Budget Selection ReactDrops Pills */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono font-semibold text-[#020612]/70 uppercase tracking-wider">
                      Estimated Budget Range
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {budgetOptions.map((b) => (
                        <ReactDropButton
                          key={b}
                          variant="pill"
                          active={formData.budget === b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          radius={12}
                          className="w-full h-[46px] !rounded-xl !justify-start"
                          innerClassName="w-full justify-start px-3 text-xs font-bold"
                        >
                          {b}
                        </ReactDropButton>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-details" className="text-xs font-mono font-semibold text-[#020612]/70 uppercase tracking-wider">
                      Project Details / Requirements *
                    </label>
                    <textarea
                      id="contact-details"
                      required
                      rows={4}
                      placeholder="Tell us about your business goals, target timeline, or reference websites..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full bg-white border border-[#020612]/[0.12] rounded-2xl px-4 py-3.5 text-sm text-[#020612] placeholder-[#020612]/40 focus:outline-none focus:border-[#2F6CE1] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Action Button — ReactDrops Liquid-Bubble Primary */}
                  <div
                    className="mt-2"
                    onMouseEnter={() => setOrbState("speaking")}
                    onMouseLeave={() => setOrbState("idle")}
                  >
                    <ReactDropButton
                      type="submit"
                      variant="primary"
                      className="w-full h-[58px]"
                      innerClassName="w-full justify-between px-2 pl-6 text-sm font-bold text-white"
                    >
                      <span>Submit Brief via WhatsApp</span>
                      <span className="w-10 h-10 rounded-full bg-white text-[#2F6CE1] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 17 15" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                          <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
                        </svg>
                      </span>
                    </ReactDropButton>
                  </div>

                  <p className="text-center text-[11px] text-[#020612]/60 font-medium">
                    🔒 {getClaim("end-to-end-encrypted")}
                  </p>
                </form>
              )}
            </div>

            <StudioHoursAndMapCard />
          </div>
        </div>
      </section>
    </SoapBubbleMaterial>
  );
};
