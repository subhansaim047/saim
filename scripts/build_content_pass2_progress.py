import json, re

# Read sitemap or existing progress to get all 199 URLs exactly
with open('CONTENT_PROGRESS.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

output = []
output.append("# Content Optimization Pass 2 Progress Tracker (`CONTENT_PASS2_PROGRESS.md`)\n")
output.append("> Live execution tracker for Pass 2: (1) Search Intent Nailed, (2) Unique Elements Added, (3) Evergreen URL Slugs across all 199 URLs on `https://www.saimdev.site`.\n\n")
output.append("## Executive Summary & Status Overview\n\n")
output.append("- **Total Discovered URLs**: 199\n")
output.append("- **Core Pages & Services**: 13\n")
output.append("- **Interactive Tools & Hubs**: 6\n")
output.append("- **Editorial & Compliance Blog Guides**: 12\n")
output.append("- **Legal & Trust Policies**: 4\n")
output.append("- **Showcase Takeaway Demos**: 4\n")
output.append("- **Statutory Food Safety Templates**: 160\n\n")
output.append("### Legend\n")
output.append("- `[ ] todo` — Queued for Intent verification, Unique Elements, and Evergreen Slug check\n")
output.append("- `[>] in progress` — Under active audit and enhancement\n")
output.append("- `[x] done` — Intent verified, unique elements implemented, evergreen slug confirmed, CI guards passing\n\n")
output.append("---\n\n")

current_section = ""
table_header = "| # | Page Name & URL | Primary Keyword | Search Intent | Slug Status | Unique Element | Status | Source File |\n|---|---|---|---|---|---|---|---|\n"

section_counts = {}

for line in lines:
    if line.startswith('## 1. Core Pages') or line.startswith('## 2. Interactive Tools') or line.startswith('## 3. Editorial') or line.startswith('## 4. Legal') or line.startswith('## 5. Showcase') or line.startswith('## 6. Statutory'):
        current_section = line.strip()
        output.append(f"\n{current_section}\n\n")
        output.append(table_header)
        section_counts[current_section] = 0
        continue
    
    if line.startswith('|') and not line.startswith('| #') and not line.startswith('|---'):
        parts = [p.strip() for p in line.split('|')]
        if len(parts) >= 6 and parts[1].isdigit():
            idx = parts[1]
            page_info = parts[2]
            keyword = parts[3]
            source_info = parts[5] if len(parts) > 5 else ""

            # Determine intent based on page type
            intent = "Informational"
            slug_status = "Evergreen"
            unique_elem = "Interactive Tool / Walkthrough"

            if 'takeaway-web-design' in page_info or 'services' in page_info or 'nextjs-developer' in page_info or 'contact' in page_info:
                intent = "Commercial / Transactional"
            elif 'demos' in page_info or 'case-studies' in page_info or 'about' in page_info:
                intent = "Commercial / Navigational"
            elif 'terms' in page_info or 'privacy' in page_info or 'cookie' in page_info or 'disclaimer' in page_info:
                intent = "Informational / Legal Trust"
            elif 'calculator' in page_info or 'generator' in page_info or 'matrix' in page_info:
                intent = "Transactional (Interactive Utility)"
            elif 'blog' in page_info:
                intent = "Informational"

            if '2026' in page_info:
                slug_status = "Needs Evergreen Migration"

            output.append(f"| {idx} | {page_info} | {keyword} | `{intent}` | `{slug_status}` | {unique_elem} | `todo` | {source_info} |\n")
            section_counts[current_section] = section_counts.get(current_section, 0) + 1

with open('CONTENT_PASS2_PROGRESS.md', 'w', encoding='utf-8', newline='\n') as f:
    f.writelines(output)

print(f"Created CONTENT_PASS2_PROGRESS.md with {sum(section_counts.values())} total pages across {len(section_counts)} sections!")
