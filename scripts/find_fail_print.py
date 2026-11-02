import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/run_all_guards.mjs', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i, l in enumerate(lines):
    if "QUALITY GUARDS FAILED" in l:
        print(f"Line {i+1}: {l}")
        for j in range(max(0, i-25), i+5):
            print(f"{j+1}: {lines[j]}")
