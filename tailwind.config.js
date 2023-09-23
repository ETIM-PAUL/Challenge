/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['"Montserrat"'],
        "clash-display" : ["Clash Display"],
        "unica": ["Unica One"]
      },
      colors: {
        'input-bg-color': 'rgba(255, 255, 255, 0.03)'
      },
    },
  },
  plugins: [require("daisyui")],
}