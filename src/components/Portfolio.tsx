'use client';

import React, { useEffect } from 'react';
import styled from 'styled-components';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ResumeQRCode from '@/components/ResumeQRCode';

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Portfolio: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      import('@/utils/analytics')
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
    <>
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
    </>
  );
};

export default Portfolio;
