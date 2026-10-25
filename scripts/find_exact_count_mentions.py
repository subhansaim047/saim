import os, re

matches = []
for root, _, files in os.walk('.'):
    if any(k in root for k in ['node_modules', '.next', '.git']):
        continue
    for f in files:
        if f.endswith(('.tsx', '.ts', '.md', '.json', '.html')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8', errors='ignore') as fp:
                for idx, line in enumerate(fp, 1):
                    for num in ['160', '162', '170', '171']:
                        if re.search(r'\b' + num + r'(\+| items|\s+templates|\s+resources|\s+checklists|\s+free)?\b', line, re.IGNORECASE):
                            matches.append((p, idx, line.strip()))

for p, idx, l in matches[:30]:
    print(f"{p}:{idx} -> {l[:110]}")
