import os

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

# 1. Update src/components/TechnologiesPage.tsx
tech_file = os.path.join(base_dir, "src", "components", "TechnologiesPage.tsx")
with open(tech_file, "r", encoding="utf-8") as f:
    tech_content = f.read().replace('\r\n', '\n')

# Replace router with Link
tech_content = tech_content.replace(
    'import { useRouter } from "next/navigation";\nimport { ArrowLeft, Code2, Zap, Search, Bot, Cpu, ArrowRight } from "lucide-react";',
    'import Link from "next/link";\nimport { ArrowLeft, Code2, Zap, Search, Bot, Cpu, ArrowRight } from "lucide-react";'
)
tech_content = tech_content.replace('const router = useRouter();\n  return (', 'return (')
tech_content = tech_content.replace(
    '<button\n          onClick={() => router.push(\'/\')}\n          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"\n        >\n          <ArrowLeft className="w-4 h-4" />\n          <span>Back to Main Page</span>\n        </button>',
    '<Link\n          href="/"\n          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"\n        >\n          <ArrowLeft className="w-4 h-4" />\n          <span>Back to Main Page</span>\n        </Link>'
)

# In Next.js card add link
next_target = """            <div className="liquid-glass rounded-2xl p-6 border border-white/10">
              <span className="text-2xl mb-3 block">▲</span>
              <h3 className="text-white font-medium text-lg mb-1">Next.js</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">
                Server-side rendering, static site generation, and optimal edge routing.
              </p>
            </div>"""

next_replacement = """            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-2xl mb-3 block">▲</span>
                <h3 className="text-white font-medium text-lg mb-1">Next.js</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  Server-side rendering, static site generation, and optimal edge routing.
                </p>
              </div>
              <Link
                href="/nextjs-developer-uk"
                className="text-xs text-primary hover:underline font-medium inline-flex items-center gap-1 mt-3"
              >
                <span>Hire a Next.js developer for your UK business</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>"""

if next_target in tech_content:
    tech_content = tech_content.replace(next_target, next_replacement)
else:
    print("WARNING: next_target not found in TechnologiesPage.tsx")

# In Performance section add link to case studies
perf_target = """              <div className="flex items-center gap-3 text-xs font-mono text-emerald-400">
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">LCP &lt; 2.5s</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">CLS &lt; 0.1</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">INP &lt; 200ms</span>
              </div>
            </div>"""

perf_replacement = """              <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 mb-3">
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">LCP &lt; 2.5s</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">CLS &lt; 0.1</span>
                <span className="bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">INP &lt; 200ms</span>
              </div>
              <Link
                href="/case-studies"
                className="text-xs text-emerald-400 hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>View our website case studies for verified load times</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>"""

if perf_target in tech_content:
    tech_content = tech_content.replace(perf_target, perf_replacement)
else:
    print("WARNING: perf_target not found in TechnologiesPage.tsx")

# Before CTA add contextual navigation cluster
cta_pre_target = """        {/* 7. CTA */}"""
cluster_block = """        {/* CONTEXTUAL INTERNAL LINKS CLUSTER */}
        <div className="mb-16 liquid-glass rounded-3xl p-8 border border-white/15">
          <h2 className="text-xl sm:text-2xl font-light text-white mb-2">
            Explore Web Architecture &amp; Client Solutions
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mb-6 font-light">
            Discover how we apply modern engineering to build high-converting platforms for UK small businesses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Fixed-Price Plans</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Explore our web development services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/nextjs-developer-uk"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Specialist UK Freelancer</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Dedicated UK Next.js web development</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Client Proof</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Inspect verified website case studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Direct Consultation</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Discuss your website project with Saim</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* 7. CTA */}"""

if cta_pre_target in tech_content:
    tech_content = tech_content.replace(cta_pre_target, cluster_block)
else:
    print("WARNING: cta_pre_target not found in TechnologiesPage.tsx")

# In CTA add link to /contact
cta_btn_target = """          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all text-xs cursor-pointer shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>"""

cta_btn_replacement = """          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all text-xs cursor-pointer shadow-xl"
            >
              <span>Start Your Project on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all text-xs cursor-pointer border border-white/15"
            >
              <span>Discuss your website project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>"""

if cta_btn_target in tech_content:
    tech_content = tech_content.replace(cta_btn_target, cta_btn_replacement)
else:
    print("WARNING: cta_btn_target not found in TechnologiesPage.tsx")

with open(tech_file, "w", encoding="utf-8") as f:
    f.write(tech_content)
print("Updated TechnologiesPage.tsx successfully.")
