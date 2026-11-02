import os, sys, re, json
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
live_domain = "https://www.saimdev.site"

with open(os.path.join(base_dir, "public/sitemap.xml"), "r", encoding="utf-8") as f:
    sitemap_text = f.read()

sitemap_urls = re.findall(r'<loc>(.*?)</loc>', sitemap_text)
print(f"Total sitemap URLs: {len(sitemap_urls)}")

def url_to_html_path(url):
    path = url.replace(live_domain, "").strip("/")
    if path == "":
        return os.path.join(base_dir, ".next/server/app/index.html")
    p1 = os.path.join(base_dir, f".next/server/app/{path}.html")
    if os.path.exists(p1):
        return p1
    p2 = os.path.join(base_dir, f".next/server/app/{path}/index.html")
    if os.path.exists(p2):
        return p2
    return None

h1_issues = []
missing_canonicals = []
broken_internal_links = []
orphan_check = set()
all_internal_links = set()

for url in sitemap_urls:
    html_file = url_to_html_path(url)
    if not html_file or not os.path.exists(html_file):
        print(f"Missing HTML file for: {url}")
        continue
    
    with open(html_file, "r", encoding="utf-8") as f:
        html = f.read()
    soup = BeautifulSoup(html, "html.parser")
    
    # H1 check
    h1s = soup.find_all("h1")
    if len(h1s) != 1:
        h1_issues.append((url, len(h1s)))
    
    # Canonical check
    canon = soup.find("link", rel="canonical")
    if not canon or not canon.get("href"):
        missing_canonicals.append(url)
    
    # Discover internal links
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        if href.startswith("/"):
            clean_href = href.split("#")[0].split("?")[0]
            if clean_href:
                all_internal_links.add(clean_href)

# Check if any sitemap URL is orphaned (not linked to by any other page)
orphans = []
for url in sitemap_urls:
    path = url.replace(live_domain, "")
    if path == "":
        continue
    # Check if path or path without trailing slash is in all_internal_links
    clean_p = path.rstrip("/")
    if clean_p not in all_internal_links and (clean_p + "/") not in all_internal_links:
        orphans.append(url)

print(f"\nH1 check: {len(h1_issues)} issues found.")
for u, c in h1_issues:
    print(f"  {u}: {c} H1 tags")

print(f"\nCanonical check: {len(missing_canonicals)} missing.")
print(f"Orphan pages check: {len(orphans)} orphans found.")
for o in orphans:
    print(f"  Orphan: {o}")

print("\nSummary:")
print(f"  Total crawled URLs: {len(sitemap_urls)}")
print(f"  Total internal links discovered: {len(all_internal_links)}")
print(f"  Total orphans: {len(orphans)}")
