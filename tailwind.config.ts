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
      height: sizes,
      minHeight: sizes,
      colors: colors,
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif']
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
