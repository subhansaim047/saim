with open('src/components/FoodSafetyTemplatesPage.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    '<span>Food Cost Calculator</span>',
    '<span>Interactive Food Cost Calculator</span>'
)

with open('src/components/FoodSafetyTemplatesPage.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print("Updated line 274 in FoodSafetyTemplatesPage.tsx successfully!")
