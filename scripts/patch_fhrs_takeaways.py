path = 'src/components/blog/BlogPostFhrsChecklist.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

target = '''          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-3">
            <span>By Saim Dev Food Safety Technical Team</span>
            <span>•</span>
            <span>Updated: October 2026</span>
            <span>•</span>
            <span>Reading time: 7 mins</span>
            <span>•</span>
            <span className="text-primary font-mono font-medium">Scannable Kitchen Guide</span>
          </div>'''

replacement = '''          <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-9 h-9 rounded-full border border-white/20 object-cover" width={36} height={36} />
              <div>
                <Link href="/about" className="font-semibold text-white hover:text-primary transition-colors">
                  Saim Dev
                </Link>
                <span className="block text-white/50 text-[11px]">Lead Commercial Kitchen Systems &amp; Web Compliance Engineer</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <span>Published: Oct 20, 2026</span>
              <span>•</span>
              <span>Updated: Oct 31, 2026</span>
              <span>•</span>
              <span className="text-primary font-mono font-medium">7 min read</span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Key Takeaways for UK Food Business Operators
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Three Scoring Pillars:</strong> EHOs assess food hygiene &amp; safety (0-25), structural condition (0-25), and confidence in management (0-30).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Zero-Tolerance Paperwork:</strong> A perfect kitchen without up-to-date SFBB diary logs cannot score higher than a 3 or 4.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Delivery Platform Impact:</strong> A 5-star FHRS rating drives higher ranking and trust on Just Eat, Deliveroo, and Uber Eats.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Free Daily Checklists:</strong> Use our free digital templates for <Link href="/food-safety-templates/daily-cleaning-schedule" className="text-primary underline font-medium">Daily Cleaning Schedules</Link> and <Link href="/food-safety-templates/fridge-temperature-record-sheet-pdf" className="text-primary underline font-medium">Fridge Temperature Logs</Link>.</span>
              </li>
            </ul>
          </div>'''

c_norm = c.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
if target_norm in c_norm:
    c_new = c_norm.replace(target_norm, replacement)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(c_new)
    print('Successfully patched BlogPostFhrsChecklist.tsx')
else:
    print('Target not found in normalized content')
