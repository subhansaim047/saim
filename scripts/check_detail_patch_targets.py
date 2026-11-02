import sys
sys.stdout.reconfigure(encoding='utf-8')
path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Check imports
print("Imports check:")
print(text[text.find("import { FoodSafetyQuizTool"):text.find("import { DigitalChecklistTool") + 80])

# Check conditions
print("\nConditions check:")
print(text[text.find("const isQuizTool ="):text.find("const isIndexableSlug =")])
