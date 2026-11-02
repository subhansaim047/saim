with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

print('First 60 lines of tool_deep_content.ts:')
print(''.join(lines[:60]))
