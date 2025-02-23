import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const AppContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
