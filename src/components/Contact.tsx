import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  scroll-margin-top: 2rem;
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
  text-align: center;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.cardDarker};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.cardDarker};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  border: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ContactText = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ThankYouMessage = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  background: ${({ theme }) => `${theme.colors.background}66`};
  border-radius: 8px;
  backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.95rem;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    fetch('https://formspree.io/f/mvgzybrb', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        Accept: 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          setStatus('success');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        } else {
          setStatus('error');
        }
      })
      .catch(() => {
        setStatus('error');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let’s Connect
        </Title>
        <ContactContent>
          <ContactForm
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mvgzybrb"
            method="POST"
          >
            {status === 'success' ? (
              <ThankYouMessage
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Thank you for your message. I’ll get back to you soon.
              </ThankYouMessage>
            ) : (
              <>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
                <TextArea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </SubmitButton>
                {status === 'error' && (
                  <ErrorMessage>
                    Oops! There was a problem submitting your form. Please try again.
                  </ErrorMessage>
                )}
              </>
            )}
          </ContactForm>

          <ContactInfo
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactText>
              I’m currently exploring opportunities where I can contribute as a senior frontend or full-stack engineer, especially around modern React architectures, AI-powered products and scalable product delivery.
            </ContactText>
            <ContactDetails>
              <ContactItem href="mailto:shashanknet50@gmail.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                shashanknet50@gmail.com
              </ContactItem>
              <ContactItem href="tel:+919129853380" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91-9129853380
              </ContactItem>
              <ContactItem href="https://linkedin.com/in/shashesi" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  <path d="M4 10h4v10H4z"></path>
                  <path d="M10 10h4v1.5h.1c.6-1.1 1.9-2.3 4-2.3 4.2 0 5 2.8 5 6.4V20h-4v-8.5c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V20h-4z"></path>
                </svg>
                linkedin.com/in/shashesi
              </ContactItem>
              <ContactItem href="https://github.com/shashank1227" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
                  <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.3A4.9 4.9 0 0 0 19 4.9 4.4 4.4 0 0 0 18.1 4c-.7-.2-2.2-.4-4.8 1.8A16.2 16.2 0 0 0 8 5.9C5.2 5.8 4.8 5.9 4.1 6a4.4 4.4 0 0 0-.9.9 4.9 4.9 0 0 0-.5 3.3c0 4.9 2.9 6 5.7 6.3-.6.6-.6 1.2-.5 2V21"></path>
                </svg>
                github.com/shashank1227
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
