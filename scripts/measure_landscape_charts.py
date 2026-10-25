from PIL import Image
import numpy as np

# In scripts/temp_charts/ we already have raw downloads!
for tid in ["template-14", "template-18", "template-33", "template-50", "template-167"]:
    raw = f"scripts/temp_charts/{tid}_raw.png"
    im = Image.open(raw).convert("RGB")
    arr = np.array(im)
    h, w, _ = arr.shape
    
    # check bottom 20%
    sub = arr[int(h*0.8):, :int(w*0.35), :]
    navy_pixels = (sub[:, :, 0] < 50) & (sub[:, :, 1] < 60) & (sub[:, :, 2] > 70)
    y_indices, _ = np.where(navy_pixels)
    if len(y_indices) > 0:
        badge_top_y = int(h*0.8) + y_indices.min()
        print(f"{tid} ({w}x{h}): Navy badge starts at y={badge_top_y} (height from bottom={h - badge_top_y}px)")
    else:
        print(f"{tid} ({w}x{h}): No navy badge detected")
