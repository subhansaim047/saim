import os
import sys
import json
import re
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
live_domain = "https://www.saimdev.site"

with open(os.path.join(base_dir, "public/sitemap.xml"), "r", encoding="utf-8") as f:
    sitemap_xml = f.read()

sitemap_urls = re.findall(r'<loc>(.*?)</loc>', sitemap_xml)

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

inbound_links = {u: 0 for u in sitemap_urls}
outbound_links = {u: 0 for u in sitemap_urls}
all_discovered_links = set()
broken_links = []
images_missing_alt = []
whatsapp_links_found = []
forms_found = []

for url in sitemap_urls:
    html_file = url_to_html_path(url)
    if not html_file or not os.path.exists(html_file):
        continue
    with open(html_file, "r", encoding="utf-8") as f:
        html = f.read()
    soup = BeautifulSoup(html, "html.parser")
    
    # Internal links
    for a in soup.find_all("a"):
        href = a.get("href", "")
        if href.startswith("https://wa.me") or "whatsapp" in href.lower():
            whatsapp_links_found.append((url, href))
        elif href.startswith("/") or href.startswith(live_domain):
            clean_href = href.split("#")[0].split("?")[0]
            if clean_href.startswith(live_domain):
                full_target = clean_href
            else:
                full_target = (live_domain + clean_href).rstrip("/")
                if full_target == live_domain:
                    full_target = live_domain + "/"
            
            all_discovered_links.add(full_target)
            outbound_links[url] += 1
            if full_target in inbound_links:
                inbound_links[full_target] += 1
                
    # Images missing alt
    for img in soup.find_all("img"):
        alt = img.get("alt")
        src = img.get("src", "")
        if alt is None or alt.strip() == "":
            images_missing_alt.append((url, src))
            
    # Forms
    for form in soup.find_all("form"):
        forms_found.append((url, form.get("action", ""), form.get("method", "post")))

print("=== INTERNAL LINK & GRAPH METRICS ===")
orphan_pages = [u for u, count in inbound_links.items() if count == 0 and u != f"{live_domain}/"]
print(f"Total sitemap pages: {len(sitemap_urls)}")
print(f"Orphan pages (0 internal inbound links): {len(orphan_pages)}")
if orphan_pages:
    for op in orphan_pages:
        print(f"  [ORPHAN] {op}")

min_inbound = min(inbound_links.values())
max_inbound = max(inbound_links.values())
avg_inbound = sum(inbound_links.values()) / len(inbound_links)
print(f"Inbound links per page: min={min_inbound}, max={max_inbound}, avg={avg_inbound:.1f}")

print("\n=== IMAGE ALT ATTRIBUTES ===")
print(f"Total images missing alt attributes across all 48 pages: {len(images_missing_alt)}")
if images_missing_alt:
    for u, src in images_missing_alt[:5]:
        print(f"  {u} -> img src: '{src}'")

print("\n=== WHATSAPP INTEGRATION ===")
print(f"Total WhatsApp action links found: {len(whatsapp_links_found)}")
print(f"Sample: {whatsapp_links_found[0][1] if whatsapp_links_found else 'None'}")

print("\n=== INTERACTIVE FORMS ===")
print(f"Pages with forms detected: {len(forms_found)}")
for u, act, meth in forms_found:
    print(f"  {u} (action: {act}, method: {meth})")
