path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

target = 'slug: "uk-food-hygiene-rating-scheme-5-star-checklist"\n  }\n  "health-inspection-checklist": {'
print("Target in text:", target in text)
pos = text.find('"health-inspection-checklist": {')
print(repr(text[pos-80:pos+40]))
