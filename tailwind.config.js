/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#005b96',
      'primary-dark': '#011f4b',
      'primary-light': '#6497b1',
      'light-gray': '#ededed',
      'dark-gray': '#adadad',
      'table-head': '#f2f2f2',
      'white': '#fff',
      'error': '#ff3333'
    },
    extend: {},
  },
  plugins: [],
}

