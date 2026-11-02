import os
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

print("=================================================");
print("   COMPREHENSIVE SEO METADATA & SCHEMA AUDIT     ");
print("=================================================\n");

core_routes = [
    ('/', 'app/page.tsx', True),
    ('/about', 'app/about/page.tsx', True),
    ('/services', 'app/services/page.tsx', True),
    ('/services/takeaway-web-design', 'app/services/takeaway-web-design/page.tsx', True),
    ('/nextjs-developer-uk', 'app/nextjs-developer-uk/page.tsx', True),
    ('/case-studies', 'app/case-studies/page.tsx', True),
    ('/blogs', 'app/blogs/page.tsx', True),
    ('/demos', 'app/demos/page.tsx', True),
    ('/contact', 'app/contact/page.tsx', True),
    ('/technologies', 'app/technologies/page.tsx', True),
    ('/cookie-policy', 'app/cookie-policy/page.tsx', False),
    ('/privacy', 'app/privacy/page.tsx', False),
    ('/terms', 'app/terms/page.tsx', False),
    ('/disclaimer', 'app/disclaimer/page.tsx', False),
    ('/tools', 'app/tools/page.tsx', True),
    ('/tools/ppds-label-generator', 'app/tools/ppds-label-generator/page.tsx', True),
]

blog_dir = 'app/blog'
blog_routes = []
for slug in sorted(os.listdir(blog_dir)):
    p = os.path.join(blog_dir, slug, 'page.tsx')
    if os.path.exists(p):
        blog_routes.append((f'/blog/{slug}', p, True))

all_audited = []
seen_titles = {}
seen_descriptions = {}
seen_canonicals = set()
errors = []

for route, file_path, should_index in core_routes + blog_routes:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Accurate title extraction handling quotes
    t_match = re.search(r'title:\s*(?:"([^"]+)"|\'([^\']+)\')', content)
    title = (t_match.group(1) or t_match.group(2)) if t_match else None
    
    # Accurate description extraction
    d_match = re.search(r'description:\s*(?:"([^"]+)"|\'([^\']+)\')', content)
    desc = (d_match.group(1) or d_match.group(2)) if d_match else None
    
    # Canonical
    c_match = re.search(r'canonical:\s*(?:"([^"]+)"|\'([^\']+)\')', content)
    canonical = (c_match.group(1) or c_match.group(2)) if c_match else None
    
    # Robots
    has_robots = 'robots:' in content
    is_indexable = 'index: true' in content if has_robots else False
    is_noindex = 'index: false' in content if has_robots else False
    
    # Languages
    has_lang = 'en-GB' in content
    
    # Open Graph
    has_og = 'openGraph:' in content
    has_og_img = 'og-image.png' in content or 'og-services.png' in content or 'og-tools.png' in content or 'og-contact.png' in content or 'og-demos.png' in content
    
    # Twitter
    has_tw = 'twitter:' in content
    has_tw_creator = '@saimwebdev' in content
    
    # Schemas
    schema_matches = re.findall(r'<script\s+type="application/ld\+json"[^>]*dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\(([^)]+)\)', content)
    
    report_entry = {
        'route': route,
        'title': title,
        'desc': desc,
        'canonical': canonical,
        'indexed': is_indexable if has_robots else 'default',
        'noindexed': is_noindex,
        'languages': has_lang,
        'og': has_og and has_og_img,
        'twitter': has_tw and has_tw_creator,
        'schemas': schema_matches
    }
    all_audited.append(report_entry)
    
    # Assertions
    if not title:
        errors.append(f"Missing title in {route} ({file_path})")
    elif title in seen_titles:
        errors.append(f"Duplicate title in {route}: '{title}' already in {seen_titles[title]}")
    else:
        seen_titles[title] = route
        
    if not desc:
        errors.append(f"Missing description in {route} ({file_path})")
    elif desc in seen_descriptions:
        errors.append(f"Duplicate description in {route}: '{desc[:40]}...' already in {seen_descriptions[desc]}")
    else:
        seen_descriptions[desc] = route
        
    expected_canonical = f"https://www.saimdev.site{route if route != '/' else ''}"
    if canonical != expected_canonical:
        errors.append(f"Canonical mismatch in {route}: got '{canonical}', expected '{expected_canonical}'")
    else:
        seen_canonicals.add(canonical)
        
    if should_index and not is_indexable:
        errors.append(f"Expected index: true for {route}")
    if not should_index and not is_noindex:
        errors.append(f"Expected index: false for {route}")
        
    if not has_lang:
        errors.append(f"Missing en-GB language alternate in {route}")
        
    if not (has_og and has_og_img):
        errors.append(f"Incomplete Open Graph in {route}")
        
    if not (has_tw and has_tw_creator):
        errors.append(f"Incomplete Twitter tags (missing creator) in {route}")

print(f"Audited {len(all_audited)} standalone routes:")
for a in all_audited:
    status_icon = "🟢 [INDEX]" if a['indexed'] else "⚪ [NOINDEX]"
    print(f"  {status_icon:<13} {a['route']:<55} | T: {len(a['title'] or '')}c | D: {len(a['desc'] or '')}c | schemas: {len(a['schemas'])}")

print(f"\nTotal Errors: {len(errors)}")
if errors:
    for e in errors:
        print(f"  ❌ {e}")
    sys.exit(1)
else:
    print("🎉 ALL METADATA & CANONICAL AUDITS PASSED WITH ZERO ERRORS!")
