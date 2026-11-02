with open('src/components/tools/DigitalChecklistTool.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines[:50]):
    if 'interface CheckItem' in line or 'type CheckItem' in line:
        for j in range(i, min(i+20, len(lines))):
            print(lines[j], end='')
        break

print("\n--- ToolDeepContent ---")
with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    dlines = f.readlines()

for i, line in enumerate(dlines[:60]):
    if 'interface ToolDeepContent' in line or 'type ToolDeepContent' in line:
        for j in range(i, min(i+35, len(dlines))):
            print(dlines[j], end='')
        break
