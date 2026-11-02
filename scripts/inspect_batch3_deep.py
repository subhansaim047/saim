import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts', 'r', encoding='utf-8') as f:
    deep_content = f.read()

batch3_tools = tracker[10:15]

for t in batch3_tools:
    slug = t['slug']
    print("=" * 60)
    print(f"Tool #{t['priority_rank']}: {slug} (Category: {t['category']})")
    print(f"URL: {t['url']}")
    print(f"Main Keyword: {t['main_keyword']} | Opp Score: {t['opportunity_score']}")
    
    # Metadata
    m = meta.get(slug)
    if m:
        print(f"Title: {m.get('title')} ({len(m.get('title', ''))} chars)")
        print(f"Desc: {m.get('desc')} ({len(m.get('desc', ''))} chars)")
    else:
        print("NO METADATA in core_metadata.json!")
        
    # Deep content
    has_deep = f'"{slug}":' in deep_content
    print(f"Has deep content in tool_deep_content.ts: {has_deep}")
