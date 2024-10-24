import { colors } from './theme';

export const shadcnTheme = {
  colors: {
    background: colors.background.DEFAULT,
    foreground: colors.text.primary,
    primary: {
      DEFAULT: colors.primary.DEFAULT,
      foreground: colors.primary.foreground,
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
