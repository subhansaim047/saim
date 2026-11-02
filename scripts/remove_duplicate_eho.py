import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

FILE_PATH = 'C:/Users/subhan/.gemini/antigravity/scratch/saim/src/data/tool_deep_content.ts'

with open(FILE_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

# Find the second eho-checklist definition and remove it
parts = content.split('  "eho-checklist": {')
if len(parts) == 3:
    # First part: before first eho-checklist
    # Second part: first eho-checklist content + content until second eho-checklist
    # Third part: second eho-checklist content + rest of file
    
    # In third part, find where this second eho-checklist entry ends (ends at "},\n\n  \"deep-cleaning-checklist\":")
    end_marker = '  "deep-cleaning-checklist": {'
    idx = parts[2].find(end_marker)
    if idx != -1:
        rest = parts[2][idx:]
        content = parts[0] + '  "eho-checklist": {' + parts[1] + rest
        print("Successfully removed second eho-checklist duplicate!")
    else:
        print("Could not find end_marker in parts[2]!")
else:
    print(f"Unexpected number of eho-checklist parts: {len(parts)}")

with open(FILE_PATH, 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved tool_deep_content.ts")
