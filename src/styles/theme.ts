import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'dark' | 'light';
    colors: {
      background: string;
      surface: string;
      text: string;
      muted: string;
      primary: string;
      secondary: string;
      accent: string;
      accentSoft: string;
      card: string;
      cardDarker: string;
      border: string;
      gradient: string;
      selectionBg: string;
      selectionText: string;
      overlay: string;
      hoverSurface: string;
      onAccent: string;
    };
    fonts: {
      primary: string;
      heading: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadows: {
      soft: string;
      glow: string;
    };
  }
}

/**
 * Colors are CSS variables so static HTML stays correct when
 * `data-theme` flips before React hydrates (fixes light-mode invisible text).
 */
const cssColors = {
  background: 'var(--color-background)',
  surface: 'var(--color-surface)',
  text: 'var(--color-text)',
  muted: 'var(--color-muted)',
  primary: 'var(--color-primary)',
  secondary: 'var(--color-secondary)',
  accent: 'var(--color-accent)',
  accentSoft: 'var(--color-accent-soft)',
  card: 'var(--color-card)',
  cardDarker: 'var(--color-card-darker)',
  border: 'var(--color-border)',
  gradient: 'var(--color-gradient)',
  selectionBg: 'var(--color-selection-bg)',
  selectionText: 'var(--color-selection-text)',
  overlay: 'var(--color-overlay)',
  hoverSurface: 'var(--color-hover-surface)',
  onAccent: 'var(--color-on-accent)',
} as const;

const shared = {
  colors: cssColors,
  fonts: {
    primary: "var(--font-body), 'DM Sans', sans-serif",
    heading: "var(--font-heading), 'Bricolage Grotesque', sans-serif",
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '8rem',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
  shadows: {
    soft: 'none',
    glow: 'none',
  },
} as const;

export const darkTheme: DefaultTheme = {
  mode: 'dark',
  ...shared,
};

export const lightTheme: DefaultTheme = {
  mode: 'light',
  ...shared,
};

/** @deprecated Use darkTheme / lightTheme */
export const theme = darkTheme;

/** Inline critical theme tokens for first paint (used in layout). */
export const themeColorBootstrapCss = `
:root,html[data-theme="dark"]{
  --color-background:#0e0d0a;
  --color-surface:#17150f;
  --color-text:#fff6c8;
  --color-muted:#a39a78;
  --color-primary:#fff6c8;
  --color-secondary:#e8d9a0;
  --color-accent:#ffd93d;
  --color-accent-soft:rgba(255,217,61,0.14);
  --color-card:#17150f;
  --color-card-darker:#0e0d0a;
  --color-border:rgba(255,246,200,0.12);
  --color-gradient:#ffd93d;
  --color-selection-bg:rgba(255,217,61,0.35);
  --color-selection-text:#0e0d0a;
  --color-overlay:rgba(8,7,5,0.88);
  --color-hover-surface:rgba(255,217,61,0.06);
  --color-on-accent:#0e0d0a;
  --body-gradient:
    radial-gradient(ellipse 70% 55% at 85% 10%, rgba(255,217,61,0.16), transparent 55%),
    radial-gradient(ellipse 55% 45% at 10% 80%, rgba(255,217,61,0.07), transparent 50%),
    linear-gradient(165deg, #0e0d0a 0%, #15130c 45%, #0e0d0a 100%);
  --grid-opacity:0.28;
  --noise-opacity:0.3;
  --noise-blend:overlay;
  --orb-primary-opacity:0.22;
  --orb-secondary-fill:rgba(255,217,61,0.35);
}
html[data-theme="light"]{
  --color-background:#f3e28a;
  --color-surface:#fff4b8;
  --color-text:#0a0906;
  --color-muted:#3a3424;
  --color-primary:#0a0906;
  --color-secondary:#16130c;
  --color-accent:#5c4200;
  --color-accent-soft:rgba(92,66,0,0.12);
  --color-card:#fff4b8;
  --color-card-darker:#e8d06a;
  --color-border:rgba(10,9,6,0.22);
  --color-gradient:#5c4200;
  --color-selection-bg:rgba(92,66,0,0.28);
  --color-selection-text:#fff8d6;
  --color-overlay:rgba(10,9,6,0.72);
  --color-hover-surface:rgba(10,9,6,0.06);
  --color-on-accent:#fff8d6;
  --body-gradient:
    radial-gradient(ellipse 75% 55% at 90% 0%, rgba(255,255,255,0.35), transparent 50%),
    radial-gradient(ellipse 60% 50% at 0% 100%, rgba(92,66,0,0.1), transparent 55%),
    linear-gradient(160deg, #f3e28a 0%, #edd66f 45%, #f6e79a 100%);
  --grid-opacity:0.2;
  --noise-opacity:0.15;
  --noise-blend:multiply;
  --orb-primary-opacity:0.4;
  --orb-secondary-fill:rgba(255,255,255,0.55);
}
`;
