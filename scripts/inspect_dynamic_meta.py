with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i in range(30, 105):
    print(f"{i+1}: {lines[i]}")
