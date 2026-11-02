with open('CONTENT_PROGRESS.md', 'r', encoding='utf-8') as f:
    c = f.read()

c = c.replace(
    "| 1 | [burger-garage showcase demo](https://www.saimdev.site/burger-garage) | `burger-garage takeaway website demo` | `todo` | `public/burger-garage/index.html` |",
    "| 1 | [burger-garage showcase demo](https://www.saimdev.site/burger-garage) | `burger-garage takeaway website demo` | `done` | `public/burger-garage/index.html` (British English 'flavour', single H1, canonical URL) |"
)
c = c.replace(
    "| 2 | [frenchyse showcase demo](https://www.saimdev.site/frenchyse) | `frenchyse takeaway website demo` | `todo` | `public/frenchyse/index.html` |",
    "| 2 | [frenchyse showcase demo](https://www.saimdev.site/frenchyse) | `frenchyse takeaway website demo` | `done` | `public/frenchyse/index.html` (Single H1, luxury dining schema, canonical URL) |"
)
c = c.replace(
    "| 3 | [anzaar showcase demo](https://www.saimdev.site/anzaar) | `anzaar takeaway website demo` | `todo` | `public/anzaar/index.html` |",
    "| 3 | [anzaar showcase demo](https://www.saimdev.site/anzaar) | `anzaar takeaway website demo` | `done` | `public/anzaar/index.html` (Single H1, rooftop dining schema, canonical URL) |"
)
c = c.replace(
    "| 4 | [hotbite showcase demo](https://www.saimdev.site/hotbite) | `hotbite takeaway website demo` | `todo` | `public/hotbite/index.html` |",
    "| 4 | [hotbite showcase demo](https://www.saimdev.site/hotbite) | `hotbite takeaway website demo` | `done` | `public/hotbite/index.html` (British English 'flavour' across 16 text nodes, single H1) |"
)

with open('CONTENT_PROGRESS.md', 'w', encoding='utf-8', newline='\n') as f:
    f.write(c)

print("Successfully updated Section 5 in CONTENT_PROGRESS.md")
