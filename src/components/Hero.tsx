import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  justify-content: flex-start;

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
  border: 4px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: block;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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

const CTAButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.2rem;
  transition: box-shadow 0.2s ease;
  outline: none;

  &:hover, &:focus {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 157, 0.3);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 255, 157, 0.3);
  }
`;

const DownloadButton = styled(motion.a)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  text-decoration: none;
  transition: box-shadow 0.2s ease;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 255, 157, 0.3);
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
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
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
          Frontend Developer
        </Subtitle>
        <ButtonContainer>
          <CTAButton
            as={motion.button}
            onClick={handleContactClick}
            aria-label="Get in Touch with Shashank"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              scale: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
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
                type: "spring",
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
