import sys
sys.stdout.reconfigure(encoding='utf-8')
path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\tools\DigitalChecklistTool.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

print("File length:", len(text))
pos = text.find("tasks")
print("Tasks found at:", pos)
pos2 = text.find("shift")
print("Shift found at:", pos2)
pos3 = text.find("filter")
print("Filter found at:", pos3)
