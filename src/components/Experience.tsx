'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const TimelineItem = styled(motion.article)`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.md} 0;
  }
`;

const Meta = styled.div``;

const Duration = styled.p`
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 0.35rem;
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const Body = styled.div``;

const Role = styled.h3`
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.35rem;
`;

const Company = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const AchievementList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const Achievement = styled.li`
  font-size: 0.98rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.7em;
    width: 4px;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const experience = [
  {
    role: 'Senior Engineer',
    company: 'GlobalLogic Technologies (Client: Adobe)',
    location: 'Gurugram, India',
    duration: 'Apr 2025 – Present',
    achievements: [
      'Build enterprise-grade full-stack applications using React.js, TypeScript, Java, and Spring Boot, delivering reusable UI components and scalable backend services adopted across multiple product modules, cutting duplicate implementation effort by approximately 30%.',
      'Design and integrate secure RESTful APIs, enabling seamless communication between frontend and backend services for high-performance enterprise applications.',
      'Engineer Node.js automation utilities that streamline pricing token migration across 40+ regional configurations, reducing manual engineering effort by nearly 90% and improving deployment consistency.',
      'Optimize application performance through lazy loading, code splitting, backend API tuning, and component refactoring, improving Lighthouse performance scores by up to 20 points across key user journeys.',
      'Implement WCAG 2.1-compliant accessibility enhancements across enterprise applications, improving usability for keyboard navigation and assistive technology users.'
    ]
  },
  {
    role: 'Associate Process Manager (Software Engineering)',
    company: 'eClerx Services Ltd. (Client: PayPal)',
    location: 'Mumbai, India',
    duration: 'Apr 2023 – Apr 2025',
    achievements: [
      'Led frontend development for PayPal’s global rebranding initiative, modernizing more than 150 enterprise pages and improving UI consistency.',
      'Developed reusable component libraries and shared utilities that reduced duplicate implementation effort by nearly 35%.',
      'Built Node.js automation scripts that reduced repetitive validation activities by approximately 60%.',
      'Resolved WCAG compliance issues through semantic HTML, keyboard support and ARIA improvements for inclusive enterprise experiences.'
    ]
  },
  {
    role: 'Senior Analyst',
    company: 'eClerx Services Ltd. (Client: PayPal)',
    location: 'Mumbai, India',
    duration: 'Jul 2021 – Mar 2023',
    achievements: [
      'Designed and delivered responsive React applications using JavaScript and TypeScript for enterprise product teams.',
      'Applied performance optimization techniques such as code splitting, memoization and asset improvement to enhance user experience.',
      'Integrated RESTful APIs and backend services while maintaining a clean application architecture.',
      'Received Employee of the Year (2022) for outstanding technical contributions and strategic automation initiatives.'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionLabel
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Career
        </SectionLabel>
        <Title
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </Title>
        <Timeline>
          {experience.map((item, index) => (
            <TimelineItem
              key={item.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <Meta>
                <Duration>{item.duration}</Duration>
                <Location>{item.location}</Location>
              </Meta>
              <Body>
                <Role>{item.role}</Role>
                <Company>{item.company}</Company>
                <AchievementList>
                  {item.achievements.map((achievement) => (
                    <Achievement key={achievement}>{achievement}</Achievement>
                  ))}
                </AchievementList>
              </Body>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
