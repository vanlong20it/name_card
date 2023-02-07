/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        black: "#121212",
        white: "#fafafa",
      },
    },
  },
  plugins: [],
};
