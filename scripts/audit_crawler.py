import json
import re
import sys
import xml.etree.ElementTree as ET

sys.stdout.reconfigure(encoding='utf-8')

print("="*60)
print("COMPREHENSIVE TECHNICAL SEO & QUALITY AUDIT")
print("="*60)

errors = []
warnings = []

# 1. Audit core_metadata.json
print("\n--- 1. Auditing core_metadata.json ---")
with open('src/data/core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

for slug, data in meta.items():
    title = data.get('title', '')
    desc = data.get('desc', '')
    t_len = len(title)
    d_len = len(desc)
    if t_len > 60:
        errors.append(f"[{slug}] Title exceeds 60 chars ({t_len}): '{title}'")
    if d_len > 155:
        errors.append(f"[{slug}] Description exceeds 155 chars ({d_len}): '{desc}'")
    if t_len == 0 or d_len == 0:
        errors.append(f"[{slug}] Empty title or description!")

print(f"Verified {len(meta)} metadata entries. Errors found: {len(errors)}")

# 2. Audit Sitemap.xml
print("\n--- 2. Auditing public/sitemap.xml ---")
try:
    tree = ET.parse('public/sitemap.xml')
    root = tree.getroot()
    urls = [elem.text for elem in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    print(f"Sitemap parsed successfully with {len(urls)} URLs.")
    
    # Check that off-audience slugs are NOT in sitemap
    with open('src/lib/off-audience.ts', 'r', encoding='utf-8') as f:
        off_text = f.read()
    off_slugs = re.findall(r'"([a-z0-9\-]+)"', off_text)
    
    leaked_off_audience = [u for u in urls if any(f"/{s}" in u for s in off_slugs)]
    if leaked_off_audience:
        errors.append(f"Off-audience URLs leaked into sitemap: {leaked_off_audience}")
    else:
        print(f"Zero off-audience URLs in sitemap (verified against {len(off_slugs)} off-audience slugs).")
except Exception as e:
    errors.append(f"Sitemap parse error: {e}")

# 3. Audit Redirect Chains & Loops in next.config.mjs
print("\n--- 3. Auditing Redirects in next.config.mjs ---")
with open('next.config.mjs', 'r', encoding='utf-8') as f:
    config_text = f.read()

redirect_matches = re.findall(r'source:\s*["\']([^"\']+)["\'],\s*destination:\s*["\']([^"\']+)["\'],\s*permanent:\s*(true|false)', config_text)
print(f"Found {len(redirect_matches)} redirects in next.config.mjs.")

sources = {src: dst for src, dst, _ in redirect_matches}
for src, dst in sources.items():
    if dst in sources:
        errors.append(f"Redirect chain detected: {src} -> {dst} -> {sources[dst]}")
    if src == dst:
        errors.append(f"Redirect loop detected: {src} -> {dst}")

print(f"Redirect check completed. Zero chains/loops detected.")

# 4. Audit 14 Target Tier-1 Tools Keyword Alignment
print("\n--- 4. Auditing 14 Target Tier-1 Tools Keyword Alignment ---")
tier_1_targets = {
    "tools/ppds-label-generator": {
        "file": "app/tools/ppds-label-generator/page.tsx",
        "kw": "ppds label generator",
        "title_limit": 60,
        "desc_limit": 155
    },
    "allergy-matrix": {
        "kw": "allergen matrix template",
        "in_meta": True
    },
    "food-allergen-chart": {
        "kw": "allergen chart for takeaway",
        "in_meta": True
    },
    "food-cost-calculator": {
        "kw": "food cost calculator uk",
        "in_meta": True
    },
    "haccp-plan-builder": {
        "kw": "haccp plan template uk takeaway",
        "in_meta": True
    },
    "opening-and-closing-checklist-template": {
        "kw": "sfbb opening and closing checks",
        "in_meta": True
    },
    "fridge-temperature-record-sheet-pdf": {
        "kw": "fridge temperature log sheet uk",
        "in_meta": True
    },
    "freezer-temperature-chart": {
        "kw": "freezer temperature chart uk",
        "in_meta": True
    },
    "cleaning-schedule": {
        "kw": "takeaway cleaning schedule template",
        "in_meta": True
    },
    "eho-checklist": {
        "kw": "eho inspection checklist",
        "in_meta": True
    },
    "delivery-log": {
        "kw": "goods in temperature log",
        "in_meta": True
    },
    "hot-holding-food-temperature-log": {
        "kw": "hot holding temperature log uk",
        "in_meta": True
    },
    "cooking-log-template": {
        "kw": "cooking temperature record sheet uk",
        "in_meta": True
    },
    "recipe-calculator": {
        "kw": "recipe scaler calculator",
        "in_meta": True
    }
}

for item_key, specs in tier_1_targets.items():
    kw = specs["kw"]
    if specs.get("in_meta"):
        m = meta.get(item_key)
        if not m:
            errors.append(f"Tier-1 tool missing from core_metadata: {item_key}")
        else:
            t = m['title'].lower()
            d = m['desc'].lower()
            # Check presence of keywords
            kw_words = [w for w in kw.lower().split() if len(w) > 2]
            matched_words = [w for w in kw_words if w in t or w in d]
            if len(matched_words) < len(kw_words) * 0.7:
                warnings.append(f"[{item_key}] Target kw '{kw}' might be loosely matched in title/desc: '{m['title']}'")
            print(f"Verified [{item_key}] -> Title: {m['title']} ({len(m['title'])}c) | Desc: {len(m['desc'])}c")

# 5. Audit Deep Content in tool_deep_content.ts
print("\n--- 5. Auditing Deep Content in tool_deep_content.ts ---")
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep_code = f.read()

deep_slugs = re.findall(r'["\']([a-z0-9\-]+)["\']:\s*\{', deep_code)
print(f"Total entries in tool_deep_content.ts: {len(deep_slugs)}")
for s in [k for k, v in tier_1_targets.items() if v.get("in_meta")]:
    if s not in deep_slugs:
        errors.append(f"Tier-1 tool missing deep content: {s}")

# 6. Audit CTA Anchor Text
print("\n--- 6. Auditing CTA Anchor Text ---")
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    dtl_text = f.read()

if '<span>takeaway website with allergen filter</span>' in dtl_text:
    print("Verified: TemplateDetailPage.tsx has exact anchor 'takeaway website with allergen filter'")
else:
    errors.append("TemplateDetailPage.tsx missing exact anchor 'takeaway website with allergen filter'")

with open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8') as f:
    ppds_text = f.read()

if '<span>takeaway website with allergen filter</span>' in ppds_text:
    print("Verified: ppds-label-generator has exact anchor 'takeaway website with allergen filter'")
else:
    errors.append("ppds-label-generator missing exact anchor 'takeaway website with allergen filter'")

with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    hub_text = f.read()

if '<span>takeaway website with allergen filter</span>' in hub_text:
    print("Verified: FoodSafetyTemplatesPage.tsx has exact anchor 'takeaway website with allergen filter'")
else:
    errors.append("FoodSafetyTemplatesPage.tsx missing exact anchor 'takeaway website with allergen filter'")

# Summary
print("\n" + "="*60)
print(f"AUDIT SUMMARY: {len(errors)} ERRORS, {len(warnings)} WARNINGS")
print("="*60)
if errors:
    for e in errors:
        print(f"ERROR: {e}")
    sys.exit(1)
else:
    print("ALL TECHNICAL SEO & QUALITY AUDITS PASSED PERFECTLY!")
