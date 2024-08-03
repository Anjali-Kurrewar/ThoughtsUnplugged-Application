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
        'main-color1': '#673de6',
        'main-color2': '#fc5185',
        'main-color3': 'rgba(0, 0, 0, 0.8)',
        'text-color': '#2f1c6a',
      },
      fontFamily: {
        calistoga: ['Calistoga', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'team-box-1': "url('/sec1.webp')",
        'team-box-1': "url('/sec2.webp')",
        'team-box-3': "url('/sec3.webp')",
        'team-box-4': "url('/sec4.webp')",
        'team-box-5': "url('/sec5.webp')",
        'team-box-6': "url('/sec6.webp')",
        'team-box-7': "url('/sec7.webp')",
        'team-box-8': "url('/sec8.webp')",
        'team-box-9': "url('/sec9.webp')",
        'team-box-10': "url('/sec10.webp')",
      },
    },
  },
  plugins: [],
}

