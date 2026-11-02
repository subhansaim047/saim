import os

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

# ==============================================================================
# 1. src/components/BlogPost1Page.tsx
# ==============================================================================
p1 = os.path.join(base_dir, "src", "components", "BlogPost1Page.tsx")
with open(p1, "r", encoding="utf-8") as f:
    c1 = f.read().replace('\r\n', '\n')

# Add Link import if not present
if 'import Link from "next/link";' not in c1 and "import Link from 'next/link';" not in c1:
    c1 = c1.replace(
        'import { useRouter } from "next/navigation";',
        'import { useRouter } from "next/navigation";\nimport Link from "next/link";'
    )

# Replace top back button with real <Link>
c1 = c1.replace(
    """          <button
            onClick={() => router.push('/blogs')}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </button>""",
    """          <Link
            href="/blogs"
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>return to the Saim Dev blog</span>
          </Link>"""
)

# Replace the coming soon block with a rich "Related resources" section
old_p1_resources = """        {/*  Internal Links  */}
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

new_p1_resources = """        {/*  Related Resources  */}
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

if old_p1_resources in c1:
    c1 = c1.replace(old_p1_resources, new_p1_resources)
else:
    print("WARNING: old_p1_resources not found in BlogPost1Page.tsx")

# Replace bottom back button with real <Link>
c1 = c1.replace(
    """          <button onClick={() => router.push('/blogs')} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />Back to all blogs
          </button>""",
    """          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />return to the Saim Dev blog
          </Link>"""
)

# Convert lead gen CTA buttons to real links
c1 = c1.replace(
    """            <button onClick={() => router.push('/')} className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm cursor-pointer">
              Request a Free Audit
            </button>
            <button onClick={() => router.push('/')} className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-6 py-3 rounded-xl transition-colors text-sm cursor-pointer">
              View Pricing
            </button>""",
    """            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm cursor-pointer">
              discuss your website project
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-6 py-3 rounded-xl transition-colors text-sm cursor-pointer">
              fixed-price website development
            </Link>"""
)

with open(p1, "w", encoding="utf-8") as f:
    f.write(c1)
print("Updated BlogPost1Page.tsx successfully.")


# ==============================================================================
# 2. src/components/BlogPost2Page.tsx
# ==============================================================================
p2 = os.path.join(base_dir, "src", "components", "BlogPost2Page.tsx")
with open(p2, "r", encoding="utf-8") as f:
    c2 = f.read().replace('\r\n', '\n')

# Add Link import if not present
if 'import Link from "next/link";' not in c2 and "import Link from 'next/link';" not in c2:
    c2 = c2.replace(
        'import { useRouter } from "next/navigation";',
        'import { useRouter } from "next/navigation";\nimport Link from "next/link";'
    )

# Replace top back button with real <Link>
c2 = c2.replace(
    """          <button
            onClick={() => router.push('/blogs')}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </button>""",
    """          <Link
            href="/blogs"
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>return to the Saim Dev blog</span>
          </Link>"""
)

# Replace author card and bottom back button with Related resources + Author + Link
old_p2_end = """        {/*  Author Card  */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.35 }} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-10">
          <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-14 h-14 rounded-full object-cover border border-white/15 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">Saim Dev</p>
            <p className="text-white/40 text-xs mb-3">Full Stack Web Developer  Building business websites since 2020</p>
            <p className="text-white/55 text-sm leading-relaxed">
              We build high-performance, conversion-focused websites for growing businesses. Every site our studio delivers is fast, mobile-optimised, and built to generate real leads  not just look good.
            </p>
          </div>
        </motion.div>

        {/*  Back  */}
        <div className="text-center">
          <button onClick={() => router.push('/blogs')} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />Back to all blogs
          </button>
        </div>"""

# Check what actual string is in c2
author_snippet = "We build high-performance, conversion-focused websites for growing businesses."
idx_author = c2.find(author_snippet)
if idx_author != -1:
    print("Found author card in BlogPost2Page.tsx")

# Add Related resources section right before Author card in BlogPost2Page.tsx
p2_resources_block = """        {/*  Related Resources  */}
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
        </div>\n\n"""

target_before_author = """        {/*  Author Card  */}"""
if target_before_author in c2:
    c2 = c2.replace(target_before_author, p2_resources_block + target_before_author)
else:
    print("WARNING: target_before_author not found in BlogPost2Page.tsx")

# Replace bottom back button
c2 = c2.replace(
    """          <button onClick={() => router.push('/blogs')} className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />Back to all blogs
          </button>""",
    """          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />return to the Saim Dev blog
          </Link>"""
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
    c3 = f.read().replace('\r\n', '\n')

# Add Link import if not present
if 'import Link from "next/link";' not in c3 and "import Link from 'next/link';" not in c3:
    c3 = c3.replace(
        'import { useRouter } from "next/navigation";',
        'import { useRouter } from "next/navigation";\nimport Link from "next/link";'
    )

# Replace top back button with real <Link>
c3 = c3.replace(
    """          <button
            onClick={() => router.push("/blogs")}
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </button>""",
    """          <Link
            href="/blogs"
            className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>return to the Saim Dev blog</span>
          </Link>"""
)

# Add Related resources section right before Author card in BlogPost3Page.tsx
p3_resources_block = """        {/*  Related Resources  */}
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
        </div>\n\n"""

if target_before_author in c3:
    c3 = c3.replace(target_before_author, p3_resources_block + target_before_author)
else:
    print("WARNING: target_before_author not found in BlogPost3Page.tsx")

# Add bottom back button to BlogPost3Page.tsx before closing </div>
bottom_back_link = """        {/*  Back to Blog  */}
        <div className="text-center mt-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mx-auto cursor-pointer">
            <ArrowLeft className="w-4 h-4" />return to the Saim Dev blog
          </Link>
        </div>
      </div>
    </div>"""

target_c3_end = """        </motion.div>
      </div>
    </div>"""

if target_c3_end in c3:
    c3 = c3.replace(target_c3_end, "        </motion.div>\n\n" + bottom_back_link)
else:
    print("WARNING: target_c3_end not found in BlogPost3Page.tsx")

with open(p3, "w", encoding="utf-8") as f:
    f.write(c3)
print("Updated BlogPost3Page.tsx successfully.")
