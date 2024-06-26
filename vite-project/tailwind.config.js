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
      backgroundImage: {
        'leaf': "url(/Untitled-design.png)"
      }
    },
  },
  plugins: [],
}