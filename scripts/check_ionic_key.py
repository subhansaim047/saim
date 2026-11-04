import json

with open("audit/all_products_detailed.json", "r", encoding="utf-8") as f:
    data = json.load(f)

ionic_keys = [k for k in data.keys() if "ionic" in k.lower()]
print("Ionic keys:", ionic_keys)
