import os
import re
from bs4 import BeautifulSoup
from PIL import Image

TARGETS = {
    '/tools': '.next/server/app/tools.html',
    '/services': '.next/server/app/services.html',
    '/demos': '.next/server/app/demos.html',
    '/contact': '.next/server/app/contact.html',
}

REQUIRED_OG_TAGS = [
    ('og:type', 'property'),
    ('og:title', 'property'),
    ('og:description', 'property'),
    ('og:url', 'property'),
    ('og:site_name', 'property'),
    ('og:image', 'property'),
    ('og:image:width', 'property'),
    ('og:image:height', 'property'),
    ('og:image:alt', 'property'),
    ('twitter:card', 'name'),
    ('twitter:title', 'name'),
    ('twitter:description', 'name'),
    ('twitter:image', 'name'),
]

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

print("=== RAW HTML VERIFICATION FOR 4 TARGET ROUTES ===")
for route, html_rel in TARGETS.items():
    html_path = os.path.join(base_dir, html_rel)
    if not os.path.exists(html_path):
        print(f"FAILED: File not found {html_path}")
        continue
    
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    
    title = soup.find('title').get_text() if soup.find('title') else ""
    desc_meta = soup.find('meta', attrs={'name': 'description'})
    desc = desc_meta['content'] if desc_meta else ""
    canon_link = soup.find('link', attrs={'rel': 'canonical'})
    canon = canon_link['href'] if canon_link else ""
    
    print(f"\n--- Route: {route} ---")
    print(f"Title: {title} ({len(title)}c)")
    print(f"Description: {desc} ({len(desc)}c)")
    print(f"Canonical: {canon}")
    
    all_passed = True
    for tag_name, attr_type in REQUIRED_OG_TAGS:
        el = soup.find('meta', attrs={attr_type: tag_name})
        if el and el.get('content'):
            print(f"  [PASS] {tag_name}: {el['content']}")
        else:
            print(f"  [FAIL] {tag_name} MISSING!")
            all_passed = False

print("\n=== LOCAL IMAGE ASSET VERIFICATION ===")
IMAGES = ['og-tools.png', 'og-services.png', 'og-demos.png', 'og-contact.png']
for img_name in IMAGES:
    img_path = os.path.join(base_dir, 'public', img_name)
    if os.path.exists(img_path):
        with Image.open(img_path) as im:
            print(f"  [PASS] public/{img_name}: {im.size} {im.format} ({os.path.getsize(img_path)} bytes)")
    else:
        print(f"  [FAIL] public/{img_name} does not exist!")
