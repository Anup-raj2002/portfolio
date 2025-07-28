/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#06B6D4",
        secondary: "#14B8A6",
        accent: "#F97316",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 0.6))",
      },
      boxShadow: {
        card: "0px 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
}