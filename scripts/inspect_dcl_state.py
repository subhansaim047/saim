with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(2575, min(2660, len(lines))):
    print(f"{i+1}: {lines[i]}", end='')
