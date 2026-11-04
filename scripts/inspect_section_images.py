from bs4 import BeautifulSoup
import os
from PIL import Image

with open('public/thejacketmaker/index.html', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

secs = soup.find_all('div', id=lambda x: x and x.startswith('shopify-section-'))
for s_idx in [4, 6, 8, 9, 10, 13, 16]:
    if s_idx < len(secs):
        sec = secs[s_idx]
        print(f"=== Section {s_idx} ({sec.get('id')[:35]}) ===")
        for img in sec.find_all('img')[:6]:
            src = img.get('src', '')
            fname = src.replace('/thejacketmaker/images/', '')
            fp = os.path.join('public', 'thejacketmaker', 'images', fname)
            if os.path.exists(fp):
                try:
                    with Image.open(fp) as im:
                        print(f"  {im.width}x{im.height} ({os.path.getsize(fp)/1024:.1f} KB) -> {fname[:50]}")
                except Exception:
                    pass
