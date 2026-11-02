"""
Update page status in CONTENT_PROGRESS.md
"""
import sys

def update_status(target_str, new_str):
    with open('CONTENT_PROGRESS.md', 'r', encoding='utf-8') as f:
        c = f.read()
    if target_str in c:
        c = c.replace(target_str, new_str, 1)
        with open('CONTENT_PROGRESS.md', 'w', encoding='utf-8') as f:
            f.write(c)
        print("Updated status in CONTENT_PROGRESS.md")
    else:
        print("Target string not found in CONTENT_PROGRESS.md")

if __name__ == "__main__":
    t = "| 1 | [Homepage](https://www.saimdev.site/) | `nextjs web development studio uk` | `todo` | `app/page.tsx` |"
    r = "| 1 | [Homepage](https://www.saimdev.site/) | `nextjs web development studio uk` | `done` | `app/page.tsx` (Answer-first intro, active voice, 4-step process) |"
    update_status(t, r)
