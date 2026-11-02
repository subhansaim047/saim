import os

for slug in os.listdir("app/blog"):
    p = os.path.join("app/blog", slug, "page.tsx")
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as f:
            c = f.read()
        print(f"[{slug}] has_metadata={'metadata' in c}, has_canonical={'canonical' in c}, has_faq={'FAQPage' in c}")
