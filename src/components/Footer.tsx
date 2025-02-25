import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.md} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContent>
        <Copyright>
          {currentYear} Shashank Shekhar Singh. All rights reserved.
        </Copyright>
        <SocialLinks>
          <SocialLink
            href="https://linkedin.com/in/shashesi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shashank's LinkedIn profile"
            whileHover={{ y: -3 }}
          >
            <FaLinkedin aria-label="LinkedIn icon" />
          </SocialLink>
          <SocialLink
            href="https://github.com/shashank1227"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shashank's GitHub profile"
            whileHover={{ y: -3 }}
          >
            <FaGithub aria-label="GitHub icon" />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;
