import os
import re
import sys
import xml.etree.ElementTree as ET

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# Load sitemap
tree = ET.parse('public/sitemap.xml')
sitemap_urls = set(e.text for e in tree.getroot().findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc'))

print(f"Loaded {len(sitemap_urls)} URLs from public/sitemap.xml.")

# Valid routes from app router and public files
valid_routes = set()
for url in sitemap_urls:
    route = url.replace("https://www.saimdev.site", "")
    if route == "": route = "/"
    valid_routes.add(route)

# Add non-sitemap static pages / assets that might be linked
valid_routes.add("/terms")
valid_routes.add("/privacy")
valid_routes.add("/cookie-policy")
valid_routes.add("/disclaimer")
valid_routes.add("/404")

# Check all internal links in app/ and src/
link_pattern = re.compile(r'href=["\'](/[^"\']+)["\']')

broken_links = []
scanned_files = 0
found_links_count = 0

for root, _, files in os.walk("app"):
    for f in files:
        if f.endswith((".tsx", ".ts", ".html")):
            scanned_files += 1
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8", errors="ignore") as fp:
                c = fp.read()
            for match in link_pattern.finditer(c):
                found_links_count += 1
                link = match.group(1).split("#")[0].split("?")[0]
                if not link: continue
                # ignore static assets like /scroll-frames/, /demos/, /hero-shots/, /favicon, etc.
                if any(link.startswith(asset) for asset in ["/scroll-frames", "/demos/previews", "/hero-shots", "/favicon", "/og-", "/saim-dev", "/site.webmanifest", "/api/"]):
                    continue
                # check if link matches a known valid route or file on disk
                if link not in valid_routes:
                    disk_path = os.path.join("public", link.lstrip("/"))
                    if not os.path.exists(disk_path):
                        broken_links.append((p, link))

for root, _, files in os.walk("src"):
    for f in files:
        if f.endswith((".tsx", ".ts")):
            scanned_files += 1
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8", errors="ignore") as fp:
                c = fp.read()
            for match in link_pattern.finditer(c):
                found_links_count += 1
                link = match.group(1).split("#")[0].split("?")[0]
                if not link: continue
                if any(link.startswith(asset) for asset in ["/scroll-frames", "/demos/previews", "/hero-shots", "/favicon", "/og-", "/saim-dev", "/site.webmanifest", "/api/"]):
                    continue
                if link not in valid_routes:
                    disk_path = os.path.join("public", link.lstrip("/"))
                    if not os.path.exists(disk_path):
                        broken_links.append((p, link))

print(f"Scanned {scanned_files} files, audited {found_links_count} link occurrences.")
if broken_links:
    print(f"[FAIL] Found {len(broken_links)} potentially broken links:")
    for src, link in set(broken_links):
        print(f"  In {src}: {link}")
else:
    print("[PASS] ZERO BROKEN INTERNAL LINKS FOUND! All links resolve cleanly.")
