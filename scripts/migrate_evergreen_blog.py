import os, shutil

# 1. Rename folder if it exists
old_dir = 'app/blog/why-small-business-needs-website-2026'
new_dir = 'app/blog/why-small-business-needs-website'

if os.path.exists(old_dir):
    if os.path.exists(new_dir):
        shutil.rmtree(new_dir)
    os.rename(old_dir, new_dir)
    print(f"Renamed {old_dir} to {new_dir}")

# 2. Update app/blog/why-small-business-needs-website/page.tsx
page_path = f"{new_dir}/page.tsx"
with open(page_path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('/blog/why-small-business-needs-website-2026', '/blog/why-small-business-needs-website')
c = c.replace('Why Every Small Business Needs a Professional Website in 2026', 'Why Every Small Business Needs a Professional Website')
c = c.replace('in 2026. Turn local searches', '. Turn local searches')

with open(page_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print(f"Updated {page_path}")

# 3. Update BlogPost1Page.tsx
comp_path = 'src/components/BlogPost1Page.tsx'
with open(comp_path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('Do small businesses still need a website in 2026?', 'Do small businesses still need a website?')
c = c.replace('Why Every Small Business Needs a Professional Website in 2026', 'Why Every Small Business Needs a Professional Website')
c = c.replace('need a professional website in 2026, but', 'need a professional website, but')
c = c.replace("In 2026, a professional website isn't optional", "A professional website isn't optional")
c = c.replace('/blog/why-small-business-needs-website-2026', '/blog/why-small-business-needs-website')

with open(comp_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print(f"Updated {comp_path}")

# 4. Update src/components/BlogsPage.tsx
blogs_page_path = 'src/components/BlogsPage.tsx'
with open(blogs_page_path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('/blog/why-small-business-needs-website-2026', '/blog/why-small-business-needs-website')
c = c.replace('Why Every Small Business Needs a Professional Website in 2026', 'Why Every Small Business Needs a Professional Website')

with open(blogs_page_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print(f"Updated {blogs_page_path}")

# 5. Update app/sitemap.ts
sitemap_ts_path = 'app/sitemap.ts'
with open(sitemap_ts_path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('/blog/why-small-business-needs-website-2026', '/blog/why-small-business-needs-website')

with open(sitemap_ts_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print(f"Updated {sitemap_ts_path}")

# 6. Update scripts/generate_sitemap.mjs
gen_sitemap_path = 'scripts/generate_sitemap.mjs'
with open(gen_sitemap_path, 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace('/blog/why-small-business-needs-website-2026', '/blog/why-small-business-needs-website')

with open(gen_sitemap_path, 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)
print(f"Updated {gen_sitemap_path}")

# 7. Add 301 redirect in next.config.mjs
next_config_path = 'next.config.mjs'
with open(next_config_path, 'r', encoding='utf-8') as f:
    c = f.read()

target = 'async redirects() {\n    return ['
redirect_entry = """async redirects() {
    return [
      // Evergreen Blog Migration
      {
        source: '/blog/why-small-business-needs-website-2026',
        destination: '/blog/why-small-business-needs-website',
        permanent: true,
      },"""

if '/blog/why-small-business-needs-website-2026' not in c:
    c = c.replace(target, redirect_entry)
    with open(next_config_path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(c)
    print(f"Added redirect in {next_config_path}")
else:
    print("Redirect already exists in next.config.mjs")
