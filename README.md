# Muhammad Sahrial — Portfolio

One-page personal portfolio for Muhammad Sahrial, a fullstack developer and the creator of Ayah Fullstack.

## Tech stack

React, Vite, JavaScript, PrimeReact, PrimeIcons, and custom CSS design tokens. No backend, database, authentication, or global state library is required.

## Run the project

```bash
npm install
npm run dev
```

Open `http://localhost:5173/` in your browser. For a production build and local preview:

```bash
npm run build
npm run preview
```

## Folder structure

```text
src/
  components/
    layout/       # Navbar and Footer
    sections/     # Hero, About, Skills, Projects, Experience, Services, AyahFullstack, Contact
    common/       # SectionHeading, ProjectCard, ServiceCard, SkillGroup, CTAButton
  data/           # skills.js, projects.js, experience.js, services.js
  assets/         # images and icons
  styles/         # centralized variables, global, and component styles
  App.jsx         # lightweight page composition
  main.jsx        # React entry point and PrimeReactProvider
```

## Content customization

- Add or edit projects in `src/data/projects.js`. Each project is rendered by `ProjectCard`.
- Add or edit experience entries in `src/data/experience.js`.
- Change skill groups in `src/data/skills.js`.
- Change service cards in `src/data/services.js`.
- Update colors, radius, spacing-related values, and typography tokens in `src/styles/variables.css`.
- Update shared layout and responsive rules in `src/styles/global.css` and `src/styles/components.css`.

## Images

Place optimized profile or project images in `src/assets/images/` and icons in `src/assets/icons/`. When a real image is ready, update the relevant section/card component with an `<img loading="lazy" alt="..." />` element and keep the alt text descriptive.

## Deploy to Vercel

Import the repository into Vercel. Vercel detects Vite automatically. Use `npm run build` as the build command and `dist` as the output directory.
