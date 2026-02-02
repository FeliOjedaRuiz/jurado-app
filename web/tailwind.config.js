const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-purple': {
          50: '#f4eefb',
          100: '#e6d8f6',
          200: '#ceb5ed',
          300: '#ae8be0',
          400: '#8f60d1',
          500: '#753dba',
          600: '#622599',
          700: '#521d7e',
          800: '#461a6b',
          900: '#3b1758',
          950: '#240b3b',
        },
      },
    },
  },
  plugins: [],
});
