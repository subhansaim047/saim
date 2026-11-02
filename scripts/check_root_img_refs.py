import glob
import re

files_to_check = [
    "hero-dev.png", "hero-dev.webp", "section-performance.png",
    "section-backend.png", "section-backend-ui.png", "section-techstack.png",
    "section-perf-chart.png", "og-image.png"
]

all_src = glob.glob("src/**/*.{tsx,ts,jsx,js}", recursive=True) + glob.glob("app/**/*.{tsx,ts,jsx,js}", recursive=True)

for fname in files_to_check:
    matches = []
    for fpath in all_src:
        with open(fpath, "r", encoding="utf-8") as fl:
            c = fl.read()
        if fname in c:
            matches.append(fpath)
    print(f"{fname}: referenced in {len(matches)} files -> {matches}")
