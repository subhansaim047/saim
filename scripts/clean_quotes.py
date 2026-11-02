with open('app/services/takeaway-web-design/page.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    "description: 'Custom Next.js takeaway ordering websites from £250. Avoid 30%+ Just Eat fees with built-in Natasha\\'s Law allergen filters and WhatsApp kitchen dispatch.',",
    'description: "Custom Next.js takeaway ordering websites from £250. Avoid 30%+ Just Eat fees with built-in Natasha\'s Law allergen filters and WhatsApp kitchen dispatch.",'
)
c = c.replace(
    "description: 'Custom Next.js takeaway ordering websites from £250. Avoid 30%+ Just Eat fees with built-in Natasha\\'s Law allergen filters and WhatsApp kitchen dispatch.',",
    'description: "Custom Next.js takeaway ordering websites from £250. Avoid 30%+ Just Eat fees with built-in Natasha\'s Law allergen filters and WhatsApp kitchen dispatch.",'
)

with open('app/services/takeaway-web-design/page.tsx', 'w', encoding='utf-8', newline='') as f:
    f.write(c)

with open('app/blogs/page.tsx', 'r', encoding='utf-8') as f:
    c2 = f.read()

c2 = c2.replace(
    "description: 'Practical guides on Next.js web development for small businesses and food hygiene compliance, SFBB logs, and Natasha\\'s Law for UK restaurants.',",
    'description: "Practical guides on Next.js web development for small businesses and food hygiene compliance, SFBB logs, and Natasha\'s Law for UK restaurants.",'
)

with open('app/blogs/page.tsx', 'w', encoding='utf-8', newline='') as f:
    f.write(c2)

print("Quotes cleaned.")
