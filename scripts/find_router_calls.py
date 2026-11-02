import os
from bs4 import BeautifulSoup

for comp in ['BlogPost1Page.tsx', 'BlogPost2Page.tsx', 'BlogPost3Page.tsx']:
    p = os.path.join(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components', comp)
    lines = open(p, encoding='utf-8').readlines()
    print(f"=== {comp} router.push calls ===")
    for idx, line in enumerate(lines):
        if "router.push" in line:
            print(f"  Line {idx+1}: {line.strip()}")
