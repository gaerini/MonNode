// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.page.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: "16px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#0BD4B4",
            },
            secondary: {
              DEFAULT: "#FFB1B1",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#0BD4B4",
            },
            secondary: {
              DEFAULT: "#FFB1B1",
            },
          },
        },
      },
    }),
  ],
};

export default config;
