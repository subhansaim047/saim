import os
import re

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

# ==============================================================================
# 1. src/components/CaseStudiesPage.tsx
# ==============================================================================
cs_path = os.path.join(base_dir, "src", "components", "CaseStudiesPage.tsx")
with open(cs_path, "r", encoding="utf-8") as f:
    cs = f.read().replace('\r\n', '\n')

cs = cs.replace(
    'import { useRouter } from "next/navigation";',
    'import Link from "next/link";'
)
cs = cs.replace('const router = useRouter();\n  const [', 'const [')
cs = cs.replace(
    '<button\n          onClick={() => router.push(\'/\')}\n          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"\n        >\n          <ArrowLeft className="w-4 h-4" />\n          <span>Back to Main Page</span>\n        </button>',
    '<Link\n          href="/"\n          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"\n        >\n          <ArrowLeft className="w-4 h-4" />\n          <span>Back to Main Page</span>\n        </Link>'
)

cs_guarantee_block = """        {/* AGENCY GUARANTEE BANNER */}
        <div className="bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
            Guaranteed Performance Contract
          </h2>
          <p className="text-white/70 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Every website built by Saim Dev includes a guaranteed 90+ Lighthouse speed benchmark, mobile responsiveness, and 100% full code ownership upon completion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-emerald-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Sub-Second Load Time
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 100% Mobile Usability
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Google Schema Indexing
            </span>
          </div>
        </div>

        {/* CONTEXTUAL INTERNAL LINKS */}
        <div className="mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/services"
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
          >
            <span className="text-xs font-mono text-primary uppercase block mb-1">Packaged Solutions</span>
            <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <span>Explore our web development services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            href="/nextjs-developer-uk"
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
          >
            <span className="text-xs font-mono text-primary uppercase block mb-1">UK Specialist</span>
            <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <span>Hire a Next.js developer for your UK business</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <Link
            href="/contact"
            className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
          >
            <span className="text-xs font-mono text-primary uppercase block mb-1">Project Enquiry</span>
            <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
              <span>Discuss your website project with our lead engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>"""

old_cs_guarantee = """        {/* AGENCY GUARANTEE BANNER */}
        <div className="bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
            Guaranteed Performance Contract
          </h2>
          <p className="text-white/70 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Every website built by Saim Dev includes a guaranteed 90+ Lighthouse speed benchmark, mobile responsiveness, and 100% full code ownership upon completion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-emerald-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Sub-Second Load Time
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> 100% Mobile Usability
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Google Schema Indexing
            </span>
          </div>
        </div>"""

if old_cs_guarantee in cs:
    cs = cs.replace(old_cs_guarantee, cs_guarantee_block)
else:
    print("WARNING: old_cs_guarantee not found")

old_cs_cta = """          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-all text-xs sm:text-sm cursor-pointer shadow-xl"
          >
            <span>Start Your Project on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>"""

new_cs_cta = """          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-4 rounded-full hover:bg-white transition-all text-xs sm:text-sm cursor-pointer shadow-xl"
            >
              <span>Start Your Project on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all text-xs sm:text-sm cursor-pointer border border-white/15"
            >
              <span>Discuss your website project via enquiry form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>"""

if old_cs_cta in cs:
    cs = cs.replace(old_cs_cta, new_cs_cta)
else:
    print("WARNING: old_cs_cta not found")

with open(cs_path, "w", encoding="utf-8") as f:
    f.write(cs)
print("Updated CaseStudiesPage.tsx successfully.")


# ==============================================================================
# 2. src/components/DemosPage.tsx
# ==============================================================================
demos_path = os.path.join(base_dir, "src", "components", "DemosPage.tsx")
with open(demos_path, "r", encoding="utf-8") as f:
    dm = f.read().replace('\r\n', '\n')

# Check ArrowRight import
if "ArrowRight" not in dm:
    dm = dm.replace('ArrowLeft, X', 'ArrowLeft, ArrowRight, X')

# Insert contextual cluster navigation right before </main> or before <FooterSection />
dm_cluster = """      {/* CONTEXTUAL CLUSTER NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-3">
            Ready for a Custom Website or Ordering System?
          </h2>
          <p className="text-white/60 text-xs sm:text-sm max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            These interactive demos showcase real Next.js performance. We build bespoke digital ordering platforms and high-converting websites from £250.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <Link
              href="/services"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Fixed-Price Plans</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Explore our web development services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/services/takeaway-web-design"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">0% Commission System</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Takeaway website design &amp; ordering</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Speed Benchmarks</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>View our website case studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Direct Consultation</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Discuss your website project with Saim</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />"""

