import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
    overflow: hidden;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  align-items: stretch;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(6px);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
  max-height: 450px;
  padding: ${({ theme }) => theme.spacing.md};
  margin: 0 ${({ theme }) => theme.spacing.xs};
  flex: 0 0 320px;
  min-width: 280px;
  max-width: 520px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
    padding: ${({ theme }) => theme.spacing.sm};
    height: 450px;
    max-height: 450px;
    /* make mobile slides occupy container width (no peek) without using viewport units */
    flex: 0 0 100%;
    min-width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const MobileScroller = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  padding: 0 ${({ theme }) => theme.spacing.sm};

  & > * {
    scroll-snap-align: center;
    flex: 0 0 100%;
    box-sizing: border-box;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.7;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.secondary};
  padding: 6px 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  font-size: 0.9rem;
`;

const projects = [
  {
    title: 'Enterprise AI Knowledge Assistant',
    description: 'Built a RAG-based enterprise knowledge assistant using OpenAI models to deliver accurate, context-aware answers from documentation.',
    tech: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'LangChain', 'OpenAI', 'RAG']
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
  }
];

const Projects: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(typeof window !== 'undefined' && window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </Title>

        {isMobile ? (
          <MobileScroller>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectCard>
            ))}
          </MobileScroller>
        ) : (
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        )}
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
