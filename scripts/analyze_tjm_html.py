import os
import re
from bs4 import BeautifulSoup
import json

HTML_FILE = "audit/tjm_home_rendered.html"
with open(HTML_FILE, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

print(f"HTML File Size: {len(html)} bytes")
print("Title:", soup.title.string if soup.title else "No title")

# 1. Stylesheets
css_links = []
for link in soup.find_all("link", rel=lambda r: r and "stylesheet" in r):
    href = link.get("href")
    if href:
        css_links.append(href)
print(f"\nStylesheets ({len(css_links)}):")
for c in css_links[:10]:
    print(" -", c)

# 2. Scripts
scripts = []
for s in soup.find_all("script"):
    src = s.get("src")
    if src:
        scripts.append(src)
print(f"\nExternal Scripts ({len(scripts)}):")
for s in scripts[:10]:
    print(" -", s)

# 3. Fonts
font_links = []
for link in soup.find_all("link"):
    href = link.get("href", "")
    if any(ext in href for ext in [".woff", ".woff2", ".ttf", "fonts."]):
        font_links.append(href)
print(f"\nFont Links ({len(font_links)}):")
for fl in font_links:
    print(" -", fl)

# 4. Images
images = []
for img in soup.find_all("img"):
    src = img.get("src")
    if src:
        images.append(src)
print(f"\nTotal Images: {len(images)}")
print("Sample images:")
for im in images[:5]:
    print(" -", im)

# 5. Header / Navigation Links
nav_links = []
for a in soup.find_all("a"):
    href = a.get("href", "")
    text = a.get_text(strip=True)
    if href and text:
        nav_links.append({"text": text, "href": href})
print(f"\nTotal Links with Text: {len(nav_links)}")

# Group links by prefix
prefixes = {}
for l in nav_links:
    href = l["href"]
    prefix = href.split("/")[1] if href.startswith("/") and len(href.split("/")) > 1 else "other"
    prefixes[prefix] = prefixes.get(prefix, 0) + 1
print("\nLink prefixes distribution:", prefixes)

# Save analysis summary
analysis = {
    "css_links": css_links,
    "scripts": scripts,
    "font_links": font_links,
    "images_count": len(images),
    "sample_images": images[:20],
    "link_prefixes": prefixes,
    "sample_links": nav_links[:30]
}

with open("audit/tjm_home_analysis.json", "w", encoding="utf-8") as f:
    json.dump(analysis, f, indent=2)

print("\nSaved audit/tjm_home_analysis.json!")
