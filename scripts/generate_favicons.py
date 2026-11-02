from PIL import Image
import os, shutil

def generate():
    # Use favicon.png (128x128) or saim-dev-logo.png (512x512)
    source_path = "public/saim-dev-logo.png" if os.path.exists("public/saim-dev-logo.png") else "public/favicon.png"
    base = Image.open(source_path).convert("RGBA")
    print(f"Source image: {source_path} ({base.size})")

    # 1. Generate real multi-resolution favicon.ico (16, 32, 48)
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    base.save("public/favicon.ico", format="ICO", sizes=ico_sizes)
    print(f"Saved public/favicon.ico: {os.path.getsize('public/favicon.ico')} bytes")

    # Also copy to app/favicon.ico for Next.js file-based metadata
    shutil.copyfile("public/favicon.ico", "app/favicon.ico")
    print(f"Copied to app/favicon.ico: {os.path.getsize('app/favicon.ico')} bytes")

    # 2. Generate apple-touch-icon.png (180x180)
    apple_icon = base.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save("public/apple-touch-icon.png", format="PNG", optimize=True)
    print(f"Saved public/apple-touch-icon.png: {os.path.getsize('public/apple-touch-icon.png')} bytes")

    # 3. Generate icon-192.png and icon-512.png
    icon192 = base.resize((192, 192), Image.Resampling.LANCZOS)
    icon192.save("public/icon-192.png", format="PNG", optimize=True)
    icon512 = base.resize((512, 512), Image.Resampling.LANCZOS)
    icon512.save("public/icon-512.png", format="PNG", optimize=True)
    print("Saved public/icon-192.png and public/icon-512.png")

if __name__ == "__main__":
    generate()
