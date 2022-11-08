/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
   
      },
      height: {
  
      },
      width: {

      },

      margin: {
        

      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    },
 
  },
  plugins: [],
}