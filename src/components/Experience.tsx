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
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
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
  border-radius: 8px;
  width: 90%;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }

  ${TimelineItem}:nth-child(odd) & {
    &::before {
      right: -60px;
    }
  }

  ${TimelineItem}:nth-child(even) & {
    &::before {
      left: -60px;
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
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Duration = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Achievement = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: 1rem;
  line-height: 1.6;
`;

const Experience: React.FC = () => {
  return (
    <ExperienceSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </Title>
        <Timeline>
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TimelineContent>
              <Role>Senior Frontend Developer</Role>
              <Company>Eclerx Services Limited</Company>
              <Duration>2023 - Present</Duration>
              <ul>
                <Achievement>Led the development of customer-facing applications, resulting in a 30% increase in user engagement</Achievement>
                <Achievement>Implemented automated testing and CI/CD pipelines, reducing deployment time by 50%</Achievement>
                <Achievement>Mentored junior developers and conducted code reviews to maintain high code quality standards</Achievement>
              </ul>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TimelineContent>
              <Role>Frontend Developer</Role>
              <Company>Eclerx Services Limited</Company>
              <Duration>2021 - 2023</Duration>
              <ul>
                <Achievement>Developed and maintained multiple client-facing web applications using React and TypeScript</Achievement>
                <Achievement>Automated manual processes, reducing workload by 40% through innovative solutions</Achievement>
                <Achievement>Collaborated with cross-functional teams to deliver projects on time and within budget</Achievement>
              </ul>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TimelineContent>
              <Role>Web Developer Intern</Role>
              <Company>Eclerx Services Limited</Company>
              <Duration>2020 - 2021</Duration>
              <ul>
                <Achievement>Developed and optimized 10+ responsive web pages, improving load time by 20% using HTML, CSS, JavaScript, and ReactJS</Achievement>
                <Achievement>Collaborated with a team of 4 developers and designers, resolving 90% of reported UI bugs and implementing new features</Achievement>
                <Achievement>Learning best practices in web development</Achievement>
              </ul>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
