import sys

sys.stdout.reconfigure(encoding='utf-8')

deep_path = r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts'
with open(deep_path, 'r', encoding='utf-8') as f:
    content = f.read()

bad_str = '"cleaning-schedule": {,\n\n  "cleaning-checklist-template": {'
good_str = '"cleaning-checklist-template": {'

if bad_str in content:
    content = content.replace(bad_str, good_str)
    print("Repaired bad_str.")
else:
    print("Could not find exact bad_str, searching pattern...")
    import re
    content = re.sub(r'"cleaning-schedule":\s*\{\s*,\s*"cleaning-checklist-template":\s*\{', '"cleaning-checklist-template": {', content)
    print("Regex replacement run.")

with open(deep_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved repaired tool_deep_content.ts.")
