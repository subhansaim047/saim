with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(1165, 1225):
    if i < len(lines):
        print(f"{i+1}: {lines[i]}", end="")
