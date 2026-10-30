"""
Fix Hotbite multiple H1 tags -> change 2nd and 3rd to h2
Site style: Framer-exported HTML, minimal classes
"""
import re, sys

FILE = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\public\hotbite\index.html"

with open(FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Find all H1 matches
h1_pattern = re.compile(r'(<h1)([^>]*>)', re.IGNORECASE)
matches = list(h1_pattern.finditer(content))

print(f"Found {len(matches)} H1 tags")
if len(matches) <= 1:
    print("Only 1 H1 — nothing to fix.")
    sys.exit(0)

# Replace 2nd and 3rd occurrences: h1 -> h2
# We need to replace both opening AND closing tags
# Strategy: replace from end to avoid offset shift

# Find all opening h1 and closing h1 pairs
full_h1_pattern = re.compile(r'<h1([^>]*)>(.*?)</h1>', re.IGNORECASE | re.DOTALL)
full_matches = list(full_h1_pattern.finditer(content))
print(f"Found {len(full_matches)} full H1 blocks")

if len(full_matches) < 2:
    print("Less than 2 full H1 blocks found, manual review needed.")
    sys.exit(1)

# Replace from last to first to preserve offsets
result = content
replacements_done = 0

for match in reversed(full_matches[1:]):  # Skip first (keep it), replace rest
    old = match.group(0)
    new = old.replace('<h1', '<h2', 1).replace('</h1>', '</h2>', 1)
    # case-insensitive replace at exact position
    result = result[:match.start()] + new + result[match.end():]
    replacements_done += 1
    print(f"Replaced H1 at position {match.start()} -> H2")

with open(FILE, "w", encoding="utf-8") as f:
    f.write(result)

# Verify
verify_matches = list(re.finditer(r'<h1', result, re.IGNORECASE))
print(f"\nAfter fix: {len(verify_matches)} H1 tags remain")
print(f"Total replacements done: {replacements_done}")
print("Done!")
