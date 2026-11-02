import os

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

# 1. BlogPostChecklist.tsx -> SFBB definition
p1 = os.path.join(base_dir, "src/components/blog/BlogPostChecklist.tsx")
with open(p1, "r", encoding="utf-8") as f:
    c1 = f.read()

target1 = """        {/* ── Table of Contents ── */}"""
replacement1 = """        {/* ── Key Regulatory Definition ── */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white/90 mb-12">
          <dl className="space-y-2 text-sm leading-relaxed">
            <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold">What is SFBB (Safer Food, Better Business)?</dt>
            <dd className="text-white/80">
              Safer Food, Better Business (SFBB) is an established food safety management pack developed by the UK Food Standards Agency (FSA). It helps small catering and retail businesses comply with food hygiene regulations through documented procedures across cooking, cleaning, chilling, cross-contamination, and daily opening and closing checks.
            </dd>
          </dl>
        </div>

        {/* ── Table of Contents ── */}"""

assert target1 in c1, "target1 not found"
c1 = c1.replace(target1, replacement1)
with open(p1, "w", encoding="utf-8") as f:
    f.write(c1)
print("Updated BlogPostChecklist.tsx with SFBB definition.")

# 2. BlogPostHaccpPlan.tsx -> HACCP definition
p2 = os.path.join(base_dir, "src/components/blog/BlogPostHaccpPlan.tsx")
with open(p2, "r", encoding="utf-8") as f:
    c2 = f.read()

target2 = """        {/* ── Table of Contents ── */}"""
replacement2 = """        {/* ── Key Regulatory Definition ── */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white/90 mb-12">
          <dl className="space-y-2 text-sm leading-relaxed">
            <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold">What is HACCP (Hazard Analysis and Critical Control Point)?</dt>
            <dd className="text-white/80">
              Hazard Analysis and Critical Control Point (HACCP) is an internationally recognised, systematic food safety management system codified into UK law under Regulation (EC) No 852/2004. It identifies, evaluates, and controls biological, chemical, physical, and allergenic hazards at specific operational stages called Critical Control Points (CCPs).
            </dd>
          </dl>
        </div>

        {/* ── Table of Contents ── */}"""

assert target2 in c2, "target2 not found"
c2 = c2.replace(target2, replacement2)
with open(p2, "w", encoding="utf-8") as f:
    f.write(c2)
print("Updated BlogPostHaccpPlan.tsx with HACCP definition.")

# 3. BlogPostNatashasLaw.tsx -> Natasha's Law & PPDS definitions
p3 = os.path.join(base_dir, "src/components/blog/BlogPostNatashasLaw.tsx")
with open(p3, "r", encoding="utf-8") as f:
    c3 = f.read()

target3 = """          {/* Section 1 */}"""
replacement3 = """          {/* ── Key Regulatory Definitions ── */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white/90 mb-4">
            <dl className="space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold mb-1">What is Natasha’s Law?</dt>
                <dd className="text-white/80">
                  Natasha’s Law is the UK Food Information (Amendment) Regulations 2019, which took effect across England, Wales, Scotland, and Northern Ireland on 1 October 2021. It mandates that any food business selling Prepacked for Direct Sale (PPDS) food must display a label with a full ingredients list and clear emphasis of any of the 14 statutory allergens present.
                </dd>
              </div>
              <div className="pt-3 border-t border-white/10">
                <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold mb-1">What is PPDS (Prepacked for Direct Sale)?</dt>
                <dd className="text-white/80">
                  Prepacked for Direct Sale (PPDS) refers to food that is packaged on the same premises from which it is offered to consumers before it is ordered or selected. Common examples include boxed sandwiches, packaged salads, and bakery goods wrapped on-site before display.
                </dd>
              </div>
            </dl>
          </div>

          {/* Section 1 */}"""

assert target3 in c3, "target3 not found"
c3 = c3.replace(target3, replacement3)
with open(p3, "w", encoding="utf-8") as f:
    f.write(c3)
print("Updated BlogPostNatashasLaw.tsx with Natasha's Law & PPDS definitions.")

# 4. BlogPostAllergenMatrix.tsx -> 14 statutory allergens definition
p4 = os.path.join(base_dir, "src/components/blog/BlogPostAllergenMatrix.tsx")
with open(p4, "r", encoding="utf-8") as f:
    c4 = f.read()

