with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(264, 315):
    if i < len(lines):
        print(f"{i+1}: {lines[i]}", end="")
