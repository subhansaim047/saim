# scripts/update_hero_section.py
import re

with open('src/components/HeroSection.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update lucide-react import
code = code.replace(
    'import { ArrowRight } from "lucide-react";',
    'import { ArrowRight, Calculator } from "lucide-react";'
)

# 2. Update navItems
old_nav = """const navItems = [
  { label: "Our story", href: "#our-story" },
  { label: "Services", href: "/services" },
  { label: "Tech Stack", href: "/technologies" },
  { label: "Free Tools", href: "/tools" },
  { label: "Demo Sites", href: "/demos" },
  { label: "Blogs", href: "/blogs" },
  { label: "Benefits", href: "#benefits" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];"""

new_nav = """const navItems = [
  { label: "Our story", href: "#our-story" },
  { label: "Services", href: "#services" },
  { label: "Estimator", href: "#estimator" },
  { label: "Compare", href: "#comparison" },
  { label: "Tech Stack", href: "/technologies" },
  { label: "160 Tools", href: "/tools" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];"""

code = code.replace(old_nav, new_nav)

# 3. Update Status pill and tech chips
old_status = """              {/* STATUS PILL */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 shadow-md">
                <span className="section-dot animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/90">
                  FULL-STACK WEB STUDIO
                </span>
              </div>

              {/* Tech chips */}
              <div className="flex items-center gap-0 pl-1">
                {["Next.js", "React", "Node.js"].map((tech, i, arr) => (
                  <span key={tech} className="flex items-center">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/45">
                      {tech}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-white/25 mx-2 text-[8px]">&#x2022;</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Tagline */}
              <div className="pl-1 mt-1.5 sm:mt-2">
                <span className="text-xs sm:text-sm font-normal text-white/70 tracking-tight leading-relaxed">
                  Better websites for{" "}
                  <span className="text-white font-medium underline decoration-[#FF4A1C] decoration-2 underline-offset-4">
                    ambitious local businesses
                  </span>
                  .
                </span>
              </div>"""

new_status = """              {/* STATUS PILL */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 shadow-md">
                <span className="section-dot animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-white/90">
                  FULL-STACK DIGITAL STUDIO
                </span>
              </div>

              {/* Tech chips */}
              <div className="flex items-center gap-0 pl-1 flex-wrap">
                {["Next.js 14+", "React", "TypeScript", "Node.js", "Shopify", "WordPress"].map((tech, i, arr) => (
                  <span key={tech} className="flex items-center">
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50">
                      {tech}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-white/25 mx-2 text-[8px]">&#x2022;</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Tagline */}
              <div className="pl-1 mt-1.5 sm:mt-2">
                <span className="text-xs sm:text-sm font-normal text-white/75 tracking-tight leading-relaxed">
                  High-converting websites &amp; software for{" "}
                  <span className="text-white font-medium underline decoration-[#FF4A1C] decoration-2 underline-offset-4">
                    ambitious businesses
                  </span>
                  .
                </span>
              </div>"""

code = code.replace(old_status, new_status)

# 4. Update H1 and sub-headline and dual CTAs
old_h1_block = """            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight text-white leading-tight mt-1 mb-2">
              Next.js Websites for UK Small Businesses — From £250
            </h1>

            {/* Sub-headline + description + CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3.5 sm:gap-4.5 pt-0.5"
            >
              {/* Highlighted sub-headline */}
              <div className="border-l-2 border-[#FF4A1C] pl-4 sm:pl-5 py-1">
                <h2 className="text-white text-base sm:text-lg md:text-xl font-medium tracking-tight">
                  Fast,{" "}
                  <span className="text-white/50">
                    SEO-Friendly Websites
                  </span>
                </h2>
                <p className="text-white/45 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-1.5">
                  CUSTOM DESIGN • MOBILE-FIRST PERFORMANCE • FULL OWNERSHIP
                </p>
              </div>

              {/* CTA — Sybiosme Nested Island Button */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <motion.a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20starting%20a%20website%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white hover:bg-neutral-100 text-black font-semibold rounded-full pl-5 pr-2 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 flex items-center gap-3 transition-all duration-300 group cursor-pointer self-start shadow-[0_4px_24px_rgba(255,255,255,0.15)] active:scale-[0.98]"
                >
                  <span className="text-black font-semibold text-xs sm:text-sm tracking-tight">Start on WhatsApp</span>
                  <div className="bg-black rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </motion.a>
              </div>
            </motion.div>"""

new_h1_block = """            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold tracking-tight text-white leading-tight mt-1 mb-2">
              Custom Web Development &amp; Digital Engineering Studio
            </h1>

            {/* Sub-headline + description + CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3.5 sm:gap-4.5 pt-0.5"
            >
              {/* Highlighted sub-headline */}
              <div className="border-l-2 border-[#FF4A1C] pl-4 sm:pl-5 py-1">
                <h2 className="text-white text-base sm:text-lg md:text-xl font-medium tracking-tight">
                  Bespoke Websites, E-Commerce{" "}
                  <span className="text-white/50">
                    &amp; Custom Web Apps
                  </span>
                </h2>
                <p className="text-white/50 text-[10px] sm:text-xs font-mono tracking-wider uppercase mt-1.5">
                  SUB-SECOND SPEED • 100% CODE OWNERSHIP • ZERO MONTHLY RETAINERS
                </p>
              </div>

              {/* Dual CTAs — Sybiosme Nested Island Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <motion.a
                  href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20starting%20a%20website%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white hover:bg-neutral-100 text-black font-semibold rounded-full pl-5 pr-2 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 flex items-center gap-3 transition-all duration-300 group cursor-pointer self-start shadow-[0_4px_24px_rgba(255,255,255,0.15)] active:scale-[0.98]"
                >
                  <span className="text-black font-semibold text-xs sm:text-sm tracking-tight">Start on WhatsApp</span>
                  <div className="bg-black rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </motion.a>

                <a
                  href="#estimator"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-medium tracking-tight transition-all duration-200"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#FF4A1C]" />
                  <span>Estimate Project Cost</span>
                </a>
              </div>
            </motion.div>"""

code = code.replace(old_h1_block, new_h1_block)

with open('src/components/HeroSection.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("HeroSection updated successfully.")
