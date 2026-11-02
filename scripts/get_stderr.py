import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')
res = subprocess.run(['node', 'scripts/run_all_guards.mjs'], capture_output=True, text=True, encoding='utf-8', errors='replace')
print("--- STDERR FROM RUN_ALL_GUARDS ---")
print(res.stderr)
