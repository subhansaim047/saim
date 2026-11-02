path = 'src/components/blog/BlogPostChecklist.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            SFBB Opening &amp; Closing Checklists: The Daily Kitchen Routine That Helps You Prepare for a 5-Star Food Hygiene Rating\n          </h1>',
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            SFBB Daily Kitchen Opening &amp; Closing Checklist Guide (5-Star Hygiene Routine)\n          </h1>'
)

# 2. Direct answer intro + author byline + key takeaways
old_header_end = '''          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Establish an airtight daily kitchen routine with essential opening and closing checks that help you prepare for a top food hygiene rating. Includes temperature thresholds, corrective actions, and our free digital SFBB checklist tool.
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
            <strong>Direct Answer:</strong> The SFBB daily kitchen opening and closing checklist is the statutory food safety routine required by UK Environmental Health Officers (EHO). Completing morning fridge temperature logs, hot water checks, and evening sanitisation checks across the FSA 4 Cs (Cleaning, Cooking, Chilling, Cross-contamination) proves management confidence and protects your 5-star rating.
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
              Key Takeaways for UK Commercial Kitchens
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Confidence in Management:</strong> A pristine kitchen without completed SFBB opening/closing records will be downgraded to 1 or 2 stars by the EHO.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Morning Chilling Check:</strong> All refrigeration units must operate below 8°C (ideally 1°C–5°C) before accepting prep deliveries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Closing Food Protection:</strong> All high-risk foods must be cooled, covered, date-labelled, and bins emptied before locking up.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Free Print Templates:</strong> Download our free printable <Link href="/food-safety-templates/cleaning-schedule" className="text-primary underline font-medium">Cleaning Schedule Template</Link> and <Link href="/food-safety-templates/fridge-temperature-record-sheet-pdf" className="text-primary underline font-medium">Fridge Temperature Log Sheet</Link>.</span>
              </li>
            </ul>
          </div>
        </header>'''

c = c.replace(old_header_end, new_header_end)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/blog/BlogPostChecklist.tsx")
