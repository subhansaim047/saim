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

# 1. Load sitemap.xml
sitemap_path = os.path.join(base_dir, "public/sitemap.xml")
with open(sitemap_path, "r", encoding="utf-8") as f:
    sitemap_xml = f.read()

sitemap_urls = re.findall(r'<loc>(.*?)</loc>', sitemap_xml)
print(f"Total URLs in sitemap.xml: {len(sitemap_urls)}")

# 2. Load redirects from next.config.mjs
with open(os.path.join(base_dir, "next.config.mjs"), "r", encoding="utf-8") as f:
    config_text = f.read()

redirect_matches = re.findall(r"source:\s*['\"]([^'\"]+)['\"],\s*destination:\s*['\"]([^'\"]+)['\"]", config_text)
redirect_map = {src.strip(): dst.strip() for src, dst in redirect_matches}
print(f"Total redirect rules in next.config.mjs: {len(redirect_map)}")

# Check: Are any sitemap URLs pointing to redirect sources?
sitemap_redirect_conflicts = []
for u in sitemap_urls:
    path = u.replace(live_domain, "").strip()
    if path in redirect_map or (path.rstrip("/") in redirect_map and path != "/"):
        sitemap_redirect_conflicts.append((u, redirect_map.get(path) or redirect_map.get(path.rstrip("/"))))

print(f"\nSitemap URLs pointing to redirect sources: {len(sitemap_redirect_conflicts)}")
if sitemap_redirect_conflicts:
    for u, dst in sitemap_redirect_conflicts:
        print(f"  [CONFLICT] Sitemap has redirect source: {u} -> {dst}")
else:
    print("SUCCESS: 0 sitemap URLs are redirects! All sitemap URLs are direct canonicals.")

# Check: Are there any redirect chains (A -> B -> C)?
redirect_chains = []
for src, dst in redirect_map.items():
    clean_dst = dst.split("#")[0].split("?")[0].rstrip("/")
    if clean_dst in redirect_map:
        redirect_chains.append((src, dst, redirect_map[clean_dst]))

print(f"\nRedirect chains found: {len(redirect_chains)}")
if redirect_chains:
    for src, step1, step2 in redirect_chains:
        print(f"  [CHAIN] {src} -> {step1} -> {step2}")
else:
    print("SUCCESS: 0 redirect chains! All redirects are 1-hop direct.")

# 3. Scan all HTML files for internal links pointing to redirects OR orphan pages
all_html_files = glob.glob(os.path.join(app_html_dir, "**/*.html"), recursive=True)
print(f"\nScanning {len(all_html_files)} pre-rendered HTML files for links and orphans...")

# Inbound link counters for every sitemap URL
sitemap_paths = {}
for u in sitemap_urls:
    p = u.replace(live_domain, "")
    if not p:
        p = "/"
    sitemap_paths[p.rstrip("/") if p != "/" else "/"] = u

inbound_counts = {p: 0 for p in sitemap_paths}
internal_links_to_redirects = []

for html_file in all_html_files:
    rel = os.path.relpath(html_file, app_html_dir).replace("\\", "/")
    if rel == "index.html":
        current_page = "/"
    elif rel.endswith("/index.html"):
        current_page = "/" + rel[:-11]
    elif rel.endswith(".html"):
        current_page = "/" + rel[:-5]
    else:
        current_page = "/" + rel

    with open(html_file, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    for a in soup.find_all("a"):
        href = a.get("href")
        if not href:
            continue
        # Skip external, hash, tel, mailto, whatsapp
        if href.startswith("tel:") or href.startswith("mailto:") or href.startswith("https://wa.me") or href.startswith("#") or href.startswith("javascript:"):
            continue
        if href.startswith("http://") or href.startswith("https://"):
            if not href.startswith(live_domain):
                continue
            href = href.replace(live_domain, "")
            if not href:
                href = "/"

        clean_href = href.split("#")[0].split("?")[0]
        if not clean_href:
            clean_href = "/"
        norm_href = clean_href.rstrip("/") if clean_href != "/" else "/"

        # Check if internal link points to a redirect
        if norm_href in redirect_map or clean_href in redirect_map:
            dst = redirect_map.get(norm_href) or redirect_map.get(clean_href)
            internal_links_to_redirects.append((current_page, href, dst))

        # Check inbound count for sitemap pages
        if norm_href in inbound_counts:
            # Don't count self-links on the same page as an inbound recommendation
            if norm_href != (current_page.rstrip("/") if current_page != "/" else "/"):
                inbound_counts[norm_href] += 1

print("\n=== INTERNAL LINKS POINTING TO REDIRECTS ===")
print(f"Total internal links pointing to redirected URLs: {len(internal_links_to_redirects)}")
if internal_links_to_redirects:
    # Print unique occurrences
    unique_redirect_links = set(internal_links_to_redirects)
    for src, raw_href, dst in sorted(unique_redirect_links):
        print(f"  [LINK TO REDIRECT] On '{src}': links to '{raw_href}' -> destination is '{dst}'")
else:
    print("PERFECT: ZERO internal links point to redirects! All internal links point directly to final canonicals.")

print("\n=== ORPHAN PAGES AUDIT (Sitemap URLs with 0 external inbound links) ===")
orphan_pages = []
for path, count in inbound_counts.items():
    if count == 0 and path != "/":
        orphan_pages.append((path, sitemap_paths[path]))

print(f"Total orphan pages found: {len(orphan_pages)}")
if orphan_pages:
    for path, full_url in orphan_pages:
        print(f"  [ORPHAN] {full_url} (0 internal inbound links)")
else:
    print("PERFECT: ZERO orphan pages! Every single sitemap page has internal inbound links.")

print("\nInbound link distribution across all sitemap pages:")
counts = list(inbound_counts.values())
print(f"Min inbound: {min(counts)}, Max inbound: {max(counts)}, Avg inbound: {sum(counts)/len(counts):.1f}")
