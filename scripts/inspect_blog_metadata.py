import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

blog_dir = 'app/blog'
for slug in sorted(os.listdir(blog_dir)):
    p = os.path.join(blog_dir, slug, 'page.tsx')
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()
        
        title_m = re.search(r'title:\s*["\']([^"\']+)["\']', content)
        desc_m = re.search(r'description:\s*["\']([^"\']+)["\']', content)
        og_img_m = re.search(r'images:\s*\[\s*["\']([^"\']+)["\']', content)
        if not og_img_m:
            og_img_m = re.search(r'url:\s*["\']([^"\']+\.(?:png|jpg|webp))["\']', content)
        
        canon_m = re.search(r'canonical:\s*["\']([^"\']+)["\']', content)
        
        # Schema checks
        date_pub_m = re.search(r'datePublished:\s*["\']([^"\']+)["\']', content)
        date_mod_m = re.search(r'dateModified:\s*["\']([^"\']+)["\']', content)
        author_m = re.search(r'name:\s*["\']([^"\']+)["\']', content)
        
        t = title_m.group(1) if title_m else 'NONE'
        d = desc_m.group(1) if desc_m else 'NONE'
        img = og_img_m.group(1) if og_img_m else 'NONE'
        canon = canon_m.group(1) if canon_m else 'NONE'
        pub = date_pub_m.group(1) if date_pub_m else 'NONE'
        mod = date_mod_m.group(1) if date_mod_m else 'NONE'
        
        print(f"\n[{slug}]")
        print(f"  Title ({len(t)}): {t}")
        print(f"  Desc ({len(d)}): {d}")
        print(f"  Canonical: {canon}")
        print(f"  OG Image: {img}")
        print(f"  datePublished: {pub} | dateModified: {mod}")
