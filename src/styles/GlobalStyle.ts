import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: var(--color-background);
    background-image: var(--body-gradient);
    background-attachment: scroll;
    color: var(--color-text);
    line-height: 1.65;
    overflow-x: hidden;
    width: 100%;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.25s ease, color 0.25s ease;

    @media (min-width: 769px) {
      background-attachment: fixed;
    }
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: var(--grid-opacity);
    z-index: -1;
    background-image:
      linear-gradient(var(--color-border) 1px, transparent 1px),
      linear-gradient(90deg, var(--color-border) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black, transparent);
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: var(--noise-opacity);
    z-index: -1;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 180px;
    mix-blend-mode: var(--noise-blend);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    letter-spacing: -0.035em;
    line-height: 1.2;
    overflow: visible;
    padding-bottom: 0.08em;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease, opacity 0.2s ease;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  ::selection {
    background: var(--color-selection-bg);
    color: var(--color-selection-text);
  }

  section {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }

  .container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

export default GlobalStyle;
