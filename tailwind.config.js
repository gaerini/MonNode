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
              DEFAULT: "#54A3FF",
            },
            secondary: {
              DEFAULT: "#FFE24B",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#54A3FF",
            },
            secondary: {
              DEFAULT: "#FFE24B",
            },
          },
        },
      },
    }),
  ],
};

export default config;
