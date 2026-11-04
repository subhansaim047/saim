import re
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

with open("audit/idrees_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

stylesheets = []
for l in soup.find_all("link", rel=lambda r: r and "stylesheet" in r):
    href = l.get("href")
    if href:
        stylesheets.append(href)

scripts = []
for s in soup.find_all("script"):
    src = s.get("src")
    if src:
        scripts.append(src)

images = []
for img in soup.find_all("img"):
    src = img.get("src")
    if src:
        images.append(src)
    srcset = img.get("srcset")
    if srcset:
        for part in srcset.split(","):
            u = part.strip().split(" ")[0]
            if u:
                images.append(u)

# find background urls in style tags or inline styles
bg_urls = re.findall(r'url\([\'"]?([^\'")]+)[\'"]?\)', html)

print(f"Stylesheets count: {len(stylesheets)}")
for s in stylesheets:
    print(f"  CSS: {s}")

print(f"Scripts count: {len(scripts)}")
for s in scripts[:15]:
    print(f"  JS: {s}")

print(f"Images count: {len(images)}")
print(f"Unique images count: {len(set(images))}")
print(f"Background URLs count: {len(bg_urls)}")
