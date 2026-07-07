import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
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
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &::before {
      left: 0;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:nth-child(odd) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-right: 0;
    padding-left: 30px;

    &:nth-child(odd) {
      padding-left: 30px;
    }
  }
`;

const TimelineContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 12px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 30px rgba(0, 255, 157, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }

  ${TimelineItem}:nth-child(odd) & {
    &::before {
      right: -58px;
    }
  }

  ${TimelineItem}:nth-child(even) & {
    &::before {
      left: -58px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;

    &::before {
      left: -40px !important;
    }
  }
`;

const Role = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Company = styled.h4`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Location = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Duration = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Achievement = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: 1rem;
  line-height: 1.7;
`;

const experience = [
  {
    role: 'Senior Engineer',
    company: 'GlobalLogic Technologies (Client: Adobe)',
    location: 'Gurugram, India',
    duration: 'Apr 2025 – Present',
    achievements: [
      'Built reusable React and TypeScript UI components that improved delivery consistency and reduced duplicate engineering effort by about 30%.',
      'Created Node.js automation utilities for large-scale pricing token migrations, significantly reducing manual effort and improving maintainability.',
      'Improved performance through code refactoring, lazy loading and bundle optimization across multiple user journeys.',
      'Collaborated with architects, designers and backend engineers to integrate secure REST APIs and strengthen release quality in Agile delivery cycles.'
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
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </Title>
        <Timeline>
          {experience.map((item, index) => (
            <TimelineItem
              key={item.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <Role>{item.role}</Role>
                <Company>{item.company}</Company>
                <Location>{item.location}</Location>
                <Duration>{item.duration}</Duration>
                <ul>
                  {item.achievements.map((achievement) => (
                    <Achievement key={achievement}>{achievement}</Achievement>
                  ))}
                </ul>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
