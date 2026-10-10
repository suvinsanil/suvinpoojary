# Suvin Poojary — Portfolio

Personal developer portfolio built with React, Vite, and Tailwind CSS.

## Stack

- **React 18** — UI framework
- **Vite 5** — Build tool
- **Tailwind CSS 3** — Utility-first styling
- **Vanilla JS** — Scroll animations, theme toggle, intersection observers

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm (comes with Node.js)

### Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview   # Preview the production build locally
```

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Site favicon
│   └── resume.pdf           # Downloadable resume
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Section.jsx      # Reusable section wrapper
│   │   ├── ScrollReveal.jsx # Scroll animation wrapper
│   │   └── ThemeToggle.jsx  # Dark/light toggle
│   ├── data/
│   │   └── content.js       # All portfolio content (single source of truth)
│   ├── hooks/
│   │   ├── useTheme.js      # Theme persistence hook
│   │   └── useActiveSection.js # Scroll-spy hook
│   ├── App.jsx
│   ├── App.css
│   ├── index.css            # Tailwind directives + global styles
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── package.json
```

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts. Vercel will auto-detect the Vite framework.

### Option 2: GitHub Integration (Recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **"New Project"** and import the GitHub repository.
4. Vercel will auto-detect Vite — no configuration needed.
5. Click **Deploy**.

The site will be live at `https://<project-name>.vercel.app`.

### Environment

No environment variables are required.

## Content Updates

All personal content is centralized in [`src/data/content.js`](src/data/content.js).
Edit this single file to update your information, projects, skills, experience, etc.

## Customization

- **Colors**: Accent color uses Tailwind's `indigo` palette. Change throughout components or extend in `tailwind.config.js`.
- **Fonts**: Inter (sans) + JetBrains Mono (mono), loaded via Google Fonts in `index.html`.
- **Theme**: Dark mode by default. Toggle persisted in `localStorage`.

## License

MIT
