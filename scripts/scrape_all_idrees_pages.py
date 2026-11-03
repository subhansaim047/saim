import os
import json
import time
import random
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
}

def fetch_url(url, dest_path):
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 1000:
        return True, f"EXISTS: {dest_path}"

    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    req = Request(url, headers=HEADERS)

    for attempt in range(5):
        try:
            with urlopen(req, timeout=25) as resp:
                content = resp.read()
                with open(dest_path, "wb") as f:
                    f.write(content)
                return True, f"FETCHED: {url} ({len(content)} bytes)"
        except HTTPError as e:
            if e.code == 429:
                wait_time = (attempt + 1) * 3 + random.uniform(1.0, 3.0)
                time.sleep(wait_time)
            else:
                return False, f"HTTP Error {e.code} on {url}"
        except Exception as e:
            time.sleep(2)

    return False, f"FAILED after 5 retries: {url}"

def main():
    with open("audit/idrees_full_sitemap_urls.json", "r", encoding="utf-8") as f:
        sitemap = json.load(f)

    tasks = []

    # Collections
    for url in sitemap.get("collections", []):
        handle = url.rstrip("/").split("/")[-1]
        dest = f"audit/raw_pages/collections/{handle}.html"
        tasks.append((url, dest))

    # Pages
    for url in sitemap.get("pages", []):
        handle = url.rstrip("/").split("/")[-1]
        dest = f"audit/raw_pages/pages/{handle}.html"
        tasks.append((url, dest))

    # Policies
    policies = [
        "https://idreesleather.com/policies/contact-information",
        "https://idreesleather.com/policies/privacy-policy",
        "https://idreesleather.com/policies/refund-policy",
        "https://idreesleather.com/policies/shipping-policy",
        "https://idreesleather.com/policies/terms-of-service",
    ]
    for url in policies:
        handle = url.rstrip("/").split("/")[-1]
        dest = f"audit/raw_pages/policies/{handle}.html"
        tasks.append((url, dest))

    # Products
    for url in sitemap.get("products", []):
        if url.rstrip("/") == "https://idreesleather.com":
            continue
        handle = url.rstrip("/").split("/")[-1]
        dest = f"audit/raw_pages/products/{handle}.html"
        tasks.append((url, dest))

    missing = [(u, d) for u, d in tasks if not (os.path.exists(d) and os.path.getsize(d) > 1000)]
    print(f"Total targets: {len(tasks)}, Missing/Needed: {len(missing)}")

    for i, (url, dest) in enumerate(missing, 1):
        ok, msg = fetch_url(url, dest)
        print(f"[{i}/{len(missing)}] {msg}")
        time.sleep(1.2 + random.uniform(0.3, 0.8))

    # Check remaining
    still_missing = [(u, d) for u, d in tasks if not (os.path.exists(d) and os.path.getsize(d) > 1000)]
    print(f"Final status: {len(tasks) - len(still_missing)}/{len(tasks)} saved! Remaining missing: {len(still_missing)}")

if __name__ == "__main__":
    main()
