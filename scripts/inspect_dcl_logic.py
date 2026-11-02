with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'getTasksForTemplate' in line:
        start = i
        for j in range(start, min(start + 80, len(lines))):
            print(f"{j+1}: {lines[j]}", end='')
        break
