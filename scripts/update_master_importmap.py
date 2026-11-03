import os
import json
from bs4 import BeautifulSoup

soup = BeautifulSoup(open("public/idreesleather/index.html", encoding="utf-8"), "html.parser")
im = soup.find("script", type="importmap")
data = json.loads(im.string)

js_files = set(os.listdir("public/idreesleather/js"))

updated_imports = {}
for k, v in data.get("imports", {}).items():
    clean_name = v.split("?")[0].split("/")[-1]
    if not clean_name.endswith(".js"):
        clean_name += ".js"
    if clean_name in js_files:
        updated_imports[k] = f"/idreesleather/js/{clean_name}"
    else:
        print(f"Warning: {k} -> {clean_name} not in js_files")
        updated_imports[k] = f"/idreesleather/js/{clean_name}"

# Add facets and results-list if missing
if "@theme/facets" not in updated_imports and "facets.js" in js_files:
    updated_imports["@theme/facets"] = "/idreesleather/js/facets.js"
if "@theme/results-list" not in updated_imports and "results-list.js" in js_files:
    updated_imports["@theme/results-list"] = "/idreesleather/js/results-list.js"

data["imports"] = updated_imports

with open("audit/master_importmap.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

print("Saved audit/master_importmap.json successfully!")
