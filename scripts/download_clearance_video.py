import os
import urllib.request

video_dir = 'public/thejacketmaker/videos'
os.makedirs(video_dir, exist_ok=True)

url = 'https://cdn.shopify.com/videos/c/o/v/3333a09ae5c74e6898ada36456f7c731.mp4'
dest = os.path.join(video_dir, 'clearance-sale.mp4')

print(f"Downloading {url} to {dest}...")
headers = {'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as resp, open(dest, 'wb') as out:
    out.write(resp.read())

size = os.path.getsize(dest)
print(f"Download complete: {size} bytes ({size / (1024*1024):.2f} MB)")
