import os, sys, re, json
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

html_file = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\.next\server\app\blog\commercial-kitchen-food-cooling-temperature-guide.html"
with open(html_file, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

title = soup.find("title").get_text(strip=True) if soup.find("title") else ""
md = soup.find("meta", attrs={"name": "description"})
meta_desc = md["content"].strip() if md else ""
canon = soup.find("link", rel="canonical")
canonical = canon["href"] if canon else ""

h1s = [h.get_text(strip=True) for h in soup.find_all("h1")]
h2s = [h.get_text(strip=True) for h in soup.find_all("h2")]
h3s = [h.get_text(strip=True) for h in soup.find_all("h3")]

# Forbidden phrases check
forbidden = [
    "eho-approved",
    "fsa-approved",
    "guaranteed compliance",
    "guaranteed inspection pass",
    "legally guaranteed",
    "one rule applies to every uk kitchen"
]
found_forbidden = [phrase for phrase in forbidden if phrase in html.lower()]

# Direct answer in first 100 words check
direct_answer_box = soup.find(string=lambda t: t and 'Direct Answer:' in t)
direct_answer_text = ""
if direct_answer_box:
    parent = direct_answer_box.find_parent("div")
    if parent:
        p = parent.find("p")
        if p:
            direct_answer_text = p.get_text(strip=True)

direct_answer_words = len(direct_answer_text.split())

# Decompose non-article elements for word count
for tag in soup(["script", "style", "header", "footer", "nav"]):
    tag.decompose()

text = soup.get_text(separator=" ", strip=True)
words = text.split()
word_count = len(words)

# Schema checks
has_article_schema = "Article" in html and "Commercial Kitchen Food Cooling Guide: UK 90-Minute Rule" in html
has_breadcrumb_schema = "BreadcrumbList" in html

# Internal links checks
links = []
for a in soup.find_all("a", href=True):
    href = a["href"].strip()
    if href.startswith("/"):
        links.append(href)

required_links = [
    "/tools",
    "/food-safety-templates/food-cooling-poster",
    "/food-safety-templates/fridge-temperature-record-sheet-pdf",
    "/food-safety-templates/freezer-temperature-chart",
    "/food-safety-templates/hot-holding-food-temperature-log",
    "/food-safety-templates/reheating-food-temperature-guide",
    "/food-safety-templates/haccp-plan-builder",
    "/food-safety-templates/opening-and-closing-checklist-template",
    "/blogs",
    "/services"
]

missing_required_links = [link for link in required_links if link not in links]

print("=== VALIDATION REPORT FOR COOLING GUIDE ===")
print(f"Title: {title}")
print(f"Meta Description: {meta_desc}")
print(f"Canonical: {canonical}")
print(f"H1 Count: {len(h1s)} -> {h1s[0] if h1s else 'None'}")
print(f"H2 Count: {len(h2s)}")
for idx, h2 in enumerate(h2s, 1):
    print(f"   H2 #{idx}: {h2}")
print(f"H3 Count: {len(h3s)}")
for idx, h3 in enumerate(h3s, 1):
    print(f"   H3 #{idx}: {h3}")
print(f"\nDirect Answer Paragraph ({direct_answer_words} words):")
print(f"\"{direct_answer_text}\"")
print(f"\nMain Content Word Count: {word_count} words")
print(f"Forbidden phrases found: {found_forbidden}")
print(f"Article Schema valid: {has_article_schema}")
print(f"Breadcrumb Schema valid: {has_breadcrumb_schema}")
print(f"Required links missing: {missing_required_links}")
print(f"Internal links found ({len(links)}): {list(set(links))}")

# Assertions
assert len(h1s) == 1, "Must have exactly 1 H1"
assert h1s[0] == "Commercial Kitchen Food Cooling Temperature Guide UK", f"H1 incorrect: {h1s[0]}"
assert title == "UK Food Cooling Temperature Guide: 90-Minute Rule", f"Title changed! {title}"
assert canonical == "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide", f"Canonical changed! {canonical}"
assert len(found_forbidden) == 0, f"Found forbidden phrases: {found_forbidden}"
assert 0 < direct_answer_words <= 100, f"Direct answer word count out of range: {direct_answer_words}"
assert 900 <= word_count <= 1100, f"Word count out of range: {word_count}"
assert has_article_schema, "Article schema missing"
assert has_breadcrumb_schema, "Breadcrumb schema missing"
assert len(missing_required_links) == 0, f"Missing required links: {missing_required_links}"

print("\n>>> ALL VALIDATION CHECKS PASSED SUCCESSFULLY! <<<")
