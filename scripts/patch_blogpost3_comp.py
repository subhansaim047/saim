path = 'src/components/BlogPost3Page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    c = f.read()

# 1. Update Breadcrumb
c = c.replace(
    '<li className="text-white font-medium truncate" aria-current="page">Agency Launch 50% Off Special</li>',
    '<li className="text-white font-medium truncate" aria-current="page">Fixed-Price Bespoke Website Design Package UK</li>'
)

# 2. Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">\n            I Just Launched My Web Agency — And I\'m Offering <span className="text-primary">50% Off</span> to My First Clients\n          </h1>',
    '<h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-[1.15] tracking-tight">\n            Fixed-Price Bespoke Website Design Package UK (<span className="text-primary">50% Off Launch</span>)\n          </h1>'
)

# 3. Direct answer intro + author byline + key takeaways
old_intro = '''          <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-8">
          To celebrate the launch of my web agency, I am offering an exclusive 50% off discount to my first clients. Find out why I am offering this limited rate and how a high-performance Next.js website can act as the ultimate growth engine for your business.
        </p>

          <div className="flex items-center justify-between py-5 border-y border-white/10">
            <div className="flex items-center gap-3">
              <img src="/saim-dev-logo.jpg" alt="Saim Dev - Full Stack Web Developer & Restaurant Tech Specialist" width={40} height={40} loading="lazy" decoding="async" className="w-10 h-10 rounded-full border border-white/20" />
              <div>
                <p className="text-white font-semibold text-sm">Saim Dev</p>
                <p className="text-white/40 text-xs">Founder, Web Developer</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-xs font-medium">Published</p>
              <p className="text-white font-semibold text-sm">Sep 20, 2026</p>
            </div>
          </div>'''

new_intro = '''          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            <strong>Direct Answer:</strong> A fixed-price bespoke website design package provides UK businesses with custom-engineered Next.js architecture, complete mobile responsiveness, local SEO schema, and fast turnaround without the uncertainty of hourly billing or costly agency retainers. Our limited launch special offers full custom development at half the standard agency cost.
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-5 rounded-xl border border-white/10 bg-white/[0.02] mb-6 text-xs text-white/70">
            <div className="flex items-center gap-3">
              <img src="/saim-dev-logo.jpg" alt="Saim Dev" className="w-9 h-9 rounded-full border border-white/20 object-cover" width={36} height={36} />
              <div>
                <Link href="/about" className="font-semibold text-white hover:text-primary transition-colors">
                  Saim Dev
                </Link>
                <span className="block text-white/50 text-[11px]">Lead Next.js Architect & Full-Stack Specialist</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <span className="flex items-center gap-1.5">Sep 20, 2026 (Updated: Oct 31, 2026)</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="rounded-2xl border border-primary/25 bg-primary/5 p-6 mb-8">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Key Takeaways for UK Business Owners
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Fixed Milestone Pricing:</strong> Eliminates open-ended agency hourly billing with transparent deliverable commitments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Custom Next.js Engineering:</strong> 100% custom-coded architecture delivering sub-second load times and 95+ Core Web Vitals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Built-In Technical SEO:</strong> Complete JSON-LD schema markup, self-canonical tags, and local search optimization.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Complete Asset Ownership:</strong> You own the Git repository, domain, and assets with zero ongoing maintenance retainers.</span>
              </li>
            </ul>
          </div>'''

c = c.replace(old_intro, new_intro)

# 4. Add Package Scope Table in Section 3
scope_table = '''
            {/* Package Scope & Deliverables Table */}
            <div className="my-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 overflow-x-auto">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Bespoke Website Package Scope & Deliverables</h3>
              <p className="text-white/50 text-xs mb-5">Everything included in our fixed-price Next.js development sprint:</p>
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/15 text-white/70">
                    <th className="py-2.5 pr-4 font-semibold">Sprint Phase</th>
                    <th className="py-2.5 px-3 font-semibold text-primary">Core Deliverables</th>
                    <th className="py-2.5 pl-3 font-semibold text-white/90">Standard Timeline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/75">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">1. Discovery & Strategy</td>
                    <td className="py-3 px-3">Information architecture, competitor audit, primary keyword mapping</td>
                    <td className="py-3 pl-3">Days 1 – 2</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">2. Custom UI Engineering</td>
                    <td className="py-3 px-3">Mobile-first Next.js frontend, interactive components, responsive layout</td>
                    <td className="py-3 pl-3">Days 3 – 5</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">3. Technical SEO & Schema</td>
                    <td className="py-3 px-3">LocalBusiness, Organization, BreadcrumbList, WebP image compression</td>
                    <td className="py-3 pl-3">Days 6 – 7</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-white">4. Testing & Deployment</td>
                    <td className="py-3 px-3">Core Web Vitals validation, contact form verification, live launch</td>
                    <td className="py-3 pl-3">Days 8 – 10</td>
                  </tr>
                </tbody>
              </table>
            </div>
'''

c = c.replace(
    '</section>\n\n          {/* Section 4 */}',
    scope_table + '\n          </section>\n\n          {/* Section 4 */}'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated src/components/BlogPost3Page.tsx")
