with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'KOSHER_CERTIFICATION_TASKS' in line:
        print(f"Line {i+1}: {line}")
        for j in range(i, min(len(lines), i+45)):
            print(f"{j+1}: {lines[j]}", end="")
        break
