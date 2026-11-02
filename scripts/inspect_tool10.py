import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

# 1. Tracker info
with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\audit\tools-seo-tracker.json', 'r', encoding='utf-8') as f:
    tracker = json.load(f)
tool10 = [t for t in tracker if t.get('slug') == 'basic-food-preparation-rules'][0]
print("=== TRACKER ENTRY ===")
print(json.dumps(tool10, indent=2))

# 2. Metadata info
with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\core_metadata.json', 'r', encoding='utf-8') as f:
    meta = json.load(f)
route = '/food-safety-templates/basic-food-preparation-rules'
print("\n=== CORE METADATA ===")
print(json.dumps(meta.get(route), indent=2))

# 3. Templates info
with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\templates.json', 'r', encoding='utf-8') as f:
    templates = json.load(f)
template_entry = [t for t in templates if t.get('slug') == 'basic-food-preparation-rules']
print("\n=== TEMPLATES.JSON ENTRY ===")
if template_entry:
    print(json.dumps(template_entry[0], indent=2))
else:
    print("Not found in templates.json")
