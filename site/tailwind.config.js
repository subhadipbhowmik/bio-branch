/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        gray: {
          900: 'rgb(7, 56, 65)', // Custom color for footer section
        }
      },
    },
  },

  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode support for background color
      textColor: ['dark'], // Enable dark mode support for text color
    },
  },

  plugins: [],

  safelist: [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
  ],
};
