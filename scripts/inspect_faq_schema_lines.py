with open('app/food-safety-templates/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(175, 227):
    print(f"{i+1}: {lines[i]}")
