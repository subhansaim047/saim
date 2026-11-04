from PIL import Image
import os

orig_path = r"C:\Users\subhan\.gemini\antigravity\brain\4f746af2-8096-428b-a0e5-b7e16c0031b4\.user_uploaded\media_1793778140196_92fb7955.png"
cur_path = r"public\thejacketmaker\images\hq-crest-logo.png"

img_orig = Image.open(orig_path)
print("Orig size:", img_orig.size, "mode:", img_orig.mode)

bbox = img_orig.getbbox()
print("Orig bbox:", bbox)

# Let's crop it tightly to content with high quality
cropped = img_orig.crop(bbox)
print("Cropped size:", cropped.size)

# Save high-res version
cropped.save(cur_path, format="PNG", optimize=True)
print("Saved to", cur_path)
