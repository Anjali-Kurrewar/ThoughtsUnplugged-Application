/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#be7c68',
        'custom-white': '#f5f5f5',
        'custom-pink' : '#f5f5f5',
        'main-color1': '#ad6b75',
        'main-color2': '#ffe0c9',
      },
      fontFamily: {
        calistoga: ['Calistoga', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

