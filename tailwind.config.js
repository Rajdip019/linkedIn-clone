module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: true, // or 'media' or 'class'
  theme: {

    extend: {
      textColor: {
        skin:{
          main: 'var(--main)',
        }
      },
      backgroundColor: {
        skin:{
          main: 'var(--main)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
  
}
