with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(15):
    print(f"{i+1}: {repr(lines[i])}")
