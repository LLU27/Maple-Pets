/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './frontend/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        maplestory: ['Maplestory', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
