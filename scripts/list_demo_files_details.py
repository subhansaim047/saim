import glob
import re

folders = ['burger-garage', 'frenchyse', 'anzaar', 'hotbite']
files = []
for fld in folders:
    files.extend(glob.glob(f'public/{fld}/**/*.html', recursive=True))

print(f"Total HTML demo files: {len(files)}")
for f in sorted(files):
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        content = fp.read()
    
    title_m = re.findall(r'<title>(.*?)</title>', content)
    title = title_m[0] if title_m else "NO TITLE"
    
    robots_m = re.findall(r'<meta[^>]*name=["\']robots["\'][^>]*content=["\']([^"\']+)["\']', content, re.IGNORECASE)
    robots = robots_m[0] if robots_m else "NO ROBOTS"
    
    print(f"{f} -> Robots: [{robots}] | Title: [{title}]")
