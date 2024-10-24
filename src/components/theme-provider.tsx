// components/theme-provider.tsx
'use client';

import React from 'react';

type ColorWithVariants = {
  DEFAULT: string;
  [key: string]: string;
};

type ThemeColors = {
  background: string;
  foreground: string;
  primary: ColorWithVariants;
  secondary: ColorWithVariants;
  muted: ColorWithVariants;
  [key: string]: string | ColorWithVariants;
};

export type Theme = {
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
      if (typeof value === 'string') {
        root.style.setProperty(`--${key}`, value);
      } else {
        Object.entries(value).forEach(([subKey, subValue]) => {
          root.style.setProperty(`--${key}-${subKey.toLowerCase()}`, subValue);
        });
      }
    });
  }, [theme]);

  return <>{children}</>;
};
