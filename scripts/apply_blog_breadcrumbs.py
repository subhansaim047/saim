import os, sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

base_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"

blog_configs = [
    {
        "file": "src/components/BlogPost1Page.tsx",
        "title": "Why UK Small Businesses Need a Custom Website in 2026",
        "target": '<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">',
        "mode": "before"
    },
    {
        "file": "src/components/BlogPost2Page.tsx",
        "title": "Free Websites for Local Businesses",
        "target": '<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">',
        "mode": "before"
    },
    {
        "file": "src/components/BlogPost3Page.tsx",
        "title": "Agency Launch 50% Off Special",
        "target": '<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>',
        "mode": "before"
    },
    {
        "file": "src/components/blog/BlogPostAllergenMatrix.tsx",
        "title": "14-Allergen Matrix Guide for UK Restaurants",
        "target": '<div className="flex flex-wrap items-center gap-3 mb-6">',
        "mode": "before"
    },
    {
        "file": "src/components/blog/BlogPostChecklist.tsx",
        "title": "SFBB Opening & Closing Checklists Guide",
        "target": '<div className="flex flex-wrap items-center gap-3 mb-6">',
        "mode": "before"
    },
    {
        "file": "src/components/blog/BlogPostFoodCost.tsx",
        "title": "Commercial Kitchen Food Cost Percentage Guide",
        "target": '<div className="flex flex-wrap items-center gap-3 mb-6">',
        "mode": "before"
    },
    {
        "file": "src/components/blog/BlogPostHaccpPlan.tsx",
        "title": "How to Write a UK HACCP Plan Step-by-Step",
        "target": '<div className="flex flex-wrap items-center gap-3 mb-6">',
        "mode": "before"
    },
    {
        "file": "src/components/blog/BlogPostHygieneQuiz.tsx",
        "title": "Level 2 Food Hygiene Practice Test Guide",
        "target": '<div className="flex flex-wrap items-center gap-3 mb-6">',
        "mode": "before"
    },
    {
        "file": "src/components/blog/BlogPostRecipeScaler.tsx",
        "title": "Commercial Kitchen Recipe Scaling Guide",
        "target": '<div className="flex flex-wrap items-center gap-3 mb-6">',
        "mode": "before"
    },
]

for cfg in blog_configs:
    full_path = os.path.join(base_dir, cfg["file"])
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if 'aria-label="Breadcrumb"' in content:
        print(f"Already has breadcrumb: {cfg['file']}")
        continue
    
    bc_html = f"""        {{/* Visible Breadcrumb Navigation */}}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blogs" className="hover:text-white transition-colors">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-white font-medium truncate" aria-current="page">{cfg['title']}</li>
          </ol>
        </nav>\n\n"""
    
    target = cfg["target"]
    target_crlf = target.replace("\n", "\r\n")
    if target in content:
        content = content.replace(target, bc_html + target, 1)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated: {cfg['file']}")
    elif target_crlf in content:
        content = content.replace(target_crlf, bc_html.replace("\n", "\r\n") + target_crlf, 1)
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated (CRLF): {cfg['file']}")
    else:
        print(f"Target not found in {cfg['file']}")

print("Finished blog breadcrumbs update.")
