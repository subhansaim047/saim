import sys

sys.stdout.reconfigure(encoding='utf-8')

with open(r'C:\Users\subhan\.gemini\antigravity\scratch\saim\src\data\tool_deep_content.ts', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('"basic-food-preparation-rules"')
end_idx = text.find('},\n  "', idx + 30)
if end_idx == -1:
    end_idx = text.find('};\n', idx + 30)

chunk = text[idx:end_idx]
print(f"Total characters: {len(chunk)}")
words = chunk.split()
print(f"Total raw words: {len(words)}")

# Count FAQs
import re
faqs = re.findall(r'q:\s*"([^"]+)"', chunk)
print(f"Total FAQs: {len(faqs)}")
for i, q in enumerate(faqs):
    print(f"  FAQ {i+1}: {q}")
