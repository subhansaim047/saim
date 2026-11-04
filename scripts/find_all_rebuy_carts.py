import os
from bs4 import BeautifulSoup

rebuy_files = []
for root, dirs, files in os.walk('public/thejacketmaker'):
    for f in files:
        if f.endswith('.html'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
                txt = fp.read()
            if 'id="rebuy-cart"' in txt or 'class="rebuy-cart' in txt:
                rebuy_files.append(p)

print(f"Files containing rebuy-cart: {len(rebuy_files)}")
for rf in rebuy_files[:10]:
    print(rf)
