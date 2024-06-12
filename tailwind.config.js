// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#000023',
        'table-color':'#26273B'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #5FD8FF 0%, #9969FF 50%, #FF4B4B 100%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'xs': '500px', 
      },

    },
  },
  plugins: [],
}
