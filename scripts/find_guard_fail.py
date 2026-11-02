import subprocess
import sys
sys.stdout.reconfigure(encoding='utf-8')

res = subprocess.run(
    ["node", "scripts/run_all_guards.mjs"],
    cwd=r"C:\Users\subhan\.gemini\antigravity\scratch\saim",
    capture_output=True,
    text=True,
    encoding="utf-8",
    errors="replace"
)

print("Exit code:", res.returncode)
lines = (res.stdout + "\n" + res.stderr).splitlines()
for line in lines:
    if "❌" in line or "FAIL" in line:
        print(line)
