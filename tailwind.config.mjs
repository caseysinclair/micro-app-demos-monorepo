/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(15deg) scale(1.3)' },
          '50%': { transform: 'rotate(-13deg) scale(1.4)' },
          '85%': { transform: 'rotate(10deg) scale(1.2)' }
        },
        pop: {
          '0%, 100%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1.2)' },
          '40%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(1.2)' }
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
        pop: 'pop 1s ease-in-out'
      }
    }
  },
  plugins: []
}
