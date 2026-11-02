path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace question: with q: and answer: with a: in the newly appended section
idx = content.find('"restaurant-hood-cleaning": {')
if idx != -1:
    before = content[:idx]
    after = content[idx:]
    after = after.replace('question: "', 'q: "').replace('answer:\n          "', 'a:\n          "')
    content = before + after
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed question/answer to q/a in Batch 15")
else:
    print("Could not find restaurant-hood-cleaning section!")