if "<FooterSection />" in dm:
    dm = dm.replace("      <FooterSection />", dm_cluster, 1)
else:
    print("WARNING: FooterSection not found in DemosPage.tsx")

with open(demos_path, "w", encoding="utf-8") as f:
    f.write(dm)
print("Updated DemosPage.tsx successfully.")


# ==============================================================================
# 3. app/nextjs-developer-uk/page.tsx
# ==============================================================================
uk_path = os.path.join(base_dir, "app", "nextjs-developer-uk", "page.tsx")
with open(uk_path, "r", encoding="utf-8") as f:
    uk = f.read().replace('\r\n', '\n')

# In Hero CTA buttons row, add Link to /case-studies
hero_cta_target = """          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Next.js%20website%20for%20my%20UK%20business"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-black font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-xl cursor-pointer"
            >
              <span>Start on WhatsApp (+92 319 6526604)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>"""

hero_cta_new = """          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="https://wa.me/923196526604?text=Hi%20Saim,%20I'd%20like%20to%20discuss%20a%20Next.js%20website%20for%20my%20UK%20business"
              target="_blank"
              rel="noreferrer"
              className="bg-primary text-black font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 shadow-xl cursor-pointer"
            >
              <span>Start on WhatsApp (+92 319 6526604)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/case-studies"
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>View our website case studies</span>
              <ArrowRight className="w-4 h-4 text-primary" />
            </Link>
          </div>"""

if hero_cta_target in uk:
    uk = uk.replace(hero_cta_target, hero_cta_new)
else:
    print("WARNING: hero_cta_target not found in nextjs-developer-uk")

# Before UK FAQ section add contextual links banner
uk_faq_target = """        {/* UK FAQ */}
        <section className="py-16 sm:py-24 border-t border-white/10 bg-black">"""

uk_nav_block = """        {/* CONTEXTUAL NAVIGATION */}
        <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto border-t border-white/10">
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-medium text-white mb-1">Looking for packaged solutions or custom scopes?</h3>
              <p className="text-xs sm:text-sm text-white/60">Compare transparent deliverables, case study metrics, or get a direct project estimate.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/services"
                className="text-xs font-semibold px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Explore our web development services
              </Link>
              <Link
                href="/contact"
                className="text-xs font-semibold px-4 py-2.5 rounded-full bg-primary text-black hover:brightness-110 transition-colors"
              >
                Discuss your website project
              </Link>
            </div>
          </div>
        </section>

        {/* UK FAQ */}
        <section className="py-16 sm:py-24 border-t border-white/10 bg-black">"""

if uk_faq_target in uk:
    uk = uk.replace(uk_faq_target, uk_nav_block)
else:
    print("WARNING: uk_faq_target not found in nextjs-developer-uk")

# In Bottom CTA banner add contact link
uk_bottom_cta_target = """            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20Next.js%20website%20for%20my%20UK%20business"
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-black font-semibold text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-xl"
              >
                Chat on WhatsApp (+92 319 6526604)
              </a>
            </div>"""

uk_bottom_cta_new = """            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/923196526604?text=Hi%20Saim,%20I'm%20interested%20in%20a%20Next.js%20website%20for%20my%20UK%20business"
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-black font-semibold text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all shadow-xl"
              >
                Chat on WhatsApp (+92 319 6526604)
              </a>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all border border-white/15"
              >
                Discuss your website project via enquiry form
              </Link>
            </div>"""

if uk_bottom_cta_target in uk:
    uk = uk.replace(uk_bottom_cta_target, uk_bottom_cta_new)
else:
    print("WARNING: uk_bottom_cta_target not found in nextjs-developer-uk")

with open(uk_path, "w", encoding="utf-8") as f:
    f.write(uk)
print("Updated nextjs-developer-uk/page.tsx successfully.")


# ==============================================================================
# 4. src/components/ServicesPage.tsx
# ==============================================================================
srv_path = os.path.join(base_dir, "src", "components", "ServicesPage.tsx")
with open(srv_path, "r", encoding="utf-8") as f:
    srv = f.read().replace('\r\n', '\n')

