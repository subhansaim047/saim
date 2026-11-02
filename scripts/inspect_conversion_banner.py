import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i in range(710, min(len(lines), 755)):
    print(f"{i+1}: {lines[i]}")
