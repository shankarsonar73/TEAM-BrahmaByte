/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      customBlue: 'rgb(31, 81, 255)',
    },},
  },
  plugins: [],
}
