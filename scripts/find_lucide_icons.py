import os, re

for f in sorted(os.listdir('src/components')):
    p = os.path.join('src/components', f)
    if os.path.isfile(p) and f.endswith('.tsx'):
        with open(p, 'r', encoding='utf-8', errors='ignore') as fl:
            c = fl.read()
            m = re.findall(r'from\s+["\']lucide-react["\']', c)
            if m:
                # find the import statement
                lines = [line.strip() for line in c.split('\n') if 'lucide-react' in line]
                print(f"{f}: {lines}")
