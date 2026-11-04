import re
from bs4 import BeautifulSoup

with open('public/thejacketmaker/index.html', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')
bg_els = soup.find_all(attrs={"data-bgset": True})
print(f"Total elements with data-bgset in index.html: {len(bg_els)}")

for i, el in enumerate(bg_els):
    bgset = el.get('data-bgset') or ''
    classes = el.get('class') or []
    style = el.get('style') or ''
    first_url = bgset.split()[0] if bgset else ''
    print(f"\n[{i}] classes: {' '.join(classes)}")
    print(f"    first_url: {first_url}")
    print(f"    has inline style: {'background-image' in style}")
