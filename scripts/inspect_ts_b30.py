with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(5680, min(5705, len(lines))):
    print(f"{i+1}: {lines[i]}", end='')
