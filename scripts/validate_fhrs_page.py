import os, sys, re, json
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

html_file = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\.next\server\app\blog\uk-food-hygiene-rating-scheme-5-star-checklist.html"
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
    "this checklist guarantees a 5-star rating",
    "eho-approved",
    "fsa approved",
    "guaranteed pass",
    "100% compliant",
    "fsa-approved"
]
found_forbidden = [phrase for phrase in forbidden if phrase in html.lower()]

# Word count
for tag in soup(["script", "style", "header", "footer", "nav"]):
    tag.decompose()

text = soup.get_text(separator=" ", strip=True)
words = text.split()
word_count = len(words)

# First 100 words direct answer check
# Let's inspect the text right under h1
h1_tag = soup.find("h1")
first_para_text = ""
if h1_tag:
    parent = h1_tag.parent
    for p in parent.find_all("p"):
        p_text = p.get_text(strip=True)
        if p_text:
            first_para_text += " " + p_text
            if len(first_para_text.split()) >= 60:
                break

# Schema checks
has_article_schema = "Article" in html and "How to Get a 5-Star Food Hygiene Rating: UK Checklist" in html
has_breadcrumb_schema = "BreadcrumbList" in html

# Internal links checks
links = []
for a in soup.find_all("a", href=True):
    href = a["href"].strip()
    if href.startswith("/"):
        links.append(href)

required_links = [
    "/blogs",
    "/tools",
    "/food-safety-templates/opening-and-closing-checklist-template",
    "/food-safety-templates/cleaning-schedule",
    "/food-safety-templates/fridge-temperature-record-sheet-pdf",
    "/food-safety-templates/hot-holding-food-temperature-log",
    "/food-safety-templates/food-traceability",
    "/food-safety-templates/haccp-plan-builder",
]

missing_links = [l for l in required_links if l not in links]

print("=== VALIDATION REPORT FOR FHRS 5-STAR CHECKLIST ===")
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
print(f"\nRendered Word Count: {word_count} words")
print(f"Opening Direct Answer Preview:\n{first_para_text.strip()[:200]}...")
print(f"Forbidden phrases found: {found_forbidden}")
print(f"Article Schema valid: {has_article_schema}")
print(f"Breadcrumb Schema valid: {has_breadcrumb_schema}")
print(f"Internal links found ({len(links)}): {links}")
print(f"Missing required internal links: {missing_links}")

# Assertions
assert len(h1s) == 1, f"Must have exactly 1 H1, found {len(h1s)}"
assert title == "How to Get a 5-Star Food Hygiene Rating: UK Checklist", f"Title changed! {title}"
assert meta_desc == "Complete UK inspection checklist to secure a 5-star Food Hygiene Rating. Practical tips for structure, hygiene practices, and confidence in management.", f"Meta desc changed! {meta_desc}"
assert canonical == "https://www.saimdev.site/blog/uk-food-hygiene-rating-scheme-5-star-checklist", f"Canonical changed! {canonical}"
assert len(found_forbidden) == 0, f"Found forbidden phrases: {found_forbidden}"
assert 850 <= word_count <= 1150, f"Word count out of range: {word_count}"
assert len(missing_links) == 0, f"Missing required internal links: {missing_links}"
assert has_article_schema, "Article schema missing"
assert has_breadcrumb_schema, "Breadcrumb schema missing"
print("\n>>> ALL VALIDATION CHECKS PASSED PERFECLTY! <<<")
