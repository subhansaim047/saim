from PIL import Image
import numpy as np

im = Image.open('scripts/walkin_pdf_rendered.png').convert('RGB')
arr = np.array(im)
row200 = arr[200, :, :]
# Dark gray background is around [50, 54, 57]
# Page is [255, 255, 255]
# Let's find first x > 400 where row200 is > 200
x_candidates = np.where((row200[:, 0] > 200) & (np.arange(arr.shape[1]) > 500))[0]
page_left = x_candidates.min()
page_right = x_candidates.max()

col_margin = arr[:, page_left + 20, :]
y_candidates = np.where((col_margin[:, 0] > 200) & (np.arange(arr.shape[0]) > 80))[0]
page_top = y_candidates.min()
page_bottom = y_candidates.max()

print(f"Page left: {page_left}, right: {page_right}, top: {page_top}, bottom: {page_bottom}")
print(f"Dimensions: {page_right - page_left + 1} x {page_bottom - page_top + 1}")
cropped = im.crop((page_left, page_top, page_right + 1, page_bottom + 1))
cropped.save('scripts/walkin_exact.png')
