from PIL import Image
import numpy as np

for tid in ["template-12", "template-47", "template-77", "template-138", "template-145"]:
    im = Image.open(f"scripts/sample_{tid}.png").convert("RGB")
    arr = np.array(im)
    h, w, _ = arr.shape
    
    # Check bottom 20%
    bottom_y = int(h * 0.8)
    sub = arr[bottom_y:, :, :]
    
    # Find navy badge: dark blue pixel has r < 50, g < 60, b > 70
    navy_pixels = (sub[:, :, 0] < 50) & (sub[:, :, 1] < 70) & (sub[:, :, 2] > 70)
    y_indices, x_indices = np.where(navy_pixels)
    if len(y_indices) > 0:
        badge_top_y = bottom_y + y_indices.min()
        badge_bottom_y = bottom_y + y_indices.max()
        print(f"{tid} ({w}x{h}): Navy badge starts at y={badge_top_y} (height from bottom={h - badge_top_y}px)")
    else:
        print(f"{tid} ({w}x{h}): No navy badge detected")
