import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
print(f"Total lines: {len(lines)}")
for i, line in enumerate(lines):
    if "schema" in line.lower() or "metadata" in line.lower() or "date" in line.lower():
        print(f"Line {i+1}: {line.strip()[:100]}")
