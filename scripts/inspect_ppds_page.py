import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
print(f"Total lines: {len(lines)}")
for i, line in enumerate(lines):
    if "faqs" in line.lower() or "schema" in line.lower() or "takeaway" in line.lower() or "last reviewed" in line.lower() or "h1" in line.lower():
        print(f"Line {i+1}: {line.strip()[:100]}")
