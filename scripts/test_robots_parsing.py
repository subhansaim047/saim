import urllib.robotparser
import urllib.request
import xml.etree.ElementTree as ET

# Fetch live robots.txt
robots_url = "https://www.saimdev.site/robots.txt"
req = urllib.request.Request(robots_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    robots_txt = resp.read().decode('utf-8')

rp = urllib.robotparser.RobotFileParser()
rp.parse(robots_txt.splitlines())

# Fetch live sitemap.xml
sitemap_url = "https://www.saimdev.site/sitemap.xml"
req_sm = urllib.request.Request(sitemap_url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req_sm) as resp:
    sitemap_xml = resp.read().decode('utf-8')

root = ET.fromstring(sitemap_xml)
# Namespaces
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}

urls = [elem.text for elem in root.findall('.//sm:loc', ns)]
print(f"Total URLs in sitemap.xml: {len(urls)}")

bots_to_test = ['Googlebot', 'Bingbot', '*']

blocked = []
allowed = []

for bot in bots_to_test:
    bot_blocked = []
    for u in urls:
        can_fetch = rp.can_fetch(bot, u)
        if not can_fetch:
            bot_blocked.append(u)
    print(f"Bot '{bot}': {len(bot_blocked)} URLs blocked out of {len(urls)}")
    if bot_blocked:
        print(f"  Sample blocked: {bot_blocked[:5]}")

# Also test specific demo URLs and non-sitemap URLs
test_extra_urls = [
    "https://www.saimdev.site/",
    "https://www.saimdev.site/about",
    "https://www.saimdev.site/contact",
    "https://www.saimdev.site/case-studies",
    "https://www.saimdev.site/services",
    "https://www.saimdev.site/takeaway-web-design",
    "https://www.saimdev.site/tools",
    "https://www.saimdev.site/tools/food-cost-calculator",
    "https://www.saimdev.site/demos",
    "https://www.saimdev.site/demos/burger-garage",
    "https://www.saimdev.site/demos/kurd-kitchen",
    "https://www.saimdev.site/burger-garage/index.html",
    "https://www.saimdev.site/burger-garage/about.html",
    "https://www.saimdev.site/frenchyse/index.html",
    "https://www.saimdev.site/anzaar/index.html",
    "https://www.saimdev.site/hotbite/index.html",
]

print("\n--- Testing Extra URLs against Googlebot ---")
for u in test_extra_urls:
    res = rp.can_fetch("Googlebot", u)
    status = "ALLOWED" if res else "BLOCKED"
    print(f"{status}: {u}")
