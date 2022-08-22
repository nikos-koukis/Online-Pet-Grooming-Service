/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'adminbg1Nav': '#3c4b64',
      'adminbg2Nav': '#212333',
      'white': '#fff',
      'black': '#000',
    },
  },
  plugins: [],

}
