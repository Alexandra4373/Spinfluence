/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        play: ["Playfair Display", "serif"],
        merri: ["Merriweather", "serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },

      container: {
        padding: "2rem",
        center: true,
      },
      backgroundImage: {
        hero: "url('/src/assets/hero.png')",
        cta: "url('/src/assets/cta.jpg')",
      },

      colors: {
        primary: "#1E47FF",
        second: "rgba(22, 19, 62, 1)",
      },
      
    },
  },
  plugins: [],
};
