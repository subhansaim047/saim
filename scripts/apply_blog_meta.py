import os
import re

blog_dir = 'app/blog'

for slug in sorted(os.listdir(blog_dir)):
    p = os.path.join(blog_dir, slug, 'page.tsx')
    if not os.path.exists(p):
        continue
    
    with open(p, 'r', encoding='utf-8') as f:
        content = f.read()

    canonical_url = f"https://www.saimdev.site/blog/{slug}"
    
    # 1. Update alternates to include languages
    if 'languages:' not in content:
        pattern = r"alternates:\s*\{\s*canonical:\s*['\"][^'\"]+['\"],?\s*\}"
        rep_can = (
            "alternates: {\n"
            f"    canonical: '{canonical_url}',\n"
            "    languages: {\n"
            f"      'en-GB': '{canonical_url}',\n"
            "    },\n"
            "  }"
        )
        content = re.sub(pattern, rep_can, content, count=1)

    # 2. Add robots: { index: true, follow: true } if not present
    if 'robots:' not in content:
        old_alt = r"(\s*)(alternates:\s*\{)"
        rep_alt = r"\1robots: {\n\1  index: true,\n\1  follow: true,\n\1},\n\1\2"
        content = re.sub(old_alt, rep_alt, content, count=1)

    # 3. Add creator to twitter if not present
    if 'creator:' not in content:
        old_tw = r"(twitter:\s*\{\s*card:\s*['\"]summary_large_image['\"],)"
        rep_tw = r"\1\n    creator: '@saimwebdev',"
        content = re.sub(old_tw, rep_tw, content, count=1)

    # 4. For natashas-law, clean up single quotes if needed
    if slug == 'natashas-law-ppds-food-labelling-guide':
        content = content.replace(
            "title: 'Natasha\\'s Law PPDS Food Labelling Guide for UK Food',",
            'title: "Natasha\'s Law PPDS Food Labelling Guide for UK Food",'
        )
        content = content.replace(
            "description: 'Complete UK guide to Natasha\\'s Law and PPDS food labelling. Learn packaging rules, compound ingredient declarations, and mandatory allergen bolding.',",
            'description: "Complete UK guide to Natasha\'s Law and PPDS food labelling. Learn packaging rules, compound ingredient declarations, and mandatory allergen bolding.",'
        )

    with open(p, 'w', encoding='utf-8', newline='') as f:
        f.write(content)
    print(f"[OK] Updated blog post: {slug}")

print("All blog posts processed.")
