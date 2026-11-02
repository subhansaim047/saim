with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines[149:280]):
    print(f'{i+150}: {l}', end='')
