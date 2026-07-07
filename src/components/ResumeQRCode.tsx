import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { FaDownload } from 'react-icons/fa';
import { logResumeDownload } from '../utils/analytics';

// Detect if the device is mobile
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
};

const QRCodeContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 18px;
  padding: 14px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
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
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 999px;
  padding: 10px 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  will-change: transform, opacity;
  contain: layout style;
  
  &:hover, &:focus {
    transform: translateY(-2px);
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.24);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 16px;
    right: 16px;
    font-size: 0.85rem;
    padding: 8px 14px;
  }
`;

const QRTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.02em;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.8rem;
    margin-bottom: 8px;
  }
`;

const QRDescription = styled.p`
  margin: 8px 0 0;
  font-size: 0.76rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.78;
  line-height: 1.4;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 0.7rem;
    margin-top: 6px;
  }
`;

const IconButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.colors.text};
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
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
    font-size: 10px;
    top: -6px;
    right: -6px;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 12px;
  z-index: -1;
  animation: glow 3s infinite alternate;
  
  @keyframes glow {
    from {
      box-shadow: 0 0 10px 2px rgba(0, 255, 157, 0.2);
    }
    to {
      box-shadow: 0 0 20px 5px rgba(0, 255, 255, 0.4);
    }
  }
`;

const QRCodeWrapper = styled.div`
  position: relative;
  padding: 6px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  
  img {
    border-radius: 50% !important;
    border: 2px solid ${({ theme }) => theme.colors.primary} !important;
    will-change: transform;
  }
`;

// Preload profile image
const preloadImage = (src: string) => {
  const img = new Image();
  img.src = src;
};

const ResumeQRCode: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [mobile, setMobile] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  
  // Handle mobile check
  const handleMobileCheck = useCallback(() => {
    setMobile(isMobile());
  }, []);
  
  // Handle dismissal
  const handleDismiss = useCallback(() => {
    setIsDismissed(true);
    setIsVisible(false);
  }, []);
  
  const resumeUrl = `${process.env.PUBLIC_URL}/ShashankResume.pdf`;
  const profilePicture = `${process.env.PUBLIC_URL}/profile.jpg`;

  // Handle download event
  const handleDownload = useCallback((source: string) => {
    logResumeDownload(source);
    handleDismiss();
  }, [handleDismiss]);
  
  // Optimized animation settings
  const animationProps = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.98 },
    transition: { duration: 0.15, ease: 'easeOut' as const }
  };
  
  useEffect(() => {
    // Preload the profile image
    preloadImage(profilePicture);
    
    // Initial mobile check
    handleMobileCheck();
    
    // Passive event listener for resize
    const handleResize = () => {
      requestAnimationFrame(handleMobileCheck);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Set up IntersectionObserver for hero section
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
          <GlowEffect />
          <IconButton onClick={handleDismiss} aria-label="Close resume QR code" />
          <QRTitle>Scan for Resume</QRTitle>
          <QRCodeWrapper>
            <QRCodeSVG 
              value={`${window.location.origin}${resumeUrl}`}
              size={110}
              level="H"
              bgColor="transparent"
              fgColor="#9fb0d8"
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
          <QRDescription>Download my resume with a quick scan!</QRDescription>
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