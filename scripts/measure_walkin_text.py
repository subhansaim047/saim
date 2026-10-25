from PIL import Image
import numpy as np

im = Image.open('scripts/walkin_full_page.png').convert('RGB')
arr = np.array(im)
h, w, _ = arr.shape

# Find navy badge in bottom 400px:
navy_pixels = (arr[h - 400:, :int(w * 0.35), 0] < 50) & (arr[h - 400:, :int(w * 0.35), 1] < 60) & (arr[h - 400:, :int(w * 0.35), 2] > 70)
y_indices, x_indices = np.where(navy_pixels)
badge_top_y = (h - 400) + y_indices.min()
print(f"Navy badge starts at y={badge_top_y} (height from bottom={h - badge_top_y}px)")

# Text "cleaning purposes" is around x=20 to 400
# Text pixels are dark blue [30..45, 30..50, 60..90] but NOT navy badge
# Let's inspect rows between y=1900 and badge_top_y
text_rows = []
for y in range(1900, badge_top_y):
    # center of "cleaning purposes" box: x from 40 to 300
    sub_row = arr[y, 40:300, :]
    has_text = np.any((sub_row[:, 0] < 80) & (sub_row[:, 1] < 80))
    if has_text:
        text_rows.append(y)

if text_rows:
    print(f"Text ends at y={max(text_rows)} (dist from badge top={badge_top_y - max(text_rows)}px)")
