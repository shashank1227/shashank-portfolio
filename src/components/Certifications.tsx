import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CertificationsSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
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

const CertificationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const CertificationTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const CertificationIssuer = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CertificationDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

const AchievementCard = styled(CertificationCard)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.card} 0%,
    rgba(255, 0, 255, 0.1) 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

const AchievementTitle = styled(CertificationTitle)`
  color: ${({ theme }) => theme.colors.secondary};
`;

const certifications = [
  {
    title: 'Advanced Frontend Development',
    issuer: 'upGrad',
    date: '2023'
  },
  {
    title: 'React & TypeScript Masterclass',
    issuer: 'Coursera',
    date: '2022'
  }
];

const achievements = [
  {
    title: 'Employee of the Year',
    issuer: 'Eclerx Services Limited',
    date: '2022'
  }
];

const Certifications: React.FC = () => {
  return (
    <CertificationsSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </Title>
        <CertificationsGrid>
          {certifications.map((cert, index) => (
            <CertificationCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <CertificationTitle>{cert.title}</CertificationTitle>
              <CertificationIssuer>{cert.issuer}</CertificationIssuer>
              <CertificationDate>{cert.date}</CertificationDate>
            </CertificationCard>
          ))}
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`achievement-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (certifications.length + index) * 0.2 }}
            >
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <CertificationIssuer>{achievement.issuer}</CertificationIssuer>
              <CertificationDate>{achievement.date}</CertificationDate>
            </AchievementCard>
          ))}
        </CertificationsGrid>
      </Container>
    </CertificationsSection>
  );
};

export default Certifications;
