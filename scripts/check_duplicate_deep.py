with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(4970, min(len(lines), 5035)):
    print(f"{i+1}: {lines[i]}", end="")
