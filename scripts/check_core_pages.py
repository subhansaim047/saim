import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

core_pages = [
    'about', 'services', 'services/takeaway-web-design', 'nextjs-developer-uk',
    'case-studies', 'blogs', 'demos', 'contact', 'technologies',
    'cookie-policy', 'privacy', 'terms', 'disclaimer', 'tools', 'tools/ppds-label-generator'
]

for cp in core_pages:
    p = os.path.join('app', cp, 'page.tsx')
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f:
            c = f.read()
        t = re.search(r'title:\s*["\']([^"\']+)["\']', c)
        d_match = re.search(r'description:\s*["\']([^"\']+)["\']', c)
        can = re.search(r'canonical:\s*["\']([^"\']+)["\']', c)
        robots = 'robots:' in c
        languages = 'languages:' in c
        creator = 'creator:' in c
        title_str = t.group(1) if t else 'NONE'
        desc_str = d_match.group(1) if d_match else 'NONE'
        print(f"[{cp}]")
        print(f"  Title ({len(title_str)}): {title_str}")
        print(f"  Desc ({len(desc_str)}): {desc_str}")
        print(f"  Canonical: {can.group(1) if can else 'NONE'}")
        print(f"  robots: {robots} | languages: {languages} | creator: {creator}")
