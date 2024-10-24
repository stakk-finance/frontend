import { Theme } from '@/components/theme-provider';
import { colors } from './theme';

export const shadcnTheme: Theme = {
  colors: {
    background: colors.background.DEFAULT,
    foreground: colors.text.primary,
    primary: {
      DEFAULT: colors.primary.DEFAULT,
    },
    secondary: {
      DEFAULT: colors.accent.DEFAULT,
      foreground: colors.accent.foreground,
    },
    muted: {
      DEFAULT: colors.background.lighter,
      foreground: colors.text.muted,
    },
  },
};
