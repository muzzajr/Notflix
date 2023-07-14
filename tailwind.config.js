/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        netflix_sans_light: ["NetflixSansLight", "sans-serif"],
        netflix_sans: ["NetflixSans", "sans-serif"],
        netflix_sans_medium: ["NetflixSans-Medium", "sans-serif"],
        netflix_sans_bold: ["NetflixSansBold", "sans-serif"],
      },
      fontSize: {
        clamp: "clamp(0.7rem, 1.2vw, 2rem)",
      },
      animation: {
        shrink: 'shrink 2.2s 10s forwards',
        hide: 'hide 1s 10s forwards',
      },
      keyframes: {
        shrink: {
        '0%': {transform: 'scale(1) translateY(0)'},
        '100%': {transform: 'scale(0.7) translateY(12rem)'},
        },
        hide: {
          '0%': {transform: 'translateY(0)', opacity: 1},
          '100%': {transform: 'translateY(30px)', opacity: 0},
          },
      }
    },
  },
  plugins: [],
}

