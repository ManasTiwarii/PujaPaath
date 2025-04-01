/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        vedic: {
          saffron: "#FF9933",
          ochre: "#CC7722",
          maroon: "#800000",
        },
      },
      fontFamily: {
        sanskrit: ["Noto Sans Devanagari", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
