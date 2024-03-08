/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        'A4': '500 / 600',
        '14': '100 / 250',
        '43': '4 / 3',
        '12': '4 / 5',


      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'midnight': '#030025',
        'violet': '#2D0043',
        'deep-aqua': '#006177',
        'baby-blue': '#E9FBFF',
        'pale-azure': '#C4F2FE',
        'dark-aqua': '#00313C',
      },
    },

  },
  plugins: [],
};
