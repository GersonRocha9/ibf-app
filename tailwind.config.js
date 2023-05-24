/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx', './src/**/*.tsx', './src/**/*.ts'],

  theme: {
    extend: {
      fontFamily: {
        title: 'Poppins_700Bold',
        body: 'Poppins_400Regular',
      },
    },
  },
  plugins: [],
}
