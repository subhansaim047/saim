import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('public/robots.txt', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

text = text.replace('# Saim Dev \ufffd\ufffd" robots.txt', '# Saim Dev - robots.txt')
text = text.replace('# Saim Dev ?" robots.txt', '# Saim Dev - robots.txt')

with open('public/robots.txt', 'w', encoding='utf-8') as f:
    f.write(text)

print("Cleaned public/robots.txt")
