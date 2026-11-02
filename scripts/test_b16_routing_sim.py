slugs = [
    'product-specification-sheet',
    'pest-management-plan',
    'meat-cooking-chart',
    'steak-cooking-chart',
    'turkey-cooking-chart'
]

for s in slugs:
    isProductSpec = s == "product-specification-template" or "product-specification" in s
    isMeatCooking = ("temperature-chart" in s or "temp-chart" in s or "cooking-chart" in s or "pasteurization-chart" in s or "pasteurisation-chart" in s) and \
        any(k in s for k in ["meat", "steak", "venison", "chicken", "duck", "beef", "lamb", "pork", "ham", "turkey", "fish", "burger"])
    isChecklist = any(k in s for k in ["checklist", "log", "schedule", "sheet", "opening", "closing", "sop", "audit", "delivery", "inspection", "cleaning", "slicer", "waste", "pest", "utensil"])

    print(f"Slug: {s}")
    print(f"  -> isProductSpec: {isProductSpec}")
    print(f"  -> isMeatCooking: {isMeatCooking}")
    print(f"  -> isChecklist: {isChecklist}")
