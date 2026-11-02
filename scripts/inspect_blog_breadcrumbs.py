import glob, os, sys
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')

files = glob.glob('src/components/BlogPost*.tsx') + glob.glob('src/components/blog/*.tsx')
print(f'Total blog components: {len(files)}')
for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        text = fh.read()
    has_bc = 'aria-label="Breadcrumb"' in text or 'aria-label=\'Breadcrumb\'' in text
    print(f'{os.path.basename(f)}: has_bc={has_bc}')
