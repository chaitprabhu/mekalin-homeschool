import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#0f0e0c",
          50: "#f7f6f3",
          100: "#edeae3",
          200: "#d4cfc4",
          300: "#b5ac9c",
          400: "#918676",
          500: "#756a5b",
          600: "#5e5447",
          700: "#4a4238",
          800: "#3d372f",
          900: "#342f28",
          950: "#1c1915"
        },
        parchment: {
          DEFAULT: "#f5f0e8",
          50: "#fdfcf8",
          100: "#f9f7f0",
          200: "#f5f0e8",
          300: "#ede4d3",
          400: "#e0d4bc"
        },
        accent: {
          DEFAULT: "#8b6914",
          light: "#c99a2e",
          dark: "#5c440d"
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "72ch"
          }
        }
      }
    }
  },
  plugins: []
};
export default config;
