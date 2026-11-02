import re

# 1. Update app/blog/uk-food-hygiene-rating-scheme-5-star-checklist/page.tsx
with open('app/blog/uk-food-hygiene-rating-scheme-5-star-checklist/page.tsx', 'r', encoding='utf-8') as f:
    page_content = f.read()

page_content = page_content.replace(
    "title: '5-Star Food Hygiene Rating: UK EHO Checklist | Saim Dev'",
    "title: 'How to Get a 5-Star Food Hygiene Rating UK: EHO Checklist | Saim Dev'"
)
page_content = page_content.replace(
    "description: 'Complete UK inspection checklist to secure a 5-star Food Hygiene Rating. Practical tips for structure, hygiene practices, and confidence in management.'",
    "description: 'Complete UK inspection checklist on how to get a 5 star food hygiene rating. Practical guide to scoring 0-5 across food hygiene, structure, and management.'"
)
page_content = page_content.replace(
    '"@type": "Article"',
    '"@type": "BlogPosting"'
)
page_content = page_content.replace(
    '"dateModified": "2026-10-29"',
    '"dateModified": "2026-10-31"'
)

with open('app/blog/uk-food-hygiene-rating-scheme-5-star-checklist/page.tsx', 'w', encoding='utf-8') as f:
    f.write(page_content)

# 2. Update src/components/blog/BlogPostFhrsChecklist.tsx
with open('src/components/blog/BlogPostFhrsChecklist.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

# Update H1
c = c.replace(
    '<h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">\n            UK Food Hygiene Rating 5-Star Checklist for Restaurants and Takeaways\n          </h1>',
    '<h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">\n            How to Get a 5-Star Food Hygiene Rating: UK Restaurant &amp; Takeaway Checklist\n          </h1>'
)

# Direct answer intro + author byline + key takeaways
old_header_end = '''          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
            A practical, skimmable preparation checklist for UK restaurants, takeaways, and dark kitchens aiming for a top Food Hygiene Rating. Master the three EHO scoring pillars, avoid common downgrade traps, and access free daily digital record templates.
          </p>

          {/* Metadata Byline */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 border-t border-b border-white/10 py-3 mb-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />Published: 25 October 2026</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />12 min read</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-primary" />FSA &amp; EHO Scoring Aligned</span>
          </div>
        </header>'''

new_header_end = '''          <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 text-white/90 text-sm sm:text-base leading-relaxed mb-6">
            <strong>Direct Answer:</strong> To get a 5-star food hygiene rating in the UK, your business must score 0 to 5 points across all three Food Standards Agency (FSA) inspection pillars: hygienic food handling (cross-contamination and cooling), structural condition (cleanliness and ventilation), and confidence in management (complete SFBB records, temperature logs, and staff training).
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
              <span>Published: Oct 25, 2026</span>
              <span>•</span>
              <span>Updated: Oct 31, 2026</span>
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
                <span><strong>Three Scoring Pillars:</strong> EHOs assess food hygiene (0–25), structural compliance (0–25), and confidence in management (0–30). Lower scores equal higher ratings.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>The 5-Point Cap Rule:</strong> To achieve 5 stars, no individual pillar score can exceed 5 points, and the total score must not exceed 15–20 points.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Diary Records Are Mandatory:</strong> Spotless kitchens will fail if opening/closing SFBB diary sheets or fridge temperature logs are missing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span><strong>Free Audit Templates:</strong> Use our free printable <Link href="/food-safety-templates/restaurant-opening-checklist" className="text-primary underline font-medium">Opening Checklist</Link> and <Link href="/food-safety-templates/brc-audit" className="text-primary underline font-medium">Internal Hygiene Audit Sheet</Link>.</span>
              </li>
            </ul>
          </div>
        </header>'''

c = c.replace(old_header_end, new_header_end)

with open('src/components/blog/BlogPostFhrsChecklist.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated Blog 10 page and component")
