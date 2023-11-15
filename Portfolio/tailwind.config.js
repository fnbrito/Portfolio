/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
     './Pages/**/*.cshtml',
     './Views/**/*.cshtml'
],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#4bc0af',
          50: '#f2fbf9',
          100: '#d2f5ec',
          200: '#a6e9db',
          300: '#71d7c5',
          400: '#4bc0af',
          500: '#2aa293',
          600: '#1f8277',
          700: '#1d6861',
          800: '#1b544f',
          900: '#1b4642',
          950: '#0a2927',
        },
        'secondary': { 
          DEFAULT: '#db4446',
          50: '#fdf3f3',
          100: '#fbe5e5',
          200: '#f9cfd0',
          300: '#f3aeaf',
          400: '#eb7e7f',
          500: '#db4446',
          600: '#ca383a',
          700: '#aa2b2d',
          800: '#8d2728',
          900: '#752728',
          950: '#3f1011',
        },
        'tertiary': {
          DEFAULT: '#edbb05',
          50: '#fefde8',
          100: '#fffcc2',
          200: '#fff488',
          300: '#ffe745',
          400: '#fdd512',
          500: '#edbb05',
          600: '#cd9101',
          700: '#a36605',
          800: '#87500c',
          900: '#724211',
          950: '#432205',
        }
      },
      fontSize: {
        '10xl': '8.5rem',
      }
    },
  },
  plugins: [],
}