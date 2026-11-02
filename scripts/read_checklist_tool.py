import sys
sys.stdout.reconfigure(encoding='utf-8')
path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")
for i, line in enumerate(lines[:60]):
    print(f"{i+1}: {line.rstrip()}")
