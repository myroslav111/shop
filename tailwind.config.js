/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
// const color = require('tailwindcss/colors');

const constants = {
  purple: '#6160dc',
  'light-blue': '#03daf2',
  orange: '#ffb74a',
  green: '#6c946b',
  'dark-green': '#006044',
  'light-green': '#e6f2ef',
  black: '#222222',
  white: '#ffffff',
  red: '#f23c3d',
  gray: '#8e8ea1',
  'ligt-gray': '#e8e7e3',
  beige: '#a49b8f',
  'darck-beige': 'rgb(107,101,93)'
};

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: colors.transparent,
      ...constants
    },

    extend: {
      fontSize: {
        ms: '0.2rem',
        xs: '0.82rem',
        sm: '0.98rem',
        base: '1.15rem',
        lg: '1.22rem',
        x1: '1.36rem',
        '1.5xl': '1.5rem',
        '2xl': '1.725rem',
        '3xl': '2.155rem',
        '4xl': '2.58rem',
        '5xl': '3.45rem',
        '6xl': '4.3rem',
        '7xl': '5.17rem',
        '8xl': '6.9rem',
        '9xl': '9.2rem'
      },
      keyframes: {
        animationOpacity: {
          from: { opacity: 0.2 },
          to: { opacity: 1 }
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        opacity: 'animationOpacity .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out'
      }
    }
  },
  plugins: []
};
