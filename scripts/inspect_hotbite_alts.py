from bs4 import BeautifulSoup
import os

files = ['public/hotbite/index.html', 'public/hotbite/privacy-policy.html', 'public/hotbite/privacy-policy/index.html']
for f in files:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as fp:
            soup = BeautifulSoup(fp.read(), 'html.parser')
        print(f"=== {f} ===")
        for img in soup.find_all('img')[:15]:
            src = img.get('src', '')
            alt = img.get('alt', 'NO_ATTR')
            print(f"src={src[:40]} | alt={alt}")
