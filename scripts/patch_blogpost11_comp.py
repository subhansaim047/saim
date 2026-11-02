path = 'src/components/blog/BlogPostNatashasLaw.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# Update Header & Byline
old_byline = '''          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-3">
            <span>By Saim Dev Engineering Studio</span>
            <span>•</span>
            <span>Updated: October 2026</span>
            <span>•</span>
            <span>Reading time: 8 mins</span>
          </div>
        </header>'''

new_byline = '''          <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/70">
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
              <span>8 min read</span>
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
                <span><strong>Definition of PPDS:</strong> Any food packaged on the premises before selection by the customer (e.g. boxed sandwiches, salads, wrapped pastries).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Mandatory Label Contents:</strong> Must display the exact name of the food, complete ingredients in descending weight order, and 14 allergens highlighted.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Typography Standards:</strong> Minimum x-height font of 1.2mm (or 0.9mm for small packs &lt; 80cm²) with allergens emphasised in bold every time they appear.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Free Digital Generator:</strong> Generate, format, and print compliant adhesive labels instantly using our <Link href="/tools/ppds-label-generator" className="text-primary underline font-medium">Free PPDS Label Generator</Link>.</span>
              </li>
            </ul>
          </div>
        </header>'''

c = c.replace(old_byline, new_byline)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/blog/BlogPostNatashasLaw.tsx")
