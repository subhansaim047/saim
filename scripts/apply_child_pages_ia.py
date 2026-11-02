import os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

def update_file(rel_path, update_func):
    full_path = os.path.join(base_dir, rel_path)
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    new_content = update_func(content)
    if new_content != content:
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated: {rel_path}")
    else:
        print(f"No changes: {rel_path}")

# 1. app/nextjs-developer-uk/page.tsx
def fix_nextjs_uk(c):
    if "ukBreadcrumbSchema" not in c:
        schema_code = """const ukBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.saimdev.site/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.saimdev.site/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Next.js Developer UK",
      "item": "https://www.saimdev.site/nextjs-developer-uk"
    }
  ]
};

export default function NextJsDeveloperUkPage() {"""
        c = c.replace("export default function NextJsDeveloperUkPage() {", schema_code, 1)
        c = c.replace(
            '<script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(ukFaqSchema) }}\n      />',
            '<script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(ukFaqSchema) }}\n      />\n      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{ __html: JSON.stringify(ukBreadcrumbSchema) }}\n      />'
        )
    # Add visible breadcrumb before Sparkles badge
    if 'aria-label="Breadcrumb"' not in c:
        hero_marker = '<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono font-medium mb-6">'
        nav_html = """{/* Visible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-primary font-semibold" aria-current="page">
                Next.js Developer UK
              </li>
            </ol>
          </nav>\n\n          """
        c = c.replace(hero_marker, nav_html + hero_marker, 1)
    return c

# 2. app/technologies/page.tsx
def fix_tech_page(c):
    if "BreadcrumbList" not in c:
        c = c.replace(
            "export default function Page() {\n  return <TechnologiesPage />;\n}",
            """export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.saimdev.site/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Technologies & Expertise",
        "item": "https://www.saimdev.site/technologies"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <TechnologiesPage />
    </>
  );
}"""
        )
    return c

# 3. src/components/TechnologiesPage.tsx
def fix_tech_comp(c):
    if 'aria-label="Breadcrumb"' not in c:
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
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-primary font-semibold" aria-current="page">
              Technologies &amp; Expertise
            </li>
          </ol>
        </nav>"""
        if old_nav in c:
            c = c.replace(old_nav, new_nav, 1)
        elif old_nav.replace("\n", "\r\n") in c:
            c = c.replace(old_nav.replace("\n", "\r\n"), new_nav.replace("\n", "\r\n"), 1)
    return c

# 4. app/case-studies/page.tsx
def fix_case_page(c):
    if "BreadcrumbList" not in c:
        c = c.replace(
            "export default function Page() {\n  return <CaseStudiesPage />;\n}",
            """export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.saimdev.site/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Case Studies",
        "item": "https://www.saimdev.site/case-studies"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudiesPage />
    </>
  );
}"""
        )
    return c

# 5. src/components/CaseStudiesPage.tsx
def fix_case_comp(c):
    if 'aria-label="Breadcrumb"' not in c:
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
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-primary font-semibold" aria-current="page">
              Case Studies
            </li>
          </ol>
        </nav>"""
        if old_nav in c:
            c = c.replace(old_nav, new_nav, 1)
        elif old_nav.replace("\n", "\r\n") in c:
            c = c.replace(old_nav.replace("\n", "\r\n"), new_nav.replace("\n", "\r\n"), 1)
    return c

# 6. app/demos/page.tsx
def fix_demos_page(c):
    if "BreadcrumbList" not in c:
        c = c.replace(
            "export default function Page() {\n  return <DemosPage />;\n}",
            """export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.saimdev.site/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Live Demos",
        "item": "https://www.saimdev.site/demos"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <DemosPage />
    </>
  );
}"""
        )
    return c

# 7. src/components/DemosPage.tsx
def fix_demos_comp(c):
    if 'aria-label="Breadcrumb"' not in c:
        target = '<h1 className="text-3xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">'
        nav_html = """{/* Visible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-primary font-semibold" aria-current="page">
                Live Demos
              </li>
            </ol>
          </nav>\n\n          """
        c = c.replace(target, nav_html + target, 1)
    return c

# 8. app/contact/page.tsx
def fix_contact_page(c):
    if "BreadcrumbList" not in c:
        c = c.replace(
            "export default function Page() {\n  return <ContactPage />;\n}",
            """export default function Page() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.saimdev.site/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://www.saimdev.site/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPage />
    </>
  );
}"""
        )
    return c

