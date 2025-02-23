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
  grid-template-columns: 1fr 1fr;
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

const SkillsContainer = styled(motion.div)``;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Skill = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 8px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'TypeScript',
  'Agile',
  'CI/CD',
  'HTML5',
  'CSS3',
  'Git',
  'REST APIs'
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
              I'm a passionate Frontend Developer with a keen eye for creating elegant and efficient web solutions. 
              With extensive experience in modern web technologies and a track record of delivering high-impact projects, 
              I specialize in building responsive and user-friendly applications that drive business growth.
            </p>
            <p>
              My approach combines technical expertise with creative problem-solving, 
              ensuring that every project I handle not only meets but exceeds expectations. 
              I'm particularly proud of my contributions at Eclerx Services Limited, 
              where I've helped increase customer engagement and streamline processes through innovative solutions.
            </p>
          </Bio>
          <SkillsContainer
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3>Skills & Expertise</h3>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <Skill
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </Skill>
              ))}
            </SkillsGrid>
          </SkillsContainer>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;
