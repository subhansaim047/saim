import os

demo_files = [
    "public/frenchyse/index.html",
    "public/hotbite/index.html",
    "public/burger-garage/index.html",
    "public/anzaar/index.html"
]

idrees_link = '<a href="/idreesleather/index.html" style="color:#f59e0b; text-decoration:none; font-weight:600; font-size:11px; padding:1px 6px; border-radius:3px; background:rgba(245,158,11,0.1);">Idrees Leather</a>'

for path in demo_files:
    if not os.path.exists(path):
        continue
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "idreesleather" in content:
        print(f"Already updated: {path}")
        continue
    
    # Look for hotbite link
    needle = '<a href="/hotbite"'
    idx = content.find(needle)
    if idx != -1:
        end_a = content.find("</a>", idx)
        if end_a != -1:
            end_idx = end_a + 4
            content = content[:end_idx] + "\n    " + idrees_link + content[end_idx:]
            with open(path, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated demo banner in {path}")
        else:
            print(f"Could not find closing </a> in {path}")
    else:
        print(f"Needle not found in {path}")
