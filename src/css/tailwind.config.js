module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        },
        orangeSecurity: {
          50: "#FFF8F0",
          100: "#FFEEDB",
          200: "#FFDAB3",
          300: "#FFC68A",
          400: "#FFA94D",
          500: "#FF8400",
          600: "#E67700",
          700: "#CC6900",
          800: "#A85700",
          900: "#7A3F00",
          950: "#572D00"
        },
        blueSecurity: {
          50: "#ECF2FE",
          100: "#D4E1FC",
          200: "#AEC7FA",
          300: "#83A9F7",
          400: "#588CF4",
          500: "#2E6FF1",
          600: "#0E51D7",
          700: "#0B3DA2",
          800: "#072A6E",
          900: "#041435",
          950: "#020B1D"
        },
        redSecurity: {
          50: "#FEE2E2",
          100: "#FCC9C9",
          200: "#FA8F8F",
          300: "#F75A5A",
          400: "#F41F1F",
          500: "#D00A0A",
          600: "#A50808",
          700: "#7F0606",
          800: "#530404",
          900: "#2C0202",
          950: "#130101"
        },
        graySecurity: {
          50: "#F0F3F4",
          100: "#E1E7EA",
          200: "#C3CFD5",
          300: "#A5B6C0",
          400: "#8BA1AD",
          500: "#6C8897",
          600: "#576E7A",
          700: "#3F505A",
          800: "#2A363C",
          900: "#151B1E",
          950: "#0B0D0F"
        },
        greenSecurity: {
          50: "#E9FBF0",
          100: "#CFF7DE",
          200: "#9FEFBC",
          300: "#6FE69B",
          400: "#40DE7A",
          500: "#22C55E",
          600: "#1B9D4B",
          700: "#147538",
          800: "#0D4E25",
          900: "#072713",
          950: "#04160A"
        }
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
      transitionProperty: {
        'height': 'height',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      display: ['responsive', 'group-hover', 'group-focus'],
      opacity: ['responsive', 'group-hover', 'group-focus'],
      height: ['responsive', 'group-hover', 'group-focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
