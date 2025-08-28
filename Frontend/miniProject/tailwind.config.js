/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'my-image' : 'url(./src/images/my-background.png)'
      }
    },
  },
  plugins: [],
}

