from PIL import Image, ImageOps
import os

images = [
    r'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/.user_uploaded/media_1792933489678_64717d32.jpg',
    r'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/.user_uploaded/media_1792933489973_e9104dde.jpg',
    r'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/.user_uploaded/media_1792933489984_0b950e63.jpg',
    r'C:/Users/subhan/.gemini/antigravity/brain/4f746af2-8096-428b-a0e5-b7e16c0031b4/.user_uploaded/media_1792933490007_d014ed41.jpg'
]

TARGET_W = 1080
TARGET_H = 1350
TARGET_RATIO = TARGET_W / TARGET_H # 0.80

def process_img1(im):
    # Coffee UI (1024x1024)
    # The canvas is square, mockup in middle. Sample top corner color.
    bg_color = im.getpixel((10, 10))
    # Create canvas 1080x1350 with bg_color
    canvas = Image.new('RGB', (TARGET_W, TARGET_H), bg_color)
    # Resize image to fit width 1080
    w_scale = TARGET_W / im.width
    new_h = int(im.height * w_scale)
    im_resized = im.resize((TARGET_W, new_h), Image.Resampling.LANCZOS)
    # Paste vertically centered
    y_offset = (TARGET_H - new_h) // 2
    canvas.paste(im_resized, (0, y_offset))
    return canvas

def process_img2(im):
    # Evora Villa UI (735x874)
    # Crop to 4:5 centered
    w, h = im.size
    target_crop_w = int(h * TARGET_RATIO)
    if target_crop_w <= w:
        left = (w - target_crop_w) // 2
        im_cropped = im.crop((left, 0, left + target_crop_w, h))
    else:
        target_crop_h = int(w / TARGET_RATIO)
        top = (h - target_crop_h) // 2
        im_cropped = im.crop((0, top, w, top + target_crop_h))
    return im_cropped.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)

def process_img3(im):
    # GAZU fashion (608x1024)
    # Top hero + categories gives best UI presentation
    w, h = im.size
    crop_h = int(w / TARGET_RATIO) # 608 / 0.8 = 760
    # Crop from y=0 to y=760
    im_cropped = im.crop((0, 0, w, min(crop_h, h)))
    return im_cropped.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)

def process_img4(im):
    # Laptop mockup (767x1024)
    w, h = im.size
    target_crop_h = int(w / TARGET_RATIO) # 767 / 0.8 = 958
    # Center slightly biased towards top to keep laptop screen
    top = max(0, (h - target_crop_h) // 3)
    im_cropped = im.crop((0, top, w, top + target_crop_h))
    return im_cropped.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)

processors = [process_img1, process_img2, process_img3, process_img4]

out_dir = 'public/hero-shots'
for i in range(4):
    src_path = images[i]
    im = Image.open(src_path).convert('RGB')
    processed = processors[i](im)
    out_path = os.path.join(out_dir, f'shot-{i+1}.webp')
    processed.save(out_path, 'WEBP', quality=92, method=6)
    print(f"Saved {out_path} ({processed.size[0]}x{processed.size[1]})")