target4 = """        {/* ── Table of Contents ── */}"""
replacement4 = """        {/* ── Key Regulatory Definition ── */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-white/90 mb-12">
          <dl className="space-y-2 text-sm leading-relaxed">
            <dt className="text-primary font-mono text-xs uppercase tracking-wider font-bold">What are the 14 statutory allergens?</dt>
            <dd className="text-white/80">
              Under UK food law (Regulation (EU) No 1169/2011 retained in UK law and the Food Information Regulations 2014), food businesses are legally required to declare 14 specific allergens whenever used as ingredients: celery, cereals containing gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, tree nuts, peanuts, sesame seeds, soya, and sulphur dioxide (or sulphites above 10mg/kg).
            </dd>
          </dl>
        </div>

        {/* ── Table of Contents ── */}"""

assert target4 in c4, "target4 not found"
c4 = c4.replace(target4, replacement4)
with open(p4, "w", encoding="utf-8") as f:
    f.write(c4)
print("Updated BlogPostAllergenMatrix.tsx with 14 statutory allergens definition.")

# 5. ppds-label-generator/page.tsx -> PPDS & Natasha's Law definitions
p5 = os.path.join(base_dir, "app/tools/ppds-label-generator/page.tsx")
with open(p5, "r", encoding="utf-8") as f:
    c5 = f.read()

target5 = """        {/* ── HOW TO USE STEP-BY-STEP GUIDE ── */}"""
replacement5 = """        {/* ── Regulatory Definitions List ── */}
        <div className="no-print bg-neutral-50 rounded-3xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-3">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
            Key Regulatory Definitions
          </h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-800">
            <div className="p-4 rounded-2xl bg-white border border-neutral-200">
              <dt className="font-bold text-neutral-950 mb-1">What is PPDS (Prepacked for Direct Sale)?</dt>
              <dd className="text-neutral-600 leading-relaxed">
                Food that is packaged at the same premises from which it is offered to consumers before it is ordered or selected. Examples include pre-boxed sandwiches in display chillers, bottled fresh juices, and packaged bakery goods.
              </dd>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-neutral-200">
              <dt className="font-bold text-neutral-950 mb-1">What is Natasha’s Law?</dt>
              <dd className="text-neutral-600 leading-relaxed">
                The Food Information (Amendment) Regulations 2019, in force across the UK since 1 October 2021. It requires all PPDS food to feature an explicit label showing the product name, full ingredients list, and clear emphasis for any of the 14 major allergens.
              </dd>
            </div>
          </dl>
        </div>

        {/* ── HOW TO USE STEP-BY-STEP GUIDE ── */}"""

assert target5 in c5, "target5 not found"
c5 = c5.replace(target5, replacement5)
with open(p5, "w", encoding="utf-8") as f:
    f.write(c5)
print("Updated ppds-label-generator/page.tsx with PPDS & Natasha's Law definitions.")

# 6. TemplateDetailPage.tsx -> HACCP, 14 Allergens, and SFBB definitions
p6 = os.path.join(base_dir, "src/components/TemplateDetailPage.tsx")
with open(p6, "r", encoding="utf-8") as f:
    c6 = f.read()

target6 = """        {/* Editorial Trust & Verification Meta Bar */}"""
replacement6 = """        {/* Contextual Regulatory Definition */}
        {isHaccpTool && (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs sm:text-sm text-slate-700 no-print">
            <dl className="space-y-1">
              <dt className="font-bold text-slate-900 text-xs sm:text-sm">What is HACCP?</dt>
              <dd className="leading-relaxed text-slate-600">
                Hazard Analysis and Critical Control Point (HACCP) is a systematic, preventative food safety management system that identifies, evaluates, and controls biological, chemical, physical, and allergenic hazards at specific operational stages called Critical Control Points (CCPs).
              </dd>
            </dl>
          </div>
        )}
        {isAllergenTool && (
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 text-xs sm:text-sm text-slate-700 no-print">
            <dl className="space-y-1">
              <dt className="font-bold text-amber-950 text-xs sm:text-sm">What are the 14 statutory allergens?</dt>
              <dd className="leading-relaxed text-slate-600">
                Under UK food law (Regulation (EU) No 1169/2011 retained in UK law and the Food Information Regulations 2014), food businesses must declare by law the presence of 14 major allergens: celery, cereals containing gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, tree nuts, peanuts, sesame seeds, soya, and sulphur dioxide (sulphites).
              </dd>
            </dl>
          </div>
        )}
        {isChecklistOrLog && (
          <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-5 text-xs sm:text-sm text-slate-700 no-print">
            <dl className="space-y-1">
              <dt className="font-bold text-blue-950 text-xs sm:text-sm">What is SFBB (Safer Food, Better Business)?</dt>
              <dd className="leading-relaxed text-slate-600">
                Safer Food, Better Business (SFBB) is a practical food safety management pack developed by the UK Food Standards Agency (FSA). It helps small catering and retail businesses comply with food hygiene regulations through documented procedures across cooking, cleaning, chilling, cross-contamination, and daily opening/closing checks.
              </dd>
            </dl>
          </div>
        )}

        {/* Editorial Trust & Verification Meta Bar */}"""

