// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',   // Tailwind will scan the HTML files
      './src/**/*.{js,jsx,ts,tsx}',  // Tailwind will scan JS, JSX, TS, and TSX files in the src directory
    ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
            inter: ['inter', 'serif'],
        }
      },
    },
    plugins: [],
  }