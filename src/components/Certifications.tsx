'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { withBase } from '@/utils/paths';

const CertificationsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: transparent;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const SectionLabel = styled(motion.p)`
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    margin-top: 0.65rem;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 999px;
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const RecognitionSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const RecognitionTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const RecognitionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const RecognitionImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CertificationCard = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hoverSurface};
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.45rem;
`;

const CertificationIssuer = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.35rem;
`;

const CertificationDate = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  letter-spacing: 0.02em;
`;

const RecognitionImageCard = styled(motion.button)`
  background: transparent;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 0;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease;
  width: 100%;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

const RecognitionImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  filter: grayscale(0.25) contrast(1.05);
  transition: filter 0.25s ease;

  ${RecognitionImageCard}:hover & {
    filter: grayscale(0) contrast(1);
  }
`;

const ImageMeta = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};

  h4 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.muted};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  width: min(100%, 960px);
  max-height: 90vh;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 80vh;
  object-fit: contain;
  display: block;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-size: 1rem;
`;

const CloseButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const certifications = [
  {
    title: 'Full Stack Development Certification',
    issuer: 'upGrad',
    date: '2020'
  },
  {
    title: 'Advanced Learning in Java, Spring Boot & AI',
    issuer: 'Self-directed',
    date: '2024–2025'
  }
];

const education = {
  title: 'Bachelor of Engineering in Computer Science & Engineering',
  issuer: 'Chitkara University, Himachal Pradesh',
  date: '2017 – 2021'
};

const recognitions = [
  {
    title: 'Employee of the Year',
    issuer: 'eClerx Services Limited',
    date: '2022'
  },
  {
    title: 'Appreciation Certificates',
    issuer: 'Client & Leadership Recognition',
    date: 'Multiple engagements'
  }
];

const recognitionImages = [
  {
    src: '01_Certificate_of_Appreciation.jpg',
    title: 'Certificate of Appreciation',
    description: 'GlobalLogic recognition for contribution and ownership'
  },
  {
    src: '02_Rewards_Recognition_Jun-Aug25.jpg',
    title: 'Rewards & Recognition',
    description: 'Recognition for June–August 2025 impact'
  },
  {
    src: '03_Certificate_of_Recognition_Sept2025.jpg',
    title: 'September 2025 Recognition',
    description: 'Certificate of recognition for strong delivery'
  },
  {
    src: '04_Certificate_of_Recognition_Nov2025.jpg',
    title: 'November 2025 Recognition',
    description: 'Appreciation certificate for project excellence'
  },
  {
    src: '05_Certificate_of_Recognition_Dec2025.jpg',
    title: 'December 2025 Recognition',
    description: 'Recognition for consistent contribution'
  },
  {
    src: '06_Rewards_Recognition_Adobe.jpg',
    title: 'Rewards & Recognition – Adobe',
    description: 'Recognition tied to Adobe engagement delivery'
  },
  {
    src: 'Employee_of_the_Year_Award_eClerx22.jpg',
    title: 'Employee of the Year — eClerx',
    description: 'Employee of the Year award at eClerx Services (2022)'
  }
];

const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  const openImage = (src: string, title: string) => {
    setSelectedImage(src);
    setSelectedTitle(title);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedTitle('');
  };

  return (
    <CertificationsSection>
      <Container>
        <SectionLabel
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Credentials
        </SectionLabel>
        <Title
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education & Certifications
        </Title>
        <CertificationsGrid>
          <CertificationCard
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CertificationTitle>{education.title}</CertificationTitle>
            <CertificationIssuer>{education.issuer}</CertificationIssuer>
            <CertificationDate>{education.date}</CertificationDate>
          </CertificationCard>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <CertificationTitle>{cert.title}</CertificationTitle>
              <CertificationIssuer>{cert.issuer}</CertificationIssuer>
              <CertificationDate>{cert.date}</CertificationDate>
            </CertificationCard>
          ))}
        </CertificationsGrid>

        <RecognitionSection>
          <RecognitionTitle>Appreciation Certificates & Awards</RecognitionTitle>
          <RecognitionGrid>
            {recognitions.map((item, index) => (
              <CertificationCard
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <CertificationTitle>{item.title}</CertificationTitle>
                <CertificationIssuer>{item.issuer}</CertificationIssuer>
                <CertificationDate>{item.date}</CertificationDate>
              </CertificationCard>
            ))}
          </RecognitionGrid>

          <RecognitionImageGrid>
            {recognitionImages.map((image, index) => (
              <RecognitionImageCard
                key={image.src}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                onClick={() => openImage(withBase(`/${image.src}`), image.title)}
              >
                <RecognitionImage
                  src={withBase(`/${image.src}`)}
                  alt={image.title}
                  loading="lazy"
                  decoding="async"
                  width={480}
                  height={220}
                />
                <ImageMeta>
                  <h4>{image.title}</h4>
                  <p>{image.description}</p>
                </ImageMeta>
              </RecognitionImageCard>
            ))}
          </RecognitionImageGrid>
        </RecognitionSection>
      </Container>

      {selectedImage && (
        <ModalOverlay onClick={closeImage}>
          <ModalContent onClick={(event) => event.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{selectedTitle}</ModalTitle>
              <CloseButton type="button" onClick={closeImage} aria-label="Close image">
                ×
              </CloseButton>
            </ModalHeader>
            <ModalImage src={selectedImage} alt={selectedTitle} />
          </ModalContent>
        </ModalOverlay>
      )}
    </CertificationsSection>
  );
};

export default Certifications;
