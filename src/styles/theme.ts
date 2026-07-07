import type { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      card: string;
      cardDarker: string;
      gradient: string;
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

export const theme: DefaultTheme = {
  colors: {
    background: '#0b0f17',
    text: '#f3f4f6',
    primary: '#9fb0d8',
    secondary: '#d7def0',
    accent: '#8b95a8',
    card: 'rgba(18, 24, 39, 0.86)',
    cardDarker: '#060911',
    gradient: '#9fb0d8',
  },
  fonts: {
    primary: "'Inter', sans-serif",
    heading: "'Space Grotesk', sans-serif",
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
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  shadows: {
    soft: '0 16px 32px rgba(2, 8, 23, 0.24)',
    glow: '0 0 0 1px rgba(143, 164, 255, 0.12), 0 14px 30px rgba(15, 23, 42, 0.16)',
  },
};
