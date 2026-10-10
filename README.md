# Developer Portfolio

A modern, high-performance developer portfolio built with React, Vite, and Tailwind CSS. The architecture focuses on component reusability, centralized data management, and a highly polished UI featuring custom scroll animations and an HTML5 canvas background.

##  Tech Stack

- Framework: React 18
- Build Tool: Vite 5
- Styling: Tailwind CSS 3 (Utility-first with custom CSS variables)
- Animations: Vanilla JS (Intersection Observers, `requestAnimationFrame`) + CSS Transitions

## Technical Features

- Centralized Content State: All data arrays, strings, and links are exported from a single JavaScript file (`src/data/content.js`). This cleanly separates the data layer from the React UI components.
- Custom Canvas Engine: Utilizes an HTML5 `<canvas>` element (`AIParticles.jsx`) to render an optimized neural-network particle system that dynamically reacts to the active DOM theme.
- Optimized Rendering:
  - Implements `IntersectionObserver` for highly performant scroll-spy navigation and staggered CSS entrance animations.
  - Fonts are loaded asynchronously via non-blocking media queries to prevent render-blocking.
  - Avoids heavyweight icon libraries by relying on pure SVG React components.
- Security Posture: Hardened with a strict Content-Security-Policy (CSP) in `index.html` and secure HTTP response headers configured for production.

## Architecture Overview

```text
src/
├── components/          # React UI components
│   ├── icons/           # Pure SVG components
│   ├── AIParticles.jsx  # Canvas-based background animation system
│   ├── ScrollReveal.jsx # Reusable IntersectionObserver wrapper
│   └── ...              # View sections (Hero, Projects, etc.)
├── data/
│   └── content.js       # Static data layer
├── hooks/
│   ├── useTheme.js      # LocalStorage-synchronized dark/light mode hook
│   └── useActiveSection.js # Scroll-spy custom hook
├── App.jsx              # Main layout and composition
└── index.css            # Tailwind directives and custom CSS keyframes
```

## Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Setup

```bash
# Install dependencies
npm install

# Start the local Vite development server
npm run dev
```

## Deployment Configuration

The repository is fully configured for automated CI/CD deployment on Vercel. 

- Routing & Security: `vercel.json` handles SPA fallback routing (`rewrites`) and enforces strict security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Permissions-Policy`).
- Build Command: `npm run build`
- Output Directory: `dist/`
