import os
import json

with open("audit/idrees_products.json", "r", encoding="utf-8") as f:
    products = json.load(f)["products"]

print(f"Generating product js endpoints for {len(products)} products...")

os.makedirs("public/products", exist_ok=True)

for p in products:
    handle = p.get("handle")
    if not handle:
        continue
    content = json.dumps(p, ensure_ascii=False)
    
    # Write to public/products/<handle>.js
    dest1 = f"public/products/{handle}.js"
    with open(dest1, "w", encoding="utf-8") as fp:
        fp.write(content)
        
    # Also write to public/idreesleather/products/<handle>/index.js or <handle>.js
    dest2 = f"public/idreesleather/products/{handle}.js"
    with open(dest2, "w", encoding="utf-8") as fp:
        fp.write(content)

print(f"Successfully generated {len(products)} product JS endpoints!")
