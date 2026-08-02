# Shashank's Portfolio

A modern, responsive portfolio built with **Next.js**, TypeScript, and Styled Components. It showcases professional experience, projects, and achievements with a minimal dark/light theme.

**Live site:** [https://shashank1227.github.io/shashank-portfolio/](https://shashank1227.github.io/shashank-portfolio/)

## Features

- Responsive layout with a minimal yellow-accent design
- Dark and light mode toggle (preference saved in `localStorage`)
- Framer Motion scroll and entrance animations
- Sections for About, Experience, Projects, Testimonials, Certifications, and Contact
- Contact form (Formspree) with social links
- Downloadable resume (PDF) plus mobile QR code CTA
- Typed.js hero role animation
- Project links (GitHub / live demo where available)
- Google Analytics 4 (production only)

## Tech Stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript
- Styled Components
- Framer Motion
- Typed.js
- React Icons
- Google Analytics 4
- GitHub Pages (`gh-pages`)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/shashank1227/shashank-portfolio.git
cd shashank-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app (note the `basePath` for GitHub Pages):

[http://127.0.0.1:3000/shashank-portfolio/](http://127.0.0.1:3000/shashank-portfolio/)

> Visiting `/` alone will 404 in local and production because the site is served under `/shashank-portfolio/`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` / `npm start` | Start Next.js development server |
| `npm run build` | Create a static export in `out/` |
| `npm run lint` | Run Next.js lint |
| `npm run deploy` | Build and publish `out/` to GitHub Pages |

## Project Structure

```text
shashank-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Metadata, fonts, providers
│   └── page.tsx            # Home page
├── public/                 # Static assets (resume, images, icons)
├── src/
│   ├── components/         # UI sections and shared components
│   ├── hooks/              # Theme mode hook
│   ├── styles/             # Theme + global styles
│   └── utils/              # Analytics + asset path helpers
├── next.config.ts          # Static export + basePath config
├── package.json
└── tsconfig.json
```

## Deployment

The site uses Next.js `output: 'export'`. On every push to `main`, GitHub Actions builds the project and deploys the `out/` folder to GitHub Pages (see `.github/workflows/deploy.yml`).

### One-time GitHub setup

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Choose branch **`gh-pages`** / folder **`/`** (root)
4. Push to `main` (or run the workflow manually from the **Actions** tab)

### Manual deploy (optional)

```bash
npm run deploy
```

This still builds locally and publishes `out/` with `gh-pages` if you need a one-off deploy outside Actions.

## Configuration Notes

- `basePath` / `assetPrefix` are set to `/shashank-portfolio` in `next.config.ts` for GitHub Pages.
- Theme preference is stored under `portfolio-theme` in `localStorage`.
- Analytics initializes only when the hostname is not `localhost`.

## Browser Support

- Latest Chrome, Firefox, Safari, and Edge
- Modern mobile browsers

## License

ISC License

## Author

Shashank Shekhar Singh
