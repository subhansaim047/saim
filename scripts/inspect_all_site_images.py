import re
import os

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = re.findall(r'"slug":\s*"([^"]+)"', text)
titles = re.findall(r'"title":\s*"([^"]+)"', text)
thumbs = re.findall(r'"thumbUrl":\s*"([^"]+)"', text)
imgs = re.findall(r'"imgUrl":\s*"([^"]+)"', text)

print(f"Total templates in saim_templates.ts: {len(slugs)}")
print(f"Total thumbs: {len(thumbs)}")
print(f"Total imgs: {len(imgs)}")

# Check if these files actually exist on disk in public/
missing_thumbs = [th for th in thumbs if not os.path.exists('public' + th)]
missing_imgs = [im for im in imgs if not os.path.exists('public' + im)]

print(f"Missing thumbs on disk: {len(missing_thumbs)}")
print(f"Missing imgs on disk: {len(missing_imgs)}")

for s, t, th, im in list(zip(slugs, titles, thumbs, imgs))[:5]:
    print(f"  [{s}] '{t}': thumb={th}, img={im}")
