path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print(f"Total lines: {len(lines)}")
for i, line in enumerate(lines[:100]):
    if "FoodSafetyQuizTool" in line or "tool" in line.lower() or "slug" in line.lower() or "ischecklist" in line.lower():
        print(f"Line {i+1}: {line.strip()}")
