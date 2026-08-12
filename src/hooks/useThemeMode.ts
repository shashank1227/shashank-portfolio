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

  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'light' || attr === 'dark') return attr;

  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

export const useThemeMode = () => {
  // SSR/static HTML always starts dark; sync to real preference after mount.
  // (useState initializers do not re-run on hydration, so don't read localStorage here.)
  const [mode, setMode] = useState<ThemeMode>('dark');
  const [hasSynced, setHasSynced] = useState(false);

  useEffect(() => {
    const preferred = getPreferredMode();
    setMode(preferred);
    document.documentElement.setAttribute('data-theme', preferred);
    setHasSynced(true);
  }, []);

  useEffect(() => {
    if (!hasSynced) return;

    window.localStorage.setItem(STORAGE_KEY, mode);
    document.documentElement.setAttribute('data-theme', mode);

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', mode === 'dark' ? '#0e0d0a' : '#f3e28a');
    }
  }, [mode, hasSynced]);

  const toggleMode = useCallback(() => {
    setMode((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme: DefaultTheme = mode === 'dark' ? darkTheme : lightTheme;

  return { mode, theme, toggleMode, setMode };
};
