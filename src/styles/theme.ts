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

const shared = {
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
  colors: {
    background: '#0e0d0a',
    surface: '#17150f',
    text: '#fff6c8',
    muted: '#a39a78',
    primary: '#fff6c8',
    secondary: '#e8d9a0',
    accent: '#ffd93d',
    accentSoft: 'rgba(255, 217, 61, 0.14)',
    card: '#17150f',
    cardDarker: '#0e0d0a',
    border: 'rgba(255, 246, 200, 0.12)',
    gradient: '#ffd93d',
    selectionBg: 'rgba(255, 217, 61, 0.35)',
    selectionText: '#0e0d0a',
    overlay: 'rgba(8, 7, 5, 0.88)',
    hoverSurface: 'rgba(255, 217, 61, 0.06)',
    onAccent: '#0e0d0a',
  },
  ...shared,
};

export const lightTheme: DefaultTheme = {
  mode: 'light',
  colors: {
    background: '#f3e28a',
    surface: '#fff4b8',
    text: '#0a0906',
    muted: '#3a3424',
    primary: '#0a0906',
    secondary: '#16130c',
    accent: '#5c4200',
    accentSoft: 'rgba(92, 66, 0, 0.12)',
    card: '#fff4b8',
    cardDarker: '#e8d06a',
    border: 'rgba(10, 9, 6, 0.22)',
    gradient: '#5c4200',
    selectionBg: 'rgba(92, 66, 0, 0.28)',
    selectionText: '#fff8d6',
    overlay: 'rgba(10, 9, 6, 0.72)',
    hoverSurface: 'rgba(10, 9, 6, 0.06)',
    onAccent: '#fff8d6',
  },
  ...shared,
};

/** @deprecated Use darkTheme / lightTheme */
export const theme = darkTheme;
