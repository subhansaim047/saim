from bs4 import BeautifulSoup

with open('public/thejacketmaker/index.html', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

unresolved = []
for img in soup.find_all('img'):
    src = img.get('src') or ''
    dsrc = img.get('data-src') or ''
    if not src or '{width}' in src or 'thejacketmaker.pk' in src or 'cdn.shopify.com' in src:
        unresolved.append((src, dsrc, img.get('alt', '')))

print(f'Unresolved images in index.html: {len(unresolved)}')
for s, d, a in unresolved:
    print(f'alt="{a}" | src="{s[:40]}" | data-src="{d[:70]}"')
