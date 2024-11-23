/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '50px', 'max': '767px'},
        // => @media (min-width: 50px and max-width: 767px)
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px)
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px)
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px)
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px)
      },
      fontFamily: {
        moul: ['Moul', 'sans-serif'],
        kumbh: ['Kumbh Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      scrollbarWidth: {
        none: 'none'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-none': {
            scrollbarWidth: 'none'
          },
        },
        ['responsive', 'hover']
      )
    }
  ],
}

