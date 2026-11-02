with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'source' in line.lower() or 'statutory' in line.lower() or 'regulatory' in line.lower():
        print(f"{i+1}: {line.strip()[:100]}")
