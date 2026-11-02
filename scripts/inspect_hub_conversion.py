import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i in range(810, min(865, len(lines))):
    print(f"{i+1}: {lines[i]}")
