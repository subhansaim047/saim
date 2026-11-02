import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/tool_deep_content.ts'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(1003, 1045):
    if i < len(lines):
        print(f"{i+1}: {lines[i].rstrip()}")
