from PIL import Image
import numpy as np

for tid in ["template-12", "template-47", "template-77", "template-138"]:
    im = Image.open(f"scripts/sample_{tid}.png").convert("RGB")
    arr = np.array(im)
    h, w, _ = arr.shape
    
    # In chart_footer (bottom 168px for portrait, bottom 119px for landscape)
    crop_h = 168 if h > w else 119
    sub = arr[h - crop_h:, :, :]
    
    # In this bottom region, let's find the QR code square!
    # QR code is white box with black QR inside navy rounded pill
    # QR code white box is located near left edge, e.g. x between 10 and 150
    # Let's inspect rows from bottom up to find where the navy pill is
    # The navy pill touches the bottom edge or near bottom
    print(f"\n--- {tid} ({w}x{h}) ---")
    # Let's find rows in sub from bottom:
    for dy in range(crop_h - 1, -1, -5):
        y = h - crop_h + dy
        # check left 50px
        left_color = arr[y, 20]
        # check right 50px
        right_color = arr[y, w - 20]
        if left_color[2] > 70 and left_color[0] < 50: # navy
            print(f"  y={y} (from bottom={h-y}px): Left is Navy {left_color}")
