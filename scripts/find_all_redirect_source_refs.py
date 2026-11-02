import os
import glob
import re

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

with open(os.path.join(base_dir, "next.config.mjs"), "r", encoding="utf-8") as f:
    config_text = f.read()

redirect_matches = re.findall(r"source:\s*['\"]([^'\"]+)['\"],\s*destination:\s*['\"]([^'\"]+)['\"]", config_text)
redirect_sources = {src.strip(): dst.strip() for src, dst in redirect_matches}

found_links = []
for root, _, files in os.walk(base_dir):
    if "node_modules" in root or ".next" in root or ".git" in root:
        continue
    for file in files:
        if file.endswith((".tsx", ".ts", ".jsx", ".js", ".json", ".html")):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            for src, dst in redirect_sources.items():
                if f'"{src}"' in content or f"'{src}'" in content or f"`{src}`" in content:
                    found_links.append((file_path, src, dst))

print(f"Total files directly referencing a redirect source: {len(found_links)}")
for fpath, src, dst in sorted(set(found_links)):
    rel = os.path.relpath(fpath, base_dir)
    print(f"  {rel}: '{src}' -> '{dst}'")
