import os

for comp in ['BlogPost1Page.tsx', 'BlogPost2Page.tsx', 'BlogPost3Page.tsx']:
    p = os.path.join(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components', comp)
    text = open(p, encoding='utf-8').read()
    print(comp)
    print("  '/blogs' count:", text.count("'/blogs'"))
    print("  'router.push' count:", text.count("router.push"))
