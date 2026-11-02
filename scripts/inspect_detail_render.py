with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(600, 645):
    if i < len(lines):
        print(f"{i+1}: {lines[i].encode('ascii', 'replace').decode('ascii')}", end='')
