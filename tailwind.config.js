/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'light-green': '#7AA65A',
      'red': '#A65557'
    },
    fontSize: {
      'xsm': ['11px', {
        lineHeight: '13.31px',
        fontWeight: '400',
      }],
      'sm': ['13px', {
        lineHeight: '16px',
        fontWeight: '400'
      }],
      'md': ['16px', {
        lineHeight: '19.36px',
        fontWeight: '400',
      }],
      'md-selected': ['16px', {
        lineHeight: '19.36px',
        fontWeight: '700'
      }],
      'lg': [ '34px', {
        lineHeight: '40px',
        fontWeight: '700'
      }],
      'xlg': ['60px', {
        lineHeight: '61px',
        fontWeight: '700'
      }]
    },
    extend: {
      backgroundImage: {
        'hero' : "url('/img/hero-background.png')"
      }
    }
  },
  plugins: [],
}