import os
import re

def normalize_file(fpath):
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as handle:
        text = handle.read()

    new_text = re.sub(r'href=["\']/products/([^"\'?#\s]+)["\']', r'href="/thejacketmaker/products/\1/index.html"', text)
    new_text = re.sub(r'href=["\']/collections/([^"\'?#\s]+)["\']', r'href="/thejacketmaker/collections/\1/index.html"', new_text)
    new_text = re.sub(r'href=["\']/pages/([^"\'?#\s]+)["\']', r'href="/thejacketmaker/pages/\1/index.html"', new_text)
    new_text = re.sub(r'href=["\']/policies/([^"\'?#\s]+)["\']', r'href="/thejacketmaker/policies/\1/index.html"', new_text)

    # Rebrand any remaining text
    new_text = new_text.replace('The Jacket Maker', 'HQ Leathercon')
    new_text = new_text.replace('THE JACKET MAKER', 'HQ LEATHERCON')
    new_text = new_text.replace('the jacket maker', 'hq leathercon')
    new_text = new_text.replace('TheJacketMaker', 'HQLeathercon')
    new_text = new_text.replace('Jacket Maker', 'HQ Leathercon')
    new_text = new_text.replace('JACKET MAKER', 'HQ LEATHERCON')
    new_text = new_text.replace('#thejacketmaker', '#hqleathercon')
    new_text = new_text.replace('@thejacketmaker', '@hqleathercon')
    new_text = new_text.replace('© 2026 The Jacket Maker.', '© 2026 HQ Leathercon.')

    if new_text != text:
        with open(fpath, 'w', encoding='utf-8') as handle:
            handle.write(new_text)
        return True
    return False

def main():
    modified = 0
    total = 0
    for root, dirs, files in os.walk('public/thejacketmaker'):
        for f in files:
            if f.endswith('.html'):
                total += 1
                fpath = os.path.join(root, f)
                if normalize_file(fpath):
                    modified += 1
                if total % 200 == 0:
                    print(f"Processed {total} files (modified {modified})...")

    print(f"Complete! Processed {total} files, updated {modified} files.")

if __name__ == '__main__':
    main()
