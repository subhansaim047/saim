import os
import re

def scan_dir(target_dir):
    for root, dirs, files in os.walk(target_dir):
        if 'node_modules' in root or '.next' in root:
            continue
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                fpath = os.path.join(root, file)
                with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                # Check section tags
                sections = re.findall(r'<section[^>]*className=["\']([^"\']*)["\']', content)
                for s in sections:
                    if 'bg-' in s:
                        print(f"[SECTION] {fpath}: {s[:100]}")
                
                # Check top-level div or main tags
                mains = re.findall(r'<main[^>]*className=["\']([^"\']*)["\']', content)
                for m in mains:
                    if 'bg-' in m:
                        print(f"[MAIN] {fpath}: {m[:100]}")

print("--- SCANNING ---")
scan_dir("src/components")
scan_dir("app")
