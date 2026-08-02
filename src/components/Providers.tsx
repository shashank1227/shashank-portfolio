'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import GlobalStyle from '@/styles/GlobalStyle';
import ThemeToggle from '@/components/ThemeToggle';
import { useThemeMode } from '@/hooks/useThemeMode';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
`;

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const { mode, theme, toggleMode } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <ThemeToggle mode={mode} onToggle={toggleMode} />
        {children}
      </AppContainer>
    </ThemeProvider>
  );
};

export default Providers;
