import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools_reports\chopping-board-colour-chart.json', 'r', encoding='utf-8') as f:
    report = json.load(f)

print("Keys in report:", list(report.keys()))
print("Competitors analyzed count:", len(report.get("competitors_analyzed", [])))
print("Summary:", report.get("summary"))
