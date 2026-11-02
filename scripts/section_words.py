import os, re
from bs4 import BeautifulSoup

html_file = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\.next\server\app\blog\commercial-kitchen-food-cooling-temperature-guide.html"
with open(html_file, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")
for tag in soup(["script", "style", "header", "footer", "nav"]):
    tag.decompose()

sections = soup.find_all(["section", "div"])
for s in soup.find_all("section"):
    t = s.get_text(separator=" ", strip=True)
    h2 = s.find("h2")
    title = h2.get_text(strip=True) if h2 else "Section"
    print(f"{title[:40]:40} | Words: {len(t.split())}")
