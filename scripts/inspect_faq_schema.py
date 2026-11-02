import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i in range(180, 230):
    print(f"{i+1}: {lines[i]}")
