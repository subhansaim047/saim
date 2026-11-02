with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(4280, 4305):
    print(f"{i+1}: {lines[i]}", end="")
