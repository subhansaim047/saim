import os
import re

blog_dir = 'app/blog'
for d in os.listdir(blog_dir):
    p = os.path.join(blog_dir, d, 'page.tsx')
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()
        has_article_schema = '"@type": "Article"' in content or '"@type": "BlogPosting"' in content
        has_schema_image = '"image":' in content
        print(f"[{d}] Article schema: {has_article_schema} | Has schema image: {has_schema_image}")
