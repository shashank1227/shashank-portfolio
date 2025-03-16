# Shashank's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Styled Components. This portfolio showcases professional experience, projects, and achievements with a sleek dark theme and neon accents.

## Features

- Responsive design with modern UI/UX
- Interactive animations using Framer Motion
- Dark theme with neon accents
- Sections for About, Experience, Projects, Certifications, and Contact
- Contact form with social media links
- Optimized performance and accessibility
- Project carousel using React Slick
- Downloadable resume in PDF format
- Mobile-optimized QR code for resume scanning
- Dynamic typing effect on the hero section
- Testimonials section with client feedback
- Performance optimizations with IntersectionObserver
- Google Analytics with privacy-enhanced cookie settings

## Tech Stack

- React 18
- TypeScript
- Styled Components
- Framer Motion
- React Icons
- Typed.js for text animations
- React Slick for carousels
- Google Analytics 4
- GitHub Pages for deployment

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/shashank1227/shashank-portfolio.git
```

2. Install dependencies:
```bash
cd shashank-portfolio
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

5. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
shashank-portfolio/
├── public/              # Public assets and HTML template
│   ├── ShashankResume.pdf
│   ├── profile.jpg
│   └── index.html
├── src/
│   ├── components/     # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── TypedText.tsx
│   │   ├── ResumeQRCode.tsx
│   │   └── Testimonials.tsx
│   ├── styles/        # Styled components and global styles
│   │   ├── GlobalStyle.ts
│   │   └── theme.ts
│   ├── utils/         # Utility functions
│   │   └── analytics.ts
│   ├── App.tsx        # Main application component
│   └── index.tsx      # Application entry point
├── package.json       # Project dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm run test`: Runs the test suite
- `npm run deploy`: Deploys the app to GitHub Pages

## Deployment

The portfolio is deployed using GitHub Pages. The deployment process is automated using the `gh-pages` package. To deploy updates:

1. Make your changes to the codebase
2. Stage the changes: `git add .`
3. Commit with a descriptive message: `git commit -m "Description of changes"`
4. Push to the main branch: `git push`
5. Deploy to GitHub Pages: `npm run deploy`

To check the status of your changes before committing:
```bash
git status
```

## Performance Optimizations

This portfolio includes several performance enhancements:

- Image optimization and lazy loading
- Code splitting for better load times
- CSS containment with will-change properties
- IntersectionObserver for scroll-based animations instead of scroll events
- Debounced event handlers for resize events
- Optimized animations with reduced motion for users who prefer it

## Accessibility Features

- Semantic HTML structure
- ARIA attributes for interactive elements
- Keyboard navigation support
- Descriptive alt text for images
- Color contrast that meets WCAG guidelines
- Screen reader compatible components

## Browser Support

The portfolio is optimized for:
- Latest versions of Chrome, Firefox, and Safari
- Edge
- Mobile browsers

## License

ISC License

## Author

Shashank
