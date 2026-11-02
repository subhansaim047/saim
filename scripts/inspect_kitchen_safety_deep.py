import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

pos = text.find('"kitchen-safety-poster":')
if pos != -1:
    print(text[pos:pos+1000])
