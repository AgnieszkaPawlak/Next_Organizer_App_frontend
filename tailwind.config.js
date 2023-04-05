/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#CDD3F5',
      'primary-blue': '#C5CBEB',
      blue: '#8191EE',
      'dark-blue': '#3A416B',
      blue: '#9A9FB8',
      white: '#FFFFFF',
      black: '#000000',
      red: '#FB8878',
    },

    extend: {
      boxShadow: {
        'no-inset-box': ' 0px 0px 30px -9px rgba(51, 56, 54, 1);)',
        'inset-box': ' inset 0px 0px 30px -9px rgba(51, 56, 54, 1)',
      },
      backgroundImage: {
        'not-found': "url('/img/notFound.png')",
        pins: "url('/img/pins.png')",
        dairy: "url('/img/dairy.jpg')",
        arm: "url('/img/arm.jpg')",
      },
    },
  },
  plugins: [],
};
