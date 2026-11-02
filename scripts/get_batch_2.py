import json

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json"
with open(path, "r", encoding="utf-8") as f:
    tracker = json.load(f)

print("Batch 2 Tools (#6 to #10):")
for item in tracker[5:10]:
    print(f"Rank {item['priority_rank']}: {item['slug']} (Score: {item['opportunity_score']}) - {item['status']}")
