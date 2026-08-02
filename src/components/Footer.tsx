'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: transparent;
  padding: ${({ theme }) => theme.spacing.md} 0;
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterContent = styled.div`
  max-width: 1080px;
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
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.85rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContent>
        <Copyright>
          {currentYear} Shashank Shekhar Singh
        </Copyright>
        <SocialLinks>
          <SocialLink
            href="https://linkedin.com/in/shashesi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shashank's LinkedIn profile"
            whileHover={{ y: -2 }}
          >
            <FaLinkedin aria-label="LinkedIn icon" />
          </SocialLink>
          <SocialLink
            href="https://github.com/shashank1227"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shashank's GitHub profile"
            whileHover={{ y: -2 }}
          >
            <FaGithub aria-label="GitHub icon" />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;
