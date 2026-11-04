import re
from bs4 import BeautifulSoup
import json

with open("audit/tjm_home_rendered.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")
imgs = soup.find_all("img")
print(f"Total img tags in rendered home: {len(imgs)}")

home_images = set()
for img in imgs:
    src = img.get("src")
    data_src = img.get("data-src")
    srcset = img.get("srcset")
    if src and not src.startswith("data:"):
        home_images.add(src)
    if data_src and not data_src.startswith("data:"):
        home_images.add(data_src)
    if srcset:
        for p in srcset.split(","):
            u = p.strip().split(" ")[0]
            if u and not u.startswith("data:"):
                home_images.add(u)

print(f"Unique home image URLs: {len(home_images)}")
sample = list(home_images)[:15]
for s in sample:
    print(" -", s)

with open("audit/tjm_home_images_only.json", "w", encoding="utf-8") as f:
    json.dump(sorted(list(home_images)), f, indent=2)
