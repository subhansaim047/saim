with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

for i, line in enumerate(text.splitlines()):
    if 'isChecklistOrLog' in line:
        print(f"{i+1}: {line}")
