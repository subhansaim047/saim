import os
import re

blog_dir = 'app/blog'
for d in sorted(os.listdir(blog_dir)):
    p = os.path.join(blog_dir, d, 'page.tsx')
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        print(f"=== {d} ({len(lines)} lines) ===")
        # Print lines 4 to 29
        print("".join(lines[3:28]))
