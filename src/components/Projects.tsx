'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  background: transparent;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
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
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  display: inline-block;

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

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectRow = styled(motion.article)`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg} 1rem;
  margin: 0 -1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 3px solid transparent;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.hoverSurface};
    border-left-color: ${({ theme }) => theme.colors.accent};
    transform: translateX(4px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.md} 0.75rem;
    margin: 0 -0.75rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: color 0.2s ease;

  ${ProjectRow}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.75;
  font-size: 1rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  margin-top: 0.85rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover,
  &:focus-visible {
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.75rem;
  align-content: flex-start;
`;

const TechTag = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.88rem;
  letter-spacing: 0.01em;

  &:not(:last-child)::after {
    content: '/';
    margin-left: 0.75rem;
    color: ${({ theme }) => theme.colors.muted};
    opacity: 0.45;
  }
`;

const projects = [
  {
    title: 'Enterprise AI Knowledge Assistant',
    description: 'Built a RAG-based enterprise knowledge assistant using OpenAI models to deliver accurate, context-aware answers from documentation.',
    tech: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'LangChain', 'OpenAI', 'RAG'],
    links: [
      { label: 'GitHub', href: 'https://github.com/shashank1227/enterprise-ai-knowledge-assistant' }
    ]
  },
  {
    title: 'AI Documentation Copilot',
    description: 'Developed an AI knowledge assistant using RAG to enable semantic search across technical documentation.',
    tech: ['React', 'Java', 'Spring Boot', 'PostgresSQL', 'pgvector', 'LangChain', 'OpenAI', 'Docker']
  },
  {
    title: 'AI Code Review Assistant',
    description: 'Created an intelligent assistant that analyzes GitHub pull requests and provides AI-assisted recommendations for code quality, maintainability and best practices.',
    tech: ['React', 'Spring Boot', 'GitHub API', 'OpenAI', 'Docker']
  },
  {
    title: 'Weather App',
    description: 'Built a minimal Next.js weather app with city search, geolocation, hourly and 7-day forecasts, weather-aware icons, and light/dark mode using Open-Meteo — no API key required.',
    tech: ['Next.js', 'React', 'Open-Meteo', 'Geolocation API'],
    links: [
      { label: 'Live demo', href: 'https://shashank1227.github.io/WeatherApp/' },
      { label: 'GitHub', href: 'https://github.com/shashank1227/WeatherApp' }
    ]
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionLabel
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work
        </SectionLabel>
        <Title
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </Title>

        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectRow
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                {'links' in project && project.links && project.links.length > 0 && (
                  <ProjectLinks>
                    {project.links.map((item) => (
                      <ProjectLink
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.label} for ${project.title}`}
                      >
                        {item.label} →
                      </ProjectLink>
                    ))}
                  </ProjectLinks>
                )}
              </div>
              <TechStack>
                {project.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectRow>
          ))}
        </ProjectsList>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
