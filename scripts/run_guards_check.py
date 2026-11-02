import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

cmd = ['node', r'C:\Users\subhan\.gemini\antigravity\scratch\saim\scripts\run_all_guards.mjs']
p = subprocess.run(cmd, cwd=r'C:\Users\subhan\.gemini\antigravity\scratch\saim', capture_output=True, text=True)

print("Exit code:", p.returncode)
print(p.stdout)
if p.stderr:
    print("Stderr:", p.stderr)
