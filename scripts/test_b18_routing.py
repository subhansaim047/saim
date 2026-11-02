slugs = [
    'food-expiration-dates-guidelines-chart',
    'canned-food-expiration-dates-chart',
    'how-long-to-keep-leftovers-chart',
    'how-long-does-butter-last-poster',
    'milk-pasteurization-temperature-time-chart'
]

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx', encoding='utf-8') as f:
    text = f.read()

for s in slugs:
    isStorage = ("walk-in-cooler" in s or "food-storage" in s or "storage-chart" in s or "shelf-life" in s or "expiration" in s or "leftover" in s or "butter" in s)
    isMasterTemp = ("food-temperature" in s or "danger-zone" in s or "hot-holding" in s or ("pasteurization" in s and "turkey" not in s))
    print(f"Slug '{s}': isStorage={isStorage}, isMasterTemp={isMasterTemp}")
