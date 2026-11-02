import sys

sys.stdout.reconfigure(encoding='utf-8')

deep_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(deep_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(1150, min(1175, len(lines))):
    print(f"L{i+1}: {lines[i]}", end='')
