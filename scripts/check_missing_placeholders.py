import os, re
from bs4 import BeautifulSoup

with open('public/thejacketmaker/index.html', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

local_images = set(os.listdir('public/thejacketmaker/images'))
print(f"Total local images in folder: {len(local_images)}")

matches = 0
missing = []

for img in soup.find_all('img'):
    dsrc = img.get('data-src') or ''
    if '{width}' in dsrc:
        # extract base filename
        clean_url = dsrc.split('?')[0]
        base_name = clean_url.split('/')[-1]
        raw_name = base_name.replace('_{width}x', '').replace('{width}x', '')
        # check if raw_name or any variation exists in local_images
        found = False
        if raw_name in local_images:
            found = True
        else:
            # check case insensitive or partial stem
            stem = os.path.splitext(raw_name)[0]
            for lf in local_images:
                if stem.lower() in lf.lower():
                    found = True
                    break
        if found:
            matches += 1
        else:
            missing.append(raw_name)

print(f"Matched in local images: {matches}")
print(f"Missing from local images: {len(missing)}")
if missing:
    print("Missing sample:", missing[:10])
