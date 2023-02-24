/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'core': ['Source Sans Pro', 'sans-serif'],
        'mono': ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
