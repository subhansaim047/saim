with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
print(f"Total lines in app/page.tsx: {len(lines)}")
print("First 40 lines:")
for i in range(min(40, len(lines))):
    print(f"{i+1}: {lines[i]}")
