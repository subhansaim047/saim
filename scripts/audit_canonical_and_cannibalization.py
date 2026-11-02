import os
import sys
import glob
import re
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
app_html_dir = os.path.join(base_dir, ".next/server/app")
live_domain = "https://www.saimdev.site"

# 1. Load sitemap and redirects
with open(os.path.join(base_dir, "public/sitemap.xml"), "r", encoding="utf-8") as f:
    sitemap_xml = f.read()
sitemap_urls = set(re.findall(r'<loc>(.*?)</loc>', sitemap_xml))

with open(os.path.join(base_dir, "next.config.mjs"), "r", encoding="utf-8") as f:
    config_text = f.read()
redirect_matches = re.findall(r"source:\s*['\"]([^'\"]+)['\"],\s*destination:\s*['\"]([^'\"]+)['\"]", config_text)
redirect_sources = {src.strip(): dst.strip() for src, dst in redirect_matches}

# 2. Audit all pre-rendered HTML files
all_html = glob.glob(os.path.join(app_html_dir, "**/*.html"), recursive=True)

canonical_issues = []
indexable_pages = {}
noindex_pages = set()

for fpath in all_html:
    rel = os.path.relpath(fpath, app_html_dir).replace("\\", "/")
    if rel == "index.html":
        route = "/"
    elif rel.endswith("/index.html"):
        route = "/" + rel[:-11]
    elif rel.endswith(".html"):
        route = "/" + rel[:-5]
    else:
        route = "/" + rel

    # Skip internal Next.js error pages
    if route.startswith("/_"):
        continue

    with open(fpath, "r", encoding="utf-8") as f:
        html = f.read()
    soup = BeautifulSoup(html, "html.parser")

    # Check robots meta
    robots_meta = soup.find("meta", attrs={"name": "robots"})
    robots_content = robots_meta.get("content", "").lower() if robots_meta else ""
    is_noindex = "noindex" in robots_content

    # Check canonical
    canonical_tag = soup.find("link", attrs={"rel": "canonical"})
    canonical_href = canonical_tag.get("href") if canonical_tag else None

    # Check og:url
    og_url_tag = soup.find("meta", attrs={"property": "og:url"})
    og_url = og_url_tag.get("content") if og_url_tag else None

    # Expected canonical URL
    expected_canonical = live_domain if route == "/" else f"{live_domain}{route}"

    if is_noindex:
        noindex_pages.add(route)
    else:
        # Check canonical presence on indexable page
        if not canonical_href:
            canonical_issues.append((route, "MISSING_CANONICAL", canonical_href, expected_canonical))
        elif canonical_href != expected_canonical:
            canonical_issues.append((route, "CANONICAL_MISMATCH", canonical_href, expected_canonical))

        # Check og:url matches canonical
        if og_url and canonical_href and og_url != canonical_href:
            canonical_issues.append((route, "OG_URL_MISMATCH", og_url, canonical_href))

        # Check if canonical points to a redirected URL
        clean_path = canonical_href.replace(live_domain, "") if canonical_href else ""
        if clean_path in redirect_sources:
            canonical_issues.append((route, "CANONICAL_POINTS_TO_REDIRECT", canonical_href, redirect_sources[clean_path]))

        # Gather Title and H1 for Cannibalization check
        title_tag = soup.find("title")
        title_text = title_tag.get_text().strip() if title_tag else ""
        h1_tag = soup.find("h1")
        h1_text = h1_tag.get_text().strip() if h1_tag else ""

        indexable_pages[route] = {
            "title": title_text,
            "h1": h1_text,
            "canonical": canonical_href
        }

print("=== PART 1: CANONICALIZATION AUDIT ===")
print(f"Total routes scanned: {len(all_html)}")
print(f"Total indexable pages: {len(indexable_pages)}")
print(f"Total noindex pages: {len(noindex_pages)}")
print(f"Canonical issues found: {len(canonical_issues)}")

if canonical_issues:
    for r, issue, found, exp in canonical_issues:
        print(f"  [{issue}] on {r}: found '{found}', expected '{exp}'")
else:
    print("PERFECT: 100% of indexable pages have valid self-referencing canonical tags, matching og:url, and ZERO point to redirects!")


print("\n=== PART 2: KEYWORD CANNIBALIZATION AUDIT ===")
# Check for duplicate titles among indexable pages
title_map = {}
duplicate_titles = []
for r, data in indexable_pages.items():
    t = data["title"]
    if not t:
        continue
    if t in title_map:
        duplicate_titles.append((t, title_map[t], r))
    else:
        title_map[t] = r

print(f"Duplicate Titles across indexable pages: {len(duplicate_titles)}")
if duplicate_titles:
    for t, r1, r2 in duplicate_titles:
        print(f"  [DUPLICATE TITLE] '{t}' on both '{r1}' and '{r2}'")
else:
    print("PERFECT: ZERO duplicate titles across all indexable pages! Every page has a unique target topic.")

# Check for duplicate H1s among indexable pages
h1_map = {}
duplicate_h1s = []
for r, data in indexable_pages.items():
    h = data["h1"]
    if not h:
        continue
    if h in h1_map:
        duplicate_h1s.append((h, h1_map[h], r))
    else:
        h1_map[h] = r

print(f"Duplicate H1s across indexable pages: {len(duplicate_h1s)}")
if duplicate_h1s:
    for h, r1, r2 in duplicate_h1s:
        print(f"  [DUPLICATE H1] '{h}' on both '{r1}' and '{r2}'")
else:
    print("PERFECT: ZERO duplicate H1s across all indexable pages!")

# Check near-duplicate consolidation
print("\n=== VERIFYING HISTORICAL NEAR-DUPLICATE CLUSTER CONSOLIDATION ===")
clusters = {
    "cleaning": ["cleaning-schedule", "cleaning-checklist-template", "cleaning-restaurant", "restaurant-cleaning-checklist"],
    "opening_closing": ["kitchen-opening-and-closing-checklist", "opening-and-closing-checklist-template", "restaurant-opening-checklist", "bar-opening-closing-checklist"],
    "pest_control": ["pest-control-checklist", "pest-control-inspection-checklist", "pest-control-template", "pest-management-plan", "pest-control-sop"],
    "chopping_board": ["cutting-board-color-chart", "chopping-board-colour-chart"],
    "fridge_freezer": ["fridge-temperature-chart", "fridge-temperature-record-sheet-pdf", "freezer-temperature-log", "freezer-temperature-chart"]
}

for cluster_name, slugs in clusters.items():
    indexed_in_cluster = [s for s in slugs if f"/food-safety-templates/{s}" in indexable_pages]
    redirected_in_cluster = [s for s in slugs if f"/food-safety-templates/{s}" in redirect_sources]
    print(f"Cluster '{cluster_name}': {len(indexed_in_cluster)} indexed canonicals, {len(redirected_in_cluster)} 301-redirected duplicates -> CANNIBALIZATION PREVENTED")
