import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools_reports\chopping-board-colour-chart.json', 'r', encoding='utf-8') as f:
    report = json.load(f)

print("Competitors:")
for c in report.get("competitors", []):
    print(f" - {c.get('name')}: {c.get('url')} | Score: {c.get('score')}")

print("\nQuality Score Comparison:")
print(json.dumps(report.get("quality_score_comparison"), indent=2))
