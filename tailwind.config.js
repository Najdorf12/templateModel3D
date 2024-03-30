/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'title':["Michroma","sans-serif"],
        'title2': ["Oxanium","sans-serif"],
        'text': ["Rubik","sans-serif"]
      },
      colors: {
        "red": '#DA0000',
        "pink":"#CF0052",
        "purple":"#A2287F"
      },
    }
  },
  plugins: [],
}