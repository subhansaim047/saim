"""
Create CONTENT_PROGRESS.md listing every single page on saimdev.site
Grouped logically with status: todo / in progress / done
"""
import xml.etree.ElementTree as ET
import json, os

tree = ET.parse('public/sitemap.xml')
root = tree.getroot()
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
sitemap_urls = [elem.text for elem in root.findall('.//sm:loc', ns)]

with open('src/data/saim_templates.ts', 'r', encoding='utf-8') as f:
    ts = f.read()
eq_idx = ts.find('=', ts.find('FOOD_SAFETY_TEMPLATES'))
arr_start = ts.find('[', eq_idx)
cat_idx = ts.find('export const ALL_CATEGORIES')
arr_end = ts.rfind('];', 0, cat_idx)
templates = json.loads(ts[arr_start:arr_end+1])

tmpl_map = {t['slug']: t for t in templates}

# Categorize URLs
core_services = []
tools = []
blogs = []
legal = []
demos = []
template_pages = []

for u in sitemap_urls:
    path = u.replace('https://www.saimdev.site', '')
    if not path or path == '/':
        core_services.append((u, 'Homepage', 'app/page.tsx', 'nextjs web development studio uk'))
    elif path.startswith('/services'):
        name = path.replace('/services/', '').replace('/services', 'Services Overview')
        kw = 'takeaway website design uk' if 'takeaway' in path else 'web development services uk'
        file_p = 'app' + path + '/page.tsx' if os.path.exists('app' + path + '/page.tsx') else 'app/services/page.tsx'
        core_services.append((u, name, file_p, kw))
    elif path in ['/nextjs-developer-uk', '/case-studies', '/technologies', '/demos', '/about', '/contact', '/blogs']:
        name = path.strip('/')
        kw = {
            'nextjs-developer-uk': 'freelance nextjs developer uk',
            'case-studies': 'nextjs website case studies',
            'technologies': 'nextjs tech stack web agency',
            'demos': 'restaurant website demos uk',
            'about': 'about saim dev nextjs studio',
            'contact': 'hire nextjs developer uk contact',
            'blogs': 'restaurant tech and web dev blog'
        }.get(name, name)
        core_services.append((u, name, f'app/{name}/page.tsx', kw))
    elif path.startswith('/tools'):
        name = path.replace('/tools/', '').replace('/tools', 'Tools Hub')
        kw = {
            'Tools Hub': 'free kitchen compliance tools uk',
            'ppds-label-generator': 'natashas law ppds food label generator uk',
            'allergen-matrix-generator': 'free 14 allergen matrix generator uk',
            'food-cost-calculator': 'commercial kitchen food cost calculator uk',
            'recipe-batch-calculator': 'commercial recipe scaler calculator uk'
        }.get(name, f'free {name} tool uk')
        tools.append((u, name, f'app/{path.strip("/")}/page.tsx', kw))
    elif path == '/food-safety-templates':
        tools.append((u, 'Food Safety Templates Hub', 'app/food-safety-templates/page.tsx', 'free food safety templates uk'))
    elif path.startswith('/blog/'):
        slug = path.replace('/blog/', '')
        kw = slug.replace('-', ' ')
        blogs.append((u, slug, f'src/components/blog/BlogPost*.tsx / app/blog/{slug}/page.tsx', kw))
    elif path in ['/terms', '/privacy', '/cookie-policy', '/disclaimer']:
        name = path.strip('/')
        legal.append((u, name, f'app/{name}/page.tsx', f'{name} saim dev'))
    elif path in ['/burger-garage', '/frenchyse', '/anzaar', '/hotbite']:
        name = path.strip('/')
        demos.append((u, f'{name} showcase demo', f'public/{name}/index.html', f'{name} takeaway website demo'))
    elif path.startswith('/food-safety-templates/'):
        slug = path.replace('/food-safety-templates/', '')
        tmpl = tmpl_map.get(slug, {})
        title = tmpl.get('title', slug)
        template_pages.append((u, slug, title, f'app/food-safety-templates/[slug]/page.tsx (slug: {slug})', f'free {slug.replace("-", " ")} template'))

out = []
out.append("# Content Audit & Optimization Progress Tracker (`CONTENT_PROGRESS.md`)\n")
out.append("> Live execution tracker for end-to-end on-page content optimization, AI-native writing, readability enhancement, and competitor gap closing across all URLs on `https://www.saimdev.site`.\n")
out.append("## Executive Summary & Status Overview\n")
out.append(f"- **Total URLs Discovered in Sitemap**: {len(sitemap_urls)}")
out.append(f"- **Core & Service Pages**: {len(core_services)}")
out.append(f"- **Interactive Tools & Hubs**: {len(tools)}")
out.append(f"- **Editorial & Compliance Blog Guides**: {len(blogs)}")
out.append(f"- **Legal & Compliance Trust Pages**: {len(legal)}")
out.append(f"- **Showcase Takeaway Demos**: {len(demos)}")
out.append(f"- **Food Safety Templates (Detail Pages)**: {len(template_pages)}\n")

out.append("### Legend\n")
out.append("- `[ ] todo` — Page queued for content audit and fix")
out.append("- `[>] in progress` — Currently undergoing deep audit, competitor benchmarking, and copy rewrite")
out.append("- `[x] done` — Optimized, verified against quality guards, and committed\n")
out.append("---\n")

def render_table(title, items, is_template=False):
    out.append(f"## {title} ({len(items)} Pages)\n")
    if is_template:
        out.append("| # | Slug / Title | Primary Keyword | Status | Source / Notes |")
        out.append("|---|---|---|---|---|")
        for i, item in enumerate(items, 1):
            url, slug, t_title, src, kw = item
            out.append(f"| {i} | [{slug}]({url})<br>*{t_title}* | `{kw}` | `todo` | `{src}` |")
    else:
        out.append("| # | Page Name & URL | Primary Keyword | Status | Source File |")
        out.append("|---|---|---|---|---|")
        for i, item in enumerate(items, 1):
            url, name, src, kw = item
            out.append(f"| {i} | [{name}]({url}) | `{kw}` | `todo` | `{src}` |")
    out.append("\n---\n")

render_table("1. Core Pages & Service Hubs", core_services)
render_table("2. Interactive Tools & Compliance Hubs", tools)
render_table("3. Editorial & Compliance Blog Guides", blogs)
render_table("4. Legal & Trust Policies", legal)
render_table("5. Showcase Takeaway Demos", demos)
render_table("6. Statutory Food Safety Templates", template_pages, is_template=True)

with open('CONTENT_PROGRESS.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(out))

print(f"CONTENT_PROGRESS.md created with {len(sitemap_urls)} total items successfully!")
