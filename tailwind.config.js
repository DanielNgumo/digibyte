/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "Syne", "system-ui", "sans-serif"],
      },
      colors: {
        portfolio: {
          bg: "#ffffff",
          fg: "#0a0a0a",
          muted: "#787878",
          border: "#e8e8e8",
          surface: "#f5f5f5",
        },
      },
    },
  },
  plugins: [],
};
