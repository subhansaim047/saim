import os
from bs4 import BeautifulSoup

dirs = ['public/anzaar', 'public/frenchyse', 'public/burger-garage', 'public/hotbite']

for d in dirs:
    print(f"\n=================== {d} ===================")
    for root, _, files in os.walk(d):
        for f in files:
            if f.endswith('.html'):
                p = os.path.join(root, f).replace('\\', '/')
                with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
                    soup = BeautifulSoup(fp.read(), 'html.parser')
                for img in soup.find_all('img'):
                    src = img.get('src', '')
                    alt = img.get('alt', None)
                    if alt is None or not alt.strip() or len(alt.strip()) < 6 or alt.strip().lower() in ['image', 'img', 'photo', 'icon', 'banner', 'logo', 'star', 'check', 'emoji', 'wraps']:
                        print(f"[{os.path.basename(p)}] src='{src}' alt='{alt}'")
