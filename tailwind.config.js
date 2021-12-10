module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        cormorant: ['Cormorant Garamond'],
      },
      sizing: {
        '68': '17rem'
      },
      fontSize: {
        'tiny': '.6rem',
        'lg3xl': '2rem',
        '4xl': '2.25rem',
        'base4xl': '2.4rem',
        'lg4xl': '2.5rem',
        '5xl': '3rem',
        'lg5xl': '3.5rem',
        '6xl': '4rem',
        'lg6xl': '4.5rem',
        '7xl': '5rem',
        'lg7xl': '5.5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '10rem',
        '12xl': '12rem',
        '13xl': '13rem'
      },
      textColor: {
        'primary': '#6B6761'
      },
      minWidth: {
        '0': '0',
        '1': '10%',
        '2': '20%',
        '1/4': '25%',
        '3': '30%',
        '1/3': '33%',
        '4': '40%',
        '1/2': '50%',
        '6': '60%',
        '7': '70%',
        '3/4': '75%',
        '8': '80%',
        '9': '90%',
        'full': '100%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
