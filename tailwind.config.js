/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        robotomono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
