"""
Add legal and demo URLs to staticPages in scripts/generate_sitemap.mjs
"""
p = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\scripts\generate_sitemap.mjs"
with open(p, "r", encoding="utf-8") as f:
    content = f.read().replace("\r\n", "\n")

target = """    url: "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide",
    priority: "0.85",
    changefreq: "weekly",
    images: [
      {
        loc: "https://www.saimdev.site/templates/charts/template-128.webp",
        title: "Commercial Kitchen Food Cooling Time and Temperature Curve Chart",
        caption: "Safe food cooling temperature progression curve for commercial kitchens"
      }
    ]
  },
];"""

replacement = """    url: "https://www.saimdev.site/blog/commercial-kitchen-food-cooling-temperature-guide",
    priority: "0.85",
    changefreq: "weekly",
    images: [
      {
        loc: "https://www.saimdev.site/templates/charts/template-128.webp",
        title: "Commercial Kitchen Food Cooling Time and Temperature Curve Chart",
        caption: "Safe food cooling temperature progression curve for commercial kitchens"
      }
    ]
  },
  { url: "https://www.saimdev.site/terms", priority: "0.6", changefreq: "monthly" },
  { url: "https://www.saimdev.site/privacy", priority: "0.6", changefreq: "monthly" },
  { url: "https://www.saimdev.site/cookie-policy", priority: "0.6", changefreq: "monthly" },
  { url: "https://www.saimdev.site/disclaimer", priority: "0.6", changefreq: "monthly" },
  { url: "https://www.saimdev.site/burger-garage", priority: "0.8", changefreq: "monthly" },
  { url: "https://www.saimdev.site/frenchyse", priority: "0.8", changefreq: "monthly" },
  { url: "https://www.saimdev.site/anzaar", priority: "0.8", changefreq: "monthly" },
  { url: "https://www.saimdev.site/hotbite", priority: "0.8", changefreq: "monthly" },
];"""

if target in content:
    content = content.replace(target, replacement, 1)
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated scripts/generate_sitemap.mjs with legal and demo pages!")
else:
    print("Target in generate_sitemap.mjs not found")
