path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

target = '    slug: "uk-food-hygiene-rating-scheme-5-star-checklist"\n  }\n}};\n'
replacement = '    slug: "uk-food-hygiene-rating-scheme-5-star-checklist"\n  }\n};\n'

if target in text:
    text = text.replace(target, replacement, 1)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("Fixed extra brace in fallback")
else:
    print("Target not found")
