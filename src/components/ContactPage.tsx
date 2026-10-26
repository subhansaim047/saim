"use client";
import { SiteFooter } from "./SiteFooter";
import { BUDGET_OPTIONS } from "../../content/plans";
import ownerFacts from "../../content/owner-facts.json";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Zap,
  Search,
  Smartphone,
  ShieldCheck,
  HelpCircle,
  MessageSquare,
  Mail,
  ChevronDown,
} from "lucide-react";
import { cn } from "../lib/utils";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    website: "",
    budget: BUDGET_OPTIONS[0] as string,
    details: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [igLink, setIgLink] = useState("");

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      errs.email = "Valid email is required";
    if (!formData.details.trim()) errs.details = "Project details are required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const text = `Hi Saim Dev! I would like to inquire about a website project:

• *Name*: ${formData.name}
• *Business*: ${formData.businessName || "N/A"}
• *Email*: ${formData.email}
• *Website*: ${formData.website || "N/A"}
• *Budget*: ${formData.budget}
• *Project Details*: ${formData.details}`;

      const encodedText = encodeURIComponent(text);
      const url = `https://wa.me/923196526604?text=${encodedText}`;
      setIgLink(url);
      setSubmitted(true);

      window.location.href = url;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Ambient Glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF4A1C]/[0.025] rounded-full blur-[180px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-primary font-semibold" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
            <span className="section-dot" />
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
              Get In Touch
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-4 leading-[1.08]"
            style={{ letterSpacing: "-0.04em" }}
          >
            Let&apos;s build something <span className="text-white/40">remarkable.</span>
          </h1>

          <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
            Direct communication with your lead engineer. No middlemen, no agency bloat.
          </p>
        </div>

        {/* SYBIOSME CONTACT CARD PANEL */}
        <div className="rounded-[2.75rem] bg-[#121212] border border-white/10 p-7 sm:p-12 shadow-2xl relative overflow-hidden mb-16">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF4A1C]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Heading Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10 relative z-10">
            <div>
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
                className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight"
                style={{ letterSpacing: "-0.03em" }}
              >
                Start your project.<br />
                <span className="text-white/40">Direct on WhatsApp or Email.</span>
              </h2>
            </div>

            {/* Direct Action Button */}
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

          {/* Quick Channels Strip */}
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

          {/* Form Area */}
          <div className="pt-8 relative z-10">
            {submitted ? (
              <div className="bg-white/5 border border-emerald-500/30 rounded-2xl p-8 text-center my-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-medium mb-2">
                  Inquiry Form Formatted!
                </h3>
                <p className="text-white/70 text-sm max-w-md mx-auto mb-6">
                  Click the button below to send your pre-filled inquiry to Saim Dev on WhatsApp:
                </p>
                <a
                  href={igLink || "https://wa.me/923196526604"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sybiosme-action-btn bg-emerald-500 hover:bg-emerald-400 text-black shadow-xl"
                >
                  <span className="font-semibold text-sm">Open &amp; Send on WhatsApp</span>
                  <div className="btn-arrow bg-black text-white">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                </a>
                <div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-white/60 hover:text-white text-xs underline cursor-pointer mt-5"
                  >
                    Edit Form Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Johnson"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF4A1C] transition-colors"
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs">{errors.name}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({ ...formData, businessName: e.target.value })
                      }
                      placeholder="e.g. Apex Studio"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF4A1C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@example.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF4A1C] transition-colors"
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs">{errors.email}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
                      Current Website (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      placeholder="https://example.com"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF4A1C] transition-colors"
                    />
                  </div>
                </div>

                {/* Budget Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
                    Project Budget Range
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, budget: opt })}
                        className={cn(
                          "text-left px-4 py-3 rounded-xl border text-xs font-medium transition-all cursor-pointer",
                          formData.budget === opt
                            ? "border-[#FF4A1C] bg-[#FF4A1C]/15 text-white font-semibold"
                            : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:text-white"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-white/60 uppercase tracking-wider">
                    Project Details / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    placeholder="Tell us about your project goals, pages needed, timeline, or reference websites..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-[#FF4A1C] transition-colors resize-none"
                  />
                  {errors.details && (
                    <span className="text-red-400 text-xs">{errors.details}</span>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="sybiosme-action-btn w-full bg-[#FF4A1C] hover:bg-[#e03f15] text-white shadow-xl py-3.5 pl-6 pr-2.5 mt-2"
                >
                  <span className="text-sm font-semibold tracking-tight">Submit Project Inquiry via WhatsApp</span>
                  <div className="btn-arrow bg-white text-black">
                    <svg viewBox="0 0 17 15" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
                      <path d="M16.56 8.555L10.56 14.555C10.26 14.855 9.88 14.995 9.5 14.995C9.12 14.995 8.74 14.855 8.44 14.555C7.86 13.975 7.86 13.015 8.44 12.435L11.88 8.995H1.5C0.68 8.995 0 8.315 0 7.495C0 6.675 0.68 5.995 1.5 5.995H11.88L8.44 2.555C7.86 1.975 7.86 1.015 8.44 0.435C9.02 -0.145 9.98 -0.145 10.56 0.435L16.56 6.435C17.14 7.015 17.14 7.975 16.56 8.555Z" />
                    </svg>
                  </div>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* CONTEXTUAL NAVIGATION */}
        <div className="mb-14 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
          <p className="text-xs text-white/60 mb-3 font-light">Want to explore our solutions and results before submitting an enquiry?</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-primary">
            <Link href="/services" className="hover:underline">Explore our web development services</Link>
            <span className="text-white/20">·</span>
            <Link href="/case-studies" className="hover:underline">View our website case studies</Link>
            <span className="text-white/20">·</span>
            <Link href="/demos" className="hover:underline">Explore live website demos</Link>
          </div>
        </div>

        {/* WHY WORK WITH US — Sybiosme Grid */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white text-center mb-8">
            Why Work With {ownerFacts.voice === "I" ? "Me" : "Us"}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "Fast Delivery", desc: "5–10 days swift project execution without compromising quality." },
              { icon: Search, title: "SEO Ready", desc: "On-page SEO, schema markup, and Google Search Console indexing." },
              { icon: Smartphone, title: "Mobile Responsive", desc: "Flawless layout and touch performance across all mobile devices." },
              { icon: ShieldCheck, title: "Ongoing Support", desc: "14–30 days dedicated post-launch maintenance and support." },
            ].map((card, i) => (
              <div key={i} className="rounded-[1.75rem] bg-[#121212] p-6 border border-white/10 hover:border-white/20 transition-colors">
                <card.icon className="w-6 h-6 text-[#FF4A1C] mb-3" />
                <h3 className="text-white font-medium mb-1 text-sm">{card.title}</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooter theme="dark" />
    </div>
  );
};
