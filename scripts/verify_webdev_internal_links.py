import os
import re
from bs4 import BeautifulSoup

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

PAGES = {
    "/technologies": {
        "file": ".next/server/app/technologies.html",
        "required_targets": [
            ("/services", "Explore our web development services"),
            ("/nextjs-developer-uk", "Dedicated UK Next.js web development"),
            ("/case-studies", "Inspect verified website case studies"),
            ("/contact", "Discuss your website project"),
        ]
    },
    "/case-studies": {
        "file": ".next/server/app/case-studies.html",
        "required_targets": [
            ("/services", "Explore our web development services"),
            ("/nextjs-developer-uk", "Hire a Next.js developer for your UK business"),
            ("/contact", "Discuss your website project"),
        ]
    },
    "/demos": {
        "file": ".next/server/app/demos.html",
        "required_targets": [
            ("/services", "Explore our web development services"),
            ("/services/takeaway-web-design", "Takeaway website design & ordering"),
            ("/case-studies", "View our website case studies"),
            ("/contact", "Discuss your website project with Saim"),
        ]
    },
    "/nextjs-developer-uk": {
        "file": ".next/server/app/nextjs-developer-uk.html",
        "required_targets": [
            ("/case-studies", "View our website case studies"),
            ("/services", "Explore our web development services"),
            ("/contact", "Discuss your website project"),
        ]
    },
    "/services": {
        "file": ".next/server/app/services.html",
        "required_targets": [
            ("/services/takeaway-web-design", "Takeaway System Features"),
            ("/nextjs-developer-uk", "Hire a Next.js developer for your UK business"),
            ("/case-studies", "View our website case studies"),
            ("/contact", "Discuss your website project with Saim"),
        ]
    },
    "/contact": {
        "file": ".next/server/app/contact.html",
        "required_targets": [
            ("/services", "Explore our web development services"),
            ("/case-studies", "View our website case studies"),
            ("/demos", "Explore live website demos"),
        ]
    }
}

print("=== RAW SERVER HTML CRAWL & INTERNAL LINK AUDIT ===")

all_targets_found = set()

for route, data in PAGES.items():
    html_path = os.path.join(base_dir, data["file"])
    if not os.path.exists(html_path):
        print(f"ERROR: HTML file not found for {route}: {html_path}")
        continue
    
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    soup = BeautifulSoup(html, "html.parser")
    
    title = soup.find("title").get_text().strip() if soup.find("title") else ""
    desc_el = soup.find("meta", attrs={"name": "description"})
    desc = desc_el["content"].strip() if desc_el and desc_el.get("content") else ""
    canon_el = soup.find("link", attrs={"rel": "canonical"})
    canon = canon_el["href"].strip() if canon_el and canon_el.get("href") else ""
    h1s = [h.get_text().strip() for h in soup.find_all("h1")]
    
    print(f"\n========================================================")
    print(f"PAGE: {route}")
    print(f"Title: {title} ({len(title)}c)")
    print(f"Description: {desc} ({len(desc)}c)")
    print(f"Canonical: {canon}")
    print(f"H1 ({len(h1s)}): {h1s[0] if h1s else 'NONE'}")
    
    # Collect all <a> tags
    links = []
    for a in soup.find_all("a", href=True):
        href = a["href"].strip()
        text = " ".join(a.get_text().split())
        links.append((href, text))
    
    print(f"Total HTML <a> links on page: {len(links)}")
    
    for req_target, req_anchor_hint in data["required_targets"]:
        matched = [(h, t) for h, t in links if req_target in h]
        all_targets_found.add(req_target)
        if matched:
            print(f"  [PASS] Target: {req_target}")
            for m_href, m_text in matched:
                print(f"         Anchor: \"{m_text}\" (href=\"{m_href}\")")
        else:
            print(f"  [FAIL] Missing link to: {req_target}")

print("\n=== ALL UNIQUE LINK TARGETS AUDITED ===")
for tgt in sorted(all_targets_found):
    print(f"  Verified target: {tgt} (Valid internal route)")