srv = srv.replace(
    'import { useRouter } from "next/navigation";',
    'import Link from "next/link";'
)
srv = srv.replace('const router = useRouter();\n  const [openFaqIndex', 'const [openFaqIndex')
srv = srv.replace(
    '<button\n          onClick={() => router.push(\'/\')}\n          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"\n        >\n          <ArrowLeft className="w-4 h-4" />\n          <span>Back to Main Page</span>\n        </button>',
    '<Link\n          href="/"\n          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"\n        >\n          <ArrowLeft className="w-4 h-4" />\n          <span>Back to Main Page</span>\n        </Link>'
)

# Ensure dedicatedLink uses Link
srv = srv.replace(
    '<a\n                        href={service.dedicatedLink}\n                        className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 transition-colors"\n                      >\n                        <span>View Takeaway System Features & Live Demo Breakdown</span>\n                        <ArrowRight className="w-3.5 h-3.5" />\n                      </a>',
    '<Link\n                        href={service.dedicatedLink}\n                        className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 transition-colors"\n                      >\n                        <span>View Takeaway System Features & Live Demo Breakdown</span>\n                        <ArrowRight className="w-3.5 h-3.5" />\n                      </Link>'
)

# Before FAQ snippet, add Cross-Navigation Cluster
srv_faq_target = """        {/* 3. FAQ SNIPPET */}"""
srv_cluster_block = """        {/* CROSS-NAVIGATION CLUSTER */}
        <div className="mb-16 liquid-glass rounded-3xl p-8 border border-white/15">
          <h3 className="text-xl font-light text-white mb-2">Explore Related Engineering &amp; Client Work</h3>
          <p className="text-white/60 text-xs sm:text-sm mb-6 font-light">
            Discover our dedicated developer offerings, live interactive demos, and real performance metrics.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/nextjs-developer-uk"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Freelance Engineer</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Hire a Next.js developer for your UK business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/case-studies"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Performance Results</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>View our website case studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link
              href="/contact"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Fixed Quote</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Discuss your website project with Saim</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>

        {/* 3. FAQ SNIPPET */}"""

if srv_faq_target in srv:
    srv = srv.replace(srv_faq_target, srv_cluster_block)
else:
    print("WARNING: srv_faq_target not found in ServicesPage.tsx")

# In CTA section add Link to /contact
srv_cta_target = """          <a
            href="https://wa.me/923196526604?text=Hi%20Saim,%20I%27m%20interested%20in%20discussing%20a%20website%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-black font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all text-xs cursor-pointer shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>"""

srv_cta_new = """          <div className="flex flex-wrap items-center justify-center gap-4">
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

if srv_cta_target in srv:
    srv = srv.replace(srv_cta_target, srv_cta_new)
else:
    print("WARNING: srv_cta_target not found in ServicesPage.tsx")

with open(srv_path, "w", encoding="utf-8") as f:
    f.write(srv)
print("Updated ServicesPage.tsx successfully.")


# ==============================================================================
# 5. src/components/ContactPage.tsx
# ==============================================================================
cnt_path = os.path.join(base_dir, "src", "components", "ContactPage.tsx")
with open(cnt_path, "r", encoding="utf-8") as f:
    cnt = f.read().replace('\r\n', '\n')

cnt = cnt.replace(
    'import { useRouter } from "next/navigation";',
    'import Link from "next/link";'
)
cnt = cnt.replace('const router = useRouter();\n  const [formData', 'const [formData')
cnt = cnt.replace(
    '<button\n          onClick={() => router.push("/")}\n          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/70 hover:text-white text-xs font-mono uppercase tracking-wider transition-all mb-10 cursor-pointer hover:border-white/20"\n        >\n          <ArrowLeft className="w-3.5 h-3.5" />\n          <span>Back to Home</span>\n        </button>',
    '<Link\n          href="/"\n          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/70 hover:text-white text-xs font-mono uppercase tracking-wider transition-all mb-10 cursor-pointer hover:border-white/20"\n        >\n          <ArrowLeft className="w-3.5 h-3.5" />\n          <span>Back to Home</span>\n        </Link>'
)

cnt_why_target = """        {/* WHY WORK WITH US — Sybiosme Grid */}"""
cnt_links_block = """        {/* CONTEXTUAL NAVIGATION */}
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

        {/* WHY WORK WITH US — Sybiosme Grid */}"""

if cnt_why_target in cnt:
    cnt = cnt.replace(cnt_why_target, cnt_links_block)
else:
    print("WARNING: cnt_why_target not found in ContactPage.tsx")

with open(cnt_path, "w", encoding="utf-8") as f:
    f.write(cnt)
print("Updated ContactPage.tsx successfully.")
