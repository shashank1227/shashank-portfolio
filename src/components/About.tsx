import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  background: ${({ theme }) => theme.colors.card};
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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Bio = styled(motion.div)`
  p {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.8;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    margin-bottom: 0.35rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
  }
`;

const SkillsContainer = styled(motion.div)``;

const SectionLabel = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.accent};
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SkillGroup = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const SkillGroupTitle = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.75rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Skill = styled.span`
  background: rgba(0, 255, 157, 0.12);
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  font-size: 0.9rem;
`;

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Accessibility']
  },
  {
    title: 'Backend & Data',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'AI & Delivery',
    skills: ['OpenAI APIs', 'LangChain', 'RAG', 'Docker', 'AWS', 'CI/CD']
  }
];

const About: React.FC = () => {
  return (
    <AboutSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </Title>
        <Content>
          <Bio
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I’m a Senior Software Engineer with 5+ years of experience building enterprise-scale web applications for global teams. My work spans frontend architecture, performance optimization, accessibility, reusable component systems, and modern delivery practices.
            </p>
            <p>
              Over the last few years, I’ve led high-impact initiatives at Adobe and PayPal, modernizing large product surfaces and reducing repetitive engineering effort through automation and shared UI patterns. I’m now expanding my work into AI-powered full-stack products using Java, Spring Boot, OpenAI APIs, LangChain, and RAG.
            </p>
            <StatsGrid>
              <StatCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3>5+ Years</h3>
                <p>Building scalable web products across enterprise environments.</p>
              </StatCard>
              <StatCard initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <h3>AI Focus</h3>
                <p>Creating LLM-powered applications with retrieval and production-ready architecture.</p>
              </StatCard>
            </StatsGrid>
          </Bio>
          <SkillsContainer
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Core Strengths</SectionLabel>
            <SkillsGrid>
              {skillGroups.map((group, index) => (
                <SkillGroup
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <SkillGroupTitle>{group.title}</SkillGroupTitle>
                  <SkillList>
                    {group.skills.map((skill) => (
                      <Skill key={skill}>{skill}</Skill>
                    ))}
                  </SkillList>
                </SkillGroup>
              ))}
            </SkillsGrid>
          </SkillsContainer>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
