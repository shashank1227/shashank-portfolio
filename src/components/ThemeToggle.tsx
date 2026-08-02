'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import type { ThemeMode } from '../hooks/useThemeMode';

interface ThemeToggleProps {
  mode: ThemeMode;
  onToggle: () => void;
}

const ToggleButton = styled(motion.button)`
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 200;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.onAccent};
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.text};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 3px;
  }

  svg {
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
`;

const ThemeToggle: React.FC<ThemeToggleProps> = ({ mode, onToggle }) => {
  const nextMode = mode === 'dark' ? 'light' : 'dark';

  return (
    <ToggleButton
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${nextMode} mode`}
      title={`Switch to ${nextMode} mode`}
      whileHover={{ y: -2, rotate: 8 }}
      whileTap={{ y: 0, rotate: 0 }}
    >
      {mode === 'dark' ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
    </ToggleButton>
  );
};

export default ThemeToggle;
