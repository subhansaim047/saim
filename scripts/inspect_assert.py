import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('scripts/run_all_guards.mjs', 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.splitlines()
for i in range(min(50, len(lines))):
    print(f"{i+1}: {lines[i]}")
