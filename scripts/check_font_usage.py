import os

matches = []
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css')):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8', errors='ignore') as f:
                c = f.read()
            if 'Fraunces' in c or 'fraunces' in c:
                matches.append(('Fraunces', p))
            if 'Futura' in c or 'futura' in c:
                matches.append(('Futura', p))

for m in matches:
    print(m)
print(f"Total matches: {len(matches)}")
