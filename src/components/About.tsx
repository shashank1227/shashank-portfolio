'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  background: transparent;
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
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  max-width: 16ch;

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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const Bio = styled(motion.div)`
  p {
    font-size: 1.05rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Stat = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.accentSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  h3 {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.35rem;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.muted};
    margin: 0;
  }
`;

const SkillsContainer = styled(motion.div)``;

const SkillsHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.muted};
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SkillGroup = styled(motion.div)`
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const SkillGroupTitle = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.65rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.85rem;
`;

const Skill = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.92rem;
  position: relative;

  &:not(:last-child)::after {
    content: '·';
    margin-left: 0.85rem;
    color: ${({ theme }) => theme.colors.border};
  }
`;

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Accessibility']
  },
  {
    title: 'Backend & Data',
    skills: ['Java', 'Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'MongoDB']
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
        <SectionLabel
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About
        </SectionLabel>
        <Title
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </Title>
        <Content>
          <Bio
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              I’m a Senior Software Engineer with 5+ years of experience building enterprise-scale web applications for global teams. My work spans frontend architecture, performance optimization, accessibility, reusable component systems, and modern delivery practices.
            </p>
            <p>
              Over the last few years, I’ve led high-impact initiatives at Adobe and PayPal, modernizing large product surfaces and reducing repetitive engineering effort through automation and shared UI patterns. I’m now expanding my work into AI-powered full-stack products using Java, Spring Boot, OpenAI APIs, LangChain, and RAG.
            </p>
            <StatsRow>
              <Stat initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h3>5+ Years</h3>
                <p>Building scalable web products across enterprise environments.</p>
              </Stat>
              <Stat initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
                <h3>AI Focus</h3>
                <p>Creating LLM-powered applications with retrieval and production-ready architecture.</p>
              </Stat>
            </StatsRow>
          </Bio>
          <SkillsContainer
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SkillsHeading>Core Strengths</SkillsHeading>
            <SkillsGrid>
              {skillGroups.map((group, index) => (
                <SkillGroup
                  key={group.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
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
