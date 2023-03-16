/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'mobile':{'max':'375px'},
      },
      colors:{
        'violet':'hsl(257, 40%, 49%)',
        'softmagenta':'hsl(300, 69%, 71%)'
      }
      
    },
  },
  plugins: [],
};
