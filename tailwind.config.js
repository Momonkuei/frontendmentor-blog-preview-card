/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // screens: {
      //   xs: '480px', // 定義 xs 為手機寬度
      //   sm: '640px',
      //   // => @media (min-width: 640px) { ... }
      //   md: '768px',
      //   // => @media (min-width: 768px) { ... }
      //   lg: '1024px',
      //   // => @media (min-width: 1024px) { ... }
      //   xl: '1280px',
      //   // => @media (min-width: 1280px) { ... }
      //   '2xl': '1536px',
      //   // => @media (min-width: 1536px) { ... }
      // },
    },
    fontFamily: {
      figtree: ['Figtree', 'serif'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.line-clamp-3': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
        },
      })
    },
  ],
}
