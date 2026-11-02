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

print(f"Auditing metadata across {len(pages)} page files:")

for p in sorted(pages):
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()
    rel = os.path.relpath(p, app_dir)
    
    # Check metadata export
    has_meta_export = 'export const metadata' in content or 'export async function generateMetadata' in content
    
    # Extract title
    title_match = re.search(r'title:\s*["\']([^"\']+)["\']', content)
    title = title_match.group(1) if title_match else '(none / dynamic)'
    
    # Extract canonical
    canon_match = re.search(r'canonical:\s*["\']([^"\']+)["\']', content)
    canon = canon_match.group(1) if canon_match else '(none / dynamic)'
    
    # Check JSON-LD
    json_ld_matches = re.findall(r'application/ld\+json', content)
    
    print(f"\n[{rel}]")
    print(f"  Has Metadata: {has_meta_export}")
    print(f"  Title ({len(title)}): {title}")
    print(f"  Canonical: {canon}")
    print(f"  JSON-LD Blocks: {len(json_ld_matches)}")
