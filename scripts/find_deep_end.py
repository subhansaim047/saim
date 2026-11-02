with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

fallback_pos = text.find('export const FALLBACK_DEEP_CONTENT')
print(f"FALLBACK_DEEP_CONTENT position: {fallback_pos}")

# Show 500 characters before FALLBACK_DEEP_CONTENT
print("--- Before FALLBACK_DEEP_CONTENT ---")
print(text[fallback_pos-500:fallback_pos+50])
