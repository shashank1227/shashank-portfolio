import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  background: ${({ theme }) => theme.colors.card};
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
  background: ${({ theme }) => theme.colors.background};
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
  background: ${({ theme }) => theme.colors.background};
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
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ThankYouMessage = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  background: ${({ theme }) => `${theme.colors.background}66`};
  border-radius: 8px;
  backdrop-filter: blur(5px);
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const ErrorMessage = styled.div`
  color: #ff6b6b;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9rem;
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
    fetch("https://formspree.io/f/mvgzybrb", {
      method: "POST",
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
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
    }).catch(error => {
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
          Get in Touch
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
                Thank you for your message! I'll get back to you soon.
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
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextArea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
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
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, I'll try my best
              to get back to you!
            </ContactText>
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact;
