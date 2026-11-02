import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
print(f"Total lines: {len(lines)}")
for i, line in enumerate(lines):
    if "<h1" in line.lower() or "grid" in line.lower() or "templates" in line.lower() or "banner" in line.lower():
        if any(w in line for w in ['<h1', 'grid-cols', 'filteredTemplates', 'Featured', 'Conversion']):
            print(f"Line {i+1}: {line.strip()[:100]}")
