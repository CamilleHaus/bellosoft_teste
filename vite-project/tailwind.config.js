/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#BC8363"
      },
      fontFamily: {
        "tenor": ['Tenor sans', 'sans-serif']
      },
      backgroundImage: {
        'leaf': "url(/assets/leaf4.png)"
      }
    },
  },
  plugins: [],
}