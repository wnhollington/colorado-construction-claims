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
          "linear-gradient(to right bottom, rgba(255, 159, 128, 0.4), rgba(255, 159, 128, 0.4)), url('https://res.cloudinary.com/wnhollington/image/upload/v1664330324/colorado-construction-claims/istockphoto-629822156-612x612_d5ixvv.jpg')",
      },
    }
  },
  variants: {},
  plugins: [],
}