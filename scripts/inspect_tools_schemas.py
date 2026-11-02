import re
import glob

files = [
    'app/tools/page.tsx',
    'app/tools/food-cost-calculator/page.tsx',
    'app/tools/allergen-matrix-generator/page.tsx',
    'app/tools/ppds-label-generator/page.tsx',
    'app/tools/recipe-batch-calculator/page.tsx',
]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    print(f"=== {fpath} ===")
    matches = re.findall(r'<script[\s\S]*?application/ld\+json[\s\S]*?>([\s\S]*?)</script>', content)
    print(f"  Found {len(matches)} schema blocks")
    for i, m in enumerate(matches):
        types = re.findall(r'"@type":\s*"([^"]+)"', m)
        print(f"    Block {i+1} types: {types}")
