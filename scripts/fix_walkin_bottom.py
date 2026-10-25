from PIL import Image, ImageDraw
import numpy as np

im = Image.open('scripts/walkin_pdf_rendered.png').convert('RGB')
arr = np.array(im)

# We know page_left = 709, page_right = 2292, page_top = 119
# Let's find true page_bottom by inspecting col 750 (inside page left margin):
col750 = arr[:, 750, :]
y_white = np.where((col750[:, 0] > 200) & (np.arange(arr.shape[0]) > 2000))[0]
page_bottom = y_white.max()
print(f"True page_bottom = {page_bottom}")

cropped = im.crop((709, 119, 2293, page_bottom + 1))
cw, ch = cropped.size
print(f"Full cropped page: {cw}x{ch}")

# Save full crop to inspect bottom
cropped.save("scripts/walkin_full_page.png")
