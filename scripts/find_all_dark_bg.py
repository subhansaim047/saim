import os
import re

files_checked = []
patterns = [
    r'bg-\[#0[a-fA-F0-9]{5}\]',
    r'bg-\[#0[a-fA-F0-9]{2}\]',
    r'bg-\[#1[a-fA-F0-9]{5}\]',
    r'bg-zinc-950',
    r'bg-neutral-950',
    r'bg-gray-950',
]

def check_file(path):
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        lines = f.readlines()
    results = []
    for idx, line in enumerate(lines):
        for pat in patterns:
            if re.search(pat, line):
                results.append((idx + 1, line.strip()))
    return results

for root, _, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts', '.css')):
            p = os.path.join(root, f)
            res = check_file(p)
            if res:
                print(f"=== {p} ===")
                for line_num, l in res:
                    print(f"  L{line_num}: {l}")

for root, _, files in os.walk('app'):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            p = os.path.join(root, f)
            res = check_file(p)
            if res:
                print(f"=== {p} ===")
                for line_num, l in res:
                    print(f"  L{line_num}: {l}")
