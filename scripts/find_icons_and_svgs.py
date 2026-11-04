from bs4 import BeautifulSoup
import re

with open("audit/idrees_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")
svgs = soup.find_all("svg")
print(f"Total SVGs in HTML: {len(svgs)}")

# check any external image urls that were not matched
all_urls = re.findall(r'(https?://[^\s"\'<>]+|//[^\s"\'<>]+)', html)
ext_img = [u for u in all_urls if any(u.lower().split("?")[0].endswith(ext) for ext in [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".avif"])]
print(f"Total image URLs in raw string regex: {len(ext_img)}")
print(f"Unique image URLs in raw regex: {len(set(ext_img))}")
for u in sorted(set(ext_img)):
    print("  ", u)
