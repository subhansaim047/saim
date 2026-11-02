with open('app/tools/ppds-label-generator/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(140, 180):
    print(f"{i+1}: {lines[i]}")
