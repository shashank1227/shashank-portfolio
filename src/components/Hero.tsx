import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import TypedText from './TypedText';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  justify-content: flex-start;
  background: rgba(255, 255, 255, 0.01);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: none;
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  text-align: left;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid transparent;
  background: ${({ theme }) => theme.colors.gradient};
  padding: 4px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: block;
  object-fit: cover;
  box-shadow: ${({ theme }) => theme.shadows.glow};
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  word-break: break-word;

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.accent};
`;

const HeroCopy = styled(motion.p)`
  max-width: 720px;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
`;

const CTAButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.2);

  &:hover, &:focus {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(15, 23, 42, 0.24);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(124, 156, 255, 0.27);
  }
`;

const DownloadButton = styled(motion.a)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(159, 176, 216, 0.35);
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  outline: none;
  backdrop-filter: blur(10px);

  &:hover, &:focus {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.16);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(124, 156, 255, 0.25);
  }

  svg {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.xs};

    ${CTAButton}, ${DownloadButton} {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
      white-space: nowrap;
      min-width: 0;
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
      <HeroContent>
        <ProfileImage
          src={process.env.PUBLIC_URL + '/profile.jpg'}
          alt="Shashank Shekhar Singh"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Shashank Shekhar Singh
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
            className="text-primary"
          />
        </Subtitle>
        <HeroCopy
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I build high-scale web applications, lead frontend architecture, and now create production-oriented AI experiences with React, Spring Boot, OpenAI, LangChain, and RAG.
        </HeroCopy>
        <ButtonContainer>
          <CTAButton
            as={motion.button}
            onClick={handleProjectsClick}
            aria-label="Explore Shashank's projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              scale: {
                type: 'spring',
                stiffness: 400,
                damping: 10
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </CTAButton>
          <DownloadButton
            href={`${process.env.PUBLIC_URL}/ShashankResume.pdf`}
            download="Shashank-Resume.pdf"
            aria-label="Download Shashank's Resume"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              scale: {
                type: 'spring',
                stiffness: 400,
                damping: 10
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download Resume
          </DownloadButton>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
