with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

for s in ['reheating-food-temperature-guide', 'five-food-safety-rules']:
    idx = text.find(f'"{s}":')
    if idx != -1:
        print(f"--- {s} ---")
        print(text[idx:idx+500])
        print("...")
