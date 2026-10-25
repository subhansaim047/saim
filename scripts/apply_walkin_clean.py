from PIL import Image, ImageDraw

im = Image.open('scripts/walkin_full_page.png').convert('RGB')
draw = ImageDraw.Draw(im)
w, h = im.size
draw.rectangle([0, 1985, w, h], fill=(255, 255, 255))
im.save('public/templates/charts/template-22.png', optimize=True)
im.save(r'C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4\clean_chart_22_fixed.png')
print("Saved fixed clean_chart_22_fixed.png")
