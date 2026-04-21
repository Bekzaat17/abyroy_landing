import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rehab: {
          gold: "#D4AF37",    // Золотой из лого
          goldDark: "#B8962E",
          dark: "#2D2D2D",    // Темный из макета
          light: "#F8F9FA",   // Светлый фон
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'], // Используем стандартный шрифт Next.js для начала
      },
    },
  },
  plugins: [],
};
export default config;