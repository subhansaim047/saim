import os
import re
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor

def clean_file(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            html = f.read()

        soup = BeautifulSoup(html, "html.parser")
        changed = False

        # Remove event_observer_reporter and external shopifycloud scripts
        for s in soup.find_all("script"):
            src = s.get("src", "")
            text = s.string or ""
            if any(bad in src for bad in [
                "event_observer_reporter", "web-pixels", "shopifycloud/storefront",
                "perf-kit", "privacy-banner", "origin_trials", "load_feature"
            ]):
                s.decompose()
                changed = True
            elif any(bad in text for bad in [
                "event_observer_reporter", "Shopify.PaymentButton", "webPixelsManager"
            ]):
                s.decompose()
                changed = True

        # Remove tracking iframes
        for ifr in soup.find_all("iframe"):
            src = ifr.get("src", "")
            if any(bad in src for bad in ["web-pixels", "shopify", "sandbox"]):
                ifr.decompose()
                changed = True

        if changed:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(str(soup))
            return True
        return False
    except Exception as e:
        print(f"Error {file_path}: {e}")
        return False

def main():
    target_files = []
    base_dir = "public/idreesleather"
    for root, dirs, files in os.walk(base_dir):
        for f in files:
            if f.endswith(".html"):
                target_files.append(os.path.join(root, f))

    print(f"Cleaning {len(target_files)} pages...")
    count = 0
    with ThreadPoolExecutor(max_workers=8) as executor:
        for res in executor.map(clean_file, target_files):
            if res:
                count += 1
    print(f"Cleaned {count}/{len(target_files)} pages!")

if __name__ == "__main__":
    main()
