import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i, line in enumerate(lines):
    if "Editorial Trust" in line or "Conversion Banner" in line or "Direct Answer Box" in line or "takeaway website with allergen filter" in line:
        print(f"--- Line {i+1}: {line.strip()} ---")
        start = max(0, i - 5)
        end = min(len(lines), i + 25)
        for j in range(start, end):
            print(f"{j+1}: {lines[j]}")
