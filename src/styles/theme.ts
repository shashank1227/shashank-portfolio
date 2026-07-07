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
  }
}

export const theme: DefaultTheme = {
  colors: {
    background: '#0a0a0a',
    text: '#ffffff',
    primary: '#00ff9d',
    secondary: '#ff00ff',
    accent: '#00ffff',
    card: '#1a1a1a',
    cardDarker: '#000',
    gradient: 'linear-gradient(135deg, #00ff9d 0%, #00ffff 100%)',
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
};
