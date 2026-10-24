# Deployment Guide: saimdev.site

This repository is linked to Vercel via GitHub continuous deployment.

## 1. Automated Production Deployments (Active & Operational)
Production deploys automatically whenever changes are pushed or merged into the `main` branch.

- **Production Git Branch:** `main`
- **Live Domain:** `https://www.saimdev.site`
- **Deployment Method:** Push to GitHub `origin/main` triggers Vercel Production Build.

### Standard Git Workflow:
```bash
# 1. Ensure you are on main and up to date
git checkout main
git pull origin main

# 2. If working on a feature branch, merge it
git merge fix/your-branch -m "Merge fix/your-branch into main"

# 3. Push to GitHub to trigger Vercel deployment
git push origin main
```

## 2. Vercel CLI Manual Deployments (Optional)
If you wish to deploy directly via the Vercel CLI from your local terminal:

1. Log into your Vercel account:
```bash
vercel login
```

2. Link your local project:
```bash
vercel link
```

3. Deploy directly to production:
```bash
vercel --prod
```

## 3. Post-Deployment Verification
To verify that your deployment is live with zero regressed claims and matching commit SHA:
```bash
node scripts/verify-live.mjs https://www.saimdev.site $(git rev-parse --short HEAD)
```
