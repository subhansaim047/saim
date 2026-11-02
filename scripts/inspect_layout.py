import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('app/layout.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

print("=== app/layout.tsx ===")
print(text)
