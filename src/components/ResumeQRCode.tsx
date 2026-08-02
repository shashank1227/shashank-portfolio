'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { FaDownload } from 'react-icons/fa';
import { logResumeDownload } from '@/utils/analytics';
import { withBase } from '@/utils/paths';

const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
};

const QRCodeContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  background: ${({ theme }) =>
    theme.mode === 'dark' ? 'rgba(14, 13, 10, 0.94)' : 'rgba(243, 226, 138, 0.97)'};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(8px);
  will-change: transform, opacity;
  contain: layout style;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    bottom: 16px;
    right: 16px;
    padding: 12px;
    max-width: 170px;
  }
`;

const MobileButton = styled(motion.a)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.onAccent};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.85rem;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  will-change: transform, opacity;
  contain: layout style;

  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 16px;
    right: 16px;
    font-size: 0.8rem;
    padding: 8px 14px;
  }
`;

const QRTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.72rem;
    margin-bottom: 8px;
  }
`;

const QRDescription = styled.p`
  margin: 8px 0 0;
  font-size: 0.72rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.68rem;
    margin-top: 6px;
  }
`;

const IconButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  padding: 0;
  line-height: 1;

  &::before {
    content: "×";
    display: block;
    transform: translateY(-1px);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
    font-size: 10px;
    top: -6px;
    right: -6px;
  }
`;

const QRCodeWrapper = styled.div`
  position: relative;
  padding: 6px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};

  img {
    border-radius: 50% !important;
    border: 1px solid ${({ theme }) => theme.colors.border} !important;
    will-change: transform;
  }
`;

const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

const ResumeQRCode: React.FC = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [mobile, setMobile] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  const handleMobileCheck = useCallback(() => {
    setMobile(isMobile());
  }, []);

  const handleDismiss = useCallback(() => {
    setIsDismissed(true);
    setIsVisible(false);
  }, []);

  const resumeUrl = withBase('/ShashankResume.pdf');
  const profilePicture = withBase('/profile.jpg');

  const handleDownload = useCallback((source: string) => {
    logResumeDownload(source);
    handleDismiss();
  }, [handleDismiss]);

  const animationProps = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 8 },
    transition: { duration: 0.2, ease: 'easeOut' as const }
  };

  useEffect(() => {
    preloadImage(profilePicture);
    handleMobileCheck();

    const handleResize = () => {
      requestAnimationFrame(handleMobileCheck);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    heroRef.current = document.getElementById('hero');

    if (heroRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (!isDismissed) {
            setIsVisible(!entry.isIntersecting);
          }
        },
        { threshold: 0 }
      );

      observerRef.current.observe(heroRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (observerRef.current && heroRef.current) {
        observerRef.current.unobserve(heroRef.current);
        observerRef.current.disconnect();
      }
    };
  }, [handleMobileCheck, isDismissed, profilePicture]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && !mobile && (
        <QRCodeContainer {...animationProps}>
          <IconButton onClick={handleDismiss} aria-label="Close resume QR code" />
          <QRTitle>Scan for Resume</QRTitle>
          <QRCodeWrapper>
            <QRCodeSVG
              value={`${window.location.origin}${resumeUrl}`}
              size={110}
              level="H"
              bgColor="transparent"
              fgColor={theme.colors.text}
              imageSettings={{
                src: profilePicture,
                excavate: true,
                height: 32,
                width: 32,
              }}
              onClick={() => handleDownload('qr-scan')}
              style={{ cursor: 'pointer' }}
            />
          </QRCodeWrapper>
          <QRDescription>Scan to download resume</QRDescription>
        </QRCodeContainer>
      )}

      {isVisible && mobile && (
        <MobileButton
          href={resumeUrl}
          download="Shashank-Resume.pdf"
          {...animationProps}
          onClick={() => handleDownload('mobile-cta')}
          aria-label="Download resume"
        >
          <FaDownload /> Download Resume
        </MobileButton>
      )}
    </AnimatePresence>
  );
};

export default ResumeQRCode;
