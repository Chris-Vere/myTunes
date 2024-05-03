/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,tx,tsx}",
  ],
  theme: {
    extend: {
      animationFillMode: {
        none: "none",
        forwards: "forwards",
        backwards: "backwards",
        both: "both",
      },
      colors: {
        gray: {
          100: '#eeeeee',
          200: '#aeaeae',
          300: '#808080',
          350: '#5f5f5f',
          400: '#4d4d4d',
          500: '#39393b',
          600: '#3b3b3c',
          700: '#2c2c2c',
          800: '#232323',
          900: '#252526',
          1000: '#1f1f1f',
        },
        red: {
          100: '#fa586a',
          200: '#d60017',
          300: '#a60013',
        },
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animate-duration': (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
      matchUtilities(
        {
          "animation-fill-mode": (value) => ({
            animationFillMode: value
          })
        },
        { values: theme("animationFillMode") },
      )
      matchUtilities(
        {
          'animate-ease': (value) => ({
            animationTimingFunction: value,
          }),
        },
        { values: theme('transitionTimingFunction') }
      )
    }),
  ],
}

