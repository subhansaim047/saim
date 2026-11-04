import os

count = 0
found_pages = []
for root, dirs, files in os.walk('public/thejacketmaker/products'):
    for f in files:
        if f.endswith('.html'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
                txt = fp.read()
            if 'product-media__video-template' in txt or '<video' in txt:
                count += 1
                found_pages.append(p)

print(f"Total product pages with video templates: {count}")
for p in found_pages:
    print(p)
