import json
from collections import Counter

with open('audit_crawl_full_results.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(f"Total pages crawled: {data['total_crawled']}")
print(f"Duplicate titles: {data['duplicate_titles']}")
print(f"Duplicate descriptions: {data['duplicate_descriptions']}")

all_issues = []
for p in data['pages']:
    for issue in p.get('issues', []):
        all_issues.append((p['url'], issue['severity'], issue['issue']))

print(f"\nTotal issue items flagged: {len(all_issues)}")
issue_counts = Counter([iss[2] for iss in all_issues])
for issue, count in issue_counts.most_common(15):
    print(f"  {issue}: {count}")

print("\n--- Detailed sample of issues ---")
for url, sev, iss in all_issues[:20]:
    print(f"[{sev}] {url} -> {iss}")
