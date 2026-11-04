import json

try:
    with open('audit/tjm_nav_links.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    print(f"Total links in audit/tjm_nav_links.json: {len(data)}")
    for item in data[:30]:
        print(item)
except Exception as e:
    print("Error:", e)
