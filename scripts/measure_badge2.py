from PIL import Image
import numpy as np

for tid in ["template-12", "template-47", "template-77", "template-138", "template-145"]:
    im = Image.open(f"scripts/sample_{tid}.png").convert("RGB")
    arr = np.array(im)
    h, w, _ = arr.shape
    
    # Left corner only (x < w * 0.35)
    bottom_y = int(h * 0.85)
    sub = arr[bottom_y:, :int(w * 0.35), :]
    
    # Navy badge: r ~ 33, g ~ 45, b ~ 95
    navy_pixels = (sub[:, :, 0] < 50) & (sub[:, :, 1] < 60) & (sub[:, :, 2] > 70)
    y_indices, x_indices = np.where(navy_pixels)
    if len(y_indices) > 0:
        badge_top_y = bottom_y + y_indices.min()
        print(f"{tid} ({w}x{h}): Left navy badge starts at y={badge_top_y} (height from bottom={h - badge_top_y}px)")
    else:
        print(f"{tid} ({w}x{h}): No badge")
