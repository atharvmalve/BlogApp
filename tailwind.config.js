/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'see-saw': {
          '0%, 100%': { transform: 'rotate(2deg)' },
          '50%': { transform: 'rotate(-2deg)' },
        },
        'border-fill': {
          '0%': { borderColor: 'theme(colors.cyan.600)' },
          '100%': { borderColor: 'theme(colors.cyan.900)' },
        },
      },
      animation: {
        'see-saw': 'see-saw 2s ease-in-out infinite',
        'border-fill': 'border-fill 1s ease-in-out forwards',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },

  plugins: [require('tailwind-scrollbar'),],
}

