export const colors = {
  background: {
    DEFAULT: '#222222',
    lighter: '#2a2a2a',
    darker: '#1a1a1a',
  },
  primary: {
    DEFAULT: '#3b62ff',
    light: '#6a8bff',
    dark: '#2a45b3',
    foreground: '#ffffff',
  },
  accent: {
    DEFAULT: '#b0bec5',
    light: '#cfd8dc',
    dark: '#90a4ae',
    foreground: '#000000',
  },
  text: {
    primary: '#ffffff',
    secondary: '#b0bec5',
    muted: '#757575',
  },
  border: {
    DEFAULT: '#333333',
    light: '#444444',
    dark: '#292929',
  },
};

export const sizes = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },
  content: {
    sm: '20rem',   // 320px
    md: '28rem',   // 448px
    lg: '32rem',   // 512px
    xl: '36rem',   // 576px
    '2xl': '42rem',  // 672px
    '3xl': '48rem',  // 768px
  },
  height: {
    header: '50px',
    mainSection: '700px',
  },
  spacing: {
    section: '6rem', // 96px
    sectionLg: '8rem', // 128px
    sectionXl: '10rem', // 160px
    content: '2rem', // 32px
    contentLg: '3rem', // 48px
  }
};

export const theme = {
  colors,
};

export default theme;
