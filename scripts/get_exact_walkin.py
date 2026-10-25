from PIL import Image
import numpy as np

im = Image.open('scripts/walkin_pdf_rendered.png').convert('RGB')
arr = np.array(im)
h, w, _ = arr.shape

# In the middle vertical row (y = h // 2):
mid_y = h // 2
row = arr[mid_y, :, :]
# Find where the page is white (all channels > 240) in the central region (x > 500)
is_white = (row[:, 0] > 240) & (row[:, 1] > 240) & (row[:, 2] > 240)
x_in_page = np.where(is_white & (np.arange(w) > 500))[0]
page_left = x_in_page.min()
page_right = x_in_page.max()

# Along the vertical column at x = (page_left + page_right) // 2
mid_x = (page_left + page_right) // 2
col = arr[:, mid_x, :]
is_white_col = (col[:, 0] > 240) & (col[:, 1] > 240) & (col[:, 2] > 240)
y_in_page = np.where(is_white_col & (np.arange(h) > 100))[0]
page_top = y_in_page.min()
page_bottom = y_in_page.max()

print(f"Exact page bounds: left={page_left}, right={page_right}, top={page_top}, bottom={page_bottom}")
print(f"Exact page size: {page_right - page_left + 1} x {page_bottom - page_top + 1}")

cropped = im.crop((page_left, page_top, page_right + 1, page_bottom + 1))
cropped.save('scripts/walkin_exact.png')
print("Saved scripts/walkin_exact.png")
