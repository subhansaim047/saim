import os, sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\BlogsPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add visible breadcrumb in Hero
hero_target = """        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">"""

hero_replace = """        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Visible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-white font-medium" aria-current="page">
                Blog
              </li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">"""

if hero_target in content:
    content = content.replace(hero_target, hero_replace, 1)
    print("Replaced hero_target successfully")
else:
    hero_target_crlf = hero_target.replace("\n", "\r\n")
    hero_replace_crlf = hero_replace.replace("\n", "\r\n")
    if hero_target_crlf in content:
        content = content.replace(hero_target_crlf, hero_replace_crlf, 1)
        print("Replaced hero_target (CRLF) successfully")
    else:
        print("Could not find hero_target")

# 2. Add Topical Silo Navigation Cards above the blog grid
filter_section_end = """      {/* ── Category Filter Links ── */}
      <section className="px-4 sm:px-8 pb-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-primary text-black font-semibold shadow-md shadow-primary/20"
                  : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </section>"""

silo_nav_replace = """      {/* ── Topical Silo Banners ── */}
      <section className="px-4 sm:px-8 pb-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                Topical Silo A &bull; Web Engineering
              </span>
              <h2 className="text-base font-semibold text-white mb-1.5">
                Web Development &amp; Small Business Growth
              </h2>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                Insights on Next.js performance, local SEO, mobile conversions, and commission-free ordering systems.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-medium text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Fixed-Price Web Services from £250</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                Topical Silo B &bull; Hospitality Compliance
              </span>
              <h2 className="text-base font-semibold text-white mb-1.5">
                Food Safety, SFBB &amp; Kitchen Operations
              </h2>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                Practical playbooks on FSA standards, 14 statutory allergens, Natasha&apos;s Law, and 5-star EHO audits.
              </p>
            </div>
            <Link
              href="/tools"
              className="text-xs font-medium text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Access 160+ Free Food Safety Tools &amp; Logs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Category Filter Links ── */}
      <section className="px-4 sm:px-8 pb-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-primary text-black font-semibold shadow-md shadow-primary/20"
                  : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>
      </section>"""

if filter_section_end in content:
    content = content.replace(filter_section_end, silo_nav_replace, 1)
    print("Replaced filter_section_end successfully")
else:
    filter_section_end_crlf = filter_section_end.replace("\n", "\r\n")
    silo_nav_replace_crlf = silo_nav_replace.replace("\n", "\r\n")
    if filter_section_end_crlf in content:
        content = content.replace(filter_section_end_crlf, silo_nav_replace_crlf, 1)
        print("Replaced filter_section_end (CRLF) successfully")
    else:
        print("Could not find filter_section_end")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated BlogsPage.tsx")
