from PIL import Image

im = Image.open("public/templates/charts/template-99.webp")
top = im.crop((0, 0, im.width, 250))
top.save("scripts/t99_top.png")
print("Saved scripts/t99_top.png")
