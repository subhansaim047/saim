path = 'src/components/blog/BlogPostHygieneQuiz.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            Level 2 Food Hygiene Practice Test: 10 Critical Questions Every Kitchen Worker &amp; Chef Must Pass\n          </h1>',
    '<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-[1.12]">\n            Level 2 Food Hygiene Practice Test: Questions &amp; Answers for Kitchen Staff\n          </h1>'
)

# 2. Direct answer intro + author byline + key takeaways
old_header_end = '''          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Test your kitchen team with 10 critical food safety questions that every chef and kitchen worker must pass before an inspection. Review temperature danger zones, cross-contamination prevention, and statutory hygiene standards with our interactive practice quiz.
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
            <strong>Direct Answer:</strong> This Level 2 food hygiene practice test helps UK chefs, caterers, and food handlers revise core statutory requirements before council inspections or accredited examinations. Key legal topics include the 8°C chilled storage ceiling, 75°C core cooking temperature, 48-hour sickness exclusion rule, and cross-contamination prevention protocols.
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
              Key Takeaways for Kitchen Workers &amp; Managers
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Verbal EHO Spot Checks:</strong> Officers frequently question line cooks and porters directly on temperature limits and sanitisation steps.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>The 3 Critical Numbers:</strong> 8°C maximum legal chill, 63°C minimum hot hold, and 75°C core cook temp for 30 seconds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>48-Hour Sickness Rule:</strong> Any staff member with vomiting or diarrhoea must remain off-duty until 48 hours after symptoms cease.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Full Mock Quiz:</strong> Test your staff knowledge with our printable <Link href="/food-safety-templates/food-safety-quiz" className="text-primary underline font-medium">Food Safety Practice Quiz Template</Link>.</span>
              </li>
            </ul>
          </div>
        </header>'''

c = c.replace(old_header_end, new_header_end)

# Fix spelling
c = c.replace('diarrhea', 'diarrhoea')
c = c.replace('Memorize', 'Memorise')

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/blog/BlogPostHygieneQuiz.tsx")
