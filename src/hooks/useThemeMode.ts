'use client';

import { useCallback, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from '@/styles/theme';
import type { DefaultTheme } from 'styled-components';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'portfolio-theme';

const getPreferredMode = (): ThemeMode => {
  if (typeof window === 'undefined') return 'dark';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const useThemeMode = () => {
  const [mode, setMode] = useState<ThemeMode>('dark');

  useEffect(() => {
    setMode(getPreferredMode());
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute('data-theme', mode);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', mode === 'dark' ? '#0e0d0a' : '#f3e28a');
    }
  }, [mode]);

  const toggleMode = useCallback(() => {
    setMode((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme: DefaultTheme = mode === 'dark' ? darkTheme : lightTheme;

  return { mode, theme, toggleMode, setMode };
};
