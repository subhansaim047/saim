path = 'src/components/blog/BlogPostCoolingGuide.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">\n              Commercial Kitchen Food Cooling Temperature Guide UK\n            </h1>',
    '<h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">\n              Commercial Kitchen Food Cooling Temperature Rules UK (90-Minute Guide)\n            </h1>'
)

# 2. Add Author byline and Key Takeaways Box right after Header
old_header_end = '''            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              Safe commercial food cooling, temperature control limits, bacterial risk prevention, and UK food hygiene standards.
            </p>
          </div>

          {/* ── OPENING DIRECT-ANSWER SECTION (FIRST 100 WORDS) ── */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-primary/20 text-white/90 leading-relaxed text-sm sm:text-base">
            <span className="text-primary font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Direct Answer: Safe Food Cooling in UK Catering
            </span>
            <p>
              In commercial catering, cooked food must be cooled safely to prevent foodborne illness. Rapid cooling reduces the time high-risk foods spend in the temperature danger zone where pathogenic bacteria multiply quickly. Food businesses across the UK must follow their site-specific food-safety management system alongside official FSA or FSS guidance. Because cooling rates depend on food density and equipment, procedures vary by kitchen.
            </p>
          </div>'''

new_header_end = '''            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
              Safe commercial food cooling, temperature control limits, bacterial risk prevention, and UK food hygiene standards.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/70">
              <div className="flex items-center gap-3">
                <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-9 h-9 rounded-full border border-white/20 object-cover" width={36} height={36} />
                <div>
                  <Link href="/about" className="font-semibold text-white hover:text-primary transition-colors">
                    Saim Dev
                  </Link>
                  <span className="block text-white/50 text-[11px]">Lead Commercial Kitchen Systems &amp; Web Architect</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/50">
                <span>Published: Oct 25, 2026</span>
                <span>•</span>
                <span>Updated: Oct 31, 2026</span>
                <span>•</span>
                <span>9 min read</span>
              </div>
            </div>

            {/* Key Takeaways Box */}
            <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 mb-8">
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Key Takeaways for UK Commercial Kitchens
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>The 90-Minute Rule:</strong> The FSA standard advises cooling hot foods to 8°C or below within 90 minutes before refrigerated storage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Danger Zone Prevention:</strong> Between 8°C and 63°C, bacteria like <em>Bacillus cereus</em> and <em>Clostridium perfringens</em> multiply rapidly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Shallow Stainless Trays:</strong> Divide large stews, curries, and sauces into shallow pans (&lt; 50mm) to allow core heat dissipation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Free Poster &amp; Logs:</strong> Download our free printable <Link href="/food-safety-templates/food-cooling-poster" className="text-primary underline font-medium">Food Cooling Poster</Link> and <Link href="/food-safety-templates/fridge-temperature-record-sheet-pdf" className="text-primary underline font-medium">Fridge Temperature Record Sheet</Link>.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ── OPENING DIRECT-ANSWER SECTION (FIRST 100 WORDS) ── */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-primary/20 text-white/90 leading-relaxed text-sm sm:text-base">
            <span className="text-primary font-mono text-xs uppercase tracking-wider font-semibold block mb-2">
              Direct Answer: Safe Food Cooling in UK Catering
            </span>
            <p>
              In UK commercial catering, cooked hot food must be cooled as rapidly as possible—ideally reaching 8°C or below within 90 minutes as recommended by the Food Standards Agency (FSA). Rapid cooling through shallow trays, ice baths, or blast chillers prevents spore germination and pathogenic bacterial multiplication across the 8°C to 63°C danger zone.
            </p>
          </div>'''

c = c.replace(old_header_end, new_header_end)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/blog/BlogPostCoolingGuide.tsx")
