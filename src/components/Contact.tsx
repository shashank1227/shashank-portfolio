'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  background: transparent;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  scroll-margin-top: 2rem;
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
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 56px;
    height: 4px;
    margin: 0.65rem auto 0;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 999px;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 920px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Input = styled.input`
  padding: 0.95rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TextArea = styled.textarea`
  padding: 0.95rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-family: inherit;
  min-height: 140px;
  resize: vertical;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    outline: none;
    border-bottom-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SubmitButton = styled(motion.button)`
  margin-top: ${({ theme }) => theme.spacing.sm};
  padding: 0.95rem 1.5rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.onAccent};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  align-self: flex-start;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
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
  color: ${({ theme }) => theme.colors.secondary};
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.muted};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`;

const ThankYouMessage = styled(motion.div)`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.05rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ErrorMessage = styled.div`
  color: #c47a7a;
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
        <SectionLabel
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </SectionLabel>
        <Title
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let’s Connect
        </Title>
        <ContactContent>
          <ContactForm
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mvgzybrb"
            method="POST"
          >
            {status === 'success' ? (
              <ThankYouMessage
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
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
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            <ContactText>
              I’m currently exploring opportunities where I can contribute as a senior frontend or full-stack engineer, especially around modern React architectures, AI-powered products and scalable product delivery.
            </ContactText>
            <ContactDetails>
              <ContactItem href="mailto:shashanknet50@gmail.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                shashanknet50@gmail.com
              </ContactItem>
              <ContactItem href="tel:+919129853380" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91-9129853380
              </ContactItem>
              <ContactItem href="https://linkedin.com/in/shashesi" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                  <path d="M4 10h4v10H4z"></path>
                  <path d="M10 10h4v1.5h.1c.6-1.1 1.9-2.3 4-2.3 4.2 0 5 2.8 5 6.4V20h-4v-8.5c0-2-.1-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V20h-4z"></path>
                </svg>
                linkedin.com/in/shashesi
              </ContactItem>
              <ContactItem href="https://github.com/shashank1227" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
