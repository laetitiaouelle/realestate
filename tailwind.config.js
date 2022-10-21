/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'main-orange':'#FD5F0E',
      'main-purple':'#6637EE',
      'main-dark': '#191623',
      'bg':'#FFFAE9',
      'main-black-1':'#191623',
      'main-black-2':'#666270'
    }
  },
  plugins: [],
}
