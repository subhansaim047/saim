path = 'src/components/blog/BlogPostAllergenMatrix.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Direct answer intro + author link + Key Takeaways
old_header_end = '''          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-3xl">
          Learn how to create a fully compliant 14-allergen matrix for your commercial kitchen. A comprehensive, step-by-step masterclass on auditing recipes, preventing cross-contamination, and presenting accurate allergen declarations for UK restaurants and takeaways.
        </p>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
            <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12 rounded-full border border-primary/30 object-cover" />
            <div>
              <div className="text-sm font-bold text-white">Saim Dev Food Safety Architecture</div>
              <div className="text-xs text-white/50">Lead Commercial Kitchen Systems &amp; Web Compliance Engineer</div>
            </div>
          </div>
        </header>'''

new_header_end = '''          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            <strong>Direct Answer:</strong> To create a compliant 14-allergen matrix for UK restaurants, audit every recipe down to raw supplier ingredients, record whether each of the 14 statutory allergens is intentionally present (&quot;Contains&quot;) or presents a cross-contact risk (&quot;May Contain&quot;), and keep printed copies accessible to front-of-house staff for Environmental Health Officer (EHO) inspections.
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/70">
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
                <span><strong>Legal Duty:</strong> Declaring the 14 statutory allergens is mandatory under FIR 2014 and retained EU FIC 1169/2011.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>No Verbal Guesses:</strong> Verbal advice to diners must be backed by verifiable written recipe matrix sheets during an EHO inspection.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Hidden Vectors:</strong> Beware of hidden allergens in shared fryers, bouillon powders (celery), and soy sauce (wheat gluten).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Instant Digital Tool:</strong> You can build and print a free compliant matrix in under 5 minutes with our <Link href="/tools/allergen-matrix-generator" className="text-primary underline font-medium">Free Allergen Matrix Generator</Link>.</span>
              </li>
            </ul>
          </div>
        </header>'''

c = c.replace(old_header_end, new_header_end)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/blog/BlogPostAllergenMatrix.tsx")
