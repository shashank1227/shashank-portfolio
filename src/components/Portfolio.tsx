'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const ResumeQRCode = dynamic(() => import('@/components/ResumeQRCode'), {
  ssr: false,
});

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Portfolio: React.FC = () => {
  useEffect(() => {
    let teardownEngagement: (() => void) | undefined;

    import('@/utils/analytics')
      .then(({ shouldTrack, initGA, logPageView, setupEngagementTracking, GA_MEASUREMENT_ID }) => {
        if (!shouldTrack()) return;

        initGA(GA_MEASUREMENT_ID);
        logPageView();
        teardownEngagement = setupEngagementTracking();
      })
      .catch(() => {
        // Analytics deferred, no blocking failure needed
      });

    return () => {
      teardownEngagement?.();
    };
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
