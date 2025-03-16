import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
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
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    margin: 0 auto; /* Center the slides */
  }

  .slick-slide {
    height: inherit;
    > div {
      height: 100%;
      padding: 0;
    }
  }

  .slick-dots {
    bottom: -40px;
    
    li button:before {
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.3;
      font-size: 8px;
    }
    
    li.slick-active button:before {
      color: ${({ theme }) => theme.colors.primary};
      opacity: 1;
    }
  }

  .slick-prev, .slick-next {
    display: none !important;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 10px 30px rgba(0, 255, 157, 0.3);
  }

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary + '40'};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.primary + '80'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const QuoteIcon = styled.span`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0.2;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  margin-left: -8px;
  font-family: 'Georgia', serif;
  position: relative;
  line-height: 0;
  height: 50px;
  display: block;
  transform: translateY(-15px);
  text-shadow: 2px 2px 15px rgba(0, 255, 157, 0.3);
  
  &::before {
    content: "\\201C"; /* Unicode for opening double quote */
    position: absolute;
    top: 30px;
    left: 0;
  }
`;

const TestimonialText = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-grow: 1;
  text-align: left;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: ${({ theme }) => theme.spacing.sm};
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
`;

const AuthorTitle = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
  margin-top: 4px;
`;

const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => direction === 'left' ? 'left: 0;' : 'right: 0;'} 
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
    display: none;
  }
`;

// Helper function to format testimonial text with paragraphs
const formatTestimonialText = (text: string) => {
  // Split by <br /> or <br/> tags and create paragraphs
  const paragraphs = text.split(/<br\s*\/?>/);
  return paragraphs.map((paragraph, index) => (
    <p key={index}>{paragraph.trim()}</p>
  ));
};

const testimonials = [
  {
    id: 1,
    text: "I consider myself fortunate to have had the opportunity to closely collaborate with Shashank for over a year. In that time, he has consistently stood out as an exceptional talent. Shashank's technical expertise and problem-solving abilities are truly remarkable. He consistently delivers well-rounded and meticulously researched solutions, demonstrating a keen eye for detail.<br /><br />One of Shashank's notable strengths is his ability to thrive in a fast-paced environment while simultaneously managing multiple tasks. His efficient work style and exceptional time management skills ensure that deadlines are consistently met. Moreover, his aptitude for effective collaboration with cross-functional teams is invaluable. Shashank possesses the unique ability to communicate complex technical information to non-technical stakeholders in a clear and understandable manner.<br /><br />Furthermore, Shashank's commitment to being a team player is commendable. He actively shares his knowledge with his peers, contributing to the growth and development of the entire team. His willingness to support and assist others is truly inspiring.<br /><br />In summary, I wholeheartedly recommend Shashank for any endeavor that requires a highly skilled, detail-oriented, and collaborative professional. He will undoubtedly make a significant and positive impact wherever he goes.",
    name: "Shireen Roy",
    title: "Principal Consultant at Genpact Headstrong Canada",
    image: "/shireenroy.jpeg",
  },
];

const NextArrow = (props: any) => (
  <ArrowButton direction="right" onClick={props.onClick} aria-label="Next Testimonial">
    <FaChevronRight />
  </ArrowButton>
);

const PrevArrow = (props: any) => (
  <ArrowButton direction="left" onClick={props.onClick} aria-label="Previous Testimonial">
    <FaChevronLeft />
  </ArrowButton>
);

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: testimonials.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: testimonials.length > 1,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: testimonials.length > 1,
    adaptiveHeight: true,
    swipeToSlide: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Testimonials
        </Title>
        <StyledSlider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <QuoteIcon />
                <TestimonialText>
                  {formatTestimonialText(testimonial.text)}
                </TestimonialText>
                <TestimonialFooter>
                  <TestimonialImage 
                    src={process.env.PUBLIC_URL + testimonial.image} 
                    alt={`Portrait of ${testimonial.name}, ${testimonial.title}, who provided a testimonial for Shashank`}
                  />
                  <TestimonialAuthor>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                  </TestimonialAuthor>
                </TestimonialFooter>
              </TestimonialCard>
            </div>
          ))}
        </StyledSlider>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 