import os, sys, re, json
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

html_file = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\.next\server\app\blog\natashas-law-ppds-food-labelling-guide.html"
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
    "fsa-approved label generator",
    "fsa approved",
    "guaranteed legal compliance",
    "guaranteed compliance",
    "this label always passes inspection",
    "natasha’s law applies identically in every uk nation",
    "one label format is legally mandatory in every situation"
]
found_forbidden = [phrase for phrase in forbidden if phrase in html.lower()]

# Word count
for tag in soup(["script", "style", "header", "footer", "nav"]):
    tag.decompose()

text = soup.get_text(separator=" ", strip=True)
words = text.split()
word_count = len(words)

# First 100 words direct answer check
box = soup.find(string=lambda t: t and 'Direct Answer:' in t)
first_para_text = ""
if box:
    parent = box.find_parent('div').parent
    first_para_text = parent.get_text(separator=' ', strip=True)

# Schema checks
has_article_schema = "Article" in html and "Natasha's Law PPDS Food Labelling Guide for UK Takeaways" in html
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
    "/tools/ppds-label-generator",
    "/food-safety-templates/food-allergen-chart",
    "/food-safety-templates/allergy-matrix",
    "/blog/how-to-create-compliant-14-allergen-matrix-uk-restaurants",
]

missing_links = [l for l in required_links if l not in links]

# Check 14 allergens
allergens_14 = [
    "celery", "cereals", "gluten", "crustaceans", "eggs", "fish",
    "lupin", "milk", "molluscs", "mustard", "nuts", "peanuts",
    "sesame", "soya", "sulphites"
]
missing_allergens = [a for a in allergens_14 if a not in html.lower()]

print("=== VALIDATION REPORT FOR NATASHA'S LAW GUIDE ===")
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
print(f"Direct Answer Box ({len(first_para_text.split())} words):\n{first_para_text[:200]}...")
print(f"Forbidden phrases found: {found_forbidden}")
print(f"Article Schema valid: {has_article_schema}")
print(f"Breadcrumb Schema valid: {has_breadcrumb_schema}")
print(f"Internal links found ({len(links)}): {links}")
print(f"Missing required internal links: {missing_links}")
print(f"Missing allergens: {missing_allergens}")

# Assertions
assert len(h1s) == 1, f"Must have exactly 1 H1, found {len(h1s)}"
assert h1s[0] == "Natasha’s Law PPDS Food Labelling Guide for UK Food Businesses", f"H1 incorrect: {h1s[0]}"
assert title == "Natasha's Law PPDS Food Labelling Guide for UK Food", f"Title changed! {title}"
assert meta_desc == "Complete UK guide to Natasha's Law and PPDS food labelling. Learn packaging rules, compound ingredient declarations, and mandatory allergen bolding.", f"Meta desc changed! {meta_desc}"
assert canonical == "https://www.saimdev.site/blog/natashas-law-ppds-food-labelling-guide", f"Canonical changed! {canonical}"
assert len(found_forbidden) == 0, f"Found forbidden phrases: {found_forbidden}"
assert 1000 <= word_count <= 1250, f"Word count out of range: {word_count}"
assert len(missing_links) == 0, f"Missing required internal links: {missing_links}"
assert len(missing_allergens) == 0, f"Missing statutory allergens: {missing_allergens}"
assert has_article_schema, "Article schema missing"
assert has_breadcrumb_schema, "Breadcrumb schema missing"
print("\n>>> ALL VALIDATION CHECKS PASSED PERFECLTY! <<<")
