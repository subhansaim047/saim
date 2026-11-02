import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

count_ufffd = text.count('\ufffd')
print(f"Occurrences of \\ufffd: {count_ufffd}")

# Check sample lines with \ufffd
if count_ufffd > 0:
    lines = text.splitlines()
    for i, line in enumerate(lines):
        if '\ufffd' in line:
            print(f"Line {i+1}: {line}")
            if i > 50:
                break
