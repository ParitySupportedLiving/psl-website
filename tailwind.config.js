/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const flatten = require('flatten-tailwindcss-theme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'psl-primary': '#213430',
        'psl-secondary': '#009368',
        'psl-primary-text': '#6F7775',
        'psl-secondary-text': '#DDDDDD',
        'psl-active-link': '#f37b1c',
        "psl-active-text": '#F5F5F5',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme, e, variants }) => {
      const colors = flatten(theme("colors"));
      const utilities = Object.entries(colors).reduce((res, [key, value]) => Object.assign(res, {
        [`.${e(`text-fill-${key}`)}`]: {
          '-webkit-text-fill-color': `${value}`,
        }
      }), {});
      addUtilities(utilities, variants('text-fill'));
    }),
  ],
};
