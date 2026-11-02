import os
import re

# 1. Update app/page.tsx
page_path = 'app/page.tsx'
with open(page_path, 'r', encoding='utf-8') as f:
    page_content = f.read()

# Replace takeaway specific description in metadata
old_desc = "Bespoke Next.js websites for UK small businesses and takeaways from £250. Fast load speeds, clean code ownership, built-in SEO, and zero monthly fees."
new_desc = "Bespoke Next.js websites for UK small businesses, ecommerce, and local brands from £250. Sub-second speed, clean code ownership, and zero monthly retainers."

if old_desc in page_content:
    page_content = page_content.replace(old_desc, new_desc)
    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(page_content)
    print("Updated app/page.tsx metadata description.")
else:
    print("app/page.tsx description already updated or not matched.")

# 2. Update src/components/AboutSection.tsx
about_path = 'src/components/AboutSection.tsx'
with open(about_path, 'r', encoding='utf-8') as f:
    about_content = f.read()

old_about_text = "Saim Dev is an independent Next.js web engineering studio that builds custom websites and commission-free ordering systems for UK small businesses from £250. Every website includes sub-second edge speeds, full code ownership, built-in technical SEO, and direct developer communication via WhatsApp without recurring monthly agency retainers."
new_about_text = "Saim Dev is an independent Next.js web engineering studio that builds custom websites, ecommerce stores, and high-performance digital platforms for UK small businesses from £250. Every website includes sub-second edge speeds, full code ownership, built-in technical SEO, and direct developer communication via WhatsApp without recurring monthly agency retainers."

if old_about_text in about_content:
    about_content = about_content.replace(old_about_text, new_about_text)
    with open(about_path, 'w', encoding='utf-8') as f:
        f.write(about_content)
    print("Updated src/components/AboutSection.tsx.")
else:
    print("AboutSection already updated or not matched.")

# 3. Update src/components/FeaturedToolsSection.tsx
tools_path = 'src/components/FeaturedToolsSection.tsx'
with open(tools_path, 'r', encoding='utf-8') as f:
    tools_content = f.read()

old_tools_badge = "<span>Free Operational Systems</span>"
new_tools_badge = "<span>Free Software Showcase &amp; Tools</span>"

old_tools_heading = "UK Restaurant &amp; Takeaway Kitchen Tools"
new_tools_heading = "Interactive Web Tools &amp; Systems"

old_tools_desc = "Free interactive calculators, digital due diligence logs, and printable SOPs engineered to help UK food businesses streamline operations and prepare for EHO audits."
new_tools_desc = "Explore custom interactive web applications built by our studio. From commercial compliance engines to business generators — engineered to demonstrate how bespoke web software automates complex business operations."

if old_tools_heading in tools_content:
    tools_content = tools_content.replace(old_tools_badge, new_tools_badge)
    tools_content = tools_content.replace(old_tools_heading, new_tools_heading)
    tools_content = tools_content.replace(old_tools_desc, new_tools_desc)
    with open(tools_path, 'w', encoding='utf-8') as f:
        f.write(tools_content)
    print("Updated src/components/FeaturedToolsSection.tsx.")
else:
    print("FeaturedToolsSection already updated or not matched.")

# 4. Update src/components/PricingSection.tsx
pricing_path = 'src/components/PricingSection.tsx'
with open(pricing_path, 'r', encoding='utf-8') as f:
    pricing_content = f.read()

# Replace the takeaway calculator import and component with the Industries Grid
old_import = 'import { CommissionSavingsCalculator } from "./CommissionSavingsCalculator";'
new_imports = '''import Link from "next/link";
import { 
  ShoppingBag, 
  Briefcase, 
  Sparkles, 
  Wrench, 
  UtensilsCrossed, 
  LayoutDashboard, 
  ArrowRight 
} from "lucide-react";'''

