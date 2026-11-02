import os
import sys
import json
from bs4 import BeautifulSoup

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
live_domain = "https://www.saimdev.site"

with open(os.path.join(base_dir, "public/sitemap.xml"), "r", encoding="utf-8") as f:
    text = f.read()

import re
urls = re.findall(r'<loc>(.*?)</loc>', text)

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

no_visible_breadcrumbs = []
no_schema_breadcrumbs = []

for url in urls:
    html_file = url_to_html_path(url)
    if not html_file or not os.path.exists(html_file):
        continue
    with open(html_file, "r", encoding="utf-8") as f:
        html = f.read()
    soup = BeautifulSoup(html, "html.parser")
    
    # Check visible breadcrumbs
    nav_bc = soup.find("nav", attrs={"aria-label": lambda v: v and "breadcrumb" in v.lower()})
    bc_div = soup.find(class_=lambda c: c and "breadcrumb" in c.lower())
    has_visible_bc = bool(nav_bc or bc_div)
    
    # Check BreadcrumbList schema
    has_schema_bc = "BreadcrumbList" in html
    
    if not has_visible_bc and url != f"{live_domain}/":
        no_visible_breadcrumbs.append(url)
    if not has_schema_bc and url != f"{live_domain}/":
        no_schema_breadcrumbs.append(url)

print(f"Total sitemap pages checked: {len(urls)}")
print(f"Pages missing visible breadcrumbs ({len(no_visible_breadcrumbs)}):")
for u in no_visible_breadcrumbs:
    print(f"  {u}")

print(f"\nPages missing BreadcrumbList schema ({len(no_schema_breadcrumbs)}):")
for u in no_schema_breadcrumbs:
    print(f"  {u}")
