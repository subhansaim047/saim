from PIL import Image

im = Image.open("scripts/temp_charts/template-167_raw.png")
w, h = im.size
crop = im.crop((0, h - 200, w, h))
crop.save(r"C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4\template-167_bottom.png")
print("Saved template-167_bottom.png")
