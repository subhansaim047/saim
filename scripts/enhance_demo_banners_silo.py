import os
import re

DEMO_SWITCHER_HTML = '''<!-- Saim Dev Live Demo Top Showcase Banner with Silo Sibling Links -->
<div id="saimdev-demo-banner" style="position:relative; z-index:999999; background:#0b0f19; color:#f8fafc; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; font-size:12px; line-height:1.4; padding:8px 16px; border-bottom:2px solid #f59e0b; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
  <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
    <span style="background:#f59e0b; color:#0f172a; font-weight:800; font-size:10px; padding:2px 7px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px; font-family:monospace;">Showcase Demo</span>
    <span style="color:#e2e8f0;">Engineered by <strong style="color:#ffffff;">Saim Dev</strong> &bull; Zero-commission Next.js ordering architecture.</span>
    <span style="color:#64748b; font-size:11px;">Switch demo:</span>
    <a href="/burger-garage" style="color:#f59e0b; text-decoration:none; font-weight:600; font-size:11px; padding:1px 6px; border-radius:3px; background:rgba(245,158,11,0.1);">Burger Garage</a>
    <a href="/frenchyse" style="color:#f59e0b; text-decoration:none; font-weight:600; font-size:11px; padding:1px 6px; border-radius:3px; background:rgba(245,158,11,0.1);">Frenchyse Luxury</a>
    <a href="/anzaar" style="color:#f59e0b; text-decoration:none; font-weight:600; font-size:11px; padding:1px 6px; border-radius:3px; background:rgba(245,158,11,0.1);">Anzaar Rooftop</a>
    <a href="/hotbite" style="color:#f59e0b; text-decoration:none; font-weight:600; font-size:11px; padding:1px 6px; border-radius:3px; background:rgba(245,158,11,0.1);">HotBite Pizza</a>
  </div>
  <div style="display:flex; align-items:center; gap:10px;">
    <a href="https://www.saimdev.site/services/takeaway-web-design" style="background:#f59e0b; color:#0f172a; text-decoration:none; font-weight:700; padding:4px 12px; border-radius:6px; font-size:11px; white-space:nowrap; display:inline-block;">Get Your Site &pound;250 &rarr;</a>
    <a href="https://www.saimdev.site/demos" style="color:#94a3b8; text-decoration:none; font-size:11px; white-space:nowrap;">&larr; All Demos Hub</a>
  </div>
</div>'''

demo_roots = ["public/burger-garage", "public/frenchyse", "public/anzaar", "public/hotbite"]

updated_files = 0
for root_dir in demo_roots:
    for root, _, files in os.walk(root_dir):
        for f in files:
            if f.endswith(".html"):
                p = os.path.join(root, f)
                with open(p, "r", encoding="utf-8", errors="ignore") as fp:
                    content = fp.read()
                
                # Check if saimdev-demo-banner exists
                if 'id="saimdev-demo-banner"' in content:
                    # replace the banner div
                    new_content = re.sub(r'<!-- Saim Dev Live Demo Top Showcase Banner[^>]*-->\s*<div id="saimdev-demo-banner"[^>]*>.*?</div></div>', DEMO_SWITCHER_HTML, content, flags=re.DOTALL)
                    if new_content == content:
                        # Fallback regex if inner structure differs slightly
                        new_content = re.sub(r'<div id="saimdev-demo-banner".*?</div>\s*</div>', DEMO_SWITCHER_HTML, content, flags=re.DOTALL, count=1)
                    
                    if new_content != content:
                        with open(p, "w", encoding="utf-8") as fp:
                            fp.write(new_content)
                        updated_files += 1
                        print(f"Updated banner in: {p}")

print(f"Total demo HTML files updated with Silo 2 switcher: {updated_files}")
