import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
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

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${({ theme }) => theme.shadows.soft};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-height: 56vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding: ${({ theme }) => theme.spacing.md};
    padding-right: calc(${({ theme }) => theme.spacing.sm} + 6px);
  }
`;

const QuoteIcon = styled.span`
  display: block;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.45;
  line-height: 1;
  margin-bottom: 0.5rem;
`;

const TestimonialText = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.95;

  p {
    margin-bottom: 1rem;
  }
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const TestimonialImage = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const AuthorTitle = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.95rem;
  margin-top: 0.2rem;
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: ${({ theme }) => theme.spacing.md};
    padding-bottom: ${({ theme }) => theme.spacing.sm};
    scroll-snap-type: x mandatory;

    & > * {
      flex: 0 0 90%;
      scroll-snap-align: start;
      min-width: 260px;
      box-sizing: border-box;
    }
  }
`;

const HighlightCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.025);
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: ${({ theme }) => theme.shadows.soft};
  min-height: 180px;
  min-width: 0;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 16px;
    padding: ${({ theme }) => theme.spacing.md};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }

  /* Prevent internal vertical scrollbars on small screens; allow card to grow */
  overflow: visible;
  height: auto;
  min-height: 0;

  h3 {
    color: ${({ theme }) => theme.colors.accent};
    margin-bottom: 0.75rem;
  }

  p {
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.92;
  }
`;

const testimonial = {
  text: "I consider myself fortunate to have had the opportunity to closely collaborate with Shashank for over a year. In that time, he has consistently stood out as an exceptional talent. Shashank's technical expertise and problem-solving abilities are truly remarkable. He consistently delivers well-rounded and meticulously researched solutions, demonstrating a keen eye for detail.\n\nOne of Shashank's notable strengths is his ability to thrive in a fast-paced environment while simultaneously managing multiple tasks. His efficient work style and exceptional time management skills ensure that deadlines are consistently met. Moreover, his aptitude for effective collaboration with cross-functional teams is invaluable. Shashank possesses the unique ability to communicate complex technical information to non-technical stakeholders in a clear and understandable manner.\n\nFurthermore, Shashank's commitment to being a team player is commendable. He actively shares his knowledge with his peers, contributing to the growth and development of the entire team. His willingness to support and assist others is truly inspiring.\n\nIn summary, I wholeheartedly recommend Shashank for any endeavor that requires a highly skilled, detail-oriented, and collaborative professional. He will undoubtedly make a significant and positive impact wherever he goes.",
  name: 'Shireen Roy',
  title: 'Principal Consultant at Genpact Headstrong Canada',
  image: '/shireenroy.jpeg'
};

const highlights = [
  {
    title: 'Leadership & Ownership',
    text: 'Led frontend modernization initiatives, mentored engineers, and helped improve release confidence through stronger engineering practices.'
  },
  {
    title: 'Recognition',
    text: 'Recognized as Employee of the Year in 2022 for outstanding technical contributions and successful automation initiatives.'
  },
  {
    title: 'Continuous Growth',
    text: 'Expanded into Java, Spring Boot, OpenAI APIs, LangChain and RAG through production-focused portfolio projects and hands-on learning.'
  },
  {
    title: 'Enterprise Impact',
    text: 'Delivered solutions for Adobe and PayPal programs, balancing performance, accessibility, scalability and maintainability.'
  }
];

const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection>
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Recognition & Impact
        </Title>

        <TestimonialCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <QuoteIcon>“</QuoteIcon>
          <TestimonialText>
            {testimonial.text.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </TestimonialText>
          <TestimonialFooter>
            <TestimonialImage
              src={process.env.PUBLIC_URL + testimonial.image}
              alt={testimonial.name}
              loading="lazy"
              decoding="async"
            />
            <TestimonialAuthor>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorTitle>{testimonial.title}</AuthorTitle>
            </TestimonialAuthor>
          </TestimonialFooter>
        </TestimonialCard>

        <HighlightsGrid>
          {highlights.map((item, index) => (
            <HighlightCard
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </HighlightCard>
          ))}
        </HighlightsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;