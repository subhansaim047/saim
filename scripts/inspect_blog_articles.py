import sys
sys.stdout.reconfigure(encoding='utf-8', errors='replace')

with open('app/nextjs-developer-uk/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(155, 185):
    print(f"{i+1}: {lines[i]}", end="")
