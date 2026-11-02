# scripts/test_batch13_routing.py
with open('src/components/TemplateDetailPage.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

slugs = ['recipe-card-generator', 'food-temperatures-poster', 'danger-zone-for-food', 'fridge-temperature-chart', 'burger-temp-chart']
for s in slugs:
    print(f"Slug '{s}' explicit in TemplateDetailPage: {s in text}")
