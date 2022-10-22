/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-main': '#387766',
        'light-green': '#C7D5B1',
        'green-font': '#5E8379',
        'cherry': '#D3AD9F',
        'base': '#F1EEE6',
        'egg': '#F6D8A9'
      },
      spacing: {
        '96%': '96%',
        '1%': '1%',
        '36%': '36%'
      },
      fontFamily: {
        'NotoSans': 'NotoSans-Bold'
      }
    },
  },
  plugins: [],
}