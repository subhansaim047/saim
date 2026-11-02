with open('app/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i in range(40, len(lines)):
    print(f"{i+1}: {lines[i]}")
