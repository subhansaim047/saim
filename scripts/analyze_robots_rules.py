import urllib.robotparser
import urllib.request
import re

# Fetch robots.txt
with urllib.request.urlopen("https://www.saimdev.site/robots.txt") as resp:
    robots_text = resp.read().decode('utf-8')

rp = urllib.robotparser.RobotFileParser()
rp.parse(robots_text.splitlines())

# Let's inspect all rules in robots.txt
print("=== LIVE ROBOTS.TXT RULES ===")
for line in robots_text.splitlines():
    if line.strip() and not line.startswith('#'):
        print(line)

print("\n=== DISALLOW RULES ANALYSIS ===")
# Parse what patterns are disallowed:
disallows = []
for line in robots_text.splitlines():
    if line.lower().startswith('disallow:'):
        rule = line.split(':', 1)[1].strip()
        if rule and rule not in disallows:
            disallows.append(rule)

print("Unique disallow rules:", disallows)
