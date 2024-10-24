// components/theme-provider.tsx
'use client';

import React from 'react';

type ThemeColors = {
  [key: string]: string;
};

type Theme = {
  colors: ThemeColors;
};

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: Theme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  React.useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);

  return <>{children}</>;
};
