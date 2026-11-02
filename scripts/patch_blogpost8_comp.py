path = 'src/components/blog/BlogPostHaccpPlan.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            How to Write a HACCP Plan for Your UK Food Business (7 Principles + Free Digital Plan Builder)\n          </h1>',
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            How to Write a HACCP Plan for UK Food Businesses (7 Principles Guide)\n          </h1>'
)

# 2. Direct answer intro + author byline + key takeaways
old_header_end = '''          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
            Learn how to write a compliant HACCP plan for your UK food business using the 7 foundational principles. A comprehensive, plain-English blueprint and digital plan builder for food business operators, head chefs, and catering managers to identify hazards, set critical limits, and establish corrective actions.
          </p>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12 rounded-full border border-primary/30 object-cover" />
            <div>
              <div className="text-sm font-bold text-white">Saim Dev Food Safety Architecture</div>
              <div className="text-xs text-white/50">Lead Commercial Kitchen Systems &amp; Web Architect</div>
            </div>
          </div>
        </header>'''

new_header_end = '''          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            <strong>Direct Answer:</strong> To write a compliant HACCP plan for a UK food business under Regulation (EC) No 852/2004, follow the 7 Codex principles: conduct a hazard analysis across all prep steps, identify Critical Control Points (CCPs), establish measurable critical limits (e.g. 75°C core cooking temp), set monitoring procedures, document corrective actions, verify system efficacy, and maintain audit records.
          </div>

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
              <span>Published: Oct 23, 2026</span>
              <span>•</span>
              <span>Updated: Oct 31, 2026</span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Key Takeaways for Food Business Operators
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Statutory Obligation:</strong> HACCP is legally required under Regulation (EC) No 852/2004; small caterers can satisfy this via FSA SFBB packs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>CCP Definition:</strong> A CCP is a step where control is essential to eliminate a biological, chemical, physical, or allergen risk (e.g. 75°C cooking).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Corrective Action Clarity:</strong> Clear protocols must define what happens if limits fail (e.g. continue cooking or discard food immediately).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Downloadable Templates:</strong> Build your hazard tables using our free <Link href="/food-safety-templates/haccp-plan-builder" className="text-primary underline font-medium">HACCP Plan Builder</Link> and <Link href="/food-safety-templates/haccp-flow-chart-template" className="text-primary underline font-medium">Process Flow Chart</Link>.</span>
              </li>
            </ul>
          </div>
        </header>'''

c = c.replace(old_header_end, new_header_end)

# Fix British English
c = c.replace('criminal offense', 'criminal offence')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/blog/BlogPostHaccpPlan.tsx")
