import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\HaccpPlanBuilderTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines[70:160]):
    print(f"{i+71}: {line.rstrip()}")
