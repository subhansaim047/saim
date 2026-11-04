with open('public/thejacketmaker/index.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

idx = html.find('role="dialog"')
while idx != -1:
    print("DIALOG AT:", idx)
    print(html[max(0, idx-100):idx+200])
    idx = html.find('role="dialog"', idx+1)
