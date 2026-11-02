import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i in range(450, 520):
    if i < len(lines):
        print(f"{i+1}: {lines[i].rstrip()}")
