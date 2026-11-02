path = r"C:\Users\subhan\.gemini\antigravity\scratch\saim\src\components\DemosPage.tsx"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()

c = c.replace(
    'previewImage: "/demos/woshico/images/og-image.png"',
    'previewImage: "/demos/woshico/images/69006b7b13043eba7258c780_home-one-ad-bg.jpg"'
)
c = c.replace(
    'previewImage: "/demos/liana/preview.png"',
    'previewImage: "/demos/liana/images/og-image.png"'
)

with open(path, "w", encoding="utf-8") as f:
    f.write(c)

print("Updated DemosPage.tsx preview images!")
