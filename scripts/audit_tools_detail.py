import os
import re

tools = [
    'app/tools/food-cost-calculator/page.tsx',
    'app/tools/allergen-matrix-generator/page.tsx',
    'app/tools/ppds-label-generator/page.tsx',
    'app/tools/recipe-batch-calculator/page.tsx',
]

for t in tools:
    with open(t, 'r', encoding='utf-8') as f:
        code = f.read()
    print(f"==================== {t} ====================")
    title_m = re.search(r'title:\s*["\']([^"\']+)["\']', code)
    desc_m = re.search(r'description:\s*["\']([^"\']+)["\']', code)
    print("Title:", title_m.group(1) if title_m else "MISSING")
    print("Description:", desc_m.group(1) if desc_m else "MISSING")
    
    schemas = re.findall(r'@type["\']?:\s*["\']([^"\']+)["\']', code)
    print("Schemas found:", set(schemas))
    
    faq_count = len(re.findall(r'\{\s*q:', code))
    print("FAQ items count:", faq_count)
