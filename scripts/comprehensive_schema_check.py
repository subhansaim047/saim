import os
import sys
import glob
import json
import re
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
app_html_dir = os.path.join(base_dir, ".next/server/app")
live_domain = "https://www.saimdev.site"

all_html = glob.glob(os.path.join(app_html_dir, "**/*.html"), recursive=True)

schema_stats = {
    "total_pages_with_schema": 0,
    "total_schemas_found": 0,
    "types_count": {},
    "errors": [],
    "warnings": []
}

page_schemas = {}

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

    if route.startswith("/_"):
        continue

    with open(fpath, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    json_ld_scripts = soup.find_all("script", attrs={"type": "application/ld+json"})

    if json_ld_scripts:
        schema_stats["total_pages_with_schema"] += 1
        page_schemas[route] = []

        for idx, script in enumerate(json_ld_scripts):
            raw_content = script.string
            if not raw_content:
                schema_stats["errors"].append((route, f"Empty JSON-LD script tag at index {idx}"))
                continue

            # 1. Parse JSON
            try:
                data = json.loads(raw_content)
            except Exception as e:
                schema_stats["errors"].append((route, f"Invalid JSON syntax in script {idx}: {str(e)}"))
                continue

            schema_stats["total_schemas_found"] += 1
            
            # Handle array of schemas or single schema
            items = data if isinstance(data, list) else [data]
            for item in items:
                if not isinstance(item, dict):
                    schema_stats["errors"].append((route, f"Schema item is not an object: {type(item)}"))
                    continue

                ctx = item.get("@context")
                stype = item.get("@type")
                page_schemas[route].append(stype)
                schema_stats["types_count"][stype] = schema_stats["types_count"].get(stype, 0) + 1

                # 2. Check @context
                if not ctx or "schema.org" not in str(ctx):
                    schema_stats["errors"].append((route, f"Missing or invalid @context: '{ctx}' in type {stype}"))

                # 3. Check @type
                if not stype:
                    schema_stats["errors"].append((route, "Missing @type in schema object"))

                # 4. Specific type validations
                # BreadcrumbList validation
                if stype == "BreadcrumbList":
                    elems = item.get("itemListElement", [])
                    if not elems:
                        schema_stats["errors"].append((route, "BreadcrumbList missing itemListElement"))
                    for pos_idx, elem in enumerate(elems):
                        if "position" not in elem:
                            schema_stats["errors"].append((route, f"Breadcrumb item {pos_idx} missing position"))
                        if "name" not in elem:
                            schema_stats["errors"].append((route, f"Breadcrumb item {pos_idx} missing name"))
                        item_url = elem.get("item")
                        if item_url and not str(item_url).startswith("http"):
                            schema_stats["errors"].append((route, f"Breadcrumb item {pos_idx} url not absolute: '{item_url}'"))

                # FAQPage validation
                elif stype == "FAQPage":
                    main_entities = item.get("mainEntity", [])
                    if not main_entities:
                        schema_stats["errors"].append((route, "FAQPage missing mainEntity questions"))
                    for q_idx, q in enumerate(main_entities):
                        if q.get("@type") != "Question":
                            schema_stats["errors"].append((route, f"FAQ item {q_idx} @type is not Question"))
                        if not q.get("name"):
                            schema_stats["errors"].append((route, f"FAQ question {q_idx} missing question name"))
                        ans = q.get("acceptedAnswer", {})
                        if ans.get("@type") != "Answer":
                            schema_stats["errors"].append((route, f"FAQ question {q_idx} acceptedAnswer @type is not Answer"))
                        if not ans.get("text"):
                            schema_stats["errors"].append((route, f"FAQ question {q_idx} acceptedAnswer missing text"))

                # Article / BlogPosting validation
                elif stype in ["Article", "BlogPosting"]:
                    if not item.get("headline"):
                        schema_stats["errors"].append((route, f"{stype} missing headline"))
                    if not item.get("author"):
                        schema_stats["warnings"].append((route, f"{stype} missing author"))
                    if not item.get("datePublished"):
                        schema_stats["warnings"].append((route, f"{stype} missing datePublished"))

                # SoftwareApplication / WebApplication validation
                elif stype in ["SoftwareApplication", "WebApplication"]:
                    if not item.get("name"):
                        schema_stats["errors"].append((route, f"{stype} missing name"))
                    if not item.get("applicationCategory"):
                        schema_stats["warnings"].append((route, f"{stype} missing applicationCategory"))

print("=== SCHEMA AUDIT REPORT ===")
print(f"Total HTML files scanned: {len(all_html)}")
print(f"Pages containing Schema markup: {schema_stats['total_pages_with_schema']}")
print(f"Total JSON-LD schemas validated: {schema_stats['total_schemas_found']}")

print("\nSchema types detected across site:")
for stype, count in sorted(schema_stats["types_count"].items(), key=lambda x: -x[1]):
    print(f"  - {stype}: {count} occurrences")

print(f"\nSchema validation errors: {len(schema_stats['errors'])}")
if schema_stats["errors"]:
    for route, err in schema_stats["errors"][:20]:
        print(f"  [ERROR] on {route}: {err}")
else:
    print("PERFECT: ZERO schema errors found! Every JSON-LD block is valid according to schema.org & Google standards.")

print(f"\nSchema validation warnings: {len(schema_stats['warnings'])}")
if schema_stats["warnings"]:
    for route, warn in schema_stats["warnings"][:10]:
        print(f"  [WARNING] on {route}: {warn}")
else:
    print("PERFECT: ZERO schema warnings found!")
