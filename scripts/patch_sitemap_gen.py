"""
Update scripts/generate_sitemap.mjs to add city pages and food safety templates hub
"""
p = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\scripts\generate_sitemap.mjs"
with open(p, "r", encoding="utf-8") as f:
    content = f.read().replace("\r\n", "\n")

target = """  { url: "https://www.saimdev.site/services/takeaway-web-design", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/nextjs-developer-uk", priority: "0.95", changefreq: "weekly" },"""

replacement = """  { url: "https://www.saimdev.site/services/takeaway-web-design", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/services/takeaway-web-design-london", priority: "0.9", changefreq: "monthly" },
  { url: "https://www.saimdev.site/services/takeaway-web-design-manchester", priority: "0.9", changefreq: "monthly" },
  { url: "https://www.saimdev.site/services/takeaway-web-design-birmingham", priority: "0.9", changefreq: "monthly" },
  { url: "https://www.saimdev.site/nextjs-developer-uk", priority: "0.95", changefreq: "weekly" },
  { url: "https://www.saimdev.site/food-safety-templates", priority: "0.9", changefreq: "weekly" },"""

if target in content:
    content = content.replace(target, replacement, 1)
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated scripts/generate_sitemap.mjs successfully!")
else:
    print("Target not found in generate_sitemap.mjs")
