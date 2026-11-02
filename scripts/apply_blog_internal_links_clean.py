import os
import re

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

# ==============================================================================
# 1. src/components/BlogPost1Page.tsx
# ==============================================================================
p1 = os.path.join(base_dir, "src", "components", "BlogPost1Page.tsx")
with open(p1, "r", encoding="utf-8") as f:
    c1 = f.read()

# Add Link import
c1 = c1.replace(
    'import { useRouter } from "next/navigation";',
    'import { useRouter } from "next/navigation";\nimport Link from "next/link";'
)

# Replace top back button with real <Link>
c1 = re.sub(
    r'<button\s+onClick=\{\(\)\s*=>\s*router\.push\([\'"]/blogs[\'"]\)\}[^>]*>[\s\S]*?<ArrowLeft[^>]*>[\s\S]*?<span>All Articles</span>\s*</button>',
    '''<Link
            href="/blogs"
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>return to the Saim Dev blog</span>
          </Link>''',
    c1
)

# Replace the "Related articles coming soon" block with "Related resources" section
p1_resources = """{/* ── Related resources ── */}
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

c1 = re.sub(
    r'\{\s*/\*\s*──\s*Internal Links\s*──\s*\*/\s*\}[\s\S]*?Related articles coming soon[\s\S]*?</div>\s*</div>',
    p1_resources,
    c1
)

# Replace bottom back button
c1 = re.sub(
    r'<button\s+onClick=\{\(\)\s*=>\s*router\.push\([\'"]/blogs[\'"]\)\}[^>]*>[\s\S]*?<ArrowLeft[^>]*>[\s\S]*?Back to all blogs\s*</button>',
    '''<Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />return to the Saim Dev blog
          </Link>''',
    c1
)

with open(p1, "w", encoding="utf-8") as f:
    f.write(c1)
print("Updated BlogPost1Page.tsx successfully.")


# ==============================================================================
# 2. src/components/BlogPost2Page.tsx
# ==============================================================================
p2 = os.path.join(base_dir, "src", "components", "BlogPost2Page.tsx")
with open(p2, "r", encoding="utf-8") as f:
    c2 = f.read()

# Add Link import
c2 = c2.replace(
    'import { useRouter } from "next/navigation";',
    'import { useRouter } from "next/navigation";\nimport Link from "next/link";'
)

# Replace top back button
c2 = re.sub(
    r'<button\s+onClick=\{\(\)\s*=>\s*router\.push\([\'"]/blogs[\'"]\)\}[^>]*>[\s\S]*?<ArrowLeft[^>]*>[\s\S]*?<span>All Articles</span>\s*</button>',
    '''<Link
            href="/blogs"
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>return to the Saim Dev blog</span>
          </Link>''',
    c2
)

# Add Related resources section right before Author Card
p2_resources = """{/* ── Related resources ── */}
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

c2 = re.sub(
    r'\{\s*/\*\s*──\s*Author Card\s*──\s*\*/\s*\}',
    p2_resources,
    c2
)

# Replace bottom back button
c2 = re.sub(
    r'<button\s+onClick=\{\(\)\s*=>\s*router\.push\([\'"]/blogs[\'"]\)\}[^>]*>[\s\S]*?<ArrowLeft[^>]*>[\s\S]*?Back to all blogs\s*</button>',
    '''<Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />return to the Saim Dev blog
          </Link>''',
    c2
)

# Convert apply button to link to /contact
c2 = c2.replace(
    """          <a
            href="https://saimdev.site/"
            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-base cursor-pointer"
          >
            Apply here
            <ArrowRight className="w-4 h-4" />
          </a>""",
    """          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-8 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-base cursor-pointer"
          >
            discuss your website project
            <ArrowRight className="w-4 h-4" />
          </Link>"""
)

with open(p2, "w", encoding="utf-8") as f:
    f.write(c2)
print("Updated BlogPost2Page.tsx successfully.")


# ==============================================================================
# 3. src/components/BlogPost3Page.tsx
# ==============================================================================
p3 = os.path.join(base_dir, "src", "components", "BlogPost3Page.tsx")
with open(p3, "r", encoding="utf-8") as f:
    c3 = f.read()

# Add Link import
c3 = c3.replace(
    'import { useRouter } from "next/navigation";',
    'import { useRouter } from "next/navigation";\nimport Link from "next/link";'
)

# Replace top back button
c3 = re.sub(
    r'<button\s+onClick=\{\(\)\s*=>\s*router\.push\([\'"]/blogs[\'"]\)\}[^>]*>[\s\S]*?<ArrowLeft[^>]*>[\s\S]*?<span>All Articles</span>\s*</button>',
    '''<Link
            href="/blogs"
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>return to the Saim Dev blog</span>
          </Link>''',
    c3
)

# Add Related resources section right before Author Card
p3_resources = """{/* ── Related resources ── */}
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

c3 = re.sub(
    r'\{\s*/\*\s*──\s*Author Card\s*──\s*\*/\s*\}',
    p3_resources,
    c3
)

# Add bottom back button
bottom_back = """        </motion.div>

        {/* ── Back to Blog ── */}
        <div className="text-center mt-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />return to the Saim Dev blog
          </Link>
        </div>"""

c3 = re.sub(
    r'</motion\.div>\s*</div>\s*</div>\s*\);\s*};',
    bottom_back + "\n      </div>\n    </div>\n  );\n};",
    c3
)

with open(p3, "w", encoding="utf-8") as f:
    f.write(c3)
print("Updated BlogPost3Page.tsx successfully.")
