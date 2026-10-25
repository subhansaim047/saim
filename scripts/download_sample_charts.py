import urllib.request
from PIL import Image

samples = [
    ("template-12", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Turkey_pasteurization_temperature_chart.png"),
    ("template-47", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Meat_cooking_chart_C.png"),
    ("template-77", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Proper_food_storage_chart.png"),
    ("template-138", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Pork_temperature_chart_C.png"),
    ("template-145", "https://www.fooddocs.com/hubfs/HACCP_templates/PDF/QR/Freezer_organization_chart.png"),
]

for tid, url in samples:
    dest = f"scripts/sample_{tid}.png"
    urllib.request.urlretrieve(url, dest)
    im = Image.open(dest)
    print(f"{tid}: {im.size}, mode={im.mode}")
