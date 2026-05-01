module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.sans],
        body: ['var(--font-body)', ...fontFamily.sans],
      },
      colors: {
        primary: 'hsl(142, 86%, 28%)',
        muted: 'hsl(240, 4.8%, 95.9%)',
        background: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};


