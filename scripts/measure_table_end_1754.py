from PIL import Image
import numpy as np

for tid in ["template-14", "template-18", "template-33", "template-50", "template-167"]:
    raw = f"scripts/temp_charts/{tid}_raw.png"
    im = Image.open(raw).convert("RGB")
    arr = np.array(im)
    h, w, _ = arr.shape
    
    # In the middle 50% (x from w*0.25 to w*0.75), where does non-white content end?
    mid_non_white = np.mean(arr[int(h*0.5):, int(w*0.25):int(w*0.75), :], axis=2) < 250
    content_y = np.where(mid_non_white)[0]
    if len(content_y) > 0:
        last_y = int(h*0.5) + content_y.max()
        print(f"{tid} ({w}x{h}): Content ends at y={last_y} (dist from bottom={h - last_y}px)")
