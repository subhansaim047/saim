"""
Polish Homepage content:
- Active voice
- British English spelling
- Clear answer-first 48-word summary in AboutSection
- Self-contained sections
"""

# 1. Update AboutSection.tsx
about_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\AboutSection.tsx"
with open(about_path, "r", encoding="utf-8") as f:
    about_code = f.read().replace("\r\n", "\n")

old_desc = """            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
              Saim Dev is an independent Next.js web engineering studio specializing in custom small business websites, 0% commission takeaway ordering systems, performance engineering, and local SEO architecture for UK & European clients from £250.
            </p>"""

new_desc = """            <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
              Saim Dev is an independent Next.js web engineering studio that builds custom websites and commission-free ordering systems for UK small businesses from £250. Every website includes sub-second edge speeds, full code ownership, built-in technical SEO, and direct developer communication via WhatsApp without recurring monthly agency retainers.
            </p>"""

if old_desc in about_code:
    about_code = about_code.replace(old_desc, new_desc, 1)
    with open(about_path, "w", encoding="utf-8") as f:
        f.write(about_code)
    print("Updated AboutSection.tsx with answer-first direct summary!")
else:
    print("Old desc in AboutSection.tsx not found")

# 2. Update PerformanceSection.tsx
perf_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\PerformanceSection.tsx"
with open(perf_path, "r", encoding="utf-8") as f:
    perf_code = f.read().replace("\r\n", "\n")

old_perf_p = """          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Good performance is crucial for the success of your website. Fast loading times
            increase session durations, boost conversion rates and improve search engine
            ranking. Optimised code, compressed data and the right server configuration
            provide you with a decisive competitive edge in the digital world.
          </p>"""

new_perf_p = """          <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light">
            Fast page speeds directly increase user session length, raise enquiry conversion rates,
            and boost Google search visibility. We engineer lightweight Next.js code, modern AVIF
            image compression, and edge cloud caching to give your UK business a distinct competitive
            advantage across desktop and mobile devices.
          </p>"""

if old_perf_p in perf_code:
    perf_code = perf_code.replace(old_perf_p, new_perf_p, 1)
    with open(perf_path, "w", encoding="utf-8") as f:
        f.write(perf_code)
    print("Updated PerformanceSection.tsx with active voice!")
else:
    print("Old p in PerformanceSection.tsx not found")

# 3. Update ProcessSection.tsx
proc_path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\ProcessSection.tsx"
with open(proc_path, "r", encoding="utf-8") as f:
    proc_code = f.read().replace("\r\n", "\n")

old_proc = """    step: "01",
    icon: PhoneCall,
    title: "Discovery Call",
    description:
      "We discuss your business goals, target clients, project scope, and design preferences.",
    glow: "from-[#FF4A1C]/35 to-transparent",
    iconHover: "group-hover:rotate-12 group-hover:scale-115",
    color: "text-[#FF4A1C]",
    borderHover: "group-hover:border-[#FF4A1C]/50 group-hover:shadow-[0_0_24px_rgba(255,74,28,0.25)]",
  },
  {
    step: "02",
    icon: Compass,
    title: "Strategy & Planning",
    description:
      "Structuring website architecture, page layout wireframes, and high-converting copy paths.",
    glow: "from-sky-500/35 to-transparent",
    iconHover: "group-hover:rotate-90 group-hover:scale-115",
    color: "text-sky-400",
    borderHover: "group-hover:border-sky-400/50 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]",
  },
  {
    step: "03",
    icon: Code2,
    title: "Design & Development",
    description:
      "Crafting pixel-perfect custom designs and building fast, sub-second clean code.",
    glow: "from-emerald-500/35 to-transparent",
    iconHover: "group-hover:scale-125",
    color: "text-emerald-400",
    borderHover: "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_24px_rgba(52,211,153,0.25)]",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Final testing, Google SEO indexing, live deployment, and 14–30 days dedicated support.",
"""

new_proc = """    step: "01",
    icon: PhoneCall,
    title: "Discovery & Brief",
    description:
      "We define your business goals, target clients, project scope, and design preferences.",
    glow: "from-[#FF4A1C]/35 to-transparent",
    iconHover: "group-hover:rotate-12 group-hover:scale-115",
    color: "text-[#FF4A1C]",
    borderHover: "group-hover:border-[#FF4A1C]/50 group-hover:shadow-[0_0_24px_rgba(255,74,28,0.25)]",
  },
  {
    step: "02",
    icon: Compass,
    title: "Strategy & Architecture",
    description:
      "We map your website architecture, page layout wireframes, and high-converting customer journeys.",
    glow: "from-sky-500/35 to-transparent",
    iconHover: "group-hover:rotate-90 group-hover:scale-115",
    color: "text-sky-400",
    borderHover: "group-hover:border-sky-400/50 group-hover:shadow-[0_0_24px_rgba(56,189,248,0.25)]",
  },
  {
    step: "03",
    icon: Code2,
    title: "Design & Development",
    description:
      "We engineer pixel-perfect designs with clean, sub-second Next.js code and mobile accessibility.",
    glow: "from-emerald-500/35 to-transparent",
    iconHover: "group-hover:scale-125",
    color: "text-emerald-400",
    borderHover: "group-hover:border-emerald-400/50 group-hover:shadow-[0_0_24px_rgba(52,211,153,0.25)]",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We test cross-browser speed, submit sitemaps to Google, deploy to edge servers, and provide 14–30 days of direct support.",
"""

if old_proc in proc_code:
    proc_code = proc_code.replace(old_proc, new_proc, 1)
    with open(proc_path, "w", encoding="utf-8") as f:
        f.write(proc_code)
    print("Updated ProcessSection.tsx with active voice and clear verbs!")
else:
    print("Old proc in ProcessSection.tsx not found")