industries_component = """
const INDUSTRIES = [
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    desc: "Bespoke online storefronts with sub-second product filtering, Stripe/Apple Pay checkout, and zero marketplace commission.",
    badge: "Online Stores"
  },
  {
    icon: Briefcase,
    title: "Professional Services & B2B",
    desc: "Clean, authoritative websites for accountants, consultancies, law firms, and corporate advisors built to win client trust.",
    badge: "Corporate & B2B"
  },
  {
    icon: Sparkles,
    title: "Healthcare, Clinics & Salons",
    desc: "Interactive booking flows, patient trust signals, and service showcases for dentists, aesthetic clinics, and wellness studios.",
    badge: "Medical & Wellness"
  },
  {
    icon: Wrench,
    title: "Trades & Home Services",
    desc: "Lead-generating local websites for builders, electricians, plumbers, and mechanics with instant WhatsApp quote buttons.",
    badge: "Local Contractors"
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & Takeaways",
    desc: "Direct online ordering systems, allergen-filtered menus, and table reservations to eliminate 30% Just Eat and Deliveroo commissions.",
    badge: "Food & Dining",
    link: "/services/takeaway-web-design"
  },
  {
    icon: LayoutDashboard,
    title: "SaaS & Custom Web Apps",
    desc: "Custom web software, dynamic client dashboards, calculators, and member portals engineered on Next.js 16 and Node.js.",
    badge: "Custom Software"
  }
];
"""

old_calc_block = """        {/* TAKEAWAY & RESTAURANT COMMISSION CALCULATOR */}
        <div className="mt-20">
          <CommissionSavingsCalculator />
        </div>"""

new_industries_block = """        {/* CUSTOM WEB SOLUTIONS FOR EVERY INDUSTRY */}
        <div className="mt-20">
          <div className="relative max-w-6xl mx-auto rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-2 sm:p-3 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
            <div className="relative rounded-[calc(2.5rem-0.75rem)] bg-[#121212] p-6 sm:p-10 lg:p-12 border border-white/5 overflow-hidden">
              {/* Radial glow */}
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#FF4A1C]/[0.08] rounded-full blur-[140px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

              <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-3">
                  <span className="section-dot animate-pulse" />
                  <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/80">
                    Bespoke Engineering For Every Sector
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-white mb-3" style={{ letterSpacing: "-0.04em" }}>
                  Custom Websites For Every Business Model
                </h3>
                <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
                  We do not build cookie-cutter templates. Whether you sell products online, deliver professional advisory services, book patient appointments, or run a bustling hospitality venue, we architect the exact digital platform you need.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {INDUSTRIES.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <div
                      key={ind.title}
                      className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-[#FF4A1C]" />
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/5">
                            {ind.badge}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg font-medium text-white mb-2 tracking-tight">
                          {ind.title}
                        </h4>
                        <p className="text-xs text-white/60 leading-relaxed font-light">
                          {ind.desc}
                        </p>
                      </div>

                      {ind.link ? (
                        <div className="mt-4 pt-3 border-t border-white/5">
                          <Link
                            href={ind.link}
                            className="inline-flex items-center gap-1.5 text-xs text-[#FF4A1C] hover:text-white font-medium transition-colors"
                          >
                            <span>Explore Takeaway Solutions</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      ) : (
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-white/40">
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Custom Next.js Stack</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA banner */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
                <span>Have a unique project or custom software idea in mind?</span>
                <a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20custom%20website%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>"""

p_norm = pricing_content.replace('\r\n', '\n')
old_import_norm = old_import.replace('\r\n', '\n')
old_calc_norm = old_calc_block.replace('\r\n', '\n')

if old_import_norm in p_norm and old_calc_norm in p_norm:
    p_norm = p_norm.replace(old_import_norm, new_imports + "\n" + industries_component)
    p_norm = p_norm.replace(old_calc_norm, new_industries_block)
    with open(pricing_path, 'w', encoding='utf-8') as f:
        f.write(p_norm)
    print("Updated src/components/PricingSection.tsx with Industries Grid.")
else:
    print("PricingSection targets not matched.")
