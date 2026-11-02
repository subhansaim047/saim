import json

with open("audit/content_audit_raw.json", "r", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total pages in audit: {len(data)}")
for p in data:
    u = p['url'].replace('https://www.saimdev.site', '')
    if u == '': u = '/'
    print(f"{u:45} | Words: {p['word_count']:4} | H2s: {p['h2_count']:2} | H3s: {p['h3_count']:2} | Disclaimer: {p['has_disclaimer']} | FSA: {p['has_fsa']}")
