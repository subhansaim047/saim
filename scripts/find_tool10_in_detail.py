import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'basic-food-preparation-rules' in line or 'template.slug ===' in line or 'template-4' in line:
        print(f"L{i+1}: {line.strip()}")
