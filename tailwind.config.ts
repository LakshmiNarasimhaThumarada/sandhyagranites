import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "charcoal": "#1C1C1C",
        "surface": "#2A2A2A",
        "teal": "#3AACB0",
        "cream": "#E8E0CC",
        "white": "#FFFFFF",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
