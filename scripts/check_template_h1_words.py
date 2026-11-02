import json, glob
from bs4 import BeautifulSoup
import re

with open("src/data/page_plan.json", "r", encoding="utf-8") as f:
    page_plan = json.load(f)

keep_and_improve = [s for s, p in page_plan.items() if p["bucket"] in ["KEEP", "IMPROVE"]]

print(f"Checking {len(keep_and_improve)} KEEP & IMPROVE template pages...")
for slug in keep_and_improve:
    html_path = f".next/server/app/food-safety-templates/{slug}.html"
    try:
        with open(html_path, "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f.read(), "html.parser")
        h1 = soup.find("h1")
        if h1:
            h1_text = h1.get_text().strip()
            # remove h1 and script/style
            h1.decompose()
            for s in soup.find_all(["script", "style"]):
                s.decompose()
            body_text = soup.get_text(separator=" ").lower()
            words = [w.lower() for w in re.findall(r"[a-zA-Z0-9]+", h1_text) if len(w) > 3 and w.lower() not in ["free", "template", "saim", "with", "from", "your"]]
            missing = [w for w in words if w not in body_text]
            if missing:
                print(f"Slug: {slug}")
                print(f"  H1: {h1_text}")
                print(f"  Missing in body: {missing}")
    except Exception as e:
        print(f"Error {slug}: {e}")
