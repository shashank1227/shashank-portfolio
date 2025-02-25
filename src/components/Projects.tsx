import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const ProjectsSection = styled.section`
  background: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
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
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
  }

  .slick-slide {
    height: inherit;
    > div {
      height: 100%;
      padding: 0 ${({ theme }) => theme.spacing.xs};
    }
  }

  .slick-dots {
    bottom: -40px;
    li button:before {
      color: ${({ theme }) => theme.colors.primary};
    }
    li.slick-active button:before {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .slick-arrow {
      display: none !important;
    }
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 15px;
  overflow: hidden;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  margin: 0 ${({ theme }) => theme.spacing.xs};
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0;
    padding: ${({ theme }) => theme.spacing.sm};
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 10px 30px rgba(0, 255, 157, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const TechTag = styled.span`
  background: rgba(0, 255, 157, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => direction === 'left' ? 'left: -50px;' : 'right: -50px;'}
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${({ direction }) => direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const projects = [
  {
    title: 'Enterprise Search Analytics Dashboard',
    description: 'Built a real-time keyword analytics dashboard, reducing manual effort by 95%, improving targeting accuracy by 30%.',
    tech: ['React', 'TypeScript', 'Elasticsearch', 'AWS Lambda'],
  },
  {
    title: 'SEO Health Monitoring Platform',
    description: 'Automated SEO audits, tracking 10k+ URLs/month, cutting audit time by 60%, increasing organic traffic by 15%.',
    tech: ['React', 'D3.js', 'Node.js', 'Puppeteer'],
  },
  {
    title: 'ECM Keyword Search Automation',
    description: 'Automated keyword searches, reducing manual effort by 95%, benefiting 500+ team members.',
    tech: ['Node.js'],
  },
  {
    title: 'URL Redirect Checker Tool',
    description: 'Monitored 10,000+ URLs monthly, reducing maintenance time by 40%, increasing site traffic by 15%.',
    tech: ['Node.js'],
  },
  {
    title: 'Shared Page URL Extractor',
    description: 'Improved audit accuracy by 30%, streamlining URL checks across 1000+ pages.',
    tech: ['Node.js'],
  },
];

const NextArrow = (props: any) => (
  <ArrowButton direction="right" onClick={props.onClick} aria-label="Next Project">
    <FaChevronRight />
  </ArrowButton>
);

const PrevArrow = (props: any) => (
  <ArrowButton direction="left" onClick={props.onClick} aria-label="Previous Project">
    <FaChevronLeft />
  </ArrowButton>
);

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
          swipeToSlide: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          swipeToSlide: true,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

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
        <StyledSlider {...settings}>
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
                {project.tech.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
            </ProjectCard>
          ))}
        </StyledSlider>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
