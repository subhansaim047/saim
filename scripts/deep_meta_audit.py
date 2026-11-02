import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

app_dir = 'app'
pages = []
for root, dirs, files in os.walk(app_dir):
    for f in files:
        if f.startswith('page.'):
            pages.append(os.path.join(root, f))

print("=== DEEP METADATA AUDIT ACROSS ALL PAGES ===")

for p in sorted(pages):
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    rel = os.path.relpath(p, app_dir)
    
    # Check title, description, canonical, robots, OG, Twitter
    has_title = 'title:' in content
    has_desc = 'description:' in content
    has_canonical = 'canonical:' in content
    has_og = 'openGraph:' in content
    has_twitter = 'twitter:' in content
    has_robots = 'robots:' in content
    
    # Check JSON-LD
    json_ld_types = re.findall(r'"@type":\s*"([^"]+)"', content)
    
    print(f"\n[{rel}]")
    print(f"  title: {has_title} | desc: {has_desc} | canonical: {has_canonical} | og: {has_og} | twitter: {has_twitter} | robots: {has_robots}")
    print(f"  JSON-LD types: {json_ld_types}")
