import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\FoodCostCalculatorTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

words = ["optimize", "optimized", "color", "customized", "analyze", "analyzed"]
for w in words:
    if w in text:
        print(f"Found {w}")
