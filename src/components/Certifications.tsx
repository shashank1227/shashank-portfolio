import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificationsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.card};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const RecognitionSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const RecognitionTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const RecognitionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const RecognitionImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const CertificationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const CertificationIssuer = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CertificationDate = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
`;

const RecognitionImageCard = styled(motion.button)`
  background: rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: 0;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const RecognitionImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
`;

const ImageMeta = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};

  h4 {
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.35rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.85;
  }
`;

const EducationCard = styled(CertificationCard)`
  background: rgba(255, 255, 255, 0.02);
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.82);
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
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const ModalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.accent};
  margin: 0;
`;

const CloseButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
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
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education & Certifications
        </Title>
        <CertificationsGrid>
          <EducationCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <CertificationTitle>{education.title}</CertificationTitle>
            <CertificationIssuer>{education.issuer}</CertificationIssuer>
            <CertificationDate>{education.date}</CertificationDate>
          </EducationCard>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => openImage(`${process.env.PUBLIC_URL}/${image.src}`, image.title)}
              >
                <RecognitionImage src={`${process.env.PUBLIC_URL}/${image.src}`} alt={image.title} />
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
