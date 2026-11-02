path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i, line in enumerate(lines[310:410]):
    print(f"Line {i+311}: {line.rstrip()}")
