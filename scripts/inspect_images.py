import re
from bs4 import BeautifulSoup
from urllib.parse import urlparse

with open("audit/idrees_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

img_urls = set()
for img in soup.find_all("img"):
    src = img.get("src")
    if src:
        img_urls.add(src)
    srcset = img.get("srcset")
    if srcset:
        # extract all urls in srcset
        items = srcset.split(",")
        for item in items:
            u = item.strip().split(" ")[0]
            if u:
                img_urls.add(u)

# Find all background images or urls in inline style attributes
for tag in soup.find_all(style=True):
    style = tag.get("style", "")
    for match in re.findall(r'url\([\'"]?([^\'")]+)[\'"]?\)', style):
        img_urls.add(match)

# Find svg images / sources
for source in soup.find_all("source"):
    src = source.get("src")
    if src:
        img_urls.add(src)
    srcset = source.get("srcset")
    if srcset:
        items = srcset.split(",")
        for item in items:
            u = item.strip().split(" ")[0]
            if u:
                img_urls.add(u)

print(f"Total image/media candidate URLs found: {len(img_urls)}")
sample = list(img_urls)[:20]
for s in sample:
    print("  ", s)
