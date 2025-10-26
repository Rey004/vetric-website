# Vetric Website

Short README describing the site, technical features and how to run it locally.

## Project overview

This repository contains the Vetric marketing website built with React and Vite. It reproduces a modern landing site with light/dark themes, responsive layout, and sections such as Hero, Pricing, Bento (features), and Contact (form). The design emphasizes clean typography, subtle gradients, and accessible controls.

## Tech stack

- Framework: React (JSX)
- Bundler / dev server: Vite
- Styling: Plain CSS files per component (no CSS-in-JS)
- Build: npm / Node.js

## Key features

- Responsive layout with CSS Grid and Flexbox
- Theme system using CSS custom properties (dark by default, `.light` on root for light mode)
- Navbar with desktop links, mobile hamburger overlay, and a theme toggle (desktop + mobile)
- Smooth scroll navigation and scrollspy (active nav link while scrolling)
- Hero section with responsive typography and radial glow
- Pricing section with responsive pricing cards and a highlighted plan
- Bento (features) section with illustrative cards and code-like snippets
- Contact form with validated placeholders and accessible labels
- Footer with theme-aware styling and placeholders for social icons

## Theming / variables

All global tokens live in `src/index.css` (`:root` and `.light` overrides). Important variables include:

- `--bg`, `--text`, `--muted`, `--muted-strong` — page colors
- `--accent-green` — primary accent
- `--border`, `--surface`, `--input-bg` — surfaces and borders
- `--btn-bg`, `--btn-text` — button colors
- `--overlay-*` — mobile overlay variables

Components reference these variables so the theme flips automatically when `.light` is added to `document.documentElement`.

## Project structure (important files)

- `index.html` — app entry
- `src/main.jsx` — React entry
- `src/index.css` — global variables and base styles (theme tokens)
- `src/App.jsx` — top-level routes / page composition (where sections are assembled)
- `src/components/` — reusable components (navbar, footer, etc.)
- `src/sections/` — page sections: `hero-section`, `pricing-section`, `bento-section`, `forms-section`, etc.

Example section files:
- `src/sections/forms-section/Form.jsx` + `Form.css`
- `src/sections/bento-section/Bento.jsx` + `Bento.css`
- `src/sections/pricing-section/Pricing.jsx` + `Pricing.css`

## Navigation & scroll behavior

- Navbar links smooth-scroll to sections by ID (e.g., `#pricing`).
- A scrollspy implemented with IntersectionObserver highlights the currently visible section in the nav.
- If your header is sticky and hides section tops, you can add a small scroll offset in `Navbar.jsx`'s `scrollToSection` helper.

## Accessibility

- All interactive controls (buttons, links) have accessible labels where appropriate.
- The mobile overlay uses `role="dialog"` and `aria-modal="true"`.
- Focus styles are present on form inputs and buttons. Consider adding skip links and keyboard traps for modal overlays if needed.

## How to run

Prerequisites: Node.js (16+) and npm.

1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```
