import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('C:/Users/subhan/.gemini/antigravity/scratch/saim/scripts/run_all_guards.mjs', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'core_metadata' in l or 'coreMetadata' in l:
        print(f"{i+1}: {l.strip()}")
