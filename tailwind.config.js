const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(230, 243, 255, 0.8), rgba(230, 243, 255, 0.8)), url('https://res.cloudinary.com/wnhollington/image/upload/v1663975567/colorado-construction-claims/header-image.jpg')",
      },
    }
  },
  variants: {},
  plugins: [],
}