import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i in range(134, 185):
    print(f"{i+1}: {lines[i]}")
