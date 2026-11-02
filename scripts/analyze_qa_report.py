import os
import sys
import json
import urllib.request

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
audit_file = os.path.join(base_dir, "audit/qa_audit_results.json")

with open(audit_file, "r", encoding="utf-8") as f:
    data = json.load(f)

results = data["results"]
images = data["images_to_check"]

print(f"=== DETAILED QA AUDIT ANALYSIS ({len(results)} PAGES) ===\n")

# 1. H1 Count check
h1_issues = [r for r in results if r["h1_count"] != 1]
print(f"1. H1 Tag Compliance: {len(results) - len(h1_issues)} / {len(results)} have exactly one H1")
if h1_issues:
    for iss in h1_issues:
        print(f"   [ISSUE] {iss['url']}: {iss['h1_count']} H1s found -> {iss['h1_text']}")

# 2. Canonical check
canonical_issues = []
for r in results:
    norm_url = r["url"].rstrip("/")
    norm_can = r["canonical"].rstrip("/")
    if norm_url != norm_can:
        canonical_issues.append((r["url"], r["canonical"]))
print(f"2. Canonical URL Matching: {len(results) - len(canonical_issues)} / {len(results)} match")
if canonical_issues:
    for u, c in canonical_issues:
        print(f"   [ISSUE] {u} != {c}")

# 3. Legal pages check (robots & sitemap exclusion)
legal_pages = [r for r in results if r["is_legal"]]
print(f"\n3. Legal Pages Inspection ({len(legal_pages)} pages):")
for lp in legal_pages:
    print(f"   {lp['url']}: in_sitemap={lp['in_sitemap']} | robots='{lp['robots']}'")

# 4. Check Title & Description lengths
title_len_issues = [r for r in results if not r["is_legal"] and (r["title_len"] < 25 or r["title_len"] > 65)]
desc_len_issues = [r for r in results if not r["is_legal"] and (r["desc_len"] < 80 or r["desc_len"] > 165)]
print(f"\n4. Metadata Length Metrics:")
print(f"   Title lengths 25-65 chars: {len(results) - len(legal_pages) - len(title_len_issues)} / {len(results) - len(legal_pages)}")
if title_len_issues:
    for r in title_len_issues:
        print(f"   [WARN] {r['url']}: title length {r['title_len']} -> '{r['title']}'")
print(f"   Description lengths 80-165 chars: {len(results) - len(legal_pages) - len(desc_len_issues)} / {len(results) - len(legal_pages)}")
if desc_len_issues:
    for r in desc_len_issues:
        print(f"   [WARN] {r['url']}: desc length {r['desc_len']} -> '{r['desc']}'")

# 5. Schema checks
schema_overview = {}
has_review_rating_pages = []
for r in results:
    for st in r["schema_types"]:
        schema_overview[st] = schema_overview.get(st, 0) + 1
    if r["has_reviews_or_ratings"]:
        has_review_rating_pages.append(r["url"])

print(f"\n5. Structured Data (JSON-LD) Breakdown:")
for k, v in sorted(schema_overview.items()):
    print(f"   {k}: {v} pages")

print(f"\n   Pages with fake reviews/ratings: {len(has_review_rating_pages)}")
if has_review_rating_pages:
    for u in has_review_rating_pages:
        print(f"   [ISSUE] {u} has reviews/ratings in schema")

# 6. Images Check
print(f"\n6. OG & Twitter Image URLs ({len(images)} images):")
for img in sorted(images):
    try:
        req = urllib.request.Request(img, headers={"User-Agent": "Mozilla/5.0"})
        res = urllib.request.urlopen(req, timeout=10)
        content_type = res.headers.get("Content-Type", "")
        print(f"   [PASS] {res.status} | Content-Type: {content_type} | URL: {img}")
    except Exception as e:
        print(f"   [FAIL] {e} | URL: {img}")
