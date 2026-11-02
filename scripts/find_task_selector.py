with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'tasks' in line and ('const ' in line or 'let ' in line or 'function ' in line) and ('[' in line or 'switch' in line or '=' in line):
        print(f"{i+1}: {line.strip()[:80]}")
