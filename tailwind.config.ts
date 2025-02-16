import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gray-1000": "#1a1a1a", // Custom gray color
        "background-200": "#f0f0f0", // Custom background color
      },
      spacing: {
        4.5: "1.125rem", // Custom spacing
      },
      fontSize: {
        "4xl": "2.5rem", // Custom font size
      },
    },
  },
  plugins: [],
} satisfies Config;
