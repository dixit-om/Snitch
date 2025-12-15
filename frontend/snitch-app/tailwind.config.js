/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'snitch-black': '#000000',
        'snitch-gray': '#F5F5F5',
        'transparent-35': 'rgba(0, 0, 0, 0.35)',
      },
      fontFamily: {
        'hero-bold': ['NewHeroTRIAL-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

