import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

res = subprocess.run(['node', 'scripts/run_all_guards.mjs'], capture_output=True, text=True, encoding='utf-8', errors='replace')

lines = res.stdout.splitlines()
fail_lines = [line for line in lines if 'FAIL' in line or '❌' in line or 'Error' in line]
print(f"Total fail lines found: {len(fail_lines)}")
for f in fail_lines[:25]:
    print(f)
