with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(995, 1010):
    print(f"{i+1}: {repr(lines[i])}")
