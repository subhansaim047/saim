with open('public/burger-garage/about.html', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

import re
print("Head section:")
head = re.findall(r'<head>(.*?)</head>', text, re.DOTALL)
if head:
    print(head[0][:600])

idx = text.find('<body')
print("\nBody section:")
print(text[idx:idx+150])
