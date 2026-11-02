files = ['app/privacy/page.tsx', 'app/cookie-policy/page.tsx', 'app/disclaimer/page.tsx']

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    if 'index: false' in content:
        content = content.replace('index: false,', 'index: true,')
        with open(fpath, 'w', encoding='utf-8') as fp:
            fp.write(content)
        print(f"Updated {fpath} to index: true")
    else:
        print(f"No index: false in {fpath}")
