/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
      colors: {
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
        'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-gray': 'hsl(0, 0%, 95%)',
      },
      fontFamily: {
        'big-shoulders-display': ['"Big Shoulders Display"', 'cursive'],
        'lexend-deca': ['"Lexend Deca"', 'sans-serif'],
      },
  },
  plugins: [],
}

