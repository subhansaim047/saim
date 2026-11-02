import sys

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

# Replace defense with defence in freezer-temperature-chart
old_phrase = 'due diligence defense under Section 21'
new_phrase = 'due diligence defence under Section 21'

if old_phrase in text:
    text = text.replace(old_phrase, new_phrase)
    with open(path, "w", encoding="utf-8") as f:
        f.write(text)
    print("Replaced defense with defence")
else:
    print("Phrase not found or already defence")
