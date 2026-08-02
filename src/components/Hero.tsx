'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import TypedText from './TypedText';
import { withBase } from '@/utils/paths';

const float = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
  50% { transform: translate3d(12px, -18px, 0) scale(1.04); }
`;

const drift = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(-16px, 10px, 0) rotate(6deg); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow-x: clip;
  overflow-y: visible;
  padding: 0;
`;

const Orb = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(2px);
`;

const OrbPrimary = styled(Orb)`
  width: min(48vw, 420px);
  height: min(48vw, 420px);
  top: -8%;
  right: -6%;
  background: ${({ theme }) => theme.colors.accent};
  opacity: ${({ theme }) => (theme.mode === 'dark' ? 0.18 : 0.35)};
  animation: ${float} 10s ease-in-out infinite;
`;

const OrbSecondary = styled(Orb)`
  width: min(34vw, 280px);
  height: min(34vw, 280px);
  bottom: 8%;
  left: -8%;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(255, 217, 61, 0.2)' : 'rgba(255, 255, 255, 0.4)'};
  animation: ${drift} 12s ease-in-out infinite;
`;

const AccentSlash = styled(motion.div)`
  position: absolute;
  top: 18%;
  right: 12%;
  width: 3px;
  height: 140px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 999px;
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm};
  }
`;

const ProfileRow = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProfileImage = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: 480px) {
    width: 76px;
    height: 76px;
  }
`;

const Availability = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.55rem 0.85rem;
  background: ${({ theme }) => theme.colors.accentSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accentSoft};
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 0.95;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  max-width: 11ch;
  word-break: break-word;
  overflow: visible;
`;

const TitleAccent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

const Subtitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(1.1rem, 2.4vw, 1.45rem);
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1.5;
  padding-bottom: 0;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.secondary};
  min-height: 1.75em;
  overflow: visible;
`;

const HeroCopy = styled(motion.p)`
  max-width: 36rem;
  font-size: 1.08rem;
  line-height: 1.75;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.muted};
`;

const CTAButton = styled(motion.button)`
  padding: 0.95rem 1.6rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.onAccent};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover, &:focus-visible {
    background: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`;

const DownloadButton = styled(motion.a)`
  padding: 0.95rem 1.6rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover, &:focus-visible {
    background: ${({ theme }) => theme.colors.accentSoft};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.text};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }

  svg {
    font-size: 0.85rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;

    ${CTAButton}, ${DownloadButton} {
      width: 100%;
      justify-content: center;
    }
  }
`;

const Hero: React.FC = () => {
  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="hero">
      <OrbPrimary aria-hidden="true" />
      <OrbSecondary aria-hidden="true" />
      <AccentSlash
        aria-hidden="true"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{ originY: 0 }}
      />
      <HeroContent>
        <ProfileRow
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileImage
            src={withBase('/profile.jpg')}
            alt="Shashank Shekhar Singh"
            width={88}
            height={88}
            loading="eager"
            decoding="sync"
          />
          <Availability>Open to roles</Availability>
        </ProfileRow>
        <Title
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Shashank{' '}
          <TitleAccent>Shekhar</TitleAccent>{' '}
          Singh
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <TypedText
            strings={[
              'Senior Software Engineer',
              'React • TypeScript • Node.js',
              'Java • Spring Boot • AI/LLM'
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
            backDelay={1500}
            smartBackspace
          />
        </Subtitle>
        <HeroCopy
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          I build high-scale web applications, lead frontend architecture, and create production-oriented AI experiences with React, Spring Boot, OpenAI, LangChain, and RAG.
        </HeroCopy>
        <ButtonContainer>
          <CTAButton
            onClick={handleProjectsClick}
            aria-label="Explore Shashank's projects"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            Explore Projects
          </CTAButton>
          <DownloadButton
            href={withBase('/ShashankResume.pdf')}
            download="Shashank-Resume.pdf"
            aria-label="Download Shashank's Resume"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
          >
            <FaDownload /> Download Resume
          </DownloadButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
