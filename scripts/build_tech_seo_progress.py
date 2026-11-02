import xml.etree.ElementTree as ET
import json
import re

tree = ET.parse('public/sitemap.xml')
urls = [e.text for e in tree.getroot().findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]

def categorize(u):
    if u == "https://www.saimdev.site/":
        return "Core / Homepage", "Home", "Silo Gateway"
    elif "/services" in u or "/nextjs-developer-uk" in u or "/technologies" in u or "/case-studies" in u or "/about" in u or "/contact" in u:
        role = "Hub" if u == "https://www.saimdev.site/services" else "Cluster Page"
        return "Silo 1: Web Development Agency", "Services & Studio", role
    elif u == "https://www.saimdev.site/demos" or u in ["https://www.saimdev.site/burger-garage", "https://www.saimdev.site/frenchyse", "https://www.saimdev.site/anzaar", "https://www.saimdev.site/hotbite"]:
        role = "Hub" if u == "https://www.saimdev.site/demos" else "Cluster Page"
        return "Silo 2: Takeaway Showcase Demos", "Showcase Demos", role
    elif u == "https://www.saimdev.site/tools" or ("/tools/" in u):
        role = "Hub" if u == "https://www.saimdev.site/tools" else "Cluster Page"
        return "Silo 3: Kitchen Tools & Utilities", "Kitchen Tools", role
    elif "/blogs" in u or "/blog/" in u:
        role = "Hub" if u == "https://www.saimdev.site/blogs" else "Cluster Page"
        return "Silo 5: Insights & Knowledge Hub", "Editorial Guides", role
    elif u in ["https://www.saimdev.site/terms", "https://www.saimdev.site/privacy", "https://www.saimdev.site/cookie-policy", "https://www.saimdev.site/disclaimer"]:
        role = "Hub" if u == "https://www.saimdev.site/terms" else "Cluster Page"
        return "Silo 6: Legal & Governance", "Trust Policies", role
    elif "/food-safety-templates" in u:
        return "Silo 4: Food Safety Templates Library", "Statutory Templates", "Cluster Page"
    return "Other", "General", "Cluster Page"

lines = [
    "# Technical SEO, Performance & Silo Architecture Progress Tracker (`TECH_SEO_PROGRESS.md`)",
    "",
    "> **Status:** Live execution tracker for: (1) Fast Pages & Core Web Vitals, (2) 100% Indexability Readiness, (3) Competitor Content Superiority & Gap Closure, (4) Laser-Focused Silo Architecture.",
    "",
    "## 1. Silo Architecture Overview",
    "",
    "- **Silo 1: Next.js Web Development Agency** (Hub: `/services` | 10 Cluster Pages)",
    "- **Silo 2: Takeaway & Restaurant Showcase Demos** (Hub: `/demos` | 4 Cluster Pages)",
    "- **Silo 3: Kitchen Compliance & Commercial Tools** (Hub: `/tools` | 4 Cluster Pages)",
    "- **Silo 4: Statutory Food Safety Templates** (Hub: `/tools` | 160 Cluster Pages across 6 compliance categories)",
    "- **Silo 5: Insights, Compliance & Agency Knowledge Hub** (Hub: `/blogs` | 12 Cluster Guides)",
    "- **Silo 6: Legal, Privacy & Statutory Governance** (Hub: `/terms` | 3 Cluster Pages)",
    "",
    "## 2. Complete URL Execution Tracker (199 URLs)",
    "",
    "| # | URL | Silo | Role | Indexability Check | Speed Target | Competitor Gaps Filled | Status |",
    "|---|---|---|---|---|---|---|---|"
]

for idx, u in enumerate(urls, 1):
    silo, group, role = categorize(u)
    lines.append(f"| {idx} | [{u.replace('https://www.saimdev.site', '') or '/'}]({u}) | {silo} | {role} | 200 OK / Self-Canonical | LCP < 2.5s / Mob 90+ | Direct Answer + Worked Tools | todo |")

with open('TECH_SEO_PROGRESS.md', 'w', encoding='utf-8') as f:
    f.write("\n".join(lines) + "\n")

print(f"Generated TECH_SEO_PROGRESS.md with {len(urls)} entries.")
