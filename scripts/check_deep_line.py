with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

total = len(lines)
start = max(0, 4290)
end = min(total, 4325)
print(f"Total lines: {total}")
for i in range(start, end):
    print(f"{i+1}: {lines[i]}", end="")
