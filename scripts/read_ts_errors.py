import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("--- Lines 335 to 355 ---")
for i in range(334, min(355, len(lines))):
    print(f"L{i+1}: {lines[i]}", end='')

print("\n--- Lines 1150 to 1175 ---")
for i in range(1148, min(1175, len(lines))):
    print(f"L{i+1}: {lines[i]}", end='')