assert target6 in c6, "target6 not found"
c6 = c6.replace(target6, replacement6)
with open(p6, "w", encoding="utf-8") as f:
    f.write(c6)
print("Updated TemplateDetailPage.tsx with HACCP, Allergens, and SFBB definitions.")

# 7. TechnologiesPage.tsx -> Next.js & Core Web Vitals definitions
p7 = os.path.join(base_dir, "src/components/TechnologiesPage.tsx")
with open(p7, "r", encoding="utf-8") as f:
    c7 = f.read()

target7_next = """                <h3 className="text-white font-medium text-lg mb-1">Next.js</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  Server-side rendering, static site generation, and optimal edge routing.
                </p>"""
replacement7_next = """                <h3 className="text-white font-medium text-lg mb-1">Next.js</h3>
                <p className="text-white/60 text-xs font-light leading-relaxed mb-2">
                  Server-side rendering, static site generation, and optimal edge routing.
                </p>
                <dl className="pt-2 border-t border-white/10 text-xs">
                  <dt className="text-primary font-mono text-[11px] uppercase tracking-wider font-bold mb-0.5">What is Next.js?</dt>
                  <dd className="text-white/60 leading-relaxed font-light">
                    Next.js is an open-source React framework developed by Vercel that combines server-side rendering, static site generation, and edge routing to build ultra-fast, search-optimised web applications.
                  </dd>
                </dl>"""
assert target7_next in c7, "target7_next not found"
c7 = c7.replace(target7_next, replacement7_next)

target7_cwv = """            <div className="liquid-glass rounded-2xl p-7 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Core Web Vitals Optimization</h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-4">
                Sub-second LCP (Largest Contentful Paint &lt; 2.5s), minimal CLS (&lt; 0.1), and rapid INP (&lt; 200ms) for high Google search rankings.
              </p>"""
replacement7_cwv = """            <div className="liquid-glass rounded-2xl p-7 border border-white/10">
              <h3 className="text-white font-medium text-lg mb-2">Core Web Vitals Optimization</h3>
              <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed mb-3">
                Sub-second LCP (Largest Contentful Paint &lt; 2.5s), minimal CLS (&lt; 0.1), and rapid INP (&lt; 200ms) for high Google search rankings.
              </p>
              <dl className="mb-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                <dt className="text-primary font-mono text-[11px] uppercase tracking-wider font-bold mb-1">What are Core Web Vitals?</dt>
                <dd className="text-white/60 leading-relaxed font-light">
                  Core Web Vitals are a standardized set of real-world user experience metrics defined by Google that evaluate loading speed (LCP), interactivity responsiveness (INP), and visual stability (CLS).
                </dd>
              </dl>"""
assert target7_cwv in c7, "target7_cwv not found"
c7 = c7.replace(target7_cwv, replacement7_cwv)

with open(p7, "w", encoding="utf-8") as f:
    f.write(c7)
print("Updated TechnologiesPage.tsx with Next.js & Core Web Vitals definitions.")

# 8. nextjs-developer-uk/page.tsx -> Next.js & Core Web Vitals definitions
p8 = os.path.join(base_dir, "app/nextjs-developer-uk/page.tsx")
with open(p8, "r", encoding="utf-8") as f:
    c8 = f.read()

target8 = """        {/* WHAT I DELIVER */}"""
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

        {/* WHAT I DELIVER */}"""
assert target8 in c8, "target8 not found"
c8 = c8.replace(target8, replacement8)
with open(p8, "w", encoding="utf-8") as f:
    f.write(c8)
print("Updated nextjs-developer-uk/page.tsx with Next.js & Core Web Vitals definitions.")

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
assert target9 in c9, "target9 not found"
c9 = c9.replace(target9, replacement9)
with open(p9, "w", encoding="utf-8") as f:
    f.write(c9)
print("Updated ServicesPage.tsx with Next.js & Core Web Vitals definitions.")

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
assert target10 in c10, "target10 not found"
c10 = c10.replace(target10, replacement10)
with open(p10, "w", encoding="utf-8") as f:
    f.write(c10)
print("Updated takeaway-web-design/page.tsx with Direct ordering website definition.")
