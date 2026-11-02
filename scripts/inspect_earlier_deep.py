with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

print("--- 65344 (kitchen-prep-list-template) ---")
print(text[65344:65344+500])

print("\n--- 74522 (cooking-log-template) ---")
print(text[74522:74522+500])
