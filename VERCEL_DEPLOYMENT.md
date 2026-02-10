# Vercel Deployment Checklist

This document summarizes the project audit and how to fix the **"There was a permanent problem cloning the repo"** error.

---

## Build status: OK

- **`npm run build`** runs successfully locally (Next.js 16.1.6, Turbopack).
- No TypeScript errors, no missing components, no server-only APIs in client code.
- Static pages generate correctly (`/`, `/_not-found`).

---

## What was checked

| Item | Status |
|------|--------|
| **package.json** | `build` script is `next build`. `engines.node` set to `>=18.0.0`. |
| **vercel.json** | `buildCommand`: `npm run build` (overrides any dashboard setting that used `npm run dev`). |
| **next.config.js** | No server-only or Vercel-incompatible options. `images.remotePatterns` only for picsum.photos. |
| **Dependencies** | No `fs`/`path`/Node-only modules in `src`. No `process.env` required at build time. |
| **public/** | `Resume.pdf` and `data/projects.json` present. No broken asset references. |
| **.gitignore** | Does not ignore `package-lock.json` or required config files. |

---

## Fix: "Permanent problem cloning the repo"

This message means **Vercel cannot clone your GitHub repository**. It is not caused by your code or build.

### 1. Reconnect GitHub (account level)

1. Go to [vercel.com](https://vercel.com) → **Settings** (your profile/team) → **Integrations** or **Connected Accounts**.
2. Find **GitHub** and **re-authorize** or **reconnect** so Vercel has access to your repos.

### 2. Reconnect the project to the repo

1. Open your **Portfolio** project on Vercel.
2. Go to **Settings** → **Git**.
3. If the repository shows as disconnected or "not found":
   - **Disconnect** the current Git repository.
   - Click **Connect Git Repository** → **GitHub**.
   - Select **Impenggg/Portfolio** and branch **main**.
4. Save and run **Redeploy**.

### 3. Confirm on GitHub

- Repo exists: **https://github.com/Impenggg/Portfolio**
- Default branch **main** exists and has your latest commits.
- If the repo is **private**: GitHub → **Settings** → **Integrations** → **Applications** → **Vercel** must have access to this repository.

### 4. Optional: NODE_ENV warning

If the build log shows a non-standard `NODE_ENV` warning:

- In Vercel → **Settings** → **Environment Variables**, remove any **NODE_ENV** variable, or set it to **`production`** only for the Production environment.

---

## After reconnecting

Once Vercel can clone the repo:

1. It will run **`npm run build`** (from `vercel.json`).
2. It will use **Node >= 18** (from `package.json` engines).
3. The build should complete and the site will deploy.

If the build then fails with a new error, share the full build log for the next round of fixes.
