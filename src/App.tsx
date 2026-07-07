import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeQRCode from './components/ResumeQRCode';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const App: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      import('./utils/analytics')
        .then(({ initGA, logPageView }) => {
          initGA('G-59JRJJSMM1');
          logPageView();
        })
        .catch(() => {
          // Analytics deferred, no blocking failure needed
        });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <MainContent>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Testimonials />
          <Certifications />
          <Contact />
        </MainContent>
        <Footer />
        <ResumeQRCode />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;