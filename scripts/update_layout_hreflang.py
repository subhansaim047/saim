with open('app/layout.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

old_alt = """  alternates: {
    canonical: 'https://www.saimdev.site',
  },"""

new_alt = """  alternates: {
    canonical: 'https://www.saimdev.site',
    languages: {
      'en-GB': 'https://www.saimdev.site',
      'x-default': 'https://www.saimdev.site',
    },
  },"""

if old_alt in text:
    text = text.replace(old_alt, new_alt)
elif old_alt.replace('\n', '\r\n') in text:
    text = text.replace(old_alt.replace('\n', '\r\n'), new_alt.replace('\n', '\r\n'))

with open('app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated app/layout.tsx alternates")
