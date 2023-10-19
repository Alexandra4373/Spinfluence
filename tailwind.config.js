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
      screens: {
        xs: "360px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
