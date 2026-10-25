from PIL import Image
import numpy as np

for tid in ["template-12", "template-47", "template-77", "template-138"]:
    im = Image.open(f"scripts/sample_{tid}.png").convert("RGB")
    arr = np.array(im)
    h, w, _ = arr.shape
    
    # Check rows from y=int(h*0.75) down to bottom
    # Content rows have non-white pixels across the width
    start_y = int(h * 0.75)
    non_white = np.mean(arr[start_y:, :, :], axis=2) < 250
    # Any row with content in the center (w*0.3 to w*0.7) where there's no badge
    center_non_white = np.mean(arr[start_y:, int(w*0.3):int(w*0.7), :], axis=2) < 250
    center_content_y = np.where(center_non_white)[0]
    if len(center_content_y) > 0:
        last_center_content = start_y + center_content_y.max()
        print(f"{tid}: Center content ends at y={last_center_content} (dist from bottom={h - last_center_content}px)")
