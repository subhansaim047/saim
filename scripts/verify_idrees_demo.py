from bs4 import BeautifulSoup
import re

with open("public/idreesleather/index.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

integrity_tags = soup.find_all(lambda tag: tag.has_attr("integrity"))
print(f"Tags with integrity attribute: {len(integrity_tags)}")

# Check external css
ext_css = [l.get("href") for l in soup.find_all("link", rel=lambda r: r and "stylesheet" in r) if l.get("href", "").startswith("http")]
print(f"External CSS count: {len(ext_css)} -> {ext_css}")

# Check local css
local_css = [l.get("href") for l in soup.find_all("link", rel=lambda r: r and "stylesheet" in r) if l.get("href", "").startswith("/idreesleather")]
print(f"Local CSS count: {len(local_css)} -> {local_css}")

# Check external scripts
ext_js = [s.get("src") for s in soup.find_all("script") if s.get("src", "").startswith("http")]
print(f"External JS count: {len(ext_js)} -> {ext_js}")

# Check local scripts
local_js = [s.get("src") for s in soup.find_all("script") if s.get("src", "").startswith("/idreesleather")]
print(f"Local JS count: {len(local_js)}")

# Check images
ext_img = [img.get("src") for img in soup.find_all("img") if img.get("src", "").startswith("http") or img.get("src", "").startswith("//")]
print(f"Remaining external img src count: {len(ext_img)}")
if ext_img:
    print("Sample remaining ext img:", ext_img[:5])

# Check remaining external font urls in inline styles
ext_fonts = re.findall(r'url\([\'"]?(https?://[^\'")]+?\.(?:woff2|woff|ttf)[^\'")]*?)[\'"]?\)', html)
print(f"Remaining external font URLs in inline style: {len(ext_fonts)}")
if ext_fonts:
    print("Sample remaining ext fonts:", ext_fonts[:5])
