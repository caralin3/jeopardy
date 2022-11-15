/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Anton: ['Anton', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
        Merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
