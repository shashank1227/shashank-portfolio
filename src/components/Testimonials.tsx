'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { withBase } from '@/utils/paths';

const TestimonialsSection = styled.section`
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
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};

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

const TestimonialBlock = styled(motion.blockquote)`
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  padding: 0;
  border: none;
`;

const QuoteMark = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.accent};
  line-height: 1;
  margin-bottom: 0.75rem;
  opacity: 0.7;
`;

const TestimonialText = styled.div`
  font-size: 1.05rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 48rem;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TestimonialFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const TestimonialImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.cite`
  font-style: normal;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.text};
`;

const AuthorTitle = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
  margin-top: 0.2rem;
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const HighlightItem = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-right: 1px solid ${({ theme }) => theme.colors.border};

  &:nth-child(2n) {
    border-right: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-right: none;
  }

  h3 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.6rem;
  }

  p {
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.95rem;
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
        <SectionLabel
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Impact
        </SectionLabel>
        <Title
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Recognition & Impact
        </Title>

        <TestimonialBlock
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <QuoteMark>“</QuoteMark>
          <TestimonialText>
            {testimonial.text.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </TestimonialText>
          <TestimonialFooter>
            <TestimonialImage
              src={withBase(testimonial.image)}
              alt={testimonial.name}
              loading="lazy"
              decoding="async"
            />
            <TestimonialAuthor>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorTitle>{testimonial.title}</AuthorTitle>
            </TestimonialAuthor>
          </TestimonialFooter>
        </TestimonialBlock>

        <HighlightsGrid>
          {highlights.map((item, index) => (
            <HighlightItem
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </HighlightItem>
          ))}
        </HighlightsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
