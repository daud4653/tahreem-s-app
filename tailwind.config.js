/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        twinkle: 'twinkle 2s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        sparkle: 'sparkle 1.5s ease-out forwards',
        'fade-in': 'fade-in 1.5s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'message-appear': 'message-appear 0.3s ease-out',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        sparkle: {
          '0%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
          '100%': { opacity: '0', transform: 'scale(0) rotate(360deg)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.8)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'message-appear': {
          from: { opacity: '0', transform: 'translateY(-50%) scale(0.9)' },
          to: { opacity: '1', transform: 'translateY(-50%) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
