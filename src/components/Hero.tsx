import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(0, 255, 157, 0.1) 0%, rgba(0, 255, 255, 0.05) 50%, transparent 100%);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.accent};
`;

const CTAButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <ProfileImage
          src="/profile.jpg"
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
          Frontend Developer
        </Subtitle>
        <CTAButton
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
