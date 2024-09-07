import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary) / 0.7)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary-color) / 0.7)",
        },
        outline: "hsl(var(--outline-color) / 1)",
        ghost: "hsl(var(--ghost-color) / 1)",
        link: {
          DEFAULT: "hsl(var(--link-color) / 1)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive-color) / 1)",
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ["hover", "focus", "disabled"],
      textColor: ["hover", "focus", "disabled"],
      opacity: ["disabled"],
      cursor: ["disabled"],
      borderColor: ["hover", "focus", "disabled"],
    },
  },
};

export default config;
