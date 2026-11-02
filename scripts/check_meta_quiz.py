import re

path = "src/data/core_metadata.ts"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

m = re.search(r'\"food-safety-quiz\":\s*\{([^}]+)\}', text)
if m:
    print("Found current metadata:")
    print(m.group(0))
else:
    print("Not found in core_metadata.ts")
