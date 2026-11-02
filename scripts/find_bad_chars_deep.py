import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('src/data/tool_deep_content.ts', 'r', encoding='utf-8', errors='replace') as f:
    text = f.read()

bad_chars = {}
for ch in text:
    if ord(ch) > 127 and ch not in ['°', '—', '–', '£', '’', '‘', '“', '”', '•', '…', 'é', '✓', '×', '→', '←', '↑', '↓', '©', '®']:
        bad_chars[ch] = bad_chars.get(ch, 0) + 1

print("Uncommon or bad chars in tool_deep_content.ts:")
for ch, count in sorted(bad_chars.items(), key=lambda x: -x[1])[:20]:
    print(f"Char: repr={repr(ch)}, hex={hex(ord(ch))}, count={count}")
