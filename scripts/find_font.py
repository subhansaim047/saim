import os

for root, dirs, files in os.walk('.'):
    if '.git' in root or '.next' in root or 'node_modules' in root:
        continue
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css', '.html', '.js', '.mjs')):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            if 'onlinewebfonts' in content:
                print(f"Found in: {p}")
