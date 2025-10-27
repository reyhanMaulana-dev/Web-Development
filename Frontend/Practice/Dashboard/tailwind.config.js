/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      background: '#081028',
      accent1: '#8951FF',
      accent2: '#21C3FC',
      accent3: '#0E43FB',
      textmain: '#FFFFFF',
      textsecondary: '#A0AEC0',
      },
    },
  },
  plugins: [],
}