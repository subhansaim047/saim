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

report = []

for p in sorted(pages):
    rel = os.path.relpath(p, app_dir)
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()

    # Title
    t_match = re.search(r'title:\s*(?:["\']([^"\']+)["\']|`([^`]+)`)', content)
    title = t_match.group(1) or t_match.group(2) if t_match else None
    
    # Desc
    d_match = re.search(r'description:\s*(?:["\']([^"\']+)["\']|`([^`]+)`)', content)
    desc = d_match.group(1) or d_match.group(2) if d_match else None

    # Canonical
    c_match = re.search(r'canonical:\s*(?:["\']([^"\']+)["\']|`([^`]+)`)', content)
    canonical = c_match.group(1) or c_match.group(2) if c_match else None

    # Languages
    has_lang = 'en-GB' in content and 'languages' in content

    # Robots
    has_robots = 'robots:' in content

    # OG
    has_og = 'openGraph:' in content
    has_og_title = 'openGraph:' in content and 'title:' in content[content.find('openGraph:'):content.find('openGraph:')+400]
    has_og_desc = 'openGraph:' in content and 'description:' in content[content.find('openGraph:'):content.find('openGraph:')+400]
    has_og_url = 'openGraph:' in content and 'url:' in content[content.find('openGraph:'):content.find('openGraph:')+400]
    has_og_image = 'openGraph:' in content and 'images:' in content[content.find('openGraph:'):content.find('openGraph:')+400]

    # Twitter
    has_twitter = 'twitter:' in content

    # Schemas
    schema_types = re.findall(r'"@type":\s*"([^"]+)"', content)

    report.append({
        'rel': rel,
        'has_meta': 'export const metadata' in content or 'generateMetadata' in content,
        'title': title,
        'desc': desc,
        'canonical': canonical,
        'has_lang': has_lang,
        'has_robots': has_robots,
        'has_og': has_og,
        'has_og_image': has_og_image,
        'has_twitter': has_twitter,
        'schemas': schema_types
    })

print(f"{'Page':<45} | {'Meta':<5} | {'Title (Len)':<40} | {'Canon':<6} | {'OG':<5} | {'Twit':<5} | {'Robots':<6} | {'Lang':<5} | {'Schemas'}")
print("-" * 140)
for r in report:
    t_str = f"{r['title'][:32]} ({len(r['title'])})" if r['title'] else "MISSING"
    c_str = "YES" if r['canonical'] else "NO"
    og_str = "YES" if r['has_og'] and r['has_og_image'] else "NO"
    tw_str = "YES" if r['has_twitter'] else "NO"
    rb_str = "YES" if r['has_robots'] else "NO"
    lg_str = "YES" if r['has_lang'] else "NO"
    meta_str = "YES" if r['has_meta'] else "NO"
    sc_str = ", ".join(set(r['schemas'])) if r['schemas'] else "none"
    print(f"{r['rel']:<45} | {meta_str:<5} | {t_str:<40} | {c_str:<6} | {og_str:<5} | {tw_str:<5} | {rb_str:<6} | {lg_str:<5} | {sc_str}")
