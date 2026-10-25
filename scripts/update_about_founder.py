with open('app/about/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

target = '''        {/* Studio Identity Card */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
              SD
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Transparent Remote Partnership</h2>
              <p className="text-xs text-gray-500 font-mono">Founder-Led Engineering • Clear Fixed Milestone Pricing</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            By operating remotely from Pakistan with direct communication via WhatsApp and Google Meet, we offer independent UK and European business owners senior-level Next.js craftsmanship at clear, fixed prices (from £250). There are no middle managers, no hidden agency overheads, and no monthly lock-in contracts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Direct WhatsApp &amp; Loom updates aligned with UK business hours.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Full source code ownership on GitHub with zero platform dependency.</span>
            </div>
          </div>
        </section>'''

replacement = '''        {/* Studio Identity Card */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold">
              SD
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Transparent Remote Partnership</h2>
              <p className="text-xs text-gray-500 font-mono">Founder-Led Engineering • Clear Fixed Milestone Pricing</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            By operating remotely from Pakistan with direct communication via WhatsApp and Google Meet, we offer independent UK and European business owners senior-level Next.js craftsmanship at clear, fixed prices (from £250). There are no middle managers, no hidden agency overheads, and no monthly lock-in contracts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Direct WhatsApp &amp; Loom updates aligned with UK business hours.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Full source code ownership on GitHub with zero platform dependency.</span>
            </div>
          </div>
        </section>

        {/* Founder & Lead Architect Profile */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-300 shadow-sm shrink-0">
                <img src="/saim-dev-logo.jpg" alt="Saim Dev - Founder" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Saim Dev</h2>
                <p className="text-xs text-amber-700 font-mono font-semibold">Founder &amp; Lead Next.js Architect</p>
                <p className="text-[11px] text-gray-500 mt-0.5">Specialist Full-Stack Web Developer serving UK &amp; European clients</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-xl w-fit">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Direct 1-on-1 Communication</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            As the founder of Saim Dev, I personally architect, write, and deploy every client website and food safety tool. With a sharp focus on Next.js Server Components, lightweight React UI, and technical SEO, I help independent business owners build digital systems that load in under 1 second, look agency-grade, and convert visitors into loyal customers.
          </p>
          
          {/* Verified Social & Professional Profiles (sameAs links) */}
          <div className="pt-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-bold block mb-3">
              Verified Profiles &amp; Social Channels (sameAs)
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="https://github.com/subhansaim047"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                GitHub: subhansaim047
              </a>
              <a
                href="https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                Contra: SAIMDEVELOPER
              </a>
              <a
                href="https://x.com/saimwebdev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                X: @saimwebdev
              </a>
              <a
                href="https://www.instagram.com/saim_agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                Instagram: @saim_agency
              </a>
              <a
                href="https://saimswebagency.quora.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                Quora: Saim Agency
              </a>
              <a
                href="https://www.tiktok.com/@saimdev.site"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                TikTok: @saimdev.site
              </a>
              <a
                href="https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 font-medium hover:bg-black hover:text-white hover:border-black transition-colors"
              >
                Threads: @saimdev.site
              </a>
            </div>
          </div>
        </section>'''

# Also add JSON-LD to export default function AboutPage()
schema_tag = '''export default function AboutPage() {
  const aboutPersonSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.saimdev.site/#person",
    "name": "Saim Dev",
    "jobTitle": "Founder & Lead Next.js Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Saim Dev",
      "url": "https://www.saimdev.site"
    },
    "url": "https://www.saimdev.site/about",
    "image": "https://www.saimdev.site/saim-dev-logo.jpg",
    "sameAs": [
      "https://github.com/subhansaim047",
      "https://contra.com/SAIMDEVELOPER/work?r=SAIMDEVELOPER",
      "https://x.com/saimwebdev",
      "https://www.instagram.com/saim_agency/",
      "https://saimswebagency.quora.com/",
      "https://www.tiktok.com/@saimdev.site",
      "https://www.threads.com/@saimdev.site?xmt=AQG0v6sjyGGlkQuy3_cq9N-v_-agRzwH4eLztiXxRA4Izog"
    ]
  };

  const aboutBreadcrumbSchema = {
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
        "name": "About",
        "item": "https://www.saimdev.site/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPersonSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbSchema) }}
      />'''

c = c.replace(target, replacement)
c = c.replace('export default function AboutPage() {\n  return (', schema_tag)
c = c.replace('    </div>\n  );\n}', '    </div>\n    </>\n  );\n}')

with open('app/about/page.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated app/about/page.tsx with founder card and JSON-LD schema")
