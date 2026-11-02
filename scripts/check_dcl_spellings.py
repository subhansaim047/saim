import sys
sys.stdout.reconfigure(encoding='utf-8')
path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

print("Contains sanitized:", "sanitized" in text)
print("Contains color:", "color" in text)
print("Contains labeled:", "labeled" in text)
