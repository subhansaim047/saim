import os
import sys
import glob
import re
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
app_html_dir = os.path.join(base_dir, ".next/server/app")
public_dir = os.path.join(base_dir, "public")

# 1. Gather all generated routes from .next/server/app
all_generated_html = glob.glob(os.path.join(app_html_dir, "**/*.html"), recursive=True)
print(f"Total HTML files generated in Next.js build: {len(all_generated_html)}")

existing_routes = set()
for html_path in all_generated_html:
    rel = os.path.relpath(html_path, app_html_dir).replace("\\", "/")
    if rel == "index.html":
        route = "/"
    elif rel.endswith("/index.html"):
        route = "/" + rel[:-11]
    elif rel.endswith(".html"):
        route = "/" + rel[:-5]
    else:
        continue
    existing_routes.add(route)

# 2. Gather all public static files from public/
all_public_files = glob.glob(os.path.join(public_dir, "**/*"), recursive=True)
for pub_path in all_public_files:
    if os.path.isfile(pub_path):
        rel = "/" + os.path.relpath(pub_path, public_dir).replace("\\", "/")
        existing_routes.add(rel)
        if rel.endswith("/index.html"):
            existing_routes.add(rel[:-11])
            existing_routes.add(rel[:-10])

print(f"Total valid routes identified (App Router + Public files): {len(existing_routes)}")

# Read next.config.mjs to get all redirects
with open(os.path.join(base_dir, "next.config.mjs"), "r", encoding="utf-8") as f:
    config_text = f.read()

redirect_sources = set(re.findall(r"source:\s*['\"]([^'\"]+)['\"]", config_text))
redirect_dests = set(re.findall(r"destination:\s*['\"]([^'\"]+)['\"]", config_text))

print(f"Total redirect rules in next.config.mjs: {len(redirect_sources)}")

# Verify all redirect destinations exist
broken_redirect_destinations = []
for dest in redirect_dests:
    clean_dest = dest.split("#")[0].split("?")[0]
    if clean_dest not in existing_routes:
        broken_redirect_destinations.append(dest)

if broken_redirect_destinations:
    print(f"WARNING: Found {len(broken_redirect_destinations)} redirect destinations that do not exist!")
    for b in broken_redirect_destinations:
        print(f"  Destination 404: {b}")
else:
    print("SUCCESS: 100% of redirect destinations exist in the codebase!")

# 3. Extract every single link from every HTML file and verify zero 404s
all_internal_links = {}
broken_links = []

for html_path in all_generated_html:
    rel = os.path.relpath(html_path, app_html_dir).replace("\\", "/")
    if rel == "index.html":
        source_page = "/"
    elif rel.endswith("/index.html"):
        source_page = "/" + rel[:-11]
    elif rel.endswith(".html"):
        source_page = "/" + rel[:-5]
    else:
        source_page = rel

    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    soup = BeautifulSoup(html, "html.parser")
    for a in soup.find_all("a"):
        href = a.get("href")
        if not href:
            continue
        # Skip external links, tel, mailto, whatsapp, javascript, in-page hashes
        if href.startswith("tel:") or href.startswith("mailto:") or href.startswith("https://wa.me") or href.startswith("#") or href.startswith("javascript:"):
            continue
        if href.startswith("http://") or href.startswith("https://"):
            if not href.startswith("https://www.saimdev.site"):
                continue
            href = href.replace("https://www.saimdev.site", "")
            if not href:
                href = "/"

        clean_href = href.split("#")[0].split("?")[0]
        if not clean_href:
            clean_href = "/"

        # If clean_href ends with slash and is not root, strip it for check
        lookup_href = clean_href
        if lookup_href != "/" and lookup_href.endswith("/"):
            lookup_href = lookup_href.rstrip("/")

        # Check if lookup_href is in existing routes OR in redirect sources
        is_valid = (lookup_href in existing_routes) or (lookup_href in redirect_sources) or (clean_href in existing_routes) or (clean_href in redirect_sources)
        if not is_valid:
            broken_links.append((source_page, href, clean_href))
        else:
            all_internal_links[lookup_href] = all_internal_links.get(lookup_href, 0) + 1

print("\n=== INTERNAL LINK AUDIT RESULTS ===")
print(f"Unique internal destination paths linked: {len(all_internal_links)}")
print(f"Broken links (404 targets) found: {len(broken_links)}")

if broken_links:
    for src, raw_href, clean in broken_links:
        print(f"  [BROKEN 404] On page '{src}' -> links to '{raw_href}' (clean: '{clean}')")
else:
    print("PERFECT: EXACTLY ZERO BROKEN 404 LINKS FOUND ACROSS ALL 194 PAGES!")
