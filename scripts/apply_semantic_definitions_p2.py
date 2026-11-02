import os

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

# 8. nextjs-developer-uk/page.tsx -> Next.js & Core Web Vitals definitions
p8 = os.path.join(base_dir, "app/nextjs-developer-uk/page.tsx")
with open(p8, "r", encoding="utf-8") as f:
    c8 = f.read()

target8 = """        {/* WHY UK BUSINESSES CHOOSE SAIM DEV VS UK AGENCIES */}"""
replacement8 = """        {/* KEY TECHNICAL DEFINITIONS */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto mb-16">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10">
            <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-4 font-bold">
              Core Technical Concepts
            </h2>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-white/80">
              <div className="space-y-1.5">
                <dt className="text-white font-semibold text-sm">What is Next.js?</dt>
                <dd className="text-white/60 leading-relaxed font-light">
                  Next.js is a full-stack React web framework designed by Vercel. It combines server-side rendering (SSR), static site generation (SSG), and edge middleware to deliver fast, secure, and search-optimised websites for modern businesses.
                </dd>
              </div>
              <div className="space-y-1.5">
                <dt className="text-white font-semibold text-sm">What are Core Web Vitals?</dt>
                <dd className="text-white/60 leading-relaxed font-light">
                  Core Web Vitals are Google’s standardized metrics measuring real-world web page performance, primarily Largest Contentful Paint (loading speed &lt; 2.5s), Interaction to Next Paint (responsiveness &lt; 200ms), and Cumulative Layout Shift (visual stability &lt; 0.1).
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* WHY UK BUSINESSES CHOOSE SAIM DEV VS UK AGENCIES */}"""

if target8 in c8:
    c8 = c8.replace(target8, replacement8)
    with open(p8, "w", encoding="utf-8") as f:
        f.write(c8)
    print("Updated nextjs-developer-uk/page.tsx with Next.js & Core Web Vitals definitions.")
else:
    print("target8 already replaced or not found.")

# 9. ServicesPage.tsx -> Next.js & Core Web Vitals definitions
p9 = os.path.join(base_dir, "src/components/ServicesPage.tsx")
with open(p9, "r", encoding="utf-8") as f:
    c9 = f.read()

target9 = """        {/* 2. SERVICES LIST */}"""
replacement9 = """        {/* Key Architectural Standards */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8 border border-white/10 mb-12">
          <h2 className="text-xs font-mono uppercase tracking-widest text-primary mb-3 font-bold">
            Key Architectural Standards
          </h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-white/80">
            <div className="space-y-1">
              <dt className="text-white font-semibold text-sm">What is Next.js?</dt>
              <dd className="text-white/60 leading-relaxed font-light">
                An open-source React framework built by Vercel that delivers hybrid static generation and server-side rendering for ultra-fast page speeds, automatic code splitting, and native search engine discoverability.
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-white font-semibold text-sm">What are Core Web Vitals?</dt>
              <dd className="text-white/60 leading-relaxed font-light">
                Google’s standardized web vitals assessing real-world user page experience: Largest Contentful Paint (loading speed &lt; 2.5s), Interaction to Next Paint (interactivity &lt; 200ms), and Cumulative Layout Shift (visual stability &lt; 0.1).
              </dd>
            </div>
          </dl>
        </div>

        {/* 2. SERVICES LIST */}"""

if target9 in c9:
    c9 = c9.replace(target9, replacement9)
    with open(p9, "w", encoding="utf-8") as f:
        f.write(c9)
    print("Updated ServicesPage.tsx with Next.js & Core Web Vitals definitions.")
else:
    print("target9 already replaced or not found.")

# 10. takeaway-web-design/page.tsx -> Direct ordering website definition
p10 = os.path.join(base_dir, "app/services/takeaway-web-design/page.tsx")
with open(p10, "r", encoding="utf-8") as f:
    c10 = f.read()

target10 = """        {/* ── THE MATH: JUST EAT VS DIRECT SYSTEM ── */}"""
replacement10 = """        {/* Semantic Concept Definition */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/10">
          <dl className="space-y-2 text-xs sm:text-sm text-white/80">
            <dt className="text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
              What is a Direct Ordering Website?
            </dt>
            <dd className="text-white/70 leading-relaxed font-light">
              A direct ordering website is an independent digital ordering platform owned exclusively by a takeaway or restaurant. It enables local customers to browse menus, filter allergens, and submit collection or delivery orders directly via WhatsApp, SMS, or online payment gateways—eliminating third-party portal cuts and commission percentages.
            </dd>
          </dl>
        </div>

        {/* ── THE MATH: JUST EAT VS DIRECT SYSTEM ── */}"""

if target10 in c10:
    c10 = c10.replace(target10, replacement10)
    with open(p10, "w", encoding="utf-8") as f:
        f.write(c10)
    print("Updated takeaway-web-design/page.tsx with Direct ordering website definition.")
else:
    print("target10 already replaced or not found.")
