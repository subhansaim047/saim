with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.rfind('FALLBACK_DEEP_CONTENT')
print("Found FALLBACK_DEEP_CONTENT at:", idx)
print("Context around it:\n", text[idx-200:idx+100])
