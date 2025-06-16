/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')], //nativewind is a library that allows you to use tailwind css in react native
  theme: {
    extend: {},
  },
  plugins: [],
}

