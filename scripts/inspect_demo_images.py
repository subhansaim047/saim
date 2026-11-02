import os
import re
from bs4 import BeautifulSoup
from collections import defaultdict

demo_dirs = ['public/burger-garage', 'public/frenchyse', 'public/anzaar', 'public/hotbite']
stats = defaultdict(lambda: {'total': 0, 'missing_alt': 0, 'empty_alt': 0, 'generic_alt': 0})

all_demo_imgs = []

for d in demo_dirs:
    for root, dirs, files in os.walk(d):
        for f in files:
            if f.endswith('.html'):
                p = os.path.join(root, f).replace('\\', '/')
                with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
                    soup = BeautifulSoup(fp.read(), 'html.parser')
                imgs = soup.find_all('img')
                stats[d]['total'] += len(imgs)
                for img in imgs:
                    src = img.get('src', '')
                    alt = img.get('alt', None)
                    if alt is None:
                        stats[d]['missing_alt'] += 1
                        all_demo_imgs.append((p, src, 'MISSING'))
                    elif not alt.strip():
                        stats[d]['empty_alt'] += 1
                        all_demo_imgs.append((p, src, 'EMPTY'))
                    elif len(alt.strip()) < 6 or alt.strip().lower() in ['image', 'img', 'photo', 'icon', 'banner', 'logo', 'star', 'check', 'emoji']:
                        stats[d]['generic_alt'] += 1
                        all_demo_imgs.append((p, src, f"GENERIC: '{alt}'"))

for d, s in stats.items():
    print(f"{d}: Total <img>={s['total']} | Missing={s['missing_alt']} | Empty={s['empty_alt']} | Generic={s['generic_alt']}")

print("\nSample demo images with issues:")
for p, s, issue in all_demo_imgs[:15]:
    print(f"  {p}: {issue} (src='{s}')")
