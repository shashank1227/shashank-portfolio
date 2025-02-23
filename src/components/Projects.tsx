import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${({ theme }) => theme.colors.gradient};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const projects = [
  {
    title: 'ECM Keyword Search Automation',
    description: 'Developed an automated tool for efficient keyword searching across enterprise content management systems, significantly reducing manual search time.',
    tech: ['React', 'TypeScript', 'Node.js', 'REST API'],
    image: '/project1.jpg'
  },
  {
    title: 'URL Redirect Checker Tool',
    description: 'Created a tool to verify and validate URL redirects, ensuring proper navigation and reducing broken links in production environments.',
    tech: ['JavaScript', 'Express.js', 'MongoDB'],
    image: '/project2.jpg'
  },
  {
    title: 'Shared Page URL Extractor',
    description: 'Built a utility for extracting and managing shared page URLs, streamlining content management workflows.',
    tech: ['React', 'Node.js', 'RESTful APIs'],
    image: '/project3.jpg'
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectImage />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
