with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('export const TOOL_DEEP_CONTENT')
print(text[:idx])
