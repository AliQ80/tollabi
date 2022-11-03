/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: "'Lobster', cursive",
      },
    },
    darkSelector: '.mode-dark',
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive',
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive',
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive'],
  },
  darkMode: 'class',
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss-dark-mode')(),
  ],
}
