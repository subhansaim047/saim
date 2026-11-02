import re

with open('next.config.mjs', 'r', encoding='utf-8') as f:
    text = f.read()

redirects = re.findall(r'source:\s*[\'"]([^\'"]+)[\'"],\s*destination:\s*[\'"]([^\'"]+)[\'"]', text)

destinations = {s: d for s, d in redirects}

print(f"Total redirects configured: {len(redirects)}")
print("Checking for redirect chains:")
has_chain = False
for s, d in redirects:
    if d in destinations:
        print(f"  CHAIN FOUND: {s} -> {d} -> {destinations[d]}")
        has_chain = True

if not has_chain:
    print("  No redirect chains detected!")
