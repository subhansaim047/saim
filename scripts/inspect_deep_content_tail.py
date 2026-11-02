import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/tool_deep_content.ts'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("Total lines:", len(lines))
for i, line in enumerate(lines[-35:], start=len(lines)-34):
    print(f"{i}: {line.rstrip()}")
