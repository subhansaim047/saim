import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')
res = subprocess.run(['node', 'scripts/run_all_guards.mjs'], capture_output=True, text=True, encoding='utf-8', errors='replace')
lines = res.stdout.splitlines()

errors = [l for l in lines if not l.startswith('✅') and len(l.strip()) > 0]
print(f"Total non-pass lines: {len(errors)}")
for e in errors:
    print(e)
