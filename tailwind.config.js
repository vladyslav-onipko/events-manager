/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      lg: { max: '1599px' },
      md: { max: '1279px' },
      sm: { max: '767px' },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
