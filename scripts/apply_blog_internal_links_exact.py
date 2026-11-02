import os

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

# ==============================================================================
# 1. BlogPost1Page.tsx
# ==============================================================================
f1 = os.path.join(base_dir, "src", "components", "BlogPost1Page.tsx")
with open(f1, "r", encoding="utf-8") as f:
    c1 = f.read().replace('\r\n', '\n')

c1 = c1.replace(
    'import { useRouter } from "next/navigation";',
    'import { useRouter } from "next/navigation";\nimport Link from "next/link";'
)

# Header back button
c1 = c1.replace(
    '''        <button
          onClick={() => router.push('/blogs')}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Blogs
        </button>''',
    '''        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>'''
)

# Replace the "Related articles coming soon" block
c1_old_coming_soon = """        {/* ── Internal Links ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-white/30 mb-4">Related articles coming soon</p>
          <div className="space-y-2 text-sm text-white/40">
            {["Local SEO Guide for Small Businesses", "Why Page Speed Directly Affects Your Revenue", "Google Business Profile: Complete Setup Guide", "How Much Should a Small Business Website Cost?", "Why Mobile Optimisation Is Non-Negotiable in 2026"].map((t, i) => (
              <p key={i} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                {t}
              </p>
            ))}
          </div>
        </div>"""

c1_new_resources = """        {/* ── Related resources ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-primary/80 mb-2">Related resources</p>
          <p className="text-white/60 text-xs sm:text-sm mb-5 font-light">
            Explore our engineering services, performance results, and direct project consultation:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link
              href="/services"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>fixed-price website development</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/nextjs-developer-uk"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>Next.js websites for UK businesses</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/case-studies"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>website case studies</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/contact"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>discuss your website project</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
          </div>
        </div>"""

if c1_old_coming_soon in c1:
    c1 = c1.replace(c1_old_coming_soon, c1_new_resources)
    print("Replaced c1_old_coming_soon successfully.")
else:
    print("WARNING: c1_old_coming_soon not found!")

# Bottom back button
c1_bottom_back_old = """        {/* ── Back ── */}
        <div className="text-center">
          <button onClick={() => router.push('/blogs')} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />Back to all blogs
          </button>
        </div>"""

c1_bottom_back_new = """        {/* ── Back ── */}
        <div className="text-center">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>"""

if c1_bottom_back_old in c1:
    c1 = c1.replace(c1_bottom_back_old, c1_bottom_back_new)
    print("Replaced c1_bottom_back_old successfully.")
else:
    print("WARNING: c1_bottom_back_old not found!")

with open(f1, "w", encoding="utf-8") as f:
    f.write(c1)
print("Saved BlogPost1Page.tsx")


# ==============================================================================
# 2. BlogPost2Page.tsx
# ==============================================================================
f2 = os.path.join(base_dir, "src", "components", "BlogPost2Page.tsx")
with open(f2, "r", encoding="utf-8") as f:
    c2 = f.read().replace('\r\n', '\n')

c2 = c2.replace(
    'import { useRouter } from "next/navigation";',
    'import { useRouter } from "next/navigation";\nimport Link from "next/link";'
)

# Header back button
c2 = c2.replace(
    '''        <button
          onClick={() => router.push('/blogs')}
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          All Blogs
        </button>''',
    '''        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>'''
)

# Add Related resources before Author Card
c2_target_author = """        {/* ── Author Card ── */}"""
c2_resources = """        {/* ── Related resources ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-primary/80 mb-2">Related resources</p>
          <p className="text-white/60 text-xs sm:text-sm mb-5 font-light">
            Looking to grow your business online? Explore our development services, verified results, and quotes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <Link
              href="/services"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>fixed-price website development</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/case-studies"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>website case studies</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/contact"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>discuss your website project</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* ── Author Card ── */}"""

if c2_target_author in c2:
    c2 = c2.replace(c2_target_author, c2_resources)
    print("Inserted c2_resources successfully.")
else:
    print("WARNING: c2_target_author not found!")

# Bottom back button
c2_bottom_back_old = """        {/* ── Back ── */}
        <div className="text-center">
          <button onClick={() => router.push('/blogs')} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />Back to all blogs
          </button>
        </div>"""

c2_bottom_back_new = """        {/* ── Back ── */}
        <div className="text-center">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>"""

if c2_bottom_back_old in c2:
    c2 = c2.replace(c2_bottom_back_old, c2_bottom_back_new)
    print("Replaced c2_bottom_back_old successfully.")
else:
    print("WARNING: c2_bottom_back_old not found!")

with open(f2, "w", encoding="utf-8") as f:
    f.write(c2)
print("Saved BlogPost2Page.tsx")


# ==============================================================================
# 3. BlogPost3Page.tsx
# ==============================================================================
f3 = os.path.join(base_dir, "src", "components", "BlogPost3Page.tsx")
with open(f3, "r", encoding="utf-8") as f:
    c3 = f.read().replace('\r\n', '\n')

c3 = c3.replace(
    'import { useRouter } from "next/navigation";',
    'import { useRouter } from "next/navigation";\nimport Link from "next/link";'
)

# Header back button
c3 = c3.replace(
    '''        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>''',
    '''        <Link
          href="/blogs"
          className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>return to the Saim Dev blog</span>
        </Link>'''
)

# Insert Related resources before Author Card
c3_target_author = """        {/* ── Author Card ── */}"""
c3_resources = """        {/* ── Related resources ── */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-8">
          <p className="text-xs font-bold tracking-widest uppercase text-primary/80 mb-2">Related resources</p>
          <p className="text-white/60 text-xs sm:text-sm mb-5 font-light">
            Learn more about our web development services, bespoke architecture, and direct quotes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <Link
              href="/services"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>fixed-price website development</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/nextjs-developer-uk"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>Next.js websites for UK businesses</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
            <Link
              href="/contact"
              className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>discuss your website project</span>
              <span className="text-primary text-xs font-mono">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* ── Author Card ── */}"""

if c3_target_author in c3:
    c3 = c3.replace(c3_target_author, c3_resources)
    print("Inserted c3_resources successfully.")
else:
    print("WARNING: c3_target_author not found!")

# Add bottom back button after Author Card
c3_author_end = """          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Saim Dev</p>
            <p className="text-white/40 text-xs mb-3">Full Stack Web Developer · Building business websites since 2020</p>
            <p className="text-white/55 text-sm leading-relaxed">
              We build high-performance, conversion-focused websites for growing businesses. Every site our studio delivers is fast, mobile-optimised, and built to generate real leads — not just look good.
            </p>
          </div>
        </motion.div>"""

c3_bottom_back = """          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Saim Dev</p>
            <p className="text-white/40 text-xs mb-3">Full Stack Web Developer · Building business websites since 2020</p>
            <p className="text-white/55 text-sm leading-relaxed">
              We build high-performance, conversion-focused websites for growing businesses. Every site our studio delivers is fast, mobile-optimised, and built to generate real leads — not just look good.
            </p>
          </div>
        </motion.div>

        {/* ── Back ── */}
        <div className="text-center mt-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>return to the Saim Dev blog</span>
          </Link>
        </div>"""

if c3_author_end in c3:
    c3 = c3.replace(c3_author_end, c3_bottom_back)
    print("Added c3 bottom back link successfully.")
else:
    print("WARNING: c3_author_end not found!")

with open(f3, "w", encoding="utf-8") as f:
    f.write(c3)
print("Saved BlogPost3Page.tsx")
