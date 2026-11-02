with open('scripts/run_all_guards.mjs', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r'why-small-business[^\s"\'`,;]*', text)
print('Found in scripts/run_all_guards.mjs:', set(matches))
