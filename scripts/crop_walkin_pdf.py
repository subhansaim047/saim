from PIL import Image
import numpy as np

im = Image.open('scripts/walkin_pdf_rendered.png').convert('RGB')
arr = np.array(im)
h, w, _ = arr.shape
print(f"Full rendered image size: {w}x{h}")

# The document page is white (> 240 in all RGB channels)
# Background of the PDF viewer is dark gray (< 80)
white_mask = (arr[:, :, 0] > 240) & (arr[:, :, 1] > 240) & (arr[:, :, 2] > 240)

# Exclude sidebar on left (x < 400) and toolbar on top (y < 100)
main_mask = np.zeros_like(white_mask)
main_mask[120:, 400:] = white_mask[120:, 400:]

y_indices, x_indices = np.where(main_mask)
if len(y_indices) > 0:
    min_x, max_x = x_indices.min(), x_indices.max()
    min_y, max_y = y_indices.min(), y_indices.max()
    print(f"Detected page box: x=[{min_x}, {max_x}], y=[{min_y}, {max_y}] -> size: {max_x - min_x + 1}x{max_y - min_y + 1}")
    cropped = im.crop((min_x, min_y, max_x + 1, max_y + 1))
    cropped.save('scripts/walkin_cropped.png')
    print("Saved scripts/walkin_cropped.png")
