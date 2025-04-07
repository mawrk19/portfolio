/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          cuteHeader: ['Caveat', 'cursive'],
          cuteBody: ['Quicksand', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  