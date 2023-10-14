/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      },
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
      },

      colors: {
        primary: "#1E47FF",
      },
    },
  },
  plugins: [],
};
