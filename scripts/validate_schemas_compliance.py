import os
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("Validating JSON-LD structure in all pages...")

pages = [
    'app/page.tsx',
    'app/layout.tsx',
    'app/about/page.tsx',
    'app/services/page.tsx',
    'app/services/takeaway-web-design/page.tsx',
    'app/nextjs-developer-uk/page.tsx',
    'app/case-studies/page.tsx',
    'app/blogs/page.tsx',
    'app/demos/page.tsx',
    'app/contact/page.tsx',
    'app/technologies/page.tsx',
    'app/tools/page.tsx',
    'app/tools/ppds-label-generator/page.tsx',
    'app/food-safety-templates/[slug]/page.tsx'
]

blog_dir = 'app/blog'
for slug in sorted(os.listdir(blog_dir)):
    p = os.path.join(blog_dir, slug, 'page.tsx')
    if os.path.exists(p):
        pages.append(p)

total_checked = 0
errors = []

for page in pages:
    with open(page, 'r', encoding='utf-8') as f:
        c = f.read()
    
    # Check for fake ratings/reviews
    if 'AggregateRating' in c or 'aggregateRating' in c:
        errors.append(f"Forbidden AggregateRating in {page}")
    if 'SearchAction' in c:
        errors.append(f"Forbidden SearchAction in {page}")
    
    # Check JSON-LD script tags
    script_count = len(re.findall(r'<script\s+type="application/ld\+json"', c))
    total_checked += script_count

print(f"Audited {len(pages)} source files with {total_checked} JSON-LD script blocks.")
if errors:
    for e in errors:
        print(f"❌ {e}")
    sys.exit(1)
else:
    print("🎉 ALL SCHEMAS FREE OF FAKE REVIEWS, RATINGS, OR SEARCHACTIONS!")
