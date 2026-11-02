import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\FoodCostCalculatorTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if "color" in l.lower() and "print-color-adjust" not in l:
        print(f"Line {i+1}: {l.strip()}")
