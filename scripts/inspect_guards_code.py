with open('scripts/run_all_guards.mjs', 'r', encoding='utf-8') as f:
    text = f.read()

import re
print("Guards in run_all_guards.mjs:")
guards = re.findall(r'console\.log\([^)]*Guard \d+:[^)]*\)', text)
for g in guards:
    print(g)

# Look for error pushing
errors = re.findall(r'errors\.push\([^)]+\)', text)
print(f"Total error push calls in code: {len(errors)}")
