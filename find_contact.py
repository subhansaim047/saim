with open('public/hotbite/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

idx = content.find('id="Contact"')
if idx != -1:
    contact_sub = content[idx:idx+25000]
    p = contact_sub.find('Near Punjab college')
    print(contact_sub[p-400:p+1200])
