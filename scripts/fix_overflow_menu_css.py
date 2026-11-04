from bs4 import BeautifulSoup

with open("public/idreesleather/index.html", "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

# Ensure overflow-list.css is loaded as a stylesheet
overflow_link = soup.find("link", href=lambda h: h and "overflow-list.css" in h)
if overflow_link:
    overflow_link["rel"] = "stylesheet"
    if overflow_link.has_attr("as"):
        del overflow_link["as"]
else:
    new_link = soup.new_tag("link", rel="stylesheet", href="/idreesleather/css/overflow-list.css")
    soup.head.append(new_link)

# Add helper styling for overflow-list in header-menu
custom_style = soup.new_tag("style")
custom_style.string = """
overflow-list.overflow-menu {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  gap: 1.5rem !important;
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
}
overflow-list.overflow-menu > li {
  display: inline-flex !important;
  align-items: center !important;
  white-space: nowrap !important;
  margin: 0 !important;
  padding: 0 !important;
}
.menu-list__trigger {
  display: inline-flex !important;
  align-items: center !important;
  gap: 4px !important;
}
"""
soup.head.append(custom_style)

with open("public/idreesleather/index.html", "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Injected overflow-menu flex layout.")
