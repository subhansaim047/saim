slugs = [
    'proper-food-storage-chart',
    'sanitation-standard-operating-procedures',
    'what-are-the-critical-control-points-for-food-safety',
    'vacuum-sealed-food-shelf-life-chart',
    'fsma-food-traceability-list'
]

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\TemplateDetailPage.tsx', encoding='utf-8') as f:
    text = f.read()

for s in slugs:
    isFoodStorage = "food-storage-chart" in s or "walk-in-cooler" in s
    isTraceability = "traceability" in s
    isHaccp = "haccp" in s or "critical-control" in s or "hazard-analysis" in s
    isChecklist = any(k in s for k in ["checklist", "log", "schedule", "sheet", "opening", "closing", "sop", "audit", "delivery", "inspection", "cleaning", "slicer", "waste", "pest", "sanitation", "procedure"])
    print(f"Slug '{s}':")
    print(f"  isFoodStorage={isFoodStorage}, isTraceability={isTraceability}, isHaccp={isHaccp}, isChecklist={isChecklist}")
