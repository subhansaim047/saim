import sys
sys.stdout.reconfigure(encoding='utf-8')

path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\scripts\run_all_guards.mjs"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

pos = text.find("Guard 3")
print(text[pos:pos+1500])
