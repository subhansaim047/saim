from bs4 import BeautifulSoup

with open("public/idreesleather/index.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")
scripts = soup.find_all("script")
print(f"Total script tags in public/idreesleather/index.html: {len(scripts)}")
for idx, s in enumerate(scripts):
    src = s.get("src", "")
    if src:
        print(f"[{idx}] src: {src}")
    else:
        text = s.string or ""
        first_line = text.strip().split("\n")[0][:80] if text.strip() else "empty"
        print(f"[{idx}] inline: {first_line}")
