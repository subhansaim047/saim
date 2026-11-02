import os
import json
import urllib.request
import re
from html.parser import HTMLParser

os.makedirs('audit/homepage/baseline', exist_ok=True)

url = 'https://www.saimdev.site'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

print("Fetching live homepage from", url)
with urllib.request.urlopen(req, timeout=15) as resp:
    html = resp.read().decode('utf-8')

# Save raw HTML
with open('audit/homepage/baseline/live_homepage.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Saved audit/homepage/baseline/live_homepage.html (size:", len(html), "bytes)")

# Extract Metadata
title_match = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE)
title = title_match.group(1) if title_match else ""

meta_desc_match = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
meta_desc = meta_desc_match.group(1) if meta_desc_match else ""

canonical_match = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\'](.*?)["\']', html, re.IGNORECASE)
canonical = canonical_match.group(1) if canonical_match else ""

robots_match = re.search(r'<meta[^>]*name=["\']robots["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
robots = robots_match.group(1) if robots_match else ""

# Extract JSON-LD Schemas
schemas = []
for m in re.finditer(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.DOTALL | re.IGNORECASE):
    raw_schema = m.group(1).strip()
    try:
        parsed = json.loads(raw_schema)
        schemas.append(parsed)
    except Exception as e:
        schemas.append({"raw": raw_schema, "error": str(e)})

# Extract Headings
headings = []
for h_match in re.finditer(r'<(h[1-6])[^>]*>(.*?)</\1>', html, re.DOTALL | re.IGNORECASE):
    tag = h_match.group(1).lower()
    text = re.sub(r'<[^>]+>', '', h_match.group(2)).strip()
    text = ' '.join(text.split())
    if text:
        headings.append({"tag": tag, "text": text})

# Extract Links
links = []
for a_match in re.finditer(r'<a[^>]*href=["\'](.*?)["\'][^>]*>(.*?)</a>', html, re.DOTALL | re.IGNORECASE):
    href = a_match.group(1).strip()
    anchor = re.sub(r'<[^>]+>', '', a_match.group(2)).strip()
    anchor = ' '.join(anchor.split())
    is_internal = href.startswith('/') or 'saimdev.site' in href or href.startswith('#')
    links.append({"href": href, "anchor": anchor, "is_internal": is_internal})

# Count words in text
text_content = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html, flags=re.DOTALL | re.IGNORECASE)
text_content = re.sub(r'<[^>]+>', ' ', text_content)
words = [w for w in text_content.split() if len(w) > 1]
word_count = len(words)

baseline = {
    "url": url,
    "title": title,
    "title_length": len(title),
    "meta_description": meta_desc,
    "meta_desc_length": len(meta_desc),
    "canonical": canonical,
    "robots": robots,
    "word_count": word_count,
    "schemas_count": len(schemas),
    "schemas": schemas,
    "headings_count": len(headings),
    "headings": headings,
    "links_count": len(links),
    "internal_links_count": len([l for l in links if l['is_internal']]),
    "external_links_count": len([l for l in links if not l['is_internal']]),
    "sample_links": links[:30]
}

with open('audit/homepage/baseline/baseline_summary.json', 'w', encoding='utf-8') as f:
    json.dump(baseline, f, indent=2, ensure_ascii=False)
print("Saved audit/homepage/baseline/baseline_summary.json")

# Write Human-Readable BASELINE_REPORT.md
md_lines = [
    "# Homepage Baseline Technical & Content Audit",
    f"**URL:** {url}  ",
    "**Audit Date:** 02 November 2026  ",
    "**Auditor:** Senior SEO Strategist, Conversion Copywriter & Web Performance Engineer\n",
    "---",
    "## 1. Metadata & Indexing Baseline",
    f"- **Title Tag:** `{title}` ({len(title)} chars)",
    f"- **Meta Description:** `{meta_desc}` ({len(meta_desc)} chars)",
    f"- **Canonical URL:** `{canonical}`",
    f"- **Robots Directive:** `{robots}`",
    f"- **Total Visible Word Count:** ~{word_count} words",
    f"- **Total Discovered Links:** {len(links)} ({len([l for l in links if l['is_internal']])} internal, {len([l for l in links if not l['is_internal']])} external)\n",
    "---",
    "## 2. Heading Architecture Baseline (H1-H4)",
]

for h in headings:
    md_lines.append(f"- **[{h['tag'].upper()}]** {h['text']}")

md_lines.extend([
    "\n---",
    "## 3. Schema.org JSON-LD Baseline",
    f"Found {len(schemas)} structured data blocks:"
])

for idx, s in enumerate(schemas):
    s_type = s.get('@type', 'Unknown')
    md_lines.append(f"\n### Block {idx+1}: `{s_type}`")
    md_lines.append("```json")
    md_lines.append(json.dumps(s, indent=2))
    md_lines.append("```")

md_lines.extend([
    "\n---",
    "## 4. Key Limitations & Strategic Gaps Identified in Baseline",
    "1. **Positioning Bottleneck:** Current H1 is `Next.js Websites for UK Small Businesses – From £250`. It artificially confines the agency to entry-level Next.js projects and small local websites, failing to target high-value commercial searches for e-commerce, custom web apps, Shopify, WordPress, SaaS, and redesigns.",
    "2. **Content Depth & Service Showcase:** While the site lists benefits and process, it lacks comprehensive service deep-dives, specific technical deliverables, and interactive selection tools on the homepage.",
    "3. **Proof & Case Studies Gap:** The homepage lacks concrete case-study narratives highlighting challenges, tech stacks, architectural choices, and measurable outcomes (conversion uplift, speed improvements).",
    "4. **AI Engine Optimization (GEO/AEO):** Missing structured semantic entity definitions (e.g. definitions of web development services, tech stack comparison tables, and direct conversational answer cards for LLMs like ChatGPT and Perplexity).",
    "5. **Conversion Architecture:** Single generic CTA without clear project scope segmenting or dynamic enquiry pathways for different customer profiles (e.g. startup vs e-commerce vs local business)."
])

with open('audit/homepage/baseline/BASELINE_REPORT.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(md_lines))

print("Saved audit/homepage/baseline/BASELINE_REPORT.md")