# 9. src/components/ContactPage.tsx
def fix_contact_comp(c):
    if 'aria-label="Breadcrumb"' not in c:
        old_nav = """        {/* Top Back Navigation — Sybiosme Pill Style */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-white/70 hover:text-white text-xs font-mono uppercase tracking-wider transition-all mb-10 cursor-pointer hover:border-white/20"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>"""
        new_nav = """        {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-primary font-semibold" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>"""
        if old_nav in c:
            c = c.replace(old_nav, new_nav, 1)
        elif old_nav.replace("\n", "\r\n") in c:
            c = c.replace(old_nav.replace("\n", "\r\n"), new_nav.replace("\n", "\r\n"), 1)
    return c

# 10. app/about/page.tsx
def fix_about_page(c):
    if 'aria-label="Breadcrumb"' not in c:
        old_back = """          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-black">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>"""
        new_back = """          {/* Visible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="no-print mb-2">
            <ol className="flex items-center gap-1.5 text-xs text-gray-500 font-medium flex-wrap">
              <li>
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-gray-300">/</li>
              <li className="text-gray-900 font-semibold" aria-current="page">
                About Saim Dev
              </li>
            </ol>
          </nav>"""
        if old_back in c:
            c = c.replace(old_back, new_back, 1)
        elif old_back.replace("\n", "\r\n") in c:
            c = c.replace(old_back.replace("\n", "\r\n"), new_back.replace("\n", "\r\n"), 1)
    return c

# 11. app/services/takeaway-web-design/page.tsx
def fix_takeaway_page(c):
    if 'aria-label="Breadcrumb"' not in c:
        hero_tag = """        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-6">"""
        bc_nav = """        {/* Visible Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
          <ol className="flex items-center gap-1.5 text-xs text-white/60 font-medium flex-wrap">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li aria-hidden="true" className="text-white/30">/</li>
            <li className="text-amber-400 font-semibold" aria-current="page">
              Takeaway Web Design UK
            </li>
          </ol>
        </nav>\n\n"""
        if hero_tag in c:
            c = c.replace(hero_tag, bc_nav + hero_tag, 1)
        elif hero_tag.replace("\n", "\r\n") in c:
            c = c.replace(hero_tag.replace("\n", "\r\n"), bc_nav.replace("\n", "\r\n") + hero_tag.replace("\n", "\r\n"), 1)
    return c

# 12. app/tools/ppds-label-generator/page.tsx
def fix_ppds_page(c):
    if 'aria-label="Breadcrumb"' not in c:
        old_bc = """        {/* Top Breadcrumb & Metadata Badge */}
        <div className="no-print space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono flex-wrap">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:underline">Tools</Link>
            <span>/</span>
            <span className="text-neutral-900 font-bold">PPDS Label Generator</span>
          </div>"""
        new_bc = """        {/* Visible Breadcrumb Navigation */}
        <div className="no-print space-y-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono flex-wrap">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/tools" className="hover:underline">Tools</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-neutral-900 font-bold" aria-current="page">
                PPDS Label Generator
              </li>
            </ol>
          </nav>"""
        if old_bc in c:
            c = c.replace(old_bc, new_bc, 1)
        elif old_bc.replace("\n", "\r\n") in c:
            c = c.replace(old_bc.replace("\n", "\r\n"), new_bc.replace("\n", "\r\n"), 1)
    return c

update_file("app/nextjs-developer-uk/page.tsx", fix_nextjs_uk)
update_file("app/technologies/page.tsx", fix_tech_page)
update_file("src/components/TechnologiesPage.tsx", fix_tech_comp)
update_file("app/case-studies/page.tsx", fix_case_page)
update_file("src/components/CaseStudiesPage.tsx", fix_case_comp)
update_file("app/demos/page.tsx", fix_demos_page)
update_file("src/components/DemosPage.tsx", fix_demos_comp)
update_file("app/contact/page.tsx", fix_contact_page)
update_file("src/components/ContactPage.tsx", fix_contact_comp)
update_file("app/about/page.tsx", fix_about_page)
update_file("app/services/takeaway-web-design/page.tsx", fix_takeaway_page)
update_file("app/tools/ppds-label-generator/page.tsx", fix_ppds_page)
print("Finished child pages updates.")
