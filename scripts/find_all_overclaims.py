import glob
import re

patterns = [
    r'EHO-Approved',
    r'eho approved',
    r'guarantee',
    r'Fully Compliant',
    r'Real, proven',
    r'dominate'
]

files = glob.glob('app/**/*.tsx', recursive=True) + glob.glob('src/**/*.tsx', recursive=True) + glob.glob('src/**/*.ts', recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        lines = fp.readlines()
    for idx, line in enumerate(lines):
        for p in patterns:
            if re.search(p, line, re.IGNORECASE):
                # Skip legal disclaimer or tracking disclosures if legitimate
                if 'not guaranteed' in line.lower() or 'guaranteeing' in line.lower() or 'disclaimer' in line.lower() or 'privacy' in f.lower():
                    continue
                print(f"{f}:{idx+1} [{p}] -> {line.strip()[:100]}")
