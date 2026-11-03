from bs4 import BeautifulSoup
import json

with open("audit/idrees_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

links = set()
for a in soup.find_all("a", href=True):
    href = a["href"]
    if href and not href.startswith(("mailto:", "tel:", "#", "javascript:")):
        links.add(href)

print(f"Total links found: {len(links)}")
sorted_links = sorted(list(links))
for l in sorted_links:
    print(" -", l)

with open("audit/idrees_links.json", "w", encoding="utf-8") as f:
    json.dump(sorted_links, f, indent=2)
