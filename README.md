# Adrian John C. Garcia — Portfolio

A modern, production-ready developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Fully responsive, SEO-optimized, with dark mode and smooth animations.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Inter, JetBrains Mono (next/font)

## Features

- Hero, About, Skills, Experience, Projects, Contact sections
- Sticky navbar with smooth scroll
- Dark mode (system preference + toggle)
- Scroll progress indicator
- Project filtering (All / Full Stack / Frontend / Backend)
- Download Resume button
- Loading animation
- Custom 404 page
- Glassmorphism-style cards, mobile-first responsive

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Install and run locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Deploy on Vercel

1. **Push your code to GitHub** (or GitLab/Bitbucket).

2. **Import the project on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in.
   - Click **Add New** → **Project**.
   - Import your repository (e.g. `Portfolio`).

3. **Configure the project**
   - **Framework Preset:** Next.js (auto-detected).
   - **Root Directory:** `./` (leave default).
   - **Build Command:** `npm run build` (default).
   - **Output Directory:** `.next` (default).
   - **Install Command:** `npm install` (default).

4. **Environment variables (optional)**  
   If you add EmailJS or other services later, add variables under **Settings → Environment Variables** in the Vercel dashboard.

5. **Deploy**  
   Click **Deploy**. Vercel will build and host your site and give you a URL (e.g. `portfolio-xxx.vercel.app`).

### Vercel requirements satisfied

- Build runs with `npm run build`.
- No server-only features that conflict with Vercel serverless.
- Environment variables can be set in the Vercel dashboard.
- Images use `next/image`; remote images use `remotePatterns` in `next.config.js`.

## Project structure

```
Portfolio/
├── public/
│   └── data/
│       └── projects.json    # Sample project data (reference)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── loading.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   ├── Badge.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── ThemeProvider.tsx
│   └── data/
│       └── portfolio.ts     # Site config, projects, skills, experience
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

- **Content:** Edit `src/data/portfolio.ts` for name, role, summary, projects, skills, experience, and contact info.
- **Resume:** Place your PDF at `public/Resume.pdf` so the “Download Resume” link works.
- **Contact form:** The form currently uses a mock submit. To send real emails, integrate [EmailJS](https://www.emailjs.com/) or a Next.js server action with your email provider.

## License

Private use. All rights reserved.
