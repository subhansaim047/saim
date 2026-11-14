"use client";
import { SiteFooter } from "./SiteFooter";
import { RhHeader } from "./rh/RhHeader";
import { RhHeroPinned, RhSystemRows } from "./rh/RhModernSections";
import { BUDGET_OPTIONS } from "../../content/plans";
import ownerFacts from "../../content/owner-facts.json";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Zap,
  Search,
  Smartphone,
  ShieldCheck,
  MessageSquare,
  Mail,
} from "lucide-react";
import { cn } from "../lib/utils";
import { StudioHoursAndMapCard } from "./StudioHoursAndMapCard";

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
      const text = `Hi Saim Dev! I would like to enquire about a website project:

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
      window.open(url, "_blank");
    }
  };

  return (
    <div className="rh-page min-h-screen bg-[#0D0D0D] text-white selection:bg-[#BAFF00] selection:text-[#0D0D0D]">
      <RhHeader theme="dark" />

      {/* 1. EXACT rh.design PAGE-OPEN HERO (3D Video + Laser-Draw Strip) */}
      <RhHeroPinned
        badge="1 of 3 Slots Open This Week · $0 Upfront Prototype"
        title={
          <>
            <span className="text-[#939393]">Ready to dive in?</span>
            <br />
            Start your project today
          </>
        }
        subtitle="Message Saim Dev on WhatsApp or submit your brief below. We respond within 2 hours and build an interactive staging prototype first with zero upfront commitment."
        primaryCta={{ label: "Jump to Project Brief Form", href: "#project-brief-form" }}
        secondaryCta={{
          label: "WhatsApp Direct (+92 319 6526604)",
          href: "https://wa.me/923196526604",
        }}
        videoType="mobile"
        stripLabel="Direct engineering · Replies < 2 hrs"
      />

      <div
        id="project-brief-form"
        className="bg-[#F5F5F7] text-[#0D0D0D] py-16 sm:py-24 px-5"
      >
        <div className="max-w-[1168px] mx-auto">
          {/* 2. SPLIT 2-COLUMN WHITE BOOKING / BRIEF CARD (Exact rh.design/contact card) */}
          <div className="bg-white rounded-3xl border border-[#E6E6E6] shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-16">
          {/* Left Info Column */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#0D0D0D] text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 pb-6 mb-6 border-b border-[#222222]">
                <span className="w-12 h-12 rounded-full overflow-hidden border border-white/20 bg-white flex items-center justify-center shrink-0">
                  <img
                    src="/saim-dev-logo.png"
                    alt="Saim Dev"
                    className="w-full h-full object-cover"
                  />
                </span>
                <div>
                  <span className="block text-[18px] font-medium text-white">
                    Saim Dev Studio
                  </span>
                  <span className="block text-[13px] text-[#939393]">
                    Direct Senior Full-Stack Engineering
                  </span>
                </div>
              </div>

              <h2 className="text-[24px] font-medium text-white tracking-[-0.02em] mb-3">
                Discovery &amp; Free Prototype Brief
              </h2>
              <p className="text-[14px] text-[#939393] leading-[1.6] mb-6">
                Work directly with the senior engineer building your website or
                web app. Zero account managers, fixed GBP/USD/EUR milestone
                pricing, and 100% GitHub code ownership.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#222222]">
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim%20Dev!%20I'd%20like%20to%20discuss%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#BAFF00] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-[#BAFF00]" />
                    <div>
                      <span className="block text-[14px] font-medium text-white">
                        Instant WhatsApp Chat
                      </span>
                      <span className="block text-[12px] text-[#939393]">
                        +92 319 6526604 (Replies &lt; 2 hrs)
                      </span>
                    </div>
                  </div>
                  <span className="text-[#BAFF00] group-hover:translate-x-0.5 transition-transform">
                    ↗
                  </span>
                </a>

                <a
                  href="mailto:contact@saimdev.site"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#161616] border border-[#262626] hover:border-[#BAFF00] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#BAFF00]" />
                    <div>
                      <span className="block text-[14px] font-medium text-white">
                        Direct Studio Email
                      </span>
                      <span className="block text-[12px] text-[#939393]">
                        contact@saimdev.site
                      </span>
                    </div>
                  </div>
                  <span className="text-[#BAFF00] group-hover:translate-x-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#222222] flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#939393]">
              <span>$0 Upfront Deposit</span>
              <span>•</span>
              <span>100% Source Code</span>
              <span>•</span>
              <span>Zero Monthly Retainers</span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 p-8 sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-[26px] font-medium text-[#0D0D0D]">
                  Your Project Brief Is Ready!
                </h3>
                <p className="text-[15px] text-[#595959] max-w-md mx-auto">
                  WhatsApp has opened in a new tab with your structured brief.
                  If it did not open automatically, click below:
                </p>
                <div className="pt-2 flex flex-col items-center gap-3">
                  <a
                    href={igLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#0D0D0D] text-white font-medium text-[15px] hover:bg-[#222222] transition-colors"
                  >
                    <span>Open WhatsApp with My Brief</span>
                    <span className="text-[#BAFF00]">↗</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[#595959] hover:text-[#0D0D0D] text-[13px] underline cursor-pointer mt-2"
                  >
                    Edit Form Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] uppercase tracking-[0.88px] text-[#595959]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Johnson"
                      className="w-full bg-[#F5F5F7] border border-[#E6E6E6] rounded-2xl px-4 py-3.5 text-[15px] text-[#0D0D0D] focus:outline-none focus:border-[#0D0D0D] transition-colors"
                    />
                    {errors.name && (
                      <span className="text-red-600 text-xs">{errors.name}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] uppercase tracking-[0.88px] text-[#595959]">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                      placeholder="e.g. Apex Studio"
                      className="w-full bg-[#F5F5F7] border border-[#E6E6E6] rounded-2xl px-4 py-3.5 text-[15px] text-[#0D0D0D] focus:outline-none focus:border-[#0D0D0D] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] uppercase tracking-[0.88px] text-[#595959]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@example.com"
                      className="w-full bg-[#F5F5F7] border border-[#E6E6E6] rounded-2xl px-4 py-3.5 text-[15px] text-[#0D0D0D] focus:outline-none focus:border-[#0D0D0D] transition-colors"
                    />
                    {errors.email && (
                      <span className="text-red-600 text-xs">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] uppercase tracking-[0.88px] text-[#595959]">
                      Current / Reference Website
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      placeholder="https://example.com"
                      className="w-full bg-[#F5F5F7] border border-[#E6E6E6] rounded-2xl px-4 py-3.5 text-[15px] text-[#0D0D0D] focus:outline-none focus:border-[#0D0D0D] transition-colors"
                    />
                  </div>
                </div>

                {/* Budget Selection (Guard 8 requires BUDGET_OPTIONS) */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.88px] text-[#595959]">
                    Project Budget Range
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {BUDGET_OPTIONS.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() =>
                          setFormData({ ...formData, budget: opt })
                        }
                        className={cn(
                          "text-left px-4 py-3 rounded-xl border text-[13px] font-medium transition-all cursor-pointer",
                          formData.budget === opt
                            ? "border-[#0D0D0D] bg-[#0D0D0D] text-[#BAFF00]"
                            : "border-[#E6E6E6] bg-[#F5F5F7] text-[#595959] hover:border-[#0D0D0D] hover:text-[#0D0D0D]"
                        )}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] uppercase tracking-[0.88px] text-[#595959]">
                    Project Details / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    placeholder="Tell us about your project goals, pages needed, timeline, or reference websites..."
                    className="w-full bg-[#F5F5F7] border border-[#E6E6E6] rounded-2xl p-4 text-[15px] text-[#0D0D0D] focus:outline-none focus:border-[#0D0D0D] transition-colors resize-none"
                  />
                  {errors.details && (
                    <span className="text-red-600 text-xs">
                      {errors.details}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0D0D0D] hover:bg-[#222222] text-white rounded-full py-4 px-7 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className="text-[15px] font-medium">
                    Submit Project Enquiry via WhatsApp ($0 Upfront)
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#BAFF00] text-[#0D0D0D] flex items-center justify-center font-bold">
                    ↗
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Studio Hours & Map */}
        <div className="mb-16 bg-[#0D0D0D] text-white rounded-3xl p-6 sm:p-8 border border-[#202020]">
          <StudioHoursAndMapCard />
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-[28px] sm:text-[36px] font-medium tracking-[-0.03em] text-[#0D0D0D] text-center mb-8">
            Why Work With {ownerFacts.voice === "I" ? "Me" : "Us"}?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Zap,
                title: "Fast Delivery",
                desc: "5–10 days swift project execution without compromising quality.",
              },
              {
                icon: Search,
                title: "SEO Ready",
                desc: "On-page SEO, schema markup, and Google Search Console indexing.",
              },
              {
                icon: Smartphone,
                title: "Mobile Responsive",
                desc: "Flawless layout and touch performance across all mobile devices.",
              },
              {
                icon: ShieldCheck,
                title: "Ongoing Support",
                desc: "14–30 days dedicated post-launch maintenance and support.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-7 border border-[#E6E6E6]"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#BAFF00] flex items-center justify-center mb-4">
                  <card.icon className="w-5 h-5 text-[#0D0D0D]" />
                </div>
                <h3 className="text-[#0D0D0D] font-medium mb-1.5 text-[17px]">
                  {card.title}
                </h3>
                <p className="text-[#595959] text-[14px] leading-[1.6]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[12px] uppercase tracking-[0.88px] text-[#595959] block mb-2">
              Quick Answers
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-medium tracking-[-0.03em] text-[#0D0D0D]">
              Frequently Asked Questions Before You Enquire
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "How much does a website cost for a UK business?",
                a: "Our transparent fixed pricing starts from £250 for a single high-converting landing page, £390 for a full multi-page business website, and £790 for a custom business flagship or ordering system. There are zero hidden monthly fees or agency markups — you pay once and own everything.",
              },
              {
                q: "How quickly can you build and launch my website?",
                a: "Landing pages are typically delivered within 3–5 business days. Full multi-page business websites take 5–7 days, and complete ordering or e-commerce systems take 7–14 days from brief to live production deployment.",
              },
              {
                q: "Do you work with UK businesses remotely?",
                a: "Yes. Saim Dev operates as a dedicated remote studio serving UK and European clients. All communication happens directly via WhatsApp or email — no account managers, no delays, just direct access to your lead developer.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-[#E6E6E6] px-6 py-5 cursor-pointer"
              >
                <summary className="flex items-center justify-between gap-4 list-none select-none focus:outline-none">
                  <span className="text-[#0D0D0D] text-[16px] font-medium">
                    {item.q}
                  </span>
                  <span className="text-[#0D0D0D] text-lg font-medium flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="pt-3 text-[#595959] text-[14px] leading-[1.6]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
        </div>
      </div>

      <RhSystemRows
        overline="DIRECT STUDIO ENGAGEMENT"
        title="How every consultation"
        titleMuted="moves straight into build"
        rows={[
          {
            num: "01",
            title: "2-Hour Direct Engineer Response",
            description:
              "Messages go straight to senior full-stack architect Saim on WhatsApp or email—zero sales reps or account blockers.",
            tags: ["WhatsApp Live", "< 2h Reply"],
          },
          {
            num: "02",
            title: "Fixed GBP / USD Scope Lock",
            description:
              "Clear one-time fee confirmed upfront from £250 with 100% source code ownership and zero monthly retainers.",
            tags: ["From £250", "£0 / mo Retainer"],
            href: "/pricing",
          },
          {
            num: "03",
            title: "$0 Upfront Live Staging Prototype",
            description:
              "Inspect your live Next.js preview URL across desktop and mobile before approving production deployment.",
            tags: ["Zero Upfront Risk", "99+ PageSpeed"],
            href: "/demos",
          },
        ]}
      />

      <SiteFooter theme="dark" />
    </div>
  );
};
