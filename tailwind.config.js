/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main_font: ["Julius Sans One", "sans-serif"],
        text_font: ["Roboto", "sans-serif"],
      },
      colors: {
        gold_text: "#FFD700",
      },
    },
  },

  plugins: [],
};
