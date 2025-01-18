import type { Config } from "tailwindcss";
import { colors, sizes } from "./theme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 2s ease-in-out infinite",
        "float-slower": "float 3s ease-in-out infinite",
        "float-slowest": "float 4s ease-in-out infinite",
        'gradient': 'moveGradient 4s ease infinite',
        'coin-float': 'coinFloat 5s ease-in-out infinite',
        'coin-spin': 'coinSpin 6s linear infinite'
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-5px) translateX(-5px)" },
          "100%": { transform: "translateY(0) translateX(0)" },
        },
        coinFloat: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        coinSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        noise: "url(/backgrounds/noise.png)",
        noise2: "url(/backgrounds/noise-bg-2.png)",
      },
      maxWidth: sizes.container,
      width: sizes.container,
      height: sizes.height,
      minHeight: sizes.height,
      textColor: colors.text,
      colors: colors,
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif']
      },
      spacing: {
        section: '6rem',
        sectionLg: '8rem',
        sectionXl: '10rem',
        content: '2rem',
        contentLg: '3rem',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
