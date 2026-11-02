import os, sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\ServicesPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Top Back Navigation with Breadcrumb
old_nav = """        {/* Top Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-white text-sm font-medium transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Main Page</span>
        </Link>"""

new_nav = """        {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-primary font-semibold" aria-current="page">
              Services
            </li>
          </ol>
        </nav>"""

if old_nav in content:
    content = content.replace(old_nav, new_nav, 1)
    print("Replaced old_nav successfully")
else:
    # Try normalized newlines
    old_nav_crlf = old_nav.replace("\n", "\r\n")
    new_nav_crlf = new_nav.replace("\n", "\r\n")
    if old_nav_crlf in content:
        content = content.replace(old_nav_crlf, new_nav_crlf, 1)
        print("Replaced old_nav (CRLF) successfully")
    else:
        print("Could not find old_nav")

# Expand cross navigation cluster to full Silo A mesh
old_cluster = """          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
          </div>"""

new_cluster = """          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/services/takeaway-web-design"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-amber-400/50 transition-all group"
            >
              <span className="text-xs font-mono text-amber-400 uppercase block mb-1">Takeaway Specialty</span>
              <span className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                <span>Takeaway web design from £250</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
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
              href="/technologies"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Tech Stack</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Explore our Next.js engineering stack</span>
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
              href="/demos"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 transition-all group"
            >
              <span className="text-xs font-mono text-primary uppercase block mb-1">Live Systems</span>
              <span className="text-sm font-medium text-white group-hover:text-primary transition-colors flex items-center justify-between">
                <span>Test interactive web ordering demos</span>
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
          </div>"""

if old_cluster in content:
    content = content.replace(old_cluster, new_cluster, 1)
    print("Replaced old_cluster successfully")
else:
    old_cluster_crlf = old_cluster.replace("\n", "\r\n")
    new_cluster_crlf = new_cluster.replace("\n", "\r\n")
    if old_cluster_crlf in content:
        content = content.replace(old_cluster_crlf, new_cluster_crlf, 1)
        print("Replaced old_cluster (CRLF) successfully")
    else:
        print("Could not find old_cluster")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)
print("Updated ServicesPage.tsx")
