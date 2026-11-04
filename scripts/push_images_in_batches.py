import subprocess
import sys
import os

repo_dir = r"C:\Users\subhan\.gemini\antigravity\scratch\saim"
img_dir = os.path.join(repo_dir, "public", "thejacketmaker", "images")

files = sorted(os.listdir(img_dir))
total = len(files)
print(f"Total images to commit: {total}")

batch_size = 350
batches = [files[i:i + batch_size] for i in range(0, total, batch_size)]

for idx, batch in enumerate(batches, 1):
    print(f"\n--- Batch {idx}/{len(batches)} ({len(batch)} files) ---")
    file_paths = [os.path.join("public", "thejacketmaker", "images", f) for f in batch]
    
    # Stage batch using git add with files passed via stdin to avoid command line length limits
    p = subprocess.Popen(["git", "add", "--"], cwd=repo_dir, stdin=subprocess.PIPE, text=True)
    # wait, git add -- path path ... or pass to git add
    # Let's chunk the add command in groups of 50 files
    chunk_size = 50
    for c_idx in range(0, len(file_paths), chunk_size):
        sub_chunk = file_paths[c_idx:c_idx + chunk_size]
        res = subprocess.run(["git", "add"] + sub_chunk, cwd=repo_dir, capture_output=True, text=True)
        if res.returncode != 0:
            print(f"Error staging files: {res.stderr}")
            sys.exit(1)
            
    commit_msg = f"feat(thejacketmaker): add storefront media assets part {idx}/{len(batches)}"
    res = subprocess.run(["git", "commit", "-m", commit_msg], cwd=repo_dir, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Commit error: {res.stderr}")
        # might be nothing to commit if already staged
    else:
        print(res.stdout.strip())
        
    print(f"Pushing part {idx}/{len(batches)} to origin main...")
    push_res = subprocess.run(["git", "push", "origin", "main"], cwd=repo_dir, capture_output=True, text=True)
    if push_res.returncode != 0:
        print(f"Push error: {push_res.stderr}")
        sys.exit(1)
    else:
        print(f"Successfully pushed part {idx}/{len(batches)}")

print("\nAll image batches pushed successfully!")
