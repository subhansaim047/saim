import sys
sys.stdout.reconfigure(encoding='utf-8')
path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find("FoodSafetyQuizTool templateId={template.id}")
print(text[pos-100:pos+300])
